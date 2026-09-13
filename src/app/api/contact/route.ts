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
        const { name, phone, email, service, message, honeypot, formRenderedAt } = body ?? {};

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

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Contact form error:", err);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
