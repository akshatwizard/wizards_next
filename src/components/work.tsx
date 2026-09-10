import { getFeaturedClients } from '@/constant/clients'
import { Client } from '@/types/client.types'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Section, Wrapper } from './ui/sections'
import { FadeUp } from './ui/motion_components'


function ProjectCard({ client }: { client: Client }) {
    const { name, sectors, tags, colSpan, rowSpan, imgHeight } = client

    return (
        <Link
            href={`/our-works/${client.slug}`}
            className={`h-full group relative bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-zinc-700  transition-all duration-200 flex flex-col ${colSpan ?? ''} ${rowSpan ?? ''}`}
        >
            {/* Image placeholder */}
            <div className={`relative w-full bg-zinc-950 shrink-0 ${rowSpan === 'row-span-2' ? 'flex-1' : (imgHeight ?? 'h-44')}`}>
                {/* Subtle grid texture */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />
                {/* Sector label centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[11px] font-medium text-zinc-600 tracking-widest uppercase">
                        {sectors && sectors.length > 0 ? sectors.join(' / ') : name}
                    </span>
                </div>
                {/* Amber corner accent */}
                <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-amber-600/60" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 bg-amber-600 text-black text-[11px] font-semibold px-4 py-2 rounded-lg">
                        View Project
                        <ArrowUpRight className="w-3 h-3" />
                    </span>
                </div>
            </div>

            {/* Card meta */}
            <div className="px-4 py-3.5 border-t border-zinc-800 shrink-0">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <p className="font-syne text-[13px] font-bold text-zinc-100 tracking-tight leading-snug">
                            {name}
                        </p>
                    </div>
                    <div className="w-6 h-6 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600/15 group-hover:border-amber-600/40 transition-colors">
                        <ArrowUpRight className="w-2.5 h-2.5 text-zinc-400 group-hover:text-amber-600" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-1">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[9.5px] px-1.5 py-0.5 rounded border border-zinc-800 text-zinc-500 bg-zinc-950 group-hover:border-amber-600/20 group-hover:text-zinc-400 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    )
}


export default function PortfolioBentoGrid() {
    const featured = getFeaturedClients(7)

    return (
        <Section>
            <Wrapper>

                {/* Header */}
                <div>
                    <FadeUp className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        <span className="text-amber-600 text-[10px] font-medium tracking-widest uppercase">
                            Our Work
                        </span>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-200">
                            Projects that <span className="text-amber-600">speak for themselves</span>
                        </h2>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-500 text-[12.5px] font-light max-w-md leading-relaxed">
                            From brand-new identities to full-funnel campaigns — a snapshot of what we&apos;ve built for our clients.
                        </p>
                    </FadeUp>
                </div>

                <FadeUp delay={0.2}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                    style={{ gridTemplateRows: 'auto' }}
                >
                    {featured.map((client) => (
                        <ProjectCard key={client.slug} client={client} />
                    ))}
                </FadeUp>

                {/* Footer CTA */}
                <FadeUp delay={0.25} className="flex items-center justify-between ">
                    {getFeaturedClients().length > featured.length ? (
                        <span className="text-[12px] text-zinc-600">Showing {featured.length} of {getFeaturedClients().length}+ projects</span>
                    ) : (
                        <span className="text-[12px] text-zinc-600">More case studies added regularly</span>
                    )}
                    <Link
                        href="/our-works"
                        className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-black text-[12px] font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        View all work
                        <ArrowUpRight size={12}/>
                    </Link>
                </FadeUp>

            </Wrapper>
        </Section>
    )
}