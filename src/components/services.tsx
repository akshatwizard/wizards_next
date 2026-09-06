import { Section, Wrapper } from './ui/sections'
import { FadeUp } from './ui/motion_components'
import Link from 'next/link'
import {
    Palette, Layout, Award, Layers, PenLine, Camera, Film, Users, Target,
    MousePointerClick, MessageCircle, Search, PieChart, Globe, Smartphone,
    ShoppingCart, Boxes, Bot, Mail, ArrowUpRight, LucideIcon,
} from 'lucide-react'

type ServiceItem = { slug: string; name: string; desc: string; Icon: LucideIcon }

const ALL_SERVICES: ServiceItem[] = [
    { slug: 'brand-designing', name: 'Brand Creation', desc: 'Logo, identity, and guidelines that make you instantly recognisable.', Icon: Palette },
    { slug: 'graphic-designing', name: 'Graphic Design', desc: 'Scroll-stopping creative — carousels, posters, and ad visuals.', Icon: Layout },
    { slug: 'corporate-profile-creation', name: 'Corporate Profile Creation', desc: 'Professional company profiles, on video and in print.', Icon: Award },
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
    { slug: 'website-development', name: 'Website Development', desc: 'Fast, conversion-focused websites on modern frameworks.', Icon: Globe },
    { slug: 'app-dev', name: 'Mobile App Development', desc: 'iOS and Android apps built for a real business goal.', Icon: Smartphone },
    { slug: 'ecommerce-development', name: 'E-Commerce Website Development', desc: 'Online stores built to actually sell.', Icon: ShoppingCart },
    { slug: 'ecommerce-management', name: 'E-Commerce Business Management', desc: 'Keeping your store running well after launch.', Icon: Boxes },
    { slug: 'ai-consultancy', name: 'AI Consultancy', desc: 'Helping your team adopt the AI workflow we run ourselves.', Icon: Bot },
]

function ServiceCard({ service }: { service: ServiceItem }) {
    const { Icon, name, desc, slug } = service
    return (
        <Link
            href={`/services/${slug}`}
            className="group h-full relative bg-zinc-900 lg:p-6 md:p-5 p-4 flex flex-col gap-3.5 transition-colors duration-200 hover:bg-zinc-800/60"
        >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-zinc-700/50 group-hover:bg-amber-600 transition-colors duration-300" />

            <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-amber-600/10 border-amber-600/20 shrink-0">
                <Icon size={18} className="text-amber-600" strokeWidth={1.6} />
            </div>

            <div className="flex items-start justify-between gap-2">
                <h3 className="text-[15px] text-zinc-200 leading-snug tracking-tight font-medium">
                    {name}
                </h3>
                <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-amber-600 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
            </div>

            <p className="text-[12px] text-zinc-500 leading-relaxed font-light">
                {desc}
            </p>
        </Link>
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
                        we cover the full digital spectrum so you don&apos;t have to juggle
                        multiple agencies.
                    </p>
                </FadeUp>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-px border border-zinc-800 rounded-2xl overflow-hidden">
                    {ALL_SERVICES.map((svc, idx) => (
                        <FadeUp delay={Math.min(idx * 0.04, 0.4)} key={svc.slug} className="h-full">
                            <ServiceCard service={svc} />
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.2} className="flex items-center justify-between pt-4">
                    <span className="text-zinc-600 text-xs">
                        {ALL_SERVICES.length} services · Varanasi &amp; Pan-India
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
