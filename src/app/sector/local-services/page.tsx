import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { LocalServicesSectorHero, LocalServicesSectorAudience, LocalServicesSectorServices, LocalServicesSectorStats, LocalServicesSectorTrust, LocalServicesSectorFAQ } from '@/constant/sectors/local-services'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'
import SectorClientList from '@/components/sectors/sector_client_list'
import SectorInterestForm from '@/components/sectors/sector_interest_form'

export const metadata: Metadata = {
    title: 'Digital Marketing for Local Services | Wizards Next',
    description: "We help home services, salons, gyms, and local professionals show up exactly when someone's searching.",
}

export default function LocalServicesSectorPage() {
    return (
        <main>
            <SectorHero data={LocalServicesSectorHero} />
            <SectorAudience data={LocalServicesSectorAudience} />
            <SectorServices data={LocalServicesSectorServices} />
            <SectorStatsBanner data={LocalServicesSectorStats} />
            <SectorTrust data={LocalServicesSectorTrust} />
            <SectorClientList sectorSlug="local-services" sectorLabel="Local Services" />
            <SectorInterestForm sectorLabel="Local Services" />
            <ServiceFAQ data={LocalServicesSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}
