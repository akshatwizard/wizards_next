import {
    Wrench, Globe, Share2, Search, BarChart3,
    Star, Clock, Users, TrendingUp,
    MapPin, MessageCircle, Phone,
} from 'lucide-react'
import type { ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

export const LocalServicesSectorHero = {
    badge: 'Local Services',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            Show up exactly when{' '}
            <span className="text-amber-500">someone&apos;s searching for you</span>
        </h1>
    ),
    subheading: 'We help home services, salons, gyms, and local professionals win the local search moment that actually drives enquiries.',
    primaryCta: { label: 'Grow my business', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '/our-works' },
    tags: ['Home Services', 'Salons & Spas', 'Gyms & Fitness', 'Repair Services', 'Professional Services', 'Cleaning'],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-20">
                        <Wrench size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
            </div>
        </FadeUp>
    )
}

export const LocalServicesSectorAudience = {
    badge: 'Who is this for',
    heading: (<>Built for every kind of{' '}<span className="text-amber-500">local service business</span></>),
    subheading: "Local service businesses live or die by local search visibility and word-of-mouth-style trust signals.",
    cards: [
        { icon: Wrench, title: 'Home Services', desc: 'Local SEO and Google Business Profile management for "near me" searches.' },
        { icon: Star, title: 'Salons, Spas & Gyms', desc: 'Review-driven presence and WhatsApp booking for repeat local customers.' },
        { icon: Phone, title: 'Repair & Technical Services', desc: 'Fast, credible websites for the moment someone urgently needs help.' },
        { icon: Users, title: 'Local Professional Services', desc: 'Credibility content and local visibility for consultants and practitioners.' },
    ],
}

export const LocalServicesSectorServices = {
    badge: 'What we do for you',
    heading: (<>Every service your business{' '}<span className="text-amber-500">needs to be found locally</span></>),
    subheading: 'Local SEO, direct WhatsApp enquiries, and a simple, fast, credible website.',
    items: [
        { icon: Search, title: 'Local SEO & Google Business Profile', desc: 'Ranking and reputation management for the searches that drive real enquiries.', tags: ['SEO Consultancy'] },
        { icon: MessageCircle, title: 'WhatsApp for Enquiries & Bookings', desc: 'A direct line for enquiries and bookings, often replacing a formal booking system.', tags: ['WhatsApp Marketing'] },
        { icon: Globe, title: 'Simple, Fast Websites', desc: 'Credibility-confirming sites, sized to what the business actually needs.', tags: ['Website Development'] },
        { icon: Star, title: 'Review & Reputation Content', desc: 'Content that supports and reinforces a strong local reputation.', tags: ['Content Creation'] },
        { icon: Share2, title: 'Local Social Presence', desc: 'Social content that reinforces local trust and visibility.', tags: ['Social Planning'] },
        { icon: BarChart3, title: 'Enquiry Tracking', desc: 'Reporting focused on calls, messages, and enquiries.', tags: ['Analytics & Reporting'] },
    ],
}

export const LocalServicesSectorStats = {
    stats: [
        { value: '14+', label: 'Local service clients', sublabel: 'Salons to home services' },
        { value: '"Near me"', label: 'Top-priority SEO target', sublabel: 'Where most enquiries originate' },
        { value: 'Direct', label: 'WhatsApp enquiry channel', sublabel: 'Often replaces formal booking tools' },
        { value: 'Lean', label: 'Website builds', sublabel: 'Sized to what\'s actually needed' },
    ],
}

export const LocalServicesSectorTrust = {
    badge: 'Why Wizards',
    heading: (<>We understand{' '}<span className="text-amber-500">local search moments</span></>),
    subheading: 'The priority here is almost always visibility at the moment of need, over broader brand-building content.',
    points: [
        { icon: MapPin, title: 'Local visibility, prioritised', desc: 'Google Business Profile and local SEO treated as the primary lever for this category.' },
        { icon: MessageCircle, title: 'WhatsApp as a real booking tool', desc: 'Paired with clear response-time expectations, not just a chat window.' },
        { icon: Globe, title: 'Right-sized websites', desc: 'A site built to what the business actually needs, not an oversized build.' },
        { icon: Star, title: 'Trust signals that matter locally', desc: 'Reviews and reputation content built for how local customers actually decide.' },
    ],
}

export const LocalServicesSectorFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'What\'s the single highest-priority service for a local service business?', a: 'Usually local SEO and Google Business Profile management — that\'s where most enquiries actually originate.' },
        { q: 'Do we need a full website, or is a simpler page enough?', a: 'Depends on the business — discussed based on how much your website needs to do versus just confirming credibility.' },
        { q: 'Can WhatsApp really replace a booking system?', a: 'For many local service businesses, yes — paired with clear response-time expectations.' },
        { q: 'Do you work with single-location or multi-location local businesses?', a: 'Both — multi-location businesses get consistent local SEO management across each location.' },
        { q: 'How do you track results for a local service business?', a: 'Calls, messages, and enquiries — tracked through Analytics & Reporting.' },
    ],
}
