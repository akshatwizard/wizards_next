import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { FmcgSectorHero, FmcgSectorAudience, FmcgSectorServices, FmcgSectorStats, FmcgSectorTrust, FmcgSectorFAQ } from '@/constant/sectors/fmcg'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'

export const metadata: Metadata = {
    title: 'Digital Marketing for FMCG Brands | Wizards Next',
    description: 'We help FMCG and consumer goods brands build consistent identity, D2C e-commerce, and scalable performance campaigns.',
}

export default function FmcgSectorPage() {
    return (
        <main>
            <SectorHero data={FmcgSectorHero} />
            <SectorAudience data={FmcgSectorAudience} />
            <SectorServices data={FmcgSectorServices} />
            <SectorStatsBanner data={FmcgSectorStats} />
            <SectorTrust data={FmcgSectorTrust} />
            <ServiceFAQ data={FmcgSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}
