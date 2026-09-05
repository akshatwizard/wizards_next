import {
    ShoppingCart, Globe, Share2, Search, BarChart3,
    Star, Clock, Users, TrendingUp,
    Package, CreditCard, MessageCircle,
} from 'lucide-react'
import type { ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

export const EcommerceSectorHero = {
    badge: 'E-Commerce',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            Built, found,{' '}
            <span className="text-amber-500">and actually run</span>
        </h1>
    ),
    subheading: 'The one category that touches nearly every service we offer — a store built properly, found through search and ads, and operated day to day once live.',
    primaryCta: { label: 'Grow my store', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '/our-works' },
    tags: ['D2C Brands', 'Shopify Stores', 'Custom Storefronts', 'Marketplaces', 'Subscription Commerce', 'B2B E-Commerce'],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-20">
                        <ShoppingCart size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
            </div>
        </FadeUp>
    )
}

export const EcommerceSectorAudience = {
    badge: 'Who is this for',
    heading: (<>Built for every stage of{' '}<span className="text-amber-500">e-commerce growth</span></>),
    subheading: "E-commerce clients typically need several services working together, not just one.",
    cards: [
        { icon: ShoppingCart, title: 'New D2C Brands', desc: 'A full store build, from platform choice through to launch.' },
        { icon: TrendingUp, title: 'Growing Stores Needing Traffic', desc: 'SEO and performance marketing for stores that are built but not yet found.' },
        { icon: Package, title: 'Live Stores Needing Operations', desc: 'Ongoing catalog, inventory, and order-flow management.' },
        { icon: MessageCircle, title: 'Catalog-Driven Sellers', desc: 'WhatsApp catalog integration alongside the core store.' },
    ],
}

export const EcommerceSectorServices = {
    badge: 'What we do for you',
    heading: (<>Every service{' '}<span className="text-amber-500">an online store needs</span></>),
    subheading: 'The build, the traffic, and the day-to-day operations — often onboarded together by design.',
    items: [
        { icon: ShoppingCart, title: 'Store Build', desc: 'Laravel, Shopify, or headless Next.js, matched to your needs.', tags: ['E-Commerce Development'] },
        { icon: Package, title: 'Ongoing Store Operations', desc: 'Inventory, catalog updates, and order-flow management after launch.', tags: ['E-Commerce Business Management'] },
        { icon: Search, title: 'SEO for Product Discovery', desc: 'Ranking for product and category searches.', tags: ['SEO Consultancy'] },
        { icon: BarChart3, title: 'Performance & Ads Management', desc: 'Paid campaigns built to drive sales, tracked to ROAS.', tags: ['Performance Marketing', 'Google & Meta Ads Management'] },
        { icon: MessageCircle, title: 'WhatsApp Catalogs', desc: 'Catalog-based marketing alongside the core store.', tags: ['WhatsApp Marketing'] },
        { icon: CreditCard, title: 'Payment & Checkout Optimisation', desc: 'Real gateway integration and checkout flows that don\'t lose customers.', tags: ['E-Commerce Development'] },
    ],
}

export const EcommerceSectorStats = {
    stats: [
        { value: '18+', label: 'E-commerce clients', sublabel: 'D2C to B2B' },
        { value: 'End-to-end', label: 'Service coverage', sublabel: 'Build, traffic, and operations' },
        { value: 'Razorpay', label: 'Payment integration', sublabel: 'Live, not a demo checkout' },
        { value: 'Ongoing', label: 'Store management available', sublabel: 'For stores we built or didn\'t' },
    ],
}

export const EcommerceSectorTrust = {
    badge: 'Why Wizards',
    heading: (<>We treat e-commerce as{' '}<span className="text-amber-500">one connected system</span></>),
    subheading: 'A store without traffic, or traffic without a store that converts, both waste the other half of the investment.',
    points: [
        { icon: ShoppingCart, title: 'Build and grow, one team', desc: 'The team that builds your store is the same one that markets and runs it afterward.' },
        { icon: Package, title: 'Real operational support', desc: 'Genuine ongoing store management, not just a one-time build and goodbye.' },
        { icon: CreditCard, title: 'Payments done right the first time', desc: 'Live payment gateway integration, not a demo checkout fixed later.' },
        { icon: TrendingUp, title: 'ROAS-tracked growth', desc: 'Performance campaigns tied to actual sales, not vanity traffic.' },
    ],
}

export const EcommerceSectorFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Do we need all of these services, or can we start with just the store build?', a: 'You can start with just the build — the other services are there for when you\'re ready to grow traffic and manage operations.' },
        { q: 'Which platforms do you build on?', a: 'Laravel for custom builds, Shopify where that\'s the better fit — see E-Commerce Website Development for details.' },
        { q: 'Can you take over managing a store you didn\'t build?', a: 'Yes, after a store health review — see E-Commerce Business Management.' },
        { q: 'Do you handle payment gateway integration?', a: 'Yes, including Razorpay, as a standard part of any store build.' },
        { q: 'How do you approach traffic for a new store?', a: 'A combination of SEO and performance marketing, sequenced based on the store\'s launch timeline.' },
    ],
}
