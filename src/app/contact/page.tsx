"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock, Loader2, CheckCircle2 } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";
import { services } from "@/constant/services";

// Confirmed from the live wizards.co.in site — update here if these change.
const contactInfo = [
    { Icon: Phone, label: "Phone", value: "+91 73394 74554" },
    { Icon: Phone, label: "Alternate", value: "+91 99350 70000" },
    { Icon: Mail, label: "Email", value: "akshat@wizards.co.in" },
    { Icon: MapPin, label: "Location", value: "D59/127 A-1-4, Nirala Nagar Lane No. 3, Shivpurwa, Varanasi – 221010" },
    { Icon: Clock, label: "Hours", value: "Mon – Sat, 10am – 7pm IST" }, // not confirmed on the old site — verify
];

type FormState = {
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
};

const initialState: FormState = { name: "", phone: "", email: "", service: "", message: "" };

export default function ContactPage() {
    const [form, setForm] = useState<FormState>(initialState);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    function update<K extends keyof FormState>(key: K, value: FormState[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("submitting");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || "Something went wrong.");
            }

            setStatus("success");
            setForm(initialState);
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
        }
    }

    return (
        <main>
            <Section className="relative overflow-hidden">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-175 h-87.5"
                    style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.1) 0%, transparent 65%)" }}
                />

                <Wrapper>
                    <div>
                        <FadeUp delay={0}>
                            <div className="flex items-center gap-1.5 text-[11px] text-zinc-600 mb-6">
                                <Link href="/" className="hover:text-zinc-400 transition-colors">Home</Link>
                                <ChevronRight size={12} />
                                <span className="text-zinc-400">Contact</span>
                            </div>
                            <SectionBadge label="Contact Us" />
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium max-w-2xl">
                                Let&apos;s build something <span className="text-amber-600 font-sora">great together</span>
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.15}>
                            <p className="text-zinc-500 text-sm font-light max-w-md">
                                Tell us about your business and what you&apos;re trying to achieve — a strategist will get back to you within 24 hours.
                            </p>
                        </FadeUp>
                    </div>

                    <FadeUp delay={0.2} className="grid gap-px bg-zinc-800 rounded-2xl overflow-hidden lg:grid-cols-[1fr_1.3fr]">
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
                        </div>

                        {/* Right — form */}
                        <div className="bg-zinc-950/80 p-7 flex flex-col gap-3">
                            {status === "success" ? (
                                <div className="flex flex-col items-center justify-center text-center gap-3 py-10">
                                    <CheckCircle2 size={32} className="text-amber-600" />
                                    <p className="text-zinc-200 text-sm font-medium">Message sent — thanks!</p>
                                    <p className="text-zinc-500 text-[12.5px] max-w-xs">
                                        A strategist will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="text-amber-600 text-[12.5px] mt-2 hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <Field label="Name">
                                            <input
                                                required
                                                type="text"
                                                placeholder="Your name"
                                                value={form.name}
                                                onChange={(e) => update("name", e.target.value)}
                                                className={inputClass}
                                            />
                                        </Field>
                                        <Field label="Phone">
                                            <input
                                                type="tel"
                                                placeholder="+91 00000 00000"
                                                value={form.phone}
                                                onChange={(e) => update("phone", e.target.value)}
                                                className={inputClass}
                                            />
                                        </Field>
                                    </div>

                                    <Field label="Email">
                                        <input
                                            required
                                            type="email"
                                            placeholder="you@example.com"
                                            value={form.email}
                                            onChange={(e) => update("email", e.target.value)}
                                            className={inputClass}
                                        />
                                    </Field>

                                    <Field label="Service Interested In">
                                        <select
                                            value={form.service}
                                            onChange={(e) => update("service", e.target.value)}
                                            className={inputClass}
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((s) => (
                                                <option key={s.name} value={s.name}>{s.name}</option>
                                            ))}
                                        </select>
                                    </Field>

                                    <Field label="Message">
                                        <textarea
                                            required
                                            rows={3}
                                            placeholder="Tell us about your brand and goals..."
                                            value={form.message}
                                            onChange={(e) => update("message", e.target.value)}
                                            className={inputClass + " resize-none"}
                                        />
                                    </Field>

                                    {status === "error" && (
                                        <p className="text-red-500 text-[12px]">{errorMsg}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.99] transition-all duration-200 text-black font-semibold text-[13px] py-3 rounded-xl mt-1 flex items-center justify-center gap-2 disabled:opacity-60"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <Loader2 size={15} className="animate-spin" /> Sending...
                                            </>
                                        ) : (
                                            "Send Message →"
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>
        </main>
    );
}

const inputClass =
    "bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 rounded-lg px-3 py-2.5 text-[12.5px] outline-none focus:border-amber-600/45 transition-colors";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-[10.5px] text-zinc-600 uppercase tracking-wider">{label}</label>
            {children}
        </div>
    );
}
