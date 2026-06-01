import { ServiceHeroTypes, ServiceAboutTypes } from "@/types/service.types";
import { ArrowRight, Globe, Layout, Play, Shield, TrendingUp } from "lucide-react";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionHeading } from "@/components/services/section_heading";

export const WebDevServiceHero: ServiceHeroTypes = {
    bread_crumb: "Web Development",
    badge: "Web Development",
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium" >
            Websites that <br /> work as hard <br /> as{" "}
            <span className="text-amber-500" > you do </span>
        </h1>
    ),
    content: "We build fast, beautiful, and conversion-focused websites —  from business portfolios to full-scale e-commerce stores. Delivered in weeks, not months.",
    primaryCta: {
        label: "Start your project",
        href: "#",
        icon: ArrowRight
    },
    secondaryCta: {
        label: "See our work",
        href: "#",
        icon: Play
    },
    clients_initials: ['AK', 'RS', 'PV', 'SM'],
    clientCount: "12+",
    stats: [
        { value: '120+', label: 'Sites launched' },
        { value: '98%', label: 'Client satisfaction' },
        { value: '2.1s', label: 'Avg load time' },
        { value: '4 wks', label: 'Avg delivery' },
    ],
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


export const WebDevServiceAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (
        <SectionHeading>
            New to web development?{' '} <br />
            <span className="text-amber-500">We'll catch you up.</span>
        </SectionHeading>
    ),
    content: " Whether you're a first-time founder or a business owner replacing an old site, here's everything you need to know before we start.",
    what_is: [
        {
            icon: Globe,
            title: 'What is web development?',
            body: 'Web development is the process of building and maintaining websites and web applications — everything from a simple business card site to a full-scale e-commerce platform. It covers design, coding, databases, and performance.',
        },
        {
            icon: Layout,
            title: 'Frontend vs Backend',
            body: 'Frontend is what users see — pages, buttons, animations. Backend is the engine underneath — servers, databases, logic. Full-stack development covers both. We do all three.',
        },
        {
            icon: TrendingUp,
            title: 'Why does it matter?',
            body: 'Your website is your 24/7 salesperson. 75% of users judge credibility by design alone. A slow, outdated site loses you business every day — a fast, modern one converts strangers into customers.',
        },
        {
            icon: Shield,
            title: 'Security & compliance',
            body: 'Every site we build is SSL-secured, GDPR-aware, and follows OWASP best practices. Security isn\'t an add-on — it\'s baked in from day one.',
        },
    ]
}