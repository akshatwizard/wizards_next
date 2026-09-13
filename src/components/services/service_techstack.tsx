import React from 'react'
import { Section, Wrapper } from '../ui/sections'
import { FadeUp } from '../ui/motion_components'
import { SectionBadge } from './section_badge'
import { SectionHeading } from './section_heading'
import { ServiceTechStackType } from '@/types/service.types'

export default function ServiceTechStack({ data }: { data: ServiceTechStackType }) {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0} className="mb-10">
                    <SectionBadge label="Tech stack" />
                    <SectionHeading>
                        Modern tools,{' '}
                        <span className="text-amber-500">no legacy baggage</span>
                    </SectionHeading>
                    <p className="text-zinc-200 text-[13.5px] font-light leading-relaxed mt-2 max-w-lg">
                        We don't pick technology to show off — we pick what's right for your project's
                        scale, budget, and long-term maintainability.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.techstack_list.map((cat, i) => {
                        const Icon = cat.icon
                        return (
                            <FadeUp key={cat.category} delay={i * 0.07}>
                                <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900 h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="size-8 rounded-lg bg-amber-600/10 border border-amber-600/20 flex items-center justify-center">
                                            <Icon size={15} className="text-amber-500" strokeWidth={1.7} />
                                        </div>
                                        <h3 className="font-syne text-[13px] font-bold text-zinc-200">{cat.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cat.items.map((tech) => (
                                            <span key={tech}
                                                className="text-[12px] px-2.5 py-1 rounded-lg border border-zinc-700/60 bg-zinc-950 text-zinc-100 hover:border-amber-600/30 hover:text-zinc-300 transition-colors cursor-default">
                                                {tech}
                                            </span>
                                        ))}
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
