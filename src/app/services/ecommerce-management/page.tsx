import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { EcommerceMgmtHero, EcommerceMgmtAbout, EcommerceMgmtServicesOffered, EcommerceMgmtProcess, EcommerceMgmtIndustries, EcommerceMgmtFAQ } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'E-Commerce Business Management | Wizards Next',
    description: 'Ongoing store operations — inventory, updates, and order-flow management after launch.',
}

export default function EcommerceManagementPage() {
    return (
        <main>
            <ServiceHero data={EcommerceMgmtHero} />
            <ServiceAbout data={EcommerceMgmtAbout} />
            <ServicesOffered data={EcommerceMgmtServicesOffered} />
            <ServiceProcess data={EcommerceMgmtProcess} />
            <ServiceIndustries data={EcommerceMgmtIndustries} />
            <ServiceFAQ data={EcommerceMgmtFAQ} />
            <ServiceCTA />
        </main>
    )
}
