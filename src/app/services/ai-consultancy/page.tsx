import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { AIConsultancyHero, AIConsultancyAbout, AIConsultancyServicesOffered, AIConsultancyProcess, AIConsultancyIndustries, AIConsultancyFAQ , AIConsultancyDeepDive } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'AI Consultancy Services | Wizards Next',
    description: 'Helping businesses adopt AI-assisted development and planning workflows, demonstrated by our own practice.',
}

export default function AiConsultancyPage() {
    return (
        <main>
            <ServiceHero data={AIConsultancyHero} />
            <ServiceAbout data={AIConsultancyAbout} />
            <ServiceDeepDive data={AIConsultancyDeepDive} />
            <ServicesOffered data={AIConsultancyServicesOffered} />
            <ServiceProcess data={AIConsultancyProcess} />
            <ServiceIndustries data={AIConsultancyIndustries} />
            <ServiceFAQ data={AIConsultancyFAQ} />
            <ServiceCTA />
        </main>
    )
}
