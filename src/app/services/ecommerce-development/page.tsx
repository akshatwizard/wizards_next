import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { EcommerceDevHero, EcommerceDevAbout, EcommerceDevServicesOffered, EcommerceDevProcess, EcommerceDevIndustries, EcommerceDevFAQ } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'E-Commerce Website Development | Wizards Next',
    description: 'Online stores built to sell — catalog structure, payment integration, and working checkout flows.',
}

export default function EcommerceDevelopmentPage() {
    return (
        <main>
            <ServiceHero data={EcommerceDevHero} />
            <ServiceAbout data={EcommerceDevAbout} />
            <ServicesOffered data={EcommerceDevServicesOffered} />
            <ServiceProcess data={EcommerceDevProcess} />
            <ServiceIndustries data={EcommerceDevIndustries} />
            <ServiceFAQ data={EcommerceDevFAQ} />
            <ServiceCTA />
        </main>
    )
}
