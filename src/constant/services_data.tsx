import { ServiceHeroTypes, ServiceAboutTypes, ServicesOfferedTypes, ServiceProcessType, ServiceCaseStudyType, ServiceProjectType, ServiceClientListType, ServiceIndustriestype, ServiceTechStackType, ServiceFAQType, ServiceTeamType, ServiceTestimonialsType, ServiceDeepDiveType } from "@/types/service.types";
import { ArrowRight, Award, BarChart3, Bot, BookOpen, Boxes, Building2, Camera, Car, Code2, CreditCard, Database, Film, GitBranch, Globe, Layers, Layout, LineChart, Mail, MapPin, Megaphone, MessageCircle, Music, MousePointerClick, Package, Palette, PenLine, PieChart, Plane, Play, RefreshCw, School, Search, Send, Server, Shield, Shirt, ShoppingCart, Smartphone, Sparkles, Star, Stethoscope, Target, TrendingUp, Users, UtensilsCrossed, Zap } from "lucide-react";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionHeading } from "@/components/services/section_heading";
import Image from "next/image";

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
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/website-development.webp"
                    alt="Website Development illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const WebDevServiceAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (
        <SectionHeading>
            New to web development?{' '} <br />
            <span className="text-amber-500">We&apos;ll catch you up.</span>
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

export const webDevServicesOffered: ServicesOfferedTypes = {
    badge: "101",
    heading: (
        <SectionHeading>
            Six types of web projects,{' '}
            <span className="text-amber-500">one team</span>
        </SectionHeading>
    ),
    service_list: [
        {
            icon: Globe,
            title: 'Business Websites',
            desc: 'Fast, beautiful, mobile-first sites that establish credibility and drive enquiries.',
            tags: ['Next.js', 'Tailwind', 'CMS'],
        },
        {
            icon: ShoppingCart,
            title: 'E-Commerce Stores',
            desc: 'Shopify, WooCommerce, or custom storefronts built to convert browsers into buyers.',
            tags: ['Shopify', 'WooCommerce', 'Payments'],
        },
        {
            icon: Smartphone,
            title: 'Progressive Web Apps',
            desc: 'App-like experiences in the browser — offline-capable, installable, blazing fast.',
            tags: ['PWA', 'React', 'Service Workers'],
        },
        {
            icon: BarChart3,
            title: 'Landing Pages',
            desc: 'High-conversion pages built around a single goal — leads, signups, or sales.',
            tags: ['CRO', 'A/B Testing', 'Analytics'],
        },
        {
            icon: Database,
            title: 'Web Applications',
            desc: 'Custom tools, dashboards, portals, and SaaS products built for scale.',
            tags: ['Node.js', 'PostgreSQL', 'REST API'],
        },
        {
            icon: RefreshCw,
            title: 'Redesign & Migration',
            desc: 'Modernise a legacy site without losing your SEO rankings or existing content.',
            tags: ['Audit', 'Migration', 'SEO-safe'],
        },
    ]
}

export const WebDevServiceProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (
        <SectionHeading>
            From idea to live site —{' '}
            <span className="text-amber-500">6 clear steps</span>
        </SectionHeading>
    ),
    process_list: [
        {
            num: '01',
            title: 'Discovery call',
            desc: 'We learn your goals, audience, and technical requirements. No jargon, just clarity.'
        },
        {
            num: '02',
            title: 'Design & wireframe',
            desc: 'Figma mockups reviewed and approved before a single line of code is written.'
        },
        {
            num: '03',
            title: 'Development',
            desc: 'Clean, well-commented code. Regular builds shared for your feedback.'
        },
        {
            num: '04',
            title: 'Testing & QA',
            desc: 'Cross-browser, cross-device, performance, and security testing.'
        },
        {
            num: '05',
            title: 'Launch',
            desc: 'We handle deployment, DNS, SSL, and go-live monitoring.'
        },
        {
            num: '06',
            title: 'Support & grow',
            desc: 'Monthly maintenance plans, updates, and ongoing optimisation.'
        },
    ]
}

export const WebDevServiceCaseStudy: ServiceCaseStudyType = {
    badge: "Case studies",
    heading: (
        <SectionHeading>
            Real projects,{' '}
            <span className="text-amber-500">real results</span>
        </SectionHeading>
    ),
    content: "Every number below is pulled from analytics, not our imagination.",
    case_study_list: [
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
}

export const WebDevServiceProject: ServiceProjectType = {
    project_list: [
        {
            name: "Sadbhavana Banaras",
            sector: "Hospitality",
            result: "3× increase in direct bookings",
            metric: "+210%",
            metricLabel: "Direct bookings",
            desc: "Rebuilt their dated PHP site into a Next.js hotel website with integrated booking flow and Google Hotels schema.",
            tags: ["Next.js", "Booking Engine", "SEO"],
            href: "#",
        },
        {
            name: "Banarsi Saree Co.",
            sector: "E-Commerce",
            result: "₹40K → ₹4L monthly revenue",
            metric: "10×",
            metricLabel: "Revenue growth",
            desc: "Migrated from a broken Wix store to a custom Shopify build with product filtering, size charts and Razorpay.",
            tags: ["Shopify", "Razorpay", "Custom Theme"],
            href: "#",
        },
        {
            name: "GD Sons",
            sector: "Corporate",
            result: "68% drop in bounce rate",
            metric: "-68%",
            metricLabel: "Bounce rate",
            desc: "Full corporate website redesign with lead generation form, case study pages, and ATS-connected careers portal.",
            tags: ["Next.js", "CRM Integration", "Lead Gen"],
            href: "#",
        },
        {
            name: "Career Launcher",
            sector: "Education",
            result: "180% increase in course enquiries",
            metric: "+180%",
            metricLabel: "Enquiries",
            desc: "Built a course catalogue portal with batch scheduling, online enrollment, and integrated WhatsApp lead capture.",
            tags: ["Next.js", "CMS", "Lead Gen"],
            href: "#",
        },
        {
            name: "Dr. Ankita Chauhan",
            sector: "Healthcare",
            result: "Personal brand site + appointment system",
            metric: "4.9★",
            metricLabel: "Google rating",
            desc: "Designed a clean medical portfolio with online appointment booking, patient testimonials, and Google Business integration.",
            tags: ["Personal Brand", "Booking", "SEO"],
            href: "#",
        },
        {
            name: "Swarnam Jewellers",
            sector: "Retail",
            result: "95% increase in footfall from web",
            metric: "+95%",
            metricLabel: "Store traffic",
            desc: "Luxury jewellery catalogue website with high-res product gallery, WhatsApp CTA, and local SEO optimisation.",
            tags: ["Catalogue", "Local SEO", "WhatsApp"],
            href: "#",
        },
    ],
    filter: ["All", "Hospitality", "E-Commerce", "Corporate", "Education", "Healthcare", "Retail"]
}

export const WebDevServiceClientList: ServiceClientListType = {
    client_list: [
        { initials: 'SB', name: 'Sadbhavana Banaras', industry: 'Hospitality' },
        { initials: 'BS', name: 'Banarsi Saree', industry: 'E-Commerce' },
        { initials: 'GD', name: 'GD Sons', industry: 'Corporate' },
        { initials: 'CL', name: 'Career Launcher', industry: 'Education' },
        { initials: 'SJ', name: 'Swarnam Jewellers', industry: 'Retail' },
        { initials: 'MF', name: 'Mega Furniture', industry: 'Retail' },
        { initials: 'DA', name: 'Dr. Ankita Chauhan', industry: 'Healthcare' },
        { initials: 'VP', name: 'Varanasi Prints', industry: 'FMCG' },
    ]
}

export const WebDevServiceIndustriesList: ServiceIndustriestype = {
    industries_list: [
        { icon: Building2, label: 'Corporate' },
        { icon: ShoppingCart, label: 'E-Commerce' },
        { icon: Stethoscope, label: 'Healthcare' },
        { icon: School, label: 'Education' },
        { icon: Car, label: 'Automotive' },
        { icon: Shirt, label: 'Retail' },
        { icon: Plane, label: 'Travel' },
        { icon: Globe, label: 'FMCG' },
    ]
}

export const WebDevServiceTechStack: ServiceTechStackType = {
    techstack_list: [
        { category: 'Frontend', icon: Code2, items: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'] },
        { category: 'Backend', icon: Server, items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
        { category: 'CMS', icon: Layers, items: ['Sanity', 'Contentful', 'WordPress', 'Payload CMS', 'Strapi'] },
        { category: 'E-Commerce', icon: ShoppingCart, items: ['Shopify', 'WooCommerce', 'Medusa.js', 'Stripe', 'Razorpay'] },
        { category: 'DevOps', icon: GitBranch, items: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Cloudflare'] },
        { category: 'Design', icon: Palette, items: ['Figma', 'Framer', 'Adobe XD', 'Spline', 'Lottie'] },
    ]
}

export const WebDevServiceFAQ: ServiceFAQType = {
    faq_list: [
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
}

export const WebDevServiceTeam: ServiceTeamType = {
    team_list: [
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
}

export const WebDevServiceTestimonial: ServiceTestimonialsType = {
    testimonial_list: [
        {
            quote: "Wizards Next delivered our new site in under 4 weeks. It loads instantly, looks stunning, and we've seen a 3× jump in online enquiries since launch. Worth every paisa.",
            name: 'Rohit Mehta',
            role: 'Director, Sadbhavana Hotels',
            initials: 'RM',
            rating: 5,
        },
        {
            quote: "Wizards Next delivered our new site in under 4 weeks. It loads instantly, looks stunning, and we've seen a 3× jump in online enquiries since launch. Worth every paisa.",
            name: 'Priyesh Rai',
            role: 'Director, Sadbhavana Hotels',
            initials: 'RM',
            rating: 5,
        },
        {
            quote: "Wizards Next delivered our new site in under 4 weeks. It loads instantly, looks stunning, and we've seen a 3× jump in online enquiries since launch. Worth every paisa.",
            name: 'Akshat Agarwal',
            role: 'Director, Sadbhavana Hotels',
            initials: 'RM',
            rating: 5,
        },
    ]
}
// ─────────────────────────────────────────────────────────────────────────
// Brand Creation
// ─────────────────────────────────────────────────────────────────────────

export const BrandCreationHero: ServiceHeroTypes = {
    bread_crumb: "Brand Creation",
    badge: "Brand Creation",
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            A brand people <br /> recognise before <br />
            <span className="text-amber-500">they read your name</span>
        </h1>
    ),
    content: "Logo, colour, typography, and a documented system built to stay consistent everywhere your business shows up — not just a file that looks good in isolation.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['SB', 'SJ'],
    clientCount: "10+",
    stats: [
        { value: '10+', label: 'Brands built' },
        { value: '3', label: 'Concepts per project' },
        { value: '3–4 wks', label: 'Avg delivery' },
        { value: '100%', label: 'Ownership handed over' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/brand-designing.webp"
                    alt="Brand Creation illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const BrandCreationAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (
        <SectionHeading>
            New to brand identity work?{' '} <br />
            <span className="text-amber-500">Here&apos;s what it actually covers.</span>
        </SectionHeading>
    ),
    content: "Branding is often reduced to \"logo design\" — it's a lot more than that, and skipping the rest is why so many brands look inconsistent across their own channels.",
    what_is: [
        {
            icon: Sparkles,
            title: 'What is brand identity?',
            body: 'The full visual system a business uses to be recognised — logo, colour palette, typography, and the rules for how they combine. Not just a mark, a system.',
        },
        {
            icon: Palette,
            title: 'Why "just a logo" falls short',
            body: 'A logo with no documented colour codes or type rules gets reinterpreted differently by every vendor who touches it — one look on your sign, another on your Instagram.',
        },
        {
            icon: Layout,
            title: 'Guidelines are the deliverable that matters',
            body: 'The guidelines document is what keeps a brand consistent for years, across every designer, printer, and platform that touches it after we\'re done.',
        },
        {
            icon: TrendingUp,
            title: 'Why it matters for premium clients',
            body: 'For HNI-facing businesses especially, visual inconsistency reads as a credibility gap before anyone reads a word of your pitch.',
        },
    ]
}

export const BrandCreationServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (
        <SectionHeading>
            A complete identity system,{' '}
            <span className="text-amber-500">not just a logo file</span>
        </SectionHeading>
    ),
    service_list: [
        { icon: Sparkles, title: 'Logo Design', desc: 'Primary logo plus icon and wordmark variations for every context.', tags: ['Primary Mark', 'Icon', 'Wordmark'] },
        { icon: Palette, title: 'Colour & Typography System', desc: 'A documented palette and type scale built for consistency at scale.', tags: ['Palette', 'Type Scale'] },
        { icon: Layout, title: 'Brand Guidelines', desc: 'The reference document that keeps every future vendor on-brand.', tags: ['Usage Rules', 'Documentation'] },
        { icon: BarChart3, title: 'Business Stationery', desc: 'Visiting cards, letterhead, and envelope templates, ready to print.', tags: ['Print Ready'] },
    ]
}

export const BrandCreationProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (
        <SectionHeading>
            From discovery to guidelines —{' '}
            <span className="text-amber-500">5 clear steps</span>
        </SectionHeading>
    ),
    process_list: [
        { num: '01', title: 'Discovery & positioning', desc: 'Stakeholder conversations and an audit of your current visual presence.' },
        { num: '02', title: 'Market & audience read', desc: 'What premium clients in your category expect, and where to stand apart.' },
        { num: '03', title: 'Concept development', desc: '2–3 genuinely distinct directions, not variations on one idea.' },
        { num: '04', title: 'Refinement & systemisation', desc: 'One direction taken to completion — palette, type, logo lockups, rules.' },
        { num: '05', title: 'Guidelines & handover', desc: 'A documented guide, source files, and rollout support.' },
    ]
}

export const BrandCreationIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Building2, label: 'Corporate' },
        { icon: Shirt, label: 'Retail' },
        { icon: Stethoscope, label: 'Healthcare' },
        { icon: Plane, label: 'Travel' },
    ]
}

export const BrandCreationFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'How many logo concepts do we choose from?', a: 'Typically 2–3 distinct directions in the first round, refined from your feedback — not endless variations of one idea.' },
        { q: 'Do we own the files?', a: 'Yes — full source files and the guidelines document are yours at handover.' },
        { q: 'How long does a full identity take?', a: 'Most projects run 3–4 weeks from kickoff to final guidelines, depending on revision rounds.' },
        { q: 'Can you refresh our existing brand instead of starting fresh?', a: 'Yes — a lot of our work is evolution, not replacement, especially for businesses with existing recognition worth keeping.' },
        { q: 'We already have a logo but need the rest of the system — can you just build that?', a: 'Yes, we scope brand system work independently of logo design when the mark itself is staying.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Graphic Design
// ─────────────────────────────────────────────────────────────────────────

export const GraphicDesignHero: ServiceHeroTypes = {
    bread_crumb: "Graphic Design",
    badge: "Graphic Design",
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            Scroll-stopping creative,{' '}
            <span className="text-amber-500">every single week</span>
        </h1>
    ),
    content: "Social posts, ad creative, and print collateral — designed by the same team running your campaigns, so it's built to convert, not just look good.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['MF', 'SJ'],
    clientCount: "20+",
    stats: [
        { value: '20+', label: 'Brands designed for' },
        { value: '24–48h', label: 'Standard turnaround' },
        { value: '100%', label: 'On-brand delivery' },
        { value: '6', label: 'Formats covered' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/graphic-designing.webp"
                    alt="Graphic Design illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const GraphicDesignAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (
        <SectionHeading>
            Design that has to move{' '} <br />
            <span className="text-amber-500">as fast as your calendar</span>
        </SectionHeading>
    ),
    content: "Brand Creation is a one-time system. Graphic Design is what runs on top of it, continuously — and it's the most visible output of the whole relationship.",
    what_is: [
        { icon: Layout, title: 'What counts as graphic design here?', body: 'Everything visual that isn\'t the core brand system itself — social carousels, ad creative, posters, print collateral, motion graphics.' },
        { icon: Palette, title: 'Staying on-brand at volume', body: 'Every asset is checked against your existing brand guidelines before it ships, even at high posting frequency.' },
        { icon: TrendingUp, title: 'Design built to convert', body: 'Our designers sit with the team running your ads and social, so creative is built with the platform and goal in mind, not designed in isolation.' },
        { icon: RefreshCw, title: 'Structured revisions', body: 'Clear revision rounds rather than open-ended back-and-forth, so turnaround stays fast without sacrificing quality.' },
    ]
}

export const GraphicDesignServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (
        <SectionHeading>
            One design team,{' '}
            <span className="text-amber-500">every format you need</span>
        </SectionHeading>
    ),
    service_list: [
        { icon: Layout, title: 'Social Creative', desc: 'Carousels, post graphics, and Story/Reel cover art.', tags: ['Carousels', 'Covers'] },
        { icon: BarChart3, title: 'Ad Creative', desc: 'Static creative sized correctly for Meta and Google campaigns.', tags: ['Meta', 'Google'] },
        { icon: Palette, title: 'Motion Graphics', desc: 'Simple animated creative for feeds and stories.', tags: ['Animation'] },
        { icon: Building2, title: 'Print Collateral', desc: 'Brochures, flyers, menu cards, and event material.', tags: ['Print Ready'] },
    ]
}

export const GraphicDesignProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (
        <SectionHeading>
            From brief to delivery —{' '}
            <span className="text-amber-500">5 clear steps</span>
        </SectionHeading>
    ),
    process_list: [
        { num: '01', title: 'Brief & brand alignment', desc: 'Every request checked against your existing guidelines before design starts.' },
        { num: '02', title: 'Concept & moodboarding', desc: 'For anything beyond routine social assets.' },
        { num: '03', title: 'Production', desc: 'Carousels, posters, ad creative, motion graphics.' },
        { num: '04', title: 'Structured review rounds', desc: 'Clear revision cycles, not open-ended back-and-forth.' },
        { num: '05', title: 'Delivery & asset library', desc: 'Organised, correctly-sized files ready to publish.' },
    ]
}

export const GraphicDesignIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Shirt, label: 'Retail' },
        { icon: ShoppingCart, label: 'E-Commerce' },
        { icon: School, label: 'Education' },
        { icon: Building2, label: 'Corporate' },
    ]
}

export const GraphicDesignFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'How many design requests can we send per month?', a: 'Scoped per package — talk to us about your typical monthly volume and we\'ll size it correctly.' },
        { q: 'What\'s the typical turnaround?', a: 'Standard social assets in 24–48 hours; campaign or print work scoped individually.' },
        { q: 'Do you handle both digital and print design?', a: 'Yes — brochures, menu cards, banners, and other physical collateral, not just social graphics.' },
        { q: 'Can you match our existing brand style?', a: 'Yes — we can design within an existing brand system even if we didn\'t create it.' },
        { q: 'What file formats do we receive?', a: 'Editable source files plus platform-ready exports, always.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Corporate Profile Creation
// ─────────────────────────────────────────────────────────────────────────

export const CorporateProfileHero: ServiceHeroTypes = {
    bread_crumb: "Corporate Profile Creation",
    badge: "Corporate Profile Creation",
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            Your best case, <br /> put forward{' '}
            <span className="text-amber-500">on paper and on screen</span>
        </h1>
    ),
    content: "A professional company profile — video and print — for the moments that matter: investor meetings, tenders, and partnership pitches.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['GD'],
    clientCount: "New offering",
    stats: [
        { value: '2–4 min', label: 'Typical video length' },
        { value: '2', label: 'Formats — video + print' },
        { value: '3–5 wks', label: 'Avg delivery' },
        { value: '1 team', label: 'Filming, writing, design' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/corporate-profile-creation.webp"
                    alt="Corporate Profile Creation illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const CorporateProfileAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (
        <SectionHeading>
            An evergreen asset,{' '} <br />
            <span className="text-amber-500">not another social post</span>
        </SectionHeading>
    ),
    content: "Most of what an agency makes is built to be consumed quickly and often. A corporate profile is the opposite — a considered asset for rooms where there's no second chance to make an impression.",
    what_is: [
        { icon: Award, title: 'What is a corporate profile?', body: 'A matched pair — a corporate video and a printed or digital profile document — that represents your business consistently in high-stakes settings.' },
        { icon: Play, title: 'Why video and print together', body: 'Built by one team so the story your business tells on camera is the same one it tells on paper, instead of two disconnected assets.' },
        { icon: Building2, title: 'Where it gets used', body: 'Tender submissions, investor conversations, and first meetings with large institutional clients — settings where credibility has to come through fast.' },
        { icon: RefreshCw, title: 'Built to be refreshed', body: 'The document version especially is structured so it can be updated as your achievements change, without a full rebuild.' },
    ]
}

export const CorporateProfileServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (
        <SectionHeading>
            A complete profile package,{' '}
            <span className="text-amber-500">video and print</span>
        </SectionHeading>
    ),
    service_list: [
        { icon: Play, title: 'Corporate Video', desc: 'A 2–4 minute profile video with professional narration.', tags: ['Filming', 'Voiceover'] },
        { icon: Building2, title: 'Printed Profile Booklet', desc: 'A print-ready company profile document.', tags: ['Print', 'Design'] },
        { icon: Layout, title: 'Digital PDF Version', desc: 'A web and email-ready version of the same profile.', tags: ['PDF', 'Digital'] },
        { icon: BarChart3, title: 'Social Cutdowns', desc: 'Short-form edits of the video for LinkedIn and other platforms.', tags: ['LinkedIn', 'Short-form'] },
    ]
}

export const CorporateProfileProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (
        <SectionHeading>
            From discovery to delivery —{' '}
            <span className="text-amber-500">5 clear steps</span>
        </SectionHeading>
    ),
    process_list: [
        { num: '01', title: 'Discovery & story mapping', desc: 'Understanding your history, credentials, and the specific use-case.' },
        { num: '02', title: 'Scripting & content structuring', desc: 'For both the video narration and the document copy.' },
        { num: '03', title: 'Production', desc: 'On-site filming for video; layout and design for the document.' },
        { num: '04', title: 'Editing & refinement', desc: 'Structured review rounds on both assets.' },
        { num: '05', title: 'Delivery in multiple formats', desc: 'Platform-ready video, print-ready booklet, and digital PDF.' },
    ]
}

export const CorporateProfileIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Building2, label: 'Corporate' },
        { icon: Car, label: 'Automotive' },
        { icon: Stethoscope, label: 'Healthcare' },
        { icon: School, label: 'Education' },
    ]
}

export const CorporateProfileFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Do we need to provide the script, or do you write it?', a: 'We write it, based on a discovery conversation — you review and approve before filming or production.' },
        { q: 'Can it be updated later if our achievements change?', a: 'Yes — the document version especially is built to be refreshed without a full rebuild.' },
        { q: 'Do you film on-site or in-studio?', a: 'Both, depending on what represents the business best — usually on-site for authenticity.' },
        { q: 'Can we get just the video, or just the print version?', a: 'Yes, either can be scoped independently, though there\'s a cost advantage to producing both together.' },
        { q: 'How long does production take?', a: 'Typically 3–5 weeks from discovery to final delivery, depending on filming schedules.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Social Media Planning & Management
// ─────────────────────────────────────────────────────────────────────────

export const SocialMediaHero: ServiceHeroTypes = {
    bread_crumb: "Social Media Planning & Management",
    badge: "Social Media Planning & Management",
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            A calendar with{' '} <br /> a strategy behind it —{' '}
            <span className="text-amber-500">not autopilot</span>
        </h1>
    ),
    content: "Content pillars, scheduling, and real community management across Instagram, Facebook, and LinkedIn — run by a person who's actually paying attention.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['SJ', 'CL'],
    clientCount: "25+",
    stats: [
        { value: '25+', label: 'Accounts managed' },
        { value: '4–6', label: 'Posts per week, typical' },
        { value: '<24h', label: 'DM response target' },
        { value: 'Monthly', label: 'Reporting cadence' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/social-media.webp"
                    alt="Social Media Planning & Management illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const SocialMediaAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (
        <SectionHeading>
            Posting consistently is the{' '} <br />
            <span className="text-amber-500">easy part</span>
        </SectionHeading>
    ),
    content: "What moves a social presence forward is knowing why you're posting what you're posting, and responding like a business that's paying attention.",
    what_is: [
        { icon: Layers, title: 'Planning vs. management', body: 'Planning is the content pillars and calendar. Management is publishing and responding to comments and DMs — we handle both as one connected job.' },
        { icon: BarChart3, title: 'Content pillars, not random posts', body: 'A repeatable content structure mapped to a monthly calendar, so every post serves a purpose rather than filling a slot.' },
        { icon: TrendingUp, title: 'Iteration matters more than volume', body: 'What performed and what didn\'t drives next month\'s calendar — posting more isn\'t the goal, posting the right things is.' },
        { icon: Palette, title: 'Coordinated with the rest of your marketing', body: 'The calendar reflects what\'s actually being promoted elsewhere, since planning sits with the same team producing your content and running your ads.' },
    ]
}

export const SocialMediaServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (
        <SectionHeading>
            Planning and execution,{' '}
            <span className="text-amber-500">handled as one job</span>
        </SectionHeading>
    ),
    service_list: [
        { icon: Layers, title: 'Content Calendar', desc: 'A monthly calendar built around clear content pillars.', tags: ['Strategy', 'Calendar'] },
        { icon: TrendingUp, title: 'Scheduling', desc: 'Platform-specific posting schedule across Instagram, Facebook, LinkedIn.', tags: ['Instagram', 'LinkedIn'] },
        { icon: BarChart3, title: 'Community Management', desc: 'Comment and DM response within business hours.', tags: ['DMs', 'Comments'] },
        { icon: RefreshCw, title: 'Monthly Review', desc: 'A performance summary and adjustments for next month.', tags: ['Reporting'] },
    ]
}

export const SocialMediaProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (
        <SectionHeading>
            From audit to iteration —{' '}
            <span className="text-amber-500">5 clear steps</span>
        </SectionHeading>
    ),
    process_list: [
        { num: '01', title: 'Audit & goal-setting', desc: 'Where the account stands today, and what success means for this business.' },
        { num: '02', title: 'Content pillars & calendar', desc: 'A repeatable content structure mapped to a monthly calendar.' },
        { num: '03', title: 'Production coordination', desc: 'Briefing the content, design, and video teams against the calendar.' },
        { num: '04', title: 'Publishing & community management', desc: 'Scheduled posting plus comment and DM response.' },
        { num: '05', title: 'Monthly review & iteration', desc: 'What performed, what didn\'t, and what changes next month.' },
    ]
}

export const SocialMediaIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Shirt, label: 'Retail' },
        { icon: UtensilsCrossed, label: 'Food & Dining' },
        { icon: School, label: 'Education' },
        { icon: Stethoscope, label: 'Healthcare' },
    ]
}

export const SocialMediaFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Which platforms do you cover?', a: 'Instagram, Facebook, and LinkedIn as standard; others scoped on request.' },
        { q: 'How often do you post?', a: 'Set per plan based on the business and platform — typically 4–6 times a week across channels.' },
        { q: 'Who writes the captions?', a: 'Our content team, briefed against your brand voice — see Content Creation for the writing layer specifically.' },
        { q: 'Does this include responding to comments and DMs?', a: 'Yes, within business hours, with escalation to you for anything sensitive.' },
        { q: 'How do you report progress?', a: 'A monthly summary covering reach, engagement, and follower growth against the previous month.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Content Creation
// ─────────────────────────────────────────────────────────────────────────

export const ContentCreationHero: ServiceHeroTypes = {
    bread_crumb: "Content Creation",
    badge: "Content Creation",
    heading: (
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">
            The words that carry{' '} <br /> your brand{' '}
            <span className="text-amber-500">everywhere it shows up</span>
        </h1>
    ),
    content: "Blog posts, captions, ad copy, and website copy — written with a consistent voice, in English, Hindi, or Hinglish as your audience actually needs.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['CL', 'GD'],
    clientCount: "20+",
    stats: [
        { value: '3', label: 'Languages — Eng/Hindi/Hinglish' },
        { value: '2–3 days', label: 'Standard turnaround' },
        { value: '2 rounds', label: 'Revisions included' },
        { value: '100%', label: 'Ownership on delivery' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/content-creation.webp"
                    alt="Content Creation illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const ContentCreationAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>Every other service eventually{' '} <br /><span className="text-amber-500">needs words</span></SectionHeading>),
    content: "A caption, a landing page, an ad headline, a blog post that ranks — Content Creation is where that gets written, checked against SEO where it matters.",
    what_is: [
        { icon: PenLine, title: 'What this covers', body: 'Blog posts, social captions, ad copy, email copy, and website copy — distinct from Social Media Planning\'s scheduling and Graphic Design\'s visuals.' },
        { icon: BookOpen, title: 'Voice, documented', body: 'How the brand should sound is defined once and kept consistent across every writer who touches it.' },
        { icon: Search, title: 'SEO where it counts', body: 'Blog and website copy is checked against SEO targets; social captions are written for engagement first.' },
        { icon: Globe, title: 'Multiple languages, one voice', body: 'Hindi, English, and Hinglish as the audience requires — genuinely useful for a Varanasi HNI client base.' },
    ]
}

export const ContentCreationServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>Words for every channel,{' '}<span className="text-amber-500">one connected process</span></SectionHeading>),
    service_list: [
        { icon: BookOpen, title: 'Blog & Articles', desc: 'SEO-aligned long-form content that builds authority.', tags: ['SEO', 'Long-form'] },
        { icon: PenLine, title: 'Social Captions', desc: 'Written for engagement, matched to your brand voice.', tags: ['Captions'] },
        { icon: Megaphone, title: 'Ad Copy', desc: 'Headlines and copy for Meta and Google campaigns.', tags: ['Ad Copy'] },
        { icon: Globe, title: 'Website Copy', desc: 'Page copy that reads like a person wrote it — because one did.', tags: ['Web Copy'] },
    ]
}

export const ContentCreationProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From voice to delivery —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Voice & tone definition', desc: 'How the brand should sound, documented for consistency.' },
        { num: '02', title: 'Content audit & gaps', desc: 'What\'s missing across the website, blog, and social channels.' },
        { num: '03', title: 'Editorial calendar', desc: 'What gets written, in what order, and why.' },
        { num: '04', title: 'Writing & review', desc: 'Drafted, checked against brand voice and SEO targets.' },
        { num: '05', title: 'Distribution handoff', desc: 'Delivered in the format each channel actually needs.' },
    ]
}

export const ContentCreationIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: School, label: 'Education' },
        { icon: Stethoscope, label: 'Healthcare' },
        { icon: Building2, label: 'Corporate' },
        { icon: ShoppingCart, label: 'E-Commerce' },
    ]
}

export const ContentCreationFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'How many revisions are included?', a: 'Two structured rounds per piece as standard.' },
        { q: 'Do we own the content?', a: 'Yes, fully, on delivery.' },
        { q: 'Is this SEO-optimised by default?', a: 'Blog and website copy, yes. Social captions are written for engagement first.' },
        { q: 'Can you write in Hindi or Hinglish?', a: 'Yes — matched to how your specific audience actually communicates.' },
        { q: 'What\'s the typical turnaround?', a: '2–3 business days for standard pieces; longer for in-depth articles.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Videography
// ─────────────────────────────────────────────────────────────────────────

export const VideographyHero: ServiceHeroTypes = {
    bread_crumb: "Videography",
    badge: "Videography",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">Footage worth{' '} <br /> building something{' '}<span className="text-amber-500">out of</span></h1>),
    content: "Professional filming — on location or in studio — planned with the final platform in mind, not shot generically and figured out later.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['SB', 'DA'],
    clientCount: "15+",
    stats: [
        { value: '15+', label: 'Productions shot' },
        { value: 'Half–full day', label: 'Typical shoot length' },
        { value: 'Same day', label: 'Footage review' },
        { value: '2', label: 'Formats — location or studio' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/videography.webp"
                    alt="Videography illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const VideographyAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>Good editing can&apos;t fix{' '} <br /><span className="text-amber-500">badly shot footage</span></SectionHeading>),
    content: "Videography is the production side, deliberately separated from editing — filming and post-production are different skills.",
    what_is: [
        { icon: Camera, title: 'What is videography, here?', body: 'Planning the shoot, getting lighting and framing right, and capturing enough coverage to actually give an editor something to work with.' },
        { icon: Film, title: 'Why it\'s separate from editing', body: 'Filming and post-production are different skills — treating them as one blurred service tends to produce mediocre results at both stages.' },
        { icon: Layout, title: 'Planned for the platform', body: 'The shoot is planned with the final platform in mind from the start, not filmed generically and figured out later.' },
        { icon: RefreshCw, title: 'Same-day review', body: 'A same-day or next-day check that everything needed was actually captured, before the crew wraps.' },
    ]
}

export const VideographyServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>Production, planned{' '}<span className="text-amber-500">and executed properly</span></SectionHeading>),
    service_list: [
        { icon: Camera, title: 'On-Location Filming', desc: 'Shot where it matters most for authenticity.', tags: ['On-Location'] },
        { icon: Building2, title: 'Studio Filming', desc: 'Controlled setting for interviews and product work.', tags: ['Studio'] },
        { icon: Layers, title: 'Multi-Angle Coverage', desc: 'Enough coverage for real flexibility in the edit.', tags: ['Coverage'] },
        { icon: Music, title: 'Audio Capture', desc: 'Clean audio captured on-set, not fixed in post.', tags: ['Audio'] },
    ]
}

export const VideographyProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From plan to handoff —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Pre-production planning', desc: 'Shot list, script or outline, location or studio decision.' },
        { num: '02', title: 'Setup', desc: 'Lighting, audio, and camera setup appropriate to the location.' },
        { num: '03', title: 'Filming', desc: 'The shoot itself, with enough coverage for flexibility in editing.' },
        { num: '04', title: 'Raw footage review', desc: 'A same-day or next-day check that everything needed was captured.' },
        { num: '05', title: 'Handoff to editing', desc: 'Organised footage delivered to the edit team.' },
    ]
}

export const VideographyIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Plane, label: 'Travel' },
        { icon: School, label: 'Education' },
        { icon: Building2, label: 'Corporate' },
        { icon: Shirt, label: 'Retail' },
    ]
}

export const VideographyFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'On-location or studio?', a: 'Whichever suits the content — most brand and product work is on-location for authenticity.' },
        { q: 'How long does a shoot take?', a: 'Half a day for standard content; full-day for larger productions.' },
        { q: 'Do we need to be present during filming?', a: 'Not required, but helpful for brand-specific content and interviews.' },
        { q: 'What equipment do you bring?', a: 'Professional cameras, lighting, and audio gear as standard; drone on request.' },
        { q: 'Can you film and edit as one package?', a: 'Yes — most clients book Videography and Video Editing together.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Video Editing
// ─────────────────────────────────────────────────────────────────────────

export const VideoEditingHero: ServiceHeroTypes = {
    bread_crumb: "Video Editing",
    badge: "Video Editing",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">Raw footage,{' '} <br /> cut for where it&apos;s{' '}<span className="text-amber-500">actually going</span></h1>),
    content: "Reels, YouTube videos, and ad creative — edited for the platform they're published on, not a generic one-size cut.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['DA', 'CL'],
    clientCount: "15+",
    stats: [
        { value: '3–5 days', label: 'Standard turnaround' },
        { value: '2 rounds', label: 'Revisions included' },
        { value: '100%', label: 'Platform-correct exports' },
        { value: 'Any source', label: 'Ours or your footage' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/video-editing.webp"
                    alt="Video Editing illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const VideoEditingAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>A video that works on YouTube{' '} <br /><span className="text-amber-500">rarely works unchanged on Instagram</span></SectionHeading>),
    content: "Editing is where pacing, captions, music, and format decisions turn footage into something built for where it's actually going to run.",
    what_is: [
        { icon: Film, title: 'What this covers', body: 'The post-production layer — pacing, cuts, colour, sound, and platform-correct exports, from footage we shot or footage you already have.' },
        { icon: Layout, title: 'Platform-first editing', body: 'A cut built for Reels looks different from one built for YouTube — format decisions are made per destination, not as an afterthought.' },
        { icon: Music, title: 'Sound design included', body: 'Pacing-matched music and clean audio, not just visual cuts.' },
        { icon: RefreshCw, title: 'Structured revisions', body: 'Two rounds as standard, so feedback has a clear, fast path back into the edit.' },
    ]
}

export const VideoEditingServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>Post-production,{' '}<span className="text-amber-500">built for the destination</span></SectionHeading>),
    service_list: [
        { icon: Film, title: 'Platform-Ready Cuts', desc: 'Reels, YouTube, and ad formats, sized correctly.', tags: ['Reels', 'YouTube'] },
        { icon: PenLine, title: 'Captions & Subtitles', desc: 'Included as standard for social formats.', tags: ['Captions'] },
        { icon: Palette, title: 'Colour Grading', desc: 'A consistent look across every video.', tags: ['Colour'] },
        { icon: Music, title: 'Sound Design', desc: 'Music and clean audio mixed for the platform.', tags: ['Sound'] },
    ]
}

export const VideoEditingProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From footage to final cut —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Footage review & selection', desc: 'Sorting through everything shot, picking what earns a place in the edit.' },
        { num: '02', title: 'Story & pacing structure', desc: 'The order and rhythm that actually holds attention.' },
        { num: '03', title: 'Edit & colour grade', desc: 'The cut itself, graded for a consistent look.' },
        { num: '04', title: 'Sound design & music', desc: 'Pacing-matched music and clean audio.' },
        { num: '05', title: 'Platform-specific exports', desc: 'Sized and captioned correctly for each destination.' },
    ]
}

export const VideoEditingIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: ShoppingCart, label: 'E-Commerce' },
        { icon: School, label: 'Education' },
        { icon: UtensilsCrossed, label: 'Food & Dining' },
        { icon: Stethoscope, label: 'Healthcare' },
    ]
}

export const VideoEditingFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Can you edit footage we already have?', a: 'Yes — client-provided footage is fine.' },
        { q: 'How many revision rounds are included?', a: 'Two rounds as standard.' },
        { q: 'What\'s the typical turnaround?', a: '3–5 business days depending on length and complexity.' },
        { q: 'Do you add captions and subtitles?', a: 'Yes, included as standard for social formats.' },
        { q: 'What formats do we receive?', a: 'Platform-correct exports for wherever the video is going.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Influencer Marketing
// ─────────────────────────────────────────────────────────────────────────

export const InfluencerMarketingHero: ServiceHeroTypes = {
    bread_crumb: "Influencer Marketing",
    badge: "Influencer Marketing",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">The right creator,{' '} <br /> not the{' '}<span className="text-amber-500">biggest follower count</span></h1>),
    content: "Matching brands with relevant micro and mid-tier creators, vetted for real engagement — run end to end from sourcing to reporting.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['SJ', 'MF'],
    clientCount: "New offering",
    stats: [
        { value: '2–3 wks', label: 'Typical setup time' },
        { value: 'Vetted', label: 'Every creator checked' },
        { value: 'Micro–mid', label: 'Tier focus' },
        { value: 'Full', label: 'Campaign management' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/influencer-marketing.webp"
                    alt="Influencer Marketing illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const InfluencerMarketingAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>The biggest influencer{' '} <br /><span className="text-amber-500">usually isn&apos;t the right one</span></SectionHeading>),
    content: "For most clients, a set of relevant micro and mid-tier creators whose audience actually overlaps with the target customer outperforms one big name.",
    what_is: [
        { icon: Users, title: 'Micro vs. macro creators', body: 'Local Varanasi voices for hyperlocal reach, or niche creators in the right category for national campaigns — matched to the actual goal.' },
        { icon: Star, title: 'Vetting for real engagement', body: 'Engagement-rate and audience-quality checks before anyone is added to a shortlist — not just a follower count.' },
        { icon: Megaphone, title: 'Run end to end', body: 'Sourcing, outreach, negotiation, briefing, and performance reporting handled as one managed campaign.' },
        { icon: Shield, title: 'Usage rights, agreed upfront', body: 'What the brand can do with creator content is negotiated and specified in the brief before anything ships.' },
    ]
}

export const InfluencerMarketingServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>Campaigns run{' '}<span className="text-amber-500">start to finish</span></SectionHeading>),
    service_list: [
        { icon: Users, title: 'Creator Sourcing & Vetting', desc: 'A shortlist checked for real engagement, not inflated followings.', tags: ['Vetting'] },
        { icon: Megaphone, title: 'Outreach & Negotiation', desc: 'Terms, deliverables, and usage rights agreed upfront.', tags: ['Negotiation'] },
        { icon: Layout, title: 'Campaign Briefing', desc: 'Creators briefed clearly, content reviewed before it goes live.', tags: ['Briefing'] },
        { icon: BarChart3, title: 'Performance Reporting', desc: 'Reach, engagement, and any tracked conversions.', tags: ['Reporting'] },
    ]
}

export const InfluencerMarketingProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From goal to results —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Audience & goal definition', desc: 'Who the campaign actually needs to reach, and what success looks like.' },
        { num: '02', title: 'Creator sourcing & vetting', desc: 'Shortlist built and checked for real engagement.' },
        { num: '03', title: 'Outreach & negotiation', desc: 'Terms, deliverables, and usage rights agreed upfront.' },
        { num: '04', title: 'Campaign briefing & execution', desc: 'Creators briefed clearly, content reviewed before it goes live.' },
        { num: '05', title: 'Performance reporting', desc: 'Reach, engagement, and any tracked conversions from the campaign.' },
    ]
}

export const InfluencerMarketingIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Shirt, label: 'Retail' },
        { icon: UtensilsCrossed, label: 'Food & Dining' },
        { icon: Stethoscope, label: 'Healthcare' },
        { icon: School, label: 'Education' },
    ]
}

export const InfluencerMarketingFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Micro-influencers or larger creators?', a: 'Depends on the goal — usually a mix, weighted toward micro/mid-tier for engagement-driven campaigns.' },
        { q: 'How do you check a creator\'s followers are real?', a: 'Engagement-rate and audience-quality checks before anyone\'s added to a shortlist.' },
        { q: 'Who owns the content afterward?', a: 'Usage rights are negotiated upfront and specified in the brief — this varies by creator and campaign.' },
        { q: 'What\'s a realistic budget range?', a: 'Varies widely by creator tier and campaign scope — discussed once goals are clear.' },
        { q: 'How long does a campaign take to set up?', a: 'Typically 2–3 weeks from brief to content going live, allowing for creator scheduling.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Performance Marketing
// ─────────────────────────────────────────────────────────────────────────

export const PerformanceMarketingHero: ServiceHeroTypes = {
    bread_crumb: "Performance Marketing",
    badge: "Performance Marketing",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">Spend tied to{' '} <br /> results —{' '}<span className="text-amber-500">tracked openly</span></h1>),
    content: "The strategy layer above paid execution — deciding which channels deserve budget, and reporting cost-per-result without vanity metrics.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['BS', 'GD'],
    clientCount: "15+",
    stats: [
        { value: '15+', label: 'Accounts optimised' },
        { value: 'Weekly', label: 'Optimisation cycle' },
        { value: 'Full', label: 'ROAS transparency' },
        { value: 'Multi', label: 'Channel strategy' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/performance-marketing.webp"
                    alt="Performance Marketing illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const PerformanceMarketingAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>The strategy layer{' '} <br /><span className="text-amber-500">above the ad account</span></SectionHeading>),
    content: "This is where budget allocation and channel decisions get made — Google & Meta Ads Management is the execution layer beneath it.",
    what_is: [
        { icon: Target, title: 'Strategy vs. execution', body: 'This page covers the thinking — which channels deserve budget, and how it should move between them. Ads Management covers the hands-on campaign build.' },
        { icon: LineChart, title: 'Funnel-first planning', body: 'Paid media is planned against where it actually fits in the customer journey, not bought as a generic tactic.' },
        { icon: TrendingUp, title: 'Continuous optimisation', body: 'Budget shifts toward what\'s converting, away from what isn\'t — reviewed on a weekly cycle.' },
        { icon: BarChart3, title: 'Honest reporting', body: 'Cost per result, reported transparently — no ad budget disappears into a report full of impressions with no bottom line.' },
    ]
}

export const PerformanceMarketingServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>Strategy that decides{' '}<span className="text-amber-500">where budget goes</span></SectionHeading>),
    service_list: [
        { icon: Target, title: 'Media Plan', desc: 'A channel mix recommendation based on where your audience actually is.', tags: ['Strategy'] },
        { icon: LineChart, title: 'Budget Allocation', desc: 'How spend should move across channels for the best return.', tags: ['Budgeting'] },
        { icon: TrendingUp, title: 'Continuous Optimisation', desc: 'Ongoing adjustment based on what\'s actually converting.', tags: ['Optimisation'] },
        { icon: BarChart3, title: 'ROAS Reporting', desc: 'Transparent spend and return reporting.', tags: ['Reporting'] },
    ]
}

export const PerformanceMarketingProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From funnel to ROAS —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Funnel & goal mapping', desc: 'What the customer journey looks like, and where paid media fits.' },
        { num: '02', title: 'Channel selection', desc: 'Which platforms deserve budget, based on where the audience is.' },
        { num: '03', title: 'Campaign build', desc: 'Translated into live campaigns with the execution team.' },
        { num: '04', title: 'Continuous optimisation', desc: 'Budget shifted toward what\'s converting.' },
        { num: '05', title: 'ROAS reporting', desc: 'Clear, honest reporting on cost per result.' },
    ]
}

export const PerformanceMarketingIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: ShoppingCart, label: 'E-Commerce' },
        { icon: Shirt, label: 'Retail' },
        { icon: Car, label: 'Automotive' },
        { icon: Building2, label: 'Corporate' },
    ]
}

export const PerformanceMarketingFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'How is this different from Google & Meta Ads Management?', a: 'This is the strategy and budget-allocation layer; that page is the hands-on campaign execution.' },
        { q: 'What\'s a reasonable minimum ad spend?', a: 'Varies by industry and goal — discussed once your funnel and targets are clear.' },
        { q: 'How do you track ROAS?', a: 'Through conversion tracking set up on your site or store, tied back to actual ad spend.' },
        { q: 'How often do you report?', a: 'Weekly optimisation notes, full report monthly.' },
        { q: 'Do you only run Google and Meta, or other channels too?', a: 'Google and Meta are the primary channels; other platforms considered where the audience genuinely justifies it.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Google & Meta Ads Management
// ─────────────────────────────────────────────────────────────────────────

export const AdsManagementHero: ServiceHeroTypes = {
    bread_crumb: "Google & Meta Ads Management",
    badge: "Google & Meta Ads Management",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">Campaigns built,{' '} <br /> tested, and{' '}<span className="text-amber-500">optimised weekly</span></h1>),
    content: "Hands-on management across Google Search, Display, Instagram, and Facebook — not a set-and-forget ad account.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['BS', 'MF'],
    clientCount: "18+",
    stats: [
        { value: '18+', label: 'Ad accounts managed' },
        { value: 'Weekly', label: 'Optimisation' },
        { value: 'Full', label: 'Retargeting setup' },
        { value: 'Monthly', label: 'Reporting' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/google-meta-ads-management.webp"
                    alt="Google & Meta Ads Management illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const AdsManagementAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>The execution layer{' '} <br /><span className="text-amber-500">beneath the strategy</span></SectionHeading>),
    content: "Whether you already have a Performance Marketing strategy or just need someone running ads well, this is where campaigns actually get built.",
    what_is: [
        { icon: MousePointerClick, title: 'What this covers', body: 'Account setup, audience and keyword targeting, creative testing, and bid management across Google and Meta.' },
        { icon: Search, title: 'Search, Display & Shopping', body: 'On Google specifically — matched to what your audience is actually searching for.' },
        { icon: Users, title: 'Feed, Reels & retargeting', body: 'On Meta specifically — reaching people who\'ve already shown interest, not just cold audiences.' },
        { icon: BarChart3, title: 'Tested, not guessed', body: 'Creative and copy variants tested against each other, with budget shifted toward what wins.' },
    ]
}

export const AdsManagementServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>Full campaign management,{' '}<span className="text-amber-500">across both platforms</span></SectionHeading>),
    service_list: [
        { icon: Search, title: 'Google Search & Display', desc: 'Campaigns built around what your audience actually searches.', tags: ['Google Ads'] },
        { icon: Users, title: 'Meta Feed & Reels', desc: 'Instagram and Facebook campaigns, tested and optimised.', tags: ['Meta Ads'] },
        { icon: RefreshCw, title: 'Retargeting Setup', desc: 'Reaching people who\'ve already shown interest.', tags: ['Retargeting'] },
        { icon: BarChart3, title: 'Weekly Optimisation', desc: 'Ongoing adjustment based on real performance data.', tags: ['Optimisation'] },
    ]
}

export const AdsManagementProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From setup to scale —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Account audit & setup', desc: 'Cleaning up or building the ad account structure correctly.' },
        { num: '02', title: 'Audience & keyword research', desc: 'Who to target, and which searches to bid on.' },
        { num: '03', title: 'Campaign build', desc: 'Structured campaigns with clear objectives per ad set.' },
        { num: '04', title: 'A/B testing', desc: 'Creative and copy variants tested against each other.' },
        { num: '05', title: 'Optimisation & scaling', desc: 'Budget shifted toward what\'s winning.' },
    ]
}

export const AdsManagementIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: ShoppingCart, label: 'E-Commerce' },
        { icon: Shirt, label: 'Retail' },
        { icon: Stethoscope, label: 'Healthcare' },
        { icon: School, label: 'Education' },
    ]
}

export const AdsManagementFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'What\'s the minimum ad budget to get started?', a: 'Varies by industry — we\'ll give a realistic number once we understand your goals.' },
        { q: 'Who owns the ad account?', a: 'You do — it\'s set up under your business, we manage access.' },
        { q: 'Is retargeting included?', a: 'Yes, as a standard part of campaign setup.' },
        { q: 'How often do you report?', a: 'Weekly notes on performance, a full report monthly.' },
        { q: 'What kinds of campaigns do you run?', a: 'Search, Display, and Shopping on Google; feed, Reels, and retargeting on Meta — matched to your goals.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// WhatsApp Marketing
// ─────────────────────────────────────────────────────────────────────────

export const WhatsAppMarketingHero: ServiceHeroTypes = {
    bread_crumb: "WhatsApp Marketing",
    badge: "WhatsApp Marketing",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">Reach customers{' '} <br /> where they{' '}<span className="text-amber-500">actually check daily</span></h1>),
    content: "Catalogs, broadcasts, and automated responses built on WhatsApp Business — a direct, high-open-rate channel done properly, not misused as an SMS blast list.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['SJ', 'DA'],
    clientCount: "New offering",
    stats: [
        { value: 'API', label: 'Business setup' },
        { value: 'Opt-in', label: 'Consent-based only' },
        { value: 'Catalogs', label: 'Product integration' },
        { value: 'Verified', label: 'Message templates' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/whatsapp-marketing.webp"
                    alt="WhatsApp Marketing illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const WhatsAppMarketingAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>For a lot of Indian consumers,{' '} <br /><span className="text-amber-500">WhatsApp opens first</span></SectionHeading>),
    content: "This channel gets misused constantly — treated like an SMS blast list. We build it as a genuine service channel, done properly.",
    what_is: [
        { icon: MessageCircle, title: 'API vs. the free app', body: 'The Business API allows catalogs, broadcasts at scale, and automation the free WhatsApp Business app can\'t do.' },
        { icon: Shield, title: 'Consent, done properly', body: 'Opt-in only, tracked properly — we don\'t build broadcast lists from unconsented contacts.' },
        { icon: ShoppingCart, title: 'Catalogs that actually sell', body: 'Especially strong for retail — customers browse products without leaving the chat.' },
        { icon: Send, title: 'Where it fits best', body: 'Retail catalogs, healthcare appointment reminders, and local service businesses where a direct channel beats another feed post.' },
    ]
}

export const WhatsAppMarketingServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>A real service channel,{' '}<span className="text-amber-500">not a broadcast list</span></SectionHeading>),
    service_list: [
        { icon: MessageCircle, title: 'Business API Setup', desc: 'Getting the account properly set up and verified.', tags: ['API Setup'] },
        { icon: ShoppingCart, title: 'Catalog Integration', desc: 'Product catalogs customers can browse in-chat.', tags: ['Catalog'] },
        { icon: Send, title: 'Broadcast Campaigns', desc: 'Approved message templates sent on a proper schedule.', tags: ['Broadcasts'] },
        { icon: Bot, title: 'Automated Responses', desc: 'Basic flows that handle common questions instantly.', tags: ['Automation'] },
    ]
}

export const WhatsAppMarketingProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From setup to reporting —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Business API setup & verification', desc: 'Getting the account properly set up and verified.' },
        { num: '02', title: 'List building & segmentation', desc: 'Organising contacts so broadcasts go to the right people.' },
        { num: '03', title: 'Catalog & template creation', desc: 'Product catalogs and approved message templates.' },
        { num: '04', title: 'Campaign scheduling', desc: 'Broadcasts planned and sent on a schedule that respects the channel.' },
        { num: '05', title: 'Response management & reporting', desc: 'Tracking replies and campaign performance.' },
    ]
}

export const WhatsAppMarketingIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Shirt, label: 'Retail' },
        { icon: Stethoscope, label: 'Healthcare' },
        { icon: UtensilsCrossed, label: 'Food & Dining' },
        { icon: Building2, label: 'Local Services' },
    ]
}

export const WhatsAppMarketingFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Is this the regular WhatsApp Business app or the API?', a: 'The API — it allows catalogs, broadcasts at scale, and automation that the free app can\'t do.' },
        { q: 'How is consent handled?', a: 'Opt-in only, tracked properly — we don\'t build broadcast lists from unconsented contacts.' },
        { q: 'Do message templates need approval?', a: 'Yes, Meta reviews and approves templates before they can be sent — we handle that process.' },
        { q: 'Can this include a product catalog?', a: 'Yes, especially useful for retail and e-commerce clients.' },
        { q: 'What does this typically cost?', a: 'API and messaging have their own platform costs on top of our management fee — we\'ll walk through both.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// SEO Consultancy
// ─────────────────────────────────────────────────────────────────────────

export const SEOConsultancyHero: ServiceHeroTypes = {
    bread_crumb: "SEO Consultancy",
    badge: "SEO Consultancy",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">SEO built for how{' '} <br /> search actually works{' '}<span className="text-amber-500">in Varanasi</span></h1>),
    content: "Not a templated checklist copied from a national playbook — a methodology built around how Tier 2–3 Indian search behaviour actually shows up in the data.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['GD', 'CL'],
    clientCount: "20+",
    stats: [
        { value: '2 levels', label: 'National + local keyword research' },
        { value: '3–6 mo', label: 'Typical ranking movement' },
        { value: 'Monthly', label: 'Reporting' },
        { value: 'GBP', label: 'Included management' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/seo-consultancy.webp"
                    alt="SEO Consultancy illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const SEOConsultancyAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>Most SEO advice is written{' '} <br /><span className="text-amber-500">for metro markets</span></SectionHeading>),
    content: "Tier 2–3 cities don't work that way — city-level keyword tools routinely undercount real demand. Reading that as \"no demand\" is the most common local SEO mistake.",
    what_is: [
        { icon: Search, title: 'Two-level keyword research', body: 'National-level volume benchmarking paired with local-intent mapping, rather than trusting city-level tool data at face value.' },
        { icon: MapPin, title: 'Why Varanasi data undercounts', body: 'Tools like Ubersuggest routinely show near-zero volume for real, common searches at the city level — that\'s a tooling gap, not an absence of demand.' },
        { icon: TrendingUp, title: 'Content depth as the differentiator', body: 'Competitor sites across Varanasi tend to be thin, single-page efforts — genuine depth is what actually earns rankings here.' },
        { icon: BarChart3, title: 'Reported on what matters', body: 'Rankings and traffic, but most importantly, leads and enquiries traced back to organic search.' },
    ]
}

export const SEOConsultancyServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>A methodology built{' '}<span className="text-amber-500">for this exact market</span></SectionHeading>),
    service_list: [
        { icon: Search, title: 'SEO Audit', desc: 'A full technical and content audit of what\'s working, broken, or missing.', tags: ['Audit'] },
        { icon: MapPin, title: 'Local + National Keyword Strategy', desc: 'Two-level keyword research, not city-level data taken at face value.', tags: ['Keyword Research'] },
        { icon: Shield, title: 'Technical SEO & Schema', desc: 'Site speed, structured data, and crawlability fixes.', tags: ['Technical'] },
        { icon: Building2, title: 'Google Business Profile', desc: 'Setup, optimisation, and ongoing management.', tags: ['Local SEO'] },
    ]
}

export const SEOConsultancyProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From audit to iteration —{' '}<span className="text-amber-500">6 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Technical & content audit', desc: 'A full read of what\'s currently working, broken, or missing.' },
        { num: '02', title: 'Two-level keyword research', desc: 'National-level benchmarking paired with local-intent mapping.' },
        { num: '03', title: 'On-page & content strategy', desc: 'Content built with genuine depth, where most competitors don\'t bother.' },
        { num: '04', title: 'Technical SEO & schema', desc: 'Site speed, structured data, crawlability.' },
        { num: '05', title: 'Local SEO', desc: 'Google Business Profile, local citations, review strategy.' },
        { num: '06', title: 'Ongoing reporting & iteration', desc: 'Monthly tracking against rankings, traffic, and actual leads.' },
    ]
}

export const SEOConsultancyIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Building2, label: 'Corporate' },
        { icon: Stethoscope, label: 'Healthcare' },
        { icon: ShoppingCart, label: 'E-Commerce' },
        { icon: School, label: 'Education' },
    ]
}

export const SEOConsultancyFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'How long until we see results?', a: 'Technical fixes can show impact within weeks; genuine ranking movement typically takes 3–6 months, longer for competitive national terms.' },
        { q: 'Do you focus on local or national SEO?', a: 'Both, deliberately combined — most businesses need to rank locally in Varanasi and, where relevant, nationally too.' },
        { q: 'What do you need from us?', a: 'Website access, and content input for pages that need a subject-matter expert\'s voice.' },
        { q: 'Do you write the content too?', a: 'Yes, in coordination with Content Creation — SEO strategy and SEO writing are handled as one connected process.' },
        { q: 'What do you actually report on?', a: 'Rankings, organic traffic, and — the metric that matters most — leads and enquiries traced back to organic search.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Analytics & Reporting
// ─────────────────────────────────────────────────────────────────────────

export const AnalyticsReportingHero: ServiceHeroTypes = {
    bread_crumb: "Analytics & Reporting",
    badge: "Analytics & Reporting",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">Real numbers,{' '} <br /> reported in{' '}<span className="text-amber-500">plain language</span></h1>),
    content: "The proof layer behind every other service — a dashboard that shows what matters, not fifteen metrics that don't.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['GD', 'BS'],
    clientCount: "All clients",
    stats: [
        { value: 'Live', label: 'Dashboard access' },
        { value: 'Monthly', label: 'Written reports' },
        { value: 'Quarterly', label: 'Strategy reviews' },
        { value: 'GA4', label: 'Tracking setup' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/analytics-reporting.webp"
                    alt="Analytics & Reporting illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const AnalyticsReportingAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>Every service on this site{' '} <br /><span className="text-amber-500">produces data</span></SectionHeading>),
    content: "This is what turns that data into something a business owner can actually read and act on, tying ads, social, SEO, and the website into one picture.",
    what_is: [
        { icon: PieChart, title: 'One dashboard, not five tabs', body: 'A single place to see what matters, instead of digging through separate platforms for ads, social, and site analytics.' },
        { icon: Users, title: 'Written for owners, not marketers', body: 'Plain language, the numbers that actually matter, and a clear "here\'s what\'s next" — not a wall of charts.' },
        { icon: LineChart, title: 'Runs underneath everything else', body: 'Not a standalone silo — it ties together what\'s happening across every other service you have with us.' },
        { icon: RefreshCw, title: 'Quarterly step-back', body: 'Beyond the monthly report, a periodic check on whether the overall strategy still makes sense.' },
    ]
}

export const AnalyticsReportingServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>Reporting that&apos;s actually{' '}<span className="text-amber-500">read, not filed away</span></SectionHeading>),
    service_list: [
        { icon: PieChart, title: 'Custom KPI Dashboard', desc: 'Live access to the numbers that actually matter for your business.', tags: ['Dashboard'] },
        { icon: BarChart3, title: 'Monthly Reports', desc: 'A plain-language summary, not a raw data export.', tags: ['Monthly'] },
        { icon: RefreshCw, title: 'Quarterly Strategy Review', desc: 'A step back to check whether the approach still makes sense.', tags: ['Quarterly'] },
        { icon: LineChart, title: 'Tracking Setup', desc: 'GA4 and conversion pixels, implemented correctly from the start.', tags: ['GA4'] },
    ]
}

export const AnalyticsReportingProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From tracking to insight —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Goal & KPI definition', desc: 'Deciding what actually counts as success for this business.' },
        { num: '02', title: 'Tracking setup', desc: 'Analytics and tracking correctly implemented across site and campaigns.' },
        { num: '03', title: 'Dashboard build', desc: 'One place to see what matters.' },
        { num: '04', title: 'Monthly reporting', desc: 'A plain-language summary, not a raw data export.' },
        { num: '05', title: 'Quarterly strategy review', desc: 'A step back to check whether the overall approach still makes sense.' },
    ]
}

export const AnalyticsReportingIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Building2, label: 'Corporate' },
        { icon: ShoppingCart, label: 'E-Commerce' },
        { icon: Shirt, label: 'Retail' },
        { icon: Stethoscope, label: 'Healthcare' },
    ]
}

export const AnalyticsReportingFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'What exactly gets tracked?', a: 'Depends on the business — typically traffic, leads, conversions, and ad performance, set up against your specific goals.' },
        { q: 'Do we get dashboard access ourselves?', a: 'Yes, live access alongside the monthly written report.' },
        { q: 'How often do you report?', a: 'Monthly as standard, with a deeper quarterly strategy review.' },
        { q: 'Can this be a standalone service, or only bundled?', a: 'It works both ways — standalone for businesses managing their own marketing, or bundled with any other service here.' },
        { q: 'What if our current tracking is a mess?', a: 'That\'s usually the starting point — a clean tracking setup is step one before any reporting can be trusted.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Mobile App Development
// ─────────────────────────────────────────────────────────────────────────

export const MobileAppHero: ServiceHeroTypes = {
    bread_crumb: "Mobile App Development",
    badge: "Mobile App Development",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">Apps built for{' '} <br /> a specific{' '}<span className="text-amber-500">business goal</span></h1>),
    content: "Bookings, orders, service delivery — not built just to have a presence in the app stores. If a website does the job better, we'll tell you that too.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['GD', 'CL'],
    clientCount: "New offering",
    stats: [
        { value: '8–14 wks', label: 'Typical build time' },
        { value: 'iOS + Android', label: 'Platform coverage' },
        { value: 'Full', label: 'Store submission handled' },
        { value: '1 team', label: 'App + backend + brand' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/app-dev.webp"
                    alt="Mobile App Development illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const MobileAppAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>An app only earns its place{' '} <br /><span className="text-amber-500">if it does something a website can&apos;t</span></SectionHeading>),
    content: "Push notifications, offline access, a smoother repeat-customer checkout — that question gets asked before any development begins.",
    what_is: [
        { icon: Smartphone, title: 'Native vs. cross-platform', body: 'Whether native iOS/Android or a cross-platform framework makes sense depends on complexity and performance needs — recommended after discovery, not by default.' },
        { icon: Code2, title: 'Backend included', body: 'Most apps need a real backend behind them — API integration, data storage, and business logic, not just a UI shell.' },
        { icon: Database, title: 'Built to plug into what exists', body: 'An app built here connects to your existing website and backend, instead of becoming a disconnected second system.' },
        { icon: RefreshCw, title: 'Store approval, handled', body: 'Submission and the back-and-forth with Apple and Google review is handled for you, end to end.' },
    ]
}

export const MobileAppServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>From idea{' '}<span className="text-amber-500">to app store</span></SectionHeading>),
    service_list: [
        { icon: Smartphone, title: 'iOS & Android Apps', desc: 'Native or cross-platform, matched to project needs.', tags: ['iOS', 'Android'] },
        { icon: Database, title: 'Backend Integration', desc: 'APIs, data storage, and business logic behind the UI.', tags: ['Backend'] },
        { icon: Layout, title: 'UI/UX Design', desc: 'Designed for how people actually use a phone.', tags: ['Design'] },
        { icon: RefreshCw, title: 'App Store Deployment', desc: 'Submission and approval handled end to end.', tags: ['Deployment'] },
    ]
}

export const MobileAppProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From discovery to launch —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Discovery & platform decision', desc: 'Whether native, cross-platform, or both actually makes sense.' },
        { num: '02', title: 'UI/UX design', desc: 'Designed for how people actually use a phone, not a shrunk website.' },
        { num: '03', title: 'Development', desc: 'Built cross-platform or native depending on the discovery outcome.' },
        { num: '04', title: 'Testing', desc: 'Across real devices, not just simulators.' },
        { num: '05', title: 'App store deployment', desc: 'Submission and approval handled end to end.' },
    ]
}

export const MobileAppIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Shirt, label: 'Retail' },
        { icon: ShoppingCart, label: 'E-Commerce' },
        { icon: Stethoscope, label: 'Healthcare' },
        { icon: School, label: 'Education' },
    ]
}

export const MobileAppTechStack: ServiceTechStackType = {
    techstack_list: [
        { category: 'Frontend', icon: Code2, items: ['React Native', 'Flutter', 'TypeScript'] },
        { category: 'Backend', icon: Server, items: ['Node.js', 'PostgreSQL', 'REST APIs'] },
        { category: 'DevOps', icon: GitBranch, items: ['App Store Connect', 'Google Play Console', 'CI/CD'] },
    ]
}

export const MobileAppFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Native or cross-platform — which do we need?', a: 'Depends on the complexity and performance needs of the app — we\'ll recommend based on discovery, not by default.' },
        { q: 'Do you handle app store approval?', a: 'Yes, submission and the back-and-forth with Apple/Google review is handled for you.' },
        { q: 'Is ongoing maintenance included?', a: 'Scoped separately — apps need updates as OS versions change, and we can cover that under a maintenance plan.' },
        { q: 'How long does development take?', a: 'Typically 8–14 weeks depending on complexity.' },
        { q: 'What drives the cost most?', a: 'Backend complexity and the number of integrations more than the UI itself.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// E-Commerce Website Development
// ─────────────────────────────────────────────────────────────────────────

export const EcommerceDevHero: ServiceHeroTypes = {
    bread_crumb: "E-Commerce Website Development",
    badge: "E-Commerce Website Development",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">Online stores{' '} <br /> built to{' '}<span className="text-amber-500">actually sell</span></h1>),
    content: "Proper catalog structure, working payment integration, and checkout flows that don't lose customers halfway through.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['GD', 'BS'],
    clientCount: "18+",
    stats: [
        { value: '18+', label: 'Stores built' },
        { value: '6–10 wks', label: 'Typical build time' },
        { value: 'Razorpay', label: 'Payment integration' },
        { value: 'No limit', label: 'Catalog size' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/ecommerce-development.webp"
                    alt="E-Commerce Website Development illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const EcommerceDevAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>The build phase,{' '} <br /><span className="text-amber-500">done properly the first time</span></SectionHeading>),
    content: "Getting a store live with products correctly catalogued, payments working, and shipping set up properly from day one.",
    what_is: [
        { icon: ShoppingCart, title: 'Platform choice matters', body: 'Laravel for fully custom stores, Shopify where that\'s the better fit, or a headless Next.js front end — chosen for your actual needs, not a default.' },
        { icon: CreditCard, title: 'Real payment integration', body: 'Live gateway integration, including Razorpay, rather than a demo checkout that gets fixed later.' },
        { icon: Package, title: 'Catalog structure, planned upfront', body: 'Categories, variants, and inventory structured properly from the start — not bolted on after launch.' },
        { icon: RefreshCw, title: 'Build vs. ongoing operation', body: 'This page covers the build. Running the store day to day afterward is its own service — see E-Commerce Business Management.' },
    ]
}

export const EcommerceDevServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>Everything needed{' '}<span className="text-amber-500">to go live properly</span></SectionHeading>),
    service_list: [
        { icon: ShoppingCart, title: 'Store Build', desc: 'Laravel, Shopify, or headless Next.js — matched to your needs.', tags: ['Platform'] },
        { icon: CreditCard, title: 'Payment Integration', desc: 'Live gateway integration, including Razorpay.', tags: ['Payments'] },
        { icon: Package, title: 'Catalog Setup', desc: 'Categories, variants, and inventory structured properly.', tags: ['Catalog'] },
        { icon: Boxes, title: 'Shipping Configuration', desc: 'Shipping rules and modules configured correctly.', tags: ['Shipping'] },
    ]
}

export const EcommerceDevProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From platform choice to launch —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Discovery & platform selection', desc: 'Laravel, Shopify, or headless Next.js, chosen for actual needs.' },
        { num: '02', title: 'Store design & UX', desc: 'A browsing and checkout experience built around how customers shop.' },
        { num: '03', title: 'Product catalog setup', desc: 'Categories, variants, and inventory structured properly.' },
        { num: '04', title: 'Payment & shipping integration', desc: 'Live gateway integration, shipping rules configured correctly.' },
        { num: '05', title: 'Testing & launch', desc: 'Full checkout flow tested end to end before going live.' },
    ]
}

export const EcommerceDevIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Shirt, label: 'Retail' },
        { icon: ShoppingCart, label: 'E-Commerce' },
        { icon: Globe, label: 'FMCG' },
        { icon: Building2, label: 'Local Services' },
    ]
}

export const EcommerceDevTechStack: ServiceTechStackType = {
    techstack_list: [
        { category: 'Platforms', icon: ShoppingCart, items: ['Laravel', 'Shopify', 'Next.js (headless)'] },
        { category: 'Payments', icon: CreditCard, items: ['Razorpay'] },
        { category: 'Backend', icon: Database, items: ['MySQL', 'PostgreSQL'] },
    ]
}

export const EcommerceDevFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Which platform is right for us — Laravel, Shopify, or something else?', a: 'Depends on catalog complexity and how much customisation you need — we\'ll recommend based on your actual products and volume.' },
        { q: 'Which payment gateways do you integrate?', a: 'Razorpay as standard, others available on request.' },
        { q: 'Is there a limit on how many products we can list?', a: 'No hard limit — catalog structure is planned around your actual inventory size upfront.' },
        { q: 'How long does a store build take?', a: '6–10 weeks depending on catalog size and customisation.' },
        { q: 'What happens after launch?', a: 'Ongoing running of the store is covered under E-Commerce Business Management.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// E-Commerce Business Management
// ─────────────────────────────────────────────────────────────────────────

export const EcommerceMgmtHero: ServiceHeroTypes = {
    bread_crumb: "E-Commerce Business Management",
    badge: "E-Commerce Business Management",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">Keeping a store{' '} <br /> running well{' '}<span className="text-amber-500">after launch</span></h1>),
    content: "Inventory, updates, order-flow issues, and the small fixes that keep piling up if nobody owns them — active, ongoing work, not a hypothetical service.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['GD'],
    clientCount: "Active engagement",
    stats: [
        { value: 'Ongoing', label: 'Catalog & inventory support' },
        { value: 'Monthly', label: 'Store health report' },
        { value: 'Any store', label: 'Built by us or not' },
        { value: 'Flexible', label: 'Fixed scope or per-request' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/ecommerce-management.webp"
                    alt="E-Commerce Business Management illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const EcommerceMgmtAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>Launching a store is one project.{' '} <br /><span className="text-amber-500">Running one is a different job</span></SectionHeading>),
    content: "Product updates, catalog changes, and the steady stream of small feature requests that come up once a store is actually live and being used.",
    what_is: [
        { icon: Package, title: 'What this covers', body: 'Product and category updates, inventory coordination, and order/shipping notification management on an ongoing basis.' },
        { icon: RefreshCw, title: 'Distinct from the build', body: 'This is genuinely separate from E-Commerce Website Development — this is the operations layer for a store that already exists.' },
        { icon: Boxes, title: 'Works for any store', body: 'Available for stores we built, and for existing stores after a store health audit.' },
        { icon: BarChart3, title: 'Proven in practice', body: 'This mirrors real ongoing work already happening for an active client — shipping updates, notification fixes, and catalog management.' },
    ]
}

export const EcommerceMgmtServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>Ongoing operations,{' '}<span className="text-amber-500">not a one-time build</span></SectionHeading>),
    service_list: [
        { icon: Package, title: 'Catalog & Inventory Updates', desc: 'Product and category updates handled on an ongoing basis.', tags: ['Catalog'] },
        { icon: Boxes, title: 'Order Flow Management', desc: 'Checkout, shipping, and email notification systems kept working.', tags: ['Order Flow'] },
        { icon: RefreshCw, title: 'Feature Requests & Fixes', desc: 'Small builds and fixes as your needs change.', tags: ['Support'] },
        { icon: BarChart3, title: 'Monthly Health Report', desc: 'A check-in on store health and what\'s next.', tags: ['Reporting'] },
    ]
}

export const EcommerceMgmtProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From audit to ongoing support —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Store health audit', desc: 'A full check of what\'s currently working, broken, or out of date.' },
        { num: '02', title: 'Catalog & inventory coordination', desc: 'Product and category updates handled on an ongoing basis.' },
        { num: '03', title: 'Order flow & notification management', desc: 'Checkout, shipping, and email notification systems kept working correctly.' },
        { num: '04', title: 'Ongoing feature updates', desc: 'Small builds and fixes as the business\'s needs change.' },
        { num: '05', title: 'Monthly performance review', desc: 'A check-in on store health and what\'s next.' },
    ]
}

export const EcommerceMgmtIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Shirt, label: 'Retail' },
        { icon: ShoppingCart, label: 'E-Commerce' },
        { icon: Globe, label: 'FMCG' },
    ]
}

export const EcommerceMgmtFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'How is this different from E-Commerce Website Development?', a: 'That\'s the build; this is the ongoing operation of a store that\'s already live.' },
        { q: 'Do you manage stores you didn\'t originally build?', a: 'Yes, after a store health audit to understand the existing setup.' },
        { q: 'What\'s the response time for issues?', a: 'Scoped in the service plan — typically same or next business day for non-urgent fixes.' },
        { q: 'Is this a fixed monthly scope or billed per request?', a: 'Available either way, depending on how much ongoing work the store realistically needs.' },
        { q: 'Does this include marketing for the store?', a: 'No — that\'s covered under Performance Marketing and related services; this is operational, not promotional.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// AI Consultancy
// ─────────────────────────────────────────────────────────────────────────

export const AIConsultancyHero: ServiceHeroTypes = {
    bread_crumb: "AI Consultancy",
    badge: "AI Consultancy",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">We run our agency{' '} <br /> on AI-assisted{' '}<span className="text-amber-500">planning and development</span></h1>),
    content: "Now we help other businesses set up the same kind of workflow — a practical, hands-on approach, not a generic \"use ChatGPT\" suggestion.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['WN'],
    clientCount: "New offering",
    stats: [
        { value: 'Demonstrated', label: 'Not theoretical' },
        { value: 'Audit-first', label: 'Approach' },
        { value: 'Hands-on', label: 'Team training' },
        { value: 'Documented', label: 'Playbooks' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/ai-consultancy.webp"
                    alt="AI Consultancy illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const AIConsultancyAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>Not a generic{' '} <br /><span className="text-amber-500">&quot;use AI tools&quot; suggestion</span></SectionHeading>),
    content: "This takes the same practical approach used to run our own agency's operations and applies it to a client's actual business.",
    what_is: [
        { icon: Bot, title: 'What this actually covers', body: 'Helping client businesses adopt AI-assisted workflows for their own development and planning processes — not just chatbot tips.' },
        { icon: Search, title: 'Workflow audit first', body: 'How planning and development actually happen in the business today, and where the friction is, before any tool gets recommended.' },
        { icon: Zap, title: 'Specific, not everywhere', body: 'We map the exact points in a workflow where an AI-assisted approach genuinely helps, not everywhere it theoretically could.' },
        { icon: Users, title: 'Training that sticks', body: 'Hands-on sessions so the team can actually use what\'s set up, not just watch a demo once.' },
    ]
}

export const AIConsultancyServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>A workflow that&apos;s actually{' '}<span className="text-amber-500">embedded, not demoed</span></SectionHeading>),
    service_list: [
        { icon: Search, title: 'Workflow Audit', desc: 'How planning and development actually happen today, and where the friction is.', tags: ['Audit'] },
        { icon: Bot, title: 'Tool Stack Recommendation', desc: 'The right tools for your team\'s actual needs, not a generic list.', tags: ['Tooling'] },
        { icon: Users, title: 'Team Training', desc: 'Hands-on sessions so the team can actually use what\'s been set up.', tags: ['Training'] },
        { icon: Layout, title: 'Documented Playbooks', desc: 'Reference material for ongoing use after the engagement ends.', tags: ['Documentation'] },
    ]
}

export const AIConsultancyProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From audit to adoption —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'Current workflow audit', desc: 'How planning and development actually happen in the business today.' },
        { num: '02', title: 'AI opportunity mapping', desc: 'Specific points in the workflow where an AI-assisted approach genuinely helps.' },
        { num: '03', title: 'Tool selection & setup', desc: 'The right tools for the team\'s actual needs, configured and connected properly.' },
        { num: '04', title: 'Team training', desc: 'Hands-on sessions so the team can actually use what\'s been set up.' },
        { num: '05', title: 'Ongoing optimisation', desc: 'Checking in as the workflow beds in and adjusting what isn\'t working.' },
    ]
}

export const AIConsultancyIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: Building2, label: 'Corporate' },
        { icon: School, label: 'Education' },
        { icon: Stethoscope, label: 'Healthcare' },
    ]
}

export const AIConsultancyFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'What kind of businesses is this actually useful for?', a: 'Any business with a real planning or development workflow — not limited to tech companies.' },
        { q: 'How technical does our team need to be?', a: 'Not very — the training is built around the team\'s actual comfort level, not a developer audience.' },
        { q: 'Is ongoing support included, or just the initial setup?', a: 'Initial setup and training are the core scope; ongoing optimisation support is available separately.' },
        { q: 'How do you handle our confidential information during this?', a: 'Discussed and agreed upfront before any workflow audit begins.' },
        { q: 'How is this different from just having our team try AI tools themselves?', a: 'Most teams that try this alone stall at tool selection — this is built around actually embedding it into how the team already works.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Email Marketing
// ─────────────────────────────────────────────────────────────────────────

export const EmailMarketingHero: ServiceHeroTypes = {
    bread_crumb: "Email Marketing",
    badge: "Email Marketing",
    heading: (<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-zinc-200 tracking-tight mb-5 font-medium">The channel you{' '} <br /> already{' '}<span className="text-amber-500">own</span></h1>),
    content: "Newsletters, automated sequences, and lifecycle campaigns that reach people who've already opted in — no algorithm to fight, no platform to pay to be seen.",
    primaryCta: { label: "Start your project", href: "/contact", icon: ArrowRight },
    secondaryCta: { label: "See our work", href: "/our-works", icon: Play },
    clients_initials: ['GD', 'BS'],
    clientCount: "New offering",
    stats: [
        { value: 'Owned', label: 'Channel — no algorithm' },
        { value: 'Automated', label: 'Lifecycle sequences' },
        { value: 'Segmented', label: 'Lists, not blasts' },
        { value: 'Tracked', label: 'Opens, clicks, conversions' },
    ],
    right_section: (
        <FadeUp delay={0.15} className="relative">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center p-10">
                <Image
                    src="/images/services/email-marketing.webp"
                    alt="Email Marketing illustration"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(217,119,6,0.15)]"
                />
            </div>
        </FadeUp>
    )
}

export const EmailMarketingAbout: ServiceAboutTypes = {
    badge: "101",
    heading: (<SectionHeading>An audience you own,{' '} <br /><span className="text-amber-500">not one you&apos;re renting</span></SectionHeading>),
    content: "Social platforms can change their algorithm overnight. An email list is yours — every subscriber opted in, and every send reaches an inbox directly.",
    what_is: [
        { icon: Mail, title: 'Newsletters vs. lifecycle emails', body: 'Regular newsletters keep a brand top of mind; automated lifecycle sequences (welcome, abandoned cart, post-purchase) do the selling while you sleep.' },
        { icon: Users, title: 'Segmentation over blasts', body: 'The same message to everyone gets ignored. Lists split by behaviour and interest get emails people actually want to open.' },
        { icon: BarChart3, title: 'Measured properly', body: 'Open rates, click-through, and — the metric that actually matters — conversions traced back to a specific email.' },
        { icon: Shield, title: 'Deliverability, handled', body: 'Getting into the inbox instead of spam is its own discipline — proper authentication and list hygiene from day one.' },
    ]
}

export const EmailMarketingServicesOffered: ServicesOfferedTypes = {
    badge: "What's included",
    heading: (<SectionHeading>An owned channel,{' '}<span className="text-amber-500">properly run</span></SectionHeading>),
    service_list: [
        { icon: Mail, title: 'Newsletter Campaigns', desc: 'Regular, on-brand sends that keep your audience engaged.', tags: ['Newsletters'] },
        { icon: RefreshCw, title: 'Automated Sequences', desc: 'Welcome flows, abandoned cart, and post-purchase automation.', tags: ['Automation'] },
        { icon: Users, title: 'List Segmentation', desc: 'Splitting subscribers by behaviour so messages actually land.', tags: ['Segmentation'] },
        { icon: BarChart3, title: 'Performance Reporting', desc: 'Opens, clicks, and conversions tracked per campaign.', tags: ['Reporting'] },
    ]
}

export const EmailMarketingProcess: ServiceProcessType = {
    badge: "How we work",
    heading: (<SectionHeading>From list to inbox —{' '}<span className="text-amber-500">5 clear steps</span></SectionHeading>),
    process_list: [
        { num: '01', title: 'List & platform audit', desc: 'What you already have, and whether deliverability is actually healthy.' },
        { num: '02', title: 'Segmentation strategy', desc: 'Splitting your list by behaviour, not just demographics.' },
        { num: '03', title: 'Sequence & campaign design', desc: 'Automated flows and a regular newsletter calendar.' },
        { num: '04', title: 'Send & monitor', desc: 'Deliverability watched closely, not just scheduled and forgotten.' },
        { num: '05', title: 'Report & refine', desc: 'What\'s converting, and what changes next cycle.' },
    ]
}

export const EmailMarketingIndustries: ServiceIndustriestype = {
    industries_list: [
        { icon: ShoppingCart, label: 'E-Commerce' },
        { icon: Shirt, label: 'Retail' },
        { icon: School, label: 'Education' },
        { icon: Building2, label: 'Corporate' },
    ]
}

export const EmailMarketingFAQ: ServiceFAQType = {
    faq_list: [
        { q: 'Do we need a large list to start?', a: 'No — a properly segmented small list often outperforms a large unsegmented one. We\'ll work with what you have.' },
        { q: 'What platform do you use?', a: 'Scoped to your existing setup or recommended fresh, based on your list size and automation needs.' },
        { q: 'How do you avoid landing in spam?', a: 'Proper sender authentication, list hygiene, and sending patterns that platforms trust — set up correctly from the start.' },
        { q: 'Can this integrate with our e-commerce store?', a: 'Yes — abandoned cart and post-purchase flows are some of the highest-return automations we set up.' },
        { q: 'How often should we send?', a: 'Depends on the business and list — discussed and set deliberately rather than defaulted to a generic schedule.' },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
// Deep-dive sections — long-form, SEO-oriented content per service
// ─────────────────────────────────────────────────────────────────────────

export const BrandCreationDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            Everything that goes into{' '}
            <span className="text-amber-500">building a brand identity</span>
        </SectionHeading>
    ),
    intro: "\"Branding\" gets used loosely enough that it's worth being precise about what's actually involved, what we do at each stage, and what it changes for a business once it's done properly.",
    sections: [
        {
            subheading: "What brand identity actually involves",
            body: "A complete brand identity is four things working together: a logo (and its variations — icon-only, wordmark-only, dark and light versions), a colour system (not just \"our colour is blue\" but primary, secondary, and accent shades with exact hex and CMYK codes), a typography system (which fonts, at which weights, for headings versus body text), and a set of usage rules that ties it all together. Most businesses have the first piece and improvise the rest, which is exactly why the same brand looks different on their signage, their Instagram, and their invoices. Building it properly means all four pieces are decided once, documented, and handed over — not reinvented every time someone new touches the brand.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "It starts with discovery — not a design brainstorm, but structured conversations about the business, its customers, and its competitors, plus an honest audit of whatever visual identity already exists. From there we research how similar premium businesses in the category present themselves, specifically to find where there's room to look different rather than blending in. Concept development follows: 2–3 genuinely distinct directions, not three variations of the same idea, each with its own logic for why it fits the business. Once a direction is chosen, we build out the full system — every logo variation, the complete colour and type specification, and the guidelines document that explains how to use all of it correctly. The last step is handover: source files, the guidelines PDF, and rollout support for updating existing materials like signage, packaging, or stationery.",
        },
        {
            subheading: "What this means for your business",
            body: "The immediate effect is consistency — the same business looks like the same business whether someone sees it on a hoarding, a WhatsApp catalog, or a Google search result. The longer-term effect is that every other service on this site works better once this exists: ad creative built on top of a real brand system converts better than generic templates, and a website designed around documented brand rules looks intentional rather than assembled. For premium and HNI-facing businesses specifically, this consistency is doing quiet credibility work before a single word of copy gets read.",
        },
    ],
}

export const GraphicDesignDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What ongoing graphic design{' '}
            <span className="text-amber-500">actually covers</span>
        </SectionHeading>
    ),
    intro: "Brand Creation happens once. Graphic design is the weekly, sometimes daily, output that runs on top of it — worth explaining in full since it's the highest-frequency work in the whole relationship.",
    sections: [
        {
            subheading: "What ongoing design work actually involves",
            body: "This covers every visual asset that isn't the brand system itself: social media carousels and single-image posts, Story and Reel cover art, static ad creative sized correctly for Meta and Google's specific format requirements, posters and banners for offline use, simple motion graphics for feeds, and print collateral — brochures, flyers, menu cards, event material. The common thread is volume and frequency: a brand identity gets built once every few years, but a business posting four to six times a week needs a steady, reliable stream of on-brand creative behind that schedule.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "Every request starts by being checked against the existing brand guidelines — colour, type, logo placement — so nothing ships that a customer would recognise as off-brand. For anything beyond routine social assets, we moodboard a concept before producing it. Production itself happens in batches where possible, since designing five carousels for a week's content is more efficient and more consistent than designing them one at a time as requests trickle in. Revisions follow a structured round rather than open-ended back-and-forth, which is what keeps a 24–48 hour turnaround realistic even at volume. Final delivery includes both the editable source file and platform-ready exports, organised so nothing gets lost between projects.",
        },
        {
            subheading: "What this means for your business",
            body: "Consistent, high-frequency design output is what makes a content calendar actually executable — a great posting strategy with inconsistent or late creative behind it doesn't survive contact with reality. Because the same team handles your social, ads, and design, creative gets built with the platform and campaign goal in mind from the first draft, rather than designed in isolation and hoped it performs. Over time, this is also what makes a feed or grid look intentional rather than like a series of unrelated posts.",
        },
    ],
}

export const CorporateProfileDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What a corporate profile{' '}
            <span className="text-amber-500">is actually built to do</span>
        </SectionHeading>
    ),
    intro: "This is a newer, more specific offering than most on this site, so it's worth explaining exactly what it covers and where it's genuinely useful, rather than assuming the name is self-explanatory.",
    sections: [
        {
            subheading: "What a corporate profile actually involves",
            body: "It's a matched pair of assets, not one: a corporate video, typically 2–4 minutes, and a printed or digital company profile document, built together so both tell the same story rather than arriving as disconnected pieces from separate vendors. The video includes professional narration and is cut down into shorter versions for LinkedIn and other platforms. The document is delivered both print-ready and as a digital PDF, structured so it can be updated later without a full rebuild as achievements or services change.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "Discovery here is different from other services — it's less about design preference and more about understanding the specific use case, because a document built for a tender submission needs a different emphasis than one built for an investor conversation or a first meeting with a large institutional client. From there we write the script for the video and the copy for the document as one connected exercise, so the language and claims are consistent across both. Production follows — on-site filming for the video, layout and design for the document — with structured review rounds on each before final delivery in every format needed: video files, a print-ready document, and a digital version.",
        },
        {
            subheading: "What this means for your business",
            body: "This exists for the specific moments where a generic website page isn't enough — a tender committee, an investor, or an institutional client evaluating whether to trust a business with a significant engagement. Having a video and a document that tell the same considered story, rather than improvising an explanation in the room, is what this is actually solving for. It's also, practically, one of the more durable assets on this list — built to be updated rather than replaced as the business grows.",
        },
    ],
}

export const SocialMediaDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What social media management{' '}
            <span className="text-amber-500">actually involves, day to day</span>
        </SectionHeading>
    ),
    intro: "\"We do social media\" hides a lot of actual work. Here's what genuinely goes into managing an account properly, week over week.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "Two distinct layers sit under this one service. Planning is the strategic layer — deciding what content pillars the account is built around, mapping those into a monthly calendar, and setting goals that are specific to the business rather than generic follower targets. Management is the execution layer — publishing on schedule, and responding to comments and direct messages as a business that's actually paying attention, not one that posts and disappears. Both matter: a strong calendar with no community response looks abandoned, and responsive community management with no calendar strategy behind it drifts without direction.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "We start with an audit of where the account actually stands — not assumptions, the real numbers — and a clear definition of what success means for this specific business. From there, content pillars get built into a real monthly calendar, briefed out to whoever's producing the content, video, or graphics behind each post. Publishing happens on schedule, with comments and DMs handled within business hours and anything sensitive escalated to you rather than improvised. At the end of each month, we review what actually performed against what didn't, and that review is what shapes next month's calendar — the strategy adjusts based on real data, not on a fixed template repeated indefinitely.",
        },
        {
            subheading: "What this means for your business",
            body: "Consistency is what compounds here — an account posted to reliably, with someone actually answering when a potential customer comments or messages, builds trust in a way that sporadic posting never does. Because planning sits with the same team producing your content and running your ads, the calendar reflects what's actually being promoted elsewhere instead of running as a disconnected workstream nobody's coordinating.",
        },
    ],
}

export const ContentCreationDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            Everything &quot;content creation&quot;{' '}
            <span className="text-amber-500">actually covers here</span>
        </SectionHeading>
    ),
    intro: "This sits underneath almost every other service on this site, so it's worth being specific about exactly what gets written, and how.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This is the writing layer specifically — blog posts and articles, social captions, ad copy, email copy, and website page copy — separated deliberately from Social Media Planning (the scheduling and community layer) and Graphic Design (the visual layer). Blog and website copy is written with SEO targets in mind; social captions are written for engagement first. Depending on the audience, writing happens in English, Hindi, or Hinglish, matched to how that specific business's customers actually communicate rather than defaulting to one register everywhere.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "The starting point is defining a brand voice once — how the business should sound in writing — and documenting it so every writer who touches the account stays consistent, rather than each piece sounding like it came from a different person. From there we audit what content already exists across the website, blog, and social channels to find the real gaps, and build an editorial calendar deciding what gets written, in what order, and why. Writing itself goes through two structured revision rounds as standard, checked against both the brand voice and, where relevant, SEO targets, before being delivered in whatever format the destination channel actually needs.",
        },
        {
            subheading: "What this means for your business",
            body: "Every other service eventually needs words — an ad needs a headline, a landing page needs copy, a blog post needs to actually rank. Having this handled by writers who know the documented brand voice means a business doesn't end up with five different tones of voice depending on which channel someone's reading. For content aimed at search specifically, this pairs directly with SEO Consultancy rather than operating as a separate, disconnected effort.",
        },
    ],
}

export const VideographyDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What goes into a videography{' '}
            <span className="text-amber-500">shoot, before editing even starts</span>
        </SectionHeading>
    ),
    intro: "Videography and Video Editing are deliberately separate services on this site — here's what specifically falls under the filming side.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This covers the production side only: planning the shoot, setting up lighting and framing correctly, and capturing enough coverage that an editor actually has something to work with afterward. It includes on-location filming (the more common choice for authenticity in brand and product work), studio filming for interviews and controlled product shots, multi-angle coverage where the format calls for it, and clean on-set audio capture rather than trying to fix sound in post.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "Pre-production comes first — a shot list, a script or outline, and a decision on location versus studio, made before any equipment shows up. On the day, setup covers lighting, audio, and camera positioning appropriate to that specific location, followed by the shoot itself, filmed with enough coverage that editing has real flexibility rather than one unusable angle. Footage gets reviewed the same day or the next, specifically to confirm everything needed was actually captured before the crew wraps — catching a missing shot after everyone's gone home is far more expensive than catching it on set. Organised footage is then handed off to editing, ours or yours.",
        },
        {
            subheading: "What this means for your business",
            body: "Good editing cannot fix badly shot footage — this is why the two are treated as genuinely separate disciplines rather than one blurred service. Planning the shoot around the final platform from the start (a Reel needs different framing than a YouTube interview) means the footage arrives at editing already suited to where it's going, rather than needing to be forced into a format it wasn't shot for.",
        },
    ],
}

export const VideoEditingDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What actually happens{' '}
            <span className="text-amber-500">between raw footage and a finished video</span>
        </SectionHeading>
    ),
    intro: "The post-production side, and specifically why the same cut rarely works unchanged across every platform.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This is the cutting, pacing, colour, sound, and export layer — taking footage we shot, or footage already provided, and turning it into platform-ready video. That includes captions and subtitles as standard for social formats, consistent colour grading across a video, and music and sound design mixed to match the pacing rather than dropped in as an afterthought. Crucially, this includes producing genuinely different cuts for genuinely different destinations — a Reels edit, a YouTube edit, and an ad-format edit are rarely the same cut resized.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "Editing starts with reviewing all the available footage and selecting what actually earns a place in the edit — most raw footage doesn't make the final cut, and that's normal. From there, the story and pacing structure gets decided — the order and rhythm that actually holds someone's attention on that specific platform. The edit and colour grade happen next, followed by sound design and music matched to the pacing. Every video goes through two structured revision rounds before final delivery, exported specifically for wherever it's going — vertical and captioned for Reels, standard widescreen for YouTube, and so on.",
        },
        {
            subheading: "What this means for your business",
            body: "A video that performs well on YouTube frequently underperforms when reposted unchanged to Instagram, because pacing, captions, and framing expectations differ by platform. Treating each destination as its own edit, rather than one video resized everywhere, is specifically what closes that gap — and it applies whether the footage came from our own Videography team or was provided directly.",
        },
    ],
}

export const InfluencerMarketingDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What running an influencer campaign{' '}
            <span className="text-amber-500">actually involves</span>
        </SectionHeading>
    ),
    intro: "Beyond \"find an influencer and send them the product\" — here's what a properly managed campaign actually requires.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This covers the full loop: sourcing and vetting creators, negotiating terms and usage rights, briefing the campaign clearly, reviewing content before it goes live, and reporting on what actually happened afterward. For most clients here, that means a set of relevant micro and mid-tier creators rather than one large name — local Varanasi voices for genuinely local reach, or niche creators in the right category for something aimed nationally. Vetting specifically means checking engagement rate and audience quality, not just follower count, since inflated followings are common and easy to miss without checking.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "It starts with defining who the campaign actually needs to reach and what success looks like — a campaign built for local footfall looks different from one built for national brand awareness. From there, a shortlist gets built and checked for real engagement before anyone's approached. Outreach and negotiation cover deliverables, timelines, and usage rights, agreed upfront so there's no ambiguity later about what the brand can do with the content afterward. Creators are briefed clearly, and content gets reviewed before it goes live rather than after. Performance reporting covers reach, engagement, and any tracked conversions from the campaign.",
        },
        {
            subheading: "What this means for your business",
            body: "The right micro-influencer with a genuinely engaged, relevant audience routinely outperforms a much larger creator with a broad, disengaged following — this is specifically why vetting matters more than reach. Knowing which local and regional creators have real audiences, versus inflated numbers, is the difference between a campaign that converts and one that just generated impressions.",
        },
    ],
}

export const PerformanceMarketingDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What performance marketing{' '}
            <span className="text-amber-500">actually means, beyond the buzzword</span>
        </SectionHeading>
    ),
    intro: "This sits above Google & Meta Ads Management specifically — here's the distinction, and what the strategy layer actually covers.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This is budget and channel strategy — deciding which platforms deserve spend and how that spend should move between them, based on where a customer journey actually goes through paid media. It's distinct from Google & Meta Ads Management, which is the hands-on execution of campaigns once that strategy exists. Performance Marketing covers the media plan, the channel mix recommendation, and ongoing budget reallocation based on what's actually converting — the thinking that decides what the ad accounts should be doing, not the day-to-day account work itself.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "It starts with mapping the actual customer funnel — where paid media genuinely fits into how someone goes from unaware to a customer for this specific business. From there, channel selection decides which platforms deserve budget based on where the real audience spends time, not by default assumption. That translates into live campaigns in coordination with whoever's executing them, with budget continuously shifted toward what's converting and away from what isn't, reviewed on a weekly cycle. Reporting stays honest about cost per result — actual return, not just reach and impressions dressed up to look like success.",
        },
        {
            subheading: "What this means for your business",
            body: "Every rupee of ad spend gets tracked back to an actual result under this approach — no budget disappears into a report full of impressions with no bottom line attached. For a business already running ads without a clear strategy behind the spend, this is usually the layer that was missing, not the execution itself.",
        },
    ],
}

export const AdsManagementDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What hands-on ads management{' '}
            <span className="text-amber-500">actually looks like week to week</span>
        </SectionHeading>
    ),
    intro: "The execution layer beneath Performance Marketing — here's what actually happens inside the ad accounts themselves.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This covers account setup and structure, audience and keyword research, creative testing, and bid management across Google Search, Display, and Shopping, plus Meta's feed, Reels, and retargeting placements. It includes cleaning up or building the account structure correctly from the outset, since a badly structured account makes every optimisation decision harder later. Retargeting — reaching people who've already shown interest rather than only targeting cold audiences — is included as standard, not an upsell.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "Account audit and setup comes first, followed by audience and keyword research specific to what this business's customers are actually searching for or responding to. Campaigns get built with clear objectives set per ad set rather than one vague goal for the whole account, and creative and copy variants get tested against each other rather than assumed to work from the first draft. Budget is then shifted toward whatever's actually winning, reviewed weekly, with a full report delivered monthly covering what changed and why.",
        },
        {
            subheading: "What this means for your business",
            body: "An ad account that's actively managed — tested, adjusted weekly, retargeting built in from the start — performs meaningfully differently from one that was set up once and left alone. Because this sits with the same team handling your creative and analytics, an underperforming ad gets flagged to the design team the same week, not discovered a quarter later in a report nobody reads closely.",
        },
    ],
}

export const WhatsAppMarketingDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What WhatsApp marketing{' '}
            <span className="text-amber-500">actually involves, done properly</span>
        </SectionHeading>
    ),
    intro: "This channel gets misused constantly as an unfiltered broadcast list — here's what a properly built version actually looks like.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This is built on the WhatsApp Business API specifically, not the free consumer app, which is what allows product catalogs, broadcasts at real scale, and basic automated response flows. It covers account setup and verification, building and segmenting contact lists so broadcasts reach the right people rather than everyone at once, creating product catalogs customers can browse inside the chat, and setting up approved message templates — Meta reviews and approves these before they can be sent, and we handle that process.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "Setup and verification come first, followed by list building and segmentation — organising contacts properly rather than treating the whole list as one audience. Catalog and template creation follows, built around whatever products or services actually make sense to showcase this way. Campaigns get scheduled on a cadence that respects the channel rather than sending constantly, and response management covers tracking replies and overall campaign performance, not just send volume.",
        },
        {
            subheading: "What this means for your business",
            body: "Done with proper consent and segmentation, this becomes one of the highest-open-rate channels a business has — genuinely higher than email, and often checked before Instagram for many Indian consumers. Done badly, as an unconsented blast list, it gets a business blocked or ignored, which is exactly why consent tracking and segmentation are treated as core to the setup rather than optional extras.",
        },
    ],
}

export const EmailMarketingDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What running email marketing{' '}
            <span className="text-amber-500">properly actually involves</span>
        </SectionHeading>
    ),
    intro: "The channel a business actually owns outright — here's the full scope of what running it well requires.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This covers regular newsletter campaigns, automated lifecycle sequences (welcome flows, abandoned cart recovery, post-purchase follow-up), list segmentation by behaviour rather than blanket sends, and deliverability — the technical discipline of actually reaching the inbox instead of spam. Automated sequences specifically do ongoing selling work without a person manually sending anything, which is why they're usually the highest-return part of this service once set up correctly.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "It starts with an audit of whatever list and platform already exists, and an honest check on whether deliverability is actually healthy — a large list sending to a damaged sender reputation performs worse than a small, well-maintained one. Segmentation strategy follows, splitting subscribers by real behaviour rather than just demographics. From there we design the automated sequences and a regular newsletter calendar, then send and monitor deliverability closely rather than scheduling and forgetting. Reporting covers opens, clicks, and — the number that actually matters — conversions traced back to specific emails, feeding directly into what changes next cycle.",
        },
        {
            subheading: "What this means for your business",
            body: "Unlike social platforms, an email list can't have its algorithm changed overnight by someone else — every subscriber opted in, and every send reaches an inbox directly. For e-commerce clients specifically, abandoned cart and post-purchase automation are usually among the highest-return pieces of the entire marketing stack, running continuously without needing a person to trigger each one.",
        },
    ],
}

export const SEOConsultancyDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            The complete SEO methodology,{' '}
            <span className="text-amber-500">explained in full</span>
        </SectionHeading>
    ),
    intro: "This is the service with the most moving parts on this site, and the one where a templated national playbook genuinely fails in a market like Varanasi — worth explaining properly.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "A full SEO engagement covers a technical and content audit, keyword research done at two levels rather than one, on-page optimisation, technical fixes and schema markup, local SEO including Google Business Profile management, and ongoing monthly reporting. The two-level keyword research is the part most agencies skip: city-level tools like Ubersuggest routinely show near-zero search volume for real, common local searches, because they simply undercount \"near me\" and map-pack behaviour at that scale. Reading that as \"no demand\" is the single most common mistake in local SEO — the correct read is to benchmark true demand nationally, then treat local search terms as intent signals validated by low competition, not by volume figures that were never going to reflect reality at a city level.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "It begins with a full technical and content audit — a genuine read of what's working, broken, or missing on the site today. Keyword research follows at both levels described above, feeding directly into on-page and content strategy built with real depth, specifically because competitor sites across Varanasi tend to be thin, single-page efforts that never earn meaningful rankings. Technical SEO and schema implementation cover site speed, structured data, and crawlability. Local SEO covers Google Business Profile optimisation, citations, and review strategy. Ongoing reporting tracks rankings and traffic monthly, but the metric that actually matters is leads and enquiries traced back to organic search, not rankings in isolation.",
        },
        {
            subheading: "What this means for your business",
            body: "Genuine content depth is a real competitive advantage in this specific market, precisely because most local competitors aren't investing in it — a comprehensive page has a real structural edge here that it might not have in a saturated metro market. Results take time regardless of market: technical fixes can show impact within weeks, but genuine ranking movement for competitive terms typically takes three to six months. This work is coordinated directly with Content Creation, since SEO strategy and SEO writing function as one connected process here, not two separate vendors working from different briefs.",
        },
    ],
}

export const AnalyticsReportingDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What analytics and reporting{' '}
            <span className="text-amber-500">actually covers, underneath everything else</span>
        </SectionHeading>
    ),
    intro: "Every other service on this site produces data — this is what turns that into something an owner can actually read and act on.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This covers tracking setup (GA4 and conversion pixels implemented correctly, not as an afterthought), a custom KPI dashboard showing what actually matters rather than every available metric, monthly written reports in plain language, and a deeper quarterly review of whether the overall strategy still makes sense. This runs underneath every other service rather than standing apart from it — the goal is one coherent picture of what's happening across ads, social, SEO, and the website, not five separate numbers from five separate places.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "It starts with defining what actually counts as success for this specific business — not a generic set of marketing metrics, but the numbers that map to real outcomes. Tracking gets implemented correctly across the site and every active campaign, which is frequently the step a business's existing setup got wrong or skipped. From there, one dashboard gets built to show what matters without needing to check five separate platforms. Monthly reporting delivers a plain-language summary rather than a raw data export, and a quarterly review steps back to check whether the overall approach still makes sense rather than just reporting the same numbers indefinitely.",
        },
        {
            subheading: "What this means for your business",
            body: "Reports here are written to be read by a business owner, not a marketer — plain language, the numbers that actually matter, and a clear statement of what happens next, rather than a wall of charts with no interpretation attached. If existing tracking is already a mess, that's usually the actual starting point of this engagement, since no reporting can be trusted until the tracking underneath it is clean.",
        },
    ],
}

export const WebDevDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What goes into a website build,{' '}
            <span className="text-amber-500">beyond just design</span>
        </SectionHeading>
    ),
    intro: "The most requested service on this site, and the one where \"looks good\" and \"actually works\" are frequently treated as the same thing when they're not.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "A proper build covers discovery and sitemap planning, design and UX focused on clarity and conversion rather than decoration, development on modern frameworks (Next.js and Laravel, chosen based on what the project actually needs), performance testing across devices, and SEO-ready technical structure built into the site's architecture from the first commit rather than bolted on after launch. A CMS or admin panel is included where the project actually calls for one, scoped rather than added by default.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "Discovery comes first — understanding the business and mapping the site's real structure before any visual design starts. Design and UX follow, prioritising clarity and a clear path to conversion over visual flourish for its own sake. Development happens on the framework that actually fits the project's needs and scale. QA and performance testing cover cross-device behaviour and page-speed, checked before anything goes live rather than after launch reveals a problem. Launch and handover include full documentation and everything needed to maintain the site going forward, with the client owning the code outright.",
        },
        {
            subheading: "What this means for your business",
            body: "A site with SEO-ready structure built in from the start avoids the far more expensive retrofit of adding proper structure to a site that was never built for it. Performance testing before launch, rather than after complaints arrive, is what keeps a site fast on the mobile connections most Indian visitors are actually using. This work draws directly on genuinely long-standing, hands-on development experience — not a template customised by a junior team.",
        },
    ],
}

export const MobileAppDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What actually goes into deciding{' '}
            <span className="text-amber-500">— and building — a mobile app</span>
        </SectionHeading>
    ),
    intro: "The question this starts with is usually more important than the build itself: does this genuinely need to be an app, or would a website do the job better?",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This covers the platform decision (native iOS/Android versus cross-platform, decided after discovery rather than by default), UI/UX design built around how people actually use a phone rather than a shrunk-down website, development, backend integration for whatever data or business logic the app needs, testing across real devices rather than only simulators, and full app store submission and approval handling for both Apple and Google.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "Discovery here specifically asks what an app needs to do that a website genuinely can't do better — push notifications, offline access, or a materially smoother repeat-customer experience are common real reasons; wanting \"an app\" for its own sake usually isn't. UI/UX design follows, built for phone-native interaction patterns. Development happens cross-platform or native depending on what discovery concluded, tested across real devices before submission. Store deployment covers the full submission and review process with both Apple and Google, handled end to end rather than left to the client to navigate.",
        },
        {
            subheading: "What this means for your business",
            body: "An app that plugs into an existing website and backend, built by the same team that knows both, avoids becoming a disconnected second system that drifts out of sync with everything else the business runs. Backend complexity and the number of integrations — payments, bookings, notifications — usually drive cost and timeline far more than the visual design itself.",
        },
    ],
}

export const EcommerceDevDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            Everything involved in building{' '}
            <span className="text-amber-500">a store that actually sells</span>
        </SectionHeading>
    ),
    intro: "The build phase specifically — what happens before a store goes live, and why getting this right the first time matters more here than almost anywhere else.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This covers platform selection (Laravel for fully custom builds, Shopify where that's genuinely the better fit, or a headless Next.js front end), store design and UX built around how the target customer actually shops, product catalog structure planned for the real scale of inventory rather than retrofitted later, and live payment gateway integration — including Razorpay — rather than a demo checkout fixed after launch. Shipping configuration is built in from the start, not treated as a separate afterthought.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "Platform selection happens first, based on catalog complexity and real customisation needs rather than a default choice. Store design and UX follow, built around the actual shopping behaviour of the target customer. Product catalog setup structures categories, variants, and inventory properly from day one — retrofitting this after launch is far more disruptive than planning it upfront. Payment and shipping integration follows, tested end to end, with the full checkout flow verified before the store goes live rather than discovered broken by a real customer.",
        },
        {
            subheading: "What this means for your business",
            body: "A checkout that fails partway through, or a shipping rule that wasn't actually configured, costs real sales the moment it happens — which is why this is treated as core build work rather than a post-launch fix. This is the build phase specifically; running the store day to day once it's live — inventory, updates, order-flow issues — is a distinct, ongoing service (E-Commerce Business Management), not assumed to be covered by the build alone.",
        },
    ],
}

export const EcommerceMgmtDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What keeping a store running{' '}
            <span className="text-amber-500">actually requires, after launch</span>
        </SectionHeading>
    ),
    intro: "Launching a store is one project with a clear end date. Running one is a different, ongoing job — here's what that actually involves.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This covers product and category updates, inventory coordination as stock changes, order-flow and shipping notification management, ongoing small feature requests and fixes, and a monthly store health report. It's available for stores we built and, after a store health audit, for stores built elsewhere — the operational need is the same either way once a store is genuinely live and being used by real customers.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "A store health audit comes first — a full, honest check of what's currently working, broken, or out of date, especially important for stores we didn't originally build. Catalog and inventory coordination then runs on an ongoing basis as products and stock levels change. Order flow and notification management keeps checkout, shipping, and email systems actually working correctly, since these are exactly the systems that quietly break without anyone noticing until a customer complains. Feature updates and fixes get handled as the business's needs evolve, with a monthly report covering overall store health and what's coming next.",
        },
        {
            subheading: "What this means for your business",
            body: "This is genuinely proven in practice rather than a hypothetical offering — the same shipping module updates, notification fixes, and ongoing catalog management already run for an active client's own store. The distinction from the build service matters: this is the operations layer for a store that already exists, priced and scoped differently because the work itself is different — ongoing, reactive, and operational rather than a one-time project with a launch date.",
        },
    ],
}

export const AIConsultancyDeepDive: ServiceDeepDiveType = {
    badge: "In Depth",
    heading: (
        <SectionHeading>
            What this AI consultancy{' '}
            <span className="text-amber-500">actually covers, in practice</span>
        </SectionHeading>
    ),
    intro: "The newest service on this site, and the one most likely to be misunderstood as a generic \"use ChatGPT\" suggestion — here's what it specifically means instead.",
    sections: [
        {
            subheading: "What this actually involves",
            body: "This is a workflow audit and implementation service, not a generic AI-tools briefing. It covers a genuine audit of how planning and development currently happen inside a business, mapping the specific points where an AI-assisted approach would actually help rather than everywhere it theoretically could, recommending and setting up the right tools for that specific team, hands-on training so the team can actually use what's been set up, and documented playbooks for continued use after the engagement ends.",
        },
        {
            subheading: "How we approach it, step by step",
            body: "The current workflow audit comes first — understanding exactly how planning and development actually happen today, and specifically where the friction is, before any tool gets recommended. AI opportunity mapping follows, identifying the exact points in that workflow worth changing rather than proposing a wholesale, disruptive overhaul. Tool selection and setup are matched to the team's actual needs and existing systems, not a generic off-the-shelf stack. Team training happens hands-on, built around the team's real comfort level rather than assuming a technical audience, and ongoing optimisation checks in as the new workflow beds in, adjusting whatever isn't working.",
        },
        {
            subheading: "What this means for your business",
            body: "This is demonstrated rather than theoretical — the same AI-assisted approach to planning and development used to run this agency's own project management and content operations is what gets set up for a client's team. Most businesses that try adopting AI tools alone stall at the tool-selection stage, or never get meaningfully past an initial demo — this is specifically built around actually embedding the workflow into how a team already works, not just showing them a capability once.",
        },
    ],
}
