"use client"
import React, { useState, useRef } from 'react'
import { Section, Wrapper } from './ui/sections'
import { Service, services } from '@/constant/services'
import { FadeUp } from './ui/motion_components'
import Link from 'next/link'


function ServiceCard({ service }: { service: Service }) {
    const [hovered, setHovered] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const { Icon, name, desc, tags, video } = service

    const startVideo = () => {
        setHovered(true)
        if (videoRef.current) {
            videoRef.current.currentTime = 0
            videoRef.current.play().catch(() => { })
        }
    }

    const stopVideo = () => {
        setHovered(false)
        if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
        }
    }

    return (
        <div
            onMouseEnter={startVideo}
            onMouseLeave={stopVideo}
            onTouchStart={startVideo}
            onTouchEnd={stopVideo}
            className="h-full relative bg-zinc-900 lg:p-7 md:p-5 p-4 flex flex-col gap-4 transition-colors duration-200 hover:bg-zinc-800/60 cursor-default overflow-hidden"
        >
            {/* Amber top accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-0.5 transition-colors duration-300 z-10 ${hovered ? "bg-amber-600" : "bg-zinc-700/50"}`} />

            {/* Video overlay */}
            {video && (
                <>
                    <video
                        ref={videoRef}
                        src={video}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
                    />
                    {/* Scrim — darker so the centered label pops */}
                    <div className={`absolute inset-0 z-0 transition-opacity duration-500 bg-black/70 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
                </>
            )}

            {/* Content — hidden when video is playing */}
            <div className={`relative z-10 flex flex-col gap-4 h-full transition-opacity duration-300 ${hovered && video ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center border bg-amber-600/10 border-amber-600/20">
                    <Icon size={20} className="text-amber-600" strokeWidth={1.6} />
                </div>

                {/* Title */}
                <h3 className="lg:text-xl md:text-lg text-zinc-200 leading-snug tracking-tight">
                    {name}
                </h3>

                {/* Description */}
                <p className="text-[12.5px] text-zinc-500 leading-relaxed font-light flex-1">
                    {desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10.5px] px-2 py-0.5 rounded border bg-zinc-950 border-zinc-700/60 text-zinc-500">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Centered label shown over video */}
            {video && (
                <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center border bg-amber-600/20 border-amber-600/40">
                        <Icon size={20} className="text-amber-500" strokeWidth={1.6} />
                    </div>
                    <p className="text-sm font-semibold text-zinc-100 tracking-tight">{name}</p>
                </div>
            )}
        </div>
    )
}

export default function Services() {
    return (
        <Section className="relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-140 h-45 bg-amber-600/5 blur-3xl rounded-full" />
            <Wrapper>
                <FadeUp delay={0.1} className="relative mb-8">
                    <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-4 py-1.5 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
                        <span className="text-amber-600 text-[11px] tracking-widest uppercase">
                            What We Do
                        </span>
                    </div>

                    <h2 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
                        Everything your brand needs{" "}<br />
                        <span className="text-amber-600 font-sora!">to grow online</span>
                    </h2>

                    <p className="text-zinc-500 text-[13.5px] leading-relaxed font-light max-w-xl">
                        From building your identity to running high-converting ad campaigns —
                        we cover the full digital spectrum so you don't have to juggle
                        multiple agencies.
                    </p>
                </FadeUp>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-px border border-zinc-800 rounded-2xl overflow-hidden">
                    {services.map((svc, idx) => (
                        <FadeUp delay={idx * 0.1} key={svc.name} className="h-full">
                            <ServiceCard service={svc} />
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.2} className="flex items-center justify-between pt-4">
                    <span className="text-zinc-600 text-xs">
                        9 services · Varanasi &amp; Pan-India
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