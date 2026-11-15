import { Metadata } from "next";
import { Bullets, LegalPage, LegalSection, Mail, WA_BRAND } from "../_components/legal";

export const metadata: Metadata = {
    title: `How to delete your data from ${WA_BRAND} | Wizards Next`,
    description: `Data deletion instructions for ${WA_BRAND}, the WhatsApp business messaging software operated by Wizards Next LLP.`,
    alternates: { canonical: "/wa/data-deletion" },
};

export default function WaDataDeletionPage() {
    return (
        <LegalPage
            title={`How to delete your data from ${WA_BRAND}`}
            intro={<p>{WA_BRAND}{" "}is operated by Wizards Next LLP, Varanasi, India. You can ask us to delete your data at any time.</p>}
        >
            <LegalSection title={`If you are a ${WA_BRAND} customer (business account)`}>
                <ol className="list-decimal pl-5 flex flex-col gap-1.5">
                    <li>
                        <strong className="font-medium">By email:</strong> write to <Mail /> from your account&apos;s email with the subject
                        &quot;Delete my data&quot;, and include your business name and registered mobile number. We verify ownership with a
                        one-time code. This disconnects your WhatsApp account from {WA_BRAND}{" "}and deletes your account, contacts, messages,
                        media and templates synced in {WA_BRAND}.
                    </li>
                    <li>
                        <strong className="font-medium">Disconnect from Facebook:</strong> go to Facebook &gt; Settings &amp; privacy &gt;
                        Settings &gt; <strong className="font-medium">Business integrations</strong> (or Apps and websites), remove{" "}
                        <strong className="font-medium">{WA_BRAND}</strong>, and request deletion. We then stop accessing your WhatsApp
                        assets and delete the data we received from Meta about you.
                    </li>
                </ol>
            </LegalSection>

            <LegalSection title={`If you are a customer of a business that uses ${WA_BRAND}`}>
                <p>
                    Your chats belong to that business. Ask the business to delete your data; you can also reply{" "}
                    <strong className="font-medium">STOP</strong> on WhatsApp to stop marketing messages. If the business does not
                    respond, email us at <Mail /> with the business&apos;s name and your number and we will pass on and help with your
                    request.
                </p>
            </LegalSection>

            <LegalSection title="What happens and how long it takes">
                <Bullets items={[
                    "We confirm your request and give you a reference number.",
                    "Data is deleted from our live systems, and then leaves our backups as they are overwritten on a rolling basis.",
                    "We keep only what the law requires (GST invoices and payment records for the period required by Indian tax law) and a record that you asked for deletion.",
                    `Message charges and data held by Meta/WhatsApp are governed by Meta's own policies; deleting ${WA_BRAND} data does not delete your WhatsApp Business account at Meta.`,
                ]} />
            </LegalSection>

            <LegalSection title="Status and questions">
                <p>
                    Email <Mail /> or call +91 80721 99651. Grievance Officer: Wizards Next LLP, contact as above.
                </p>
            </LegalSection>
        </LegalPage>
    );
}
