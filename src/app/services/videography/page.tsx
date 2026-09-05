import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { VideographyHero, VideographyAbout, VideographyServicesOffered, VideographyProcess, VideographyIndustries, VideographyFAQ } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Videography Services | Wizards Next',
    description: "Professional filming, on location or in studio, planned around the platform it's built for.",
}

export default function VideographyPage() {
    return (
        <main>
            <ServiceHero data={VideographyHero} />
            <ServiceAbout data={VideographyAbout} />
            <ServicesOffered data={VideographyServicesOffered} />
            <ServiceProcess data={VideographyProcess} />
            <ServiceIndustries data={VideographyIndustries} />
            <ServiceFAQ data={VideographyFAQ} />
            <ServiceCTA />
        </main>
    )
}
