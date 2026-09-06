import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { EmailMarketingHero, EmailMarketingAbout, EmailMarketingServicesOffered, EmailMarketingProcess, EmailMarketingIndustries, EmailMarketingFAQ } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Email Marketing Services | Wizards Next',
    description: 'Newsletters, automated sequences, and lifecycle campaigns on the one marketing channel your business actually owns.',
}

export default function EmailMarketingPage() {
    return (
        <main>
            <ServiceHero data={EmailMarketingHero} />
            <ServiceAbout data={EmailMarketingAbout} />
            <ServicesOffered data={EmailMarketingServicesOffered} />
            <ServiceProcess data={EmailMarketingProcess} />
            <ServiceIndustries data={EmailMarketingIndustries} />
            <ServiceFAQ data={EmailMarketingFAQ} />
            <ServiceCTA />
        </main>
    )
}
