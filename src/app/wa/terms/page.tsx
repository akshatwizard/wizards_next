import { Metadata } from "next";
import Link from "next/link";
import { Bullets, LegalPage, LegalSection, Mail, WA_BRAND, WA_OPERATOR_ADDRESS } from "../_components/legal";

export const metadata: Metadata = {
    title: `${WA_BRAND} Terms of Service | Wizards Next`,
    description: `The terms for using ${WA_BRAND}, the WhatsApp business messaging software operated by Wizards Next LLP.`,
    alternates: { canonical: "/wa/terms" },
};

const link = "text-amber-600 hover:underline";

export default function WaTermsPage() {
    return (
        <LegalPage
            title={`${WA_BRAND} Terms of Service`}
            intro={
                <p>
                    These Terms are an agreement between <strong className="font-medium">Wizards Next LLP</strong> (LLPIN ACH-4720,
                    GSTIN 09AAEFW8842N1ZB), {WA_OPERATOR_ADDRESS} (&quot;we&quot;, &quot;{WA_BRAND}&quot;) and the business that creates
                    a {WA_BRAND} account (&quot;you&quot;, &quot;Client&quot;). By creating an account you accept them. These Terms cover
                    the {WA_BRAND} software only; use of the wizards.co.in website is covered by the general{" "}
                    <Link href="/terms-of-service" className={link}>Terms of Service</Link>.
                </p>
            }
        >
            <LegalSection title="1. The Service">
                <p>
                    {WA_BRAND} is software for sending and receiving WhatsApp messages through Meta&apos;s WhatsApp Business Platform
                    (Cloud API): shared inbox, contacts, templates, broadcasts, automation, reports and optional virtual phone numbers.
                    We are not WhatsApp or Meta and are not endorsed by them.
                </p>
            </LegalSection>

            <LegalSection title="2. Your account">
                <Bullets items={[
                    "You must be a business or professional, 18 or older, and give true details (including your GSTIN if you want a GST invoice).",
                    "You connect your own WhatsApp Business account through Meta's Embedded Signup. The WhatsApp account, phone number and display name stay yours.",
                    "Keep your log-ins secure; you are responsible for your team members' actions.",
                ]} />
            </LegalSection>

            <LegalSection title="3. Meta charges are separate">
                <p>
                    WhatsApp message charges are billed <strong className="font-medium">by Meta directly to you</strong> at Meta&apos;s rates,
                    using the payment method you add in Meta. {WA_BRAND} does not add any markup to Meta&apos;s message charges. Meta may
                    change its prices and rules; we do not control them.
                </p>
            </LegalSection>

            <LegalSection title="4. Plans, payment and taxes">
                <Bullets items={[
                    "Plans: Free, and paid plans (currently ₹299, ₹599 and ₹999 per month) with the limits shown on our pricing page. Prices exclude 18% GST, which is added on the invoice.",
                    "Paid plans renew automatically at the end of each billing period through our payment gateway (Cashfree Payments) until you cancel. You can cancel at any time from Billing; the plan stays active until the end of the paid period.",
                    <>Refunds are handled as stated at the time of purchase and as required by applicable law. For any billing question, write to <Mail />.</>,
                    "If a renewal fails we retry and remind you; if it still fails after a grace period, the account moves to the Free plan (no data is deleted at that point).",
                    "Plan limits (users, numbers, broadcast recipients per month, automations) are enforced automatically. Free plan: up to 1,000 broadcast recipients per month.",
                ]} />
            </LegalSection>

            <LegalSection title="5. Acceptable use: you must">
                <Bullets items={[
                    <>Message only people who have <strong className="font-medium">opted in</strong> to hear from your business, keep proof of opt-in, and honour opt-outs (STOP) immediately.</>,
                    "Follow the WhatsApp Business Terms, WhatsApp Business Messaging Policy and WhatsApp Commerce Policy, and Indian law (including the Information Technology Act and the Digital Personal Data Protection Act).",
                    "Not send spam or illegal, misleading, adult, gambling or other prohibited content, and not use purchased contact lists.",
                    "Not attempt to break, overload, resell or reverse-engineer the Service.",
                ]} />
                <p>
                    We may pause sending, suspend or close an account that breaks these rules or puts the shared platform at risk
                    (for example a falling quality rating), with notice where practical.
                </p>
            </LegalSection>

            <LegalSection title="6. Your data">
                <Bullets items={[
                    <>You own your contacts and messages. You appoint us to process them only to provide the Service, as described in our <Link href="/wa/privacy" className={link}>Privacy Policy</Link>. You are responsible for having a lawful basis or consent for your customers&apos; data.</>,
                    <>You can export contacts and delete data at any time (see the <Link href="/wa/data-deletion" className={link}>Data Deletion page</Link>).</>,
                ]} />
            </LegalSection>

            <LegalSection title="7. Virtual numbers (optional)">
                <Bullets items={[
                    <>Numbers are supplied by our licensed telecom partner and issued <strong className="font-medium">in your business&apos;s name</strong> after KYC. You must use them only for your own business.</>,
                    "Rental is prepaid for the chosen period and renews unless you deactivate. A released number may not be recoverable. A number used for paid WhatsApp messages in the last 30 days may not be removable from Meta immediately.",
                    "Verification codes received by call are shown only to your account.",
                ]} />
            </LegalSection>

            <LegalSection title="8. Availability and support">
                <p>
                    We aim for high availability, but the Service depends on Meta, telecom and hosting providers and may be interrupted.
                    Support: <Mail /> or +91 80721 99651. Free-plan support is self-help / best effort.
                </p>
            </LegalSection>

            <LegalSection title="9. Liability">
                <p>
                    The Service is provided &quot;as is&quot;. To the extent the law allows, our total liability in any 12-month period is
                    limited to the fees you paid us in that period, and we are not liable for indirect losses, lost profits, Meta&apos;s
                    actions (for example account bans or template rejections) or message charges billed by Meta.
                </p>
            </LegalSection>

            <LegalSection title="10. Termination">
                <p>
                    You may close your account at any time. We may terminate for breach or if Meta withdraws our access. After closure
                    we delete data as described in the Privacy Policy.
                </p>
            </LegalSection>

            <LegalSection title="11. Changes, law and disputes">
                <p>
                    We may update these Terms with notice to account owners. Indian law applies; courts at Varanasi, Uttar Pradesh have
                    exclusive jurisdiction.
                </p>
            </LegalSection>

            <LegalSection title="12. Contact">
                <p><Mail />, +91 80721 99651.</p>
            </LegalSection>
        </LegalPage>
    );
}
