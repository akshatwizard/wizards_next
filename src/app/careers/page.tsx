"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Loader2, CheckCircle2, MapPin, Briefcase, Clock } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";
import { openRoles } from "@/constant/careers";

type FormState = {
    name: string;
    email: string;
    phone: string;
    role: string;
    portfolioLink: string;
    message: string;
};

const initialState: FormState = { name: "", email: "", phone: "", role: "", portfolioLink: "", message: "" };

export default function CareersPage() {
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
            const res = await fetch("/api/careers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Something went wrong.");
            setStatus("success");
            setForm(initialState);
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
        }
    }

    return (
        <main>
            {/* Hero */}
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
                <Wrapper className="pb-0!">
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[12px] text-zinc-300 mb-6">
                            <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-100">Careers</span>
                        </div>
                        <SectionBadge label="Join The Team" />
                    </FadeUp>
                    <FadeUp delay={0.08}>
                        <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium max-w-2xl">
                            Build things that actually <span className="text-amber-600 font-sora">ship</span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-sm font-light max-w-lg">
                            We&apos;re a small, hands-on team that runs marketing and development under one roof — no
                            department silos, no six-week approval chains. If that sounds better than worse, take a look below.
                        </p>
                    </FadeUp>
                </Wrapper>
            </Section>

            {/* Open roles */}
            <Section>
                <Wrapper className="lg:py-12 md:py-10 py-8">
                    <FadeUp>
                        <p className="text-zinc-100 font-semibold text-lg mb-6">Open Roles</p>
                    </FadeUp>
                    <div className="flex flex-col gap-4">
                        {openRoles.map((role, i) => (
                            <FadeUp key={role.id} delay={i * 0.05}>
                                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                        <div>
                                            <p className="text-zinc-200 font-medium text-[15px] mb-1">{role.title}</p>
                                            <div className="flex flex-wrap items-center gap-3 text-[12px] text-zinc-200">
                                                <span className="flex items-center gap-1"><Briefcase size={12} /> {role.department}</span>
                                                <span className="flex items-center gap-1"><MapPin size={12} /> {role.location}</span>
                                                <span className="flex items-center gap-1"><Clock size={12} /> {role.type}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                update("role", role.title);
                                                document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                                            }}
                                            className="shrink-0 inline-flex items-center gap-1.5 bg-amber-600/10 border border-amber-600/25 hover:bg-amber-600/20 text-amber-600 text-[12px] font-medium px-4 py-2 rounded-lg transition-colors"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    <p className="text-zinc-200 text-[13px] font-light mb-4">{role.description}</p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-[12px] text-zinc-300 uppercase tracking-wider mb-2">Responsibilities</p>
                                            <ul className="flex flex-col gap-1.5">
                                                {role.responsibilities.map((r) => (
                                                    <li key={r} className="text-zinc-100 text-[12.5px] flex gap-2">
                                                        <span className="text-amber-600">—</span>{r}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-[12px] text-zinc-300 uppercase tracking-wider mb-2">What we&apos;re looking for</p>
                                            <ul className="flex flex-col gap-1.5">
                                                {role.requirements.map((r) => (
                                                    <li key={r} className="text-zinc-100 text-[12.5px] flex gap-2">
                                                        <span className="text-amber-600">—</span>{r}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            {/* Application form */}
            <Section id="apply-form">
                <Wrapper className="lg:py-12 md:py-10 py-8">
                    <div className="grid gap-px bg-zinc-800 rounded-2xl overflow-hidden lg:grid-cols-[1fr_1.3fr]">
                        <div className="bg-zinc-900 p-7 flex flex-col justify-center">
                            <p className="text-zinc-200 font-medium text-[15px] mb-2">Don&apos;t see the right role?</p>
                            <p className="text-zinc-200 text-[12.5px] font-light">
                                Send your details anyway — mention the kind of work you&apos;re looking for in the message field.
                            </p>
                        </div>
                        <div className="bg-zinc-950/80 p-7 flex flex-col gap-3">
                            {status === "success" ? (
                                <div className="flex flex-col items-center justify-center text-center gap-3 py-10">
                                    <CheckCircle2 size={32} className="text-amber-600" />
                                    <p className="text-zinc-200 text-sm font-medium">Application received!</p>
                                    <p className="text-zinc-200 text-[12.5px] max-w-xs">We&apos;ll be in touch if it looks like a fit.</p>
                                    <button onClick={() => setStatus("idle")} className="text-amber-600 text-[12.5px] mt-2 hover:underline">
                                        Submit another application
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <Field label="Name">
                                            <input required type="text" placeholder="Your name" value={form.name}
                                                onChange={(e) => update("name", e.target.value)} className={inputClass} />
                                        </Field>
                                        <Field label="Phone">
                                            <input type="tel" placeholder="+91 00000 00000" value={form.phone}
                                                onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                                        </Field>
                                    </div>
                                    <Field label="Email">
                                        <input required type="email" placeholder="you@example.com" value={form.email}
                                            onChange={(e) => update("email", e.target.value)} className={inputClass} />
                                    </Field>
                                    <Field label="Role Applying For">
                                        <select required value={form.role} onChange={(e) => update("role", e.target.value)} className={inputClass}>
                                            <option value="">Select a role</option>
                                            {openRoles.map((r) => (
                                                <option key={r.id} value={r.title}>{r.title}</option>
                                            ))}
                                            <option value="Other">Other / not listed</option>
                                        </select>
                                    </Field>
                                    <Field label="Portfolio / Resume Link">
                                        <input type="url" placeholder="https://..." value={form.portfolioLink}
                                            onChange={(e) => update("portfolioLink", e.target.value)} className={inputClass} />
                                    </Field>
                                    <Field label="Message">
                                        <textarea rows={3} placeholder="Anything else we should know?" value={form.message}
                                            onChange={(e) => update("message", e.target.value)} className={inputClass + " resize-none"} />
                                    </Field>
                                    {status === "error" && <p className="text-red-500 text-[12px]">{errorMsg}</p>}
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.99] transition-all duration-200 text-black font-semibold text-[13px] py-3 rounded-xl mt-1 flex items-center justify-center gap-2 disabled:opacity-60"
                                    >
                                        {status === "submitting" ? (<><Loader2 size={15} className="animate-spin" /> Submitting...</>) : "Submit Application →"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
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
            <label className="text-[12px] text-zinc-300 uppercase tracking-wider">{label}</label>
            {children}
        </div>
    );
}
