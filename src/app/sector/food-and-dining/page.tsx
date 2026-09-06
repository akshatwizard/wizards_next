import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { FoodDiningSectorHero, FoodDiningSectorAudience, FoodDiningSectorServices, FoodDiningSectorStats, FoodDiningSectorTrust, FoodDiningSectorFAQ } from '@/constant/sectors/food-and-dining'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'
import SectorClientList from '@/components/sectors/sector_client_list'
import SectorInterestForm from '@/components/sectors/sector_interest_form'

export const metadata: Metadata = {
    title: 'Digital Marketing for Restaurants & Cafes | Wizards Next',
    description: 'We help restaurants and cafes build the visual content and posting frequency that drives a visit.',
}

export default function FoodAndDiningSectorPage() {
    return (
        <main>
            <SectorHero data={FoodDiningSectorHero} />
            <SectorAudience data={FoodDiningSectorAudience} />
            <SectorServices data={FoodDiningSectorServices} />
            <SectorStatsBanner data={FoodDiningSectorStats} />
            <SectorTrust data={FoodDiningSectorTrust} />
            <SectorClientList sectorSlug="food-and-dining" sectorLabel="Food <ServiceFAQ data= Dining" />
            <SectorInterestForm sectorLabel="Food <ServiceFAQ data= Dining" />
            <ServiceFAQ data={FoodDiningSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}
