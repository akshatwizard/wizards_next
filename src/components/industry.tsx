import { Industry, INDUSTRIES } from '@/constant/industry';
import { FadeUp } from './ui/motion_components'
import { Section, Wrapper } from './ui/sections'
import Link from 'next/link';
import { clients } from '@/constant/clients';


export default function IndustriesSection() {
    return (
        <Section className="relative overflow-hidden bg-zinc-800/20">

            {/* Background glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-1/4 w-125 h-75 opacity-40"
                style={{ background: 'radial-gradient(ellipse, rgba(217,119,6,0.08) 0%, transparent 70%)' }}
            />

            <Wrapper>

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                    <div>
                        <FadeUp delay={0}>
                            <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1 mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                <span className="text-amber-500 text-[12px] tracking-widest uppercase">
                                    Industries We Serve
                                </span>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <h2 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
                                One agency, <span className="text-amber-500 font-sora!">every sector</span>
                            </h2>
                        </FadeUp>

                        <FadeUp delay={0.15}>
                            <p className="text-zinc-200 text-[13.5px] font-light leading-relaxed max-w-lg mt-2">
                                From a neighbourhood clinic in Varanasi to a pan-India e-commerce brand —
                                we've built campaigns across industries that most agencies won't touch.
                            </p>
                        </FadeUp>
                    </div>

                    {/* Aggregate stat */}
                    <FadeUp delay={0.15} className="shrink-0">
                        <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4">
                            <div className="text-center">
                                <p className=" text-2xl font-medium text-amber-500 leading-none">{clients.length}+</p>
                                <p className="text-[12px] text-zinc-200 mt-0.5 uppercase tracking-widest">Clients</p>
                            </div>
                            <div className="w-px h-8 bg-zinc-800" />
                            <div className="text-center">
                                <p className=" text-2xl font-medium text-amber-500 leading-none">10+</p>
                                <p className="text-[12px] text-zinc-200 mt-0.5 uppercase tracking-widest">Industries</p>
                            </div>
                            <div className="w-px h-8 bg-zinc-800" />
                            <div className="text-center">
                                <p className=" text-2xl font-medium text-amber-500 leading-none">28+</p>
                                <p className="text-[12px] text-zinc-200 mt-0.5 uppercase tracking-widest">States</p>
                            </div>
                        </div>
                    </FadeUp>
                </div>

                {/* Industry grid — 2 cols mobile, 3 tablet, 5 desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {INDUSTRIES.map((industry, i) => (
                        <IndustryCard
                            key={industry.name}
                            industry={industry}
                            delay={0.05 * i}
                        />
                    ))}
                </div>

                {/* Bottom note */}
                <FadeUp delay={0.3}>
                    <p className="text-center text-[12px] text-zinc-300 mt-8">
                        Don't see your industry?{' '}
                        <a
                            href="/contact"
                            className="text-amber-600 hover:text-amber-500 transition-colors underline underline-offset-2"
                        >
                            Let's talk anyway →
                        </a>
                    </p>
                </FadeUp>

            </Wrapper>
        </Section>
    )
}

function IndustryCard({ industry, delay }: { industry: Industry; delay: number }) {
    const { icon: Icon, name, sub, count, iconBg, iconColor } = industry

    return (
        <FadeUp delay={delay} className="h-full">
            <Link href={"#"} className="group h-full relative flex flex-col gap-3 p-4 lg:p-5 rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-200 overflow-hidden">

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 20% 20%, rgba(217,119,6,0.04) 0%, transparent 60%)' }}
                />

                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
                    <Icon size={18} className={iconColor} strokeWidth={1.7} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-0.5 flex-1">
                    <p className="text-[13.5px] font-semibold text-zinc-200 leading-snug tracking-tight">
                        {name}
                    </p>
                    <p className="text-[12px] text-zinc-200 font-light leading-snug">
                        {sub}
                    </p>
                </div>

                {/* Client count */}
                <div className="flex items-center justify-between pt-2.5 border-t border-zinc-800 mt-auto">
                    <span className="text-[12px] text-zinc-300">Clients served</span>
                    <span className="text-[12px] font-semibold text-amber-600">{count}</span>
                </div>
            </Link>
        </FadeUp>
    )
}
