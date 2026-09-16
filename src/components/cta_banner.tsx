import Link from "next/link";
import { Section, Wrapper } from "./ui/sections";
import { FadeUp } from "./ui/motion_components";
import { clients } from "@/constant/clients";
import { ALL_SERVICES } from "@/constant/service_meta";
import { SECTOR_INDEX } from "@/constant/sector_index";

// Real numbers only — no "Live" claim, no invented average, no fake
// urgency. See CTA-BANNER-CHANGES.md for why this replaced the old
// mock "Campaign Overview" dashboard and the "Limited Spots" badge.
const STATS = [
    { value: `${clients.length}+`, label: "Clients Served" },
    { value: `${ALL_SERVICES.length}+`, label: "Services Offered" },
    { value: "24+", label: "Years Combined Experience" },
    { value: `${SECTOR_INDEX.length}`, label: "Industries Served" },
];

const PROCESS_STEPS = [
    {
        title: "A quick call",
        desc: "20 minutes, no pitch deck. We ask about your business and what you're actually trying to achieve.",
    },
    {
        title: "We look at what's already working",
        desc: "A real read on your current site, socials, and search presence — not a canned audit template.",
    },
    {
        title: "A scoped plan, not a generic proposal",
        desc: "Priced and built around what you actually need, not a one-size package.",
    },
    {
        title: "No obligation",
        desc: "If it's not a fit — for you or for us — we'll say so directly.",
    },
];

export default function CTABanner() {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0.2}
                    className="relative rounded-[20px] border flex flex-col"
                    style={{
                        background: "#111108",
                        borderColor: "rgba(217,119,6,0.15)",
                    }}
                >
                    <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 900 280"
                            preserveAspectRatio="xMidYMid slice"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            {/* radial burst */}
                            <circle cx="820" cy="-20" r="220" fill="rgba(217,119,6,0.06)" />
                            <circle cx="820" cy="-20" r="150" fill="rgba(217,119,6,0.05)" />
                            <circle cx="820" cy="-20" r="80" fill="rgba(217,119,6,0.07)" />
                            {/* grid */}
                            <g stroke="rgba(217,119,6,0.07)" strokeWidth="0.5">
                                {[60, 120, 180, 240].map(y => <line key={y} x1="0" y1={y} x2="900" y2={y} />)}
                                {[100, 200, 300, 400, 500, 600, 700, 800].map(x => <line key={x} x1={x} y1="0" x2={x} y2="280" />)}
                            </g>
                            {/* diagonal lines */}
                            <g stroke="rgba(217,119,6,0.08)" strokeWidth="0.7">
                                <line x1="-40" y1="340" x2="200" y2="0" />
                                <line x1="0" y1="340" x2="240" y2="0" />
                                <line x1="40" y1="340" x2="280" y2="0" />
                                <line x1="80" y1="340" x2="320" y2="0" />
                            </g>
                            {/* rings */}
                            <circle cx="750" cy="140" r="120" fill="none" stroke="rgba(217,119,6,0.08)" strokeWidth="0.8" />
                            <circle cx="750" cy="140" r="90" fill="none" stroke="rgba(217,119,6,0.06)" strokeWidth="0.8" />
                            <circle cx="750" cy="140" r="60" fill="none" stroke="rgba(217,119,6,0.05)" strokeWidth="0.8" />
                            {/* dots */}
                            {([
                                [50, 30, 2, 0.3], [130, 80, 1.5, 0.2], [80, 200, 2, 0.25],
                                [170, 250, 1.5, 0.2], [380, 20, 2, 0.2], [430, 260, 1.5, 0.15],
                            ] as [number, number, number, number][]).map(([cx, cy, r, o]) => (
                                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={`rgba(217,119,6,${o})`} />
                            ))}
                            {/* border lines */}
                            <rect x="0" y="272" width="900" height="2" fill="rgba(217,119,6,0.12)" />
                            <rect x="0" y="0" width="900" height="1.5" fill="rgba(217,119,6,0.35)" />
                        </svg>
                    </div>

                    {/* ── Top: CTA copy + honest stats panel ── */}
                    <div className="relative z-10 grid md:grid-cols-2 grid-cols-1 w-full items-center">
                        {/* Left — copy */}
                        <div className="p-10">
                            <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/30 rounded-full px-4 py-1.5 mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                                <span className="text-amber-600 text-[12px] tracking-[1.5px] uppercase">
                                    Free 20-Min Strategy Call
                                </span>
                            </div>
                            <h2
                                className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-5xl md:text-4xl text-3xl font-medium"
                            >
                                Ready to grow <span className="text-amber-600 font-sora!">your brand</span><br />online?
                            </h2>
                            <p className="text-zinc-200 text-sm font-light leading-relaxed max-w-sm mb-6">
                                Join the {clients.length}+ businesses that trust Wizards Next to run their digital presence — from ads and
                                content to full-stack web builds.
                            </p>
                            <div className="flex gap-2.5 flex-wrap">
                                <Link
                                    href="#contact"
                                    className="bg-amber-600 hover:bg-amber-700 active:scale-[0.98] transition-all duration-200 text-black text-[12px] font-semibold px-6 py-2.5 rounded-[9px]"
                                >
                                    Book a Free Call →
                                </Link>
                                <Link
                                    href="#work"
                                    className="bg-transparent hover:border-amber-600/40 hover:text-zinc-100 transition-all duration-200 text-zinc-100 text-[12px] font-medium px-6 py-2.5 rounded-[9px] border border-zinc-700"
                                >
                                    See Our Work
                                </Link>
                            </div>
                        </div>

                        {/* Right — honest stats panel. No "Live" badge, no chart,
                            no invented average — just what's real and already
                            computed elsewhere on the site. */}
                        <div className="p-8 flex items-center justify-center">
                            <div
                                className="w-110 rounded-[14px] p-5 flex flex-col gap-3 border"
                                style={{ background: "#0f0f0d", borderColor: "rgba(217,119,6,0.2)" }}
                            >
                                <span className="text-[12px] font-semibold text-zinc-100 tracking-wide">
                                    Wizards Next, at a glance
                                </span>
                                <div className="grid grid-cols-2 gap-2">
                                    {STATS.map(({ value, label }) => (
                                        <div key={label} className="rounded-lg p-3 text-center border"
                                            style={{ background: "#18180f", borderColor: "rgba(217,119,6,0.1)" }}>
                                            <div className="font-sora! text-amber-600 font-extrabold text-2xl lg:text-3xl">
                                                {value}
                                            </div>
                                            <div className="text-[11px] text-zinc-300 mt-0.5 leading-tight">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Bottom: what actually happens when you book a call ── */}
                    <div className="relative z-10 border-t px-10 py-8" style={{ borderColor: "rgba(217,119,6,0.12)" }}>
                        <p className="text-zinc-100 text-[13px] font-semibold mb-5">What happens when you book that call</p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {PROCESS_STEPS.map((step, i) => (
                                <div key={step.title} className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                                            style={{ background: "rgba(217,119,6,0.15)", color: "#D97706" }}>
                                            {i + 1}
                                        </span>
                                        <p className="text-zinc-100 text-[13px] font-medium">{step.title}</p>
                                    </div>
                                    <p className="text-zinc-300 text-[12px] leading-relaxed pl-8">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    );
}
