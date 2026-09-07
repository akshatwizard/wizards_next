import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { PerformanceMarketingHero, PerformanceMarketingAbout, PerformanceMarketingServicesOffered, PerformanceMarketingProcess, PerformanceMarketingIndustries, PerformanceMarketingFAQ , PerformanceMarketingDeepDive } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Performance Marketing Services | Wizards Next',
    description: 'Media planning and budget strategy across paid channels, tied to measurable outcomes.',
}

export default function PerformanceMarketingPage() {
    return (
        <main>
            <ServiceHero data={PerformanceMarketingHero} />
            <ServiceAbout data={PerformanceMarketingAbout} />
            <ServiceDeepDive data={PerformanceMarketingDeepDive} />
            <ServicesOffered data={PerformanceMarketingServicesOffered} />
            <ServiceProcess data={PerformanceMarketingProcess} />
            <ServiceIndustries data={PerformanceMarketingIndustries} />
            <ServiceFAQ data={PerformanceMarketingFAQ} />
            <ServiceCTA />
        </main>
    )
}
