import { ServiceDeepDiveType } from "@/types/service.types"
import { FadeUp } from "../ui/motion_components"
import { Section, Wrapper } from "../ui/sections"
import { SectionBadge } from "./section_badge"

export default function ServiceDeepDive({ data }: { data: ServiceDeepDiveType }) {
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
                    {data.intro && (
                        <FadeUp delay={0.1}>
                            <p className="text-zinc-200 text-[13.5px] font-light leading-relaxed mt-3 max-w-2xl">
                                {data.intro}
                            </p>
                        </FadeUp>
                    )}
                </div>

                <div className="max-w-3xl flex flex-col gap-7">
                    {data.sections.map((sec, i) => (
                        <FadeUp key={sec.subheading} delay={0.05 + i * 0.05}>
                            <h3 className="text-zinc-200 text-[16px] font-medium mb-2 leading-snug">
                                {sec.subheading}
                            </h3>
                            <p className="text-zinc-200 text-[13.5px] font-light leading-relaxed whitespace-pre-line">
                                {sec.body}
                            </p>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}
