"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Section, Wrapper } from "./ui/sections";
import { FadeUp } from "./ui/motion_components";

const contactInfo = [
    { Icon: Phone, label: "Phone", value: "+91 98765 43210" },
    { Icon: Mail, label: "Email", value: "hello@wizardsnext.com" },
    { Icon: MapPin, label: "Location", value: "Varanasi, Uttar Pradesh — India" },
    { Icon: Clock, label: "Hours", value: "Mon – Sat, 10am – 7pm IST" },
];

const socials = [
    { label: "Ig", href: "#" },
    { label: "Tw", href: "#" },
    { label: "In", href: "#" },
    { label: "Yt", href: "#" },
];

const services = [
    "Social Media Marketing", "Meta & Google Ads", "Brand Creation",
    "Web & App Development", "Shopify Setup", "Video & Podcast",
    "Graphic Design", "Content Strategy",
];

export default function Contact() {
    return (
        <Section>
            <Wrapper>
                <div>
                    <FadeUp className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-4 py-1.5 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        <span className="text-amber-600 text-[10px] tracking-widest uppercase">
                            Contact Us
                        </span>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <h2 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
                            Let's build something <br /><span className="text-amber-600 font-sora!">great together</span>
                        </h2>
                    </FadeUp>

                    <FadeUp delay={0.15}>
                        <p className="text-zinc-500 text-sm font-light max-w-md">
                            Drop us a message and a strategist will get back to you within 24 hours.
                        </p>
                    </FadeUp>
                </div>

                <FadeUp delay={0.2}
                    className="grid gap-px bg-zinc-800 rounded-2xl overflow-hidden lg:grid-cols-[1fr_1.3fr]"
                >
                    {/* Left — info */}
                    <div className="bg-zinc-900 p-7 flex flex-col gap-5">
                        {contactInfo.map(({ Icon, label, value }) => (
                            <div key={label} className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center shrink-0">
                                    <Icon size={15} strokeWidth={1.6} className="text-amber-600" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-0.5">{label}</p>
                                    <p className="text-zinc-400 text-[12.5px]">{value}</p>
                                </div>
                            </div>
                        ))}

                        {/* Social text buttons */}
                        <div className="mt-auto pt-4 border-t border-zinc-800">
                            <p className="text-[10.5px] text-zinc-600 uppercase tracking-wider mb-2.5">Follow us</p>
                            <div className="flex gap-2">
                                {socials.map(({ label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 hover:bg-amber-600/12 hover:border-amber-600/35 hover:text-amber-600 flex items-center justify-center text-[11px] font-bold text-zinc-500 transition-all duration-200"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — form */}
                    <div className="bg-zinc-950/80 p-7 flex flex-col gap-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10.5px] text-zinc-600 uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 rounded-lg px-3 py-2.5 text-[12.5px] outline-none focus:border-amber-600/45 transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10.5px] text-zinc-600 uppercase tracking-wider">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 rounded-lg px-3 py-2.5 text-[12.5px] outline-none focus:border-amber-600/45 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10.5px] text-zinc-600 uppercase tracking-wider">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 rounded-lg px-3 py-2.5 text-[12.5px] outline-none focus:border-amber-600/45 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10.5px] text-zinc-600 uppercase tracking-wider">
                                Service Interested In
                            </label>
                            <select className="bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg px-3 py-2.5 text-[12.5px] outline-none focus:border-amber-600/45 transition-colors">
                                <option value="">Select a service</option>
                                {services.map((s) => (
                                    <option key={s}>{s}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10.5px] text-zinc-600 uppercase tracking-wider">Message</label>
                            <textarea
                                rows={3}
                                placeholder="Tell us about your brand and goals..."
                                className="bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 rounded-lg px-3 py-2.5 text-[12.5px] outline-none focus:border-amber-600/45 transition-colors resize-none"
                            />
                        </div>

                        <button className="w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.99] transition-all duration-200 text-black font-semibold text-[13px] py-3 rounded-xl mt-1">
                            Send Message →
                        </button>
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    );
}