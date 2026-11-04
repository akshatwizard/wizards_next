import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Section, Wrapper } from './ui/sections'
import { FadeUp } from './ui/motion_components'
import { smmClients } from '@/constant/smm_clients'
import SmmAvatar from './smm/smm_avatar'

// Homepage strip: every brand whose social media we manage, each linking
// to its /social-media-clients/[slug] page.
export default function SmmClientsStrip() {
    return (
        <Section>
            <Wrapper>
                <div>
                    <FadeUp className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        <span className="text-amber-600 text-[12px] font-medium tracking-widest uppercase">
                            Social Media
                        </span>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-200">
                            Brands we manage <span className="text-amber-600">on social</span>
                        </h2>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-[12.5px] font-light max-w-md leading-relaxed">
                            Doctors, retailers, schools and manufacturers whose Instagram we plan, shoot and run every week.
                        </p>
                    </FadeUp>
                </div>

                <FadeUp delay={0.2} className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-3">
                    {smmClients.map((c) => (
                        <Link
                            key={c.slug}
                            href={`/our-works/${c.slug}`}
                            className="group bg-zinc-900 border border-zinc-800 hover:border-amber-600/30 rounded-2xl p-3 flex flex-col items-center gap-2 text-center transition-colors"
                        >
                            <SmmAvatar client={c} size={64} />
                            <span className="text-zinc-100 text-[11.5px] font-medium leading-tight group-hover:text-amber-600 transition-colors">
                                {c.name}
                            </span>
                        </Link>
                    ))}
                </FadeUp>

                <FadeUp delay={0.25} className="flex items-center justify-between">
                    <span className="text-[12px] text-zinc-300">{smmClients.length} brands and counting</span>
                    <Link
                        href="/social-media-clients"
                        className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-black text-[12px] font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        View all
                        <ArrowUpRight size={12} />
                    </Link>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}
