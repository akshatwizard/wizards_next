import { LucideIcon } from 'lucide-react'
import { ServiceFAQType, ServiceTestimonialsType } from './service.types'

// ─── Hero ─────────────────────────────────────────────────────────────────────

export type SectorHeroType = {
    badge: string
    heading: React.ReactNode
    subheading: string
    primaryCta: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
    tags: string[]          
    right_section: React.ReactNode
}

export type SectorAudienceCardType = {
    icon: LucideIcon
    title: string
    desc: string
}

export type SectorAudienceType = {
    badge?: string
    heading: React.ReactNode
    subheading?: string
    cards: SectorAudienceCardType[]
}

export type SectorServiceItemType = {
    icon: LucideIcon
    title: string
    desc: string
    tags: string[]
}

export type SectorServicesType = {
    badge?: string
    heading: React.ReactNode
    subheading?: string
    items: SectorServiceItemType[]
}

// ─── Stats Banner ─────────────────────────────────────────────────────────────

export type SectorStatType = {
    value: string
    label: string
    sublabel?: string
}

export type SectorStatsBannerType = {
    stats: SectorStatType[]
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

export type SectorCaseStudyItemType = {
    client: string
    result: string
    metric: string
    metricLabel: string
    desc: string
    tags: string[]
    href?: string
}

export type SectorCaseStudyType = {
    badge?: string
    heading: React.ReactNode
    subheading?: string
    items: SectorCaseStudyItemType[]
}

// ─── Projects ────────────────────────────────────────────────────────────────

export type SectorProjectItemType = {
    name: string
    type: string           // e.g. "Hospital Website"
    tags: string[]
    href?: string
    accentColor?: string   // optional per-card tint e.g. "emerald"
}

export type SectorProjectType = {
    badge?: string
    heading: React.ReactNode
    subheading?: string
    items: SectorProjectItemType[]
}

// ─── Mid CTA Banner ───────────────────────────────────────────────────────────

export type SectorMidCTAType = {
    heading: React.ReactNode
    subheading: string
    primaryCta: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
}

// ─── Clients ─────────────────────────────────────────────────────────────────

export type SectorClientItemType = {
    initials: string
    name: string
    type: string           // e.g. "Multi-speciality Hospital"
    location?: string
}

export type SectorClientListType = {
    badge?: string
    heading: React.ReactNode
    items: SectorClientItemType[]
}

// ─── Why Choose Wizards (trust section) ──────────────────────────────────────

export type SectorTrustPointType = {
    icon: LucideIcon
    title: string
    desc: string
}

export type SectorTrustType = {
    badge?: string
    heading: React.ReactNode
    subheading?: string
    points: SectorTrustPointType[]
}

// ─── Testimonials & FAQ — reuse existing service types ───────────────────────

export type { ServiceTestimonialsType, ServiceFAQType } from './service.types'

// ─── Full sector page data shape ─────────────────────────────────────────────

export type SectorPageData = {
    hero: SectorHeroType
    audience: SectorAudienceType
    services: SectorServicesType
    stats: SectorStatsBannerType
    caseStudy: SectorCaseStudyType
    projects: SectorProjectType
    midCTA: SectorMidCTAType
    clients: SectorClientListType
    trust: SectorTrustType
    testimonials: ServiceTestimonialsType
    faq: ServiceFAQType
}