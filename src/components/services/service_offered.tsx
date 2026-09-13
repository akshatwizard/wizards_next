import React from 'react'
import { Section, Wrapper } from '../ui/sections'
import { FadeUp } from '../ui/motion_components'
import { SectionBadge } from './section_badge'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Tag } from './section_tag'
import { ServicesOfferedTypes } from '@/types/service.types'

export default function ServicesOffered({ data }: { data: ServicesOfferedTypes }) {
    return (
        <Section tone="raised">
            <Wrapper>
                <FadeUp delay={0} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                    <div>
                        <SectionBadge label={data.badge} />
                        {data.heading}
                    </div>
                    <Link href="/contact"
                        className="inline-flex items-center gap-1.5 text-amber-600 text-[12px] font-medium border border-amber-600/25 rounded-lg px-4 py-2 hover:bg-amber-600/8 transition-colors shrink-0">
                        Discuss your project <ArrowRight size={12} />
                    </Link>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {data.service_list.map((svc, i) => {
                        const Icon = svc.icon
                        return (
                            <FadeUp key={svc.title} delay={i * 0.07}>
                                <div className="group h-full flex flex-col gap-4 p-5 rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-200">
                                    <div className="size-9 rounded-lg bg-amber-600/10 border border-amber-600/20 flex items-center justify-center">
                                        <Icon size={16} className="text-amber-500" strokeWidth={1.7} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[15px] text-zinc-200 mb-1.5 leading-snug">
                                            {svc.title}
                                        </h3>
                                        <p className="text-xs text-zinc-200 leading-snug">
                                            {svc.desc}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
                                        {svc.tags.map(t => <Tag key={t} label={t} />)}
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
