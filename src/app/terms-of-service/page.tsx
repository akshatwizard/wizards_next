// GENERIC TEMPLATE — this needs a lawyer's review before it goes live,
// same as the Privacy Policy. This covers use of the WEBSITE only —
// actual client service engagements should be governed by their own
// separate signed agreements, not this page.

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";

export default function TermsOfServicePage() {
    return (
        <main>
            <Section>
                <Wrapper>
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[11px] text-zinc-300 mb-6">
                            <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-100">Terms of Service</span>
                        </div>
                        <SectionBadge label="Legal" />
                        <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
                            Terms of Service
                        </h1>
                        <p className="text-zinc-300 text-[12.5px] mb-10">Last updated: [DATE]</p>
                    </FadeUp>

                    <div className="max-w-2xl flex flex-col gap-8 text-zinc-100 text-[14px] leading-relaxed font-light">
                        <LegalSection title="1. Acceptance of Terms">
                            By accessing or using this website, you agree to be bound by these Terms of Service. If you
                            do not agree, please do not use this site.
                        </LegalSection>

                        <LegalSection title="2. Use of This Website">
                            This website is provided for informational purposes — to describe Wizards Next LLP&apos;s
                            services and allow visitors to make enquiries. You agree not to misuse this site, attempt to
                            gain unauthorised access to it, or use it in any way that could damage or impair it.
                        </LegalSection>

                        <LegalSection title="3. Intellectual Property">
                            All content on this website — including text, graphics, logos, and code — is the property
                            of Wizards Next LLP unless otherwise stated, and may not be copied or reused without
                            permission.
                        </LegalSection>

                        <LegalSection title="4. Service Engagements">
                            This page governs use of the website itself. Any actual engagement of Wizards Next LLP&apos;s
                            services — marketing, development, or otherwise — is governed by a separate signed
                            agreement or proposal between Wizards Next LLP and the client, not by these Terms.
                        </LegalSection>

                        <LegalSection title="5. No Warranty">
                            This website is provided &quot;as is&quot; without warranties of any kind, express or
                            implied. We do not guarantee that the site will be error-free or uninterrupted.
                        </LegalSection>

                        <LegalSection title="6. Limitation of Liability">
                            To the fullest extent permitted by law, Wizards Next LLP is not liable for any indirect,
                            incidental, or consequential damages arising from your use of this website.
                        </LegalSection>

                        <LegalSection title="7. Third-Party Links">
                            This site may link to third-party websites. We are not responsible for the content or
                            practices of any linked sites.
                        </LegalSection>

                        <LegalSection title="8. Governing Law">
                            These Terms are governed by the laws of India, and any disputes are subject to the
                            jurisdiction of the courts in Varanasi, Uttar Pradesh.
                        </LegalSection>

                        <LegalSection title="9. Changes to These Terms">
                            We may update these Terms from time to time. Continued use of this website after changes
                            are posted constitutes acceptance of the updated Terms.
                        </LegalSection>

                        <LegalSection title="10. Contact Us">
                            Questions about these Terms can be sent to{" "}
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
