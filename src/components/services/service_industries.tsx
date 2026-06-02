import React from 'react'
import { Section, Wrapper } from '../ui/sections'
import { FadeUp } from '../ui/motion_components'
import { SectionBadge } from './section_badge'
import { SectionHeading } from './section_heading'
import { ServiceIndustriestype } from '@/types/service.types'

export default function ServiceIndustries({ data }: { data: ServiceIndustriestype }) {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0} className="text-center mb-10">
                    <SectionBadge label="Industries" />
                    <SectionHeading>
                        We build for{' '}
                        <span className="text-amber-500">every sector</span>
                    </SectionHeading>
                    <p className="text-zinc-500 text-[13.5px] font-light leading-relaxed mt-2 max-w-md mx-auto">
                        Industry-specific design patterns, conversion flows, and integrations — we know what works in your space.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                    {data.industries_list.map((ind, i) => {
                        const Icon = ind.icon
                        return (
                            <FadeUp key={ind.label} delay={i * 0.05}>
                                <div className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-amber-600/30 hover:bg-zinc-800/60 transition-all duration-200 text-center">
                                    <div className="size-10 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center group-hover:bg-amber-600/20 transition-colors">
                                        <Icon size={18} className="text-amber-500" strokeWidth={1.7} />
                                    </div>
                                    <p className="text-[11px] font-medium text-zinc-400 leading-snug">{ind.label}</p>
                                </div>
                            </FadeUp>
                        )
                    })}
                </div>
            </Wrapper>
        </Section>
    )
}
