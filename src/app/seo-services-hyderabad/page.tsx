import { Metadata } from 'next'
import HydCityServicePage, { HydCityServiceConfig } from '@/components/city/hyd_city_service_page'
import { SEOConsultancyServicesOffered, SEOConsultancyProcess, SEOConsultancyFAQ } from '@/constant/services_data'
import { HYDERABAD_SEO_CLIENTS } from '@/constant/hyderabad'

const PATH = '/seo-services-hyderabad'

export const metadata: Metadata = {
    title: 'SEO Services in Hyderabad | Clinic SEO & Google Maps | Wizards Next',
    description: 'SEO for Hyderabad clinics and doctor websites: treatment pages, technical SEO and Google Business Profile work so patients find you on Search and Maps. Call +91 80721 99651.',
    alternates: { canonical: PATH },
}

const config: HydCityServiceConfig = {
    path: PATH,
    serviceSlug: 'seo-consultancy',
    serviceName: 'SEO Services',
    h1: <>SEO Services for Clinics in <span className="text-amber-600 font-sora!">Hyderabad</span></>,
    intro: 'SEO for Hyderabad clinics and doctor websites — a technical and content audit, keyword research around what patients in the city actually search, treatment and condition pages with real depth, structured data and Google Business Profile work. We are based in Varanasi and deliver this remotely. For Clinica Derm in Banjara Hills, average Google search position moved from the mid-30s in May 2025 to single digits by March 2026, and has held page one since (Google Search Console).',
    points: [
        { title: 'Pages built around real Hyderabad searches', body: 'Keyword research is done with the clinic, then layered against competitor pages, so new treatment and condition content follows real demand — not guesswork.' },
        { title: 'Search and Maps together', body: 'Technical SEO, schema and content on the website, plus Google Business Profile setup and optimisation where it is part of the engagement, so patients can find you in both Search and Maps.' },
        { title: 'Reported every week', body: 'Clinica Derm, for example, receives a performance report every week and a full audit every month, so they always know where the site stands.' },
    ],
    clientSlugs: HYDERABAD_SEO_CLIENTS,
    clientsNote: 'Clinica Derm (website and full-scope SEO since August 2024) and Dr. K. Shilpi Reddy (website and SEO alongside social, video and ads). Open either profile for the work and the Search Console figures we can show.',
    offered: SEOConsultancyServicesOffered,
    process: SEOConsultancyProcess,
    visual: {
        src: '/images/city/seo-services-hyderabad.webp',
        alt: 'Diagram of Wizards Next’s SEO process for Hyderabad clinics: audit, treatment pages, technical SEO, then Search and Maps, with Clinica Derm’s Search Console result as a real example.',
        caption: 'SEO for Hyderabad clinics, with a real Search Console result from Clinica Derm in Banjara Hills.',
        width: 1200,
        height: 720,
    },
    faq: {
        faq_list: [
            { q: 'Do you have an office in Hyderabad?', a: 'No. Our office is in Varanasi. We work with Hyderabad clinics remotely — video calls, WhatsApp and shared weekly and monthly reporting.' },
            { q: 'What SEO results have you delivered in Hyderabad?', a: 'For Clinica Derm, average Google search position moved from the mid-30s in May 2025 to single digits by March 2026, and has held page one since. Competitive terms such as “dermatologist hyderabad” and “best dermatologist in hyderabad” rank in the 4.5–5.7 range, per their Google Search Console data.' },
            { q: 'Do you handle Google Business Profile for Hyderabad clinics?', a: 'Yes — setup, optimisation and ongoing management can sit alongside the website work as part of local SEO, when it is in scope.' },
            { q: 'Which Hyderabad clients do you do SEO for?', a: 'Clinica Derm in Banjara Hills, since August 2024, and Dr. K. Shilpi Reddy. Their case studies are linked on this page.' },
            { q: 'Is there a long-term contract?', a: 'No lock-ins — rolling monthly engagements.' },
            ...SEOConsultancyFAQ.faq_list,
        ],
    },
}

export default function Page() {
    return <HydCityServicePage c={config} />
}
