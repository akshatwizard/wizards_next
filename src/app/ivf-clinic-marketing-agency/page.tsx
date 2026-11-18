import { Metadata } from 'next'
import Link from 'next/link'
import ClinicNichePage, { ClinicNicheConfig } from '@/components/niche/clinic_niche_page'

// HY-6. Proof: Dr Aradhya Achuri (IVF clinic, Instagram) and Dr Shaivalini
// Kamarapu (fertility specialist, Instagram + WhatsApp). No results claimed
// beyond what constant/clients.ts and the healthcare page already publish.
const PATH = '/ivf-clinic-marketing-agency'
const L = 'underline underline-offset-2 hover:text-amber-500'

export const metadata: Metadata = {
    title: 'IVF & Fertility Clinic Marketing Agency in India',
    description: 'Digital marketing for IVF and fertility clinics: patient-education reels, clinic websites, treatment-page SEO, WhatsApp enquiries and guideline-aware ads.',
    alternates: { canonical: PATH },
}

const config: ClinicNicheConfig = {
    path: PATH,
    serviceName: 'IVF Clinic Marketing',
    h1: <>IVF &amp; Fertility Clinic <span className="text-amber-600 font-sora!">Marketing Agency</span></>,
    intro: 'Digital marketing for IVF and fertility clinics in India: patient-education content for Instagram and YouTube, clinic websites with clear treatment pages, SEO, WhatsApp enquiry handling and, where it fits, Google and Meta ads. We manage social media for Dr Aradhya Achuri’s IVF and fertility clinic and the Instagram and WhatsApp presence of fertility specialist Dr Shaivalini Kamarapu, both in Hyderabad, from our office in Varanasi.',
    points: [
        { title: 'Education before enquiry', body: 'Fertility decisions take months, not minutes. Couples read and watch a lot before they call. So the core of the work is plain-language content on IVF, IUI, ICSI, egg and sperm freezing and related questions, published on a steady weekly rhythm.' },
        { title: 'Careful with claims', body: 'Fertility marketing is sensitive. We do not publish guaranteed outcomes or invented success rates, and we take care with patient stories, consent and privacy. Medical facts come from the doctor; we handle the production and the publishing.' },
        { title: 'Enquiries that go somewhere', body: 'Every post, page and ad should lead to a call, a WhatsApp chat or a booked consultation. That is why we run WhatsApp presence alongside Instagram for Dr Shaivalini Kamarapu, and why clinic websites get call, WhatsApp and booking buttons up front.' },
    ],
    clientSlugs: ['dr-aradhya-achuri'],
    clientsNote: 'Dr Aradhya Achuri runs an IVF and fertility clinic in Hyderabad (IVF, IUI, ICSI, egg and sperm freezing); we manage her Instagram, where her account has 30K+ followers and 1,200+ posts. Her website runs a large patient-education library on fertility and women’s health.',
    otherDoctors: [
        { name: 'Dr Shaivalini Kamarapu', role: 'senior consultant gynaecologist, fertility specialist and laparoscopic surgeon at AMVI Hospitals, Hyderabad', did: 'We manage her Instagram and WhatsApp presence. The hospital is not our client; the work is for the doctor’s own profile.' },
    ],
    services: [
        { href: '/services/social-media', name: 'Instagram, Facebook and YouTube', desc: 'Monthly calendars, patient-education reels and posts, publishing, and replies to comments and DMs.' },
        { href: '/services/personal-branding-for-doctors', name: 'Personal branding for fertility specialists', desc: 'The doctor’s own name and voice as the brand, with guideline-aware scripts and shooting guidance.' },
        { href: '/services/website-development', name: 'Fertility clinic websites', desc: 'Fast, mobile-first sites with treatment pages, doctor profiles, and call, WhatsApp and booking buttons.' },
        { href: '/services/seo-consultancy', name: 'SEO for IVF treatment pages', desc: 'Pages built around what couples actually search, such as IVF cost, IUI, egg freezing, plus the clinic’s city or area.' },
        { href: '/services/whatsapp-marketing', name: 'WhatsApp enquiries', desc: 'WhatsApp Business setup, quick replies and broadcasts so enquiries from social media and the website are answered.' },
        { href: '/services/google-meta-ads-management', name: 'Google and Meta ads', desc: 'Campaigns for consultations, set up within platform healthcare policies and with tracking in place first.' },
    ],
    sections: [
        {
            heading: 'What IVF clinic marketing covers',
            paras: [
                'Most fertility clinics need the same three things: to be found when a couple first searches, to be trusted while they research, and to be easy to reach when they are ready. Search and Google Business Profile handle the first. Content on Instagram, YouTube and the website handles the second. Clear call, WhatsApp and booking paths handle the third.',
                <>Fertility work sits inside our wider healthcare practice: several of our doctor clients are gynaecologists and fertility specialists in Hyderabad. See <Link href="/healthcare-digital-marketing-hyderabad" className={L}>healthcare digital marketing in Hyderabad</Link> and our <Link href="/our-works/dr-aradhya-achuri" className={L}>Dr Aradhya Achuri profile</Link>.</>,
            ],
        },
    ],
    faq: {
        faq_list: [
            { q: 'Do you work with IVF clinics outside Hyderabad?', a: 'Yes. Our fertility clients today are in Hyderabad, and we work with them remotely from Varanasi. The same remote setup (video calls, WhatsApp, shared reports) works for clinics in any city.' },
            { q: 'Which fertility clinics do you work with?', a: 'We manage Instagram for Dr Aradhya Achuri’s IVF and fertility clinic, and the Instagram and WhatsApp presence of Dr Shaivalini Kamarapu (fertility specialist, AMVI Hospitals), both in Hyderabad.' },
            { q: 'Will you advertise IVF success rates?', a: 'No. We do not publish guaranteed outcomes or invented success rates. Content focuses on education: what treatments involve, who they suit and what to ask the doctor.' },
            { q: 'What does it cost?', a: 'Social media management starts from ₹15,000 a month and personal branding for doctors from ₹40,000. Ad budgets are separate. Every plan is scoped after a free exploration call.' },
            { q: 'Do you have an office in Hyderabad?', a: 'No. Our only office is in Varanasi. We work with clinics in Hyderabad and elsewhere remotely.' },
        ],
    },
}

export default function Page() {
    return <ClinicNichePage c={config} />
}
