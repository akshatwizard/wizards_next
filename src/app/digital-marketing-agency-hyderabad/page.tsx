import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import { ProjectCard } from '@/components/work'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { clients } from '@/constant/clients'
import { SITE_URL } from '@/constant/site'
import { ServiceFAQType } from '@/types/service.types'
import { HYDERABAD_CLIENTS } from '@/constant/hyderabad'

// Service-area page for Hyderabad. Wizards Next has NO Hyderabad office:
// this page must never claim a local address or office, and its schema is a
// Service with areaServed Hyderabad (no LocalBusiness / PostalAddress).
const PATH = '/digital-marketing-agency-hyderabad'
const PHONE_DISPLAY = '+91 80721 99651'

// Real clients whose case studies are Hyderabad practices.

const SERVICES = [
    { href: '/seo-services-hyderabad', name: 'SEO for clinics and businesses', desc: 'Treatment and service pages, content and technical SEO built around what Hyderabad patients and customers actually search.' },
    { href: '/healthcare-digital-marketing-hyderabad', name: 'Personal branding for doctors', desc: 'Instagram and content that build a doctor’s reputation, within medical advertising guidelines.' },
    { href: '/social-media-marketing-agency-hyderabad', name: 'Social media marketing', desc: 'Planning, reels, posting and community management.' },
    { href: '/website-development-company-hyderabad', name: 'Website development', desc: 'Fast, mobile-first websites that turn visits into appointments and enquiries.' },
    { href: '/services/google-meta-ads-management', name: 'Google & Meta ads', desc: 'Campaign setup and weekly optimisation, tied to enquiries.' },
    { href: '/services/performance-marketing', name: 'Performance marketing', desc: 'Paid-media strategy with spend tracked openly.' },
]

const FAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Do you have an office in Hyderabad?', a: 'No. Our office is in Varanasi. We work with Hyderabad clients remotely — video calls, WhatsApp and shared monthly reporting — and several of our longest-running healthcare clients are in Hyderabad.' },
        { q: 'Which Hyderabad clients do you work with?', a: 'Mostly doctors and clinics: Clinica Derm (website and SEO since August 2024), Dr. K. Shilpi Reddy, Dr Ankita Chauhan, Dr Aradhya Achuri, Dr Satyanarayana Garre, Dr Shaivalini Kamarapu, Dr Sandesh Nanisetty, Dr Sonica Miyyapuram and Dr Pranathi Ravipathi. Case studies are linked on this page where available.' },
        { q: 'Which areas of Hyderabad do you cover?', a: 'All of Hyderabad and Secunderabad, because the work is remote. Our current clients are in Banjara Hills, Jubilee Hills and Kondapur, and we can take on businesses in Gachibowli, Madhapur, HITEC City, Kukatpally and anywhere else in the city.' },
        { q: 'Do you work with businesses outside healthcare in Hyderabad?', a: 'Yes. Our Hyderabad case studies are in healthcare, and the same SEO, social media, website and ads services are available to any Hyderabad business. Our other case studies (retail, e-commerce, education, travel) are from Varanasi and across India.' },
        { q: 'What results have you delivered in Hyderabad?', a: 'For Clinica Derm, average Google search position moved from the mid-30s in May 2025 to single digits by March 2026, with terms like “dermatologist hyderabad” ranking around positions 4.5–5.7, per their Search Console data.' },
        { q: 'How do I choose a digital marketing agency in Hyderabad?', a: 'Ask to see real case studies with named clients, how often you will get reports and what they include, whether there is a lock-in, and who owns the content and creatives. For healthcare, also ask how the agency handles medical claims. Our answers: named Hyderabad case studies on this page, weekly and monthly reporting, rolling monthly engagements, and deliverables that are yours.' },
        { q: 'Do I own the content and creatives you make?', a: 'Yes. All deliverables, creatives, content, copy and design files are yours, and we hand over the source files.' },
        { q: 'What does it cost?', a: 'Social media management starts from ₹15,000 a month. Ad budgets are separate, usually from around ₹10,000 a month. Every plan is scoped to your goals.' },
        { q: 'Is there a long-term contract?', a: 'No lock-ins — rolling monthly engagements.' },
    ],
}

export const metadata: Metadata = {
    title: 'Digital Marketing Agency in Hyderabad, India | Wizards Next',
    description: 'Digital marketing agency for Hyderabad, Telangana: SEO, social media, websites and ads for doctors, clinics and businesses. Real Hyderabad case studies.',
    alternates: {
        canonical: PATH,
    },
}

export default function HyderabadPage() {
    const list = HYDERABAD_CLIENTS.map((s) => clients.find((c) => c.slug === s)).filter((c): c is NonNullable<typeof c> => !!c)

    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}${PATH}#service`,
        name: 'Digital marketing services for Hyderabad',
        serviceType: 'Digital marketing',
        url: `${SITE_URL}${PATH}`,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'City', name: 'Hyderabad', containedInPlace: { '@type': 'State', name: 'Telangana' } },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services',
            itemListElement: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: `${SITE_URL}${s.href}` } })),
        },
    }
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Digital Marketing for Hyderabad', item: `${SITE_URL}${PATH}` },
        ],
    }

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, '\\u003c') }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }} />

            <Section className="relative text-zinc-200">
                <Wrapper className="lg:pt-32 md:pt-28 pt-24 lg:pb-14 md:pb-12 pb-10 gap-6!">
                    <nav aria-label="Breadcrumb" className="text-[12px] text-zinc-400">
                        <Link href="/" className="hover:text-amber-500">Home</Link> / <span>Hyderabad</span>
                    </nav>
                    <h1 className="tracking-tight text-zinc-100 leading-tight text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl">
                        Digital Marketing Agency in <span className="text-amber-600 font-sora!">Hyderabad</span>, Telangana
                    </h1>
                    <p className="text-zinc-200 text-[15px] font-light leading-relaxed max-w-2xl">
                        Wizards Next works with doctors, clinics and businesses in Hyderabad, Telangana, India on SEO, websites, social media and ads. We are based in Varanasi and serve Hyderabad clients remotely — no local office, just the same team, process and reporting our Hyderabad clients already rely on.
                    </p>
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

            {list.length > 0 && (
                <Section tone="raised">
                    <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                        <FadeUp>
                            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-2">Hyderabad clients we work with</h2>
                            <p className="text-zinc-300 text-[13px] font-light">Real engagements — open any profile to see the work and results.</p>
                        </FadeUp>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {list.map((client) => <ProjectCard key={client.slug} client={client} />)}
                        </div>
                    </Wrapper>
                </Section>
            )}

            <Section>
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100">What we do for Hyderabad businesses</h2>
                    </FadeUp>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {SERVICES.map((s) => (
                            <Link key={s.href} href={s.href} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-amber-600/40 transition-colors">
                                <h3 className="text-[15px] font-medium text-zinc-100 mb-1.5">{s.name}</h3>
                                <p className="text-[12.5px] font-light leading-relaxed text-zinc-300">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-[13px] text-zinc-300">
                        Healthcare is our strongest Hyderabad sector — see <Link href="/healthcare-digital-marketing-hyderabad" className="underline underline-offset-2 hover:text-amber-500">digital marketing for doctors and clinics in Hyderabad</Link> and <Link href="/sector/healthcare" className="underline underline-offset-2 hover:text-amber-500">digital marketing for healthcare</Link>. Our office is in <Link href="/digital-marketing-agency-varanasi" className="underline underline-offset-2 hover:text-amber-500">Varanasi</Link>.
                    </p>
                </Wrapper>
            </Section>

            <Section tone="raised">
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-6!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Digital marketing for Hyderabad clinics, by specialty</h2>
                        <div className="space-y-3 text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                            <p>Most of our Hyderabad work is for doctors and clinics, and each specialty needs a slightly different plan:</p>
                            <ul className="list-disc pl-5 space-y-1.5">
                                <li><Link href="/dermatology-clinic-marketing-agency" className="underline underline-offset-2 hover:text-amber-500">Dermatology and skin clinics</Link>: treatment pages built around how patients search (acne, pigmentation, hair fall, laser, PRP). <Link href="/our-works/clinica-derm" className="underline underline-offset-2 hover:text-amber-500">Clinica Derm</Link> in Banjara Hills gets a performance report every week and a full audit every month.</li>
                                <li><Link href="/ivf-clinic-marketing-agency" className="underline underline-offset-2 hover:text-amber-500">IVF and fertility clinics</Link>: plain-language education content first, with no guaranteed outcomes or invented success rates. For Dr Shaivalini Kamarapu we run WhatsApp presence alongside Instagram.</li>
                                <li><Link href="/services/personal-branding-for-doctors" className="underline underline-offset-2 hover:text-amber-500">Personal branding for doctors</Link>: Instagram and content for individual consultants, including doctors at KIMS and CARE Hospitals listed below.</li>
                                <li>Every specialty: <Link href="/seo-services-hyderabad" className="underline underline-offset-2 hover:text-amber-500">SEO</Link>, <Link href="/social-media-marketing-agency-hyderabad" className="underline underline-offset-2 hover:text-amber-500">social media</Link> and <Link href="/website-development-company-hyderabad" className="underline underline-offset-2 hover:text-amber-500">websites</Link>, with medical facts always coming from the doctor.</li>
                            </ul>
                            <p>See the full picture on our <Link href="/healthcare-digital-marketing-hyderabad" className="underline underline-offset-2 hover:text-amber-500">healthcare digital marketing in Hyderabad</Link> page.</p>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-6!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">What to expect from Wizards as your Hyderabad agency</h2>
                        <ul className="list-disc pl-5 space-y-2 text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                            <li><strong className="font-medium text-zinc-100">Named, real case studies.</strong> Every Hyderabad client on this page is a real engagement you can open and read.</li>
                            <li><strong className="font-medium text-zinc-100">No lock-ins.</strong> Rolling monthly engagements: you stay because the work is holding up, not because a contract requires it.</li>
                            <li><strong className="font-medium text-zinc-100">Your work stays yours.</strong> Deliverables, creatives, content, copy and design files belong to you, with source files handed over.</li>
                            <li><strong className="font-medium text-zinc-100">Reporting you can check.</strong> A weekly and monthly rhythm covering rankings, enquiries and real post-level numbers.</li>
                            <li><strong className="font-medium text-zinc-100">Honest about location.</strong> Our only office is in <Link href="/digital-marketing-agency-varanasi" className="underline underline-offset-2 hover:text-amber-500">Varanasi</Link>; Hyderabad clients are served remotely over video calls and WhatsApp.</li>
                        </ul>
                    </FadeUp>
                </Wrapper>
            </Section>

            <Section tone="raised">
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-6!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Areas of Hyderabad we work in</h2>
                        <div className="space-y-3 text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                            <p>We have no Hyderabad office. Everything runs remotely from Varanasi, so where a client sits in the city makes no difference to the service. These are the areas our current Hyderabad clients practise in:</p>
                            <ul className="list-disc pl-5 space-y-1.5">
                                <li>Banjara Hills: <Link href="/our-works/clinica-derm" className="underline underline-offset-2 hover:text-amber-500">Clinica Derm</Link> (Dr. Deepthi Atmakuri, dermatologist) and Dr Sandesh Nanisetty (Consultant Neurologist, CARE Hospitals).</li>
                                <li>Jubilee Hills: <Link href="/our-works/dr-satyanarayana-garre" className="underline underline-offset-2 hover:text-amber-500">Dr Satyanarayana Garre</Link> (nephrologist).</li>
                                <li>Kondapur: <Link href="/our-works/dr-k-shilpi-reddy" className="underline underline-offset-2 hover:text-amber-500">Dr. K. Shilpi Reddy</Link> (KIMS Cuddles) and <Link href="/our-works/dr-ankita-chauhan" className="underline underline-offset-2 hover:text-amber-500">Dr Ankita Chauhan</Link> (KIMS Hospital).</li>
                            </ul>
                            <p>We also take on businesses in Gachibowli, Madhapur, HITEC City, Kukatpally and KPHB, Secunderabad and the rest of Hyderabad and Telangana in the same way: an exploration call, a scoped plan, then a fixed weekly and monthly rhythm over video calls and WhatsApp.</p>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-6!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">How we work with Hyderabad clients</h2>
                        <ol className="list-decimal pl-5 space-y-2 text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                            <li>A free exploration call to understand your practice or business, goals and current setup.</li>
                            <li>A scoped proposal — usually starting with one service, such as SEO or social media.</li>
                            <li>A fixed weekly and monthly rhythm, with reporting on rankings, enquiries and real post-level numbers.</li>
                            <li>Calls and WhatsApp for day-to-day coordination; content inputs come from you, the subject-matter expert.</li>
                        </ol>
                    </FadeUp>
                </Wrapper>
            </Section>

            <ServiceFAQ data={FAQ} />
            <ServiceCTA />
        </main>
    )
}
