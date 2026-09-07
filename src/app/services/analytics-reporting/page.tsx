import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { AnalyticsReportingHero, AnalyticsReportingAbout, AnalyticsReportingServicesOffered, AnalyticsReportingProcess, AnalyticsReportingIndustries, AnalyticsReportingFAQ , AnalyticsReportingDeepDive } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Analytics & Reporting Services | Wizards Next',
    description: 'Clear dashboards and plain-language monthly reporting across every marketing channel.',
}

export default function AnalyticsReportingPage() {
    return (
        <main>
            <ServiceHero data={AnalyticsReportingHero} />
            <ServiceAbout data={AnalyticsReportingAbout} />
            <ServiceDeepDive data={AnalyticsReportingDeepDive} />
            <ServicesOffered data={AnalyticsReportingServicesOffered} />
            <ServiceProcess data={AnalyticsReportingProcess} />
            <ServiceIndustries data={AnalyticsReportingIndustries} />
            <ServiceFAQ data={AnalyticsReportingFAQ} />
            <ServiceCTA />
        </main>
    )
}
