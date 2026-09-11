import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { TravelSectorHero, TravelSectorAudience, TravelSectorServices, TravelSectorStats, TravelSectorTrust, TravelSectorFAQ } from '@/constant/sectors/travel-and-tourism'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'
import SectorClientList from '@/components/sectors/sector_client_list'
import SectorInterestForm from '@/components/sectors/sector_interest_form'

export const metadata: Metadata = {
    title: 'Digital Marketing for Travel & Tourism | Wizards Next',
    description: 'We help hotels, resorts, and travel agencies in Varanasi and across India turn browsing into bookings.',
}

export default function TravelAndTourismSectorPage() {
    return (
        <main>
            <SectorHero data={TravelSectorHero} />
            <SectorClientList sectorSlug="travel-and-tourism" sectorLabel="Travel <ServiceFAQ data= Tourism" />
            <SectorAudience data={TravelSectorAudience} />
            <SectorServices data={TravelSectorServices} />
            <SectorStatsBanner data={TravelSectorStats} />
            <SectorTrust data={TravelSectorTrust} />
            <SectorInterestForm sectorLabel="Travel <ServiceFAQ data= Tourism" />
            <ServiceFAQ data={TravelSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}
