// Honeypot + timing + basic content heuristics. No external CAPTCHA service
// is wired in (that would need its own account/site-key, same as Resend did)
// — these are the checks achievable without adding a new dependency.

const MIN_FILL_TIME_MS = 2500; // real humans reading four fields takes at least this long
const MAX_LINKS_IN_MESSAGE = 2;

export function isSpamSubmission(args: {
    honeypot?: string;
    formRenderedAt?: number; // epoch ms, captured client-side when the form mounted
    message?: string;
}): { spam: boolean; reason?: string } {
    const { honeypot, formRenderedAt, message } = args;

    // Honeypot field is invisible to real users via CSS — bots that
    // auto-fill every input will fill it, humans never will.
    if (honeypot && honeypot.trim().length > 0) {
        return { spam: true, reason: "honeypot filled" };
    }

    // Submitted implausibly fast for a human to have read and filled the form.
    if (typeof formRenderedAt === "number") {
        const elapsed = Date.now() - formRenderedAt;
        if (elapsed < MIN_FILL_TIME_MS) {
            return { spam: true, reason: `submitted in ${elapsed}ms` };
        }
    }

    // Excessive links in a free-text field is a strong spam signal.
    if (message) {
        const linkCount = (message.match(/https?:\/\/|www\./gi) || []).length;
        if (linkCount > MAX_LINKS_IN_MESSAGE) {
            return { spam: true, reason: `${linkCount} links in message` };
        }
    }

    return { spam: false };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts optional +country code, spaces/dashes/parens, 7-15 digits total —
// deliberately lenient given the site serves both Indian and international clients.
const PHONE_RE = /^[+]?[\d\s\-()]{7,20}$/;

export function isValidEmail(email: unknown): email is string {
    return typeof email === "string" && email.length <= 254 && EMAIL_RE.test(email.trim());
}

export function isValidPhone(phone: unknown): boolean {
    // Phone is optional on most forms — empty/undefined is valid (means "not provided").
    if (!phone) return true;
    return typeof phone === "string" && PHONE_RE.test(phone.trim());
}

export function isReasonableLength(value: unknown, { min = 0, max = 5000 }: { min?: number; max?: number } = {}): boolean {
    if (typeof value !== "string") return min === 0;
    const len = value.trim().length;
    return len >= min && len <= max;
}
