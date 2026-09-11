import { SectorHeroType } from "@/types/sector.types";
import { Section, Wrapper } from "../ui/sections";
import { FadeUp } from "../ui/motion_components";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SectionBadge } from "../services/section_badge";





export default function SectorHero({ data }: { data: SectorHeroType }) {
    return (
        <Section>

            {/* Grid texture */}
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }} />

            {/* Glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-175 h-87.5"
                style={{
                    background:
                        "radial-gradient(ellipse, rgba(217,119,6,0.1) 0%, transparent 65%)",
                }}
            />

            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col">
                        {/* Breadcrumb */}
                        <FadeUp delay={0}>
                            <div className="flex items-center gap-1.5 text-[11px] text-zinc-300 mb-6">
                                <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                                <ChevronRight size={12} />
                                <Link href="/sector" className="hover:text-zinc-100 transition-colors">Sectors</Link>
                                <ChevronRight size={12} />
                                <span className="text-zinc-100">{data.badge}</span>
                            </div>
                        </FadeUp>

                        <div className="max-w-3xl">
                            <FadeUp delay={0.05}>
                                <SectionBadge label={data.badge} />
                            </FadeUp>

                            <FadeUp delay={0.1}>
                                {data.heading}
                            </FadeUp>

                            <FadeUp delay={0.14}>
                                <p className="text-zinc-100 text-[14px] leading-relaxed font-light max-w-md mb-8">
                                    {data.subheading}
                                </p>
                            </FadeUp>

                            {/* CTAs */}
                            <FadeUp delay={0.18} className="flex flex-wrap items-center gap-3 mb-10">
                                <Link href={data.primaryCta.href}
                                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 active:scale-[0.97] text-black text-[13px] font-semibold px-6 py-3 rounded-xl transition-all duration-200">
                                    {data.primaryCta.label}
                                    <ArrowRight size={15} />
                                </Link>
                                {data.secondaryCta && (
                                    <Link href={data.secondaryCta.href}
                                        className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-600 text-zinc-300 text-[13px] font-medium px-6 py-3 rounded-xl transition-all duration-200">
                                        {data.secondaryCta.label}
                                    </Link>
                                )}
                            </FadeUp>

                            {/* Sector tags */}
                            <FadeUp delay={0.22}>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[10px] text-zinc-300 uppercase tracking-widest self-center mr-1">
                                        Includes
                                    </span>
                                    {data.tags.map((tag) => (
                                        <span key={tag}
                                            className="text-[11px] px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </FadeUp>
                        </div>
                    </div>

                    {/* Right — image placeholder + floating stats */}
                    {data.right_section}
                </div>
            </Wrapper>
        </Section>
    )
}
