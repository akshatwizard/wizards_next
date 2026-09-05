import { NextResponse } from "next/server";

// Same pattern as /api/contact — sends via Resend's REST API directly.
// Routed to the same lead inbox for now; point TO_EMAIL at a dedicated
// hiring address (e.g. careers@wizards.co.in) once one exists.

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, role, portfolioLink, message } = body ?? {};

        if (!name || !email || !role) {
            return NextResponse.json(
                { error: "Name, email, and the role you're applying for are required." },
                { status: 400 }
            );
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "noreply@wizards.co.in";
        const TO_EMAIL = "leads@wizards.co.in";

        if (!RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not set in the environment.");
            return NextResponse.json(
                { error: "Application service is not configured yet. Please try again later." },
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
                from: `Wizards Next Careers <${FROM_EMAIL}>`,
                to: [TO_EMAIL],
                reply_to: email,
                subject: `New application: ${role} — ${name}`,
                html: `
                    <h2>New job application</h2>
                    <p><strong>Role:</strong> ${escapeHtml(role)}</p>
                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
                    <p><strong>Portfolio/Resume link:</strong> ${escapeHtml(portfolioLink || "Not provided")}</p>
                    <p><strong>Message:</strong></p>
                    <p>${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</p>
                `,
            }),
        });

        if (!emailRes.ok) {
            const errorText = await emailRes.text();
            console.error("Resend API error:", errorText);
            return NextResponse.json(
                { error: "Could not submit your application right now. Please try again." },
                { status: 502 }
            );
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

function escapeHtml(value: string) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
