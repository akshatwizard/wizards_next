import ServiceHero from '@/components/services/service_hero'
import { WebDevServiceAbout, WebDevServiceFAQ, WebDevServiceHero, WebDevServiceIndustriesList, WebDevServiceProcess, webDevServicesOffered, WebDevServiceTechStack , WebDevDeepDive } from '@/constant/services_data'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceTechStack from '@/components/services/service_techstack'
import ServiceCTA from '@/components/services/service_cta'
import ServiceFAQ from '@/components/services/service_faq'


export default function WebDevelopmentPage() {
    return (
        <main>
            <ServiceHero data={WebDevServiceHero} />
            <ServiceAbout data={WebDevServiceAbout} />
            <ServiceDeepDive data={WebDevDeepDive} />
            <ServicesOffered data={webDevServicesOffered} />
            <ServiceProcess data={WebDevServiceProcess} />
            <ServiceIndustries data={WebDevServiceIndustriesList} />
            <ServiceTechStack data={WebDevServiceTechStack} />
            <ServiceFAQ data={WebDevServiceFAQ} />
            <ServiceCTA />
        </main>
    )
}