'use client'

import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Star, StarHalf } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Marquee } from '@/components/ui/marquee'
import { Section, Wrapper } from './ui/sections'
import { FadeUp } from './ui/motion_components'
import { Testimonial, TEXT_TESTIMONIALS, VIDEO_TESTIMONIALS, VideoTestimonial } from '@/constant/testimonials'



export default function Testimonials() {
    const [tab, setTab] = useState<Tab>('quotes')

    // No fabricated placeholders — if there's no real testimonial data yet,
    // this section simply doesn't render, rather than showing an empty
    // shell or invented quotes. Add real entries to constant/testimonials.ts
    // and this reappears on its own.
    if (TEXT_TESTIMONIALS.length === 0 && VIDEO_TESTIMONIALS.length === 0) {
        return null
    }

    return (
        <Section className="relative overflow-hidden bg-[#09090b]">
            <AnimatedBg />

            <Wrapper className="relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center gap-3 mb-10 text-center">
                    <FadeUp delay={0}>
                        <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            <span className="text-amber-500 text-[12px] tracking-widest uppercase">
                                Testimonials
                            </span>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-200">
                            Loved by Our <span className="font-sora! text-amber-500">Clients</span>
                        </h2>
                    </FadeUp>

                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-sm font-light max-w-md leading-relaxed">
                            An unmatched experience — every project feels personal, impactful, and results-driven.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <TabSwitcher active={tab} onChange={setTab} />
                    </FadeUp>
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                    {tab === 'quotes' ? <QuotesView /> : <VideosView />}
                </AnimatePresence>
            </Wrapper>
        </Section>
    )
}



type Tab = 'quotes' | 'videos'

function splitIntoColumns<T>(arr: T[], n: number): T[][] {
    return Array.from({ length: n }, (_, i) =>
        arr.filter((_, idx) => idx % n === i)
    )
}

function StarRating({ rating }: { rating: number }) {
    const full = Math.floor(rating)
    const half = rating - full >= 0.25
    return (
        <span className="flex items-center gap-0.5">
            {Array.from({ length: full }).map((_, i) => (
                <Star key={i} size={12} fill="#f59e0b" stroke="#f59e0b" strokeWidth={1} />
            ))}
            {half && <StarHalf size={12} fill="#f59e0b" stroke="#f59e0b" strokeWidth={1} />}
        </span>
    )
}


function TextCard({ t }: { t: Testimonial }) {
    return (
        <div className="bg-white/4 border border-white/4 rounded-xl p-4 space-y-3 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-300">
            <StarRating rating={t.rating} />
            <p className="text-sm text-zinc-300 leading-relaxed">&quot;{t.text}&quot;</p>
            <div className="flex items-center gap-2.5 pt-1">
                <div className="relative size-8 rounded-full overflow-hidden shrink-0 bg-zinc-800">
                    <Image src={t.profile} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                    <p className="text-xs font-medium text-zinc-200">{t.name}</p>
                    <p className="text-[12px] text-zinc-200">{t.designation}</p>
                </div>
            </div>
        </div>
    )
}

function VideoCard({ v }: { v: VideoTestimonial }) {
    return (
        <div className="group relative bg-white/4 border border-white/8 rounded-xl overflow-hidden hover:border-amber-600/30 transition-all duration-300 cursor-pointer">
            <div className="relative aspect-4/3 bg-zinc-900 overflow-hidden">
                <Image
                    src={v.thumbnail}
                    alt={v.name}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-10 rounded-full bg-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-amber-900/40">
                        <svg className="w-4 h-4 fill-black ml-0.5" viewBox="0 0 24 24">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </div>
                </div>
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/70 rounded text-[12px] text-zinc-300 font-medium">
                    0:45
                </div>
            </div>
            <div className="p-3.5">
                <p className="text-xs text-zinc-300 leading-snug mb-2.5 italic">&quot;{v.quote}&quot;</p>
                <div className="flex items-center gap-2">
                    <div className="relative size-6 rounded-full overflow-hidden shrink-0 bg-zinc-800">
                        <Image src={v.thumbnail} alt={v.name} fill className="object-cover" />
                    </div>
                    <div>
                        <p className="text-[12px] font-medium text-zinc-200">{v.name}</p>
                        <p className="text-[12px] text-zinc-200">{v.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


function MaskedColumn({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn('relative h-full w-full overflow-hidden', className)}>
            {children}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-linear-to-b from-[#09090b] via-[#09090b]/70 to-transparent z-20" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#09090b] via-[#09090b]/70 to-transparent z-20" />
        </div>
    )
}


function AnimatedBg() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <motion.div
                className="absolute w-150 h-150 rounded-full"
                style={{
                    background: 'radial-gradient(ellipse, rgba(217,119,6,0.08) 0%, transparent 70%)',
                    top: '-15%',
                    left: '15%',
                }}
                animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute w-1000 h-1000 rounded-full"
                style={{
                    background: 'radial-gradient(ellipse, rgba(217,119,6,0.05) 0%, transparent 70%)',
                    bottom: '5%',
                    right: '10%',
                }}
                animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
                transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
            />
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />
        </div>
    )
}

function TabSwitcher({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
    return (
        <div className="inline-flex items-center p-1 rounded-xl bg-zinc-900 border border-zinc-800">
            {(['quotes', 'videos'] as Tab[]).map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={cn(
                        'relative px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer',
                        active === tab ? 'text-zinc-950' : 'text-zinc-100 hover:text-zinc-200'
                    )}
                >
                    {active === tab && (
                        <motion.div
                            layoutId="tab-pill"
                            className="absolute inset-0 rounded-lg bg-zinc-100"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">
                        {tab === 'quotes' ? 'Client Quotes' : 'Client Videos'}
                    </span>
                </button>
            ))}
        </div>
    )
}

function QuotesView() {
    const cols = splitIntoColumns(TEXT_TESTIMONIALS, 4)

    const config = [
        { duration: '25s', reverse: false, show: '' },
        { duration: '32s', reverse: true, show: 'hidden sm:block' },
        { duration: '28s', reverse: false, show: 'hidden md:block' },
        { duration: '35s', reverse: true, show: 'hidden lg:block' },
    ]

    return (
        <motion.div
            key="quotes"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="w-full h-130 lg:h-150 flex gap-3"
        >
            {cols.map((col, ci) => (
                <MaskedColumn key={ci} className={config[ci].show}>
                    <Marquee
                        vertical
                        pauseOnHover
                        reverse={config[ci].reverse}
                        className={`h-full`}
                        style={{ '--duration': config[ci].duration, '--gap': '0.75rem' } as React.CSSProperties}
                    >
                        {col.map((t, i) => (
                            <TextCard key={i} t={t} />
                        ))}
                    </Marquee>
                </MaskedColumn>
            ))}
        </motion.div>
    )
}

function VideosView() {
    const cols = splitIntoColumns(VIDEO_TESTIMONIALS, 3)

    const config = [
        { duration: '28s', reverse: false, show: '' },
        { duration: '34s', reverse: true, show: 'hidden sm:block' },
        { duration: '30s', reverse: false, show: 'hidden lg:block' },
    ]

    return (
        <motion.div
            key="videos"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="w-full h-130 lg:h-150 flex gap-3"
        >
            {cols.map((col, ci) => (
                <MaskedColumn key={ci} className={config[ci].show}>
                    <Marquee
                        vertical
                        pauseOnHover
                        reverse={config[ci].reverse}
                        className={`h-full`}
                        style={{ '--duration': config[ci].duration, '--gap': '0.75rem' } as React.CSSProperties}
                    >
                        {col.map((v, i) => (
                            <VideoCard key={i} v={v} />
                        ))}
                    </Marquee>
                </MaskedColumn>
            ))}
        </motion.div>
    )
}