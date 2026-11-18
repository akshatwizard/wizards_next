import { Metadata } from 'next'
import CityServicePage, { CityServiceConfig } from '@/components/city/city_service_page'
import { EcommerceDevServicesOffered, EcommerceDevProcess, EcommerceDevFAQ } from '@/constant/services_data'

// E-commerce website city page (KR-5, P2). Proof: Girdhar Das and Sons only
// (constant/clients.ts): Laravel store, Razorpay, COD, pan-India shipping
// live since December 2025.
const PATH = '/ecommerce-website-development-varanasi'

export const metadata: Metadata = {
    title: 'E-commerce Website Development in Varanasi | Wizards Next',
    description: 'E-commerce website development in Varanasi: mobile-first online stores with Razorpay, cash on delivery and pan-India shipping, as built for Girdhar Das and Sons.',
    alternates: { canonical: PATH },
}

const config: CityServiceConfig = {
    path: PATH,
    serviceSlug: 'ecommerce-development',
    serviceName: 'E-commerce Website Development',
    h1: <>E-commerce Website Development in <span className="text-amber-600 font-sora!">Varanasi</span></>,
    intro: 'Online stores for Varanasi businesses, built by our own team in Shivpurwa: catalogue and categories, Razorpay payments, cash on delivery, shipping rules and a mobile-first checkout. For Girdhar Das and Sons, a 55-year-old Varanasi kitchenware and home-appliance retailer, we turned a catalogue-only website into a working store in December 2025, and it now takes orders from across India every day.',
    points: [
        { title: 'Payments that do not lose orders', body: 'On the Girdhar Das and Sons store, orders are created only after Razorpay confirms the payment on the server through a webhook, so an order is never lost because a customer closed the browser. Cash on delivery runs alongside online payment.' },
        { title: 'Built for phones and for real shipping', body: 'Real visitor traffic on that store runs 64.5% mobile, so the design and checkout are built and tested mobile-first. Orders range from a ₹100 spice tin to a ₹20,000 appliance, and from 100 g to 45 kg, so shipping rules have to handle both.' },
        { title: 'The store, the ads and the social under one team', body: 'The same team runs the store’s SEO, social media, WhatsApp and Google & Meta ads, so product pages, campaigns and content stay in step. The GD Sons site recorded 19.8K clicks and 2.09M impressions on Google Search over the past year (Search Console).' },
    ],
    clientSlugs: ['gd-sons'],
    clientsNote: 'Girdhar Das and Sons: e-commerce with online payments, cash on delivery and pan-India shipping live since December 2025. Open the profile for the full case study.',
    offered: EcommerceDevServicesOffered,
    process: EcommerceDevProcess,
    faq: {
        faq_list: [
            { q: 'Can you turn our existing catalogue website into an online store?', a: 'Yes. That is what we did for Girdhar Das and Sons: the website had been a browse-only catalogue for years, and in December 2025 we activated online payments, cash on delivery and shipping across India.' },
            { q: 'Do you offer cash on delivery and pan-India shipping?', a: 'Yes. COD and shipping rules are configured with the store, alongside Razorpay for online payments.' },
            { q: 'Do you also market the store after launch?', a: 'Yes. We can run SEO, social media, WhatsApp and Google & Meta ads for the store, as we do for Girdhar Das and Sons. See our performance marketing agency in Varanasi page.' },
            ...EcommerceDevFAQ.faq_list,
        ],
    },
}

export default function Page() {
    return <CityServicePage c={config} />
}
