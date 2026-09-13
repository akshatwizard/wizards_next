import {
    Users, Globe, Lock, Server,
    ShieldCheck, Clock, TrendingUp, HeartHandshake,
    GraduationCap, Heart, Building2, KeyRound,
    UserCheck, Database, Smartphone, RefreshCw,
} from 'lucide-react'
import type { ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

// ─── Hero ──────────────────────────────────────────────────────

export const MembershipSectorHero = {
    badge: 'Membership & Community Platforms',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium" >
            Secure, self-service platforms{' '}
            <span className="text-amber-500">members actually trust</span>
        </h1>
    ),
    subheading: 'For matrimonial services, alumni associations, professional bodies, and any organisation whose website is really a member management system in disguise — built for privacy, security, and years of stable operation.',
    primaryCta: { label: 'Talk to us', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '#projects' },
    tags: ['Matrimonial Services', 'Alumni Associations', 'Membership Clubs', 'Professional Bodies', 'Community Networks'],
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
                        <Lock size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-200 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
                <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-amber-600/60" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl">
                <p className="font-syne text-xl font-black text-amber-500 leading-none">7+ yrs</p>
                <p className="text-[12px] text-zinc-200 mt-0.5 uppercase tracking-widest">Systems still running</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl">
                <p className="font-syne text-xl font-black text-amber-500 leading-none">25,000+</p>
                <p className="text-[12px] text-zinc-200 mt-0.5 uppercase tracking-widest">Member profiles managed</p>
            </div>
        </FadeUp>
    )
}

// ─── For Whom ──────────────────────────────────────────────────

export const MembershipSectorAudience = {
    badge: 'Who is this for',
    heading: (
        <>
            Built for organisations where{' '}
            <span className="text-amber-500">membership is the business</span>
        </>
    ),
    subheading:
        "If your organisation's real product is a managed list of people — members, alumni, subscribers, matched profiles — a normal marketing website isn't the right tool. This is.",
    cards: [
        {
            icon: Heart,
            title: 'Matrimonial & Matchmaking Services',
            desc: 'Advisor-driven or self-service matchmaking platforms that need secure profile handling, OTP-gated access, and a preference-matching system, not an open public directory.',
        },
        {
            icon: GraduationCap,
            title: 'Alumni Associations',
            desc: 'School, college, and institutional alumni networks that need verified member directories, event management, and a system built to survive a change in leadership every few years.',
        },
        {
            icon: Building2,
            title: 'Professional & Trade Bodies',
            desc: 'Associations and chambers that manage member records, subscriptions, and internal communications through one central, access-controlled system.',
        },
        {
            icon: Users,
            title: 'Membership Clubs & Societies',
            desc: 'Clubs and societies where members need self-service access to their own information, while staff manage the underlying database and communications.',
        },
        {
            icon: HeartHandshake,
            title: 'Community & Social Networks',
            desc: 'Niche community platforms built around a shared identity or interest, where trust and privacy matter more than open, public browsing.',
        },
        {
            icon: RefreshCw,
            title: 'Subscription & Franchise Businesses',
            desc: 'Multi-location or franchise-model membership businesses that need one central system managing customers, service delivery, and renewals across every branch.',
        },
    ],
}

// ─── Services ──────────────────────────────────────────────────

export const MembershipSectorServices = {
    badge: 'What we do for you',
    heading: (
        <>
            The system underneath{' '}
            <span className="text-amber-500">the website</span>
        </>
    ),
    subheading:
        'For a membership-driven organisation, the website is the smallest part of the job. The real work is the system running behind it.',
    items: [
        {
            icon: Globe,
            title: 'Website & Member Portal Development',
            desc: 'A public-facing site paired with a secure, logged-in member area — built on the stack that fits the project, from Laravel and Drupal to Next.js.',
            tags: ['Website Development', 'Member Portals', 'Responsive Design'],
        },
        {
            icon: KeyRound,
            title: 'Secure, OTP-Gated Access',
            desc: 'Member-only areas protected behind OTP or credential-based login, so sensitive personal information is never publicly browsable.',
            tags: ['OTP Login', 'Access Control', 'Data Privacy'],
        },
        {
            icon: Database,
            title: 'Admin & CRM Panels',
            desc: 'A dedicated back-office panel for your own team — logging leads, managing member records, tracking service delivery — separate from anything a member ever sees.',
            tags: ['Admin Panel', 'CRM', 'Lead Management'],
        },
        {
            icon: Users,
            title: 'Membership & Approval Workflows',
            desc: 'Structured registration and approval flows rather than open sign-up — new members, profiles, or listings go through your team before they go live.',
            tags: ['Approval Workflows', 'Member Management'],
        },
        {
            icon: Smartphone,
            title: 'Mobile Apps',
            desc: 'A mobile companion to the core system, for members who want the same access from a phone.',
            tags: ['Mobile App', 'Android', 'iOS'],
        },
        {
            icon: Server,
            title: 'Built to Run for Years',
            desc: 'Systems engineered for stability over novelty — once launched and stabilised, built to keep running your day-to-day operations without constant rework.',
            tags: ['Stability', 'Low Maintenance', 'Scalability'],
        },
    ],
}

// ─── Stats ─────────────────────────────────────────────────────

export const MembershipSectorStats = {
    stats: [
        { value: '7+', label: 'Years a system has run', sublabel: 'With near-zero ongoing maintenance' },
        { value: '25,000+', label: 'Member profiles managed', sublabel: 'Across a single platform' },
        { value: '3', label: 'Cities operated across', sublabel: 'One system, multiple locations' },
        { value: '0', label: 'Rebuilds needed', sublabel: 'On systems built to last' },
    ],
}

// ─── Trust / Why Wizards ───────────────────────────────────────

export const MembershipSectorTrust = {
    badge: 'Why Wizards',
    heading: (
        <>
            We build the part{' '}
            <span className="text-amber-500">members never see</span>{' '}
            — and it has to work
        </>
    ),
    subheading:
        "A membership platform fails quietly if the system underneath it is fragile. We build for the part that actually matters: it keeps running, it keeps data private, and it doesn't need to be rebuilt every time leadership changes.",
    points: [
        {
            icon: ShieldCheck,
            title: 'Privacy by design',
            desc: "Member data is never publicly browsable by default — access is gated behind OTP or credential-based login, with visibility controlled by your own team, not left open.",
        },
        {
            icon: UserCheck,
            title: 'Built for handover',
            desc: 'Especially for associations where leadership rotates every few years, systems are built so day-to-day management can pass from one team to the next without retraining or rebuilding.',
        },
        {
            icon: Clock,
            title: 'Engineered to last',
            desc: "Some of our membership systems have run for years with almost no maintenance — built once, stabilised early, and left to run the business reliably since.",
        },
        {
            icon: TrendingUp,
            title: 'Real transactional load, handled',
            desc: 'These are not static brochure sites — they process real leads, real logins, and real member activity daily, and the architecture is built to handle that from day one.',
        },
    ],
}

// ─── FAQ ───────────────────────────────────────────────────────

export const MembershipSectorFAQ: ServiceFAQType = {
    faq_list: [
        {
            q: 'Is this different from a normal business website?',
            a: "Yes, substantially. A membership platform needs secure login, an admin panel your own team uses daily, and a data model built around people and records rather than pages and products. We treat it as a system build, not a marketing site.",
        },
        {
            q: 'How do you keep member data private and secure?',
            a: 'Member-facing areas sit behind OTP or credential-gated login by default. Nobody outside your organisation can browse the underlying database — visibility is controlled entirely by your own team through the admin panel.',
        },
        {
            q: "Our organisation's leadership changes every few years — will that break the system?",
            a: "No — this is specifically planned for. Systems for associations with rotating leadership are built so day-to-day management can be handed from one committee or team to the next without retraining or rebuilding anything.",
        },
        {
            q: 'Can this handle real day-to-day business operations, not just a website?',
            a: 'Yes. These systems are built to run leads, sales, member approvals, and service delivery as the actual operating system of the business — not just an informational site sitting alongside the real work.',
        },
        {
            q: 'Do you build a mobile app alongside the website?',
            a: "Where it's genuinely useful, yes — either as a full companion app or a lighter mobile projection of the core system, depending on what members actually need.",
        },
        {
            q: 'How much ongoing maintenance does a system like this need?',
            a: "Once stabilised, surprisingly little. One of our matrimonial platform builds has run since 2019 with near-zero bugs and no further development cost, while still powering the client's full daily operations.",
        },
    ],
}

// ─── Full page data export ─────────────────────────────────────

export const MembershipSectorData = {
    hero: MembershipSectorHero,
    audience: MembershipSectorAudience,
    services: MembershipSectorServices,
    stats: MembershipSectorStats,
    trust: MembershipSectorTrust,
    faq: MembershipSectorFAQ,
}
