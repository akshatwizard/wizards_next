import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ArrowUpRight } from 'lucide-react'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import { SectionBadge } from '@/components/services/section_badge'
import { ALL_SERVICES, ServiceMeta } from '@/constant/service_meta'

export const metadata: Metadata = {
    title: 'All Services | Wizards Next Digital Marketing',
    description: 'Branding, digital marketing, website development, and AI consultancy — every service Wizards Next offers, in one place.',
    alternates: {
        canonical: '/services',
    },
}

const PILLAR_ORDER: ServiceMeta['pillar'][] = ['Branding & Identity', 'Digital Marketing & Growth', 'Website, Technology & AI']
const PILLAR_BLURBS: Record<ServiceMeta['pillar'], string> = {
    'Branding & Identity': 'The visual system a business is built on — created once, used everywhere.',
    'Digital Marketing & Growth': 'Content, campaigns, and channels that turn attention into customers.',
    'Website, Technology & AI': 'The technical foundation — built, launched, and kept running.',
}

const TOTAL = ALL_SERVICES.length

function ServiceCard({ service }: { service: ServiceMeta }) {
    const { name, desc, slug } = service
    return (
        <Link
            href={`/services/${slug}`}
            className="group bg-zinc-900 border border-zinc-800 hover:border-amber-600/30 rounded-2xl p-5 transition-colors flex flex-col gap-3 h-full"
        >
            {/* Icon + heading side by side — no more stacking them with empty space underneath */}
            <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
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
                    <p className="text-zinc-200 text-[16px] font-semibold group-hover:text-amber-600 transition-colors leading-snug">{name}</p>
                    <ArrowUpRight size={16} className="text-zinc-300 group-hover:text-amber-600 transition-colors shrink-0 mt-1" />
                </div>
            </div>
            <p className="text-zinc-200 text-[12.5px] font-light leading-relaxed">{desc}</p>
        </Link>
    )
}

export default function ServicesPage() {
    return (
        <main>
            <Section>
                <Wrapper className="pb-0!">
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[12px] text-zinc-300 mb-6">
                            <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-100">Services</span>
                        </div>
                        <SectionBadge label="All Services" />
                    </FadeUp>
                    <FadeUp delay={0.08}>
                        <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium max-w-2xl">
                            {TOTAL} services, <span className="text-amber-600 font-sora!">one growth partner</span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-sm font-light max-w-lg">
                            Every service is built to the same depth, whether it&apos;s your brand identity or your ad account — nothing here is treated as an afterthought.
                        </p>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <p className="text-zinc-200 text-[13px] font-light max-w-2xl mt-4 leading-relaxed">
                            That runs from branding and content through performance ads, SEO, and full website builds — organised below into three groups: the identity work that makes a brand recognisable, the marketing that gets it in front of people, and the technology that gives it somewhere real to live. Most clients start with one service and add more as it proves out; a few use all three groups at once. Either way, it&apos;s the same team and the same standard throughout.
                        </p>
                    </FadeUp>
                </Wrapper>
            </Section>

            {PILLAR_ORDER.map((pillar, pi) => (
                <Section key={pillar}>
                    <Wrapper className={pi === 0 ? "lg:pt-10 md:pt-8 pt-6" : "lg:py-10 md:py-8 py-6"}>
                        <FadeUp className="mb-6">
                            <p className="text-zinc-100 font-semibold text-[15px] mb-1.5">{pillar}</p>
                            <p className="text-zinc-300 text-[12.5px] font-light">{PILLAR_BLURBS[pillar]}</p>
                        </FadeUp>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {ALL_SERVICES.filter((s) => s.pillar === pillar).map((svc, i) => (
                                <FadeUp key={svc.slug} delay={Math.min(i * 0.05, 0.3)}>
                                    <ServiceCard service={svc} />
                                </FadeUp>
                            ))}
                        </div>
                    </Wrapper>
                </Section>
            ))}

            <Section>
                <Wrapper className="lg:py-12 md:py-10 py-8">
                    <FadeUp className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center">
                        <p className="text-zinc-200 text-lg font-medium mb-2">Not sure which service you need?</p>
                        <p className="text-zinc-200 text-[13px] font-light mb-5 max-w-md mx-auto">
                            Tell us what you&apos;re trying to achieve and we&apos;ll point you at the right one.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-black text-[12.5px] font-semibold px-5 py-2.5 rounded-lg transition-colors"
                        >
                            Get in touch →
                        </Link>
                    </FadeUp>
                </Wrapper>
            </Section>
        </main>
    )
}
