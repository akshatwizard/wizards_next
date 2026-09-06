"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";

type FormState = { name: string; email: string; phone: string; message: string };
const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function SectorInterestForm({ sectorLabel }: { sectorLabel: string }) {
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
                body: JSON.stringify({
                    ...form,
                    service: `${sectorLabel} — Sector Interest`,
                }),
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

    const inputClass =
        "bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 rounded-lg px-3 py-2.5 text-[12.5px] outline-none focus:border-amber-600/45 transition-colors w-full";

    return (
        <Section>
            <Wrapper className="lg:py-12 md:py-10 py-8">
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 grid md:grid-cols-[1fr_1.3fr] gap-6 items-center">
                    <FadeUp>
                        <p className="text-zinc-200 font-medium text-[16px] mb-2">
                            Ready to grow in {sectorLabel}?
                        </p>
                        <p className="text-zinc-500 text-[13px] font-light">
                            Tell us a bit about your business — a strategist familiar with {sectorLabel.toLowerCase()} will get back to you within 24 hours.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        {status === "success" ? (
                            <div className="flex items-center gap-3 text-center md:text-left flex-col md:flex-row">
                                <CheckCircle2 size={24} className="text-amber-600 shrink-0" />
                                <div>
                                    <p className="text-zinc-200 text-sm font-medium">Thanks — message sent!</p>
                                    <button onClick={() => setStatus("idle")} className="text-amber-600 text-[12px] hover:underline">
                                        Send another message
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                                <input
                                    required
                                    type="text"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={(e) => update("name", e.target.value)}
                                    className={inputClass}
                                />
                                <input
                                    required
                                    type="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={(e) => update("email", e.target.value)}
                                    className={inputClass}
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone (optional)"
                                    value={form.phone}
                                    onChange={(e) => update("phone", e.target.value)}
                                    className={inputClass}
                                />
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="shrink-0 bg-amber-600 hover:bg-amber-500 disabled:opacity-60 text-black font-semibold text-[12.5px] px-5 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    {status === "submitting" ? <Loader2 size={14} className="animate-spin" /> : "Show Interest"}
                                </button>
                            </form>
                        )}
                        {status === "error" && <p className="text-red-500 text-[12px] mt-2">{errorMsg}</p>}
                    </FadeUp>
                </div>
            </Wrapper>
        </Section>
    );
}
