import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, ExternalLink } from 'lucide-react'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { SITE_URL } from '@/constant/site'
import { ServiceFAQType } from '@/types/service.types'

// Healthcare marketing hub (doctors, clinics, hospitals). Primary local focus
// is Varanasi (our office); Hyderabad intent belongs to
// /healthcare-digital-marketing-hyderabad, which this page links to — do not
// retarget this page at Hyderabad head terms. NO Hyderabad office: never claim
// one. Every doctor fact below comes from the case studies in
// constant/clients.ts (and the doctors' own public websites). No invented
// results, testimonials or quotes.
const PATH = '/healthcare-marketing-agency'
const PHONE_DISPLAY = '+91 80721 99651'

const SERVICES = [
    { href: '/services/personal-branding-for-doctors', name: 'Personal branding for doctors', desc: 'A trustworthy, guideline-aware Instagram and YouTube presence built around your specialty and your patients’ real questions.' },
    { href: '/social-media-marketing-agency-varanasi', name: 'Social media management', desc: 'Content calendar, posting, and replies to comments and DMs, so your page stays active instead of going quiet.' },
    { href: '/services/videography', name: 'Reels and video production', desc: 'Patient-education reels, treatment explainers and longer YouTube videos — shot, edited and captioned in your voice.' },
    { href: '/seo-services-varanasi', name: 'Google Business Profile and local SEO', desc: 'A complete, active clinic profile and local SEO so nearby patients find you in Google Search and Maps.' },
    { href: '/services/seo-consultancy', name: 'SEO for clinics and hospitals', desc: 'Treatment and condition pages, blogs and technical SEO built on keyword and competitor research.' },
    { href: '/services/google-meta-ads-management', name: 'Google and Meta ads', desc: 'Campaigns for consultations and procedures, monitored and optimised weekly and judged on enquiries, not impressions.' },
    { href: '/services/website-development', name: 'Doctor and clinic websites', desc: 'Fast, mobile-first websites with appointment booking, click-to-call and WhatsApp.' },
    { href: '/services/whatsapp-marketing', name: 'WhatsApp for clinics', desc: 'WhatsApp enquiry flows and broadcasts so patients can ask, book and get reminders where they already chat.' },
]

type Doctor = { slug?: string; name: string; role: string; city: string; did?: string; facts: string; website: string; shot?: { src: string; alt: string } }

// Doctor clients confirmed by Ravi (15 Nov 2026) who have no case study yet.
// Only publicly verifiable facts; name-only where the doctor could not be
// confidently identified online. No screenshots until permission is confirmed.
type DoctorClient = { name: string; role?: string; city?: string; about?: string; website?: string }
const MORE_DOCTORS: DoctorClient[] = [
    // TODO(Ravi): specialty, clinic and city for these three — not confidently identifiable from public sources.
    { name: 'Dr Sandesh' },
    { name: 'Dr Sonica Miyapuri' },
    { name: 'Dr Pranathi Ravipathi' },
]

const DOCTORS: Doctor[] = [
    {
        slug: 'dr-k-shilpi-reddy',
        name: 'Dr. K. Shilpi Reddy',
        role: 'Obstetrician & Gynaecologist · Clinical Director of Obstetrics & Gynaecology, KIMS Cuddles, Kondapur',
        city: 'Hyderabad',
        did: 'Since 2023: social media, content, video production, Google and Meta ads, performance marketing, website and SEO, run as one continuous engagement.',
        facts: '23+ years of practice. Her channels now have 419,000+ Instagram followers and 1.28 million YouTube subscribers.',
        website: 'https://drkshilpireddy.com',
        shot: { src: '/images/healthcare/site-drkshilpireddy.webp', alt: 'Homepage of drkshilpireddy.com, the website of Dr. K. Shilpi Reddy, Obstetrician and Gynaecologist at KIMS Cuddles, Hyderabad, with Make an Appointment and WhatsApp buttons' },
    },
    {
        slug: 'dr-ankita-chauhan',
        name: 'Dr Ankita Chauhan',
        role: 'Consultant Obstetrician & Gynaecologist · KIMS Hospital, Kondapur',
        city: 'Hyderabad',
        did: 'About two and a half years: social media, personal branding, website, YouTube and podcast — starting from zero posts and zero followers.',
        facts: 'Reels have reached 5, 7 and 8 million views. Her website has a booking system built by Wizards that pays straight into her own payment gateway.',
        website: 'https://drankitachauhan.com',
        shot: { src: '/images/healthcare/site-drankitachauhan.webp', alt: 'Homepage of drankitachauhan.com, the Women Care website of Dr Ankita Chauhan, Consultant Gynecologist and Obstetrician in Hyderabad, with Book Appointment and Schedule Consultation buttons' },
    },
    {
        slug: 'clinica-derm',
        name: 'Clinica Derm — Dr. Deepthi Atmakuri',
        role: 'Skin and hair clinic · Dermatologist (MBBS, DDVL)',
        city: 'Banjara Hills, Hyderabad',
        did: 'Since August 2024: the WordPress website and full-scope SEO, with a weekly report and a monthly audit.',
        facts: 'Average Google search position moved from 35.3 to a low of 7.9; “dermatologist hyderabad” ranks around 4.5 (Google Search Console).',
        website: 'https://clinicaderm.in',
        shot: { src: '/images/healthcare/site-clinicaderm.webp', alt: 'Homepage of clinicaderm.in, the website of Clinica Derm skin and hair clinic in Banjara Hills, Hyderabad, led by Dr. Deepthi Atmakuri' },
    },
    {
        slug: 'dr-aradhya-achuri',
        name: 'Dr Aradhya Achuri',
        role: 'IVF and fertility clinic',
        city: 'Hyderabad',
        did: 'We manage her Instagram presence.',
        facts: 'Her clinic offers IVF, IUI, ICSI, egg and sperm freezing and personalised fertility care, and her website runs a large patient-education library on fertility and women’s health.',
        website: 'https://draradhyaachuri.com',
        shot: { src: '/images/healthcare/site-draradhyaachuri.webp', alt: 'Homepage of draradhyaachuri.com, the website of Dr Aradhya Achuri’s fertility clinic in Hyderabad, listing IVF, sperm freezing, egg freezing, ICSI and IUI' },
    },
    {
        slug: 'dr-satyanarayana-garre',
        name: 'Dr Satyanarayana Garre',
        role: 'Nephrologist and kidney specialist',
        city: 'Jubilee Hills, Hyderabad',
        did: 'We manage his Instagram presence.',
        facts: 'His practice covers kidney disorders from early-stage disease to advanced care: dialysis (IHD, CRRT and peritoneal dialysis), renal transplant care and dialysis-access procedures.',
        website: 'https://drsatyanarayanagarre.in',
        shot: { src: '/images/healthcare/site-drsatyanarayanagarre.webp', alt: 'Homepage of drsatyanarayanagarre.in, the website of Dr. Satyanarayana Garre, nephrologist and kidney specialist in Jubilee Hills, Hyderabad, with a Make an Appointment button' },
    },
    {
        name: 'Dr Shaivalini Kamarapu',
        role: 'Senior Consultant Gynaecologist, Fertility Specialist & Laparoscopic Surgeon · AMVI Hospitals',
        city: 'Hyderabad',
        did: 'We manage her Instagram and WhatsApp presence.',
        facts: 'Her practice covers fertility treatment, high-risk pregnancy care, advanced laparoscopic surgery and cosmetic gynaecology.',
        website: 'https://www.drshaivalini.com',
        shot: { src: '/images/healthcare/site-drshaivalini.webp', alt: 'Homepage of drshaivalini.com, the website of Dr Shaivalini Kamarapu, gynaecologist and fertility specialist in Hyderabad, with Call Now and Book Consultation buttons' },
    },
]

const FAQ: ServiceFAQType = {
    faq_list: [
        { q: 'What does a healthcare marketing agency do?', a: 'We help doctors, clinics and hospitals get found by patients and turn that attention into appointments: Google Business Profile and local SEO, treatment pages, social media and reels, personal branding, Google and Meta ads, websites with booking, and WhatsApp. You get plain-language reporting on rankings, enquiries and real post-level numbers.' },
        { q: 'Do you work with doctors and clinics in Varanasi?', a: 'Yes. Our office is in Nirala Nagar, Mahmoorganj, Varanasi, so Varanasi doctors, clinics and hospitals can meet us in person. For a Varanasi practice we usually start with the Google Business Profile, local SEO and an active Instagram, because that is where nearby patients look first.' },
        { q: 'Do you have an office in Hyderabad?', a: 'No. Our only office is in Varanasi. We work with Hyderabad doctors and clinics remotely — video calls, WhatsApp and shared reporting — and several of our longest-running healthcare clients are in Hyderabad.' },
        { q: 'Which doctors and clinics do you work with?', a: 'Our doctor clients include Dr. K. Shilpi Reddy, Dr Ankita Chauhan, Clinica Derm (Dr. Deepthi Atmakuri), Dr Aradhya Achuri, Dr Satyanarayana Garre and Dr Shaivalini Kamarapu in Hyderabad, as well as Dr Sandesh, Dr Sonica Miyapuri and Dr Pranathi Ravipathi. Case studies are linked on this page where available.' },
        { q: 'Is marketing allowed for doctors in India?', a: 'Doctors can build a professional, educational presence, but content has to stay within medical advertising and professional-conduct guidelines: no misleading claims or guaranteed results, and patient consent and privacy respected. We plan and review content with those guidelines in mind; please also read the official guidelines yourself or with your advisor.' },
        { q: 'Do I have to appear on camera?', a: 'It helps, but it is not required. We give simple shooting direction and also use formats that do not need you on camera. Dr Ankita Chauhan started out camera-shy; around 90% of that hesitation is gone now.' },
        { q: 'How long does healthcare SEO take?', a: 'SEO is a months-long effort, not a quick fix. For Clinica Derm, average Google search position moved from the mid-30s in May 2025 to single digits by March 2026, per their Search Console data. Ads and Google Business Profile work can bring enquiries sooner.' },
        { q: 'What does it cost?', a: 'Personal branding for doctors starts from ₹40,000. Social media management starts from ₹15,000 a month, and ad budgets are separate, usually from around ₹10,000 a month. Every plan is scoped to your goals after a free call. No lock-ins — rolling monthly engagements.' },
    ],
}

export const metadata: Metadata = {
    title: 'Healthcare Marketing Agency in Varanasi for Doctors & Clinics',
    description: 'Healthcare marketing for doctors, clinics and hospitals in Varanasi, Hyderabad and across India: Google Business Profile, SEO, reels, ads and websites.',
    alternates: { canonical: PATH },
    openGraph: {
        title: 'Healthcare Marketing Agency for Doctors & Clinics | Wizards Next',
        description: 'Digital marketing for doctors, clinics and hospitals in Varanasi and Hyderabad — with real doctor clients and results.',
        url: `${SITE_URL}${PATH}`,
        images: [{ url: `${SITE_URL}/images/healthcare/healthcare-marketing-patient-journey.webp`, width: 1200, height: 720 }],
    },
}

export default function HealthcareMarketingAgencyPage() {
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}${PATH}#service`,
        name: 'Healthcare marketing for doctors, clinics and hospitals',
        serviceType: 'Healthcare marketing',
        url: `${SITE_URL}${PATH}`,
        description: metadata.description,
        provider: { '@id': `${SITE_URL}/#organization` },
        audience: { '@type': 'Audience', audienceType: 'Doctors, clinics and hospitals' },
        areaServed: [
            { '@type': 'City', name: 'Varanasi', containedInPlace: { '@type': 'State', name: 'Uttar Pradesh' } },
            { '@type': 'City', name: 'Hyderabad', containedInPlace: { '@type': 'State', name: 'Telangana' } },
            { '@type': 'Country', name: 'India' },
        ],
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
            { '@type': 'ListItem', position: 2, name: 'Healthcare', item: `${SITE_URL}/sector/healthcare` },
            { '@type': 'ListItem', position: 3, name: 'Healthcare Marketing Agency', item: `${SITE_URL}${PATH}` },
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
                        <Link href="/" className="hover:text-amber-500">Home</Link> / <Link href="/sector/healthcare" className="hover:text-amber-500">Healthcare</Link> / <span>Healthcare Marketing Agency</span>
                    </nav>
                    <h1 className="tracking-tight text-zinc-100 leading-tight text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl">
                        Healthcare Marketing Agency for <span className="text-amber-600 font-sora!">Doctors, Clinics &amp; Hospitals</span>
                    </h1>
                    <p className="text-zinc-200 text-[15px] font-light leading-relaxed max-w-2xl">
                        Wizards Next is a digital marketing agency in Varanasi with a strong healthcare practice. We help doctors, clinics and hospitals get found on Google, build a trustworthy presence on Instagram and YouTube, and turn that attention into booked appointments — for practices in Varanasi, in Hyderabad and across India.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/book" className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-[13px] font-medium text-zinc-950 hover:bg-amber-500">
                            Book a free call for your practice <ArrowRight size={14} />
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
                            src="/images/healthcare/healthcare-marketing-patient-journey.webp"
                            alt="Diagram of the four stages of healthcare marketing at Wizards Next: Found (Google Business Profile, local SEO, Google Ads), Trusted (patient-education reels, personal branding), Booked (clinic website with booking, calls and WhatsApp) and Measured (weekly and monthly reports)."
                            width={1200}
                            height={720}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto rounded-2xl border border-zinc-800"
                        />
                        <figcaption className="mt-3 text-[12.5px] font-light text-zinc-400">How a patient goes from a Google search or a reel to a booked appointment — and where each of our services fits.</figcaption>
                    </figure>
                </Wrapper>
            </Section>

            <Section tone="raised">
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-2">Marketing services for doctors, clinics and hospitals</h2>
                        <p className="text-zinc-300 text-[13.5px] font-light max-w-3xl">Start with one service or run them together. Medical inputs always come from you; we handle strategy, content, production, ads and reporting.</p>
                    </FadeUp>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {SERVICES.map((s) => (
                            <Link key={s.href} href={s.href} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-amber-600/40 transition-colors">
                                <h3 className="text-[15px] font-medium text-zinc-100 mb-1.5">{s.name}</h3>
                                <p className="text-[12.5px] font-light leading-relaxed text-zinc-300">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-2">Doctors we work with</h2>
                        <p className="text-zinc-300 text-[13.5px] font-light max-w-3xl">Real engagements, most of them with Hyderabad specialists — the same work we offer doctors and clinics in Varanasi. Website screenshots were captured live from each doctor’s own site.</p>
                    </FadeUp>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {DOCTORS.filter((d) => d.shot).map((d) => (
                            <article key={d.name} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden flex flex-col">
                                <figure>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={d.shot!.src} alt={d.shot!.alt} width={1200} height={750} loading="lazy" decoding="async" className="w-full h-auto border-b border-zinc-800" />
                                    <figcaption className="px-5 pt-2 text-[11px] text-zinc-500">Screenshot: <a href={d.website} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-amber-500">{d.website.replace('https://', '')}</a>, captured November 2026</figcaption>
                                </figure>
                                <div className="p-5 pt-3 flex flex-col gap-2 text-[13px] font-light leading-relaxed text-zinc-300">
                                    <h3 className="text-[16px] font-medium text-zinc-100">{d.name}</h3>
                                    <p className="text-amber-500 text-[12.5px]">{d.role} · {d.city}</p>
                                    {d.did && <p><span className="text-zinc-100">What we do: </span>{d.did}</p>}
                                    <p>{d.facts}</p>
                                    {d.slug ? (
                                        <Link href={`/our-works/${d.slug}`} className="mt-auto inline-flex items-center gap-1.5 text-amber-500 hover:text-amber-400 text-[13px]">Read the case study <ArrowRight size={13} /></Link>
                                    ) : (
                                        <a href={d.website} target="_blank" rel="noopener" className="mt-auto inline-flex items-center gap-1.5 text-amber-500 hover:text-amber-400 text-[13px]">Visit {d.website.replace(/^https:\/\/(www\.)?/, '')} <ExternalLink size={12} /></a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {MORE_DOCTORS.map((d) => (
                            <article key={d.name} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 flex flex-col gap-2 text-[13px] font-light leading-relaxed text-zinc-300">
                                <h3 className="text-[16px] font-medium text-zinc-100">{d.name}</h3>
                                <p className="text-amber-500 text-[12.5px]">{d.role ? `${d.role}${d.city ? ` · ${d.city}` : ''}` : 'Doctor client'}</p>
                                {d.about && <p>{d.about}</p>}
                                {d.website && (
                                    <a href={d.website} target="_blank" rel="noopener" className="mt-auto inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-500">{d.website.replace(/^https:\/\/(www\.)?/, '')} <ExternalLink size={12} /></a>
                                )}
                            </article>
                        ))}
                    </div>
                    <p className="text-[13px] text-zinc-300">
                        More on this work: <Link href="/healthcare-digital-marketing-hyderabad" className="underline underline-offset-2 hover:text-amber-500">digital marketing for doctors in Hyderabad</Link> and <Link href="/sector/healthcare" className="underline underline-offset-2 hover:text-amber-500">all our healthcare clients</Link>.
                    </p>
                </Wrapper>
            </Section>

            <Section tone="raised">
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-6!">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FadeUp>
                            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-3">Healthcare marketing in Varanasi</h2>
                            <div className="space-y-3 text-[13.5px] font-light leading-relaxed text-zinc-200">
                                <p>Our office is in Nirala Nagar, Mahmoorganj, so doctors, clinics and hospitals in Varanasi can sit down with us in person. Patients from Varanasi and nearby districts often find a doctor through Google Search, Google Maps or Instagram before they call, so those are the places a practice needs to show up well.</p>
                                <p>For a Varanasi practice we usually start with the basics that bring nearby patients: a complete, active Google Business Profile, local SEO for your treatments, and a regular, educational Instagram. See our <Link href="/digital-marketing-agency-varanasi" className="underline underline-offset-2 hover:text-amber-500">digital marketing agency in Varanasi</Link>, <Link href="/seo-services-varanasi" className="underline underline-offset-2 hover:text-amber-500">SEO services in Varanasi</Link> and <Link href="/social-media-marketing-agency-varanasi" className="underline underline-offset-2 hover:text-amber-500">social media marketing in Varanasi</Link>.</p>
                            </div>
                        </FadeUp>
                        <FadeUp>
                            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-3">Doctor marketing in Hyderabad</h2>
                            <div className="space-y-3 text-[13.5px] font-light leading-relaxed text-zinc-200">
                                <p>Several of our longest-running healthcare clients are Hyderabad specialists — gynaecologists, a dermatology clinic, a fertility clinic and a nephrologist. We work with Hyderabad practices remotely from Varanasi, over video calls, WhatsApp and shared reports; we do not have a Hyderabad office.</p>
                                <p>Read more on <Link href="/healthcare-digital-marketing-hyderabad" className="underline underline-offset-2 hover:text-amber-500">healthcare digital marketing in Hyderabad</Link>, <Link href="/seo-services-hyderabad" className="underline underline-offset-2 hover:text-amber-500">SEO for Hyderabad clinics</Link> and <Link href="/website-development-company-hyderabad" className="underline underline-offset-2 hover:text-amber-500">clinic websites in Hyderabad</Link>.</p>
                            </div>
                        </FadeUp>
                    </div>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-6!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">How we work with doctors and clinics</h2>
                        <ol className="list-decimal pl-5 space-y-2 text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                            <li>A free call to understand your specialty, your patients, your goals and your current presence on Google and social media.</li>
                            <li>A scoped proposal — often starting with one service, such as Google Business Profile and local SEO, or personal branding.</li>
                            <li>Content pillars and a monthly calendar built around your patients’ real questions. Medical inputs come from you, and content is reviewed against medical advertising guidelines before it goes live.</li>
                            <li>Shoots, edits, posting, ads and website work on a fixed weekly rhythm.</li>
                            <li>Plain-language weekly and monthly reports on rankings, enquiries and real post-level numbers — whichever way they move.</li>
                        </ol>
                        <div className="flex flex-wrap gap-3 mt-6">
                            <Link href="/book" className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-[13px] font-medium text-zinc-950 hover:bg-amber-500">
                                Book a free call <ArrowRight size={14} />
                            </Link>
                            <a href={'https://wa.me/918072199651?text=' + encodeURIComponent('Hi Wizards Next, I would like to know about healthcare marketing for my practice.')} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-[13px] text-zinc-200 hover:border-amber-600/50">
                                WhatsApp us <ExternalLink size={13} />
                            </a>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            <ServiceFAQ data={FAQ} />
            <ServiceCTA cityLinks={[{ href: '/digital-marketing-agency-varanasi', label: 'Digital marketing agency in Varanasi' }, { href: '/healthcare-digital-marketing-hyderabad', label: 'Healthcare marketing in Hyderabad' }]} />
        </main>
    )
}
