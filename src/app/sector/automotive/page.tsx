import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { AutomotiveSectorHero, AutomotiveSectorAudience, AutomotiveSectorServices, AutomotiveSectorStats, AutomotiveSectorTrust, AutomotiveSectorFAQ } from '@/constant/sectors/automotive'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'
import SectorClientList from '@/components/sectors/sector_client_list'
import SectorInterestForm from '@/components/sectors/sector_interest_form'

export const metadata: Metadata = {
    title: 'Digital Marketing for Automotive | Wizards Next',
    description: "We help dealerships and service centres capture buyers while they're still researching online.",
}

export default function AutomotiveSectorPage() {
    return (
        <main>
            <SectorHero data={AutomotiveSectorHero} />
            <SectorClientList sectorSlug="automotive" sectorLabel="Automotive" />
            <SectorAudience data={AutomotiveSectorAudience} />
            <SectorServices data={AutomotiveSectorServices} />
            <SectorStatsBanner data={AutomotiveSectorStats} />
            <SectorTrust data={AutomotiveSectorTrust} />
            <SectorInterestForm sectorLabel="Automotive" />
            <ServiceFAQ data={AutomotiveSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}
