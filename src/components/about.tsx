import Link from 'next/link'
import { Zap, Users, ArrowRight, Globe2 } from 'lucide-react'
import { FadeUp } from './ui/motion_components'
import { Section, Wrapper } from './ui/sections'


function Feature({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="shrink-0 size-10 rounded-xl bg-amber-600/15 border border-amber-600/25 flex items-center justify-center">
                <Icon size={18} className="text-amber-500" strokeWidth={1.8} />
            </div>
            <div>
                <p className="font-medium text-[15px] text-zinc-200 mb-0.5">{title}</p>
                <p className="text-[13px] text-zinc-200 leading-snug">{description}</p>
            </div>
        </div>
    )
}


function ImageBlock() {
    return (
        <div className="relative w-full mx-auto lg:mx-0 -rotate-6">
            {/* Main image placeholder */}
            <div className="relative w-full lg:h-120 md:h-96 h-90  rounded-[50px] overflow-hidden bg-zinc-900 border border-white/[0.07]">
                {/* Grid texture */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />

                {/* Stacked "DIGITAL" text watermark — like the reference */}
                <div className="absolute inset-0 flex flex-col items-end justify-center pr-4 gap-1 select-none pointer-events-none">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <span
                            key={i}
                            className="font-syne text-2xl font-black tracking-widest leading-none"
                            style={{
                                color: i === 3 ? '#f59e0b' : `rgba(255,255,255,${0.04 + i * 0.015})`,
                                fontSize: `${20 + i * 1.5}px`,
                            }}
                        >
                            DIGITAL
                        </span>
                    ))}
                </div>

                {/* Ambient glow */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(ellipse at 30% 60%, rgba(139,92,246,0.18) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(217,119,6,0.12) 0%, transparent 55%)',
                    }}
                />

                {/* Center icon as stand-in for the hand/network image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        {/* Outer ring */}
                        <div className="size-32 rounded-full border border-white/10 flex items-center justify-center">
                            {/* Inner ring */}
                            <div className="size-20 rounded-full border border-amber-600/30 bg-amber-600/5 flex items-center justify-center">
                                <Zap size={32} className="text-amber-500" strokeWidth={1.5} />
                            </div>
                        </div>
                        {/* Orbiting dots */}
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                            <div
                                key={i}
                                className="absolute size-1.5 rounded-full bg-amber-600/60"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: `rotate(${deg}deg) translateX(64px) translateY(-50%)`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom-left "TR 2" badge area */}
                <div className="absolute bottom-4 left-4 flex items-end gap-1">
                    <span className="font-syne text-6xl font-black text-white/10 leading-none select-none">
                        WN
                    </span>
                </div>
            </div>

            {/* Floating stat badge — bottom right, overlapping */}
            <div className="absolute -bottom-4 -right-4 sm:right-0 lg:-right-6 bg-amber-600 rounded-2xl px-5 py-4 shadow-xl shadow-amber-900/40">
                <p className="font-syne text-3xl font-black text-black leading-none">24+</p>
                <p className="text-[12px] font-medium text-black/70 mt-0.5 tracking-wide uppercase">
                    Years of Excellence
                </p>
            </div>

            {/* Subtle corner accent */}
            {/* <div className="absolute -top-3 -left-3 size-6 rounded-full border-2 border-amber-600/40 bg-amber-600/10" /> */}
        </div>
    )
}


export default function AboutUs() {
    return (
        <Section className="relative overflow-hidden bg-zinc-800/10">
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 opacity-30"
                style={{
                    background:
                        'radial-gradient(ellipse, rgba(217,119,6,0.12) 0%, transparent 65%)',
                }}
            />

            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ── Left: Image ── */}
                    <FadeUp delay={0} className="flex justify-center w-full border border-amber-600/20 lg:p-12 md:p-9 p-6 rounded-[100px] bg-amber-600/5 rotate-6">
                        <ImageBlock />
                    </FadeUp>

                    <div className="flex flex-col gap-6">
                        <FadeUp delay={0.1}>
                            <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1 mb-4 w-max">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                <span className="text-amber-500 text-[12px] tracking-widest uppercase">
                                    About Us
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl font-medium text-zinc-200 tracking-tight leading-tight mb-5">
                                The Alchemy of <span className="font-sora! text-amber-600">Wizards</span>
                            </h2>

                            {/* Body copy */}
                            <div className="space-y-3 text-[13.5px] text-zinc-200 leading-relaxed font-light">
                                <p>
                                    Wizards Next is a growth-oriented and progressive organization working
                                    in the field of digital marketing since June 2023. Initially formed as
                                    a subsidiary of JR Digital Marketing Services and Arushi Inforbit Solutions.
                                </p>
                                <p>
                                    By combining the capabilities of these two titans, Wizards is well-positioned
                                    to offer complete integrated digital services and innovative design to clients
                                    across India — with offices in Varanasi and Hyderabad, 50+ projects running
                                    nationwide, and overseas clients in the USA, Russia, and Spain.
                                </p>
                            </div>
                        </FadeUp>

                        {/* Feature rows */}
                        <FadeUp delay={0.2}>
                            <div className="space-y-4 pt-1">
                                <Feature
                                    icon={Zap}
                                    title="Superior Performance"
                                    description="Measurable goals focused on market leadership and real ROI."
                                />
                                <Feature
                                    icon={Users}
                                    title="Collaborative Power"
                                    description="A joint venture legacy built on trust, transparency, and innovation."
                                />
                                <Feature
                                    icon={Globe2}
                                    title="Two Cities, Nationwide Reach"
                                    description="Varanasi and Hyderabad at home, 50+ projects across India, and clients overseas."
                                />
                            </div>
                        </FadeUp>

                        {/* CTA */}
                        <FadeUp delay={0.3}>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-amber-600/50 hover:bg-amber-600/5 text-zinc-300 text-[13px] font-medium px-6 py-3 rounded-full transition-all duration-200 w-max mt-1"
                            >
                                Read Our Full Story
                                <ArrowRight size={14} />
                            </Link>
                        </FadeUp>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}