import {
    Plane, Globe, Share2, Search, BarChart3,
    Star, ShieldCheck, Clock, Users, TrendingUp,
    Hotel, Camera, MapPin, Compass, Ticket,
} from 'lucide-react'
import type { ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

export const TravelSectorHero = {
    badge: 'Travel & Tourism',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            Turn browsing into{' '}
            <span className="text-amber-500">bookings</span>, not just likes
        </h1>
    ),
    subheading: 'We help hotels, resorts, and travel agencies build a visual presence and a booking-friendly website that converts interest into confirmed stays.',
    primaryCta: { label: 'Grow my bookings', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '/our-works' },
    tags: ['Hotels', 'Resorts', 'Travel Agencies', 'Tour Operators', 'Homestays', 'Event Venues'],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-20">
                        <Plane size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
            </div>
        </FadeUp>
    )
}

export const TravelSectorAudience = {
    badge: 'Who is this for',
    heading: (<>Built for every part of{' '}<span className="text-amber-500">travel & hospitality</span></>),
    subheading: "Travel decisions are visual and emotional, but they're made against real logistics — price, location, availability.",
    cards: [
        { icon: Hotel, title: 'Hotels & Resorts', desc: 'Property websites with real booking integration, not just an enquiry form.' },
        { icon: Compass, title: 'Travel Agencies & Tour Operators', desc: 'Itinerary showcases and lead capture built around how people actually plan trips.' },
        { icon: Camera, title: 'Homestays & Boutique Properties', desc: 'Strong visual content and social presence for properties competing on experience, not scale.' },
        { icon: Ticket, title: 'Event Venues', desc: 'Venue marketing built around seasonal booking windows and visual proof of the space.' },
    ],
}

export const TravelSectorServices = {
    badge: 'What we do for you',
    heading: (<>Every service your property{' '}<span className="text-amber-500">needs to fill rooms</span></>),
    subheading: 'Visual content, social presence, and a website built to convert browsing into bookings.',
    items: [
        { icon: Camera, title: 'Videography & Photography', desc: 'On-location shoots that show the property and experience, not stock-photo generic shots.', tags: ['Videography', 'Video Editing'] },
        { icon: Share2, title: 'Social Media Management', desc: 'A content calendar planned around seasonality and booking windows, not a flat monthly schedule.', tags: ['Social Planning'] },
        { icon: Globe, title: 'Booking-Friendly Websites', desc: 'Sites built around converting interest into a confirmed booking or enquiry.', tags: ['Website Development'] },
        { icon: Users, title: 'Influencer Partnerships', desc: 'Local and niche travel creators who bring real, engaged audiences.', tags: ['Influencer Marketing'] },
        { icon: Search, title: 'Local & Destination SEO', desc: 'Ranking for the searches people actually run before choosing where to stay.', tags: ['SEO Consultancy'] },
        { icon: BarChart3, title: 'Performance Campaigns', desc: 'Paid campaigns timed around peak season and booking windows.', tags: ['Performance Marketing'] },
    ],
}

export const TravelSectorStats = {
    stats: [
        { value: '8+', label: 'Travel & hospitality clients', sublabel: 'Across UP & beyond' },
        { value: 'Seasonal', label: 'Campaign planning', sublabel: 'Built around booking windows' },
        { value: 'Visual-first', label: 'Content approach', sublabel: 'Photography & video led' },
        { value: 'Full', label: 'Booking-flow websites', sublabel: 'Enquiry to confirmation' },
    ],
}

export const TravelSectorTrust = {
    badge: 'Why Wizards',
    heading: (<>We understand how{' '}<span className="text-amber-500">travel decisions</span>{' '}actually get made</>),
    subheading: "Travel and hospitality marketing lives or dies on visual proof and timing — we build both into the strategy from day one.",
    points: [
        { icon: Camera, title: 'Visual content that sells the experience', desc: 'On-location shoots, not stock photography — the property as it actually is.' },
        { icon: Clock, title: 'Seasonality built into planning', desc: 'Content and ad calendars timed around your actual booking windows.' },
        { icon: Globe, title: 'Booking-focused websites', desc: 'Every page built around converting a browser into a confirmed guest.' },
        { icon: TrendingUp, title: 'Measured on enquiries, not likes', desc: 'Reporting tied to bookings and enquiries, not vanity engagement numbers.' },
    ],
}

export const TravelSectorFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Do you handle destination and property photography?', a: 'Yes, through Videography — on-location shoots are standard for this category.' },
        { q: 'Can you help during peak season pushes?', a: 'Yes, campaigns are often planned specifically around seasonal booking windows.' },
        { q: 'Do you work with both hospitality properties and travel agencies?', a: 'Yes, the approach adapts to which side of the booking journey this is.' },
        { q: 'Can you integrate a real booking system into our website?', a: 'Yes, booking-flow integration is a standard part of website builds in this category.' },
        { q: 'Do you work with properties outside Varanasi?', a: 'Yes — we work with travel and hospitality clients pan-India.' },
    ],
}
