'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FadeUp } from './ui/motion_components'
import { Section, Wrapper } from './ui/sections'
import { FEATURED, FeaturedPost, SMALL_POSTS, SmallPost, Tag } from '@/constant/blogs'

export default function BlogSection() {
    return (
        <Section className="relative overflow-hidden bg-[#09090b]">
            <Wrapper>

                {/* Header */}
                <FadeUp delay={0} className="flex items-end justify-between gap-4 flex-wrap">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1 mb-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                            <span className="text-amber-600 text-[10px] tracking-[1.5px] uppercase">
                                Blog & Insights
                            </span>
                        </div>
                        <h2 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
                            Fresh takes on <span className="text-amber-600 font-sora!">digital growth</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 text-amber-600 text-[12px] font-medium border border-amber-600/25 rounded-lg px-4 py-2 hover:bg-amber-600/8 hover:border-amber-600/45 transition-all duration-200 shrink-0"
                    >
                        View all posts
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>
                </FadeUp>

                {/* Blog grid */}
                <FadeUp delay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-px bg-zinc-800 rounded-t-2xl overflow-hidden">
                        {/* Left: featured */}
                        <FeaturedCard post={FEATURED} />

                        {/* Right: 3 small cards */}
                        <div className="flex flex-col gap-px bg-zinc-800">
                            {SMALL_POSTS.map((post) => (
                                <SmallCard key={post.href} post={post} />
                            ))}
                        </div>
                    </div>

                    {/* Newsletter strip — flush below the grid */}
                    <NewsletterStrip />
                </FadeUp>

            </Wrapper>
        </Section>
    )
}


function CategoryPill({ label }: { label: string }) {
    return (
        <span className="absolute top-2.5 left-2.5 z-10 text-[9px] font-semibold tracking-[0.8px] uppercase px-2 py-1 rounded-[5px] border border-amber-600/30 bg-amber-600/12 text-amber-600">
            {label}
        </span>
    )
}

function Tags({ tags, hovered }: { tags: Tag[]; hovered: boolean }) {
    return (
        <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className={`text-[9.5px] px-1.5 py-0.5 rounded border transition-colors duration-200 bg-[#111114] ${hovered ? 'border-amber-600/20 text-zinc-200' : 'border-zinc-700/60 text-zinc-300'
                        }`}
                >
                    {tag}
                </span>
            ))}
        </div>
    )
}

function ReadArrow() {
    return (
        <span className="flex items-center gap-1 text-[10px] text-amber-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0">
            Read
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" /><path d="M7 7h10v10" />
            </svg>
        </span>
    )
}


function FeaturedCard({ post }: { post: FeaturedPost }) {
    const [hovered, setHovered] = useState(false)

    return (
        <Link
            href={post.href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group flex flex-col bg-[#18181b] hover:bg-[#1f1f23] transition-colors duration-200 overflow-hidden"
        >
            {/* Image placeholder */}
            <div className="relative h-48 sm:h-56 shrink-0 bg-zinc-900">
                <CategoryPill label={post.category} />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-1.5 flex-1 p-5">
                <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-1.5">
                        <div className="w-4.5 h-4.5 rounded-[5px] bg-amber-600/15 border border-amber-600/25 flex items-center justify-center text-[7px] font-bold text-amber-600">
                            {post.author.initials}
                        </div>
                        <span className="text-[10px] text-zinc-300">{post.author.name}</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span className="text-[10px] text-zinc-300">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span className="text-[10px] text-zinc-700">{post.readTime}</span>
                </div>

                <h3 className="font-syne text-[16px] font-bold text-zinc-200 leading-snug tracking-tight">
                    {post.title}
                </h3>

                <p className="text-[11.5px] text-zinc-300 leading-relaxed font-light">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-zinc-800">
                    <Tags tags={post.tags} hovered={hovered} />
                    <ReadArrow />
                </div>
            </div>
        </Link>
    )
}

function SmallCard({ post }: { post: SmallPost }) {
    const [hovered, setHovered] = useState(false)

    return (
        <Link
            href={post.href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group flex flex-row bg-[#18181b] hover:bg-[#1f1f23] transition-colors duration-200 overflow-hidden"
        >
            {/* Image placeholder */}
            <div className="relative w-24 sm:w-28 shrink-0 bg-zinc-900">
                <CategoryPill label={post.category} />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-1.5 flex-1 p-3.5">
                <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-zinc-300">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span className="text-[10px] text-zinc-700">{post.readTime}</span>
                </div>

                <h3 className="font-syne text-[12.5px] font-bold text-zinc-300 leading-snug tracking-tight">
                    {post.title}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-zinc-800">
                    <Tags tags={post.tags} hovered={hovered} />
                    <ReadArrow />
                </div>
            </div>
        </Link>
    )
}


function NewsletterStrip() {
    const [email, setEmail] = useState('')

    return (
        <div className="flex items-center justify-between gap-4 flex-wrap bg-[#18181b] border border-zinc-800 border-t-0 rounded-b-2xl px-5 py-4">
            {/* Left */}
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[9px] bg-amber-600/12 border border-amber-600/20 flex items-center justify-center shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                </div>
                <div>
                    <p className="font-syne text-[13px] font-semibold text-zinc-200">
                        Get weekly growth tips in your inbox
                    </p>
                    <p className="text-[11px] text-zinc-300 mt-0.5">No spam. Unsubscribe any time.</p>
                </div>
            </div>

            {/* Right */}
            <div className="flex gap-1.5 flex-1 max-w-xs sm:max-w-sm">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 bg-[#111114] border border-zinc-800 text-zinc-200 placeholder-zinc-600 text-[12px] px-3.5 py-2 rounded-lg outline-none focus:border-amber-600/40 transition-colors"
                />
                <button
                    onClick={() => { /* wire up your email handler here */ }}
                    className="bg-amber-600 hover:bg-amber-700 active:scale-[0.97] text-black text-[12px] font-semibold px-4 py-2 rounded-lg transition-all duration-200 shrink-0 cursor-pointer"
                >
                    Subscribe →
                </button>
            </div>
        </div>
    )
}


