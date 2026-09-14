import {
    Sparkles, Users, Scissors,
    Flower2, Wind, BookOpen, Video,
    MessageCircleHeart, Search, CalendarCheck, PenTool,
    Clock, HeartHandshake, TrendingUp, Award,
} from 'lucide-react'
import type { ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

// This sector launched with our first Personal Services client (Divine
// Soul Resonance) in September 2026. The framing, audience list, and
// stats below are built to genuinely reflect that starting point — not
// to imply a larger existing roster than we have yet. Update as more
// clients in this sector are added.

// ─── Hero ──────────────────────────────────────────────────────

export const PersonalServicesSectorHero = {
    badge: 'Personal Services & Wellness Practices',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium" >
            Marketing built around{' '}
            <span className="text-amber-500">you, not a storefront</span>
        </h1>
    ),
    subheading: "For yoga teachers, energy healers, salon owners, and independent practitioners whose business really is their own name and expertise — content, presence, and search visibility built around a person, not a product catalogue.",
    primaryCta: { label: 'Talk to us', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '#projects' },
    tags: ['Yoga & Wellness', 'Energy Healing', 'Salons & Spas', 'Spiritual Practices', 'Independent Coaches'],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div aria-hidden className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-20">
                        <Sparkles size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-200 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
                <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-amber-600/60" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl">
                <p className="font-syne text-xl font-black text-amber-500 leading-none">2.36</p>
                <p className="text-[12px] text-zinc-200 mt-0.5 uppercase tracking-widest">Avg. position, brand search</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl">
                <p className="font-syne text-xl font-black text-amber-500 leading-none">8,000+</p>
                <p className="text-[12px] text-zinc-200 mt-0.5 uppercase tracking-widest">Search impressions tracked</p>
            </div>
        </FadeUp>
    )
}

// ─── For Whom ──────────────────────────────────────────────────

export const PersonalServicesSectorAudience = {
    badge: 'Who is this for',
    heading: (
        <>
            Built for practices where{' '}
            <span className="text-amber-500">the person is the brand</span>
        </>
    ),
    subheading:
        "If clients choose you because of who you are and how you work, not because you're the nearest option — the marketing has to be built around trust and voice, not a generic services page.",
    cards: [
        {
            icon: Wind,
            title: 'Yoga & Meditation Teachers',
            desc: 'Studios and independent instructors who need class schedules, a real teaching voice in their content, and a way for new students to find and trust them online.',
        },
        {
            icon: Flower2,
            title: 'Energy Healers & Spiritual Practitioners',
            desc: 'Pranic healers, Reiki practitioners, tarot readers, and chakra-work specialists — practices built on trust, where content has to explain an offering most visitors are new to.',
        },
        {
            icon: Scissors,
            title: 'Salons & Personal Grooming',
            desc: 'Stylists and salon owners whose repeat business depends on a consistent, recognisable presence — not just a one-time booking.',
        },
        {
            icon: HeartHandshake,
            title: 'Wellness Coaches & Consultants',
            desc: 'Life, health, and wellness coaches who need a clear path from "found the page" to "booked a discovery call."',
        },
        {
            icon: MessageCircleHeart,
            title: 'Independent Therapists & Counsellors',
            desc: 'Practitioners where the website\'s job is building enough trust for someone to reach out about something personal.',
        },
        {
            icon: Users,
            title: 'Solo Practitioners, Generally',
            desc: "Any one-person or small practice where the founder's own expertise and story are the actual product — this sector is built around that pattern, whatever the specific discipline.",
        },
    ],
}

// ─── Services ──────────────────────────────────────────────────

export const PersonalServicesSectorServices = {
    badge: 'What we do for you',
    heading: (
        <>
            A presence built around{' '}
            <span className="text-amber-500">your voice</span>
        </>
    ),
    subheading:
        "For a personal-brand practice, generic copy is the fastest way to sound like everyone else offering the same thing. Every piece of this is built to sound like you, specifically.",
    items: [
        {
            icon: PenTool,
            title: 'Personal Brand & Website Development',
            desc: 'A website built around your story and offerings, not a template services page — the same modern stack we use across the agency, sized to a solo or small practice.',
            tags: ['Website Development', 'Personal Branding', 'Responsive Design'],
        },
        {
            icon: BookOpen,
            title: 'Content & Storytelling',
            desc: "Articles, captions, and page copy written to sound like you, not a stock template — the way clients actually get to know a practitioner before booking anything.",
            tags: ['Content Creation', 'Blog Writing', 'Brand Voice'],
        },
        {
            icon: Video,
            title: 'Social Media & Video',
            desc: 'Planning, visual content, and video edited for the platforms where wellness and personal-brand audiences actually spend time.',
            tags: ['Social Media', 'Video Editing', 'Graphic Design'],
        },
        {
            icon: Search,
            title: 'SEO Built for Niche, Trust-Led Search',
            desc: "Search terms in this space are often specific and unfamiliar to a general audience — SEO here is as much about explaining an offering clearly as it is about keywords.",
            tags: ['SEO', 'Content Strategy'],
        },
        {
            icon: CalendarCheck,
            title: 'Enquiry & Discovery-Call Pathways',
            desc: 'A clear, low-friction way for an interested visitor to take the next step — a discovery call, a booking form, or a direct enquiry, not a dead end.',
            tags: ['Enquiry Forms', 'Booking Flows'],
        },
        {
            icon: TrendingUp,
            title: 'Reporting You Can Actually Read',
            desc: 'Plain-language updates on what search and social activity is actually doing — real numbers, explained honestly, not a wall of jargon.',
            tags: ['Analytics & Reporting'],
        },
    ],
}

// ─── Stats ─────────────────────────────────────────────────────
// Real, disclosed numbers from our first Personal Services client
// (Divine Soul Resonance) — this sector is new, so these reflect one
// live engagement's Search Console history, not an aggregate across
// many clients yet.

export const PersonalServicesSectorStats = {
    stats: [
        { value: '8,000+', label: 'Search impressions tracked', sublabel: 'Across a 16-month Search Console history' },
        { value: '2.36', label: 'Avg. position for brand search', sublabel: 'Consistently on page 1 of Google' },
        { value: '40%', label: 'Of search visibility from the USA', sublabel: 'Reaching an international audience' },
        { value: '7', label: 'Blog articles already ranking', sublabel: 'Each gaining independent search visibility' },
    ],
}

// ─── Trust / Why Wizards ───────────────────────────────────────

export const PersonalServicesSectorTrust = {
    badge: 'Why Wizards',
    heading: (
        <>
            Patience is part of{' '}
            <span className="text-amber-500">the strategy</span>{' '}
            here, not an excuse
        </>
    ),
    subheading:
        "Trust-led, niche practices build an audience differently than a product business does — search visibility tends to arrive before clicks catch up, and content compounds slowly before it compounds quickly. We plan for that rhythm rather than pretending it doesn't exist.",
    points: [
        {
            icon: Clock,
            title: 'We set expectations honestly',
            desc: "Digital marketing results in this space are a long game, not a launch-week spike. We say so upfront, and we report progress in a way that reflects that reality rather than overselling short-term numbers.",
        },
        {
            icon: Award,
            title: 'Content that sounds like you',
            desc: "For a personal-brand practice, generic content is worse than no content — everything we write is built around your own voice and offerings, not a reusable template.",
        },
        {
            icon: Search,
            title: "SEO for terms people don't yet know",
            desc: "Search behaviour for niche spiritual and wellness terms is different from mainstream commercial search — we build content that explains the offering, not just content chasing keyword volume.",
        },
        {
            icon: HeartHandshake,
            title: 'One consistent team',
            desc: "The same team handling your content, SEO, and web presence throughout — so the story stays consistent instead of fragmenting across vendors.",
        },
    ],
}

// ─── FAQ ───────────────────────────────────────────────────────

export const PersonalServicesSectorFAQ: ServiceFAQType = {
    faq_list: [
        {
            q: 'How long before I see real results?',
            a: "Honestly — longer than a product business, usually. Search visibility for personal-brand and wellness practices tends to build gradually: impressions climb first, and clicks and enquiries follow as trust builds. Patience is genuinely part of the strategy here, not a caveat we add after the fact.",
        },
        {
            q: 'Can you write content that actually sounds like me?',
            a: "That's the specific goal for this sector. We spend time understanding your own voice, offerings, and story before writing anything — the aim is content a client would believe came from you, not from an agency template.",
        },
        {
            q: "My practice doesn't fit neatly into 'Yoga' or 'Healing' — do you still work with practices like mine?",
            a: "Yes. This sector is built around a pattern — an individual or small practice where the founder's own expertise is the product — more than a specific discipline. If that pattern fits, the approach applies.",
        },
        {
            q: 'Do you handle bookings or discovery calls directly?',
            a: "We build the enquiry and discovery-call pathway on your site — the forms, the routing, the clarity of next steps — so a visitor always has an obvious way to reach you. Whether calls are then handled by you or a booking tool is set up around your own workflow.",
        },
        {
            q: 'What does reporting look like for a practice this size?',
            a: "Plain-language updates on what search and social activity is actually showing — real numbers from Search Console and your social platforms, explained honestly, including when something hasn't moved yet and why that's not unusual at this stage.",
        },
        {
            q: "We're a solo practice — is this too small an engagement for an agency?",
            a: "No — this sector exists because solo and small practices need the same disciplined approach as a larger brand, just sized appropriately. The team and standard are the same across every engagement.",
        },
    ],
}

// ─── Full page data export ─────────────────────────────────────

export const PersonalServicesSectorData = {
    hero: PersonalServicesSectorHero,
    audience: PersonalServicesSectorAudience,
    services: PersonalServicesSectorServices,
    stats: PersonalServicesSectorStats,
    trust: PersonalServicesSectorTrust,
    faq: PersonalServicesSectorFAQ,
}
