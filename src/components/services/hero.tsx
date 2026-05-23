import Link from "next/link";
import { FadeUp } from "../ui/motion_components";
import { Section, Wrapper } from "../ui/sections";
import { ChevronRight } from "lucide-react";

export default function ServiceHero() {
    return (
        <Section className="relative overflow-hidden bg-[#09090b]">

            {/* Grid texture */}
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }} />

            {/* Glow */}
            <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
                style={{ background: 'radial-gradient(ellipse, rgba(217,119,6,0.1) 0%, transparent 65%)' }} />

            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left */}
                    <div className="flex flex-col">

                        <FadeUp delay={0}>
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-1.5 text-[11px] text-zinc-600 mb-6">
                                <Link href="/" className="hover:text-zinc-400 transition-colors">Home</Link>
                                <ChevronRight size={12} />
                                <Link href="/services" className="hover:text-zinc-400 transition-colors">Services</Link>
                                <ChevronRight size={12} />
                                <span className="text-zinc-400">Web Development</span>
                            </div>

                            <SectionBadge label="Web Development" />
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <h1 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-50 tracking-tight leading-[1.06] mb-5">
                                Websites that work as hard as{' '}
                                <span className="text-amber-500">you do</span>
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.12}>
                            <p className="text-zinc-400 text-[14px] leading-relaxed font-light max-w-md mb-8">
                                We build fast, beautiful, and conversion-focused websites —
                                from business portfolios to full-scale e-commerce stores.
                                Delivered in weeks, not months.
                            </p>
                        </FadeUp>

                        {/* CTAs */}
                        <FadeUp delay={0.16} className="flex flex-wrap items-center gap-3 mb-10">
                            <Link href="/contact"
                                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 active:scale-[0.97] text-black text-[13px] font-semibold px-6 py-3 rounded-xl transition-all duration-200">
                                Start your project
                                <ArrowRight size={15} />
                            </Link>
                            <Link href="#case-studies"
                                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-600 text-zinc-300 text-[13px] font-medium px-6 py-3 rounded-xl transition-all duration-200">
                                <Play size={13} className="text-amber-600" />
                                See our work
                            </Link>
                        </FadeUp>

                        {/* Social proof */}
                        <FadeUp delay={0.2} className="flex items-center gap-3">
                            <div className="flex">
                                {['AK', 'RS', 'PV', 'SM'].map((i, idx) => (
                                    <div key={i}
                                        className="size-8 rounded-full border-2 border-[#09090b] bg-zinc-800 flex items-center justify-center text-[9px] font-bold text-amber-600"
                                        style={{ marginLeft: idx === 0 ? 0 : -8 }}>
                                        {i}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-0.5 mb-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={11} fill="#f59e0b" stroke="#f59e0b" strokeWidth={1} />
                                    ))}
                                </div>
                                <p className="text-[10px] text-zinc-500">
                                    Trusted by <span className="text-zinc-300 font-medium">120+ clients</span> across India
                                </p>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right — image placeholder + floating stats */}
                    <FadeUp delay={0.15} className="relative">
                        {/* Main placeholder */}
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                            {/* Grid texture inside */}
                            <div aria-hidden className="absolute inset-0 opacity-30"
                                style={{
                                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                                    backgroundSize: '24px 24px',
                                }} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex flex-col items-center gap-3 opacity-20">
                                    <Globe size={48} className="text-amber-600" strokeWidth={1} />
                                    <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Project screenshot</span>
                                </div>
                            </div>
                            {/* Amber corner pip */}
                            <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-amber-600/60" />
                        </div>

                        {/* Floating stat cards */}
                        <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl">
                            <p className="font-syne text-xl font-black text-amber-500 leading-none">2.1s</p>
                            <p className="text-[9px] text-zinc-500 mt-0.5 uppercase tracking-widest">Avg load time</p>
                        </div>

                        <div className="absolute -top-4 -right-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl">
                            <p className="font-syne text-xl font-black text-amber-500 leading-none">120+</p>
                            <p className="text-[9px] text-zinc-500 mt-0.5 uppercase tracking-widest">Sites launched</p>
                        </div>
                    </FadeUp>
                </div>

                {/* Stat strip */}
                <FadeUp delay={0.25}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden mt-14">
                        {STATS.map((s) => (
                            <div key={s.label} className="bg-[#09090b] px-6 py-5 text-center">
                                <p className="font-syne text-2xl font-extrabold text-amber-500">{s.value}</p>
                                <p className="text-[11px] text-zinc-500 mt-0.5">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}