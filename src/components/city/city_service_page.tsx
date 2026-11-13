import Link from 'next/link'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import { ProjectCard } from '@/components/work'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { clients } from '@/constant/clients'
import { VARANASI_CLIENTS } from '@/constant/varanasi'
import { SITE_URL, BUSINESS } from '@/constant/site'
import { ServiceFAQType, ServicesOfferedTypes, ServiceProcessType } from '@/types/service.types'

// Varanasi city + service landing page (e.g. /seo-services-varanasi).
// All copy is passed in by the page and comes from what the site already
// publishes: the matching /services page, the Varanasi page and real case studies.
export type CityServiceConfig = {
    path: string
    serviceSlug: string
    serviceName: string // used in schema + breadcrumb, e.g. "SEO Services"
    h1: React.ReactNode
    intro: string
    points: { title: string; body: string }[]
    // Real Varanasi clients to show; defaults to VARANASI_CLIENTS tagged with serviceSlug.
    clientSlugs?: string[]
    clientsNote?: string
    offered: ServicesOfferedTypes
    process: ServiceProcessType
    faq: ServiceFAQType
}

const ADDRESS = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`
const PHONE_DISPLAY = '+91 80721 99651'

export default function CityServicePage({ c }: { c: CityServiceConfig }) {
    const slugs = c.clientSlugs ?? VARANASI_CLIENTS.filter((s) => clients.find((x) => x.slug === s)?.services?.includes(c.serviceSlug))
    const list = slugs.map((s) => clients.find((x) => x.slug === s)).filter((x): x is NonNullable<typeof x> => !!x)

    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}${c.path}#service`,
        name: `${c.serviceName} in Varanasi`,
        serviceType: c.serviceName,
        url: `${SITE_URL}${c.path}`,
        description: c.intro,
        provider: { '@id': `${SITE_URL}/digital-marketing-agency-varanasi#localbusiness` },
        brand: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'City', name: 'Varanasi', containedInPlace: { '@type': 'State', name: 'Uttar Pradesh' } },
        availableChannel: { '@type': 'ServiceChannel', servicePhone: BUSINESS.telephone, serviceUrl: `${SITE_URL}/book` },
    }
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Varanasi', item: `${SITE_URL}/digital-marketing-agency-varanasi` },
            { '@type': 'ListItem', position: 3, name: `${c.serviceName} in Varanasi`, item: `${SITE_URL}${c.path}` },
        ],
    }

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, '\\u003c') }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }} />

            {/* Hero — no fade-in on heading/intro so it paints immediately (LCP). */}
            <Section className="relative text-zinc-200">
                <Wrapper className="lg:pt-32 md:pt-28 pt-24 lg:pb-14 md:pb-12 pb-10 gap-6!">
                    <nav aria-label="Breadcrumb" className="text-[12px] text-zinc-400">
                        <Link href="/" className="hover:text-amber-500">Home</Link> / <Link href="/digital-marketing-agency-varanasi" className="hover:text-amber-500">Varanasi</Link> / <span>{c.serviceName}</span>
                    </nav>
                    <h1 className="tracking-tight text-zinc-100 leading-tight text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl">{c.h1}</h1>
                    <p className="text-zinc-200 text-[15px] font-light leading-relaxed max-w-2xl">{c.intro}</p>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/book" className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-[13px] font-medium text-zinc-950 hover:bg-amber-500">
                            Book a free exploration call <ArrowRight size={14} />
                        </Link>
                        <a href="tel:+918072199651" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-[13px] text-zinc-200 hover:border-amber-600/50">
                            <Phone size={14} /> {PHONE_DISPLAY}
                        </a>
                    </div>
                </Wrapper>
            </Section>

            <Section tone="raised">
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Why Varanasi businesses choose Wizards Next for {c.serviceName}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-[13.5px] font-light leading-relaxed text-zinc-200">
                            {c.points.map((p) => (
                                <p key={p.title}><span className="block text-zinc-100 font-medium mb-1">{p.title}</span>{p.body}</p>
                            ))}
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            <ServicesOffered data={c.offered} />
            <ServiceProcess data={c.process} />

            {list.length > 0 && (
                <Section tone="raised">
                    <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                        <FadeUp>
                            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-2">Varanasi clients we do this for</h2>
                            <p className="text-zinc-300 text-[13px] font-light">{c.clientsNote ?? 'Real engagements — open any profile to see the work and results.'}</p>
                        </FadeUp>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {list.map((client) => <ProjectCard key={client.slug} client={client} />)}
                        </div>
                    </Wrapper>
                </Section>
            )}

            <Section>
                <Wrapper className="lg:py-12 md:py-10 py-8 gap-4!">
                    <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100">Meet us in Varanasi</h2>
                    <div className="flex flex-col gap-2 text-[13.5px] text-zinc-200">
                        <p className="flex gap-2"><MapPin size={16} className="text-amber-600 shrink-0 mt-0.5" />Wizards Next LLP, {ADDRESS}</p>
                        <a href="tel:+918072199651" className="flex gap-2 hover:text-amber-500"><Phone size={16} className="text-amber-600 shrink-0 mt-0.5" />{PHONE_DISPLAY}</a>
                        <p className="flex gap-2"><Clock size={16} className="text-amber-600 shrink-0 mt-0.5" />Mon – Sat, 10am – 7pm IST</p>
                    </div>
                    <p className="text-[13px] text-zinc-300">
                        More: <Link href={`/services/${c.serviceSlug}`} className="underline underline-offset-2 hover:text-amber-500">{c.serviceName}: our full approach</Link> · <Link href="/digital-marketing-agency-varanasi" className="underline underline-offset-2 hover:text-amber-500">all digital marketing services in Varanasi</Link> · <Link href="/our-works" className="underline underline-offset-2 hover:text-amber-500">our work</Link>
                    </p>
                </Wrapper>
            </Section>

            <ServiceFAQ data={c.faq} />
            <ServiceCTA />
        </main>
    )
}
