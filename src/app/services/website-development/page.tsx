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
import { WebDevServiceAbout, WebDevServiceCaseStudy, WebDevServiceClientList, WebDevServiceHero, WebDevServiceIndustriesList, WebDevServiceProcess, WebDevServiceProject, webDevServicesOffered, WebDevServiceTechStack } from '@/constant/services_data'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceCaseStudy from '@/components/services/service_case_stydy'
import ServiceProject from '@/components/services/service_project'
import ServiceClientList from '@/components/services/service_client_list'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceTechStack from '@/components/services/service_techstack'
import ServiceCTA from '@/components/services/service_cta'


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


export default function WebDevelopmentPage() {
    return (
        <main>
            <ServiceHero data={WebDevServiceHero} />
            <ServiceAbout data={WebDevServiceAbout} />
            <ServicesOffered data={webDevServicesOffered} />
            <ServiceProcess data={WebDevServiceProcess} />
            <ServiceCaseStudy data={WebDevServiceCaseStudy} />
            <ServiceProject data={WebDevServiceProject} />
            <ServiceClientList data={WebDevServiceClientList} />
            <ServiceIndustries data={WebDevServiceIndustriesList} />
            <ServiceTechStack data={WebDevServiceTechStack} />
            <TeamSection />
            <TestimonialSection />
            <FAQSection />
            <ServiceCTA />
        </main>
    )
}