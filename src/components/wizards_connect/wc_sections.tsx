// Wizards Connect marketing sections (used by /wizards-connect and /wizards-connect/pricing).
// Same building blocks and colours as the rest of wizards.co.in.
import Link from "next/link";
import { Check, ChevronRight, MessageCircle } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";
import { SectionHeading } from "@/components/services/section_heading";
import { WC_NAME, WC_PLANS, WC_COMPARE_ROWS, WC_FAQ, WC_SIGNUP_URL, WC_WHATSAPP, WC_WHATSAPP_URL, WC_PRICING_PATH, WC_PATH } from "@/constant/wizards_connect";

/** Visible placeholder for facts still waiting on Ravi. Remove once answered. */
export function NeedsInput({ children }: { children: React.ReactNode }) {
    return <span className="inline-block rounded bg-amber-600/15 border border-amber-600/40 text-amber-400 text-[11.5px] px-1.5 py-0.5 font-mono">{"{{NEEDS_INPUT: "}{children}{"}}"}</span>;
}

export function Crumbs({ items }: { items: { href?: string; label: string }[] }) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-zinc-300 mb-6 flex-wrap">
            <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
            {items.map((it) => (
                <span key={it.label} className="flex items-center gap-1.5"><ChevronRight size={12} />
                    {it.href ? <Link href={it.href} className="hover:text-zinc-100 transition-colors">{it.label}</Link> : <span className="text-zinc-100">{it.label}</span>}
                </span>
            ))}
        </nav>
    );
}

export function CtaButtons({ center = false }: { center?: boolean }) {
    return (
        <div className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
            <a href={WC_SIGNUP_URL} className="bg-amber-600 hover:bg-amber-700 active:scale-[0.98] transition-all duration-200 text-black text-[13px] font-semibold px-6 py-2.5 rounded-[9px]">
                Start free
            </a>
            <a href={WC_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-zinc-700 hover:border-amber-600/60 text-zinc-100 text-[13px] font-medium px-5 py-2.5 rounded-[9px] transition-colors">
                <MessageCircle size={15} /> WhatsApp {WC_WHATSAPP}
            </a>
        </div>
    );
}

export function PlanCards() {
    return (
        <div className="grid md:grid-cols-2 gap-5">
            {WC_PLANS.map((p) => {
                const paid = p.code === "paid";
                return (
                    <div key={p.code} className={`relative rounded-[18px] border p-6 flex flex-col gap-5 ${paid ? "border-amber-600/40 bg-amber-600/[0.04]" : "border-zinc-800 bg-zinc-900/40"}`}>
                        {paid ? <span className="absolute -top-3 left-6 bg-amber-600 text-black text-[11px] font-semibold px-2.5 py-0.5 rounded-full">Recommended</span> : null}
                        <div>
                            <h3 className="text-zinc-100 text-[18px] font-medium">{p.name}</h3>
                            <div className="mt-2 flex items-baseline gap-1.5">
                                <span className="text-zinc-100 text-4xl font-medium">₹{p.pricePerMonth.toLocaleString("en-IN")}</span>
                                <span className="text-zinc-300 text-[13px]">{p.pricePerMonth ? "/ month + GST" : "forever"}</span>
                            </div>
                            {paid ? <div className="mt-2"><NeedsInput>confirm ₹999/month (marked placeholder in billing code)</NeedsInput></div> : null}
                        </div>
                        <ul className="flex flex-col gap-2.5 text-[14px] text-zinc-200 font-light">
                            {p.features.map((f) => (
                                <li key={f} className="flex gap-2.5"><Check size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                    <span>{f}{paid && f.startsWith("API") ? <> <NeedsInput>public API not built yet; keep or remove</NeedsInput></> : null}</span></li>
                            ))}
                        </ul>
                        <a href={WC_SIGNUP_URL} className={`mt-auto text-center text-[13px] font-semibold px-6 py-2.5 rounded-[9px] transition-all ${paid ? "bg-amber-600 hover:bg-amber-700 text-black" : "border border-zinc-700 hover:border-amber-600/60 text-zinc-100"}`}>
                            {paid ? "Start free, upgrade in the app" : "Start free"}
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

export function MetaChargesNote() {
    return (
        <p className="text-zinc-300 text-[13px] leading-relaxed font-light">
            WhatsApp message charges are billed by Meta directly to the payment method in your Meta account, at Meta&apos;s rate. {WC_NAME} adds 0% markup. Plan prices are for the software and are charged monthly plus 18% GST, with a GST tax invoice.
        </p>
    );
}

export function CompareTable() {
    return (
        <div className="overflow-x-auto rounded-[14px] border border-zinc-800">
            <table className="w-full text-left text-[13.5px] border-collapse">
                <thead><tr className="border-b border-zinc-800 text-zinc-200 bg-zinc-900/40">
                    <th className="py-3 px-4 font-medium">Feature</th>{WC_PLANS.map((p) => <th key={p.code} className="py-3 px-4 font-medium">{p.name}</th>)}
                </tr></thead>
                <tbody>
                    {WC_COMPARE_ROWS.map(([k, label]) => (
                        <tr key={k} className="border-b border-zinc-800/70 last:border-0 text-zinc-200 font-light">
                            <td className="py-3 px-4">{label}</td>{WC_PLANS.map((p) => <td key={p.code} className="py-3 px-4">{p.compare[k]}</td>)}
                        </tr>
                    ))}
                    <tr className="text-zinc-200 font-light"><td className="py-3 px-4">Shared inbox, templates, contacts import, team roles</td>{WC_PLANS.map((p) => <td key={p.code} className="py-3 px-4">✓</td>)}</tr>
                </tbody>
            </table>
        </div>
    );
}

export function WcFaq() {
    return (
        <div className="flex flex-col divide-y divide-zinc-800 border-y border-zinc-800">
            {WC_FAQ.map((f) => (
                <details key={f.q} className="group py-4">
                    <summary className="cursor-pointer list-none flex justify-between gap-4 text-zinc-100 text-[15px]">{f.q}<span className="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary>
                    <p className="mt-2 text-zinc-300 text-[14px] leading-relaxed font-light">{f.a}</p>
                </details>
            ))}
        </div>
    );
}

export function WcCta() {
    return (
        <Section>
            <Wrapper className="lg:py-16 md:py-14 py-12">
                <FadeUp delay={0.1} className="rounded-[20px] border p-8 md:p-10 text-center flex flex-col items-center gap-4" style={{ background: "#111108", borderColor: "rgba(217,119,6,0.15)" }}>
                    <SectionBadge label={WC_NAME} />
                    <SectionHeading>Start on the Free plan</SectionHeading>
                    <p className="text-zinc-300 text-[14px] max-w-xl font-light">Free includes 1,000 broadcast recipients a month. Upgrade from inside the app when you need more users, numbers or scheduled broadcasts.</p>
                    <CtaButtons center />
                    <p className="text-zinc-400 text-[12px]"><Link href={WC_PATH} className="hover:text-zinc-200">Overview</Link> · <Link href={WC_PRICING_PATH} className="hover:text-zinc-200">Pricing</Link> · <Link href="/wa/privacy" className="hover:text-zinc-200">Privacy</Link> · <Link href="/wa/terms" className="hover:text-zinc-200">Terms</Link></p>
                </FadeUp>
            </Wrapper>
        </Section>
    );
}
