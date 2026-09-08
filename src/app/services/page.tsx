import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ArrowUpRight } from 'lucide-react'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import { SectionBadge } from '@/components/services/section_badge'

export const metadata: Metadata = {
    title: 'All Services | Wizards Next',
    description: 'Branding, digital marketing, website development, and AI consultancy — every service Wizards Next offers, in one place.',
}

type ServiceItem = { slug: string; name: string; desc: string }

const PILLARS: { title: string; blurb: string; services: ServiceItem[] }[] = [
    {
        title: 'Branding & Identity',
        blurb: 'The visual system a business is built on — created once, used everywhere.',
        services: [
            { slug: 'brand-designing', name: 'Brand Creation', desc: 'Logo, identity, and guidelines that make you instantly recognisable.' },
            { slug: 'graphic-designing', name: 'Graphic Design', desc: 'Scroll-stopping creative — carousels, posters, and ad visuals.' },
            { slug: 'corporate-profile-creation', name: 'Corporate Profile Creation', desc: 'Professional company profiles, on video and in print.' },
        ],
    },
    {
        title: 'Digital Marketing & Growth',
        blurb: 'Content, campaigns, and channels that turn attention into customers.',
        services: [
            { slug: 'social-media', name: 'Social Media Planning & Management', desc: 'Strategy, content, and community management, done consistently.' },
            { slug: 'content-creation', name: 'Content Creation', desc: 'Blog posts, captions, and copy that sound like your brand.' },
            { slug: 'videography', name: 'Videography', desc: 'Professional filming, on location or in studio.' },
            { slug: 'video-editing', name: 'Video Editing', desc: 'Reels, YouTube videos, and ad creative, cut for the platform.' },
            { slug: 'influencer-marketing', name: 'Influencer Marketing', desc: 'Matched with creators whose audience actually converts.' },
            { slug: 'performance-marketing', name: 'Performance Marketing', desc: 'Budget strategy across paid channels, tied to real ROI.' },
            { slug: 'google-meta-ads-management', name: 'Google & Meta Ads Management', desc: 'Hands-on campaign management, tested and optimised weekly.' },
            { slug: 'whatsapp-marketing', name: 'WhatsApp Marketing', desc: 'Catalogs, broadcasts, and automation on WhatsApp Business.' },
            { slug: 'email-marketing', name: 'Email Marketing', desc: 'Newsletters and automation on the channel you actually own.' },
            { slug: 'seo-consultancy', name: 'SEO Consultancy', desc: 'SEO built for how search actually works in your market.' },
            { slug: 'analytics-reporting', name: 'Analytics & Reporting', desc: 'Clear dashboards and plain-language monthly reporting.' },
        ],
    },
    {
        title: 'Website, Technology & AI',
        blurb: 'The technical foundation — built, launched, and kept running.',
        services: [
            { slug: 'website-development', name: 'Website Development', desc: 'Fast, conversion-focused websites on modern frameworks.' },
            { slug: 'app-dev', name: 'Mobile App Development', desc: 'iOS and Android apps built for a real business goal.' },
            { slug: 'ecommerce-development', name: 'E-Commerce Website Development', desc: 'Online stores built to actually sell.' },
            { slug: 'ecommerce-management', name: 'E-Commerce Business Management', desc: 'Keeping your store running well after launch.' },
            { slug: 'ai-consultancy', name: 'AI Consultancy', desc: 'Helping your team adopt the AI workflow we run ourselves.' },
        ],
    },
]

const TOTAL = PILLARS.reduce((n, p) => n + p.services.length, 0)

function ServiceCard({ service }: { service: ServiceItem }) {
    const { name, desc, slug } = service
    return (
        <Link
            href={`/services/${slug}`}
            className="group bg-zinc-900 border border-zinc-800 hover:border-amber-600/30 rounded-2xl p-6 transition-colors flex flex-col gap-4 h-full"
        >
            <div className="flex items-start justify-between">
                {/* Icon — enlarged and given a soft ambient glow so it's the focal point of the card */}
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-amber-600/10 blur-2xl rounded-full scale-90 group-hover:bg-amber-600/15 transition-colors duration-300" />
                    <Image
                        src={`/images/services/icons/${slug}-icon.webp`}
                        alt={`${name} icon`}
                        width={256}
                        height={256}
                        className="relative w-full h-full object-contain"
                    />
                </div>
                <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-amber-600 transition-colors shrink-0 mt-1" />
            </div>
            <p className="text-zinc-200 text-[18px] font-semibold group-hover:text-amber-600 transition-colors leading-snug">{name}</p>
            <p className="text-zinc-500 text-[12.5px] font-light leading-relaxed">{desc}</p>
        </Link>
    )
}

export default function ServicesPage() {
    return (
        <main>
            <Section>
                <Wrapper className="pb-0!">
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[11px] text-zinc-600 mb-6">
                            <Link href="/" className="hover:text-zinc-400 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-400">Services</span>
                        </div>
                        <SectionBadge label="All Services" />
                    </FadeUp>
                    <FadeUp delay={0.08}>
                        <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium max-w-2xl">
                            {TOTAL} services, <span className="text-amber-600 font-sora!">one growth partner</span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-500 text-sm font-light max-w-lg">
                            Every service is built to the same depth, whether it&apos;s your brand identity or your ad account — nothing here is treated as an afterthought.
                        </p>
                    </FadeUp>
                </Wrapper>
            </Section>

            {PILLARS.map((pillar, pi) => (
                <Section key={pillar.title}>
                    <Wrapper className={pi === 0 ? "lg:pt-10 md:pt-8 pt-6" : "lg:py-10 md:py-8 py-6"}>
                        <FadeUp className="mb-6">
                            <p className="text-zinc-100 font-semibold text-[15px] mb-1.5">{pillar.title}</p>
                            <p className="text-zinc-500 text-[12.5px] font-light">{pillar.blurb}</p>
                        </FadeUp>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {pillar.services.map((svc, i) => (
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
                    <FadeUp className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
                        <p className="text-zinc-200 text-lg font-medium mb-2">Not sure which service you need?</p>
                        <p className="text-zinc-500 text-[13px] font-light mb-5 max-w-md mx-auto">
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
