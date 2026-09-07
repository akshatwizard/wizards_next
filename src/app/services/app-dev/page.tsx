import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { MobileAppHero, MobileAppAbout, MobileAppServicesOffered, MobileAppProcess, MobileAppIndustries, MobileAppFAQ , MobileAppDeepDive } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Mobile App Development | Wizards Next',
    description: 'iOS and Android apps built for a specific business goal, not just an app-store presence.',
}

export default function AppDevPage() {
    return (
        <main>
            <ServiceHero data={MobileAppHero} />
            <ServiceAbout data={MobileAppAbout} />
            <ServiceDeepDive data={MobileAppDeepDive} />
            <ServicesOffered data={MobileAppServicesOffered} />
            <ServiceProcess data={MobileAppProcess} />
            <ServiceIndustries data={MobileAppIndustries} />
            <ServiceFAQ data={MobileAppFAQ} />
            <ServiceCTA />
        </main>
    )
}
