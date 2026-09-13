import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { MembershipSectorAudience, MembershipSectorFAQ, MembershipSectorServices, MembershipSectorStats, MembershipSectorTrust, MembershipSectorHero } from '@/constant/sectors/membership-community'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'
import SectorClientList from '@/components/sectors/sector_client_list'
import SectorInterestForm from '@/components/sectors/sector_interest_form'

export const metadata: Metadata = {
    title: 'Membership & Community Platforms | Wizards Next',
    description: 'Secure, self-service platforms for matrimonial services, alumni associations, professional bodies, and membership-driven organisations — built for privacy and years of stable operation.',
}

export default function MembershipSectorPage() {
    return (
        <main>
            <SectorHero data={MembershipSectorHero} />
            <SectorClientList sectorSlug="membership-community" sectorLabel="Membership & Community" />
            <SectorAudience data={MembershipSectorAudience} />
            <SectorServices data={MembershipSectorServices} />
            <SectorStatsBanner data={MembershipSectorStats} />
            <SectorTrust data={MembershipSectorTrust} />
            <SectorInterestForm sectorLabel="Membership & Community" />
            <ServiceFAQ data={MembershipSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}
