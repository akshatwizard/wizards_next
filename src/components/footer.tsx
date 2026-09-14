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
];

const company = [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/our-works" },
    // "Blog" is hidden along with the homepage blog section and the nav
    // item above until real posts are ready — restore all together.
    // { label: "Blog", href: "/blogs" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];
const legal = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
];

const socials = [
    { label: "Ig", href: "#" },
    { label: "Tw", href: "#" },
    { label: "In", href: "#" },
    { label: "Yt", href: "#" },
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

                        {/* Text-label social buttons */}
                        <div className="flex gap-2 mb-6">
                            {socials.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-amber-600/12 hover:border-amber-600/35 hover:text-amber-600 flex items-center justify-center text-[12px] font-bold text-zinc-200 transition-all duration-200"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>

                        <ColumnHeading>Contact</ColumnHeading>
                        <div className="flex flex-col gap-2">
                            <a href="mailto:akshat@wizards.co.in" className="text-zinc-200 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                akshat@wizards.co.in
                            </a>
                            <a href="tel:+917339474554" className="text-zinc-200 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                +91 73394 74554
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
