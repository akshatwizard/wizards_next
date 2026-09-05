// GENERIC TEMPLATE — this needs a lawyer's review before it goes live.
// It's a reasonable starting structure, not a compliance-checked document.
// In particular: confirm exactly which analytics/tracking tools are
// actually implemented on this site before publishing the cookies section.

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";

export default function PrivacyPolicyPage() {
    return (
        <main>
            <Section>
                <Wrapper>
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[11px] text-zinc-600 mb-6">
                            <Link href="/" className="hover:text-zinc-400 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-400">Privacy Policy</span>
                        </div>
                        <SectionBadge label="Legal" />
                        <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
                            Privacy Policy
                        </h1>
                        <p className="text-zinc-600 text-[12.5px] mb-10">Last updated: [DATE]</p>
                    </FadeUp>

                    <div className="max-w-2xl flex flex-col gap-8 text-zinc-400 text-[14px] leading-relaxed font-light">
                        <LegalSection title="1. Introduction">
                            Wizards Next LLP (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates this website. This
                            Privacy Policy explains what information we collect when you visit or use this site, how we
                            use it, and the choices you have.
                        </LegalSection>

                        <LegalSection title="2. Information We Collect">
                            <p className="mb-3">We collect information in two ways:</p>
                            <ul className="flex flex-col gap-2 list-disc pl-5">
                                <li><strong className="text-zinc-300">Information you provide directly</strong> — your name, email address, phone number, and message when you submit a contact or careers form.</li>
                                <li><strong className="text-zinc-300">Information collected automatically</strong> — standard usage data such as pages visited, browser type, and general location, typically gathered through cookies or analytics tools.</li>
                            </ul>
                        </LegalSection>

                        <LegalSection title="3. How We Use Your Information">
                            <p className="mb-3">We use the information we collect to:</p>
                            <ul className="flex flex-col gap-2 list-disc pl-5">
                                <li>Respond to enquiries submitted through our contact or careers forms</li>
                                <li>Understand how visitors use this site, so we can improve it</li>
                                <li>Meet legal and regulatory obligations</li>
                            </ul>
                            <p className="mt-3">We do not sell your personal information to third parties.</p>
                        </LegalSection>

                        <LegalSection title="4. Cookies and Tracking">
                            This site may use cookies and similar technologies (such as analytics tools) to understand
                            site usage. You can control cookies through your browser settings; disabling them may affect
                            some site functionality.
                        </LegalSection>

                        <LegalSection title="5. Third-Party Services">
                            We may use third-party services — such as analytics providers, email delivery services, and
                            hosting infrastructure — to operate this site. These providers process data on our behalf
                            and are expected to handle it securely.
                        </LegalSection>

                        <LegalSection title="6. Data Security">
                            We take reasonable steps to protect the information you share with us. However, no method of
                            transmission or storage over the internet is completely secure, and we cannot guarantee
                            absolute security.
                        </LegalSection>

                        <LegalSection title="7. Data Retention">
                            We retain personal information only for as long as necessary to fulfil the purposes outlined
                            in this policy, or as required by law.
                        </LegalSection>

                        <LegalSection title="8. Your Rights">
                            Depending on your location, you may have rights to access, correct, or request deletion of
                            your personal information. To exercise any of these rights, contact us using the details
                            below.
                        </LegalSection>

                        <LegalSection title="9. Children's Privacy">
                            This website is not directed at children, and we do not knowingly collect personal
                            information from children.
                        </LegalSection>

                        <LegalSection title="10. Changes to This Policy">
                            We may update this Privacy Policy from time to time. Changes will be posted on this page
                            with an updated revision date.
                        </LegalSection>

                        <LegalSection title="11. Contact Us">
                            Questions about this Privacy Policy can be sent to{" "}
                            <a href="mailto:akshat@wizards.co.in" className="text-amber-600 hover:underline">akshat@wizards.co.in</a>.
                        </LegalSection>
                    </div>
                </Wrapper>
            </Section>
        </main>
    );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h2 className="text-zinc-200 font-medium text-[16px] mb-2">{title}</h2>
            <div>{children}</div>
        </div>
    );
}
