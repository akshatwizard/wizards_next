import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import { ProjectCard } from '@/components/work'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { clients } from '@/constant/clients'
import { SITE_URL, BUSINESS } from '@/constant/site'
import { ServiceFAQType } from '@/types/service.types'

// National specialty landing page (e.g. /ivf-clinic-marketing-agency).
// Proof comes only from real clients (all Hyderabad today). No office or
// LocalBusiness claim; Service schema with areaServed India.
export type ClinicNicheConfig = {
    path: string
    serviceName: string
    h1: React.ReactNode
    intro: string
    points: { title: string; body: string }[]
    clientSlugs: string[]
    clientsNote: string
    otherDoctors?: { name: string; role: string; did: string }[]
    services: { href: string; name: string; desc: string }[]
    sections: { heading: string; paras: React.ReactNode[] }[]
    faq: ServiceFAQType
}

const PHONE_DISPLAY = '+91 80721 99651'
const LINK = 'underline underline-offset-2 hover:text-amber-500'

export default function ClinicNichePage({ c }: { c: ClinicNicheConfig }) {
    const list = c.clientSlugs.map((s) => clients.find((x) => x.slug === s)).filter((x): x is NonNullable<typeof x> => !!x)

    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}${c.path}#service`,
        name: c.serviceName,
        serviceType: c.serviceName,
        url: `${SITE_URL}${c.path}`,
        description: c.intro,
        provider: { '@id': `${SITE_URL}/#organization` },
        brand: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'India' },
        availableChannel: { '@type': 'ServiceChannel', servicePhone: BUSINESS.telephone, serviceUrl: `${SITE_URL}/book` },
    }
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Healthcare marketing', item: `${SITE_URL}/healthcare-marketing-agency` },
            { '@type': 'ListItem', position: 3, name: c.serviceName, item: `${SITE_URL}${c.path}` },
        ],
    }

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, '\\u003c') }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }} />

            <Section className="relative text-zinc-200">
                <Wrapper className="lg:pt-32 md:pt-28 pt-24 lg:pb-14 md:pb-12 pb-10 gap-6!">
                    <nav aria-label="Breadcrumb" className="text-[12px] text-zinc-400">
                        <Link href="/" className="hover:text-amber-500">Home</Link> / <Link href="/healthcare-marketing-agency" className="hover:text-amber-500">Healthcare marketing</Link> / <span>{c.serviceName}</span>
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
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">How we approach {c.serviceName.toLowerCase()}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-[13.5px] font-light leading-relaxed text-zinc-200">
                            {c.points.map((p) => (
                                <p key={p.title}><span className="block text-zinc-100 font-medium mb-1">{p.title}</span>{p.body}</p>
                            ))}
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-6!">
                    <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100">What we can run for your clinic</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13.5px] font-light leading-relaxed text-zinc-200">
                        {c.services.map((s) => (
                            <li key={s.href} className="rounded-xl border border-zinc-800 p-4">
                                <Link href={s.href} className="text-zinc-100 font-medium hover:text-amber-500">{s.name}</Link>
                                <p className="mt-1">{s.desc}</p>
                            </li>
                        ))}
                    </ul>
                </Wrapper>
            </Section>

            {(list.length > 0 || c.otherDoctors?.length) && (
                <Section tone="raised">
                    <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                        <FadeUp>
                            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-2">Clinics we do this for</h2>
                            <p className="text-zinc-300 text-[13px] font-light max-w-3xl">{c.clientsNote}</p>
                        </FadeUp>
                        {list.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {list.map((client) => <ProjectCard key={client.slug} client={client} />)}
                            </div>
                        )}
                        {c.otherDoctors?.map((d) => (
                            <p key={d.name} className="text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                                <span className="text-zinc-100 font-medium">{d.name}</span>, {d.role}. {d.did}
                            </p>
                        ))}
                    </Wrapper>
                </Section>
            )}

            {c.sections.map((s) => (
                <Section key={s.heading}>
                    <Wrapper className="lg:py-12 md:py-10 py-8 gap-3!">
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100">{s.heading}</h2>
                        {s.paras.map((p, i) => (
                            <p key={i} className="text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">{p}</p>
                        ))}
                    </Wrapper>
                </Section>
            ))}

            <Section>
                <Wrapper className="lg:py-8 md:py-6 py-6 gap-3!">
                    <p className="text-[13px] text-zinc-300">
                        We are based in Varanasi and work with clinics in other cities remotely, over video calls, WhatsApp and shared reports. More: <Link href="/healthcare-marketing-agency" className={LINK}>healthcare marketing agency</Link> · <Link href="/healthcare-digital-marketing-hyderabad" className={LINK}>healthcare digital marketing in Hyderabad</Link> · <Link href="/services/personal-branding-for-doctors" className={LINK}>personal branding for doctors</Link> · <Link href="/our-works" className={LINK}>our work</Link>
                    </p>
                </Wrapper>
            </Section>

            <ServiceFAQ data={c.faq} />
            <ServiceCTA />
        </main>
    )
}
