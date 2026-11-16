import { Metadata } from 'next'
import Link from 'next/link'
import HydCityServicePage, { HydCityServiceConfig } from '@/components/city/hyd_city_service_page'
import { SocialMediaServicesOffered, SocialMediaProcess, SocialMediaFAQ } from '@/constant/services_data'
import { HYDERABAD_SOCIAL_CLIENTS } from '@/constant/hyderabad'

const PATH = '/social-media-marketing-agency-hyderabad'

export const metadata: Metadata = {
    title: 'Social Media Marketing Agency in Hyderabad for Doctors & Clinics',
    description: 'Social media marketing for Hyderabad doctors and clinics: content calendars, patient-education reels, posting and DM replies. Call +91 80721 99651.',
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
    extra: {
        heading: 'Instagram and YouTube marketing for doctors in Hyderabad',
        paras: [
            'Most of our Hyderabad doctors grow on Instagram and YouTube together: short patient-education reels for reach, longer YouTube videos for depth. Dr. K. Shilpi Reddy’s channels now stand at 419,000+ Instagram followers and 1.28 million YouTube subscribers. For Dr Ankita Chauhan we run YouTube and a podcast alongside Instagram, where her reels have reached 5, 7 and 8 million views.',
            'We manage Facebook, Instagram and YouTube for Dr Sandesh Nanisetty (consultant neurologist, CARE Hospitals, Banjara Hills), Dr Sonica Miyyapuram (prosthodontist) and Dr Pranathi Ravipathi (hair transplant and facial aesthetic surgery), and Instagram for Dr Aradhya Achuri, Dr Satyanarayana Garre and Dr Shaivalini Kamarapu. The work is for each doctor’s own profile; the hospitals they consult at are not our clients.',
            <>For a doctor’s own name as a brand, see <Link href="/services/personal-branding-for-doctors" className="underline underline-offset-2 hover:text-amber-500">personal branding for doctors</Link>. For the full healthcare picture, see <Link href="/healthcare-digital-marketing-hyderabad" className="underline underline-offset-2 hover:text-amber-500">healthcare digital marketing in Hyderabad</Link>.</>,
        ],
    },
    faq: {
        faq_list: [
            { q: 'Do you manage YouTube channels for doctors in Hyderabad?', a: 'Yes. We manage YouTube alongside Instagram and Facebook for Dr. K. Shilpi Reddy (1.28 million subscribers), Dr Ankita Chauhan, Dr Sandesh Nanisetty, Dr Sonica Miyyapuram and Dr Pranathi Ravipathi. The exact scope (shooting support, editing, publishing, replies) is agreed with each doctor.' },
            { q: 'Are you an Instagram marketing agency for Hyderabad doctors?', a: 'Instagram is the main channel for most of our Hyderabad doctor clients: Dr. K. Shilpi Reddy (419,000+ followers), Dr Ankita Chauhan, Dr Aradhya Achuri, Dr Satyanarayana Garre, Dr Shaivalini Kamarapu, Dr Sandesh Nanisetty, Dr Sonica Miyyapuram and Dr Pranathi Ravipathi. We work remotely from Varanasi.' },
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
