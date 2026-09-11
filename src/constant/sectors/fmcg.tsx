import {
    ShoppingBag, Globe, Share2, Search, BarChart3,
    Star, Clock, Users, TrendingUp,
    Package, Truck, MessageCircle,
} from 'lucide-react'
import type { ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

export const FmcgSectorHero = {
    badge: 'FMCG',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            Built for the{' '}
            <span className="text-amber-500">two-second decision</span>{' '}
            at the shelf and the scroll
        </h1>
    ),
    subheading: 'We help FMCG and consumer goods brands build consistent visual identity, D2C e-commerce, and scalable performance campaigns.',
    primaryCta: { label: 'Grow my brand', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '/our-works' },
    tags: ['Consumer Goods', 'D2C Brands', 'Distributors', 'Packaged Foods', 'Personal Care', 'Home Care'],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-20">
                        <ShoppingBag size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-200 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
            </div>
        </FadeUp>
    )
}

export const FmcgSectorAudience = {
    badge: 'Who is this for',
    heading: (<>Built for every stage of{' '}<span className="text-amber-500">the FMCG journey</span></>),
    subheading: "Fast-moving consumer goods marketing is a volume and repetition game — recognition that survives a two-second decision.",
    cards: [
        { icon: Package, title: 'Packaged Goods Brands', desc: 'Consistent brand identity across packaging-adjacent digital presence.' },
        { icon: ShoppingBag, title: 'D2C-Capable Products', desc: 'E-commerce presence for brands ready to sell direct to consumers.' },
        { icon: Truck, title: 'Distributors & Retail Partners', desc: 'WhatsApp catalogs and communication tools for the B2B side of the business.' },
        { icon: TrendingUp, title: 'Scaling Consumer Brands', desc: 'Performance campaigns built to scale efficiently rather than one-off creative pushes.' },
    ],
}

export const FmcgSectorServices = {
    badge: 'What we do for you',
    heading: (<>Every service your brand{' '}<span className="text-amber-500">needs to scale</span></>),
    subheading: 'Consistent identity, D2C-ready e-commerce, and performance marketing built for volume.',
    items: [
        { icon: Package, title: 'Brand & Packaging-Adjacent Design', desc: 'A consistent visual system that holds up on a carousel, a catalog, or a retail display.', tags: ['Brand Creation', 'Graphic Design'] },
        { icon: ShoppingBag, title: 'D2C E-Commerce', desc: 'Online stores for products ready to sell direct to consumers.', tags: ['E-Commerce Development'] },
        { icon: BarChart3, title: 'Scalable Performance Campaigns', desc: 'Paid campaigns built to scale efficiently across a growing customer base.', tags: ['Performance Marketing'] },
        { icon: MessageCircle, title: 'Distributor WhatsApp Catalogs', desc: 'Catalog-based communication tools for the distributor relationship.', tags: ['WhatsApp Marketing'] },
        { icon: Share2, title: 'High-Volume Social Content', desc: 'Design production built for volume without losing brand consistency.', tags: ['Graphic Design'] },
        { icon: Search, title: 'SEO for Product Discovery', desc: 'Ranking for product and category searches that drive real purchase intent.', tags: ['SEO Consultancy'] },
    ],
}

export const FmcgSectorStats = {
    stats: [
        { value: '15+', label: 'FMCG & consumer brand clients', sublabel: 'Across categories' },
        { value: 'Consistent', label: 'Brand systems built', sublabel: 'Shelf to screen' },
        { value: 'Scalable', label: 'Campaign structures', sublabel: 'Built for volume' },
        { value: 'D2C-ready', label: 'E-commerce builds', sublabel: 'When the product calls for it' },
    ],
}

export const FmcgSectorTrust = {
    badge: 'Why Wizards',
    heading: (<>We understand how{' '}<span className="text-amber-500">consumers decide</span>{' '}in seconds</>),
    subheading: 'FMCG marketing lives or dies on consistency at scale — we build systems that hold up under volume.',
    points: [
        { icon: Package, title: 'Design consistency, at scale', desc: 'A brand system that holds up whether it\'s on a carousel, a catalog, or a display.' },
        { icon: Truck, title: 'Distributor and consumer, both covered', desc: 'WhatsApp catalog work for the B2B side, performance marketing for the consumer side.' },
        { icon: TrendingUp, title: 'Built to scale, not one-off', desc: 'Campaign structures designed for repeatable volume, not single creative bursts.' },
        { icon: Star, title: 'Category experience', desc: 'We understand the specific dynamics of fast-moving, repeat-purchase categories.' },
    ],
}

export const FmcgSectorFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Do you work with distributor/B2B sides of FMCG as well as consumer marketing?', a: 'Yes, WhatsApp catalog work in particular often serves the distributor relationship, not just end consumers.' },
        { q: 'Can you support a D2C e-commerce push alongside traditional retail?', a: 'Yes — this is a common combined ask in this category.' },
        { q: 'How do you handle high-volume, repetitive campaign content?', a: 'Through our Graphic Design process, built for volume without losing brand consistency.' },
        { q: 'Can you help launch a new product line?', a: 'Yes, from brand identity through to launch campaign and ongoing performance marketing.' },
        { q: 'Do you work with regional or national FMCG brands?', a: 'Both — the strategy adapts to whether the goal is local footprint or national scale.' },
    ],
}
