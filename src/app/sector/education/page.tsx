import { Metadata } from 'next'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { EducationSectorHero, EducationSectorAudience, EducationSectorServices, EducationSectorStats, EducationSectorTrust, EducationSectorFAQ } from '@/constant/sectors/education'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'
import SectorTrust from '@/components/sectors/sector_why_choose_us'

export const metadata: Metadata = {
    title: 'Digital Marketing for Education | Wizards Next',
    description: 'We help schools, coaching institutes, and education brands reach parents and students at the right moment.',
}

export default function EducationSectorPage() {
    return (
        <main>
            <SectorHero data={EducationSectorHero} />
            <SectorAudience data={EducationSectorAudience} />
            <SectorServices data={EducationSectorServices} />
            <SectorStatsBanner data={EducationSectorStats} />
            <SectorTrust data={EducationSectorTrust} />
            <ServiceFAQ data={EducationSectorFAQ} />
            <ServiceCTA />
        </main>
    )
}
