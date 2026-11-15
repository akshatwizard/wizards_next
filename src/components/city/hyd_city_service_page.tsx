import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import { ProjectCard } from '@/components/work'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { clients } from '@/constant/clients'
import { SITE_URL, BUSINESS } from '@/constant/site'
import { ServiceFAQType, ServicesOfferedTypes, ServiceProcessType } from '@/types/service.types'

// Hyderabad city + service landing page (e.g. /seo-services-hyderabad).
// Service-area only: no address, map, or LocalBusiness. Copy is passed in
// by the page and must come from published case studies and service pages.
export type HydCityServiceConfig = {
    path: string
    serviceSlug: string
    serviceName: string
    h1: React.ReactNode
    intro: string
    points: { title: string; body: string }[]
    clientSlugs: string[]
    clientsHeading?: string
    clientsNote?: string
    offered: ServicesOfferedTypes
    process: ServiceProcessType
    faq: ServiceFAQType
    visual: { src: string; alt: string; caption: string; width: number; height: number }
    // Optional niche section (e.g. "SEO for doctors in Hyderabad"), real facts only.
    extra?: { heading: string; paras: React.ReactNode[] }
}

const PHONE_DISPLAY = '+91 80721 99651'

export default function HydCityServicePage({ c }: { c: HydCityServiceConfig }) {
    const list = c.clientSlugs.map((s) => clients.find((x) => x.slug === s)).filter((x): x is NonNullable<typeof x> => !!x)

    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}${c.path}#service`,
        name: `${c.serviceName} in Hyderabad`,
        serviceType: c.serviceName,
        url: `${SITE_URL}${c.path}`,
        description: c.intro,
        provider: { '@id': `${SITE_URL}/#organization` },
        brand: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'City', name: 'Hyderabad', containedInPlace: { '@type': 'State', name: 'Telangana' } },
        availableChannel: { '@type': 'ServiceChannel', servicePhone: BUSINESS.telephone, serviceUrl: `${SITE_URL}/book` },
    }
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Hyderabad', item: `${SITE_URL}/digital-marketing-agency-hyderabad` },
            { '@type': 'ListItem', position: 3, name: `${c.serviceName} in Hyderabad`, item: `${SITE_URL}${c.path}` },
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
                        <Link href="/" className="hover:text-amber-500">Home</Link> / <Link href="/digital-marketing-agency-hyderabad" className="hover:text-amber-500">Hyderabad</Link> / <span>{c.serviceName}</span>
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

            <Section>
                <Wrapper className="lg:py-10 md:py-8 py-6 gap-3!">
                    <figure className="max-w-4xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={c.visual.src}
                            alt={c.visual.alt}
                            width={c.visual.width}
                            height={c.visual.height}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto rounded-2xl border border-zinc-800"
                        />
                        <figcaption className="mt-3 text-[12.5px] font-light text-zinc-400">{c.visual.caption}</figcaption>
                    </figure>
                </Wrapper>
            </Section>

            <Section tone="raised">
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Why Hyderabad practices choose Wizards Next for {c.serviceName}</h2>
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
                            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-2">{c.clientsHeading ?? 'Hyderabad clients we do this for'}</h2>
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
                    {c.extra && (
                        <div className="flex flex-col gap-3 mb-6">
                            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100">{c.extra.heading}</h2>
                            {c.extra.paras.map((p, i) => (
                                <p key={i} className="text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">{p}</p>
                            ))}
                        </div>
                    )}
                    <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100">How we work with Hyderabad clients</h2>
                    <p className="text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                        We have no office in Hyderabad. Coordination happens over video calls, WhatsApp and shared monthly reporting, from our office in Varanasi. Call or WhatsApp {PHONE_DISPLAY}, or book a free exploration call.
                    </p>
                    <p className="text-[13px] text-zinc-300">
                        More: <Link href={`/services/${c.serviceSlug}`} className="underline underline-offset-2 hover:text-amber-500">{c.serviceName}: our full approach</Link> · <Link href="/digital-marketing-agency-hyderabad" className="underline underline-offset-2 hover:text-amber-500">all digital marketing for Hyderabad</Link> · <Link href="/digital-marketing-agency-varanasi" className="underline underline-offset-2 hover:text-amber-500">our Varanasi office</Link> · <Link href="/our-works" className="underline underline-offset-2 hover:text-amber-500">our work</Link>
                    </p>
                </Wrapper>
            </Section>

            <ServiceFAQ data={c.faq} />
            <ServiceCTA />
        </main>
    )
}
