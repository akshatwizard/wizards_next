import { getFeaturedClients, getRandomFeaturedClients } from '@/constant/clients'
import { Client } from '@/types/client.types'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Wrapper } from './ui/sections'
import { FadeUp } from './ui/motion_components'


export function ProjectCard({ client }: { client: Client }) {
    const { name, sectors, tags, heroImage } = client
    const visibleTags = tags.slice(0, 2)
    const extraCount = tags.length - visibleTags.length

    return (
        <Link
            href={`/our-works/${client.slug}`}
            className="h-full group relative bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-amber-600/30 transition-all duration-200 flex flex-col"
        >
            {/* Image — square container matching the illustrations' real
                1:1 aspect ratio, so they fill it edge to edge instead of
                floating small inside a short, wide box */}
            <div className="relative w-full aspect-square shrink-0 bg-zinc-950 flex items-center justify-center p-3">
                {heroImage ? (
                    <Image
                        src={heroImage}
                        alt={`${name} illustration`}
                        width={1254}
                        height={1254}
                        className="relative w-full h-full object-contain"
                    />
                ) : (
                    <>
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                                backgroundSize: '24px 24px',
                            }}
                        />
                        <span className="relative text-[11px] font-medium text-zinc-300 tracking-widest uppercase">
                            {sectors && sectors.length > 0 ? sectors.join(' / ') : name}
                        </span>
                    </>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 bg-amber-600 text-black text-[11px] font-semibold px-3 py-1.5 rounded-lg">
                        View Project
                        <ArrowUpRight className="w-3 h-3" />
                    </span>
                </div>
            </div>

            {/* Card meta — name leads, sized to actually be read at a glance */}
            <div className="px-4 py-3.5 border-t border-zinc-800 shrink-0 flex-1 flex flex-col justify-between gap-2.5">
                <div className="flex items-start justify-between gap-2">
                    <p className="font-syne text-[16px] font-bold text-zinc-100 tracking-tight leading-snug">
                        {name}
                    </p>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-600 transition-colors shrink-0 mt-1" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {visibleTags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[11.5px] font-medium px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-200 bg-zinc-950 group-hover:border-amber-600/25 group-hover:text-zinc-100 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                    {extraCount > 0 && (
                        <span className="text-[11.5px] font-medium px-2 py-0.5 rounded-full text-zinc-300">
                            +{extraCount} more
                        </span>
                    )}
                </div>
            </div>
        </Link>
    )
}


export default function PortfolioBentoGrid() {
    const featured = getRandomFeaturedClients(8)

    return (
        <Section>
            <Wrapper>

                {/* Header */}
                <div>
                    <FadeUp className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        <span className="text-amber-600 text-[12px] font-medium tracking-widest uppercase">
                            Our Work
                        </span>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-200">
                            Projects that <span className="text-amber-600">speak for themselves</span>
                        </h2>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-[12.5px] font-light max-w-md leading-relaxed">
                            From brand-new identities to full-funnel campaigns — a snapshot of what we&apos;ve built for our clients.
                        </p>
                    </FadeUp>
                </div>

                <FadeUp delay={0.2}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                >
                    {featured.map((client) => (
                        <ProjectCard key={client.slug} client={client} />
                    ))}
                </FadeUp>

                {/* Footer CTA */}
                <FadeUp delay={0.25} className="flex items-center justify-between ">
                    {getFeaturedClients().length > featured.length ? (
                        <span className="text-[12px] text-zinc-300">Showing {featured.length} of {getFeaturedClients().length}+ projects</span>
                    ) : (
                        <span className="text-[12px] text-zinc-300">More case studies added regularly</span>
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
