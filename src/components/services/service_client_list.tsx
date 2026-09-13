import React from 'react'
import { Section, Wrapper } from '../ui/sections'
import { FadeUp } from '../ui/motion_components'
import { SectionBadge } from './section_badge'
import { SectionHeading } from './section_heading'
import { ServiceClientListType } from '@/types/service.types'

export default function ServiceClientList({ data }: { data: ServiceClientListType }) {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <SectionBadge label="Our clients" />
                        <SectionHeading>
                            Brands that trusted us{' '}
                            <span className="text-amber-500">to build for them</span>
                        </SectionHeading>
                    </div>
                </FadeUp>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {data.client_list.map((c, i) => (
                        <FadeUp key={c.name} delay={i * 0.05}>
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-200">
                                <div className="size-9 rounded-lg bg-amber-600/15 border border-amber-600/25 flex items-center justify-center text-[12px] font-bold text-amber-600 shrink-0">
                                    {c.initials}
                                </div>
                                <div>
                                    <p className="text-[12px] font-medium text-zinc-200 leading-snug">{c.name}</p>
                                    <p className="text-[12px] text-zinc-300">{c.industry}</p>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}
