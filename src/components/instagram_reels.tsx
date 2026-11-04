'use client'

import React, { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Play, Volume2, VolumeX } from 'lucide-react'
import { Section, Wrapper } from './ui/sections'
import { FadeUp } from './ui/motion_components'
import { INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL, INSTAGRAM_REELS, InstagramReel } from '@/constant/instagram_reels'

function IgIcon({ className }: { className?: string }) {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' strokeWidth='2' className={className}>
            <rect x='3.5' y='3.5' width='17' height='17' rx='5' />
            <circle cx='12' cy='12' r='4' />
            <circle cx='17.3' cy='6.7' r='1' fill='currentColor' stroke='none' />
        </svg>
    )
}

// Native <video> straight from Instagram's CDN (no iframe, no Instagram chrome, no Vercel proxying).
// Only cards near the viewport get a src; only cards >=60% visible play. Reduced motion: poster + play button.
const MUTE_EVENT = 'wizards-reel-unmute'
const RM_QUERY = '(prefers-reduced-motion: reduce)'
const useReducedMotion = () => useSyncExternalStore(
    cb => { const m = window.matchMedia(RM_QUERY); m.addEventListener('change', cb); return () => m.removeEventListener('change', cb) },
    () => window.matchMedia(RM_QUERY).matches,
    () => false,
)

function SpeakerIcon({ muted }: { muted: boolean }) {
    return muted ? <VolumeX className='w-4 h-4' aria-hidden /> : <Volume2 className='w-4 h-4' aria-hidden />
}

function ReelCard({ reel, index, total }: { reel: InstagramReel; index: number; total: number }) {
    const ref = useRef<HTMLVideoElement>(null)
    const box = useRef<HTMLDivElement>(null)
    const [near, setNear] = useState(false)
    const [failed, setFailed] = useState(false)
    const [muted, setMuted] = useState(true)
    const reduce = useReducedMotion()
    const [manual, setManual] = useState(false)
    const hasVideo = !!reel.video && !failed

    // Attach src only when within ~1 viewport-width of the screen.
    useEffect(() => {
        const el = box.current
        if (!el || !hasVideo || near) return
        const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect() } }, { rootMargin: '200px 100% 200px 100%' })
        io.observe(el)
        return () => io.disconnect()
    }, [hasVideo, near])

    // Play only while >=60% visible.
    useEffect(() => {
        const el = box.current, v = ref.current
        if (!el || !v || !near || !hasVideo) return
        const io = new IntersectionObserver(([e]) => {
            if (e.intersectionRatio >= 0.6 && (!reduce || manual)) v.play().catch(() => {})
            else v.pause()
        }, { threshold: [0, 0.6, 1] })
        io.observe(el)
        return () => io.disconnect()
    }, [near, hasVideo, reduce, manual])

    // Unmuting one reel mutes the others.
    useEffect(() => {
        const h = (e: Event) => { if ((e as CustomEvent).detail !== reel.url) { setMuted(true); if (ref.current) ref.current.muted = true } }
        window.addEventListener(MUTE_EVENT, h)
        return () => window.removeEventListener(MUTE_EVENT, h)
    }, [reel.url])

    const toggleMute = () => {
        const v = ref.current
        if (!v) return
        const next = !muted
        v.muted = next
        setMuted(next)
        if (!next) window.dispatchEvent(new CustomEvent(MUTE_EVENT, { detail: reel.url }))
        if (v.paused) v.play().catch(() => {})
    }
    const startManual = () => { setManual(true); setNear(true); ref.current?.play().catch(() => {}) }
    const showPlayBtn = reduce && !manual

    return (
        <div className='reel-card shrink-0 snap-start w-[min(270px,78vw)] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60'
            role='group' aria-roledescription='slide' aria-label={`Reel ${index + 1} of ${total}`}>
            <div ref={box} className='relative aspect-[9/16] bg-gradient-to-br from-zinc-900 via-[#1a1206] to-zinc-950'>
                {hasVideo ? (
                    <>
                        <video ref={ref} src={near ? reel.video : undefined} poster={reel.poster}
                            muted playsInline loop preload={near ? 'metadata' : 'none'}
                            onError={() => setFailed(true)} onClick={toggleMute}
                            aria-label={reel.caption}
                            className='absolute inset-0 w-full h-full object-cover cursor-pointer' />
                        {showPlayBtn ? (
                            <button type='button' onClick={startManual} aria-label={`Play reel: ${reel.caption}`}
                                className='absolute inset-0 flex items-center justify-center group cursor-pointer'>
                                <span className='w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform'>
                                    <Play className='w-7 h-7 ml-1' aria-hidden />
                                </span>
                            </button>
                        ) : (
                            <button type='button' onClick={toggleMute} aria-label={muted ? 'Unmute reel' : 'Mute reel'}
                                className='absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80'>
                                <SpeakerIcon muted={muted} />
                            </button>
                        )}
                        <div className='pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-3 pl-4 pr-14'>
                            <p className='text-sm font-light leading-snug text-zinc-100 line-clamp-2'>{reel.caption}</p>
                        </div>
                    </>
                ) : (
                    <a href={reel.url} target='_blank' rel='noopener noreferrer' aria-label={`Watch reel on Instagram: ${reel.caption}`}
                        className='absolute inset-0 flex flex-col items-center justify-center gap-4 text-zinc-200 group cursor-pointer'>
                        {reel.poster && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={reel.poster} alt='' loading='lazy' className='absolute inset-0 w-full h-full object-cover opacity-70' />
                        )}
                        <IgIcon className='absolute top-4 left-4 w-6 h-6 text-amber-500/80' />
                        <span className='relative w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform'>
                            <Play className='w-7 h-7 ml-1' aria-hidden />
                        </span>
                        <span className='relative px-6 text-center text-sm font-light leading-relaxed'>{reel.caption}</span>
                    </a>
                )}
            </div>
            <div className='flex items-center justify-between gap-3 px-4 py-3 text-xs text-zinc-400'>
                <span className='truncate'>{INSTAGRAM_HANDLE}</span>
                <a href={reel.url} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1 hover:text-amber-500'>
                    Instagram <ExternalLink className='w-3 h-3' aria-hidden />
                </a>
            </div>
        </div>
    )
}

export default function InstagramReels({ reels = INSTAGRAM_REELS }: { reels?: InstagramReel[] }) {
    const track = useRef<HTMLDivElement>(null)
    const [pos, setPos] = useState({ start: true, end: true })

    const update = useCallback(() => {
        const t = track.current
        if (!t) return
        const max = t.scrollWidth - t.clientWidth
        setPos({ start: t.scrollLeft <= 4, end: t.scrollLeft >= max - 4 })
    }, [])
    useEffect(() => {
        update()
        const t = track.current
        if (!t) return
        t.addEventListener('scroll', update, { passive: true })
        window.addEventListener('resize', update)
        return () => { t.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
    }, [update])

    const step = (dir: 1 | -1) => {
        const t = track.current
        if (!t) return
        const card = t.querySelector<HTMLElement>('.reel-card')
        const w = card ? card.offsetWidth + 20 : t.clientWidth
        const per = Math.max(1, Math.floor((t.clientWidth + 20) / w))
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        t.scrollBy({ left: dir * w * per, behavior: reduce ? 'auto' : 'smooth' })
    }
    const onKey = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); step(1) }
        if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1) }
    }

    if (reels.length === 0) return null
    const showArrows = !(pos.start && pos.end)

    return (
        <Section id='instagram' className='relative overflow-hidden bg-[#09090b]'>
            <Wrapper className='relative z-10'>
                <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10'>
                    <div className='flex flex-col gap-3'>
                        <FadeUp delay={0}>
                            <div className='inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1 w-fit'>
                                <span className='w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse' />
                                <span className='text-amber-500 text-[12px] tracking-widest uppercase'>Reels</span>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h2 className='text-3xl lg:text-4xl font-medium tracking-tight text-zinc-200'>
                                Watch us on <span className='font-sora! text-amber-500'>Instagram</span>
                            </h2>
                        </FadeUp>
                        <FadeUp delay={0.15}>
                            <p className='text-zinc-200 text-sm font-light max-w-md leading-relaxed'>
                                Quick, practical marketing tips and behind-the-scenes from our team.
                            </p>
                        </FadeUp>
                    </div>
                    <FadeUp delay={0.2}>
                        <a href={INSTAGRAM_PROFILE_URL} target='_blank' rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-sm font-medium px-5 py-2.5 transition-colors w-fit'>
                            <IgIcon className='w-4 h-4' /> Follow {INSTAGRAM_HANDLE}
                        </a>
                    </FadeUp>
                </div>

                <div ref={track} tabIndex={0} role='region' aria-roledescription='carousel'
                    aria-label='Instagram reels. Use left and right arrow keys to scroll.' onKeyDown={onKey}
                    className='flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden outline-none'>
                    {reels.map((r, i) => <ReelCard key={r.url} reel={r} index={i} total={reels.length} />)}
                </div>

                {showArrows && (
                    <div className='flex justify-end gap-3 mt-4'>
                        <button type='button' onClick={() => step(-1)} disabled={pos.start} aria-label='Previous reels'
                            className='w-10 h-10 rounded-full border border-zinc-700 text-zinc-200 flex items-center justify-center disabled:opacity-30 hover:border-amber-500'>
                            <ChevronLeft className='w-5 h-5' aria-hidden />
                        </button>
                        <button type='button' onClick={() => step(1)} disabled={pos.end} aria-label='Next reels'
                            className='w-10 h-10 rounded-full border border-zinc-700 text-zinc-200 flex items-center justify-center disabled:opacity-30 hover:border-amber-500'>
                            <ChevronRight className='w-5 h-5' aria-hidden />
                        </button>
                    </div>
                )}
            </Wrapper>
        </Section>
    )
}
