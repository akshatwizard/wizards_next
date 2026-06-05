import { SectorAudienceType } from "@/types/sector.types"
import { Section, Wrapper } from "../ui/sections"
import { FadeUp } from "../ui/motion_components"
import { SectionBadge } from "../services/section_badge"
import { SectionHeading } from "../services/section_heading"


export default function SectorAudience({ data }: { data: SectorAudienceType }) {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0} className="mb-10">
                    <SectionBadge label={data.badge ?? 'Who is this for'} />
                    <SectionHeading>
                        {data.heading}
                    </SectionHeading>
                    {data.subheading && (
                        <p className="text-zinc-500 text-[13.5px] font-light leading-relaxed mt-2 max-w-xl">
                            {data.subheading}
                        </p>
                    )}
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {data.cards.map((card, i) => {
                        const Icon = card.icon
                        return (
                            <FadeUp key={card.title} delay={i * 0.08}>
                                <div className="group h-full flex flex-col gap-4 p-5 rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-200">
                                    <div className="size-10 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center">
                                        <Icon size={18} className="text-amber-500" strokeWidth={1.7} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-syne text-[14px] font-bold text-zinc-100 mb-1.5 leading-snug">
                                            {card.title}
                                        </h3>
                                        <p className="text-[12.5px] text-zinc-500 leading-relaxed font-light">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </FadeUp>
                        )
                    })}
                </div>
            </Wrapper>
        </Section>
    )
}