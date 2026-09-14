import {
    Stethoscope, Plane, ShoppingBag, School, Car,
    Shirt, Building2, Laptop, Wrench, UtensilsCrossed, Users, Sparkles,
} from 'lucide-react'

export type SectorIndexEntry = {
    icon: React.ElementType
    slug: string
    name: string
    // Reused verbatim from each sector page's own meta description — see
    // src/app/sector/<slug>/page.tsx. Keeping one source of truth for this
    // copy means the hub page can never say something that contradicts the
    // page it links to.
    description: string
    iconBg: string
    iconColor: string
}

export const SECTOR_INDEX: SectorIndexEntry[] = [
    {
        icon: Stethoscope,
        slug: 'healthcare',
        name: 'Healthcare',
        description: 'We help hospitals, clinics, and doctors in Varanasi and across India grow their patient base with websites, SEO, social media, and paid ads.',
        iconBg: 'bg-emerald-600/10',
        iconColor: 'text-emerald-500',
    },
    {
        icon: Plane,
        slug: 'travel-and-tourism',
        name: 'Travel & Tourism',
        description: 'We help hotels, resorts, and travel agencies in Varanasi and across India turn browsing into bookings.',
        iconBg: 'bg-sky-600/10',
        iconColor: 'text-sky-500',
    },
    {
        icon: ShoppingBag,
        slug: 'fmcg',
        name: 'FMCG',
        description: 'We help FMCG and consumer goods brands build consistent identity, D2C e-commerce, and scalable performance campaigns.',
        iconBg: 'bg-amber-600/10',
        iconColor: 'text-amber-500',
    },
    {
        icon: School,
        slug: 'education',
        name: 'Education',
        description: 'We help schools, coaching institutes, and education brands reach parents and students at the right moment.',
        iconBg: 'bg-violet-600/10',
        iconColor: 'text-violet-500',
    },
    {
        icon: Car,
        slug: 'automotive',
        name: 'Automotive',
        description: "We help dealerships and service centres capture buyers while they're still researching online.",
        iconBg: 'bg-zinc-600/10',
        iconColor: 'text-zinc-100',
    },
    {
        icon: Shirt,
        slug: 'retail',
        name: 'Retail',
        description: 'We help jewellery, furniture, and fashion retailers bring people from the feed to the store.',
        iconBg: 'bg-rose-600/10',
        iconColor: 'text-rose-500',
    },
    {
        icon: Building2,
        slug: 'corporate',
        name: 'Corporate',
        description: 'We help B2B and institutional businesses build credibility that reads right to another business.',
        iconBg: 'bg-green-600/10',
        iconColor: 'text-green-500',
    },
    {
        icon: Laptop,
        slug: 'e-commerce',
        name: 'E-Commerce',
        description: 'We help online stores get built, found, and actually run — end to end.',
        iconBg: 'bg-pink-600/10',
        iconColor: 'text-pink-500',
    },
    {
        icon: UtensilsCrossed,
        slug: 'food-and-dining',
        name: 'Food & Dining',
        description: 'We help restaurants and cafes build the visual content and posting frequency that drives a visit.',
        iconBg: 'bg-orange-600/10',
        iconColor: 'text-orange-500',
    },
    {
        icon: Wrench,
        slug: 'local-services',
        name: 'Local Services',
        description: "We help home services, salons, gyms, and local professionals show up exactly when someone's searching.",
        iconBg: 'bg-blue-600/10',
        iconColor: 'text-blue-500',
    },
    {
        icon: Users,
        slug: 'membership-community',
        name: 'Membership & Community',
        description: 'Secure, self-service platforms for matrimonial services, alumni associations, professional bodies, and membership-driven organisations — built for privacy and years of stable operation.',
        iconBg: 'bg-indigo-600/10',
        iconColor: 'text-indigo-500',
    },
    {
        icon: Sparkles,
        slug: 'personal-services',
        name: 'Personal Services',
        description: 'Marketing built around the practitioner, not a storefront — for yoga teachers, energy healers, salons, and independent wellness practices.',
        iconBg: 'bg-fuchsia-600/10',
        iconColor: 'text-fuchsia-500',
    },
]
