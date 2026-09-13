import { escapeHtml } from "./email";

// Table-based layout with inline styles throughout — this is HTML email, not
// a web page. Many clients (Outlook especially) ignore <style> blocks and
// modern CSS entirely, so every style that matters is inline.

const AMBER = "#d97706";
const DARK = "#18181b";

function layout({ title, bodyHtml, footerNote }: { title: string; bodyHtml: string; footerNote: string }): string {
    return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color:#ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e4e4e7;">
          <tr>
            <td style="background-color:${DARK}; padding: 22px 28px;">
              <span style="color:#ffffff; font-size: 18px; font-weight: 700; letter-spacing: -0.02em;">WIZARDS<span style="color:${AMBER};">.</span></span>
              <span style="color:#a1a1aa; font-size: 12px; margin-left: 8px;">NEXT</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px;">
              <h1 style="margin: 0 0 18px 0; font-size: 19px; color:${DARK};">${title}</h1>
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="background-color:#fafafa; padding: 16px 28px; border-top: 1px solid #e4e4e7;">
              <p style="margin:0; font-size: 11.5px; color:#71717a; line-height: 1.5;">${footerNote}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function fieldRow(label: string, value: string): string {
    return `<tr>
        <td style="padding: 9px 0; border-bottom: 1px solid #f0f0f1; font-size: 12.5px; color:#71717a; width: 120px; vertical-align: top;">${escapeHtml(label)}</td>
        <td style="padding: 9px 0; border-bottom: 1px solid #f0f0f1; font-size: 13.5px; color:${DARK}; vertical-align: top;">${value}</td>
    </tr>`;
}

// ─── Team notification — sent to TEAM_EMAILS for every form ────────────────

export function buildTeamNotificationEmail(args: {
    formLabel: string;      // e.g. "Contact Form", "Careers Application", "Healthcare — Sector Interest"
    fields: { label: string; value: string }[]; // already in display order; values are raw (will be escaped here)
    submitterEmail: string;
}): { subject: string; html: string } {
    const { formLabel, fields, submitterEmail } = args;
    const nameField = fields.find((f) => f.label.toLowerCase() === "name");
    const subject = `New ${formLabel} — ${nameField?.value || submitterEmail}`;

    const rows = fields
        .map((f) => {
            const isMessage = f.label.toLowerCase() === "message";
            const displayValue = escapeHtml(f.value || "—").replace(/\n/g, "<br/>");
            return isMessage
                ? `<tr><td colspan="2" style="padding: 14px 0 4px 0;">
                     <p style="margin:0 0 6px 0; font-size: 12.5px; color:#71717a;">${escapeHtml(f.label)}</p>
                     <p style="margin:0; font-size: 13.5px; color:${DARK}; line-height: 1.6; background:#fafafa; border:1px solid #f0f0f1; border-radius: 8px; padding: 12px;">${displayValue}</p>
                   </td></tr>`
                : fieldRow(f.label, displayValue);
        })
        .join("");

    const bodyHtml = `
        <p style="margin: 0 0 18px 0; font-size: 13.5px; color:#52525b;">A new submission just came in from the website.</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top: 22px;">
            <tr><td style="background-color:${AMBER}; border-radius: 8px;">
                <a href="mailto:${escapeHtml(submitterEmail)}" style="display:inline-block; padding: 10px 18px; font-size: 13px; font-weight: 600; color:#18181b; text-decoration:none;">Reply to ${escapeHtml(submitterEmail)}</a>
            </td></tr>
        </table>
    `;

    const html = layout({
        title: `New ${formLabel}`,
        bodyHtml,
        footerNote: `Sent automatically from wizards-next.vercel.app. Reply-to on this email is already set to the submitter, so hitting reply goes straight to them.`,
    });

    return { subject, html };
}

// ─── Acknowledgement — sent to the submitter for every form ────────────────

export function buildAcknowledgementEmail(args: {
    name: string;
    context: "contact" | "careers" | "sector-interest";
}): { subject: string; html: string } {
    const { name, context } = args;
    const firstName = escapeHtml(name.split(" ")[0] || name);

    const copy: { subject: string; heading: string; body: string } = {
        contact: {
            subject: "We've got your message — Wizards Next",
            heading: `Thanks, ${firstName} — we've got it`,
            body: "Your message has reached our team. A strategist will get back to you within 24 hours with next steps.",
        },
        careers: {
            subject: "Application received — Wizards Next",
            heading: `Thanks for applying, ${firstName}`,
            body: "Your application has been received and our team will review it shortly. If your profile is a fit for the role, we'll be in touch to schedule a conversation.",
        },
        "sector-interest": {
            subject: "We've got your message — Wizards Next",
            heading: `Thanks, ${firstName} — we've got it`,
            body: "Your enquiry has reached our team. A strategist will get back to you within 24 hours to talk through what you're looking for.",
        },
    }[context];

    const bodyHtml = `
        <p style="margin: 0 0 14px 0; font-size: 14px; color:#52525b; line-height: 1.6;">${copy.body}</p>
        <p style="margin: 0; font-size: 13px; color:#71717a; line-height: 1.6;">If anything's urgent in the meantime, feel free to reply directly to this email.</p>
    `;

    const html = layout({
        title: copy.heading,
        bodyHtml,
        footerNote: "This is an automated confirmation from Wizards Next. If you didn't submit this, you can safely ignore this email.",
    });

    return { subject: copy.subject, html };
}
