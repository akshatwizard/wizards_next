import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { InfluencerMarketingHero, InfluencerMarketingAbout, InfluencerMarketingServicesOffered, InfluencerMarketingProcess, InfluencerMarketingIndustries, InfluencerMarketingFAQ , InfluencerMarketingDeepDive } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Influencer Marketing Services | Wizards Next',
    description: 'Matching brands with relevant, vetted creators and managing the campaign end to end.',
}

export default function InfluencerMarketingPage() {
    return (
        <main>
            <ServiceHero data={InfluencerMarketingHero} />
            <ServiceAbout data={InfluencerMarketingAbout} />
            <ServiceDeepDive data={InfluencerMarketingDeepDive} />
            <ServicesOffered data={InfluencerMarketingServicesOffered} />
            <ServiceProcess data={InfluencerMarketingProcess} />
            <ServiceIndustries data={InfluencerMarketingIndustries} />
            <ServiceFAQ data={InfluencerMarketingFAQ} />
            <ServiceCTA />
        </main>
    )
}
