import { ServiceFAQType } from '@/types/service.types'
import { Section, Wrapper } from '../ui/sections'
import { FadeUp } from '../ui/motion_components'
import { SectionBadge } from './section_badge'
import { SectionHeading } from './section_heading'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ServiceFAQ({ data }: { data: ServiceFAQType }) {
    return (
        <Section>
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">

                    <FadeUp delay={0} className="lg:sticky lg:top-24">
                        <SectionBadge label="FAQ" />
                        <SectionHeading>
                            Questions we get{' '}
                            <span className="text-amber-500">all the time</span>
                        </SectionHeading>
                        <p className="text-zinc-200 text-[13.5px] font-light leading-relaxed mt-3 mb-6">
                            Still have something else on your mind? We're one message away.
                        </p>
                        <Link href="/contact"
                            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-black text-[13px] font-semibold px-5 py-2.5 rounded-xl transition-colors">
                            Ask us directly <ArrowRight size={14} />
                        </Link>
                    </FadeUp>

                    <div className="flex flex-col divide-y divide-zinc-800">
                        {data.faq_list.map((faq, i) => (
                            <FadeUp key={faq.q} delay={i * 0.06}>
                                <div className="py-5">
                                    <div className="flex items-start gap-3 mb-2">
                                        <CheckCircle2 size={15} className="text-amber-600 mt-0.5 shrink-0" strokeWidth={2} />
                                        <h3 className="font-syne text-[14px] font-bold text-zinc-200 leading-snug">{faq.q}</h3>
                                    </div>
                                    <p className="text-[12.5px] text-zinc-200 leading-relaxed font-light pl-6">{faq.a}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
