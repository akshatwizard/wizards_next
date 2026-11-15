import { Metadata } from 'next'
import HydCityServicePage, { HydCityServiceConfig } from '@/components/city/hyd_city_service_page'
import { SocialMediaServicesOffered, SocialMediaProcess, SocialMediaFAQ } from '@/constant/services_data'
import { HYDERABAD_SOCIAL_CLIENTS } from '@/constant/hyderabad'

const PATH = '/social-media-marketing-agency-hyderabad'

export const metadata: Metadata = {
    title: 'Social Media Marketing Agency in Hyderabad for Doctors & Clinics',
    description: 'Social media marketing for Hyderabad doctors and clinics: content calendars, patient-education reels, posting and DM replies. Run remotely from Varanasi. Call +91 80721 99651.',
    alternates: { canonical: PATH },
}

const config: HydCityServiceConfig = {
    path: PATH,
    serviceSlug: 'social-media',
    serviceName: 'Social Media Marketing',
    h1: <>Social Media Marketing for Doctors &amp; Clinics in <span className="text-amber-600 font-sora!">Hyderabad</span></>,
    intro: 'Social media planning and management for Hyderabad doctors and clinics — content pillars, a monthly calendar, patient-education reels and posts, scheduled publishing and real replies to comments and DMs. We are based in Varanasi and work with Hyderabad practices remotely. This is the same team that took Dr. K. Shilpi Reddy from a comparatively lower-visibility clinical profile in 2023 to 419,000+ Instagram followers and 1.28 million YouTube subscribers, and that built Dr Ankita Chauhan’s presence from zero posts and zero followers.',
    points: [
        { title: 'A weekly rhythm, not a burst', body: 'Calendars are planned with the doctor, then shot, published and replied to on a fixed weekly cadence — the same discipline behind Dr. K. Shilpi Reddy’s growth since 2023.' },
        { title: 'Guideline-aware, in the doctor’s voice', body: 'Captions and scripts are written in the doctor’s voice and reviewed with medical advertising guidelines in mind. Medical facts come from you; we handle the production and the page.' },
        { title: 'Reported plainly', body: 'A monthly summary of reach, engagement and follower growth with real post-level numbers — whichever direction they move — and next month’s calendar changes based on it.' },
    ],
    clientSlugs: HYDERABAD_SOCIAL_CLIENTS,
    clientsNote: 'Real Hyderabad engagements — Dr. K. Shilpi Reddy, Dr Ankita Chauhan (KIMS Hospital, Kondapur), Dr Aradhya Achuri (IVF and fertility) and Dr Satyanarayana Garre (Jubilee Hills). Open any profile for the work and results.',
    offered: SocialMediaServicesOffered,
    process: SocialMediaProcess,
    visual: {
        src: '/images/city/social-media-marketing-hyderabad.webp',
        alt: 'Diagram of Wizards Next’s social media rhythm for Hyderabad clinics: monthly calendar, reels and posts, comments and DMs, and a plain monthly report.',
        caption: 'How we run social media for Hyderabad clinics — remotely from our Varanasi office.',
        width: 1200,
        height: 720,
    },
    faq: {
        faq_list: [
            { q: 'Do you have an office in Hyderabad?', a: 'No. Our office is in Varanasi. We work with Hyderabad doctors and clinics remotely — video calls, WhatsApp and shared monthly reporting.' },
            { q: 'Which Hyderabad clients do you manage social media for?', a: 'Dr. K. Shilpi Reddy, Dr Ankita Chauhan, Dr Aradhya Achuri and Dr Satyanarayana Garre. Their case studies are linked on this page.' },
            { q: 'What results have you delivered on social media in Hyderabad?', a: 'For Dr. K. Shilpi Reddy, a continuous engagement since 2023 now stands at 419,000+ Instagram followers and 1.28 million YouTube subscribers. For Dr Ankita Chauhan, we started from zero posts and zero followers about two and a half years ago; reels have reached 5, 7 and 8 million views.' },
            { q: 'What does social media management cost?', a: 'Social media management starts from ₹15,000 a month. Ad budgets are separate and usually start around ₹10,000 a month for meaningful reach. Every plan is scoped to your goals, not a fixed package.' },
            { q: 'Is there a long-term contract?', a: 'No lock-ins. We work on rolling monthly engagements.' },
            ...SocialMediaFAQ.faq_list,
        ],
    },
}

export default function Page() {
    return <HydCityServicePage c={config} />
}
