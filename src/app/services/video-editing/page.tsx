import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { VideoEditingHero, VideoEditingAbout, VideoEditingServicesOffered, VideoEditingProcess, VideoEditingIndustries, VideoEditingFAQ } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Video Editing Services | Wizards Next',
    description: "Reels, YouTube videos, and ad creative edited for the platform they're published on.",
}

export default function VideoEditingPage() {
    return (
        <main>
            <ServiceHero data={VideoEditingHero} />
            <ServiceAbout data={VideoEditingAbout} />
            <ServicesOffered data={VideoEditingServicesOffered} />
            <ServiceProcess data={VideoEditingProcess} />
            <ServiceIndustries data={VideoEditingIndustries} />
            <ServiceFAQ data={VideoEditingFAQ} />
            <ServiceCTA />
        </main>
    )
}
