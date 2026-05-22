import { Section, Wrapper } from './ui/sections'
import { HeroBackground } from './ui/hero-background'
import { PageHeading } from './ui/headings'
import Link from 'next/link'
import { FadeUp } from './ui/motion_components'
import { Shield, ShieldCheck } from 'lucide-react'


export default function HeroSection() {

    return (
        <Section className='relative text-zinc-200 overflow-hidden'>
            <HeroBackground />
            <Wrapper className='h-full'>
                <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12'>
                    <div className='w-full h-full flex flex-col justify-center'>

                        <FadeUp
                            delay={0}
                            className='flex items-center gap-2 text-xs px-3 py-2 rounded-full border border-amber-600/50 bg-amber-600/10 w-max text-amber-600 mb-8'>
                            <span className='size-1.5 rounded-full bg-amber-600 animate-ping' />
                            Best Digital Marketing Agency — Varanasi
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <PageHeading className='font-medium'>
                                We Don't Just Market. We <span className='font-sora! text-amber-600'>Ignite</span> <br />Your <span className='font-sora! text-amber-600'>Brand</span>
                            </PageHeading>
                        </FadeUp>

                        <FadeUp
                            delay={0.15}
                            className='text-zinc-400 max-w-lg block mt-5 leading-snug'>
                            <span>
                                From social media mastery to full-stack web development — Wizards Next is your one-stop growth partner with 24+ years of combined expertise.
                            </span>
                        </FadeUp>

                        <FadeUp delay={0.2} className="mt-9 flex items-center gap-2.5">
                            <Link
                                href="#"
                                className="rounded-lg bg-amber-600 px-5 py-2.5 text-[13px] font-medium text-zinc-950 transition-colors hover:bg-amber-400"
                            >
                                Explore Services
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-1.5 rounded-lg border border-white/10 px-5 py-2.5 text-[13px] text-zinc-300 transition-colors hover:border-white/25 hover:text-zinc-50"
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                                    <polygon points="5.5,4.5 10,7 5.5,9.5" fill="currentColor" />
                                </svg>
                                View Our Work
                            </Link>
                        </FadeUp>

                        <FadeUp delay={0.25} className='mt-10 flex items-center gap-2'>
                            <div className="flex pointer-events-none select-none">
                                {['DS', 'RK', 'AM', 'PV'].map((initials, i) => (
                                    <div
                                        key={initials}
                                        className="text-zinc-500 w-7 h-7 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[9px] font-semibold text-fun-blue-300"
                                        style={{ marginLeft: i === 0 ? 0 : -8 }}
                                    >
                                        {initials}
                                    </div>
                                ))}
                            </div>
                            <p className="text-[11px] text-fun-blue-300/50 leading-snug text-zinc-500">
                                Trusted by <span className="text-fun-blue-300/80 font-medium">500+ clients</span>
                                <br />across all Indian states
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.3} className='flex items-center text-xs mt-5 gap-1.5'>
                            <ShieldCheck className='text-blue-600' strokeWidth={1} size={30} />
                            <span className='text-zinc-700'>
                                Trusted by Founders and <br />Entrepreneurs from all over the world
                            </span>
                        </FadeUp>

                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
