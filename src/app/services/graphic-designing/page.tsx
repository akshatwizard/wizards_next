import { Metadata } from 'next'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { GraphicDesignHero, GraphicDesignAbout, GraphicDesignServicesOffered, GraphicDesignProcess, GraphicDesignIndustries, GraphicDesignFAQ } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'Graphic Design Services | Wizards Next',
    description: 'Social creative, ad visuals, and print collateral designed by the same team running your campaigns.',
}

export default function GraphicDesigningPage() {
    return (
        <main>
            <ServiceHero data={GraphicDesignHero} />
            <ServiceAbout data={GraphicDesignAbout} />
            <ServicesOffered data={GraphicDesignServicesOffered} />
            <ServiceProcess data={GraphicDesignProcess} />
            <ServiceIndustries data={GraphicDesignIndustries} />
            <ServiceFAQ data={GraphicDesignFAQ} />
            <ServiceCTA />
        </main>
    )
}
