import React from 'react'
import { Section, Wrapper } from '../ui/sections'
import { FadeUp } from '../ui/motion_components'
import { SectionBadge } from './section_badge'
import { Tag } from './section_tag'
import { ServiceCaseStudyType } from '@/types/service.types'

export default function ServiceCaseStudy({ data }: { data: ServiceCaseStudyType }) {
    return (
        <Section id="case-studies">
            <Wrapper>
                <FadeUp delay={0} className="mb-10">
                    <SectionBadge label={data.badge} />
                    {data.heading}
                    <p className="text-zinc-200 text-[13.5px] font-light leading-relaxed mt-2 max-w-lg">
                        {data.content}
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {data.case_study_list.map((cs, i) => (
                        <FadeUp key={cs.client} delay={i * 0.1}>
                            <div className="group h-full flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-zinc-700 transition-all duration-200">

                                {/* Image placeholder */}
                                <div className="relative h-40 bg-zinc-950 shrink-0">
                                    <div aria-hidden className="absolute inset-0 opacity-20"
                                        style={{
                                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                                            backgroundSize: '20px 20px',
                                        }} />
                                    {/* Metric badge */}
                                    <div className="absolute bottom-3 left-3 bg-amber-600 text-black px-3 py-1.5 rounded-lg">
                                        <p className="font-syne text-lg font-black leading-none">{cs.metric}</p>
                                        <p className="text-[9px] font-semibold opacity-70 mt-0.5">{cs.label}</p>
                                    </div>
                                    <div className="absolute top-3 right-3 text-[9px] font-medium text-zinc-300 bg-zinc-900/80 px-2 py-1 rounded-md border border-zinc-800">
                                        {cs.industry}
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="flex flex-col gap-3 p-5 flex-1">
                                    <div>
                                        <h3 className="font-syne text-[14px] font-bold text-zinc-100">{cs.client}</h3>
                                        <p className="text-[11px] text-amber-600 font-medium mt-0.5">{cs.result}</p>
                                    </div>
                                    <p className="text-[12px] text-zinc-200 leading-relaxed font-light flex-1">{cs.desc}</p>
                                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
                                        {cs.tags.map(t => <Tag key={t} label={t} />)}
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
