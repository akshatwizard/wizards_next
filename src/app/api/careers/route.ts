import { NextResponse } from "next/server";
import { TEAM_EMAILS, sendEmail } from "@/lib/email";
import { buildTeamNotificationEmail, buildAcknowledgementEmail } from "@/lib/email-templates";
import { isSpamSubmission, isValidEmail, isValidPhone, isReasonableLength } from "@/lib/spam-check";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, role, portfolioLink, message, honeypot, formRenderedAt, pageUrl } = body ?? {};

        const spamCheck = isSpamSubmission({ honeypot, formRenderedAt, message });
        if (spamCheck.spam) {
            console.warn("Careers form submission rejected as spam:", spamCheck.reason);
            return NextResponse.json({ success: true });
        }

        if (!isReasonableLength(name, { min: 2, max: 120 })) {
            return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
        }
        if (!isValidEmail(email)) {
            return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
        }
        if (!isValidPhone(phone)) {
            return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
        }
        if (!isReasonableLength(role, { min: 2, max: 120 })) {
            return NextResponse.json({ error: "Please specify the role you're applying for." }, { status: 400 });
        }
        if (portfolioLink && !isReasonableLength(portfolioLink, { max: 500 })) {
            return NextResponse.json({ error: "That portfolio link looks too long — please double check it." }, { status: 400 });
        }

        const { subject, html } = buildTeamNotificationEmail({
            formLabel: `Careers Application — ${role}`,
            fields: [
                { label: "Role", value: role },
                { label: "Name", value: name },
                { label: "Email", value: email },
                { label: "Phone", value: phone || "Not provided" },
                { label: "Portfolio/Resume link", value: portfolioLink || "Not provided" },
                { label: "Message", value: message || "—" },
            ],
            submitterEmail: email,
            pageUrl,
        });

        const teamResult = await sendEmail({
            to: TEAM_EMAILS,
            fromName: "Wizards Next Careers",
            subject,
            html,
            replyTo: email,
        });

        if (!teamResult.ok) {
            return NextResponse.json({ error: teamResult.error }, { status: 502 });
        }

        const ack = buildAcknowledgementEmail({ name, context: "careers" });
        const ackResult = await sendEmail({
            to: [email],
            fromName: "Wizards Next Careers",
            subject: ack.subject,
            html: ack.html,
        });
        if (!ackResult.ok) {
            console.error("Acknowledgement email failed to send:", ackResult.error);
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Careers form error:", err);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
