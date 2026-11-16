import { Metadata } from 'next'
import Link from 'next/link'
import ClinicNichePage, { ClinicNicheConfig } from '@/components/niche/clinic_niche_page'

// HY-6. Proof: Clinica Derm (website + full-scope SEO since Aug 2024, GSC
// figures in constant/clients.ts) and Dr Pranathi Ravipathi (hair transplant
// and facial aesthetics; Facebook, Instagram, YouTube).
const PATH = '/dermatology-clinic-marketing-agency'
const L = 'underline underline-offset-2 hover:text-amber-500'

export const metadata: Metadata = {
    title: 'Dermatology & Skin Clinic Marketing Agency | SEO, Website & Social',
    description: 'Dermatology clinic marketing: treatment-page SEO, clinic websites, Instagram and YouTube. For Clinica Derm, average Google position moved from 35.3 to 7.9.',
    alternates: { canonical: PATH },
}

const config: ClinicNicheConfig = {
    path: PATH,
    serviceName: 'Dermatology Clinic Marketing',
    h1: <>Dermatology &amp; Skin Clinic <span className="text-amber-600 font-sora!">Marketing Agency</span></>,
    intro: 'Digital marketing for dermatology, skin and hair clinics: SEO for treatment and condition pages, clinic websites, Instagram and YouTube. Since August 2024 we have managed the website and full-scope SEO for Clinica Derm, Dr. Deepthi Atmakuri’s skin and hair clinic in Banjara Hills, Hyderabad, where average Google search position moved from 35.3 to a low of 7.9 (Google Search Console). We work from our office in Varanasi.',
    points: [
        { title: 'Treatment pages that match real searches', body: 'Skin and hair patients search by concern and treatment: acne, pigmentation, hair fall, laser, PRP. Keyword research is done with the clinic and against competitor pages, and every new treatment or blog page follows that demand.' },
        { title: 'Ranking for the city, not just the name', body: 'Branded searches are easy. For Clinica Derm, competitive non-branded terms now rank around the top five: “dermatologist hyderabad” at around 4.5 and “best dermatologist hyderabad” at around 5.0.' },
        { title: 'Reported every week', body: 'Clinica Derm gets a performance report every week and a full audit every month, with backlink building handled by a dedicated team member.' },
    ],
    clientSlugs: ['clinica-derm'],
    clientsNote: 'Clinica Derm, Banjara Hills, Hyderabad: website and full-scope SEO since August 2024. 7,083 clicks and 1.18 million impressions on Google Search over 16 months, 5,407 of those clicks from mobile. Social media is not part of this engagement; Dr. Atmakuri runs her own accounts.',
    otherDoctors: [
        { name: 'Dr Pranathi Ravipathi', role: 'hair transplant and facial aesthetic surgery, Hyderabad', did: 'We manage her Facebook, Instagram and YouTube channel.' },
    ],
    services: [
        { href: '/services/seo-consultancy', name: 'SEO for skin clinics', desc: 'Treatment and condition pages, technical SEO, structured data and backlink building, with weekly reports.' },
        { href: '/services/website-development', name: 'Dermatology clinic websites', desc: 'Photography-led, mobile-first sites with doctor credentials, treatment grids, and call, WhatsApp and booking buttons.' },
        { href: '/services/social-media', name: 'Instagram and YouTube', desc: 'Treatment explainers and patient-education reels, published on a weekly rhythm.' },
        { href: '/services/personal-branding-for-doctors', name: 'Personal branding for dermatologists', desc: 'The doctor’s own name and credentials as the brand, with guideline-aware content.' },
        { href: '/services/google-meta-ads-management', name: 'Google and Meta ads', desc: 'Campaigns for consultations, within platform healthcare policies and with tracking set up first.' },
        { href: '/services/whatsapp-marketing', name: 'WhatsApp enquiries', desc: 'WhatsApp Business setup and quick replies so enquiries are answered.' },
    ],
    sections: [
        {
            heading: 'What dermatology clinic marketing covers',
            paras: [
                'A skin clinic competes with every other clinic in the city on the same handful of searches. The clinics that win usually have three things: treatment pages with real depth, a doctor whose credentials are visible on every page, and a site that works well on a phone. On Clinica Derm, the site’s average position on mobile is 8.69 against 32.16 on desktop, and most clicks come from mobile.',
                <>Before-and-after content needs care: patient consent, privacy and no exaggerated claims. Medical facts always come from the doctor. See the full <Link href="/our-works/clinica-derm" className={L}>Clinica Derm case study</Link> and <Link href="/seo-services-hyderabad" className={L}>SEO for doctors in Hyderabad</Link>.</>,
            ],
        },
    ],
    faq: {
        faq_list: [
            { q: 'What results have you delivered for a dermatology clinic?', a: 'For Clinica Derm in Banjara Hills, Hyderabad, average Google search position moved from 35.3 in May 2025 to a low of 7.9 in March 2026 and has held in the 8–17 range through 2026; “dermatologist hyderabad” ranks around 4.5 (Google Search Console).' },
            { q: 'Do you work with skin clinics outside Hyderabad?', a: 'Yes. Our current dermatology client is in Hyderabad and we work remotely from Varanasi; the same setup works for clinics in any city.' },
            { q: 'Do you do hair transplant clinic marketing?', a: 'Yes. We manage Facebook, Instagram and YouTube for Dr Pranathi Ravipathi, who works in hair transplant and facial aesthetic surgery in Hyderabad.' },
            { q: 'What does it cost?', a: 'Social media management starts from ₹15,000 a month and personal branding for doctors from ₹40,000. SEO and website work are scoped after a free exploration call.' },
            { q: 'Do you have an office in Hyderabad?', a: 'No. Our only office is in Varanasi. We work with clinics in Hyderabad and elsewhere remotely.' },
        ],
    },
}

export default function Page() {
    return <ClinicNichePage c={config} />
}
