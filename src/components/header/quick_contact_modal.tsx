"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { HoneypotField } from "../ui/honeypot_field";

type FormState = { name: string; phone: string; email: string; message: string };
const initialState: FormState = { name: "", phone: "", email: "", message: "" };

export default function QuickContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [form, setForm] = useState<FormState>(initialState);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [honeypot, setHoneypot] = useState("");
    const [formRenderedAt] = useState(() => Date.now());

    function update<K extends keyof FormState>(key: K, value: FormState[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function handleClose() {
        onClose();
        // Reset after the close animation finishes rather than mid-fade
        setTimeout(() => {
            setStatus("idle");
            setForm(initialState);
            setHoneypot("");
            setErrorMsg("");
        }, 200);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (form.message.trim().length < 10) {
            setStatus("error");
            setErrorMsg("Please write a message of at least 10 characters.");
            return;
        }
        setStatus("submitting");
        setErrorMsg("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, service: "Get Started — Quick Contact", honeypot, formRenderedAt }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Something went wrong.");
            setStatus("success");
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
        }
    }

    const inputClass =
        "bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 rounded-lg px-3 py-2.5 text-[12.5px] outline-none focus:border-amber-600/45 transition-colors w-full";

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-100 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={handleClose}
                        aria-hidden
                    />

                    {/* Panel */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Get started — quick contact form"
                        className="relative w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            onClick={handleClose}
                            aria-label="Close"
                            className="absolute top-4 right-4 text-zinc-300 hover:text-zinc-100 transition-colors cursor-pointer"
                        >
                            <X size={18} />
                        </button>

                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center text-center gap-3 py-8">
                                <CheckCircle2 size={32} className="text-amber-600" />
                                <p className="text-zinc-200 text-sm font-medium">Message sent — thanks!</p>
                                <p className="text-zinc-200 text-[12.5px] max-w-xs">A strategist will get back to you within 24 hours.</p>
                                <button onClick={handleClose} className="text-amber-600 text-[12.5px] mt-2 hover:underline cursor-pointer">
                                    Close
                                </button>
                            </div>
                        ) : (
                            <>
                                <p className="text-zinc-200 font-medium text-[17px] mb-1 pr-6">Let&apos;s get started</p>
                                <p className="text-zinc-300 text-[12.5px] mb-5">Tell us a bit about your business — a strategist will get back to you within 24 hours.</p>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                    <HoneypotField value={honeypot} onChange={setHoneypot} />
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
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={(e) => update("email", e.target.value)}
                                        className={inputClass}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        value={form.phone}
                                        onChange={(e) => update("phone", e.target.value)}
                                        className={inputClass}
                                    />
                                    <textarea
                                        required
                                        rows={3}
                                        minLength={10}
                                        placeholder="Tell us about your brand and goals..."
                                        value={form.message}
                                        onChange={(e) => update("message", e.target.value)}
                                        className={`${inputClass} resize-none`}
                                    />

                                    {status === "error" && <p className="text-red-500 text-[12px]">{errorMsg}</p>}

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.99] transition-all duration-200 text-black font-semibold text-[13px] py-3 rounded-xl mt-1 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                                    >
                                        {status === "submitting" ? (<><Loader2 size={15} className="animate-spin" /> Sending...</>) : "Send Message →"}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
