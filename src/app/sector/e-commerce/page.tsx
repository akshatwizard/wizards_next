import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { EcommerceSectorHero, EcommerceSectorAudience, EcommerceSectorServices, EcommerceSectorStats, EcommerceSectorTrust, EcommerceSectorFAQ } from '@/constant/sectors/e-commerce'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'
import SectorClientList from '@/components/sectors/sector_client_list'
import SectorInterestForm from '@/components/sectors/sector_interest_form'

export const metadata: Metadata = {
    title: 'Digital Marketing for E-Commerce | Wizards Next',
    description: 'We help online stores get built, found, and actually run — end to end.',
}

export default function ECommerceSectorPage() {
    return (
        <main>
            <SectorHero data={EcommerceSectorHero} />
            <SectorClientList sectorSlug="e-commerce" sectorLabel="E-Commerce" />
            <SectorAudience data={EcommerceSectorAudience} />
            <SectorServices data={EcommerceSectorServices} />
            <SectorStatsBanner data={EcommerceSectorStats} />
            <SectorTrust data={EcommerceSectorTrust} />
            <SectorInterestForm sectorLabel="E-Commerce" />
            <ServiceFAQ data={EcommerceSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}
