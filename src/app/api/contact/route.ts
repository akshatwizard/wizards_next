import { NextResponse } from "next/server";

// Sends contact form submissions via Resend's REST API directly (no SDK
// install required). Needs RESEND_API_KEY set in your environment.
// RESEND_FROM_EMAIL must be an address on a domain verified in Resend —
// defaults to noreply@wizards.co.in if not set, update as needed.

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, email, service, message } = body ?? {};

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "noreply@wizards.co.in";
        const TO_EMAIL = "leads@wizards.co.in";

        if (!RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not set in the environment.");
            return NextResponse.json(
                { error: "Email service is not configured yet. Please try again later." },
                { status: 500 }
            );
        }

        const emailRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: `Wizards Next Website <${FROM_EMAIL}>`,
                to: [TO_EMAIL],
                reply_to: email,
                subject: `New enquiry from ${name}`,
                html: `
                    <h2>New contact form submission</h2>
                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Service interested in:</strong> ${escapeHtml(service || "Not specified")}</p>
                    <p><strong>Message:</strong></p>
                    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
                `,
            }),
        });

        if (!emailRes.ok) {
            const errorText = await emailRes.text();
            console.error("Resend API error:", errorText);
            return NextResponse.json(
                { error: "Could not send your message right now. Please try again." },
                { status: 502 }
            );
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

// Minimal HTML-escaping so form input can't break the email markup.
function escapeHtml(value: string) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
