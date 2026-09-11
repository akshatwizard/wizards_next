import {
    Building2, Globe, Share2, Search, BarChart3,
    Star, Clock, Users, TrendingUp,
    Briefcase, FileText, Award,
} from 'lucide-react'
import type { ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

export const CorporateSectorHero = {
    badge: 'Corporate',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            Credibility that reads right{' '}
            <span className="text-amber-500">to another business</span>
        </h1>
    ),
    subheading: 'We help B2B and institutional businesses build websites, corporate profiles, and content that earns trust from decision-makers.',
    primaryCta: { label: 'Build our presence', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '/our-works' },
    tags: ['B2B Services', 'Manufacturing', 'Enterprise', 'Institutional', 'Consulting', 'Trade & Export'],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-20">
                        <Building2 size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-200 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
            </div>
        </FadeUp>
    )
}

export const CorporateSectorAudience = {
    badge: 'Who is this for',
    heading: (<>Built for every kind of{' '}<span className="text-amber-500">B2B business</span></>),
    subheading: "Corporate marketing plays by different rules — longer decision cycles, fewer but higher-stakes conversions.",
    cards: [
        { icon: Briefcase, title: 'B2B Service Providers', desc: 'Websites and content built for a longer, more considered decision cycle.' },
        { icon: FileText, title: 'Tender & Institutional Bidders', desc: 'Corporate profiles built specifically for tender and institutional credibility.' },
        { icon: Building2, title: 'Manufacturing & Trade', desc: 'Professional digital presence for businesses selling to other businesses.' },
        { icon: Award, title: 'Consulting & Professional Services', desc: 'LinkedIn-appropriate content and credibility-focused design.' },
    ],
}

export const CorporateSectorServices = {
    badge: 'What we do for you',
    heading: (<>Every service your business{' '}<span className="text-amber-500">needs to win trust</span></>),
    subheading: 'Credibility assets built for a business decision-maker, not consumer-style scroll-stopping creative.',
    items: [
        { icon: FileText, title: 'Corporate Profile Videos & Documents', desc: 'Tender-ready and investor-ready credibility materials.', tags: ['Corporate Profile Creation'] },
        { icon: Globe, title: 'Professional Websites', desc: 'Conversion-focused sites built for a B2B decision-maker.', tags: ['Website Development'] },
        { icon: Share2, title: 'LinkedIn-First Content', desc: 'Content strategy built around LinkedIn as the priority platform.', tags: ['Content Creation', 'Social Planning'] },
        { icon: BarChart3, title: 'Lead-Quality Analytics', desc: 'Reporting tied to lead quality, not just traffic volume.', tags: ['Analytics & Reporting'] },
        { icon: Search, title: 'B2B SEO', desc: 'Ranking for the specific searches decision-makers actually run.', tags: ['SEO Consultancy'] },
        { icon: Award, title: 'Brand Identity for Institutions', desc: 'A restrained, credibility-focused visual system.', tags: ['Brand Creation'] },
    ],
}

export const CorporateSectorStats = {
    stats: [
        { value: '9+', label: 'Corporate & B2B clients', sublabel: 'Across sectors' },
        { value: 'Longer cycles', label: 'Strategy approach', sublabel: 'Built for considered decisions' },
        { value: 'Credibility-first', label: 'Design tone', sublabel: 'Restrained, not consumer-style' },
        { value: 'Tender-ready', label: 'Profile materials', sublabel: 'When institutional credibility matters' },
    ],
}

export const CorporateSectorTrust = {
    badge: 'Why Wizards',
    heading: (<>We understand how{' '}<span className="text-amber-500">business decision-makers</span>{' '}evaluate trust</>),
    subheading: 'Corporate marketing needs restraint and credibility, not consumer-style scroll-stopping creative.',
    points: [
        { icon: FileText, title: 'Credibility assets, done properly', desc: 'Corporate profiles built specifically for tenders and institutional pitches.' },
        { icon: Briefcase, title: 'Longer cycles, understood', desc: 'Strategy built around fewer, higher-stakes conversions rather than volume.' },
        { icon: Award, title: 'Restrained, intentional design', desc: 'Design that reads as credible to a business decision-maker, not flashy for its own sake.' },
        { icon: BarChart3, title: 'Lead quality over lead volume', desc: 'Reporting focused on qualified leads, not just raw traffic numbers.' },
    ],
}

export const CorporateSectorFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Is this different from your general Website Development service?', a: 'The build process is the same — the difference is in tone, content focus, and the credibility assets this category typically needs.' },
        { q: 'Do you handle LinkedIn specifically?', a: 'Yes, as part of Social Media Planning & Management when LinkedIn is the priority platform.' },
        { q: 'Can you build a tender-ready company profile?', a: 'Yes — see Corporate Profile Creation specifically for this.' },
        { q: 'Do you work with manufacturing and trade businesses?', a: 'Yes, alongside services, consulting, and other B2B categories.' },
        { q: 'How do you measure success for a B2B client?', a: 'Lead quality and qualified enquiries, tracked through Analytics & Reporting.' },
    ],
}
