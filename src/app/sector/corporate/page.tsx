import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { CorporateSectorHero, CorporateSectorAudience, CorporateSectorServices, CorporateSectorStats, CorporateSectorTrust, CorporateSectorFAQ } from '@/constant/sectors/corporate'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'
import SectorClientList from '@/components/sectors/sector_client_list'
import SectorInterestForm from '@/components/sectors/sector_interest_form'

export const metadata: Metadata = {
    title: 'Digital Marketing for Corporate & B2B | Wizards Next',
    description: 'We help B2B and institutional businesses build credibility that reads right to another business.',
}

export default function CorporateSectorPage() {
    return (
        <main>
            <SectorHero data={CorporateSectorHero} />
            <SectorClientList sectorSlug="corporate" sectorLabel="Corporate" />
            <SectorAudience data={CorporateSectorAudience} />
            <SectorServices data={CorporateSectorServices} />
            <SectorStatsBanner data={CorporateSectorStats} />
            <SectorTrust data={CorporateSectorTrust} />
            <SectorInterestForm sectorLabel="Corporate" />
            <ServiceFAQ data={CorporateSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}
