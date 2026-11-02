import { NextResponse } from "next/server";
import { TEAM_EMAILS, sendEmail } from "@/lib/email";
import { buildTeamNotificationEmail, buildAcknowledgementEmail } from "@/lib/email-templates";
import { isSpamSubmission, isValidEmail, isValidPhone, isReasonableLength } from "@/lib/spam-check";

// Handles the homepage contact form, the /contact page, and every sector's
// interest form — all three post here with the same shape, optionally
// carrying a `service` field to say which sector/page it came from.

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, email, service, message, honeypot, formRenderedAt, pageUrl } = body ?? {};
        const src = (k: string) => (typeof body?.[k] === "string" ? String(body[k]).slice(0, 500) : "");

        // ── Spam checks — run before validation so bots get a generic
        // rejection rather than field-specific feedback that helps them adapt.
        const spamCheck = isSpamSubmission({ honeypot, formRenderedAt, message });
        if (spamCheck.spam) {
            console.warn("Contact form submission rejected as spam:", spamCheck.reason);
            // Respond as if it succeeded — never tell a bot what tripped it.
            return NextResponse.json({ success: true });
        }

        // ── Field validation
        if (!isReasonableLength(name, { min: 2, max: 120 })) {
            return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
        }
        if (!isValidEmail(email)) {
            return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
        }
        if (!isValidPhone(phone)) {
            return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
        }
        if (!isReasonableLength(message, { min: 10, max: 4000 })) {
            return NextResponse.json({ error: "Please write a message of at least 10 characters." }, { status: 400 });
        }

        const formLabel = service ? String(service) : "Contact Form";

        const { subject, html } = buildTeamNotificationEmail({
            formLabel,
            fields: [
                { label: "Name", value: name },
                { label: "Phone", value: phone || "Not provided" },
                { label: "Email", value: email },
                { label: "Service interested in", value: service || "Not specified" },
                { label: "Message", value: message },
            ],
            submitterEmail: email,
            pageUrl,
        });

        const teamResult = await sendEmail({
            to: TEAM_EMAILS,
            fromName: "Wizards Next Website",
            subject,
            html,
            replyTo: email,
        });

        if (!teamResult.ok) {
            return NextResponse.json({ error: teamResult.error }, { status: 502 });
        }

        // Acknowledgement to the submitter — best-effort. If this leg fails,
        // the lead has already reached the team, so we still report success
        // to the user rather than making them think nothing went through.
        const ack = buildAcknowledgementEmail({
            name,
            context: formLabel.toLowerCase().includes("sector interest") ? "sector-interest" : "contact",
        });
        const ackResult = await sendEmail({
            to: [email],
            fromName: "Wizards Next",
            subject: ack.subject,
            html: ack.html,
        });
        if (!ackResult.ok) {
            console.error("Acknowledgement email failed to send:", ackResult.error);
        }

        // CRM intake (app.insightsum.com) — best-effort, never affects the form.
        // Skipped entirely until LEADS_INTAKE_SECRET is set in the environment.
        await pushLeadToCrm({
            name, email, phone, message, service, page_url: pageUrl,
            utm_source: src("utm_source"), utm_medium: src("utm_medium"), utm_campaign: src("utm_campaign"),
            utm_term: src("utm_term"), utm_content: src("utm_content"),
            referrer: src("referrer"), landing_page: src("landing_page"),
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Contact form error:", err);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}

async function pushLeadToCrm(lead: Record<string, unknown>) {
    const secret = process.env.LEADS_INTAKE_SECRET;
    if (!secret) return;
    const url = process.env.LEADS_INTAKE_URL || "https://app.insightsum.com/api/leads/intake";
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Intake-Secret": secret },
            body: JSON.stringify(lead),
            signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) console.error("CRM lead intake failed:", res.status);
    } catch (err) {
        console.error("CRM lead intake error:", err instanceof Error ? err.message : err);
    }
}
