import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { CorporateProfileHero, CorporateProfileAbout, CorporateProfileServicesOffered, CorporateProfileProcess, CorporateProfileIndustries, CorporateProfileFAQ , CorporateProfileDeepDive } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Corporate Profile Creation | Wizards Next',
    description: 'Professional company profile videos and documents for tenders, investor meetings, and institutional pitches.',
}

export default function CorporateProfileCreationPage() {
    return (
        <main>
            <ServiceHero data={CorporateProfileHero} />
            <ServiceAbout data={CorporateProfileAbout} />
            <ServiceDeepDive data={CorporateProfileDeepDive} />
            <ServicesOffered data={CorporateProfileServicesOffered} />
            <ServiceProcess data={CorporateProfileProcess} />
            <ServiceIndustries data={CorporateProfileIndustries} />
            <ServiceFAQ data={CorporateProfileFAQ} />
            <ServiceCTA />
        </main>
    )
}
