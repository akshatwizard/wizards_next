import { SectorCaseStudyType } from "@/types/sector.types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Section, Wrapper } from "../ui/sections";
import { FadeUp } from "../ui/motion_components";
import { SectionBadge } from "../services/section_badge";
import { SectionHeading } from "../services/section_heading";

export default function SectorCaseStudy({ data }: { data: SectorCaseStudyType }) {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0} className="mb-10">
                    <SectionBadge label={data.badge ?? 'Case studies'} />
                    <SectionHeading>{data.heading}</SectionHeading>
                    {data.subheading && (
                        <p className="text-zinc-200 text-[13.5px] font-light leading-relaxed mt-2 max-w-lg">
                            {data.subheading}
                        </p>
                    )}
                </FadeUp>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {data.items.map((cs, i) => (
                        <FadeUp key={cs.client} delay={i * 0.1}>
                            <div className="group h-full flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-zinc-700 transition-all duration-200">
                                {/* Image placeholder */}
                                <div className="relative h-40 bg-zinc-950 shrink-0">
                                    <div aria-hidden className="absolute inset-0 opacity-20"
                                        style={{
                                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                                            backgroundSize: '20px 20px',
                                        }} />
                                    <div className="absolute bottom-3 left-3 bg-amber-600 text-black px-3 py-1.5 rounded-lg">
                                        <p className="font-syne text-lg font-black leading-none">{cs.metric}</p>
                                        <p className="text-[9px] font-semibold opacity-70 mt-0.5">{cs.metricLabel}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 p-5 flex-1">
                                    <div>
                                        <h3 className="font-syne text-[14px] font-bold text-zinc-100">{cs.client}</h3>
                                        <p className="text-[11px] text-amber-600 font-medium mt-0.5">{cs.result}</p>
                                    </div>
                                    <p className="text-[12px] text-zinc-200 leading-relaxed font-light flex-1">{cs.desc}</p>
                                    <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-zinc-800">
                                        <div className="flex flex-wrap gap-1.5">
                                            {cs.tags.map(t => (
                                                <span key={t} className="text-[10px] px-2 py-0.5 rounded border border-zinc-700/60 bg-zinc-950 text-zinc-200">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        {cs.href && (
                                            <Link href={cs.href}
                                                className="inline-flex items-center gap-1 text-[10px] text-amber-600 hover:text-amber-500 transition-colors">
                                                View <ExternalLink size={10} />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}