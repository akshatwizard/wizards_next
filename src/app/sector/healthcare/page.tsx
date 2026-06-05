import { Metadata } from 'next'
import ServiceTestimonial from '@/components/services/service_testimonial'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { HealthcareSectorHero, HealthcareSectorAudience, HealthcareSectorCaseStudy, HealthcareSectorClients, HealthcareSectorFAQ, HealthcareSectorMidCTA, HealthcareSectorProjects, HealthcareSectorServices, HealthcareSectorStats, HealthcareSectorTestimonials, HealthcareSectorTrust } from '@/constant/sectors/healthcare'
import SectorHero from '@/components/sectors/sector_hero'
import SectorAudience from '@/components/sectors/sector_audience'
import SectorServices from '@/components/sectors/sector_services'
import SectorStatsBanner from '@/components/sectors/sector_stats_banner'

export const metadata: Metadata = {
    title: 'Digital Marketing for Healthcare | Wizards Next',
    description: 'We help hospitals, clinics, and doctors in Varanasi and across India grow their patient base with websites, SEO, social media, and paid ads.',
}

export default function HealthcareSectorPage() {
    return (
        <main>
            <SectorHero data={HealthcareSectorHero} />
            <SectorAudience data={HealthcareSectorAudience} />
            <SectorServices data={HealthcareSectorServices} />
            <SectorStatsBanner data={HealthcareSectorStats} />

            {/* 5. Case studies */}
            <SectorCaseStudy data={HealthcareSectorCaseStudy} />

            {/* 6. Project showcase */}
            <SectorProjects data={HealthcareSectorProjects} />

            {/* 7. Mid-page CTA banner */}
            <SectorMidCTA data={HealthcareSectorMidCTA} />

            {/* 8. Client list */}
            <SectorClientList data={HealthcareSectorClients} />

            {/* 9. Why Wizards / trust section */}
            <SectorTrust data={HealthcareSectorTrust} />

            {/* 10. Testimonials — reused from services */}
            <ServiceTestimonial data={HealthcareSectorTestimonials} />

            {/* 11. FAQ — reused from services */}
            <ServiceFAQ data={HealthcareSectorFAQ} />

            {/* 12. Bottom CTA — shared across all pages */}
            <ServiceCTA />
        </main>
    )
}