import Link from "next/link";
import { Wrapper } from "./ui/sections";

const services = [
    { label: "Social Media Planning", href: "/services/social-media" },
    { label: "Content Creation", href: "/services/content-creation" },
    { label: "Videography", href: "/services/videography" },
    { label: "Video Editing", href: "/services/video-editing" },
    { label: "Influencer Marketing", href: "/services/influencer-marketing" },
    { label: "Performance Marketing", href: "/services/performance-marketing" },
    { label: "Google & Meta Ads", href: "/services/google-meta-ads-management" },
    { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing" },
    { label: "Email Marketing", href: "/services/email-marketing" },
    { label: "SEO Consultancy", href: "/services/seo-consultancy" },
    { label: "Analytics & Reporting", href: "/services/analytics-reporting" },
    { label: "Brand Creation", href: "/services/brand-designing" },
    { label: "Graphic Design", href: "/services/graphic-designing" },
    { label: "Corporate Profiles", href: "/services/corporate-profile-creation" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "Mobile App Development", href: "/services/app-dev" },
    { label: "E-Commerce Development", href: "/services/ecommerce-development" },
    { label: "E-Commerce Management", href: "/services/ecommerce-management" },
    { label: "AI Consultancy", href: "/services/ai-consultancy" },
];

const sectors = [
    { label: "Healthcare", href: "/sector/healthcare" },
    { label: "Travel & Tourism", href: "/sector/travel-and-tourism" },
    { label: "FMCG", href: "/sector/fmcg" },
    { label: "Education", href: "/sector/education" },
    { label: "Automotive", href: "/sector/automotive" },
    { label: "Retail", href: "/sector/retail" },
    { label: "Corporate", href: "/sector/corporate" },
    { label: "E-Commerce", href: "/sector/e-commerce" },
    { label: "Food & Dining", href: "/sector/food-and-dining" },
    { label: "Local Services", href: "/sector/local-services" },
    { label: "Membership & Community", href: "/sector/membership-community" },
    { label: "Personal Services", href: "/sector/personal-services" },
];

const company = [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/our-works" },
    { label: "Social Media Clients", href: "/social-media-clients" },
    // "Blog" is hidden along with the homepage blog section and the nav
    // item above until real posts are ready — restore all together.
    // { label: "Blog", href: "/blogs" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];
const legal = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
];

// Wizards Next LLP official profiles (brand icons as inline SVG; lucide has no brand icons).
const socials = [
    {
        label: "Instagram", href: "https://www.instagram.com/wizards.digital/",
        icon: <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.7a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-9.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />,
    },
    {
        label: "Facebook", href: "https://www.facebook.com/wizardsdigital/",
        icon: <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.23 2.68.23v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />,
    },
    {
        label: "LinkedIn", href: "https://in.linkedin.com/company/wizardsnext",
        icon: <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />,
    },
    {
        label: "Find us on Google", href: "https://share.google/zYiIe2jRbaZmqOOWi",
        icon: <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.19-1.79 4.13-1.14 1.14-2.92 2.4-6.05 2.4-4.83 0-8.6-3.89-8.6-8.72s3.77-8.72 8.6-8.72c2.6 0 4.5 1.03 5.9 2.34l2.31-2.31C18.75 1.44 16.13 0 12.48 0 5.87 0 .31 5.39.31 12s5.56 12 12.17 12c3.57 0 6.27-1.17 8.38-3.36 2.16-2.16 2.84-5.21 2.84-7.67 0-.76-.05-1.47-.17-2.05H12.48z" />,
    },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
    return (
        <p
            className="text-zinc-100 font-semibold text-[12px] tracking-wide mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
        >
            {children}
        </p>
    );
}

export default function Footer() {
    return (
        <footer className="bg-zinc-800/20 border-t border-zinc-900 px-8 pb-6">
            <Wrapper className="pb-0! gap-0!">
                <div
                    className="grid gap-8 mb-10 lg:grid-cols-[1.1fr_1.6fr_1fr_1fr] md:grid-cols-2 grid-cols-1"
                >
                    {/* Brand + Contact */}
                    <div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/brand/logo.webp"
                            alt="Wizards Next"
                            className="w-auto object-contain max-h-8 max-w-32 mb-3"
                        />
                        <p className="text-zinc-200 text-[12px] font-light leading-relaxed max-w-50 mb-4">
                            Your one-stop growth partner for marketing, branding, web development, and AI-assisted workflows.
                        </p>

                        {/* Social profile buttons */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {socials.map(({ label, href, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Wizards Next on ${label === "Find us on Google" ? "Google" : label}`}
                                    title={label}
                                    className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-amber-600/12 hover:border-amber-600/35 hover:text-amber-600 flex items-center justify-center text-zinc-200 transition-all duration-200"
                                >
                                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">{icon}</svg>
                                </a>
                            ))}
                        </div>

                        <ColumnHeading>Contact</ColumnHeading>
                        <div className="flex flex-col gap-2">
                            <a href="mailto:admin@wizards.co.in" className="text-zinc-200 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                admin@wizards.co.in
                            </a>
                            <a href="tel:+918072199651" className="text-zinc-200 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                +91 80721 99651
                            </a>
                            <span className="text-zinc-200 text-[12px]">Varanasi, UP — India</span>
                        </div>
                    </div>

                    {/* Services — full list, two sub-columns */}
                    <div>
                        <ColumnHeading>Services</ColumnHeading>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {services.map(({ label, href }) => (
                                <Link key={label} href={href} className="text-zinc-200 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Sectors — new */}
                    <div>
                        <ColumnHeading>Sectors</ColumnHeading>
                        <div className="flex flex-col gap-2">
                            {sectors.map(({ label, href }) => (
                                <Link key={label} href={href} className="text-zinc-200 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company + Legal */}
                    <div>
                        <ColumnHeading>Company</ColumnHeading>
                        <div className="flex flex-col gap-2 mb-6">
                            {company.map(({ label, href }) => (
                                <Link key={label} href={href} className="text-zinc-200 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <ColumnHeading>Legal</ColumnHeading>
                        <div className="flex flex-col gap-2">
                            {legal.map(({ label, href }) => (
                                <Link key={label} href={href} className="text-zinc-200 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-zinc-900 pt-5 flex items-center justify-between flex-wrap">
                    <p className="text-zinc-700 text-[12px]">© {new Date().getFullYear()} Wizards Next LLP. All rights reserved.</p>
                    <div className="flex items-center gap-1.5 text-zinc-300 text-[12px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
                        Varanasi — Pan India
                    </div>
                </div>

            </Wrapper>
        </footer>
    );
}
