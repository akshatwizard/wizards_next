import { Wrapper } from "./ui/sections";

const services = [
    "Social Media Marketing", "Meta & Google Ads", "Brand Creation",
    "Web & App Dev", "Shopify Setup", "Video & Podcast",
];
const company = ["About Us", "Our Work", "Team", "Blog", "Careers", "Contact"];
const legal = ["Privacy Policy", "Terms of Service"];

const socials = [
    { label: "Ig", href: "#" },
    { label: "Tw", href: "#" },
    { label: "In", href: "#" },
    { label: "Yt", href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-zinc-800/20 border-t border-zinc-900 px-8 pb-6">
            <Wrapper className="pb-0! gap-0!">
                <div
                    className="grid gap-8 mb-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr] md:grid-cols-2 grid-cols-1"
                >
                    {/* Brand */}
                    <div>
                        <p
                            className="font-extrabold text-xl text-zinc-100 tracking-tight mb-2"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            WIZARDS<span className="text-amber-600">.</span>
                        </p>
                        <p className="text-zinc-500 text-[12px] font-light leading-relaxed max-w-50 mb-4">
                            Your growth partner for social media, ads, branding, web & content.
                        </p>

                        {/* Text-label social buttons */}
                        <div className="flex gap-2">
                            {socials.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-amber-600/12 hover:border-amber-600/35 hover:text-amber-600 flex items-center justify-center text-[11px] font-bold text-zinc-500 transition-all duration-200"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <p
                            className="text-zinc-100 font-semibold text-[12px] tracking-wide mb-4"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Services
                        </p>
                        <div className="flex flex-col gap-2">
                            {services.map((s) => (
                                <a key={s} href="#" className="text-zinc-500 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <p
                            className="text-zinc-100 font-semibold text-[12px] tracking-wide mb-4"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Company
                        </p>
                        <div className="flex flex-col gap-2">
                            {company.map((c) => (
                                <a key={c} href="#" className="text-zinc-500 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                    {c}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact + Legal */}
                    <div>
                        <p
                            className="text-zinc-100 font-semibold text-[12px] tracking-wide mb-4"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Contact
                        </p>
                        <div className="flex flex-col gap-2 mb-6">
                            {["hello@wizardsnext.com", "+91 98765 43210", "Varanasi, UP — India"].map((c) => (
                                <a key={c} href="#" className="text-zinc-500 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                    {c}
                                </a>
                            ))}
                        </div>
                        <p
                            className="text-zinc-100 font-semibold text-[12px] tracking-wide mb-3"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Legal
                        </p>
                        <div className="flex flex-col gap-2">
                            {legal.map((l) => (
                                <a key={l} href="#" className="text-zinc-500 text-[12px] hover:text-amber-600 transition-colors duration-200">
                                    {l}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-zinc-900 pt-5 flex items-center justify-between flex-wrap">
                    <p className="text-zinc-700 text-[11px]">© {new Date().getFullYear()} Wizards Next LLP. All rights reserved.</p>
                    <div className="flex items-center gap-1.5 text-zinc-600 text-[10.5px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
                        Varanasi — Pan India
                    </div>
                </div>

            </Wrapper>
        </footer>
    );
}