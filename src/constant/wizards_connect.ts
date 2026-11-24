// Wizards Connect (WhatsApp Business API platform) — marketing copy for /wizards-connect.
// Plan facts mirror the Wizards Connect billing code (lib/plans.ts, migrations 0002 + 0009,
// app/(app)/billing/plans/page.tsx) as of 24 Nov 2026. Change them there first, then here.
export const WC_NAME = "Wizards Connect";
export const WC_PATH = "/wizards-connect";
export const WC_PRICING_PATH = "/wizards-connect/pricing";
export const WC_APP_URL = "https://connect.wizards.co.in";
// The app creates a free workspace on first OTP login, so login = signup.
export const WC_SIGNUP_URL = "https://connect.wizards.co.in/login";
export const WC_WHATSAPP = "+91 80721 99651";
export const WC_WHATSAPP_URL = "https://wa.me/918072199651?text=" + encodeURIComponent("Hi, I'd like to know more about Wizards Connect (WhatsApp Business API).");

export const WC_FEATURES = [
    { title: "Shared Live Chat inbox", body: "Every WhatsApp conversation in one team inbox: unread counts, search, assign a chat to a teammate, internal notes, quick replies, and a timer for WhatsApp's 24-hour reply window. When the window has closed, send an approved template from inside the chat." },
    { title: "Message templates", body: "Create templates with a live WhatsApp-style preview, variables with sample values, header image, video or document, and buttons. Meta's approval status (approved, in review, rejected, paused) syncs back automatically, with the rejection reason shown." },
    { title: "Broadcasts", body: "Send an approved template to a tag or saved audience, with per-contact variables and header media. Sending is paced to your number's limits, failed messages show Meta's reason, and you can pause, resume or cancel." },
    { title: "Contacts and CSV import", body: "Import a CSV with column mapping and a preview of every row. Numbers are de-duplicated, invalid rows can be downloaded with the reason, and opted-out contacts stay opted out. Tags, audiences and opt-in records included." },
    { title: "Team logins", body: "Invite teammates by email or mobile as Owner, Admin, Agent or Viewer. Agents only see chats assigned to them. Removing a member signs them out at once, and team changes are logged." },
    { title: "Connect your own number", body: "Link your own WhatsApp Business number to the official WhatsApp Business (Cloud) API through Meta's Embedded Signup, from inside the app." },
];

export const WC_STEPS = [
    { title: "Start free", body: "Sign in at connect.wizards.co.in with your mobile number or email. A free workspace is created for you." },
    { title: "Connect WhatsApp", body: "Link your WhatsApp Business number through Meta's Embedded Signup and add a payment method in your Meta account for message charges." },
    { title: "Import contacts and create templates", body: "Upload your customer list, then submit your first templates to Meta for approval." },
    { title: "Reply and broadcast", body: "Answer customers from the shared inbox and send broadcasts to people who opted in." },
];

export type WcPlan = { code: "free" | "paid"; name: string; pricePerMonth: number; features: string[]; compare: Record<string, string> };
// Price: PAID_PRICE_PLACEHOLDER_PAISE = 99900 in lib/plans.ts (marked placeholder until Ravi approves).
export const WC_PLANS: WcPlan[] = [
    {
        code: "free", name: "Free", pricePerMonth: 0,
        features: ["1 user · 1 WhatsApp number", "1,000 broadcast recipients a month", "Shared inbox, templates, CSV import", "No scheduled broadcasts"],
        compare: { recipients: "1,000", users: "1", numbers: "1", scheduling: "—", api: "—" },
    },
    {
        code: "paid", name: "Paid", pricePerMonth: 999,
        features: ["10 users · 5 WhatsApp numbers", "Unlimited broadcasts", "Scheduled broadcasts", "API & webhooks"],
        compare: { recipients: "Unlimited", users: "10", numbers: "5", scheduling: "✓", api: "✓" },
    },
];
export const WC_COMPARE_ROWS: [keyof WcPlan["compare"], string][] = [
    ["recipients", "Broadcast recipients / month"], ["users", "Users"], ["numbers", "WhatsApp numbers"], ["scheduling", "Scheduled broadcasts"], ["api", "API & webhooks"],
];

export const WC_FAQ = [
    { q: "What does Meta charge for messages?", a: "WhatsApp message charges are billed by Meta directly to the payment method in your Meta account, at Meta's rate. Wizards Connect adds 0% markup. The plan price covers the software only." },
    { q: "Is GST extra?", a: "Yes. The Paid plan is ₹999 a month plus 18% GST (CGST + SGST within Uttar Pradesh, IGST elsewhere), with a GST tax invoice for every payment." },
    { q: "How do I pay for the Paid plan?", a: "Monthly through Cashfree (UPI Autopay or card). Cancel any time; the plan stays active until the end of the paid period, then moves back to Free." },
    { q: "Do I need a new number?", a: "You need a WhatsApp Business number that you connect to the WhatsApp Business API through Meta's Embedded Signup inside the app." },
    { q: "Can my team use one account?", a: "Yes. Invite teammates as Admin, Agent or Viewer. Free includes 1 user; Paid includes 10." },
    { q: "Can I send to anyone?", a: "Broadcasts go only to contacts who agreed to receive WhatsApp messages from your business, as WhatsApp's policy requires. Contacts who reply STOP are opted out automatically." },
];
