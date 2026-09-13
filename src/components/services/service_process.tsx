import React from 'react'
import { Section, Wrapper } from '../ui/sections'
import { FadeUp } from '../ui/motion_components'
import { SectionBadge } from './section_badge'
import { SectionHeading } from './section_heading'
import { ServiceProcessType } from '@/types/service.types'

export default function ServiceProcess({ data }: { data: ServiceProcessType }) {
    return (
        <Section>
            <Wrapper>
                <div
                    className="relative rounded-2xl overflow-hidden px-8 py-14 sm:px-12"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(217,119,6,0.1) 0%, transparent 55%), linear-gradient(180deg, #111008 0%, #0c0c0e 100%)',
                        border: '1px solid rgba(255,255,255,0.06)',
                    }}
                >
                    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                        }} />

                    <FadeUp delay={0} className="text-center mb-12">
                        <SectionBadge label={data.badge} />
                        {data.heading}
                    </FadeUp>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {data.process_list.map((step, i) => (
                            <FadeUp key={step.num} delay={i * 0.07} className='w-full h-full'>
                                <div className="relative h-full flex flex-col gap-3 p-5 rounded-xl border border-white/6 bg-white/2 hover:bg-white/4 hover:border-amber-600/20 transition-all duration-200">
                                    <span className="absolute top-4 right-4 font-syne text-[12px] font-bold text-zinc-700">{step.num}</span>
                                    <div className="size-10 rounded-xl bg-amber-600/10 border border-amber-600/25 flex items-center justify-center">
                                        <span className="text-[13px] font-black text-amber-500">
                                            {step.num}
                                        </span>
                                    </div>
                                    <h3 className="text-[14px] text-zinc-100 leading-snug">{step.title}</h3>
                                    <p className="text-[12px] text-zinc-200 leading-relaxed font-light">{step.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
