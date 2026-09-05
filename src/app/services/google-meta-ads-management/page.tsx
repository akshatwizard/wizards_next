import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { AdsManagementHero, AdsManagementAbout, AdsManagementServicesOffered, AdsManagementProcess, AdsManagementIndustries, AdsManagementFAQ } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Google & Meta Ads Management | Wizards Next',
    description: 'Hands-on paid campaign management across Google Search, Display, Instagram, and Facebook.',
}

export default function GoogleMetaAdsManagementPage() {
    return (
        <main>
            <ServiceHero data={AdsManagementHero} />
            <ServiceAbout data={AdsManagementAbout} />
            <ServicesOffered data={AdsManagementServicesOffered} />
            <ServiceProcess data={AdsManagementProcess} />
            <ServiceIndustries data={AdsManagementIndustries} />
            <ServiceFAQ data={AdsManagementFAQ} />
            <ServiceCTA />
        </main>
    )
}
