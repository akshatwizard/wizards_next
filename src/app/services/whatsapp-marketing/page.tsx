import { Metadata } from 'next'
import Link from 'next/link'
import { Section, Wrapper } from '@/components/ui/sections'
import ServiceHero from '@/components/services/service_hero'
import ServiceAbout from '@/components/services/service_about'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceClientList from '@/components/services/service_clients'
import ServiceCTA from '@/components/services/service_cta'
import { WhatsAppMarketingHero, WhatsAppMarketingAbout, WhatsAppMarketingServicesOffered, WhatsAppMarketingProcess, WhatsAppMarketingIndustries, WhatsAppMarketingFAQ , WhatsAppMarketingDeepDive } from '@/constant/services_data'

export const metadata: Metadata = {
    title: 'WhatsApp Marketing Services | Wizards Next',
    description: 'Catalogs, broadcasts, and automated responses built on WhatsApp Business, done properly.',
    alternates: {
        canonical: '/services/whatsapp-marketing',
    },
}

export default function WhatsappMarketingPage() {
    return (
        <main>
            <ServiceHero data={WhatsAppMarketingHero} />
            <ServiceAbout data={WhatsAppMarketingAbout} />
            <ServiceDeepDive data={WhatsAppMarketingDeepDive} />
            <ServicesOffered data={WhatsAppMarketingServicesOffered} />
            <ServiceProcess data={WhatsAppMarketingProcess} />
            <ServiceIndustries data={WhatsAppMarketingIndustries} />
            <ServiceClientList serviceSlug="whatsapp-marketing" />
            <Section tone="raised">
                <Wrapper className="lg:py-12 md:py-10 py-8 gap-4!">
                    <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100">WhatsApp marketing for clinics in Hyderabad and stores in Varanasi</h2>
                    <p className="text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                        In Hyderabad, we manage Dr Shaivalini Kamarapu’s WhatsApp presence alongside her Instagram, so patient enquiries from social media have somewhere to go. On Dr. K. Shilpi Reddy’s website, a WhatsApp button sits next to Make an Appointment. We work with Hyderabad clinics remotely from our Varanasi office.
                    </p>
                    <p className="text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                        In Varanasi, WhatsApp marketing is part of our engagements with <Link href="/our-works/gd-sons" className="underline underline-offset-2 hover:text-amber-500">Girdhar Das and Sons</Link> and <Link href="/our-works/dhanuka-silks" className="underline underline-offset-2 hover:text-amber-500">Dhanuka Silks</Link>, alongside their social media.
                    </p>
                    <p className="text-[13px] text-zinc-300">
                        More: <Link href="/healthcare-digital-marketing-hyderabad" className="underline underline-offset-2 hover:text-amber-500">healthcare digital marketing in Hyderabad</Link> · <Link href="/digital-marketing-agency-varanasi" className="underline underline-offset-2 hover:text-amber-500">digital marketing agency in Varanasi</Link>
                    </p>
                </Wrapper>
            </Section>
            <ServiceFAQ data={WhatsAppMarketingFAQ} />
            <ServiceCTA />
        </main>
    )
}
