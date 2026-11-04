import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, ExternalLink } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";
import { smmClients } from "@/constant/smm_clients";
import SmmAvatar from "@/components/smm/smm_avatar";

export const metadata: Metadata = {
    title: "Social Media Clients | Brands We Manage — Wizards Next",
    description: "Doctors, retailers, schools and manufacturers whose Instagram and social media Wizards Next manages.",
    alternates: {
        canonical: "/social-media-clients",
    },
};

export default function SocialMediaClientsPage() {
    return (
        <main>
            <Section>
                <Wrapper className="pb-0!">
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[12px] text-zinc-300 mb-6">
                            <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-100">Social Media Clients</span>
                        </div>
                        <SectionBadge label="Social Media" />
                    </FadeUp>
                    <FadeUp delay={0.08}>
                        <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium max-w-2xl">
                            Brands we manage <span className="text-amber-600 font-sora!">on social</span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-sm font-light max-w-lg">
                            Every brand below is a real client whose social media we run — open a profile, or go straight to their Instagram.
                        </p>
                    </FadeUp>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="lg:pt-8 md:pt-6 pt-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {smmClients.map((c) => (
                            <div
                                key={c.slug}
                                className="group bg-zinc-900 border border-zinc-800 hover:border-amber-600/30 rounded-2xl p-5 flex flex-col gap-4 transition-colors"
                            >
                                <Link href={`/our-works/${c.slug}`} className="flex items-center gap-4">
                                    <SmmAvatar client={c} size={64} />
                                    <div className="min-w-0">
                                        <p className="text-zinc-100 font-syne font-bold text-[18px] leading-snug group-hover:text-amber-600 transition-colors">{c.name}</p>
                                        <p className="text-zinc-300 text-[12px] mt-0.5">{c.sector}</p>
                                    </div>
                                </Link>
                                <p className="text-zinc-300 text-[13.5px] leading-relaxed flex-1">{c.tagline}</p>
                                <div className="flex flex-wrap items-center gap-2">
                                    <Link
                                        href={`/our-works/${c.slug}`}
                                        className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-black text-[12px] font-semibold px-4 py-2 rounded-lg transition-colors"
                                    >
                                        View <ArrowUpRight size={12} />
                                    </Link>
                                    <a
                                        href={c.instagram.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 border border-zinc-700 hover:border-amber-600/40 text-zinc-100 text-[12px] font-medium px-4 py-2 rounded-lg transition-colors"
                                    >
                                        @{c.instagram.handle} <ExternalLink size={12} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Section>
        </main>
    );
}
