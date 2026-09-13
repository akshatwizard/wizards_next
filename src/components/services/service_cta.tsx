import React from 'react'
import { Section, Wrapper } from '../ui/sections'
import { FadeUp } from '../ui/motion_components'
import { ArrowRight, Award, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ServiceCTA() {
    return (
        <Section className="pb-20">
            <Wrapper>
                <FadeUp delay={0}>
                    <div
                        className="relative rounded-2xl overflow-hidden px-8 py-14 sm:px-16 text-center"
                        style={{
                            background: 'radial-gradient(ellipse at 50% 0%, rgba(217,119,6,0.15) 0%, transparent 60%), #111008',
                            border: '1px solid rgba(255,255,255,0.07)',
                        }}
                    >
                        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }} />

                        <Award size={36} className="text-amber-600/40 mx-auto mb-6" strokeWidth={1.2} />
                        <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-50 tracking-tight leading-tight mb-3">
                            Ready to build something{' '}
                            <span className="text-amber-500">great?</span>
                        </h2>
                        <p className="text-zinc-100 text-[14px] font-light max-w-md mx-auto mb-8">
                            Tell us about your project and we&apos;ll send a proposal within 24 hours.
                            No agency fluff — just a straight conversation.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link href="/contact"
                                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 active:scale-[0.97] text-black text-[13px] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200">
                                Start your project <ArrowRight size={15} />
                            </Link>
                            <Link href="https://wa.me/919935070000"
                                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-600 text-zinc-300 text-[13px] font-medium px-7 py-3.5 rounded-xl transition-all duration-200">
                                WhatsApp us
                                <ExternalLink size={13} />
                            </Link>
                        </div>
                        <p className="text-zinc-700 text-[12px] mt-6">
                            Free 30-min discovery call · No commitment required
                        </p>
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}
