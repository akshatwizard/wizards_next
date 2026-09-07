import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { BrandCreationHero, BrandCreationAbout, BrandCreationServicesOffered, BrandCreationProcess, BrandCreationIndustries, BrandCreationFAQ , BrandCreationDeepDive } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Brand Creation & Identity Design | Wizards Next',
    description: 'Logo, colour, typography, and a documented brand system built to stay consistent everywhere your business shows up.',
}

export default function BrandDesigningPage() {
    return (
        <main>
            <ServiceHero data={BrandCreationHero} />
            <ServiceAbout data={BrandCreationAbout} />
            <ServiceDeepDive data={BrandCreationDeepDive} />
            <ServicesOffered data={BrandCreationServicesOffered} />
            <ServiceProcess data={BrandCreationProcess} />
            <ServiceIndustries data={BrandCreationIndustries} />
            <ServiceFAQ data={BrandCreationFAQ} />
            <ServiceCTA />
        </main>
    )
}
