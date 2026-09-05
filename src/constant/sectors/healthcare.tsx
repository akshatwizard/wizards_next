import {
    Stethoscope, Globe, Share2, Search, BarChart3,
    Star, ShieldCheck, Clock, Users, TrendingUp,
    Hospital, Activity, Pill, FlaskConical, Eye,
    HeartPulse, MessageSquare, Smartphone, Award,
    CheckCircle2,
} from 'lucide-react'
import type { SectorPageData } from '@/types/sector.types'
import type { ServiceTestimonialsType, ServiceFAQType } from '@/types/service.types'
import { FadeUp } from '@/components/ui/motion_components'

// ─── Hero ──────────────────────────────────────────────────────

export const HealthcareSectorHero = {
    badge: 'Healthcare',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium" >
            Digital growth for{' '}
            <span className="text-amber-500">healthcare brands</span>{' '}
            that patients trust
        </h1>
    ),
    subheading: 'We help hospitals, clinics, diagnostic labs, and individual practitioners build a credible online presence — so patients find you before they find your competitor.',
    primaryCta: { label: 'Grow my practice', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '#projects' },
    tags: ['Hospitals', 'Clinics', 'Doctors', 'Diagnostic Labs', 'Pharmacies', 'Wellness Centres'],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div aria-hidden className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-20">
                        <Globe size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
                <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-amber-600/60" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl">
                <p className="font-syne text-xl font-black text-amber-500 leading-none">2.1s</p>
                <p className="text-[9px] text-zinc-500 mt-0.5 uppercase tracking-widest">Avg load time</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl">
                <p className="font-syne text-xl font-black text-amber-500 leading-none">120+</p>
                <p className="text-[9px] text-zinc-500 mt-0.5 uppercase tracking-widest">Sites launched</p>
            </div>
        </FadeUp>
    )
}

// ─── For Whom ──────────────────────────────────────────────────

export const HealthcareSectorAudience = {
    badge: 'Who is this for',
    heading: (
        <>
            Built for every corner of{' '}
            <span className="text-amber-500">healthcare</span>
        </>
    ),
    subheading:
        "Whether you're a solo practitioner or a 200-bed hospital, digital presence is no longer optional — it's how patients decide who to trust.",
    cards: [
        {
            icon: Hospital,
            title: 'Hospitals & Nursing Homes',
            desc: 'Multi-speciality and single-speciality hospitals that need a website, patient portal, and appointment booking system that works 24/7.',
        },
        {
            icon: Stethoscope,
            title: 'Individual Doctors & Specialists',
            desc: 'Build a personal brand that ranks on Google when patients search your speciality in your city. Own your reputation online.',
        },
        {
            icon: FlaskConical,
            title: 'Diagnostic Labs & Pathology',
            desc: 'Drive test bookings online, showcase accreditations, and reach patients searching for home collection or walk-in services.',
        },
        {
            icon: Pill,
            title: 'Pharmacies & Medical Stores',
            desc: 'Establish local SEO, build Google reviews, and run targeted campaigns to pull footfall to your store.',
        },
        {
            icon: Activity,
            title: 'Wellness & Rehabilitation',
            desc: 'Yoga studios, physio clinics, and mental wellness centres that need content marketing and social media to build a community.',
        },
        {
            icon: Eye,
            title: 'Dental & Eye Clinics',
            desc: 'High-competition specialities where a strong review profile and local SEO can consistently fill your appointment calendar.',
        },
    ],
}

// ─── Services ──────────────────────────────────────────────────

export const HealthcareSectorServices = {
    badge: 'What we do for you',
    heading: (
        <>
            Every service your practice{' '}
            <span className="text-amber-500">needs to grow</span>
        </>
    ),
    subheading:
        'We combine web, SEO, social, and paid media into one growth system tailored specifically for healthcare compliance and patient behaviour.',
    items: [
        {
            icon: Globe,
            title: 'Healthcare Website Design',
            desc: 'NABH-compliant, mobile-first websites with appointment booking, doctor profiles, department pages, and patient resources.',
            tags: ['Next.js', 'Booking Integration', 'CMS'],
        },
        {
            icon: Search,
            title: 'Local SEO & Google Maps',
            desc: 'Rank on the first page when patients search "best cardiologist near me" or "diagnostic lab in Varanasi". We optimise and manage your GMB profile.',
            tags: ['Google My Business', 'Local SEO', 'Citations'],
        },
        {
            icon: Share2,
            title: 'Social Media Management',
            desc: 'Health awareness posts, doctor spotlight reels, patient testimonials, and seasonal health campaigns — consistent, compliant, and engaging.',
            tags: ['Instagram', 'Facebook', 'Reels'],
        },
        {
            icon: BarChart3,
            title: 'Google & Meta Ads',
            desc: 'Performance campaigns for OPD footfall, diagnostic test bookings, and specialist consultations — cost-per-lead tracked to the rupee.',
            tags: ['Google Ads', 'Meta Ads', 'Lead Gen'],
        },
        {
            icon: Star,
            title: 'Online Reputation Management',
            desc: "Build and protect your review profile across Google, Practo, and Justdial. We help you respond to reviews and grow your rating systematically.",
            tags: ['Google Reviews', 'Practo', 'ORM'],
        },
        {
            icon: MessageSquare,
            title: 'Content & Health Blogging',
            desc: 'SEO-optimised articles, patient FAQs, and educational content that positions your doctors as trusted voices in their speciality.',
            tags: ['Blog', 'SEO Content', 'Patient Education'],
        },
    ],
}

// ─── Stats ─────────────────────────────────────────────────────

export const HealthcareSectorStats = {
    stats: [
        { value: '30+', label: 'Healthcare clients', sublabel: 'Across UP & beyond' },
        { value: '4.2×', label: 'Avg patient enquiry growth', sublabel: 'Within 6 months' },
        { value: '#1', label: 'Google rankings achieved', sublabel: 'For local speciality searches' },
        { value: '98%', label: 'Client retention rate', sublabel: 'Healthcare vertical' },
    ],
}

// ─── Case Studies ──────────────────────────────────────────────

export const HealthcareSectorCaseStudy = {
    badge: 'Case studies',
    heading: (
        <>
            Practices we&apos;ve helped{' '}
            <span className="text-amber-500">grow</span>
        </>
    ),
    subheading: 'Every number is from real analytics — not our pitch deck.',
    items: [
        {
            client: 'Dr. Ankita Chauhan',
            result: '2.4K Instagram followers in 90 days',
            metric: '0→2.4K',
            metricLabel: 'Followers',
            desc: "Gynaecologist with zero social presence. We built her personal brand on Instagram with reels, health tips, and patient stories — now she gets 8–10 direct appointment DMs daily.",
            tags: ['Personal Brand', 'Instagram', 'Reels'],
        },
        {
            client: 'Varanasi Diagnostics',
            result: '3× increase in test bookings',
            metric: '3×',
            metricLabel: 'Bookings',
            desc: 'Redesigned website with online test booking, home collection scheduler, and Google Ads campaigns targeting high-intent searches like "CBC test near me".',
            tags: ['Website', 'Google Ads', 'Booking System'],
        },
        {
            client: 'City Dental Clinic',
            result: 'From 3.2★ to 4.7★ on Google',
            metric: '4.7★',
            metricLabel: 'Google Rating',
            desc: 'Reputation recovery campaign — we set up a systematic review collection process, responded to all existing negative reviews, and ran local SEO to reclaim the top-3 map pack.',
            tags: ['ORM', 'Local SEO', 'Google Maps'],
        },
    ],
}

// ─── Projects ──────────────────────────────────────────────────

export const HealthcareSectorProjects = {
    badge: 'Projects',
    heading: (
        <>
            Work we&apos;ve done in{' '}
            <span className="text-amber-500">healthcare</span>
        </>
    ),
    subheading: 'A snapshot of websites, campaigns, and brands we\'ve built for healthcare clients.',
    items: [
        {
            name: 'Dr. Ankita Chauhan',
            type: 'Personal Brand Website',
            tags: ['Next.js', 'Appointment Booking', 'Blog'],
        },
        {
            name: 'Varanasi Diagnostics',
            type: 'Diagnostic Lab Website',
            tags: ['Next.js', 'Online Booking', 'SEO'],
        },
        {
            name: 'City Dental Clinic',
            type: 'Clinic Website',
            tags: ['WordPress', 'Local SEO', 'GMB'],
        },
        {
            name: 'LifeCare Hospital',
            type: 'Hospital Website',
            tags: ['Next.js', 'Patient Portal', 'CMS'],
        },
        {
            name: 'Arogya Wellness',
            type: 'Wellness Centre',
            tags: ['Branding', 'Instagram', 'Meta Ads'],
        },
        {
            name: 'PrimePhysio Clinic',
            type: 'Physiotherapy Brand',
            tags: ['Social Media', 'Reels', 'Google Ads'],
        },
    ],
}

// ─── Mid CTA ───────────────────────────────────────────────────

export const HealthcareSectorMidCTA = {
    heading: (
        <>
            Ready to fill your{' '}
            <span className="text-amber-500">appointment calendar?</span>
        </>
    ),
    subheading:
        'We offer a free 30-minute digital audit for healthcare practices. Tell us where you are — we\'ll show you exactly where patients are dropping off.',
    primaryCta: { label: 'Book a free audit', href: '/contact' },
    secondaryCta: { label: 'WhatsApp us', href: 'https://wa.me/919876543210' },
}

// ─── Clients ───────────────────────────────────────────────────

export const HealthcareSectorClients = {
    badge: 'Our healthcare clients',
    heading: (
        <>
            Practices that chose to{' '}
            <span className="text-amber-500">grow with us</span>
        </>
    ),
    items: [
        { initials: 'DA', name: 'Dr. Ankita Chauhan', type: 'Gynaecologist', location: 'Varanasi' },
        { initials: 'VD', name: 'Varanasi Diagnostics', type: 'Diagnostic Lab', location: 'Varanasi' },
        { initials: 'CD', name: 'City Dental Clinic', type: 'Dental Clinic', location: 'Varanasi' },
        { initials: 'LC', name: 'LifeCare Hospital', type: 'Multi-speciality Hospital', location: 'Lucknow' },
        { initials: 'AW', name: 'Arogya Wellness', type: 'Wellness Centre', location: 'Varanasi' },
        { initials: 'PP', name: 'PrimePhysio', type: 'Physiotherapy Clinic', location: 'Gorakhpur' },
        { initials: 'SR', name: 'Sunrise Radiology', type: 'Radiology Centre', location: 'Varanasi' },
        { initials: 'DM', name: 'Dr. Manish Eye Care', type: 'Eye Clinic', location: 'Allahabad' },
    ],
}

// ─── Trust / Why Wizards ───────────────────────────────────────

export const HealthcareSectorTrust = {
    badge: 'Why Wizards',
    heading: (
        <>
            We understand how{' '}
            <span className="text-amber-500">healthcare patients</span>{' '}
            think online
        </>
    ),
    subheading:
        "Healthcare marketing is different. Patients aren't just buying a product — they're trusting you with their health. Everything we create is built around that trust.",
    points: [
        {
            icon: ShieldCheck,
            title: 'Compliant & ethical content',
            desc: 'We follow NMC guidelines — no unverified claims, no before/after without consent, no misleading statistics.',
        },
        {
            icon: HeartPulse,
            title: 'Patient-first messaging',
            desc: 'We write for patients, not for doctors. Simple language, empathetic tone, clear call-to-action.',
        },
        {
            icon: Clock,
            title: 'Local & hyperlocal expertise',
            desc: 'We know the Varanasi and UP healthcare market. We know which platforms patients use and what searches drive actual footfall.',
        },
        {
            icon: TrendingUp,
            title: 'Results you can measure',
            desc: 'Every campaign has tracked KPIs — OPD enquiries, test bookings, website visits, appointment calls. No vanity metrics.',
        },
    ],
}

// ─── Testimonials ──────────────────────────────────────────────

export const HealthcareSectorTestimonials: ServiceTestimonialsType = {
    testimonial_list: [
        {
            quote: "Wizards Next completely transformed our digital presence. Our Instagram went from 200 to 2,400 followers in 3 months and I now get 8–10 appointment enquiries daily through DMs alone.",
            name: 'Dr. Ankita Chauhan',
            role: 'Gynaecologist, Varanasi',
            initials: 'DA',
            rating: 5,
        },
        {
            quote: "We were struggling to compete with bigger labs online. After Wizards revamped our website and started Google Ads, our daily test bookings tripled within 60 days.",
            name: 'Rajiv Sinha',
            role: 'Director, Varanasi Diagnostics',
            initials: 'RS',
            rating: 5,
        },
        {
            quote: "Our Google rating went from 3.2 to 4.7 stars. Patients actually mention they chose us because of our online reviews now. Couldn't have done that without the Wizards team.",
            name: 'Dr. Priya Tiwari',
            role: 'City Dental Clinic',
            initials: 'PT',
            rating: 5,
        },
    ],
}

// ─── FAQ ───────────────────────────────────────────────────────

export const HealthcareSectorFAQ: ServiceFAQType = {
    faq_list: [
        {
            q: 'Can you help a solo doctor build a personal brand?',
            a: 'Absolutely. Personal branding for individual doctors is one of our specialities — we handle everything from Instagram content to a personal website and Google presence.',
        },
        {
            q: 'Is healthcare marketing legally restricted?',
            a: 'Yes, the NMC (National Medical Commission) has guidelines on what can and cannot be advertised. We follow these strictly — no unverified claims, no testimonials that violate guidelines.',
        },
        {
            q: 'How quickly will we see results from Google Ads?',
            a: 'Google Ads campaigns go live within 48 hours and typically start generating enquiries in the first week. SEO takes 3–6 months for meaningful ranking improvements.',
        },
        {
            q: 'Do you work with hospitals outside Varanasi?',
            a: 'Yes — we have healthcare clients in Lucknow, Gorakhpur, Allahabad, and Delhi. All work is done remotely with regular video reviews.',
        },
        {
            q: 'Can you help with appointment booking integration?',
            a: 'Yes. We integrate booking systems (custom-built or third-party like Calendly, Practo widget, or WhatsApp Business) directly into the website.',
        },
        {
            q: 'How do you handle sensitive patient content?',
            a: 'Any patient testimonials or case content is only used with written consent. All content is reviewed against NMC and IMA guidelines before publishing.',
        },
    ],
}

// ─── Full page data export ─────────────────────────────────────

export const HealthcareSectorData: SectorPageData = {
    hero: HealthcareSectorHero,
    audience: HealthcareSectorAudience,
    services: HealthcareSectorServices,
    stats: HealthcareSectorStats,
    caseStudy: HealthcareSectorCaseStudy,
    projects: HealthcareSectorProjects,
    midCTA: HealthcareSectorMidCTA,
    clients: HealthcareSectorClients,
    trust: HealthcareSectorTrust,
    testimonials: HealthcareSectorTestimonials,
    faq: HealthcareSectorFAQ,
}