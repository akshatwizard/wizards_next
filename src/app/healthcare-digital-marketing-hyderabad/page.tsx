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

// Healthcare service-area page for Hyderabad. Wizards Next has NO Hyderabad
// office: never claim a local address/office here; schema is a Service with
// areaServed Hyderabad (no LocalBusiness / PostalAddress). Every result quoted
// comes from the client case studies in constant/clients.ts.
const PATH = '/healthcare-digital-marketing-hyderabad'
const PHONE_DISPLAY = '+91 80721 99651'
const CLIENTS = HYDERABAD_CLIENTS

const SERVICES = [
    { href: '/services/personal-branding-for-doctors', name: 'Personal branding for doctors', desc: 'A trustworthy, guideline-compliant Instagram presence: content pillars, scripted reels, profile optimisation and a review of existing posts.' },
    { href: '/seo-services-hyderabad', name: 'SEO for clinics and hospitals', desc: 'Treatment and condition pages, technical SEO and Google Business Profile work built around what Hyderabad patients actually search.' },
    { href: '/social-media-marketing-agency-hyderabad', name: 'Social media management', desc: 'Patient-education reels, posting and replies to comments and DMs, so the page stays active and trustworthy.' },
    { href: '/website-development-company-hyderabad', name: 'Doctor and clinic websites', desc: 'Fast, mobile-first websites with appointment booking that turn searches into consultations.' },
    { href: '/services/google-meta-ads-management', name: 'Google & Meta ads', desc: 'Campaigns monitored and optimised weekly, tied to enquiries rather than impressions.' },
    { href: '/services/videography', name: 'Video production', desc: 'Regular shoots and edits for reels, YouTube explainers and patient stories.' },
]

const RESULTS = [
    { who: 'Clinica Derm', slug: 'clinica-derm', what: 'Website and SEO since August 2024. Average Google search position improved from 35.3 to a low of 7.9; “dermatologist hyderabad” ranks around 4.5 and “best dermatologist hyderabad” around 5.0 (Search Console).' },
    { who: 'Dr. K. Shilpi Reddy', slug: 'dr-k-shilpi-reddy', what: 'Social media, content, video, ads, website and SEO since 2023 — now 419,000+ Instagram followers and 1.28 million YouTube subscribers.' },
    { who: 'Dr Ankita Chauhan', slug: 'dr-ankita-chauhan', what: 'Built from zero posts and zero followers over about two and a half years, with reels reaching 5, 7 and 8 million views, plus a website booking system paid into her own payment gateway.' },
]

const FAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Do you have an office in Hyderabad?', a: 'No. Our office is in Varanasi. We work with Hyderabad doctors and clinics remotely — video calls, WhatsApp and shared monthly reporting — and several of our longest-running healthcare clients are in Hyderabad.' },
        { q: 'Is doctor marketing on Instagram allowed?', a: 'Doctors can build a professional presence, but content has to stay within medical advertising guidelines. We plan, script and review posts with those guidelines in mind, and can review your existing posts with recommendations on what to keep, edit or archive.' },
        { q: 'Do I have to appear on camera?', a: 'It helps, but it is not required. We give simple shooting direction for your clinic and also use formats that do not need you on camera.' },
        { q: 'Which Hyderabad healthcare clients do you work with?', a: 'Clinica Derm (Dr. Deepthi Atmakuri), Dr. K. Shilpi Reddy, Dr Ankita Chauhan, Dr Aradhya Achuri, Dr Satyanarayana Garre, Dr Shaivalini Kamarapu, Dr Sandesh Nanisetty, Dr Sonica Miyyapuram and Dr Pranathi Ravipathi. Case studies are linked on this page where available.' },
        { q: 'Do you work as a hospital marketing agency in Hyderabad?', a: 'Our Hyderabad clients are doctors and clinics, and several of them are consultants at KIMS, CARE and AMVI hospitals. We market the doctor’s own practice and personal brand; we do not represent those hospitals. A hospital can hire us for the same work: consultant personal branding, department and treatment pages, SEO, Google Business Profile management and social media.' },
        { q: 'What does a healthcare digital marketing agency in Hyderabad do?', a: 'It helps patients find and trust a doctor or clinic online: Google Search and Maps visibility, a clear website with booking, patient-education content on Instagram and YouTube, and ads where they make sense. All of it has to stay within medical advertising guidelines.' },
        { q: 'What does it cost?', a: 'Personal branding for doctors starts from ₹40,000. Social media management starts from ₹15,000 a month, and ad budgets are separate, usually from around ₹10,000 a month. Every plan is scoped to your goals.' },
        { q: 'Is there a long-term contract?', a: 'No lock-ins — rolling monthly engagements.' },
    ],
}

export const metadata: Metadata = {
    title: 'Healthcare Digital Marketing Agency in Hyderabad for Doctors & Hospitals',
    description: 'Healthcare digital marketing agency for Hyderabad doctors, clinics and hospital consultants: guideline-compliant personal branding, SEO, social media, websites and ads. Real results for Clinica Derm and Dr. K. Shilpi Reddy.',
    alternates: { canonical: PATH },
}

export default function HyderabadHealthcarePage() {
    const list = CLIENTS.map((s) => clients.find((c) => c.slug === s)).filter((c): c is NonNullable<typeof c> => !!c)

    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}${PATH}#service`,
        name: 'Healthcare digital marketing for Hyderabad doctors and clinics',
        serviceType: 'Healthcare digital marketing',
        url: `${SITE_URL}${PATH}`,
        provider: { '@id': `${SITE_URL}/#organization` },
        audience: { '@type': 'Audience', audienceType: 'Doctors, clinics and hospitals' },
        areaServed: { '@type': 'City', name: 'Hyderabad', containedInPlace: { '@type': 'State', name: 'Telangana' } },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Healthcare marketing services',
            itemListElement: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: `${SITE_URL}${s.href}` } })),
        },
    }
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Digital Marketing for Hyderabad', item: `${SITE_URL}/digital-marketing-agency-hyderabad` },
            { '@type': 'ListItem', position: 3, name: 'Healthcare Digital Marketing in Hyderabad', item: `${SITE_URL}${PATH}` },
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
                        <Link href="/" className="hover:text-amber-500">Home</Link> / <Link href="/digital-marketing-agency-hyderabad" className="hover:text-amber-500">Hyderabad</Link> / <span>Healthcare</span>
                    </nav>
                    <h1 className="tracking-tight text-zinc-100 leading-tight text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl">
                        Healthcare Digital Marketing Agency in <span className="text-amber-600 font-sora!">Hyderabad</span> for Doctors &amp; Hospitals
                    </h1>
                    <p className="text-zinc-200 text-[15px] font-light leading-relaxed max-w-2xl">
                        Healthcare is our strongest Hyderabad sector. We help doctors, clinics and hospitals in Hyderabad get found on Google, build a trustworthy, guideline-compliant presence on Instagram and YouTube, and turn that attention into appointments. We are based in Varanasi and work with Hyderabad practices remotely.
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

            <Section>
                <Wrapper className="lg:py-10 md:py-8 py-6 gap-3!">
                    <figure className="max-w-4xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/city/healthcare-digital-marketing-hyderabad.webp"
                            alt="Diagram of how Wizards Next works with Hyderabad doctors and clinics: exploration call, scoped proposal, medical inputs from the doctor, and a fixed weekly and monthly reporting rhythm."
                            width={1200}
                            height={720}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto rounded-2xl border border-zinc-800"
                        />
                        <figcaption className="mt-3 text-[12.5px] font-light text-zinc-400">How we work with Hyderabad doctors and clinics — guideline-compliant marketing, delivered remotely from Varanasi.</figcaption>
                    </figure>
                </Wrapper>
            </Section>

            <Section tone="raised">
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Results for Hyderabad healthcare clients</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-[13.5px] font-light leading-relaxed text-zinc-200">
                            {RESULTS.map((r) => (
                                <p key={r.slug}><Link href={`/our-works/${r.slug}`} className="block text-zinc-100 font-medium mb-1 hover:text-amber-500">{r.who}</Link>{r.what}</p>
                            ))}
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100">Healthcare marketing services for Hyderabad</h2>
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
                        See also <Link href="/social-media-marketing-agency-hyderabad" className="underline underline-offset-2 hover:text-amber-500">social media marketing in Hyderabad</Link>, <Link href="/seo-services-hyderabad" className="underline underline-offset-2 hover:text-amber-500">SEO services in Hyderabad</Link>, <Link href="/website-development-company-hyderabad" className="underline underline-offset-2 hover:text-amber-500">website development in Hyderabad</Link>, <Link href="/healthcare-marketing-agency" className="underline underline-offset-2 hover:text-amber-500">our healthcare marketing agency services</Link>, <Link href="/sector/healthcare" className="underline underline-offset-2 hover:text-amber-500">digital marketing for healthcare</Link>, <Link href="/ivf-clinic-marketing-agency" className="underline underline-offset-2 hover:text-amber-500">IVF clinic marketing</Link>, <Link href="/dermatology-clinic-marketing-agency" className="underline underline-offset-2 hover:text-amber-500">dermatology clinic marketing</Link> and <Link href="/digital-marketing-agency-hyderabad" className="underline underline-offset-2 hover:text-amber-500">all our work for Hyderabad businesses</Link>.
                    </p>
                </Wrapper>
            </Section>

            {list.length > 0 && (
                <Section tone="raised">
                    <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                        <FadeUp>
                            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-2">Hyderabad doctors and clinics we work with</h2>
                            <p className="text-zinc-300 text-[13px] font-light">Real engagements — open any profile to see the work and results.</p>
                        </FadeUp>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {list.map((client) => <ProjectCard key={client.slug} client={client} />)}
                        </div>
                        {/* Confirmed by Ravi 15 Nov 2026; public facts only (drshaivalini.com). No screenshot until permission is confirmed. */}
                        <p className="text-[13px] font-light text-zinc-300">
                            We also work with <a href="https://www.drshaivalini.com" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-amber-500">Dr Shaivalini Kamarapu</a>, Senior Consultant Gynaecologist, Fertility Specialist &amp; Laparoscopic Surgeon at AMVI Hospitals, Hyderabad — we manage her Instagram and WhatsApp presence. See all our <Link href="/healthcare-marketing-agency" className="underline underline-offset-2 hover:text-amber-500">doctor clients</Link>.
                        </p>
                        {/* Confirmed by Ravi 15 Nov 2026: Hyderabad; Wizards manages their Facebook, Instagram and YouTube. */}
                        <p className="text-[13px] font-light text-zinc-300">
                            We also manage the Facebook, Instagram and YouTube channels of three more Hyderabad doctors: <a href="https://www.instagram.com/dr.sandeshnanisetty/" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-amber-500">Dr Sandesh Nanisetty</a> (Consultant Neurologist, CARE Hospitals, Banjara Hills), <a href="https://www.instagram.com/_drsonic/" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-amber-500">Dr Sonica Miyyapuram</a> (Prosthodontist) and <a href="https://www.instagram.com/drpranathitransforms/" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-amber-500">Dr Pranathi Ravipathi</a> (hair transplant and facial aesthetic surgery).
                        </p>
                    </Wrapper>
                </Section>
            )}

            <Section>
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-6!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Marketing for hospital consultants in Hyderabad</h2>
                        <div className="space-y-3 text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                            <p>Several of our Hyderabad doctor clients are consultants at large hospitals. We market the doctor’s own practice and personal brand; the hospitals are not our clients and we do not speak for them.</p>
                            <ul className="list-disc pl-5 space-y-1.5">
                                <li>Dr. K. Shilpi Reddy: Clinical Director of Obstetrics &amp; Gynaecology, KIMS Cuddles, Kondapur.</li>
                                <li>Dr Ankita Chauhan: Consultant Obstetrician &amp; Gynaecologist, KIMS Hospital, Kondapur.</li>
                                <li>Dr Sandesh Nanisetty: Consultant Neurologist, CARE Hospitals, Banjara Hills.</li>
                                <li>Dr Shaivalini Kamarapu: Senior Consultant Gynaecologist, Fertility Specialist &amp; Laparoscopic Surgeon, AMVI Hospitals.</li>
                            </ul>
                            <p>For a consultant, patients usually search the doctor’s name and specialty before they book, so the work is a guideline-compliant Instagram and YouTube presence, a personal website or profile page, and Google results that answer the questions patients ask. For a hospital or clinic that wants the same for its doctors, we can run consultant personal branding, department and treatment pages, SEO, Google Business Profile management and social media as one engagement.</p>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            <Section tone="raised">
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-6!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">How we work with Hyderabad practices</h2>
                        <ol className="list-decimal pl-5 space-y-2 text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                            <li>A free exploration call to understand your specialty, patients, goals and current presence.</li>
                            <li>A scoped proposal — usually starting with one service, such as SEO or personal branding.</li>
                            <li>Content pillars and a monthly calendar built around your specialty and your patients’ real questions; medical inputs come from you.</li>
                            <li>A fixed weekly and monthly rhythm, with plain-language reporting on rankings, enquiries and real post-level numbers.</li>
                        </ol>
                    </FadeUp>
                </Wrapper>
            </Section>

            <ServiceFAQ data={FAQ} />
            <ServiceCTA />
        </main>
    )
}
