import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { SEOConsultancyHero, SEOConsultancyAbout, SEOConsultancyServicesOffered, SEOConsultancyProcess, SEOConsultancyIndustries, SEOConsultancyFAQ , SEOConsultancyDeepDive } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'SEO Consultancy | Wizards Next',
    description: 'SEO built for how search actually works in Varanasi and Tier 2-3 Indian markets.',
}

export default function SeoConsultancyPage() {
    return (
        <main>
            <ServiceHero data={SEOConsultancyHero} />
            <ServiceAbout data={SEOConsultancyAbout} />
            <ServiceDeepDive data={SEOConsultancyDeepDive} />
            <ServicesOffered data={SEOConsultancyServicesOffered} />
            <ServiceProcess data={SEOConsultancyProcess} />
            <ServiceIndustries data={SEOConsultancyIndustries} />
            <ServiceFAQ data={SEOConsultancyFAQ} />
            <ServiceCTA />
        </main>
    )
}
