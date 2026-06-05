import { SectorMidCTAType } from "@/types/sector.types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section, Wrapper } from "../ui/sections";
import { FadeUp } from "../ui/motion_components";

export default function SectorMidCTA({ data }: { data: SectorMidCTAType }) {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0}>
                    <div
                        className="relative rounded-2xl overflow-hidden px-8 py-12 sm:px-14 sm:py-14 text-center"
                        style={{
                            background: 'radial-gradient(ellipse at 50% 0%, rgba(217,119,6,0.14) 0%, transparent 55%), #111008',
                            border: '1px solid rgba(255,255,255,0.07)',
                        }}
                    >
                        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.12]"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }} />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-200 tracking-tight leading-tight mb-3">
                                {data.heading}
                            </h2>
                            <p className="text-zinc-400 text-[13.5px] font-light leading-relaxed mb-8">
                                {data.subheading}
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <Link href={data.primaryCta.href}
                                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 active:scale-[0.97] text-black text-[13px] font-semibold px-6 py-3 rounded-xl transition-all duration-200">
                                    {data.primaryCta.label} <ArrowRight size={14} />
                                </Link>
                                {data.secondaryCta && (
                                    <Link href={data.secondaryCta.href}
                                        className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-600 text-zinc-300 text-[13px] font-medium px-6 py-3 rounded-xl transition-all duration-200">
                                        {data.secondaryCta.label}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}