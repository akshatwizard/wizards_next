// Shared email-sending utility for all form routes (contact, careers, sector
// interest, quick-contact). Every form sends to exactly these two addresses
// and no others — that's a deliberate, explicit choice, not a default.
export const TEAM_EMAILS = ["akshat.gd@gmail.com", "ravikhtn18@gmail.com"];

export function getFromEmail() {
    return process.env.RESEND_FROM_EMAIL || "noreply@wizards.co.in";
}

type SendEmailArgs = {
    to: string[];
    fromName: string;
    subject: string;
    html: string;
    replyTo?: string;
};

export async function sendEmail({ to, fromName, subject, html, replyTo }: SendEmailArgs): Promise<{ ok: true } | { ok: false; error: string }> {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not set in the environment.");
        return { ok: false, error: "Email service is not configured yet. Please try again later." };
    }

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: `${fromName} <${getFromEmail()}>`,
            to,
            ...(replyTo ? { reply_to: replyTo } : {}),
            subject,
            html,
        }),
    });

    if (!res.ok) {
        const errorText = await res.text();
        console.error("Resend API error:", errorText);
        return { ok: false, error: "Could not send the email right now. Please try again." };
    }

    return { ok: true };
}

// Minimal HTML-escaping so form input can never break email markup or inject content.
export function escapeHtml(value: string): string {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
