import { Metadata } from "next";
import Link from "next/link";
import { Bullets, LegalPage, LegalSection, Mail, WA_BRAND, WA_OPERATOR_ADDRESS } from "../_components/legal";

export const metadata: Metadata = {
    title: `${WA_BRAND} Privacy Policy | Wizards Next`,
    description: `How ${WA_BRAND}, the WhatsApp business messaging software operated by Wizards Next LLP, collects, uses, shares and deletes data.`,
    alternates: { canonical: "/wa/privacy" },
};

export default function WaPrivacyPage() {
    return (
        <LegalPage
            title={`${WA_BRAND} Privacy Policy`}
            intro={
                <>
                    <p>
                        {WA_BRAND} (&quot;we&quot;, &quot;us&quot;) is a WhatsApp business messaging software service operated by{" "}
                        <strong className="font-medium">Wizards Next LLP</strong> (LLPIN ACH-4720, GSTIN 09AAEFW8842N1ZB),{" "}
                        {WA_OPERATOR_ADDRESS}. Contact: <Mail />, +91 80721 99651.
                    </p>
                    <p className="mt-3">
                        This policy explains what we collect, why, who we share it with and how you can delete it. It covers
                        the {WA_BRAND}{" "}website, web app and related services (the &quot;Service&quot;). It does not replace
                        the general <Link href="/privacy-policy" className="text-amber-600 hover:underline">Wizards Next privacy policy</Link>{" "}
                        for the wizards.co.in website.
                    </p>
                </>
            }
        >
            <LegalSection title="1. Two kinds of data, two roles">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[13px] border-collapse">
                        <thead>
                            <tr className="border-b border-zinc-700 text-zinc-200">
                                <th className="py-2 pr-3 font-medium">Data</th>
                                <th className="py-2 pr-3 font-medium">Whose data</th>
                                <th className="py-2 font-medium">Our role</th>
                            </tr>
                        </thead>
                        <tbody className="align-top">
                            <tr className="border-b border-zinc-800">
                                <td className="py-2 pr-3"><strong className="font-medium">Account data</strong>: the business owner and team members who sign up for {WA_BRAND}</td>
                                <td className="py-2 pr-3">Our customers (&quot;Clients&quot;)</td>
                                <td className="py-2">We decide how it is used (Data Fiduciary / controller)</td>
                            </tr>
                            <tr>
                                <td className="py-2 pr-3"><strong className="font-medium">Client customer data</strong>: the end customers a Client chats with on WhatsApp (names, phone numbers, WhatsApp user IDs, messages, media, tags)</td>
                                <td className="py-2 pr-3">The Client&apos;s</td>
                                <td className="py-2">We process it only on the Client&apos;s instructions (Data Processor). The Client is responsible for having consent / opt-in</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </LegalSection>

            <LegalSection title="2. What we collect">
                <p className="text-zinc-200 font-normal">From you when you sign up and use {WA_BRAND}</p>
                <Bullets items={[
                    "Name, email, mobile number (verified by one-time password), business name, GSTIN and billing address (for tax invoices), team-member names and roles.",
                    "Payment records: plan, amount, invoice, payment status and transaction reference. Card, UPI or bank details are entered on our payment gateway's page (Cashfree Payments); we do not see or store full card numbers.",
                    "Usage and device data: IP address, browser type, pages used, log-in times and error logs, for security and support.",
                ]} />
                <p className="text-zinc-200 font-normal">From Meta when you connect WhatsApp (Facebook Login for Business / Embedded Signup)</p>
                <Bullets items={[
                    "Your Meta business portfolio ID, WhatsApp Business Account ID, phone number ID, display name, phone number quality rating and messaging limits.",
                    <>A <strong className="font-medium">business access token</strong> that lets our app act for your WhatsApp account. It is stored encrypted and used only for the functions described in this policy.</>,
                    "Your basic Facebook profile (name, Facebook user ID), used to complete the login.",
                    <>Using the permissions <code>whatsapp_business_messaging</code> and <code>whatsapp_business_management</code> we access: messages sent to and from your business number, delivery and read statuses, media in those messages, your business profile, message templates and their review status, and webhook subscriptions.</>,
                ]} />
                <p className="text-zinc-200 font-normal">Virtual numbers (optional add-on)</p>
                <Bullets items={[
                    "If you rent a virtual phone number through the Service: the KYC documents you upload (for example GST certificate, incorporation certificate or Udyam certificate), which are passed to our licensed telecom partner that issues the number in your business's name; and call logs and recordings of calls received on that number (used to show you WhatsApp verification codes).",
                ]} />
            </LegalSection>

            <LegalSection title="3. Why we use it">
                <Bullets items={[
                    "To provide the Service: show your inbox, send the messages and broadcasts you create, manage your templates and show reports.",
                    "To connect and keep your WhatsApp account working (registering the number, subscribing to webhooks, syncing templates and quality).",
                    "To bill you, issue GST invoices and keep tax records.",
                    "To keep the Service secure: detect abuse or spam, and enforce plan limits and the WhatsApp Business Policy (for example blocking sends to contacts who replied STOP).",
                    "To provide support and send service messages (one-time passwords, renewal reminders, alerts). We send marketing messages only with your consent, and you can unsubscribe at any time.",
                ]} />
                <p>
                    We <strong className="font-medium">do not</strong> sell personal data, use Client customer data to advertise to anyone,
                    or share data received from Meta APIs with data brokers or ad networks.
                </p>
            </LegalSection>

            <LegalSection title="4. Who we share it with">
                <Bullets items={[
                    <><strong className="font-medium">Meta Platforms</strong>: to send and receive WhatsApp messages and manage your WhatsApp assets (Meta&apos;s own terms and privacy policy apply to WhatsApp).</>,
                    <><strong className="font-medium">Service providers (sub-processors)</strong> under contract, such as our hosting provider, email delivery provider, payment gateway (Cashfree Payments India Pvt Ltd) and, for the optional virtual-number add-on, our licensed telecom partner.</>,
                    <><strong className="font-medium">Authorities</strong> when required by Indian law.</>,
                    "A buyer or successor if the business is sold, under the same protections.",
                ]} />
            </LegalSection>

            <LegalSection title="5. Where and how long we keep it">
                <Bullets items={[
                    "Data is stored on servers operated by our hosting provider. Data in transit uses HTTPS/TLS; access tokens and secrets are encrypted at rest; staff access is limited and logged.",
                    "Account data: kept while your account is active and deleted after the account is closed, except invoices and tax records, which we keep for the period required by Indian tax law.",
                    "Client customer data (contacts, messages, media): kept while the Client's account is active, and deleted after the Client deletes it or closes the account.",
                    "Backups are overwritten on a rolling basis, so deleted data also leaves our backups after a limited period.",
                ]} />
            </LegalSection>

            <LegalSection title="6. Your choices and rights">
                <p>
                    You can access, correct or delete your data by contacting us at <Mail />. Under the Digital Personal Data
                    Protection Act, 2023 you can also withdraw consent, nominate a person, and raise a grievance. End customers of our
                    Clients should contact that business first; we will help the business respond.
                </p>
                <p>
                    <strong className="font-medium">Deleting data / disconnecting Meta:</strong> see our{" "}
                    <Link href="/wa/data-deletion" className="text-amber-600 hover:underline">Data Deletion page</Link>. If you remove{" "}
                    {WA_BRAND}{" "}from your Facebook &quot;Business integrations&quot; or &quot;Apps and websites&quot; settings, we stop
                    accessing your WhatsApp account and delete the related data as described there.
                </p>
            </LegalSection>

            <LegalSection title="7. Children">
                <p>The Service is for businesses and is not meant for anyone under 18.</p>
            </LegalSection>

            <LegalSection title="8. Grievance Officer">
                <p>
                    Grievance Officer, Wizards Next LLP, {WA_OPERATOR_ADDRESS}. Email: <Mail />. Phone: +91 80721 99651.
                    We acknowledge complaints promptly and aim to resolve them within the time required by applicable law.
                </p>
            </LegalSection>

            <LegalSection title="9. Changes">
                <p>We will post updates on this page and notify account owners of material changes by email or in the app.</p>
            </LegalSection>
        </LegalPage>
    );
}
