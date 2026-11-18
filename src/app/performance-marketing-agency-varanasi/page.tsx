import { Metadata } from 'next'
import CityServicePage, { CityServiceConfig } from '@/components/city/city_service_page'
import { PerformanceMarketingServicesOffered, PerformanceMarketingProcess, PerformanceMarketingFAQ } from '@/constant/services_data'

const PATH = '/performance-marketing-agency-varanasi'

export const metadata: Metadata = {
    title: 'Performance Marketing & Meta Ads Agency in Varanasi',
    description: 'Performance marketing in Varanasi: budget planning, Google and Meta ads optimised weekly, and honest cost-per-result reporting. Call +91 80721 99651.',
    alternates: { canonical: PATH },
}

const config: CityServiceConfig = {
    path: PATH,
    serviceSlug: 'performance-marketing',
    serviceName: 'Performance Marketing',
    h1: <>Performance Marketing Agency in <span className="text-amber-600 font-sora!">Varanasi</span></>,
    intro: 'Performance marketing for Varanasi businesses — deciding which paid channels deserve your budget, building Google and Meta campaigns with our hands-on ads team, shifting spend toward what converts every week, and reporting cost per result without vanity metrics.',
    points: [
        { title: 'Strategy and execution, one team', body: 'Budget and channel decisions sit with the same team that builds and optimises your Google and Meta campaigns — and produces the creative they run.' },
        { title: 'Funnel-first planning', body: 'Paid media is planned against where it actually fits in your customer’s journey — enquiries, WhatsApp chats, store visits or online orders — not bought as a generic tactic.' },
        { title: 'Honest reporting', body: 'Weekly optimisation notes and a full monthly report on spend and cost per result, tracked through conversion tracking on your site or store.' },
    ],
    offered: PerformanceMarketingServicesOffered,
    process: PerformanceMarketingProcess,
    faq: {
        faq_list: [
            { q: 'What ad budget do Varanasi businesses usually start with?', a: 'Ad budgets are separate from our fee and usually start around ₹10,000 a month for meaningful reach; the right amount depends on your goal and is agreed once your funnel and targets are clear.' },
            { q: 'Do you run the Google and Meta ads yourselves?', a: 'Yes. Campaign setup and weekly optimisation on Google Search and Meta are handled by our own team — see Google & Meta Ads Management.' },
            ...PerformanceMarketingFAQ.faq_list,
        ],
    },
}

export default function Page() {
    return <CityServicePage c={config} />
}
