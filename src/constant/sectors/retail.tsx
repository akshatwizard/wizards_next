import {
    Shirt, Globe, Share2, Search, BarChart3,
    Star, Clock, Users, TrendingUp,
    ShoppingBag, Package, MessageCircle,
} from 'lucide-react'
import type { ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

export const RetailSectorHero = {
    badge: 'Retail',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            Bring people from{' '}
            <span className="text-amber-500">the feed to the store</span>
        </h1>
    ),
    subheading: 'We help jewellery, furniture, and fashion retailers build visual presence, WhatsApp catalogs, and e-commerce where it makes sense.',
    primaryCta: { label: 'Grow my store', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '/our-works' },
    tags: ['Jewellery', 'Furniture', 'Fashion', 'Home Decor', 'Lifestyle Brands', 'Boutiques'],
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

export const RetailSectorAudience = {
    badge: 'Who is this for',
    heading: (<>Built for every kind of{' '}<span className="text-amber-500">retail business</span></>),
    subheading: "A lot of premium retail purchases still involve an in-store visit, even after all the research happens online.",
    cards: [
        { icon: ShoppingBag, title: 'Jewellery & High-Value Retail', desc: 'Visual content and enquiry-driven presence for considered, high-value purchases.' },
        { icon: Package, title: 'Furniture & Home Decor', desc: 'Catalog-style content and social presence built for browsing and discovery.' },
        { icon: Shirt, title: 'Fashion & Lifestyle', desc: 'E-commerce where online purchase works, catalog-driven presence where it doesn\'t yet.' },
        { icon: MessageCircle, title: 'Boutiques & Local Retailers', desc: 'WhatsApp catalogs and local social presence built for a loyal, local customer base.' },
    ],
}

export const RetailSectorServices = {
    badge: 'What we do for you',
    heading: (<>Every service your store{' '}<span className="text-amber-500">needs to convert browsers</span></>),
    subheading: 'Product-focused visual content, social discovery, and e-commerce for the categories where it works.',
    items: [
        { icon: Share2, title: 'Product Visual Content', desc: 'Photography and graphic design built to showcase products properly.', tags: ['Graphic Design', 'Videography'] },
        { icon: Users, title: 'Social Media for Discovery', desc: 'Presence built for browsing and discovery, not just posting.', tags: ['Social Planning'] },
        { icon: ShoppingBag, title: 'E-Commerce (Where It Fits)', desc: 'Online stores for categories where online purchase genuinely works.', tags: ['E-Commerce Development'] },
        { icon: MessageCircle, title: 'WhatsApp Catalogs', desc: 'A direct catalog channel, especially valuable for high-value or local retail.', tags: ['WhatsApp Marketing'] },
        { icon: BarChart3, title: 'Store-Visit Focused Campaigns', desc: 'Paid campaigns built to drive enquiries and visits, not just online sales.', tags: ['Performance Marketing'] },
        { icon: Search, title: 'Local SEO', desc: 'Ranking for local searches that drive in-store discovery.', tags: ['SEO Consultancy'] },
    ],
}

export const RetailSectorStats = {
    stats: [
        { value: '20+', label: 'Retail clients', sublabel: 'Jewellery to furniture' },
        { value: 'Hybrid funnel', label: 'Strategy approach', sublabel: 'Online research, offline purchase' },
        { value: 'Catalog-ready', label: 'WhatsApp integration', sublabel: 'Where it fits the category' },
        { value: 'Visual-first', label: 'Content strategy', sublabel: 'Product photography led' },
    ],
}

export const RetailSectorTrust = {
    badge: 'Why Wizards',
    heading: (<>We understand{' '}<span className="text-amber-500">hybrid retail journeys</span></>),
    subheading: 'A lot of what we build for retail is designed to drive a visit or enquiry, not just a checkout.',
    points: [
        { icon: ShoppingBag, title: 'Hybrid funnel thinking', desc: 'For categories that don\'t sell fully online, the goal shifts to enquiries and visits.' },
        { icon: Package, title: 'Product-first visual content', desc: 'Photography and design that actually shows the product properly.' },
        { icon: MessageCircle, title: 'WhatsApp built to work with social', desc: 'Catalog and social presence built together, not as disconnected channels.' },
        { icon: TrendingUp, title: 'Measured on the right outcome', desc: 'Enquiries and visits tracked alongside sales, not sales alone.' },
    ],
}

export const RetailSectorFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Do you work with retail categories that don\'t sell online (like jewellery)?', a: 'Yes — the goal there shifts to driving enquiries and store visits rather than checkout conversions.' },
        { q: 'Can you set up a WhatsApp catalog alongside our social presence?', a: 'Yes, and the two are usually built to work together.' },
        { q: 'Do you handle product photography for retail?', a: 'Yes, through Videography and Graphic Design.' },
        { q: 'Can you build a full online store for us?', a: 'Yes, where online purchase makes sense for your category — see E-Commerce Website Development.' },
        { q: 'Do you work with multi-location retail chains?', a: 'Yes, with local SEO and content management across each location.' },
    ],
}
