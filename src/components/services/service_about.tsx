import { ServiceAboutTypes } from "@/types/service.types"
import { FadeUp } from "../ui/motion_components"
import { Section, Wrapper } from "../ui/sections"
import { SectionBadge } from "./section_badge"

export default function ServiceAbout({ data }: { data: ServiceAboutTypes }) {
    return (
        <Section>
            <Wrapper>
                <div>
                    <FadeUp delay={0}>
                        <SectionBadge label={data.badge} />
                    </FadeUp>
                    <FadeUp delay={0.06}>
                        {data.heading}
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <p className="text-zinc-200 text-[13.5px] font-light leading-relaxed mt-3 max-w-md">
                            {data.content}
                        </p>
                    </FadeUp>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {data.what_is.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <FadeUp key={item.title} delay={i * 0.08}>
                                <div className="h-full p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors duration-200">
                                    <div className="size-9 rounded-lg bg-amber-600/10 border border-amber-600/20 flex items-center justify-center mb-5">
                                        <Icon size={16} className="text-amber-500" strokeWidth={1.7} />
                                    </div>
                                    <h3 className="text-[15px] text-zinc-200 mb-1.5 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-zinc-200 leading-snug">
                                        {item.body}
                                    </p>
                                </div>
                            </FadeUp>
                        )
                    })}
                </div>
            </Wrapper>
        </Section>
    )
}