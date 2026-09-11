import {
    School, Globe, Share2, Search, BarChart3,
    Star, Clock, Users, TrendingUp,
    GraduationCap, BookOpen, Award, Calendar,
} from 'lucide-react'
import type { ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

export const EducationSectorHero = {
    badge: 'Education',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            Reach the parent{' '}
            <span className="text-amber-500">and the student</span>{' '}
            — at the right moment
        </h1>
    ),
    subheading: 'We help schools, coaching institutes, and education brands market to a two-audience decision — with content timed around the academic year.',
    primaryCta: { label: 'Grow enrollments', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '/our-works' },
    tags: ['Schools', 'Coaching Institutes', 'Ed-Tech', 'Test Prep', 'Colleges', 'Skill Academies'],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div aria-hidden className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-20">
                        <GraduationCap size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-200 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
            </div>
        </FadeUp>
    )
}

export const EducationSectorAudience = {
    badge: 'Who is this for',
    heading: (<>Built for every part of{' '}<span className="text-amber-500">the education journey</span></>),
    subheading: "The audience researching isn't always the one who'll experience the product day to day — parents decide, students live it.",
    cards: [
        { icon: School, title: 'Schools', desc: 'Enrollment-focused websites and content built around the academic year calendar.' },
        { icon: BookOpen, title: 'Coaching & Test-Prep Institutes', desc: 'Results-driven content and campaigns timed around enrollment windows.' },
        { icon: GraduationCap, title: 'Colleges & Skill Academies', desc: 'Corporate-style credibility materials alongside campus-life social content.' },
        { icon: Users, title: 'Ed-Tech Platforms', desc: 'Digital-first marketing built for an audience that researches entirely online.' },
    ],
}

export const EducationSectorServices = {
    badge: 'What we do for you',
    heading: (<>Every service your institution{' '}<span className="text-amber-500">needs to enroll</span></>),
    subheading: 'Outcome-driven content, enrollment-timed campaigns, and social proof built around your academic calendar.',
    items: [
        { icon: BookOpen, title: 'Outcomes-Focused Content', desc: 'Content built around results, placements, and achievements for SEO and credibility.', tags: ['Content Creation', 'SEO Consultancy'] },
        { icon: Share2, title: 'Campus & Program Social Content', desc: 'Videography and social planning that shows campus life and teaching quality.', tags: ['Videography', 'Social Planning'] },
        { icon: Calendar, title: 'Enrollment-Cycle Campaigns', desc: 'Paid campaigns timed to enrollment windows, not a flat always-on budget.', tags: ['Performance Marketing'] },
        { icon: Award, title: 'Institutional Credibility Materials', desc: 'Corporate-style profile materials for institutional trust-building.', tags: ['Corporate Profile Creation'] },
        { icon: Globe, title: 'Enrollment-Focused Websites', desc: 'Sites built around the specific decision journey of parents and students.', tags: ['Website Development'] },
        { icon: BarChart3, title: 'Lead Tracking & Reporting', desc: 'Enquiry and enrollment tracking, not just traffic numbers.', tags: ['Analytics & Reporting'] },
    ],
}

export const EducationSectorStats = {
    stats: [
        { value: '10+', label: 'Education clients', sublabel: 'Schools to test-prep' },
        { value: 'Cycle-timed', label: 'Campaign planning', sublabel: 'Built around enrollment windows' },
        { value: 'Two audiences', label: 'Messaging approach', sublabel: 'Parents and students' },
        { value: 'Outcomes-first', label: 'Content strategy', sublabel: 'Results, not just brand' },
    ],
}

export const EducationSectorTrust = {
    badge: 'Why Wizards',
    heading: (<>We understand how{' '}<span className="text-amber-500">enrollment decisions</span>{' '}actually get made</>),
    subheading: 'Education marketing has to speak to two audiences at once — we build that into strategy from day one.',
    points: [
        { icon: Users, title: 'Two-audience messaging', desc: 'Content built for parents deciding and students experiencing, not one generic voice.' },
        { icon: Calendar, title: 'Timed to the academic year', desc: 'Content calendars built around enrollment windows, not a flat monthly schedule.' },
        { icon: Award, title: 'Outcomes over atmosphere', desc: 'Results and placements lead the content, with campus life supporting it.' },
        { icon: TrendingUp, title: 'Measured on enquiries', desc: 'Reporting tied to enrollment enquiries, not just website traffic.' },
    ],
}

export const EducationSectorFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Do you work with both schools and coaching/test-prep institutes?', a: 'Yes, both — the content strategy adjusts to which audience is deciding.' },
        { q: 'Can you help during enrollment season specifically?', a: 'Yes, campaigns are commonly built specifically around enrollment windows.' },
        { q: 'Do you create content for both parents and students as separate audiences?', a: 'Yes, when the strategy calls for it — the two audiences often need different messaging.' },
        { q: 'Can you build an institutional profile for accreditation or partnership purposes?', a: 'Yes, see Corporate Profile Creation for this specifically.' },
        { q: 'How do you measure success for an education client?', a: 'Enrollment enquiries and conversions, tracked through Analytics & Reporting — not just traffic.' },
    ],
}
