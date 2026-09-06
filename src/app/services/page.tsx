import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowUpRight } from 'lucide-react'
import {
    Palette, Layout, Award, Layers, PenLine, Camera, Film, Users, Target,
    MousePointerClick, MessageCircle, Search, PieChart, Globe, Smartphone,
    ShoppingCart, Boxes, Bot, Mail, LucideIcon,
} from 'lucide-react'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import { SectionBadge } from '@/components/services/section_badge'

export const metadata: Metadata = {
    title: 'All Services | Wizards Next',
    description: 'Branding, digital marketing, website development, and AI consultancy — every service Wizards Next offers, in one place.',
}

type ServiceItem = { slug: string; name: string; desc: string; Icon: LucideIcon }

const PILLARS: { title: string; blurb: string; services: ServiceItem[] }[] = [
    {
        title: 'Branding & Identity',
        blurb: 'The visual system a business is built on — created once, used everywhere.',
        services: [
            { slug: 'brand-designing', name: 'Brand Creation', desc: 'Logo, identity, and guidelines that make you instantly recognisable.', Icon: Palette },
            { slug: 'graphic-designing', name: 'Graphic Design', desc: 'Scroll-stopping creative — carousels, posters, and ad visuals.', Icon: Layout },
            { slug: 'corporate-profile-creation', name: 'Corporate Profile Creation', desc: 'Professional company profiles, on video and in print.', Icon: Award },
        ],
    },
    {
        title: 'Digital Marketing & Growth',
        blurb: 'Content, campaigns, and channels that turn attention into customers.',
        services: [
            { slug: 'social-media', name: 'Social Media Planning & Management', desc: 'Strategy, content, and community management, done consistently.', Icon: Layers },
            { slug: 'content-creation', name: 'Content Creation', desc: 'Blog posts, captions, and copy that sound like your brand.', Icon: PenLine },
            { slug: 'videography', name: 'Videography', desc: 'Professional filming, on location or in studio.', Icon: Camera },
            { slug: 'video-editing', name: 'Video Editing', desc: 'Reels, YouTube videos, and ad creative, cut for the platform.', Icon: Film },
            { slug: 'influencer-marketing', name: 'Influencer Marketing', desc: 'Matched with creators whose audience actually converts.', Icon: Users },
            { slug: 'performance-marketing', name: 'Performance Marketing', desc: 'Budget strategy across paid channels, tied to real ROI.', Icon: Target },
            { slug: 'google-meta-ads-management', name: 'Google & Meta Ads Management', desc: 'Hands-on campaign management, tested and optimised weekly.', Icon: MousePointerClick },
            { slug: 'whatsapp-marketing', name: 'WhatsApp Marketing', desc: 'Catalogs, broadcasts, and automation on WhatsApp Business.', Icon: MessageCircle },
            { slug: 'email-marketing', name: 'Email Marketing', desc: 'Newsletters and automation on the channel you actually own.', Icon: Mail },
            { slug: 'seo-consultancy', name: 'SEO Consultancy', desc: 'SEO built for how search actually works in your market.', Icon: Search },
            { slug: 'analytics-reporting', name: 'Analytics & Reporting', desc: 'Clear dashboards and plain-language monthly reporting.', Icon: PieChart },
        ],
    },
    {
        title: 'Website, Technology & AI',
        blurb: 'The technical foundation — built, launched, and kept running.',
        services: [
            { slug: 'website-development', name: 'Website Development', desc: 'Fast, conversion-focused websites on modern frameworks.', Icon: Globe },
            { slug: 'app-dev', name: 'Mobile App Development', desc: 'iOS and Android apps built for a real business goal.', Icon: Smartphone },
            { slug: 'ecommerce-development', name: 'E-Commerce Website Development', desc: 'Online stores built to actually sell.', Icon: ShoppingCart },
            { slug: 'ecommerce-management', name: 'E-Commerce Business Management', desc: 'Keeping your store running well after launch.', Icon: Boxes },
            { slug: 'ai-consultancy', name: 'AI Consultancy', desc: 'Helping your team adopt the AI workflow we run ourselves.', Icon: Bot },
        ],
    },
]

const TOTAL = PILLARS.reduce((n, p) => n + p.services.length, 0)

function ServiceCard({ service }: { service: ServiceItem }) {
    const { Icon, name, desc, slug } = service
    return (
        <Link
            href={`/services/${slug}`}
            className="group bg-zinc-900 border border-zinc-800 hover:border-amber-600/30 rounded-2xl p-5 transition-colors flex flex-col gap-3 h-full"
        >
            <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-amber-600/10 border-amber-600/20 shrink-0">
                    <Icon size={18} className="text-amber-600" strokeWidth={1.6} />
                </div>
                <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-amber-600 transition-colors" />
            </div>
            <p className="text-zinc-200 text-[14.5px] font-medium group-hover:text-amber-600 transition-colors leading-snug">{name}</p>
            <p className="text-zinc-500 text-[12px] font-light leading-relaxed">{desc}</p>
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
