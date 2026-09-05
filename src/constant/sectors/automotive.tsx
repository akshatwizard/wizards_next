import {
    Car, Globe, Share2, Search, BarChart3,
    Star, Clock, Users, TrendingUp,
    Wrench, MapPin, MessageCircle,
} from 'lucide-react'
import type { ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

export const AutomotiveSectorHero = {
    badge: 'Automotive',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            Capture buyers{' '}
            <span className="text-amber-500">while they&apos;re still researching</span>
        </h1>
    ),
    subheading: 'We help dealerships and service centres win the local searches buyers run before they ever visit a showroom.',
    primaryCta: { label: 'Grow my dealership', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '/our-works' },
    tags: ['Dealerships', 'Service Centres', 'Auto Parts', 'Two-Wheelers', 'Commercial Vehicles', 'Auto Detailing'],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-20">
                        <Car size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
            </div>
        </FadeUp>
    )
}

export const AutomotiveSectorAudience = {
    badge: 'Who is this for',
    heading: (<>Built for every side of{' '}<span className="text-amber-500">the automotive business</span></>),
    subheading: "Automotive buyers research extensively before a showroom visit — reviews, comparisons, local search.",
    cards: [
        { icon: Car, title: 'Dealerships', desc: 'Lead-focused websites and local SEO built around the pre-visit research phase.' },
        { icon: Wrench, title: 'Service Centres', desc: 'Local visibility for the moment someone needs a repair or service, right now.' },
        { icon: MapPin, title: 'Auto Parts & Accessories', desc: 'Local and online presence for parts and accessories retailers.' },
        { icon: MessageCircle, title: 'Multi-Location Operators', desc: 'Consistent local SEO and reputation management across multiple outlets.' },
    ],
}

export const AutomotiveSectorServices = {
    badge: 'What we do for you',
    heading: (<>Every service your dealership{' '}<span className="text-amber-500">needs to convert research into visits</span></>),
    subheading: 'Local SEO, fast lead-focused websites, and visual content that shows the vehicles and service work.',
    items: [
        { icon: Search, title: 'Local SEO & Google Maps', desc: 'Ranking for "near me" searches that drive real showroom footfall.', tags: ['SEO Consultancy'] },
        { icon: Globe, title: 'Lead-Focused Websites', desc: 'Fast-loading vehicle galleries and enquiry-focused page structure.', tags: ['Website Development'] },
        { icon: Share2, title: 'Vehicle & Service Content', desc: 'Photography and video that shows real inventory and work, not stock images.', tags: ['Videography'] },
        { icon: MessageCircle, title: 'WhatsApp Service Reminders', desc: 'Direct communication for service bookings and reminders.', tags: ['WhatsApp Marketing'] },
        { icon: BarChart3, title: 'Local Performance Campaigns', desc: 'Paid campaigns targeted at in-market local buyers.', tags: ['Performance Marketing'] },
        { icon: Star, title: 'Review & Reputation Management', desc: 'Building and protecting the review profile that buyers check before visiting.', tags: ['SEO Consultancy'] },
    ],
}

export const AutomotiveSectorStats = {
    stats: [
        { value: '6+', label: 'Automotive clients', sublabel: 'Dealers & service centres' },
        { value: 'Local-first', label: 'SEO priority', sublabel: '"Near me" search focus' },
        { value: 'Fast-loading', label: 'Website builds', sublabel: 'Image-heavy galleries, optimised' },
        { value: 'Direct', label: 'WhatsApp service line', sublabel: 'Bookings & reminders' },
    ],
}

export const AutomotiveSectorTrust = {
    badge: 'Why Wizards',
    heading: (<>We understand how{' '}<span className="text-amber-500">automotive buyers</span>{' '}actually research</>),
    subheading: 'Automotive decisions are made mostly before the showroom visit — we build the digital presence that wins that research phase.',
    points: [
        { icon: MapPin, title: 'Local search, prioritised', desc: 'Ranking for "near me" searches is treated as the highest-value target in this category.' },
        { icon: Globe, title: 'Fast, gallery-heavy sites', desc: 'Vehicle galleries built to load fast — slow image-heavy pages lose automotive shoppers quickly.' },
        { icon: Star, title: 'Reviews that actually convert', desc: 'A managed review profile, since buyers check ratings before ever calling.' },
        { icon: MessageCircle, title: 'Direct service communication', desc: 'WhatsApp-based reminders that keep customers coming back for service.' },
    ],
}

export const AutomotiveSectorFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Do you work with dealerships, service centres, or both?', a: 'Both — the content and SEO focus shifts depending on which side of the business this is.' },
        { q: 'Can you help us rank for local "near me" searches specifically?', a: 'Yes, this is one of the highest-value SEO targets in this category.' },
        { q: 'Do you handle vehicle photography?', a: 'Yes, through Videography, including for social and listing use.' },
        { q: 'Can you set up WhatsApp for service reminders?', a: 'Yes, through WhatsApp Marketing.' },
        { q: 'Do you work with multi-location dealership groups?', a: 'Yes, with consistent local SEO management across each location.' },
    ],
}
