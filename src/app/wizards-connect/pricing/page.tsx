import { Metadata } from "next";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { PageHeading } from "@/components/ui/headings";
import { SectionBadge } from "@/components/services/section_badge";
import { SectionHeading } from "@/components/services/section_heading";
import { Crumbs, CtaButtons, PlanCards, MetaChargesNote, CompareTable, WcFaq, WcCta, NeedsInput } from "@/components/wizards_connect/wc_sections";
import { WC_NAME, WC_PATH, WC_PRICING_PATH } from "@/constant/wizards_connect";
import { SITE_URL } from "@/constant/site";

const TITLE = `${WC_NAME} Pricing: Free and ₹999/month WhatsApp Business API Plans`;
const DESC = "Free: 1 user, 1 number, 1,000 broadcast recipients a month. Paid: ₹999 a month + GST for 10 users, 5 numbers, unlimited and scheduled broadcasts. Meta message charges billed by Meta at 0% markup.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESC,
    alternates: { canonical: WC_PRICING_PATH },
    openGraph: {
        title: `${WC_NAME} Pricing | Wizards Next`, description: DESC, url: `${SITE_URL}${WC_PRICING_PATH}`, type: "website",
        images: [{ url: `${SITE_URL}/images/wizards-connect/og.png`, width: 1200, height: 630, alt: `${WC_NAME} pricing` }],
    },
    twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [`${SITE_URL}/images/wizards-connect/og.png`] },
};

export default function WizardsConnectPricingPage() {
    return (
        <main>
            <Section>
                <Wrapper>
                    <FadeUp delay={0}>
                        <Crumbs items={[{ href: WC_PATH, label: WC_NAME }, { label: "Pricing" }]} />
                        <SectionBadge label={`${WC_NAME} · Pricing`} />
                        <PageHeading className="tracking-tight text-zinc-100 font-medium max-w-3xl">
                            Start free. Upgrade to <span className="text-amber-600 font-sora!">₹999 a month</span> when you grow.
                        </PageHeading>
                        <div className="mt-5 max-w-2xl"><MetaChargesNote /></div>
                        <div className="mt-7"><CtaButtons /></div>
                    </FadeUp>
                    <PlanCards />
                </Wrapper>
            </Section>
            <Section tone="raised">
                <Wrapper>
                    <FadeUp delay={0.05}>
                        <SectionBadge label="Compare" />
                        <SectionHeading>Compare plans</SectionHeading>
                    </FadeUp>
                    <CompareTable />
                    <ul className="text-zinc-300 text-[13px] leading-relaxed font-light list-disc pl-5 flex flex-col gap-1.5">
                        <li>Free broadcasts are capped at 1,000 recipients per calendar month; scheduling is a Paid feature.</li>
                        <li>Paid renews monthly through Cashfree (UPI Autopay or card). Cancel any time; it stays active until the end of the paid period. <NeedsInput>Cashfree Subscriptions activation is still under review</NeedsInput></li>
                        <li>Every payment gets a GST tax invoice: CGST + SGST 9% each within Uttar Pradesh, IGST 18% elsewhere.</li>
                        <li>Meta&apos;s WhatsApp message charges are separate and paid to Meta.</li>
                    </ul>
                </Wrapper>
            </Section>
            <Section>
                <Wrapper>
                    <FadeUp delay={0.05}><SectionBadge label="FAQ" /><SectionHeading>Pricing questions</SectionHeading></FadeUp>
                    <WcFaq />
                </Wrapper>
            </Section>
            <WcCta />
        </main>
    );
}
