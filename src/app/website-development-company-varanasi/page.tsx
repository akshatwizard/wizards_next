import { Metadata } from 'next'
import CityServicePage, { CityServiceConfig } from '@/components/city/city_service_page'
import { webDevServicesOffered, WebDevServiceProcess, WebDevServiceFAQ } from '@/constant/services_data'

const PATH = '/website-development-company-varanasi'

export const metadata: Metadata = {
    title: 'Website Designing & Development Company in Varanasi',
    description: 'Website development in Varanasi: fast, mobile-first business websites, e-commerce stores and portals. Building Varanasi websites since 2013. Call +91 80721 99651.',
    alternates: { canonical: PATH },
}

const config: CityServiceConfig = {
    path: PATH,
    serviceSlug: 'website-development',
    serviceName: 'Website Development',
    h1: <>Website Development Company in <span className="text-amber-600 font-sora!">Varanasi</span></>,
    intro: 'Website development for Varanasi businesses, institutions and online stores — fast, mobile-first websites, e-commerce with online payments and COD, and secure member portals, built to turn visits into calls, WhatsApp enquiries and orders. Our oldest Varanasi website partnership goes back to 2013.',
    points: [
        { title: 'Building in Varanasi since 2013', body: 'Harish Chandra Post Graduate College’s website has been with our team since 2013 — carrying a 160-year-old Varanasi institution online.' },
        { title: 'E-commerce that actually sells', body: 'For Girdhar Das and Sons we activated online payments, cash on delivery and shipping across India in December 2025; the store now gets orders from across the country every day.' },
        { title: 'Built to be self-managed', body: 'Travel Zone’s site, built in 2019, is still fully self-managed by the business — a platform that scales with you instead of slowing you down.' },
    ],
    offered: webDevServicesOffered,
    process: WebDevServiceProcess,
    faq: {
        faq_list: [
            { q: 'Can we meet your web team in Varanasi?', a: 'Yes. Our office is in Shivpurwa, Varanasi, open Monday to Saturday, 10am to 7pm IST. Call or WhatsApp +91 80721 99651 before visiting.' },
            { q: 'Can you also handle SEO and social media after launch?', a: 'Yes. Wizards Next is a joint venture of a digital marketing practice and a web development practice, so the website, SEO, social media and ads run under one team.' },
            ...WebDevServiceFAQ.faq_list,
        ],
    },
}

export default function Page() {
    return <CityServicePage c={config} />
}
