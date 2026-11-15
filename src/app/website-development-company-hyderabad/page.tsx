import { Metadata } from 'next'
import Link from 'next/link'
import HydCityServicePage, { HydCityServiceConfig } from '@/components/city/hyd_city_service_page'
import { webDevServicesOffered, WebDevServiceProcess, WebDevServiceFAQ } from '@/constant/services_data'
import { HYDERABAD_WEB_CLIENTS } from '@/constant/hyderabad'

const PATH = '/website-development-company-hyderabad'

export const metadata: Metadata = {
    title: 'Website Development Company in Hyderabad for Clinics & Doctors',
    description: 'Website development for Hyderabad clinics and doctors: fast, mobile-first sites and appointment booking. Built remotely from Varanasi. Call +91 80721 99651.',
    alternates: { canonical: PATH },
}

const config: HydCityServiceConfig = {
    path: PATH,
    serviceSlug: 'website-development',
    serviceName: 'Website Development',
    h1: <>Website Development for Clinics in <span className="text-amber-600 font-sora!">Hyderabad</span></>,
    intro: 'Website development for Hyderabad clinics and doctors — fast, mobile-first clinic sites, doctor websites with appointment booking, and the SEO to help patients find them. We are based in Varanasi and build and look after these sites remotely. Current Hyderabad websites include Clinica Derm (WordPress and SEO since August 2024), Dr Ankita Chauhan’s site with booking that pays into her own payment gateway, and Dr. K. Shilpi Reddy’s website alongside her social, video and ads work.',
    points: [
        { title: 'Built to take bookings, not just look good', body: 'Dr Ankita Chauhan’s website includes an appointment booking system paid into her own payment gateway — so enquiries become consultations on the practice’s terms.' },
        { title: 'The site and the SEO stay together', body: 'For Clinica Derm we have managed the WordPress site and full-scope SEO as one engagement since August 2024, which is what moved average search position from the mid-30s to single digits.' },
        { title: 'One team after launch', body: 'Wizards Next is a joint venture of a digital marketing practice and a web development practice, so the website, SEO, social media and ads can run under one team once the site is live.' },
    ],
    clientSlugs: HYDERABAD_WEB_CLIENTS,
    clientsNote: 'Clinica Derm, Dr. K. Shilpi Reddy and Dr Ankita Chauhan. Open any profile to see the website work and, where we have it, the search results that followed.',
    offered: webDevServicesOffered,
    process: WebDevServiceProcess,
    visual: {
        src: '/images/city/website-development-hyderabad.webp',
        alt: 'Diagram of Wizards Next websites for Hyderabad practices: Clinica Derm’s clinic site, Dr Ankita Chauhan’s booking site, and Dr. K. Shilpi Reddy’s site with SEO.',
        caption: 'Three Hyderabad websites we built and still look after — a clinic site, a doctor site with booking, and a site paired with SEO.',
        width: 1200,
        height: 720,
    },
    extra: {
        heading: 'Clinic website design in Hyderabad',
        paras: [
            'A clinic website has three jobs: show who the doctor is, explain treatments in plain language, and make it easy to call, WhatsApp or book. Dr. K. Shilpi Reddy’s site puts Make an Appointment and WhatsApp buttons up front. Dr Ankita Chauhan’s site takes bookings that pay straight into her own payment gateway. Clinica Derm’s WordPress site carries the treatment and blog library behind its search growth.',
            'Patients mostly search on their phones: on Clinica Derm, 5,407 of 7,083 Google clicks came from mobile. So clinic sites are designed, tested and speed-checked mobile-first.',
            <>Related: <Link href="/seo-services-hyderabad" className="underline underline-offset-2 hover:text-amber-500">SEO for doctors in Hyderabad</Link> · <Link href="/healthcare-digital-marketing-hyderabad" className="underline underline-offset-2 hover:text-amber-500">healthcare digital marketing in Hyderabad</Link>.</>,
        ],
    },
    faq: {
        faq_list: [
            { q: 'Do you build clinic websites with online appointment booking?', a: 'Yes. Dr Ankita Chauhan’s website has a booking system built by Wizards that pays straight into her own payment gateway. Booking, click-to-call and WhatsApp are scoped for each clinic.' },
            { q: 'Do you have an office in Hyderabad we can visit?', a: 'No. Our office is in Varanasi. We plan, build and hand over Hyderabad websites over video calls, WhatsApp and shared reviews. You are welcome to visit us in Varanasi; call or WhatsApp +91 80721 99651 first.' },
            { q: 'Which Hyderabad websites have you built?', a: 'Clinica Derm’s WordPress website (with SEO since August 2024), Dr Ankita Chauhan’s website with an appointment booking system, and Dr. K. Shilpi Reddy’s website. Their case studies are linked on this page.' },
            { q: 'Can you also handle SEO and social media after launch?', a: 'Yes. Wizards Next is a joint venture of a digital marketing practice and a web development practice, so the website, SEO, social media and ads can run under one team.' },
            { q: 'Is there a long-term contract?', a: 'No lock-ins — rolling monthly engagements for ongoing care. Website builds are scoped as a project.' },
            ...WebDevServiceFAQ.faq_list,
        ],
    },
}

export default function Page() {
    return <HydCityServicePage c={config} />
}
