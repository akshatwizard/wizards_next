import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { SocialMediaHero, SocialMediaAbout, SocialMediaServicesOffered, SocialMediaProcess, SocialMediaIndustries, SocialMediaFAQ } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Social Media Planning & Management | Wizards Next',
    description: 'Content pillars, scheduling, and real community management across Instagram, Facebook, and LinkedIn.',
}

export default function SocialMediaPage() {
    return (
        <main>
            <ServiceHero data={SocialMediaHero} />
            <ServiceAbout data={SocialMediaAbout} />
            <ServicesOffered data={SocialMediaServicesOffered} />
            <ServiceProcess data={SocialMediaProcess} />
            <ServiceIndustries data={SocialMediaIndustries} />
            <ServiceFAQ data={SocialMediaFAQ} />
            <ServiceCTA />
        </main>
    )
}
