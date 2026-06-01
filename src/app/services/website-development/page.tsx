import React from 'react'
import Link from 'next/link'
import {
    Globe, Code2, Smartphone, ShoppingCart, BarChart3,
    Shield, Zap, Layers, Database, GitBranch,
    CheckCircle2, ArrowRight, ExternalLink, Users,
    Star, Quote, Clock, TrendingUp, Award, Cpu,
    Layout, Server, Palette, Search, RefreshCw,
    ChevronRight, Play, Building2, Stethoscope,
    School, Car, Shirt, Plane,
} from 'lucide-react'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import ServiceHero from '@/components/services/service_hero'
import { WebDevServiceAbout, WebDevServiceCaseStudy, WebDevServiceHero, WebDevServiceProcess, webDevServicesOffered } from '@/constant/services_data'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceCaseStudy from '@/components/services/service_case_stydy'

const TECH_STACK = [
    { category: 'Frontend', icon: Code2, items: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'] },
    { category: 'Backend', icon: Server, items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'CMS', icon: Layers, items: ['Sanity', 'Contentful', 'WordPress', 'Payload CMS', 'Strapi'] },
    { category: 'E-Commerce', icon: ShoppingCart, items: ['Shopify', 'WooCommerce', 'Medusa.js', 'Stripe', 'Razorpay'] },
    { category: 'DevOps', icon: GitBranch, items: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Cloudflare'] },
    { category: 'Design', icon: Palette, items: ['Figma', 'Framer', 'Adobe XD', 'Spline', 'Lottie'] },
]


const CASE_STUDIES = [
    {
        client: 'Sadbhavana Banaras',
        industry: 'Hospitality',
        result: '3× increase in direct bookings',
        metric: '+210%',
        label: 'Direct bookings',
        desc: 'Rebuilt their dated PHP site into a Next.js hotel website with integrated booking flow and Google Hotels schema.',
        tags: ['Next.js', 'Booking Engine', 'SEO'],
    },
    {
        client: 'Banarsi Saree Co.',
        industry: 'E-Commerce',
        result: '₹40K → ₹4L monthly revenue',
        metric: '10×',
        label: 'Revenue growth',
        desc: 'Migrated from a broken Wix store to a custom Shopify build with product filtering, size charts, and Razorpay integration.',
        tags: ['Shopify', 'Razorpay', 'Custom Theme'],
    },
    {
        client: 'GD Sons',
        industry: 'Corporate',
        result: '68% drop in bounce rate',
        metric: '-68%',
        label: 'Bounce rate',
        desc: 'Full corporate website redesign with a lead generation form, case study pages, and ATS-connected careers portal.',
        tags: ['Next.js', 'CRM Integration', 'Lead Gen'],
    },
]

const CLIENTS = [
    { initials: 'SB', name: 'Sadbhavana Banaras', industry: 'Hospitality' },
    { initials: 'BS', name: 'Banarsi Saree', industry: 'E-Commerce' },
    { initials: 'GD', name: 'GD Sons', industry: 'Corporate' },
    { initials: 'CL', name: 'Career Launcher', industry: 'Education' },
    { initials: 'SJ', name: 'Swarnam Jewellers', industry: 'Retail' },
    { initials: 'MF', name: 'Mega Furniture', industry: 'Retail' },
    { initials: 'DA', name: 'Dr. Ankita Chauhan', industry: 'Healthcare' },
    { initials: 'VP', name: 'Varanasi Prints', industry: 'FMCG' },
]

const INDUSTRIES = [
    { icon: Building2, label: 'Corporate' },
    { icon: ShoppingCart, label: 'E-Commerce' },
    { icon: Stethoscope, label: 'Healthcare' },
    { icon: School, label: 'Education' },
    { icon: Car, label: 'Automotive' },
    { icon: Shirt, label: 'Retail' },
    { icon: Plane, label: 'Travel' },
    { icon: Globe, label: 'FMCG' },
]

const TEAM = [
    {
        initials: 'AK',
        name: 'Aditya Kumar',
        role: 'Lead Developer',
        skills: ['Next.js', 'TypeScript', 'Node.js'],
        exp: '6 yrs exp',
    },
    {
        initials: 'RS',
        name: 'Riya Sharma',
        role: 'UI/UX Designer',
        skills: ['Figma', 'Framer', 'Design Systems'],
        exp: '4 yrs exp',
    },
    {
        initials: 'PV',
        name: 'Pradeep Verma',
        role: 'Backend Engineer',
        skills: ['Node.js', 'PostgreSQL', 'AWS'],
        exp: '5 yrs exp',
    },
    {
        initials: 'SM',
        name: 'Sana Malik',
        role: 'Shopify Expert',
        skills: ['Shopify', 'Liquid', 'E-Commerce'],
        exp: '3 yrs exp',
    },
]

const TESTIMONIAL = {
    quote: "Wizards Next delivered our new site in under 4 weeks. It loads instantly, looks stunning, and we've seen a 3× jump in online enquiries since launch. Worth every paisa.",
    name: 'Rohit Mehta',
    role: 'Director, Sadbhavana Hotels',
    initials: 'RM',
    rating: 5,
}

const FAQS = [
    {
        q: 'How long does a website take to build?',
        a: 'Most business websites take 2–4 weeks. E-commerce stores and web apps take 4–8 weeks depending on complexity. We give you a precise timeline after the discovery call.',
    },
    {
        q: 'Do you provide hosting and maintenance?',
        a: 'Yes. We offer managed hosting on Vercel or AWS, plus monthly maintenance plans covering updates, backups, performance monitoring, and minor edits.',
    },
    {
        q: 'Will I be able to update the website myself?',
        a: 'Absolutely. We integrate a headless CMS (Sanity, Contentful, or WordPress) so you can edit content, add blog posts, and update products without touching code.',
    },
    {
        q: 'Do you work with clients outside Varanasi?',
        a: 'Yes — we work with clients pan-India and internationally. All communication happens over video calls, and we use shared Figma for design reviews.',
    },
    {
        q: 'What is your pricing?',
        a: 'Pricing depends on scope. Business websites start at ₹25,000, e-commerce stores at ₹45,000, and custom web apps at ₹80,000+. We send a detailed quote after understanding your requirements.',
    },
]

// ═══════════════════════════════════════════════════════════════
// SHARED UI ATOMS
// ═══════════════════════════════════════════════════════════════

function SectionBadge({ label }: { label: string }) {
    return (
        <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-amber-500 text-[10px] font-medium tracking-widest uppercase">
                {label}
            </span>
        </div>
    )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-100 tracking-tight leading-tight">
            {children}
        </h2>
    )
}

function Tag({ label }: { label: string }) {
    return (
        <span className="text-[10px] px-2 py-0.5 rounded border border-zinc-700/60 bg-zinc-950 text-zinc-500">
            {label}
        </span>
    )
}


// ═══════════════════════════════════════════════════════════════
// 6. CLIENT LIST
// ═══════════════════════════════════════════════════════════════

function ClientListSection() {
    return (
        <Section className="bg-[#09090b]">
            <Wrapper>
                <FadeUp delay={0} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <SectionBadge label="Our clients" />
                        <SectionHeading>
                            Brands that trusted us{' '}
                            <span className="text-amber-500">to build for them</span>
                        </SectionHeading>
                    </div>
                </FadeUp>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {CLIENTS.map((c, i) => (
                        <FadeUp key={c.name} delay={i * 0.05}>
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-200">
                                <div className="size-9 rounded-lg bg-amber-600/15 border border-amber-600/25 flex items-center justify-center text-[10px] font-bold text-amber-600 flex-shrink-0">
                                    {c.initials}
                                </div>
                                <div>
                                    <p className="text-[12px] font-medium text-zinc-200 leading-snug">{c.name}</p>
                                    <p className="text-[10px] text-zinc-600">{c.industry}</p>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}

// ═══════════════════════════════════════════════════════════════
// 7. INDUSTRIES
// ═══════════════════════════════════════════════════════════════

function IndustriesSection() {
    return (
        <Section className="bg-[#09090b]">
            <Wrapper>
                <FadeUp delay={0} className="text-center mb-10">
                    <SectionBadge label="Industries" />
                    <SectionHeading>
                        We build for{' '}
                        <span className="text-amber-500">every sector</span>
                    </SectionHeading>
                    <p className="text-zinc-500 text-[13.5px] font-light leading-relaxed mt-2 max-w-md mx-auto">
                        Industry-specific design patterns, conversion flows, and integrations — we know what works in your space.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                    {INDUSTRIES.map((ind, i) => {
                        const Icon = ind.icon
                        return (
                            <FadeUp key={ind.label} delay={i * 0.05}>
                                <div className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-amber-600/30 hover:bg-zinc-800/60 transition-all duration-200 text-center">
                                    <div className="size-10 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center group-hover:bg-amber-600/20 transition-colors">
                                        <Icon size={18} className="text-amber-500" strokeWidth={1.7} />
                                    </div>
                                    <p className="text-[11px] font-medium text-zinc-400 leading-snug">{ind.label}</p>
                                </div>
                            </FadeUp>
                        )
                    })}
                </div>
            </Wrapper>
        </Section>
    )
}

// ═══════════════════════════════════════════════════════════════
// 8. TECH STACK
// ═══════════════════════════════════════════════════════════════

function TechStackSection() {
    return (
        <Section className="bg-[#09090b]">
            <Wrapper>
                <FadeUp delay={0} className="mb-10">
                    <SectionBadge label="Tech stack" />
                    <SectionHeading>
                        Modern tools,{' '}
                        <span className="text-amber-500">no legacy baggage</span>
                    </SectionHeading>
                    <p className="text-zinc-500 text-[13.5px] font-light leading-relaxed mt-2 max-w-lg">
                        We don't pick technology to show off — we pick what's right for your project's
                        scale, budget, and long-term maintainability.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {TECH_STACK.map((cat, i) => {
                        const Icon = cat.icon
                        return (
                            <FadeUp key={cat.category} delay={i * 0.07}>
                                <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900 h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="size-8 rounded-lg bg-amber-600/10 border border-amber-600/20 flex items-center justify-center">
                                            <Icon size={15} className="text-amber-500" strokeWidth={1.7} />
                                        </div>
                                        <h3 className="font-syne text-[13px] font-bold text-zinc-200">{cat.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cat.items.map((tech) => (
                                            <span key={tech}
                                                className="text-[11px] px-2.5 py-1 rounded-lg border border-zinc-700/60 bg-zinc-950 text-zinc-400 hover:border-amber-600/30 hover:text-zinc-300 transition-colors cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeUp>
                        )
                    })}
                </div>
            </Wrapper>
        </Section>
    )
}

// ═══════════════════════════════════════════════════════════════
// 9. TEAM
// ═══════════════════════════════════════════════════════════════

function TeamSection() {
    return (
        <Section className="bg-[#09090b]">
            <Wrapper>
                <FadeUp delay={0} className="mb-10">
                    <SectionBadge label="The team" />
                    <SectionHeading>
                        People behind{' '}
                        <span className="text-amber-500">your project</span>
                    </SectionHeading>
                    <p className="text-zinc-500 text-[13.5px] font-light leading-relaxed mt-2 max-w-lg">
                        You won't be passed to a junior. These are the actual people who design,
                        code, and deliver your website.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {TEAM.map((member, i) => (
                        <FadeUp key={member.name} delay={i * 0.08}>
                            <div className="group flex flex-col gap-4 p-5 rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-200">
                                {/* Avatar + name */}
                                <div className="flex items-center gap-3">
                                    {/* Avatar placeholder */}
                                    <div className="size-10 rounded-xl bg-amber-600/15 border border-amber-600/25 flex items-center justify-center text-[11px] font-bold text-amber-600 flex-shrink-0">
                                        {member.initials}
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-semibold text-zinc-200 leading-snug">{member.name}</p>
                                        <p className="text-[10px] text-zinc-500">{member.role}</p>
                                    </div>
                                </div>

                                {/* Experience badge */}
                                <div className="flex items-center gap-1.5">
                                    <Clock size={11} className="text-amber-600" />
                                    <span className="text-[10.5px] text-zinc-500">{member.exp}</span>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
                                    {member.skills.map(s => <Tag key={s} label={s} />)}
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}

// ═══════════════════════════════════════════════════════════════
// 10. TESTIMONIAL
// ═══════════════════════════════════════════════════════════════

function TestimonialSection() {
    return (
        <Section className="bg-[#09090b]">
            <Wrapper>
                <FadeUp delay={0}>
                    <div
                        className="relative rounded-2xl overflow-hidden p-8 sm:p-12"
                        style={{
                            background: 'radial-gradient(ellipse at 30% 50%, rgba(217,119,6,0.08) 0%, transparent 55%), #111008',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                    >
                        <Quote size={40} className="text-amber-600/20 mb-6" strokeWidth={1} />
                        <p className="font-syne text-lg sm:text-xl lg:text-2xl text-zinc-200 leading-relaxed font-medium max-w-3xl mb-8">
                            "{TESTIMONIAL.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-amber-600/20 border border-amber-600/30 flex items-center justify-center text-[13px] font-bold text-amber-500">
                                {TESTIMONIAL.initials}
                            </div>
                            <div>
                                <p className="text-[14px] font-semibold text-zinc-100">{TESTIMONIAL.name}</p>
                                <p className="text-[12px] text-zinc-500">{TESTIMONIAL.role}</p>
                                <div className="flex items-center gap-0.5 mt-1">
                                    {[...Array(TESTIMONIAL.rating)].map((_, i) => (
                                        <Star key={i} size={11} fill="#f59e0b" stroke="#f59e0b" strokeWidth={1} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}

// ═══════════════════════════════════════════════════════════════
// 11. FAQ
// ═══════════════════════════════════════════════════════════════

function FAQSection() {
    return (
        <Section className="bg-[#09090b]">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">

                    <FadeUp delay={0} className="lg:sticky lg:top-24">
                        <SectionBadge label="FAQ" />
                        <SectionHeading>
                            Questions we get{' '}
                            <span className="text-amber-500">all the time</span>
                        </SectionHeading>
                        <p className="text-zinc-500 text-[13.5px] font-light leading-relaxed mt-3 mb-6">
                            Still have something else on your mind? We're one message away.
                        </p>
                        <Link href="/contact"
                            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-black text-[13px] font-semibold px-5 py-2.5 rounded-xl transition-colors">
                            Ask us directly <ArrowRight size={14} />
                        </Link>
                    </FadeUp>

                    <div className="flex flex-col divide-y divide-zinc-800">
                        {FAQS.map((faq, i) => (
                            <FadeUp key={faq.q} delay={i * 0.06}>
                                <div className="py-5">
                                    <div className="flex items-start gap-3 mb-2">
                                        <CheckCircle2 size={15} className="text-amber-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                                        <h3 className="font-syne text-[14px] font-bold text-zinc-200 leading-snug">{faq.q}</h3>
                                    </div>
                                    <p className="text-[12.5px] text-zinc-500 leading-relaxed font-light pl-6">{faq.a}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

// ═══════════════════════════════════════════════════════════════
// 12. BOTTOM CTA
// ═══════════════════════════════════════════════════════════════

function BottomCTA() {
    return (
        <Section className="bg-[#09090b] pb-20">
            <Wrapper>
                <FadeUp delay={0}>
                    <div
                        className="relative rounded-2xl overflow-hidden px-8 py-14 sm:px-16 text-center"
                        style={{
                            background: 'radial-gradient(ellipse at 50% 0%, rgba(217,119,6,0.15) 0%, transparent 60%), #111008',
                            border: '1px solid rgba(255,255,255,0.07)',
                        }}
                    >
                        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }} />

                        <Award size={36} className="text-amber-600/40 mx-auto mb-6" strokeWidth={1.2} />
                        <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-50 tracking-tight leading-tight mb-3">
                            Ready to build something{' '}
                            <span className="text-amber-500">great?</span>
                        </h2>
                        <p className="text-zinc-400 text-[14px] font-light max-w-md mx-auto mb-8">
                            Tell us about your project and we'll send a proposal within 24 hours.
                            No agency fluff — just a straight conversation.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link href="/contact"
                                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 active:scale-[0.97] text-black text-[13px] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200">
                                Start your project <ArrowRight size={15} />
                            </Link>
                            <Link href="https://wa.me/91XXXXXXXXXX"
                                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-600 text-zinc-300 text-[13px] font-medium px-7 py-3.5 rounded-xl transition-all duration-200">
                                WhatsApp us
                                <ExternalLink size={13} />
                            </Link>
                        </div>
                        <p className="text-zinc-700 text-[11px] mt-6">
                            Free 30-min discovery call · No commitment required
                        </p>
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}

// ═══════════════════════════════════════════════════════════════
// PAGE EXPORT
// ═══════════════════════════════════════════════════════════════

export default function WebDevelopmentPage() {
    return (
        <main className="bg-[#09090b]">
            <ServiceHero data={WebDevServiceHero} />
            <ServiceAbout data={WebDevServiceAbout} />
            <ServicesOffered data={webDevServicesOffered} />
            <ServiceProcess data={WebDevServiceProcess} />
            <ServiceCaseStudy data={WebDevServiceCaseStudy} />
            <ClientListSection />
            <IndustriesSection />
            <TechStackSection />
            <TeamSection />
            <TestimonialSection />
            <FAQSection />
            <BottomCTA />
        </main>
    )
}