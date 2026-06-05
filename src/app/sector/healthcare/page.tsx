import { Metadata } from 'next'
import ServiceTestimonial from '@/components/services/service_testimonial'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { HealthcareSectorHero, HealthcareSectorAudience, HealthcareSectorCaseStudy, HealthcareSectorClients, HealthcareSectorFAQ, HealthcareSectorMidCTA, HealthcareSectorProjects, HealthcareSectorServices, HealthcareSectorStats, HealthcareSectorTestimonials, HealthcareSectorTrust } from '@/constant/sectors/healthcare'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorCaseStudy from '@/components/sectors/sector_case_studyes'

export const metadata: Metadata = {
    title: 'Digital Marketing for Healthcare | Wizards Next',
    description: 'We help hospitals, clinics, and doctors in Varanasi and across India grow their patient base with websites, SEO, social media, and paid ads.',
}

export default function HealthcareSectorPage() {
    return (
        <main>
            <SectorHero data={HealthcareSectorHero} />
            <SectorAudience data={HealthcareSectorAudience} />
            <SectorServices data={HealthcareSectorServices} />
            <SectorStatsBanner data={HealthcareSectorStats} />
            <SectorCaseStudy data={HealthcareSectorCaseStudy} />
            <SectorProjects data={HealthcareSectorProjects} />
            <SectorMidCTA data={HealthcareSectorMidCTA} />
            <SectorClientList data={HealthcareSectorClients} />
            <SectorTrust data={HealthcareSectorTrust} />
            <ServiceTestimonial data={HealthcareSectorTestimonials} />
            <ServiceFAQ data={HealthcareSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}