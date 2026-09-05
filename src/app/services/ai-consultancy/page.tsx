import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { AIConsultancyHero, AIConsultancyAbout, AIConsultancyServicesOffered, AIConsultancyProcess, AIConsultancyIndustries, AIConsultancyFAQ } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'AI Consultancy | Wizards Next',
    description: 'Helping businesses adopt AI-assisted development and planning workflows, demonstrated by our own practice.',
}

export default function AiConsultancyPage() {
    return (
        <main>
            <ServiceHero data={AIConsultancyHero} />
            <ServiceAbout data={AIConsultancyAbout} />
            <ServicesOffered data={AIConsultancyServicesOffered} />
            <ServiceProcess data={AIConsultancyProcess} />
            <ServiceIndustries data={AIConsultancyIndustries} />
            <ServiceFAQ data={AIConsultancyFAQ} />
            <ServiceCTA />
        </main>
    )
}
