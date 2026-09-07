import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { WhatsAppMarketingHero, WhatsAppMarketingAbout, WhatsAppMarketingServicesOffered, WhatsAppMarketingProcess, WhatsAppMarketingIndustries, WhatsAppMarketingFAQ , WhatsAppMarketingDeepDive } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'WhatsApp Marketing Services | Wizards Next',
    description: 'Catalogs, broadcasts, and automated responses built on WhatsApp Business, done properly.',
}

export default function WhatsappMarketingPage() {
    return (
        <main>
            <ServiceHero data={WhatsAppMarketingHero} />
            <ServiceAbout data={WhatsAppMarketingAbout} />
            <ServiceDeepDive data={WhatsAppMarketingDeepDive} />
            <ServicesOffered data={WhatsAppMarketingServicesOffered} />
            <ServiceProcess data={WhatsAppMarketingProcess} />
            <ServiceIndustries data={WhatsAppMarketingIndustries} />
            <ServiceFAQ data={WhatsAppMarketingFAQ} />
            <ServiceCTA />
        </main>
    )
}
