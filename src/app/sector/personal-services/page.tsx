import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { PersonalServicesSectorAudience, PersonalServicesSectorFAQ, PersonalServicesSectorServices, PersonalServicesSectorStats, PersonalServicesSectorTrust, PersonalServicesSectorHero } from '@/constant/sectors/personal-services'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'
import SectorClientList from '@/components/sectors/sector_client_list'
import SectorInterestForm from '@/components/sectors/sector_interest_form'

export const metadata: Metadata = {
    title: 'Personal Services & Wellness Marketing | Wizards Next',
    description: 'Marketing built around the practitioner, not a storefront — for yoga teachers, energy healers, salons, and independent wellness practices.',
    alternates: {
        canonical: '/sector/personal-services',
    },
}

export default function PersonalServicesSectorPage() {
    return (
        <main>
            <SectorHero data={PersonalServicesSectorHero} />
            <SectorClientList sectorSlug="personal-services" sectorLabel="Personal Services" />
            <SectorAudience data={PersonalServicesSectorAudience} />
            <SectorServices data={PersonalServicesSectorServices} />
            <SectorStatsBanner data={PersonalServicesSectorStats} />
            <SectorTrust data={PersonalServicesSectorTrust} />
            <SectorInterestForm sectorLabel="Personal Services" />
            <ServiceFAQ data={PersonalServicesSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}
