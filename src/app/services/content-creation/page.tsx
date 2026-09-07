import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { ContentCreationHero, ContentCreationAbout, ContentCreationServicesOffered, ContentCreationProcess, ContentCreationIndustries, ContentCreationFAQ , ContentCreationDeepDive } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Content Creation Services | Wizards Next',
    description: 'Blog posts, captions, ad copy, and website copy written with a consistent brand voice.',
}

export default function ContentCreationPage() {
    return (
        <main>
            <ServiceHero data={ContentCreationHero} />
            <ServiceAbout data={ContentCreationAbout} />
            <ServiceDeepDive data={ContentCreationDeepDive} />
            <ServicesOffered data={ContentCreationServicesOffered} />
            <ServiceProcess data={ContentCreationProcess} />
            <ServiceIndustries data={ContentCreationIndustries} />
            <ServiceFAQ data={ContentCreationFAQ} />
            <ServiceCTA />
        </main>
    )
}
