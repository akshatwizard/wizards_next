import React from 'react'
import { Search, BarChart2, Paintbrush, Rocket } from 'lucide-react'
import { FadeUp } from './ui/motion_components'
import { Section, Wrapper } from './ui/sections'

const STEPS = [
    {
        number: '01',
        icon: Search,
        title: 'Discovery & Consultation',
        description:
            'We start by understanding your vision, goals, and challenges through detailed consultations and brainstorming sessions.',
    },
    {
        number: '02',
        icon: BarChart2,
        title: 'Research & Planning',
        description:
            'Our team dives deep into market research, audience analysis, and trend studies to craft a customised action plan just for you.',
    },
    {
        number: '03',
        icon: Paintbrush,
        title: 'Design & Content',
        description:
            'From eye-catching visuals to engaging content, our designers, writers, and strategists bring your ideas to life.',
    },
    {
        number: '04',
        icon: Rocket,
        title: 'Execution & Optimisation',
        description:
            'We launch, monitor, and continuously optimise every campaign — tracking every metric that matters for your growth.',
    },
]

function StepCard({
    step,
    index,
}: {
    step: (typeof STEPS)[number]
    index: number
}) {
    const Icon = step.icon

    return (
        <FadeUp
            delay={index * 0.1}
            className="relative flex flex-col gap-5 p-6 rounded-xl border border-white/6 bg-white/2 hover:bg-white/4 hover:border-amber-600/20 transition-all duration-300"
        >
            {/* Step number — top right */}
            <span className="absolute top-5 right-5 font-syne text-[12px] font-bold text-zinc-700">
                {step.number}
            </span>

            {/* Icon */}
            <div className="size-11 rounded-xl bg-amber-600/10 border border-amber-600/25 flex items-center justify-center">
                <Icon size={20} className="text-amber-500" strokeWidth={1.8} />
            </div>

            {/* Text */}
            <div className="space-y-2 pr-6">
                <h3 className="font-syne text-[14px] font-bold text-zinc-100 leading-snug">
                    {step.title}
                </h3>
                <p className="text-[12.5px] text-zinc-200 leading-relaxed font-light">
                    {step.description}
                </p>
            </div>
        </FadeUp>
    )
}

export default function ProcessSection() {
    return (
        <Section className="relative overflow-hidden">
            <Wrapper>
                <div
                    className="relative rounded-2xl overflow-hidden px-8 py-14 sm:px-12 sm:py-16"
                    style={{
                        background:
                            'radial-gradient(ellipse at 50% 0%, rgba(217,119,6,0.12) 0%, transparent 60%), linear-gradient(180deg, #111008 0%, #0c0c0e 100%)',
                        border: '1px solid rgba(255,255,255,0.06)',
                    }}
                >
                    {/* Grid texture */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                        }}
                    />

                    {/* Top glow */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 opacity-60"
                        style={{
                            background: 'radial-gradient(ellipse, rgba(217,119,6,0.15) 0%, transparent 70%)',
                        }}
                    />

                    {/* Header */}
                    <div className="relative z-10 flex flex-col items-center text-center mb-12">
                        <FadeUp delay={0}>
                            <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1 mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                <span className="text-amber-500 text-[12px] tracking-widest uppercase font-medium">
                                    Our Process
                                </span>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <h2 className="text-3xl lg:text-4xl font-medium text-zinc-200 tracking-tight leading-tight mb-3">
                                A Process Built for{' '}
                                <span className="text-amber-500 font-sora!">Growth</span>
                            </h2>
                        </FadeUp>

                        <FadeUp delay={0.12}>
                            <p className="text-zinc-100 text-[13.5px] font-light max-w-md leading-relaxed">
                                We don't guess. We follow our proven workflow to scale your brand
                                with precision, creativity, and data.
                            </p>
                        </FadeUp>
                    </div>

                    {/* Steps grid */}
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {STEPS.map((step, i) => (
                            <StepCard key={step.number} step={step} index={i} />
                        ))}
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}