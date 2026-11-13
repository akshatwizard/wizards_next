import { Metadata } from 'next'
import CityServicePage, { CityServiceConfig } from '@/components/city/city_service_page'
import { SEOConsultancyServicesOffered, SEOConsultancyProcess, SEOConsultancyFAQ } from '@/constant/services_data'

const PATH = '/seo-services-varanasi'

export const metadata: Metadata = {
    title: 'SEO Services in Varanasi | Local SEO & Google Maps | Wizards Next',
    description: 'SEO services in Varanasi: technical SEO, local keyword research, content and Google Business Profile so customers find you on Google Search and Maps. Call +91 80721 99651.',
    alternates: { canonical: PATH },
}

const config: CityServiceConfig = {
    path: PATH,
    serviceSlug: 'seo-consultancy',
    serviceName: 'SEO Services',
    h1: <>SEO Services in <span className="text-amber-600 font-sora!">Varanasi</span></>,
    intro: 'SEO and local SEO for Varanasi businesses — a technical and content audit, two-level keyword research, pages with real depth, structured data and Google Business Profile work, so people in Varanasi find you on Google Search and Maps. Reported on rankings, traffic and the enquiries that come from search.',
    points: [
        { title: 'Why Varanasi data undercounts', body: 'Keyword tools routinely show near-zero volume for real, common searches at the city level. We pair national-level benchmarks with local-intent mapping instead of reading that as “no demand”.' },
        { title: 'Depth is the differentiator', body: 'Competitor sites across Varanasi tend to be thin, single-page efforts. Genuinely useful pages, written with your input, are what earn rankings here.' },
        { title: 'Search and Maps together', body: 'Technical SEO, schema and content on your website, plus Google Business Profile setup, optimisation and review strategy for the local map results.' },
    ],
    clientSlugs: ['gd-sons'],
    clientsNote: 'Girdhar Das and Sons’ website runs our standing on-page SEO checklist on every product and category page — 19.8K clicks and 2.09M impressions on Google Search over the past year (Search Console).',
    offered: SEOConsultancyServicesOffered,
    process: SEOConsultancyProcess,
    faq: {
        faq_list: [
            { q: 'Do you handle Google Business Profile for Varanasi businesses?', a: 'Yes — setup, optimisation and ongoing management, along with local citations and a review strategy, as part of local SEO.' },
            { q: 'Can we meet in person?', a: 'Yes. Our office is in Shivpurwa, Varanasi, open Monday to Saturday, 10am to 7pm IST. Call or WhatsApp +91 80721 99651 before visiting.' },
            ...SEOConsultancyFAQ.faq_list,
        ],
    },
}

export default function Page() {
    return <CityServicePage c={config} />
}
