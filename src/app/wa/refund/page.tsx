import { Metadata } from "next";
import Link from "next/link";
import { Bullets, LegalPage, LegalSection, Mail, WA_BRAND, WA_GRIEVANCE_OFFICER, WA_OPERATOR_ADDRESS } from "../_components/legal";

export const metadata: Metadata = {
    title: `${WA_BRAND} Refund & Cancellation Policy | Wizards Next`,
    description: `Refund and cancellation policy for ${WA_BRAND} paid plans, operated by Wizards Next LLP.`,
    alternates: { canonical: "/wa/refund" },
};

const link = "text-amber-600 hover:underline";

export default function WaRefundPage() {
    return (
        <LegalPage
            title={`${WA_BRAND} Refund & Cancellation Policy`}
            intro={
                <p>
                    This policy applies to payments made to <strong className="font-medium">Wizards Next LLP</strong> (LLPIN ACH-4720,
                    GSTIN 09AAEFW8842N1ZB), {WA_OPERATOR_ADDRESS}, for {WA_BRAND}{" "}plans. It forms part of the{" "}
                    <Link href="/wa/terms" className={link}>{WA_BRAND} Terms of Service</Link>.
                </p>
            }
        >
            <LegalSection title="1. No refunds">
                <p>
                    <strong className="font-medium">Once paid, no refund.</strong> Plan payments are for a fixed paid period and are not
                    refundable, in full or in part, including for unused time or features you did not use.
                </p>
            </LegalSection>

            <LegalSection title="2. Cancel any time">
                <Bullets items={[
                    "You can cancel at any time. Your plan stays active till the end of the paid period, and then the account moves to the Free plan.",
                    "Cancelling or moving to Free does not delete your data.",
                ]} />
            </LegalSection>

            <LegalSection title="3. No auto-renewal">
                <p>
                    Paid plans do not renew automatically and we do not keep a mandate to charge you again. To continue, renew
                    manually from Billing in the app before or after the paid period ends.
                </p>
            </LegalSection>

            <LegalSection title="4. Meta charges">
                <p>
                    WhatsApp message charges are billed by Meta directly to you and are not collected by us, so they are not covered by
                    this policy. Questions about them must go to Meta.
                </p>
            </LegalSection>

            <LegalSection title="5. Payment problems">
                <p>
                    If money was debited but your plan was not activated, or you were charged twice for the same order, write to{" "}
                    <Mail /> with the order or transaction reference. We will check with our payment gateway (Cashfree Payments) and
                    activate the plan or return the duplicate or failed payment to the original payment method.
                </p>
            </LegalSection>

            <LegalSection title="6. Contact and grievances">
                <p>
                    <Mail />, +91 80721 99651. Grievance Officer: {WA_GRIEVANCE_OFFICER}, Wizards Next LLP, {WA_OPERATOR_ADDRESS}.
                </p>
            </LegalSection>
        </LegalPage>
    );
}
