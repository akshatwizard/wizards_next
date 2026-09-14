import Link from "next/link";
import { Section, Wrapper } from "./ui/sections";
import { FadeUp } from "./ui/motion_components";
import { clients } from "@/constant/clients";

export default function CTABanner() {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0.2}
                    className="relative rounded-[20px] border min-h-70 flex items-center"
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

                    {/* ── Floating stat chips ── */}
                    <StatChip
                        style={{ top: -24, left: 24 }}
                        icon={<TrendingUpIcon />}
                        value="4.2×"
                        label="Avg. ROAS"
                    />
                    <StatChip
                        style={{ bottom: -24, left: 24 }}
                        icon={<UsersIcon />}
                        value={`${clients.length}+`}
                        label="Clients served"
                    />

                    {/* ── Main content ── */}
                    <div className="relative z-10 grid md:grid-cols-2 grid-cols-1 w-full items-center">
                        {/* Left — copy */}
                        <div className="p-10">
                            <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/30 rounded-full px-4 py-1.5 mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                                <span className="text-amber-600 text-[12px] tracking-[1.5px] uppercase">
                                    Limited spots — Q3 2026
                                </span>
                            </div>
                            <h2
                                className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-5xl md:text-4xl text-3xl font-medium"
                            >
                                Ready to <span className="text-amber-600 font-sora!">10x</span> your<br />brand online?
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

                        {/* Right — mock analytics card */}
                        <div className="p-8 flex items-center justify-center">
                            <div
                                className="w-110 rounded-[14px] p-4 flex flex-col gap-2.5 border"
                                style={{ background: "#0f0f0d", borderColor: "rgba(217,119,6,0.2)" }}
                            >
                                {/* header */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[12px] font-semibold text-zinc-100 tracking-wide">
                                        Campaign Overview
                                    </span>
                                    <span className="text-[12px] font-semibold px-2 py-0.5 rounded border"
                                        style={{ background: "rgba(217,119,6,0.15)", color: "#D97706", borderColor: "rgba(217,119,6,0.25)" }}>
                                        Live
                                    </span>
                                </div>

                                {/* stat pills */}
                                <div className="grid grid-cols-3 gap-1.5">
                                    {[["38%", "Reach ↑"], ["₹4.2L", "Revenue"], ["2.1K", "Leads"]].map(([v, l]) => (
                                        <div key={l} className="rounded-lg p-2 text-center border"
                                            style={{ background: "#18180f", borderColor: "rgba(217,119,6,0.1)" }}>
                                            <div className="font-sora! text-amber-600 font-extrabold text-2xl lg:text-4xl md:text-3xl">
                                                {v}
                                            </div>
                                            <div className="text-xs text-zinc-300 mt-0.5">{l}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* bar chart */}
                                <div className="flex items-end gap-1 h-11">
                                    {[30, 55, 90, 65, 85, 50, 100].map((h, i) => (
                                        <div key={i} className="flex-1 rounded-t-[3px]"
                                            style={{ height: `${h}%`, background: [2, 4, 6].includes(i) ? "#D97706" : "rgba(217,119,6,0.2)" }} />
                                    ))}
                                </div>

                                {/* footer */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[12px] text-zinc-300">Last 7 days</span>
                                    <span className="flex items-center gap-1 text-[12px] text-amber-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
                                        Updating live
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    );
}

/* ── small helpers ── */
function StatChip({ icon, value, label, style }: {
    icon: React.ReactNode; value: string; label: string;
    style: { top?: number; bottom?: number; left?: number; right?: number };
}) {
    return (
        <div
            className="absolute flex items-center gap-2 rounded-[10px] border px-3 py-1.5"
            style={{ background: "#0f0f0d", borderColor: "rgba(217,119,6,0.22)", ...style }}
        >
            <div className="w-6.5 h-6.5 rounded-[7px] flex items-center justify-center"
                style={{ background: "rgba(217,119,6,0.12)" }}>
                {icon}
            </div>
            <div>
                <div className="font-extrabold text-[13px] text-zinc-200"
                    style={{ fontFamily: "'Syne',sans-serif" }}>{value}</div>
                <div className="text-[12px] text-zinc-300">{label}</div>
            </div>
        </div>
    );
}

function TrendingUpIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
        </svg>
    );
}

function UsersIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}