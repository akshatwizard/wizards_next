import { Metadata } from 'next'
import CityServicePage, { CityServiceConfig } from '@/components/city/city_service_page'
import { AdsManagementServicesOffered, AdsManagementProcess, AdsManagementFAQ } from '@/constant/services_data'

// Google Ads city page (KR-5). Capability copy only: no invented ad results.
// The one Varanasi client whose engagement includes Google & Meta ads is
// Girdhar Das and Sons (constant/clients.ts services list).
const PATH = '/google-ads-agency-varanasi'

export const metadata: Metadata = {
    title: 'Google Ads Agency in Varanasi | Search & Shopping Ads | Wizards Next',
    description: 'Google Ads management in Varanasi: setup, keyword research, Search, Display and Shopping campaigns, weekly optimisation and monthly reports. +91 80721 99651.',
    alternates: { canonical: PATH },
}

const config: CityServiceConfig = {
    path: PATH,
    serviceSlug: 'google-meta-ads-management',
    serviceName: 'Google Ads Management',
    h1: <>Google Ads Agency in <span className="text-amber-600 font-sora!">Varanasi</span></>,
    intro: 'Google Ads management for Varanasi businesses, run by our own team from Shivpurwa: account setup under your business, keyword research around what Banaras customers actually search, Search, Display and Shopping campaigns, weekly optimisation and a plain monthly report on spend and enquiries.',
    points: [
        { title: 'Your account, your data', body: 'The Google Ads account is set up under your business and you keep ownership; we manage access. Conversion tracking on your website or store is set up first, so every rupee is measured against calls, WhatsApp chats, enquiries or orders.' },
        { title: 'Local searches, not broad guesses', body: 'Campaigns are built around high-intent local searches such as a product or service plus “Varanasi” or “near me”, with location targeting and negative keywords so the budget goes to people who can actually visit or order.' },
        { title: 'Search, Shopping and Meta under one team', body: 'The same team runs Google Search, Display and Shopping alongside Meta ads, the website and the creative, so ads, landing pages and offers stay consistent. For Girdhar Das and Sons, Google & Meta ads management sits inside one engagement with their e-commerce website, social media and WhatsApp.' },
    ],
    clientsNote: 'Girdhar Das and Sons: Google & Meta ads management is part of a wider engagement with their website, social media and WhatsApp marketing. Open the profile to see the full case study.',
    offered: AdsManagementServicesOffered,
    process: AdsManagementProcess,
    faq: {
        faq_list: [
            { q: 'What Google Ads budget do Varanasi businesses usually start with?', a: 'Ad budgets are separate from our fee and usually start around ₹10,000 a month for meaningful reach. The right amount depends on your goal and is agreed once tracking and targets are clear.' },
            { q: 'What is the difference between Google Ads and performance marketing?', a: 'Google Ads is one channel. Performance marketing is the wider plan across Google, Meta and other paid channels. See our performance marketing agency in Varanasi page for the full-funnel service.' },
            { q: 'Do you run Shopping ads for e-commerce stores?', a: 'Yes. Shopping campaigns need a product feed from your store and Merchant Center set up correctly; we handle both alongside Search campaigns.' },
            ...AdsManagementFAQ.faq_list,
        ],
    },
}

export default function Page() {
    return <CityServicePage c={config} />
}
