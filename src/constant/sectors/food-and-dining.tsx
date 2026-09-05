import {
    UtensilsCrossed, Globe, Share2, Search, BarChart3,
    Star, Clock, Users, TrendingUp,
    Camera, MessageCircle, MapPin,
} from 'lucide-react'
import type { ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

export const FoodDiningSectorHero = {
    badge: 'Food & Dining',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            Make people hungry{' '}
            <span className="text-amber-500">from their phone</span>
        </h1>
    ),
    subheading: 'We help restaurants and cafes build the visual content and posting frequency that actually drives a visit.',
    primaryCta: { label: 'Grow my restaurant', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '/our-works' },
    tags: ['Restaurants', 'Cafes', 'Cloud Kitchens', 'QSR', 'Bakeries', 'Catering'],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-20">
                        <UtensilsCrossed size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
            </div>
        </FadeUp>
    )
}

export const FoodDiningSectorAudience = {
    badge: 'Who is this for',
    heading: (<>Built for every kind of{' '}<span className="text-amber-500">food business</span></>),
    subheading: "Few categories are as visually driven — the decision to visit is often made scrolling through photos, not reading copy.",
    cards: [
        { icon: UtensilsCrossed, title: 'Restaurants & Fine Dining', desc: 'High-frequency visual content that keeps the feed appetising and current.' },
        { icon: Camera, title: 'Cafes & Bakeries', desc: 'Ambience and product photography built for discovery-driven browsing.' },
        { icon: MessageCircle, title: 'Cloud Kitchens & QSR', desc: 'Fast, frequent content and WhatsApp ordering built for volume.' },
        { icon: MapPin, title: 'Catering & Event Dining', desc: 'Local SEO and social proof for bookings and event enquiries.' },
    ],
}

export const FoodDiningSectorServices = {
    badge: 'What we do for you',
    heading: (<>Every service your kitchen{' '}<span className="text-amber-500">needs to fill tables</span></>),
    subheading: 'High-frequency visual content, WhatsApp ordering, and creator partnerships that actually drive footfall.',
    items: [
        { icon: Camera, title: 'Food & Ambience Photography', desc: 'On-location shoots that make the food and space look as good as it is.', tags: ['Videography', 'Video Editing'] },
        { icon: Share2, title: 'High-Frequency Social Content', desc: 'A posting calendar built for volume, with visual consistency maintained.', tags: ['Social Planning', 'Graphic Design'] },
        { icon: MessageCircle, title: 'WhatsApp for Reservations & Offers', desc: 'A direct channel for bookings, offers, and repeat-customer communication.', tags: ['WhatsApp Marketing'] },
        { icon: Users, title: 'Local Food Creator Partnerships', desc: 'Influencer collaborations that bring real, hungry local audiences.', tags: ['Influencer Marketing'] },
        { icon: Search, title: 'Local SEO', desc: 'Ranking for "restaurants near me" and category searches.', tags: ['SEO Consultancy'] },
        { icon: BarChart3, title: 'Footfall-Focused Campaigns', desc: 'Paid campaigns built to drive visits and orders, not just impressions.', tags: ['Performance Marketing'] },
    ],
}

export const FoodDiningSectorStats = {
    stats: [
        { value: '11+', label: 'Food & dining clients', sublabel: 'Restaurants to cloud kitchens' },
        { value: 'High-frequency', label: 'Content cadence', sublabel: 'Higher than most categories' },
        { value: 'Direct', label: 'WhatsApp ordering channel', sublabel: 'Reservations & offers' },
        { value: 'Visual-first', label: 'Content strategy', sublabel: 'Photography & video led' },
    ],
}

export const FoodDiningSectorTrust = {
    badge: 'Why Wizards',
    heading: (<>We understand{' '}<span className="text-amber-500">visually-driven decisions</span></>),
    subheading: 'Few categories rely on visual content as much as food and dining — we build volume without losing quality.',
    points: [
        { icon: Camera, title: 'Volume without losing quality', desc: 'A posting cadence built for this category\'s pace, kept visually consistent.' },
        { icon: MessageCircle, title: 'WhatsApp built for ordering', desc: 'A direct channel for reservations and offers, not just a broadcast list.' },
        { icon: Users, title: 'Local creator relationships', desc: 'Real local food creators, not generic influencer outreach.' },
        { icon: MapPin, title: 'Local search, prioritised', desc: '"Near me" and category search treated as top priority for this category.' },
    ],
}

export const FoodDiningSectorFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'How often should we be posting?', a: 'Higher frequency than most categories — discussed based on your kitchen\'s ability to supply fresh content.' },
        { q: 'Do you handle food photography and videography?', a: 'Yes, through Videography — this is one of the most common shoot types in this category.' },
        { q: 'Can you set up WhatsApp for reservations?', a: 'Yes, through WhatsApp Marketing.' },
        { q: 'Do you work with cloud kitchens without a physical dine-in space?', a: 'Yes, with content and campaigns adapted to an order-only model.' },
        { q: 'Can you help with local food influencer partnerships?', a: 'Yes, through Influencer Marketing, focused on genuinely local, engaged creators.' },
    ],
}
