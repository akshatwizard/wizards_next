"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ServiceTestimonialsType } from '@/types/service.types'
import { Section, Wrapper } from '../ui/sections'
import { FadeUp } from '../ui/motion_components'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

export default function ServiceTestimonial({ data }: { data: ServiceTestimonialsType }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { align: 'start' },
        [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
    )

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(true)

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
    const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
        return () => { emblaApi.off('select', onSelect); emblaApi.off('reInit', onSelect) }
    }, [emblaApi, onSelect])

    const list = data.testimonial_list

    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0}>
                    <div
                        className="relative rounded-2xl overflow-hidden px-8 pt-10 pb-8 sm:px-12 sm:pt-14 sm:pb-10"
                        style={{
                            background: 'radial-gradient(ellipse at 50% 0%, rgba(217,119,6,0.1) 0%, transparent 55%), #111008',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                    >
                        {/* Grid texture */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 opacity-[0.12]"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }}
                        />

                        <div ref={emblaRef} className="overflow-hidden relative z-10">
                            <div className="flex">
                                {list.map((item, index) => (
                                    <div
                                        key={item.name}
                                        className="flex-[0_0_100%] min-w-0 flex flex-col items-center text-center px-2 sm:px-8 lg:px-20"
                                    >
                                        <Quote size={36} className="text-amber-600/25 mb-5 shrink-0" strokeWidth={1} />

                                        <p className="ext-lg sm:text-xl lg:text-2xl text-zinc-200 leading-relaxed font-sora! max-w-3xl mb-8">
                                            "{item.quote}"
                                        </p>

                                        <div className="flex flex-col items-center gap-2">
                                            <div className="size-12 rounded-xl bg-amber-600/20 border border-amber-600/30 flex items-center justify-center text-[13px] font-bold text-amber-500">
                                                {item.initials}
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[14px] font-semibold text-zinc-100">{item.name}</p>
                                                <p className="text-[12px] text-zinc-200">{item.role}</p>
                                                <div className="flex items-center justify-center gap-0.5 mt-1.5">
                                                    {[...Array(item.rating)].map((_, i) => (
                                                        <Star key={i} size={11} fill="#f59e0b" stroke="#f59e0b" strokeWidth={1} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Prev button */}
                        <button
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            aria-label="Previous testimonial"
                            className="absolute top-1/2 -translate-y-1/2 left-7 z-10 size-9 rounded-xl border flex items-center justify-center transition-all duration-200 cursor-pointer disabled:cursor-not-allowed
                                    border-white/10 bg-white/5 text-zinc-100
                                    hover:bg-white/10 hover:border-white/20 hover:text-zinc-200
                                    disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:border-white/10 disabled:hover:text-zinc-100"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        {/* Next button */}
                        <button
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            aria-label="Next testimonial"
                            className="absolute top-1/2 -translate-y-1/2 right-7 z-10 size-9 rounded-xl border flex items-center justify-center transition-all duration-200 cursor-pointer disabled:cursor-not-allowed
                                    border-white/10 bg-white/5 text-zinc-100
                                    hover:bg-white/10 hover:border-white/20 hover:text-zinc-200
                                    disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:border-white/10 disabled:hover:text-zinc-100"
                        >
                            <ChevronRight size={16} />
                        </button>

                        <div className="relative z-10 flex items-center justify-center mt-10">
                            <div className="flex items-center gap-2">
                                {list.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => scrollTo(i)}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                        className={`rounded-full transition-all duration-300 cursor-pointer ${i === selectedIndex
                                            ? 'w-6 h-1 bg-amber-500'
                                            : 'w-1 h-1 bg-zinc-700 hover:bg-zinc-500'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}