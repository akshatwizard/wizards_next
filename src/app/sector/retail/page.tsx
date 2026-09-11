import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { RetailSectorHero, RetailSectorAudience, RetailSectorServices, RetailSectorStats, RetailSectorTrust, RetailSectorFAQ } from '@/constant/sectors/retail'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'
import SectorClientList from '@/components/sectors/sector_client_list'
import SectorInterestForm from '@/components/sectors/sector_interest_form'

export const metadata: Metadata = {
    title: 'Digital Marketing for Retail | Wizards Next',
    description: 'We help jewellery, furniture, and fashion retailers bring people from the feed to the store.',
}

export default function RetailSectorPage() {
    return (
        <main>
            <SectorHero data={RetailSectorHero} />
            <SectorClientList sectorSlug="retail" sectorLabel="Retail" />
            <SectorAudience data={RetailSectorAudience} />
            <SectorServices data={RetailSectorServices} />
            <SectorStatsBanner data={RetailSectorStats} />
            <SectorTrust data={RetailSectorTrust} />
            <SectorInterestForm sectorLabel="Retail" />
            <ServiceFAQ data={RetailSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}
