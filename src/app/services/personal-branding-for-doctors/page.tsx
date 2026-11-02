import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, BarChart3, Camera, ClipboardCheck, ExternalLink, Film, MessageCircle, ShieldCheck, UserCheck } from 'lucide-react'
import ServiceHero from '@/components/services/service_hero'
import ServiceDeepDive from '@/components/services/service_deepdive'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceFAQ from '@/components/services/service_faq'
import { SectionHeading } from '@/components/services/section_heading'
import { SectionBadge } from '@/components/services/section_badge'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import { ServiceDeepDiveType, ServiceFAQType, ServiceHeroTypes, ServiceProcessType, ServicesOfferedTypes } from '@/types/service.types'

const WHATSAPP_URL = 'https://wa.me/918072199651?text=' + encodeURIComponent("Hi, I'm a doctor and want a free profile audit")
const CONTACT_URL = '/contact'

export const metadata: Metadata = {
    title: 'Personal Branding for Doctors | Guideline-Compliant Instagram | Wizards Next',
    description: 'Personal branding for doctors, dentists and clinics in India — a trustworthy, guideline-compliant Instagram presence. Book a free 15-minute profile audit. From ₹40,000.',
    alternates: { canonical: 'https://www.wizards.co.in/services/personal-branding-for-doctors' },
}

const hero: ServiceHeroTypes = {
    bread_crumb: 'Personal Branding for Doctors',
    badge: 'For Doctors, Dentists & Clinics',
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            A personal brand patients trust —{' '}
            <span className="text-amber-500">and the guidelines allow</span>
        </h1>
    ),
    content: 'With the new NDC guidelines on social media and advertising, doctors need to be careful about what they post. We help doctors, dentists and clinics in India build a credible, guideline-conscious presence on Instagram — without guesswork.',
    primaryCta: { label: 'Book a free 15-minute profile audit', href: CONTACT_URL, icon: ArrowRight },
    secondaryCta: { label: 'WhatsApp us', href: WHATSAPP_URL, icon: MessageCircle },
    clients_initials: [],
    stats: [
        { value: 'Free', label: '15-minute profile audit' },
        { value: '₹40,000', label: 'Starting price' },
        { value: 'Instagram', label: 'Primary platform' },
        { value: 'Monthly', label: 'Reporting cadence' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/social-media.webp"
                    alt="Personal branding for doctors illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    ),
}

const problem: ServiceDeepDiveType = {
    badge: 'The Problem',
    heading: (
        <SectionHeading>
            New guidelines, old posts —{' '}
            <span className="text-amber-500">and a lot of confusion</span>
        </SectionHeading>
    ),
    intro: 'Most doctors we speak to are unsure what is still okay to post. Here is what we usually hear.',
    sections: [
        {
            subheading: 'New guidelines on social media and advertising',
            body: 'The new NDC guidelines have put the spotlight on how healthcare professionals present themselves online. Broadly, that means avoiding misleading claims, guarantees of results, patient testimonials used as promotion, and before/after content that can mislead — and respecting patient consent and privacy in everything you share. We always recommend reading the official guidelines yourself or with your advisor for the exact rules.',
        },
        {
            subheading: 'What should I delete, and what can I keep?',
            body: 'Years of posts, reels and stories are already on your profile. Some are perfectly fine, some may need editing, and some may be better archived. Without a clear review, many doctors either leave everything as it is or stop posting altogether — neither helps patients find and trust you.',
        },
        {
            subheading: 'Quacks and fake before/afters set the tone online',
            body: 'Patients scrolling Instagram see exaggerated claims and doctored before/after pictures every day. Qualified doctors who post responsibly can get drowned out. A clear, honest and consistent personal brand is how genuine expertise stands apart.',
        },
    ],
}

const offered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (
        <SectionHeading>
            Everything a doctor&apos;s profile needs,{' '}
            <span className="text-amber-500">handled as one job</span>
        </SectionHeading>
    ),
    service_list: [
        { icon: ClipboardCheck, title: 'Content Strategy', desc: 'Content pillars and a monthly calendar built around your specialty and your patients’ real questions.', tags: ['Strategy', 'Calendar'] },
        { icon: Film, title: 'Compliant Posts & Reels', desc: 'Scripting, shooting guidance and editing for posts and reels, written with the guidelines in mind.', tags: ['Scripting', 'Editing'] },
        { icon: UserCheck, title: 'Profile Optimisation', desc: 'Bio, highlights, contact details and profile structure that look professional and credible.', tags: ['Instagram', 'Bio'] },
        { icon: ShieldCheck, title: 'Compliance Review', desc: 'A review of your existing posts with clear recommendations on what to keep, edit or archive.', tags: ['Review', 'Existing posts'] },
        { icon: Camera, title: 'Shooting Guidance', desc: 'Simple direction so you can shoot at your clinic, or formats that do not need you on camera.', tags: ['On camera', 'Off camera'] },
        { icon: BarChart3, title: 'Monthly Reporting', desc: 'A plain-language monthly report on what was published and how it performed.', tags: ['Reporting'] },
    ],
}

const process: ServiceProcessType = {
    badge: 'How it works',
    heading: (
        <SectionHeading>
            From audit to monthly review —{' '}
            <span className="text-amber-500">4 clear steps</span>
        </SectionHeading>
    ),
    process_list: [
        { num: '01', title: 'Free profile audit call', desc: 'A 15-minute video call to look at your current profile and what you want from it.' },
        { num: '02', title: 'Strategy', desc: 'Content pillars, tone and a monthly calendar, plus a review of existing posts.' },
        { num: '03', title: 'Content', desc: 'Scripting, shooting guidance, editing and posting of compliant posts and reels.' },
        { num: '04', title: 'Monthly review', desc: 'A monthly report and adjustments for the next month.' },
    ],
}

const faq: ServiceFAQType = {
    faq_list: [
        { q: 'Will my existing posts break the guidelines?', a: 'Some may need attention — that is exactly what the compliance review is for. We go through your existing posts and recommend what to keep, edit or archive. For the exact rules, we always suggest referring to the official guidelines or your advisor.' },
        { q: 'Can I still post educational content with pictures?', a: 'Generally, yes. Educational content that informs patients without misleading claims or guarantees is the backbone of a trustworthy profile. We take care with patient pictures, consent and privacy.' },
        { q: 'Do I have to appear on camera?', a: 'No. Appearing on camera helps patients get to know you, but we also plan formats that do not need you on screen. Where you do appear, we give simple shooting guidance.' },
        { q: 'Is this only for dentists?', a: 'No. It is for all doctors and clinics — dentists, physicians, specialists and multi-doctor clinics.' },
        { q: 'What does it cost?', a: 'Personal branding for doctors and professionals starts from ₹40,000. The exact scope is agreed after your free profile audit call.' },
        { q: 'How do I get started?', a: 'Book a free 15-minute profile audit through our contact form or message us on WhatsApp at +91 80721 99651.' },
    ],
}

function Pricing() {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0} className="flex flex-col items-center text-center">
                    <SectionBadge label="Pricing" />
                    <SectionHeading>
                        Personal branding for doctors,{' '}
                        <span className="text-amber-500">from ₹40,000</span>
                    </SectionHeading>
                    <p className="text-zinc-100 text-[14px] leading-relaxed font-light max-w-xl mt-4">
                        Includes content strategy, compliant posts and reels (scripting, shooting guidance, editing), profile optimisation, a compliance review of existing posts, and monthly reporting. Final scope is agreed after the free audit call.
                    </p>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}

function FinalCTA() {
    return (
        <Section className="pb-20">
            <Wrapper>
                <FadeUp delay={0}>
                    <div
                        className="relative rounded-2xl overflow-hidden px-8 py-14 sm:px-16 text-center"
                        style={{
                            background: 'radial-gradient(ellipse at 50% 0%, rgba(217,119,6,0.15) 0%, transparent 60%), #111008',
                            border: '1px solid rgba(255,255,255,0.07)',
                        }}
                    >
                        <Award size={36} className="text-amber-600/40 mx-auto mb-6" strokeWidth={1.2} />
                        <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-50 tracking-tight leading-tight mb-3">
                            Book a free{' '}
                            <span className="text-amber-500">15-minute profile audit</span>
                        </h2>
                        <p className="text-zinc-100 text-[14px] font-light max-w-md mx-auto mb-8">
                            A short video call to review your Instagram profile and talk through what to keep, what to change and what to post next.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link href={CONTACT_URL}
                                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 active:scale-[0.97] text-black text-[13px] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200">
                                Book my free audit <ArrowRight size={15} />
                            </Link>
                            <Link href={WHATSAPP_URL}
                                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-600 text-zinc-300 text-[13px] font-medium px-7 py-3.5 rounded-xl transition-all duration-200">
                                WhatsApp +91 80721 99651
                                <ExternalLink size={13} />
                            </Link>
                        </div>
                        <p className="text-zinc-400 text-[12px] mt-6">
                            Or call +91 80721 99651 · admin@wizards.co.in
                        </p>
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}

export default function PersonalBrandingForDoctorsPage() {
    return (
        <main>
            <ServiceHero data={hero} />
            <ServiceDeepDive data={problem} />
            <ServicesOffered data={offered} />
            <ServiceProcess data={process} />
            <Pricing />
            <ServiceFAQ data={faq} />
            <FinalCTA />
        </main>
    )
}
