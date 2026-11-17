import { Metadata } from 'next'
import CityServicePage, { CityServiceConfig } from '@/components/city/city_service_page'
import { BrandCreationServicesOffered, BrandCreationProcess, BrandCreationFAQ } from '@/constant/services_data'

// Branding city page (KR-5, P2). Capability copy only: no Varanasi client
// currently lists brand-designing in constant/clients.ts, so no client cards
// and no invented brand results.
const PATH = '/branding-agency-varanasi'

export const metadata: Metadata = {
    title: 'Branding Agency in Varanasi | Logo & Brand Identity',
    description: 'Branding and logo design in Varanasi: logo, colours, type, brand guidelines and stationery, carried into your website and social media. Call +91 80721 99651.',
    alternates: { canonical: PATH },
}

const config: CityServiceConfig = {
    path: PATH,
    serviceSlug: 'brand-designing',
    serviceName: 'Branding & Brand Identity',
    h1: <>Branding Agency in <span className="text-amber-600 font-sora!">Varanasi</span></>,
    intro: 'Brand identity design for Varanasi businesses, done by our own team in Shivpurwa: a logo with icon and wordmark versions, a colour and typography system, brand guidelines and print-ready stationery. Because the same team also builds websites and runs social media, the identity is designed to work on a shop sign, a visiting card, an Instagram reel and a product page alike.',
    points: [
        { title: 'A system, not just a logo file', body: 'You get a primary logo with icon and wordmark variations, a documented palette and type scale, usage rules and stationery templates, so every printer, signboard maker and future designer stays on-brand.' },
        { title: 'Refresh or start fresh', body: 'Many Banaras businesses have decades of recognition in their name. Where that recognition is worth keeping, we evolve the existing mark rather than replace it, and we can build just the system around a logo you already have.' },
        { title: 'Carried into digital by the same team', body: 'Wizards Next builds websites and runs social media for Varanasi businesses, so the new identity goes straight into your website, Instagram, Facebook and WhatsApp catalogue without a hand-off between agencies.' },
    ],
    clientSlugs: [],
    offered: BrandCreationServicesOffered,
    process: BrandCreationProcess,
    faq: {
        faq_list: [
            { q: 'Do you design logos for Varanasi businesses?', a: 'Yes. Logo design is part of every identity project: a primary mark plus icon and wordmark variations, delivered with source files that you own.' },
            { q: 'Are you a graphic design agency too?', a: 'Yes. Alongside brand identity, our team designs social media creatives, brochures and business stationery. See our graphic designing service for the full scope.' },
            { q: 'What does branding cost in Varanasi?', a: 'It depends on scope: a logo refresh is a smaller project than a full identity with guidelines and stationery. We quote after a free exploration call where we understand the business and what already exists.' },
            ...BrandCreationFAQ.faq_list,
        ],
    },
}

export default function Page() {
    return <CityServicePage c={config} />
}
