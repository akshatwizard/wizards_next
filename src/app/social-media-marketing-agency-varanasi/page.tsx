import { Metadata } from 'next'
import CityServicePage, { CityServiceConfig } from '@/components/city/city_service_page'
import { SocialMediaServicesOffered, SocialMediaProcess, SocialMediaFAQ } from '@/constant/services_data'

const PATH = '/social-media-marketing-agency-varanasi'

export const metadata: Metadata = {
    title: 'Social Media Marketing Agency in Varanasi | Wizards Next',
    description: 'Social media marketing in Varanasi: content calendar, reels, posting and DM replies on Instagram, Facebook and LinkedIn. Office in Shivpurwa. Call +91 80721 99651.',
    alternates: { canonical: PATH },
}

const config: CityServiceConfig = {
    path: PATH,
    serviceSlug: 'social-media',
    serviceName: 'Social Media Marketing',
    h1: <>Social Media Marketing Agency in <span className="text-amber-600 font-sora!">Varanasi</span></>,
    intro: 'Social media planning and management for Varanasi businesses — content pillars, a monthly calendar, reels and posts, scheduled publishing and real replies to comments and DMs on Instagram, Facebook and LinkedIn. Run from our office in Shivpurwa by the team that built Dhanuka Silks and GNSR Textiles on Instagram from zero followers.',
    points: [
        { title: 'Shot and planned in Varanasi', body: 'Our team is in Varanasi, so shoots, store visits and strategy meetings happen face to face — the actual store, the actual products, the actual people behind the counter.' },
        { title: 'Planning and management, one job', body: 'Content pillars and the calendar sit with the same team that publishes and answers your comments and DMs, so every post serves a purpose rather than filling a slot.' },
        { title: 'Reported plainly', body: 'A monthly summary of reach, engagement and follower growth with real post-level numbers — whichever direction they move — and next month’s calendar changes based on it.' },
    ],
    offered: SocialMediaServicesOffered,
    process: SocialMediaProcess,
    faq: {
        faq_list: [
            { q: 'What does social media management cost in Varanasi?', a: 'Social media management starts from ₹15,000 a month. Ad budgets are separate and usually start around ₹10,000 a month for meaningful reach. Every plan is scoped to your goals, not a fixed package.' },
            { q: 'Can you shoot content at our shop or showroom in Varanasi?', a: 'Yes. Our team is based in Varanasi, so shoots, store visits and strategy meetings happen in person.' },
            { q: 'Is there a long-term contract?', a: 'No lock-ins. We work on rolling monthly engagements.' },
            ...SocialMediaFAQ.faq_list,
        ],
    },
}

export default function Page() {
    return <CityServicePage c={config} />
}
