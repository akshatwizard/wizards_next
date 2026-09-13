import { SectorTrustType } from "@/types/sector.types"
import { Section, Wrapper } from "../ui/sections"
import { FadeUp } from "../ui/motion_components"
import { SectionBadge } from "../services/section_badge"
import { SectionHeading } from "../services/section_heading"

export default function SectorTrust({ data }: { data: SectorTrustType }) {
    return (
        <Section tone="raised">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <FadeUp delay={0}>
                        <SectionBadge label={data.badge ?? 'Why Wizards'} />
                        <SectionHeading>{data.heading}</SectionHeading>
                        {data.subheading && (
                            <p className="text-zinc-200 text-[13.5px] font-light leading-relaxed mt-3">
                                {data.subheading}
                            </p>
                        )}
                    </FadeUp>

                    <div className="flex flex-col gap-3">
                        {data.points.map((point, i) => {
                            const Icon = point.icon
                            return (
                                <FadeUp key={point.title} delay={i * 0.08}>
                                    <div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-colors duration-200">
                                        <div className="size-9 rounded-lg bg-amber-600/10 border border-amber-600/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <Icon size={16} className="text-amber-500" strokeWidth={1.7} />
                                        </div>
                                        <div>
                                            <h3 className="font-syne text-[13.5px] font-bold text-zinc-100 mb-1 leading-snug">
                                                {point.title}
                                            </h3>
                                            <p className="text-[12px] text-zinc-200 leading-relaxed font-light">
                                                {point.desc}
                                            </p>
                                        </div>
                                    </div>
                                </FadeUp>
                            )
                        })}
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
