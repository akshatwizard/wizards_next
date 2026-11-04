import { Section, Wrapper } from './ui/sections'
import { FadeUp } from './ui/motion_components'
import Link from 'next/link'
import { ALL_SERVICES } from '@/constant/service_meta'
import ServicesCarousel from './services_carousel'

export default function Services() {
    return (
        <Section className="relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-140 h-45 bg-amber-600/5 blur-3xl rounded-full" />
            <Wrapper>
                <FadeUp delay={0.1} className="relative mb-8">
                    <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-4 py-1.5 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
                        <span className="text-amber-600 text-[12px] tracking-widest uppercase">
                            What We Do
                        </span>
                    </div>

                    <h2 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
                        Everything your brand needs{" "}<br />
                        <span className="text-amber-600 font-sora!">to grow online</span>
                    </h2>

                    <p className="text-zinc-200 text-[13.5px] leading-relaxed font-light max-w-xl">
                        From building your identity to running high-converting ad campaigns —
                        we cover the full digital spectrum so you don&apos;t have to juggle
                        multiple agencies.
                    </p>
                </FadeUp>

                <FadeUp delay={0.15}>
                    <ServicesCarousel services={ALL_SERVICES} />
                </FadeUp>

                <FadeUp delay={0.2} className="flex items-center justify-between pt-4">
                    <span className="text-zinc-300 text-xs">
                        {ALL_SERVICES.length} services · Varanasi &amp; Pan-India
                    </span>
                    <Link
                        href="/services"
                        className="bg-amber-600 hover:bg-amber-700 active:scale-[0.98] transition-all duration-200 text-black text-[12.5px] font-medium px-5 py-2.5 rounded-lg"
                    >
                        View all services →
                    </Link>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}
