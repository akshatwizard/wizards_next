import { Metadata } from "next";
import Link from "next/link";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { PageHeading } from "@/components/ui/headings";
import { SectionBadge } from "@/components/services/section_badge";
import { SectionHeading } from "@/components/services/section_heading";
import { Crumbs, CtaButtons, PlanCards, MetaChargesNote, WcFaq, WcCta, NeedsInput } from "@/components/wizards_connect/wc_sections";
import { WC_NAME, WC_PATH, WC_PRICING_PATH, WC_FEATURES, WC_STEPS, WC_FAQ, WC_SIGNUP_URL } from "@/constant/wizards_connect";
import { SITE_URL } from "@/constant/site";

const TITLE = `${WC_NAME}: WhatsApp Business API Platform for Indian Businesses`;
const DESC = "Shared WhatsApp inbox, message templates, broadcasts, CSV contacts import and team logins on the official WhatsApp Business API. Free plan with 1,000 broadcast recipients a month.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESC,
    alternates: { canonical: WC_PATH },
    openGraph: {
        title: `${WC_NAME} | WhatsApp Business API by Wizards Next`,
        description: DESC,
        url: `${SITE_URL}${WC_PATH}`,
        type: "website",
        images: [{ url: `${SITE_URL}/images/wizards-connect/og.png`, width: 1200, height: 630, alt: `${WC_NAME}: WhatsApp Business API platform` }],
    },
    twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [`${SITE_URL}/images/wizards-connect/og.png`] },
};

export default function WizardsConnectPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org", "@type": "SoftwareApplication", "@id": `${SITE_URL}${WC_PATH}#app`,
            name: WC_NAME, applicationCategory: "BusinessApplication", operatingSystem: "Web", url: `${SITE_URL}${WC_PATH}`, description: DESC,
            publisher: { "@id": `${SITE_URL}/#organization` },
            offers: [
                { "@type": "Offer", name: "Free", price: "0", priceCurrency: "INR" },
                { "@type": "Offer", name: "Paid", price: "999", priceCurrency: "INR", description: "Per month, plus 18% GST" },
            ],
        },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: WC_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ];
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Section>
                <Wrapper>
                    <FadeUp delay={0}>
                        <Crumbs items={[{ label: WC_NAME }]} />
                        <SectionBadge label="WhatsApp Business API" />
                        <PageHeading className="tracking-tight text-zinc-100 font-medium max-w-4xl">
                            Run customer chats, templates and broadcasts on WhatsApp, <span className="text-amber-600 font-sora!">as a team</span>
                        </PageHeading>
                        <p className="mt-5 text-zinc-300 text-[15px] md:text-[16px] leading-relaxed font-light max-w-2xl">
                            {WC_NAME} is a WhatsApp Business API platform for Indian small businesses, built by Wizards Next in Varanasi. One shared inbox for your team, Meta-approved templates, broadcasts to opted-in customers, contacts import and team logins, on your own WhatsApp Business number.
                        </p>
                        <div className="mt-7"><CtaButtons /></div>
                        <p className="mt-4 text-zinc-400 text-[12.5px]">Free plan: 1,000 broadcast recipients a month. Paid: ₹999 a month + GST. <Link href={WC_PRICING_PATH} className="text-amber-500 hover:underline">See pricing</Link></p>
                        <div className="mt-3"><NeedsInput>Start free opens connect.wizards.co.in, which is still a private staging build (login limited to demo accounts). Confirm launch date / production URL</NeedsInput></div>
                    </FadeUp>
                </Wrapper>
            </Section>

            <Section tone="raised">
                <Wrapper>
                    <FadeUp delay={0.05}>
                        <SectionBadge label="What you get" />
                        <SectionHeading>Everything a small team needs on WhatsApp</SectionHeading>
                    </FadeUp>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {WC_FEATURES.map((f, i) => (
                            <FadeUp key={f.title} delay={0.05 * i} className="rounded-[16px] border border-zinc-800 bg-zinc-900/40 p-6">
                                <h3 className="text-zinc-100 text-[16px] font-medium mb-2">{f.title}</h3>
                                <p className="text-zinc-300 text-[14px] leading-relaxed font-light">{f.body}</p>
                                {f.title === "Connect your own number" ? <div className="mt-3"><NeedsInput>Embedded Signup is built but switched off until Meta App Review approves; confirm wording/date</NeedsInput></div> : null}
                            </FadeUp>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper>
                    <FadeUp delay={0.05}>
                        <SectionBadge label="How it works" />
                        <SectionHeading>From sign-up to first broadcast</SectionHeading>
                    </FadeUp>
                    <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {WC_STEPS.map((s, i) => (
                            <FadeUp key={s.title} delay={0.05 * i} className="rounded-[16px] border border-zinc-800 p-6">
                                <span className="text-amber-500 text-[12px] font-semibold tracking-widest">STEP {i + 1}</span>
                                <h3 className="text-zinc-100 text-[16px] font-medium mt-2 mb-2">{s.title}</h3>
                                <p className="text-zinc-300 text-[14px] leading-relaxed font-light">{s.body}</p>
                            </FadeUp>
                        ))}
                    </ol>
                </Wrapper>
            </Section>

            <Section tone="raised" id="pricing">
                <Wrapper>
                    <FadeUp delay={0.05}>
                        <SectionBadge label="Pricing" />
                        <SectionHeading>Two simple plans</SectionHeading>
                        <MetaChargesNote />
                    </FadeUp>
                    <PlanCards />
                    <p className="text-zinc-400 text-[12.5px]"><Link href={WC_PRICING_PATH} className="text-amber-500 hover:underline">Compare plans in detail</Link> · <a href={WC_SIGNUP_URL} className="text-amber-500 hover:underline">Start free</a></p>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper>
                    <FadeUp delay={0.05}>
                        <SectionBadge label="FAQ" />
                        <SectionHeading>Questions about {WC_NAME}</SectionHeading>
                    </FadeUp>
                    <WcFaq />
                </Wrapper>
            </Section>

            <WcCta />
        </main>
    );
}
