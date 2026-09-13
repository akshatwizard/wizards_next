import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ExternalLink, ArrowRight, Zap, Smartphone, TrendingUp, Palette } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";
import { Client } from "@/types/client.types";
import { clients as allClients } from "@/constant/clients";
import { getServiceMeta } from "@/constant/service_meta";
import TrendChart from "@/components/clients/trend_chart";

const SERVICE_LABELS: Record<string, string> = {
    "brand-designing": "Brand Creation",
    "graphic-designing": "Graphic Design",
    "corporate-profile-creation": "Corporate Profile Creation",
    "social-media": "Social Media Planning & Management",
    "content-creation": "Content Creation",
    videography: "Videography",
    "video-editing": "Video Editing",
    "influencer-marketing": "Influencer Marketing",
    "performance-marketing": "Performance Marketing",
    "google-meta-ads-management": "Google & Meta Ads Management",
    "whatsapp-marketing": "WhatsApp Marketing",
    "seo-consultancy": "SEO Consultancy",
    "analytics-reporting": "Analytics & Reporting",
    "website-development": "Website Development",
    "app-dev": "Mobile App Development",
    "ecommerce-development": "E-Commerce Website Development",
    "ecommerce-management": "E-Commerce Business Management",
    "ai-consultancy": "AI Consultancy",
    "email-marketing": "Email Marketing",
};

const SECTOR_LABELS: Record<string, string> = {
    healthcare: "Healthcare",
    "travel-and-tourism": "Travel & Tourism",
    fmcg: "FMCG",
    education: "Education",
    automotive: "Automotive",
    retail: "Retail",
    corporate: "Corporate",
    "e-commerce": "E-Commerce",
    "food-and-dining": "Food & Dining",
    "local-services": "Local Services",
};

function sectorLabels(sectorSlugs?: string[]) {
    if (!sectorSlugs || sectorSlugs.length === 0) return [];
    return sectorSlugs.map((s) => SECTOR_LABELS[s] ?? s);
}

// Related clients: union of clients sharing ANY of this client's sectors —
// a client that spans two sectors surfaces relevant peers from both.
function getRelatedClients(client: Client, limit = 4) {
    if (!client.sectors || client.sectors.length === 0) return [];
    const seen = new Set<string>([client.slug]);
    const related: Client[] = [];
    for (const c of allClients) {
        if (related.length >= limit) break;
        if (seen.has(c.slug)) continue;
        if (c.sectors?.some((s) => client.sectors!.includes(s))) {
            related.push(c);
            seen.add(c.slug);
        }
    }
    return related;
}

export default function ClientProfile({ client }: { client: Client }) {
    const relatedClients = getRelatedClients(client);
    const labels = sectorLabels(client.sectors);
    const bannerImage = client.screenshots?.[0];
    const remainingScreenshots = client.screenshots?.slice(1) ?? [];

    return (
        <main>
            {/* Banner — leads with the real screenshot, not the decorative illustration */}
            <Section className="relative overflow-hidden">
                <Wrapper>
                    <div className={bannerImage ? "grid lg:grid-cols-2 gap-10 items-center" : ""}>
                        <div>
                            <FadeUp delay={0}>
                                <div className="flex items-center gap-1.5 text-[12px] text-zinc-300 mb-6 flex-wrap">
                                    <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                                    <ChevronRight size={12} />
                                    <Link href="/our-works" className="hover:text-zinc-100 transition-colors">Our Works</Link>
                                    <ChevronRight size={12} />
                                    <span className="text-zinc-100">{client.name}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {labels.length > 0 ? (
                                        labels.map((l) => <SectionBadge key={l} label={l} />)
                                    ) : (
                                        <SectionBadge label="Client" />
                                    )}
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.08}>
                                <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 mt-4 lg:text-4xl text-3xl font-medium max-w-2xl">
                                    {client.name}
                                </h1>
                            </FadeUp>

                            {client.tagline && (
                                <FadeUp delay={0.12}>
                                    <p className="text-zinc-200 text-sm font-light max-w-lg mb-4">{client.tagline}</p>
                                </FadeUp>
                            )}

                            <FadeUp delay={0.15} className="flex flex-wrap items-center gap-2 mb-2">
                                {client.tags.map((tag) => (
                                    <span key={tag} className="text-[12px] px-2.5 py-1 rounded-full border border-zinc-800 text-zinc-200 bg-zinc-900">
                                        {tag}
                                    </span>
                                ))}
                            </FadeUp>

                            {(client.website || (client.links && client.links.length > 0)) && (
                                <FadeUp delay={0.18} className="flex flex-wrap items-center gap-3 mt-4">
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
                                    {client.links?.map((l) => (
                                        <a
                                            key={l.url}
                                            href={l.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-zinc-100 text-[12.5px] hover:text-amber-600 transition-colors"
                                        >
                                            {l.label} <ExternalLink size={12} />
                                        </a>
                                    ))}
                                </FadeUp>
                            )}
                        </div>

                        {bannerImage && (
                            <div className="flex items-center justify-center relative mt-8 lg:mt-0">
                                <FadeUp delay={0.2} className="relative w-full max-w-[460px] mx-auto">
                                    <Image
                                        src={bannerImage.src}
                                        alt={bannerImage.caption ?? `${client.name} — real results`}
                                        width={1254}
                                        height={1254}
                                        priority
                                        className="w-full h-auto object-contain"
                                    />
                                </FadeUp>
                            </div>
                        )}
                    </div>
                </Wrapper>
            </Section>

            {/* Overview — the story, with the decorative illustration as a supporting visual */}
            <Section>
                <Wrapper className="lg:py-10 md:py-8 py-6">
                    {client.overview ? (
                        <FadeUp>
                            {client.heroImage && (
                                <div className="float-right w-[45%] sm:w-[480px] ml-8 mb-4">
                                    <Image
                                        src={client.heroImage}
                                        alt={`${client.name} — conceptual illustration`}
                                        width={1254}
                                        height={1254}
                                        className="w-full h-auto object-contain select-none pointer-events-none"
                                    />
                                </div>
                            )}
                            <p className="text-zinc-200 text-[15px] leading-relaxed font-light whitespace-pre-line text-justify">
                                {client.overview}
                            </p>
                            {client.highlights && client.highlights.length > 0 && (
                                <ul className="clear-both mt-6 flex flex-col gap-2.5">
                                    {client.highlights.map((h) => (
                                        <li key={h} className="text-zinc-200 text-[14px] flex gap-2">
                                            <span className="text-amber-600">—</span>{h}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {client.trendChart && (
                                <div className="mt-8">
                                    <TrendChart chart={client.trendChart} />
                                </div>
                            )}
                        </FadeUp>
                    ) : (
                        <FadeUp className="max-w-lg bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
                            <p className="text-zinc-200 text-[13px] font-light">
                                The detailed case study for {client.name} is on its way — check back soon, or see the services we&apos;ve worked on together below.
                            </p>
                        </FadeUp>
                    )}
                </Wrapper>
            </Section>

            {/* Services provided */}
            {client.services.length > 0 && (
                <Section tone="raised">
                    <Wrapper className="lg:py-10 md:py-8 py-6">
                        <FadeUp>
                            <p className="text-zinc-100 font-semibold text-[13px] tracking-wide mb-4">Services we provided</p>
                        </FadeUp>
                        <FadeUp delay={0.05} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {client.services.map((slug, i) => {
                                const meta = getServiceMeta(slug);
                                return (
                                    <Link
                                        key={slug}
                                        href={`/services/${slug}`}
                                        className="group bg-zinc-900 border border-zinc-800 hover:border-amber-600/30 rounded-2xl p-5 transition-colors flex flex-col gap-3"
                                        style={{ transitionDelay: `${i * 20}ms` }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                                                <div className="absolute inset-0 bg-amber-600/10 blur-xl rounded-full scale-90 group-hover:bg-amber-600/15 transition-colors duration-300" />
                                                <Image
                                                    src={`/images/services/icons/${slug}-icon.webp`}
                                                    alt=""
                                                    width={256}
                                                    height={256}
                                                    className="relative w-full h-full object-contain"
                                                />
                                            </div>
                                            <p className="text-zinc-200 text-[15px] font-semibold group-hover:text-amber-600 transition-colors leading-snug">
                                                {meta?.name ?? SERVICE_LABELS[slug] ?? slug}
                                            </p>
                                        </div>
                                        {meta?.desc && (
                                            <p className="text-zinc-200 text-[12.5px] font-light leading-relaxed">{meta.desc}</p>
                                        )}
                                    </Link>
                                );
                            })}
                        </FadeUp>
                    </Wrapper>
                </Section>
            )}

            {/* Website Technical Overview — only for clients with a detailed technical brief */}
            {client.technicalOverview && Object.values(client.technicalOverview).some(Boolean) && (
                <Section tone="raised">
                    <Wrapper className="lg:py-10 md:py-8 py-6">
                        <FadeUp>
                            <p className="text-zinc-100 font-semibold text-[13px] tracking-wide mb-4">Website technical overview</p>
                        </FadeUp>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { key: "performance", label: "Performance", Icon: Zap },
                                { key: "responsiveness", label: "Responsiveness", Icon: Smartphone },
                                { key: "scalability", label: "Scalability", Icon: TrendingUp },
                                { key: "uiUxTheme", label: "UI/UX Theme", Icon: Palette },
                            ].map(({ key, label, Icon }, i) => {
                                const value = client.technicalOverview?.[key as keyof typeof client.technicalOverview];
                                if (!value) return null;
                                return (
                                    <FadeUp key={key} delay={i * 0.05} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                                        <div className="flex items-center gap-2.5 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-amber-600/10 border border-amber-600/20 flex items-center justify-center shrink-0">
                                                <Icon size={14} className="text-amber-600" strokeWidth={1.8} />
                                            </div>
                                            <p className="text-zinc-200 text-[13.5px] font-medium">{label}</p>
                                        </div>
                                        <p className="text-zinc-200 text-[12.5px] font-light leading-relaxed">{value}</p>
                                    </FadeUp>
                                );
                            })}
                        </div>
                    </Wrapper>
                </Section>
            )}

            {/* Additional screenshots — the first one already leads the banner above */}
            {remainingScreenshots.length > 0 && (
                <Section>
                    <Wrapper className="lg:py-10 md:py-8 py-6">
                        <FadeUp>
                            <p className="text-zinc-100 font-semibold text-[13px] tracking-wide mb-4">A closer look</p>
                        </FadeUp>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {remainingScreenshots.map((shot, i) => (
                                <FadeUp key={shot.src} delay={i * 0.05} className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
                                    <Image src={shot.src} alt={shot.caption ?? `${client.name} screenshot`} width={1254} height={1254} className="w-full h-auto object-cover" />
                                    {shot.caption && <p className="text-zinc-200 text-[12px] p-3">{shot.caption}</p>}
                                </FadeUp>
                            ))}
                        </div>
                    </Wrapper>
                </Section>
            )}

            {/* Related clients in the same sector(s) */}
            {relatedClients.length > 0 && (
                <Section tone="raised">
                    <Wrapper className="lg:py-10 md:py-8 py-6">
                        <FadeUp>
                            <p className="text-zinc-100 font-semibold text-[13px] tracking-wide mb-4">
                                Other {labels.join(" / ") || "similar"} clients
                            </p>
                        </FadeUp>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {relatedClients.map((rc) => (
                                <Link
                                    key={rc.slug}
                                    href={`/our-works/${rc.slug}`}
                                    className="group bg-zinc-900 border border-zinc-800 hover:border-amber-600/30 rounded-xl p-4 transition-colors"
                                >
                                    <p className="text-zinc-300 text-[13px] font-medium group-hover:text-amber-600 transition-colors">{rc.name}</p>
                                    <span className="inline-flex items-center gap-1 text-zinc-300 text-[12px] mt-1">
                                        View profile <ArrowRight size={10} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </Wrapper>
                </Section>
            )}

            <Section>
                <Wrapper className="lg:py-12 md:py-10 py-8">
                    <FadeUp className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center">
                        <p className="text-zinc-200 text-lg font-medium mb-2">Want results like this for your business?</p>
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
