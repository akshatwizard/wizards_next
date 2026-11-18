import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import { ProjectCard } from '@/components/work'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceCTA from '@/components/services/service_cta'
import { clients } from '@/constant/clients'
import { SITE_URL, BUSINESS, SAME_AS, HAS_MAP } from '@/constant/site'
import { ServiceFAQType } from '@/types/service.types'
import { VARANASI_CLIENTS } from '@/constant/varanasi'

// City landing page for Varanasi — the only physical office. Every fact here
// comes from what the site already publishes (contact, about, FAQ, case studies).
const PATH = '/digital-marketing-agency-varanasi'
const ADDRESS = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`
const PHONE_DISPLAY = '+91 80721 99651'
const MAP_COORDS = `${BUSINESS.latitude},${BUSINESS.longitude}`


// `href` overrides /services/<slug> where a dedicated Varanasi page exists.
const SERVICES: { slug: string; name: string; desc: string; href?: string }[] = [
    { slug: 'social-media', href: '/social-media-marketing-agency-varanasi', name: 'Social media marketing', desc: 'Planning, reels, posting and community management for Instagram, Facebook and YouTube.' },
    { slug: 'seo-consultancy', href: '/seo-services-varanasi', name: 'SEO and local SEO', desc: 'Technical fixes, content and Google Business Profile work so Varanasi customers find you in Search and Maps.' },
    { slug: 'website-development', href: '/website-development-company-varanasi', name: 'Website development', desc: 'Fast, mobile-first websites and landing pages that turn visits into calls and WhatsApp enquiries.' },
    { slug: 'performance-marketing', href: '/performance-marketing-agency-varanasi', name: 'Performance marketing', desc: 'Paid campaigns planned around enquiries and sales, with spend tracked openly.' },
    { slug: 'google-meta-ads-management', href: '/google-ads-agency-varanasi', name: 'Google Ads', desc: 'Hands-on Search, Display and Shopping campaigns with weekly optimisation, alongside Meta ads.' },
    { slug: 'whatsapp-marketing', name: 'WhatsApp marketing', desc: 'Catalogues, broadcasts and automation on WhatsApp Business.' },
    { slug: 'brand-designing', href: '/branding-agency-varanasi', name: 'Branding', desc: 'Logo, identity and guidelines for new and established local brands.' },
    { slug: 'ecommerce-development', href: '/ecommerce-website-development-varanasi', name: 'E-commerce development', desc: 'Online stores with payments, COD and shipping across India.' },
]

const FAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Where is your Varanasi office?', a: `Our office is at ${ADDRESS}. We are open Monday to Saturday, 10am to 7pm IST. Call or WhatsApp ${PHONE_DISPLAY} before visiting so the right person is there.` },
        { q: 'What does digital marketing cost in Varanasi?', a: 'Social media management starts from ₹15,000 a month. Ad budgets are separate and usually start around ₹10,000 a month for meaningful reach. Every plan is scoped to your goals, not a fixed package.' },
        { q: 'Do you work with small local businesses in Varanasi?', a: 'Yes. Most of our Varanasi clients are local retailers, textile and saree brands, institutions and service businesses — several of them are featured on this page with real case studies.' },
        { q: 'Is there a long-term contract?', a: 'No lock-ins. We work on rolling monthly engagements.' },
        { q: 'Can you handle website, social media and ads together?', a: 'Yes. Wizards Next is a joint venture of a digital marketing practice and a web development practice, so branding, website, social media and ads run under one team.' },
        { q: 'Do you serve businesses outside Varanasi?', a: 'Yes. We run 50+ projects across India, including clients in Hyderabad, and work with overseas clients in the USA, Russia and Spain.' },
        { q: 'Are you a digital marketing company in Banaras (Kashi)?', a: 'Yes. Banaras, Kashi and Varanasi are the same city, and our office is in Shivpurwa, Mahmoorganj. Our clients include Banarasi saree and textile brands, a 55-year-old kitchenware retailer, a CBSE school, a mall and a 160-year-old college.' },
        { q: 'Do you run Google Ads for Varanasi businesses?', a: 'Yes. Our own team sets up and optimises Google Search, Display and Shopping campaigns, alongside Meta ads. See our Google Ads agency in Varanasi page for how it works.' },
        { q: 'Which areas of Varanasi do you work in?', a: 'All of Varanasi. Our clients have stores and offices in places like Sigra, Rathyatra, Bansphatak, Orderly Bazaar and Varanasi Airport, and our own office is in Shivpurwa.' },
    ],
}

export const metadata: Metadata = {
    title: 'Digital Marketing Agency in Varanasi (Banaras) | Wizards',
    description: `Varanasi digital marketing agency for social media, SEO, websites and Google & Meta ads. Office in Shivpurwa, Varanasi. Call ${PHONE_DISPLAY}.`,
    alternates: {
        canonical: PATH,
    },
}

export default function VaranasiPage() {
    const list = VARANASI_CLIENTS.map((s) => clients.find((c) => c.slug === s)).filter((c): c is NonNullable<typeof c> => !!c)

    const localBusinessJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}${PATH}#localbusiness`,
        name: 'Wizards Next LLP — Digital Marketing Agency in Varanasi',
        url: `${SITE_URL}${PATH}`,
        image: `${SITE_URL}/images/brand/logo.webp`,
        logo: `${SITE_URL}/images/brand/logo.webp`,
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        priceRange: '₹₹',
        address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS.streetAddress,
            addressLocality: BUSINESS.addressLocality,
            addressRegion: BUSINESS.addressRegion,
            postalCode: BUSINESS.postalCode,
            addressCountry: BUSINESS.addressCountry,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS.latitude,
            longitude: BUSINESS.longitude,
        },
        hasMap: HAS_MAP,
        openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '10:00',
            closes: '19:00',
        }],
        areaServed: { '@type': 'City', name: 'Varanasi' },
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
        sameAs: SAME_AS,
        makesOffer: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: `${SITE_URL}${s.href ?? `/services/${s.slug}`}` } })),
    }
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Digital Marketing Agency in Varanasi', item: `${SITE_URL}${PATH}` },
        ],
    }

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c') }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }} />

            {/* Hero — no fade-in on the heading/intro so it paints immediately (LCP). */}
            <Section className="relative text-zinc-200">
                <Wrapper className="lg:pt-32 md:pt-28 pt-24 lg:pb-14 md:pb-12 pb-10 gap-6!">
                    <nav aria-label="Breadcrumb" className="text-[12px] text-zinc-400">
                        <Link href="/" className="hover:text-amber-500">Home</Link> / <span>Varanasi</span>
                    </nav>
                    <h1 className="tracking-tight text-zinc-100 leading-tight text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl">
                        Digital Marketing Agency in <span className="text-amber-600 font-sora!">Varanasi</span>
                    </h1>
                    <p className="text-zinc-200 text-[15px] font-light leading-relaxed max-w-2xl">
                        Wizards Next LLP is a Varanasi-based digital marketing and web development agency. We help local retailers, brands, institutions and professionals get found on Google, grow on Instagram and turn online attention into calls, WhatsApp enquiries and walk-ins — from our office in Shivpurwa.
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

            {/* Why a Varanasi agency */}
            <Section tone="raised">
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Why businesses in Varanasi work with us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-[13.5px] font-light leading-relaxed text-zinc-200">
                            <p><span className="block text-zinc-100 font-medium mb-1">Local, in person</span>Our team is in Varanasi. Shoots, store visits and strategy meetings happen face to face, and we know how Banaras customers search and buy.</p>
                            <p><span className="block text-zinc-100 font-medium mb-1">Marketing and tech, one team</span>Formed in June 2023 as a joint venture of JR Digital Marketing Services and Arushi Inforbit Solutions, with 24+ years of combined experience.</p>
                            <p><span className="block text-zinc-100 font-medium mb-1">Reported plainly</span>Monthly reporting on what actually moved — enquiries, rankings and real post-level numbers — whichever direction they go.</p>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            {/* Services */}
            <Section>
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100">Digital marketing services in Varanasi</h2>
                    </FadeUp>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {SERVICES.map((s) => (
                            <Link key={s.slug} href={s.href ?? `/services/${s.slug}`} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-amber-600/40 transition-colors">
                                <h3 className="text-[15px] font-medium text-zinc-100 mb-1.5">{s.name}</h3>
                                <p className="text-[12.5px] font-light leading-relaxed text-zinc-300">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-[13px] text-zinc-300">
                        See all <Link href="/services" className="underline underline-offset-2 hover:text-amber-500">19 services</Link>, the <Link href="/sector" className="underline underline-offset-2 hover:text-amber-500">sectors we work in</Link>, or our <Link href="/healthcare-marketing-agency" className="underline underline-offset-2 hover:text-amber-500">healthcare marketing for doctors and clinics in Varanasi</Link>.
                    </p>
                </Wrapper>
            </Section>

            {/* Varanasi clients — real case studies */}
            {list.length > 0 && (
                <Section tone="raised">
                    <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                        <FadeUp>
                            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-2">Varanasi businesses we work with</h2>
                            <p className="text-zinc-300 text-[13px] font-light">Real engagements — open any profile to see the work and results.</p>
                        </FadeUp>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {list.map((client) => <ProjectCard key={client.slug} client={client} />)}
                        </div>
                    </Wrapper>
                </Section>
            )}

            {/* Real results — every figure is from the case studies in constant/clients.ts */}
            <Section>
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-2">Results for Varanasi businesses</h2>
                        <p className="text-zinc-300 text-[13px] font-light mb-5">Every number below comes from the client’s own Instagram, Facebook, YouTube or Google Search Console data.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[13.5px] font-light leading-relaxed text-zinc-200">
                            <p><Link href="/our-works/gd-sons" className="block text-zinc-100 font-medium mb-1 hover:text-amber-500">Girdhar Das and Sons</Link>A 55-year-old Varanasi kitchenware and appliance retailer we have worked with since 2023. Consistent social media first brought more people into the physical store; online payments, cash on delivery and shipping across India went live in December 2025, and daily orders now arrive from across the country. 10,000+ Instagram followers, 14,000+ on Facebook, 5,100+ YouTube subscribers, and 19.8K clicks from 2.09M Google impressions in a year.</p>
                            <p><Link href="/our-works/dhanuka-silks" className="block text-zinc-100 font-medium mb-1 hover:text-amber-500">Dhanuka Silks</Link>Built from zero followers to 18K+ on Instagram with 1,200+ posts in about two and a half years, including a viral campaign for the 8th showroom launch at Orderly Bazaar, inaugurated by Shilpa Shetty, and festival campaigns for Diwali, Holi, Raksha Bandhan and New Year. Content is shot twice a month across their stores.</p>
                            <p><Link href="/our-works/harish-chandra-pg-college" className="block text-zinc-100 font-medium mb-1 hover:text-amber-500">Harish Chandra Post Graduate College</Link>Our oldest website partnership, since 2013, for a 160-year-old Varanasi institution: 796,604 clicks and 33.2 million Google impressions in 16 months, with branded searches at position 1.1–1.3.</p>
                            <p><Link href="/our-works/gnsr-textiles" className="block text-zinc-100 font-medium mb-1 hover:text-amber-500">GNSR Textiles</Link>A new Varanasi store with an old textile legacy, taken from zero to 7K+ Instagram followers in about 18 months, with the owner and his father as the faces of the brand and pan-India orders through Instagram.</p>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            {/* How we work + digital advertising + areas */}
            <Section tone="raised">
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-6!">
                    <FadeUp>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mb-4">How we work with Varanasi businesses</h2>
                        <ol className="list-decimal pl-5 space-y-2 text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                            <li>A free exploration call, or a visit to our Shivpurwa office, to understand your business, customers and goals.</li>
                            <li>A scoped proposal, usually starting with one or two services such as social media and a website, priced per month with no lock-in.</li>
                            <li>Shoots at your store, showroom or campus, with a monthly content calendar planned with you.</li>
                            <li>Publishing, replies to comments and DMs, and ads managed by the same team, with weekly optimisation.</li>
                            <li>A plain monthly report on enquiries, rankings and real post-level numbers, whichever way they move, and next month’s plan built from it.</li>
                        </ol>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mt-10 mb-4">A digital advertising agency in Varanasi</h2>
                        <div className="space-y-3 text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">
                            <p>Paid ads work best on top of a business people already trust online. We run <Link href="/google-ads-agency-varanasi" className="underline underline-offset-2 hover:text-amber-500">Google Ads in Varanasi</Link> for high-intent searches, and Meta ads on Instagram and Facebook for reach and retargeting, with conversion tracking set up before any budget is spent. The wider plan across channels is our <Link href="/performance-marketing-agency-varanasi" className="underline underline-offset-2 hover:text-amber-500">performance marketing service in Varanasi</Link>.</p>
                            <p>Organic search is the other half: <Link href="/seo-services-varanasi" className="underline underline-offset-2 hover:text-amber-500">SEO and local SEO in Varanasi</Link>, including Google Business Profile work, so customers find you on Google Search and Maps without paying for every click. A fast <Link href="/website-development-company-varanasi" className="underline underline-offset-2 hover:text-amber-500">website built in Varanasi</Link> turns those visits into calls and WhatsApp enquiries.</p>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100 mt-10 mb-4">Across Banaras</h2>
                        <p className="text-[13.5px] font-light leading-relaxed text-zinc-200 max-w-3xl">Banaras, Kashi or Varanasi, our clients are spread across the city: Dhanuka Silks has stores at Rathyatra, Bansphatak, Orderly Bazaar and Varanasi Airport, Armonia is in Sigra, and our own office is in Shivpurwa, Mahmoorganj. We work with Banarasi saree and textile brands, retailers, schools and colleges, a mall, a cold-pressed mustard oil maker and service businesses, and with the same team for clients across India, including <Link href="/digital-marketing-agency-hyderabad" className="underline underline-offset-2 hover:text-amber-500">Hyderabad</Link>.</p>
                    </FadeUp>
                </Wrapper>
            </Section>

            {/* Visit / NAP + map */}
            <Section>
                <Wrapper className="lg:py-14 md:py-12 py-10 gap-8!">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
                        <div className="flex flex-col gap-4 text-[13.5px] text-zinc-200">
                            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-zinc-100">Visit our Varanasi office</h2>
                            <p className="font-medium text-zinc-100">Wizards Next LLP</p>
                            <p className="flex gap-2"><MapPin size={16} className="text-amber-600 shrink-0 mt-0.5" />{ADDRESS}</p>
                            <a href="tel:+918072199651" className="flex gap-2 hover:text-amber-500"><Phone size={16} className="text-amber-600 shrink-0 mt-0.5" />{PHONE_DISPLAY}</a>
                            <a href={`mailto:${BUSINESS.email}`} className="flex gap-2 hover:text-amber-500"><Mail size={16} className="text-amber-600 shrink-0 mt-0.5" />{BUSINESS.email}</a>
                            <p className="flex gap-2"><Clock size={16} className="text-amber-600 shrink-0 mt-0.5" />Mon – Sat, 10am – 7pm IST</p>
                            <div className="flex flex-wrap gap-3 mt-1">
                                <a href="https://share.google/zYiIe2jRbaZmqOOWi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-600 text-sm text-zinc-950 font-medium hover:bg-amber-500">
                                    <MapPin size={15} /> View on Google
                                </a>
                                <a href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_COORDS}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-700 text-sm text-zinc-200 hover:border-amber-600/50">
                                    Get directions →
                                </a>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-4/3 md:aspect-video w-full">
                            <iframe
                                title="Wizards Next LLP, Varanasi on Google Maps"
                                src={`https://www.google.com/maps?q=${MAP_COORDS}&z=17&output=embed`}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full border-0"
                            />
                        </div>
                    </div>
                </Wrapper>
            </Section>

            <ServiceFAQ data={FAQ} />
            <ServiceCTA />
        </main>
    )
}
