import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";
import { smmClients, getSmmClientBySlug } from "@/constant/smm_clients";
import SmmAvatar from "@/components/smm/smm_avatar";
import { shortenForTitle } from "@/lib/utils";

export function generateStaticParams() {
    return smmClients.map((c) => ({ slug: c.slug }));
}

const TITLE_SUFFIX = " — Social Media Client | Wizards Next";
const MAX_TITLE_LENGTH = 65;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const client = getSmmClientBySlug(slug);
    if (!client) return {};
    const name = shortenForTitle(client.name, MAX_TITLE_LENGTH - TITLE_SUFFIX.length);
    return {
        title: `${name}${TITLE_SUFFIX}`,
        description: `${client.tagline} Social media managed by Wizards Next.`,
        alternates: {
            canonical: `/social-media-clients/${client.slug}`,
        },
    };
}

export default async function SmmClientPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const client = getSmmClientBySlug(slug);
    if (!client) notFound();

    return (
        <main>
            <Section>
                <Wrapper className="pb-0!">
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[12px] text-zinc-300 mb-6 flex-wrap">
                            <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/social-media-clients" className="hover:text-zinc-100 transition-colors">Social Media Clients</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-100">{client.name}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <SectionBadge label={client.sector} />
                            <SectionBadge label="Social Media" />
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.08} className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6">
                        <SmmAvatar client={client} size={client.logo ? 96 : 120} useLogo />
                        <div>
                            <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium max-w-2xl">
                                {client.name}
                            </h1>
                            <p className="text-zinc-200 text-sm font-light max-w-lg">{client.tagline}</p>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.15} className="flex flex-wrap items-center gap-3 mt-6">
                        <a
                            href={client.instagram.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-black text-[12.5px] font-semibold px-5 py-2.5 rounded-lg transition-colors"
                        >
                            Follow on Instagram <ExternalLink size={13} />
                        </a>
                        <span className="text-zinc-300 text-[12.5px]">@{client.instagram.handle}</span>
                        {client.website && (
                            <a
                                href={client.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-amber-600 text-[12.5px] hover:underline"
                            >
                                Visit website <ExternalLink size={12} />
                            </a>
                        )}
                        {client.caseStudy && (
                            <Link href={client.caseStudy} className="inline-flex items-center gap-1.5 text-zinc-100 text-[12.5px] hover:text-amber-600 transition-colors">
                                Read the case study <ArrowRight size={12} />
                            </Link>
                        )}
                    </FadeUp>

                    <FadeUp delay={0.2} className="mt-8">
                        <Link href="/social-media-clients" className="inline-flex items-center gap-1.5 text-zinc-300 text-[12.5px] hover:text-zinc-100 transition-colors">
                            <ArrowLeft size={12} /> All social media clients
                        </Link>
                    </FadeUp>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="lg:py-12 md:py-10 py-8">
                    <FadeUp className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center">
                        <p className="text-zinc-200 text-lg font-medium mb-2">Want your brand managed like this?</p>
                        <p className="text-zinc-200 text-[13px] font-light mb-5 max-w-md mx-auto">
                            Tell us about your business and what you&apos;re trying to achieve.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-black text-[12.5px] font-semibold px-5 py-2.5 rounded-lg transition-colors"
                        >
                            Get in touch <ArrowRight size={13} />
                        </Link>
                    </FadeUp>
                </Wrapper>
            </Section>
        </main>
    );
}
