import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { HealthcareSectorAudience, HealthcareSectorFAQ, HealthcareSectorServices, HealthcareSectorStats, HealthcareSectorTrust, HealthcareSectorHero } from '@/constant/sectors/healthcare'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'

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
            <SectorTrust data={HealthcareSectorTrust} />
            <ServiceFAQ data={HealthcareSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}