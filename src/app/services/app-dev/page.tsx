import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { MobileAppHero, MobileAppAbout, MobileAppServicesOffered, MobileAppProcess, MobileAppIndustries, MobileAppFAQ } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Mobile App Development | Wizards Next',
    description: 'iOS and Android apps built for a specific business goal, not just an app-store presence.',
}

export default function AppDevPage() {
    return (
        <main>
            <ServiceHero data={MobileAppHero} />
            <ServiceAbout data={MobileAppAbout} />
            <ServicesOffered data={MobileAppServicesOffered} />
            <ServiceProcess data={MobileAppProcess} />
            <ServiceIndustries data={MobileAppIndustries} />
            <ServiceFAQ data={MobileAppFAQ} />
            <ServiceCTA />
        </main>
    )
}
