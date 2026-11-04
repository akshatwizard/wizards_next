'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { ServiceMeta } from '@/constant/service_meta'

const AUTO_ADVANCE_MS = 2000

function ServiceCard({ service, active, onActivate }: { service: ServiceMeta; active: boolean; onActivate: () => void }) {
    const { name, desc, slug } = service
    return (
        <Link
            href={`/services/${slug}`}
            tabIndex={active ? 0 : -1}
            aria-hidden={!active}
            onClick={(e) => {
                // Side cards become active instead of navigating
                if (!active) {
                    e.preventDefault()
                    onActivate()
                }
            }}
            className="group h-full relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden lg:p-6 md:p-5 p-4 flex flex-col gap-3 transition-colors duration-200 hover:bg-zinc-800/60"
        >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-zinc-700/50 group-hover:bg-amber-600 transition-colors duration-300" />

            <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-amber-600/10 blur-xl rounded-full scale-90 group-hover:bg-amber-600/15 transition-colors duration-300" />
                    <Image
                        src={`/images/services/icons/${slug}-icon.webp`}
                        alt={`${name} icon`}
                        width={256}
                        height={256}
                        className="relative w-full h-full object-contain"
                    />
                </div>
                <div className="flex-1 flex items-start justify-between gap-2 min-w-0">
                    <h3 className="text-[17px] text-zinc-200 leading-snug tracking-tight font-semibold">
                        {name}
                    </h3>
                    <ArrowUpRight size={16} className="text-zinc-300 group-hover:text-amber-600 shrink-0 mt-1 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                </div>
            </div>

            <p className="text-[13px] text-zinc-200 leading-relaxed font-light">
                {desc}
            </p>
        </Link>
    )
}

export default function ServicesCarousel({ services }: { services: ServiceMeta[] }) {
    const n = services.length
    const [active, setActive] = useState(0)
    const [hovered, setHovered] = useState(false)
    const [touching, setTouching] = useState(false)
    const [reducedMotion, setReducedMotion] = useState(false)
    const touchX = useRef<number | null>(null)

    const go = useCallback((i: number) => setActive(((i % n) + n) % n), [n])

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        const update = () => setReducedMotion(mq.matches)
        update()
        mq.addEventListener('change', update)
        return () => mq.removeEventListener('change', update)
    }, [])

    useEffect(() => {
        if (hovered || touching || reducedMotion) return
        const t = setInterval(() => setActive((a) => (a + 1) % n), AUTO_ADVANCE_MS)
        return () => clearInterval(t)
    }, [hovered, touching, reducedMotion, n])

    return (
        <div
            className="relative"
            role="region"
            aria-roledescription="carousel"
            aria-label="Our services"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') go(active - 1)
                if (e.key === 'ArrowRight') go(active + 1)
            }}
        >
            <div
                className="overflow-hidden py-6"
                onTouchStart={(e) => { setTouching(true); touchX.current = e.touches[0].clientX }}
                onTouchEnd={(e) => {
                    if (touchX.current !== null) {
                        const dx = e.changedTouches[0].clientX - touchX.current
                        if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1))
                    }
                    touchX.current = null
                    setTouching(false)
                }}
                onTouchCancel={() => { touchX.current = null; setTouching(false) }}
            >
                {/* All cards share one grid cell so the track height = tallest card (no layout shift) */}
                <div className="grid">
                    {services.map((svc, i) => {
                        let d = (i - active + n) % n
                        if (d > n / 2) d -= n
                        const abs = Math.abs(d)
                        const isActive = d === 0
                        const style: React.CSSProperties = {
                            gridArea: '1 / 1',
                            transform: `translateX(${d * 104}%) scale(${isActive ? 1.05 : 0.9})`,
                            opacity: isActive ? 1 : abs === 1 ? 0.5 : abs === 2 ? 0.2 : 0,
                            filter: isActive ? 'none' : `blur(${abs === 1 ? 3 : 4}px)`,
                            zIndex: 10 - abs,
                            pointerEvents: abs <= 1 ? 'auto' : 'none',
                            visibility: abs <= 2 ? 'visible' : 'hidden',
                        }
                        return (
                            <div
                                key={svc.slug}
                                style={style}
                                className="justify-self-center w-[78%] sm:w-[60%] md:w-[38%] lg:w-[32%] transition-[transform,opacity,filter] duration-800 ease-out motion-reduce:transition-none"
                            >
                                <ServiceCard service={svc} active={isActive} onActivate={() => go(i)} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
                <button type="button" aria-label="Previous service" onClick={() => go(active - 1)} className="p-1.5 rounded-full border border-zinc-800 text-zinc-300 hover:text-amber-600 hover:border-amber-600/40 transition-colors">
                    <ChevronLeft size={16} />
                </button>
                <span className="text-zinc-300 text-xs tabular-nums" aria-live="polite">
                    {active + 1} / {n}
                </span>
                <button type="button" aria-label="Next service" onClick={() => go(active + 1)} className="p-1.5 rounded-full border border-zinc-800 text-zinc-300 hover:text-amber-600 hover:border-amber-600/40 transition-colors">
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    )
}
