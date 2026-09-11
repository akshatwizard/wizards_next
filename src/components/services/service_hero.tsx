import { Section, Wrapper } from "../ui/sections";
import { FadeUp } from "../ui/motion_components";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { SectionBadge } from "./section_badge";
import { ServiceHeroTypes } from "@/types/service.types";



export default function ServiceHero({ data }: { data: ServiceHeroTypes }) {
    return (
        <Section className="relative overflow-hidden">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-175 h-87.5"
                style={{
                    background:
                        "radial-gradient(ellipse, rgba(217,119,6,0.1) 0%, transparent 65%)",
                }}
            />

            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left */}
                    <div className="flex flex-col">
                        <FadeUp delay={0}>
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-1.5 text-[11px] text-zinc-300 mb-6">
                                <Link
                                    href="/"
                                    className="hover:text-zinc-100 transition-colors"
                                >
                                    Home
                                </Link>
                                <ChevronRight size={12} />
                                <Link
                                    href="/services"
                                    className="hover:text-zinc-100 transition-colors"
                                >
                                    Services
                                </Link>
                                <ChevronRight size={12} />
                                <span className="text-zinc-100">{data.bread_crumb}</span>
                            </div>

                            <SectionBadge label={data.badge} />
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            {data.heading}
                        </FadeUp>

                        <FadeUp delay={0.12}>
                            <p className="text-zinc-100 text-[14px] leading-relaxed font-light max-w-md mb-8">
                                {/* We build fast, beautiful, and conversion-focused websites —
                                from business portfolios to full-scale e-commerce stores.
                                Delivered in weeks, not months. */}
                                {data.content}
                            </p>
                        </FadeUp>

                        {/* CTAs */}
                        {(data.primaryCta || data.secondaryCta) && <FadeUp
                            delay={0.16}
                            className="flex flex-wrap items-center gap-3 mb-10"
                        >
                            {
                                data.primaryCta && <Link
                                    href={data.primaryCta.href}
                                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 active:scale-[0.97] text-black text-[13px] font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                                >
                                    {data.primaryCta.label}
                                    {data.primaryCta.icon && <data.primaryCta.icon size={15} />}
                                </Link>
                            }

                            {data.secondaryCta &&
                                <Link
                                    href={data.secondaryCta.href}
                                    className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-600 text-zinc-300 text-[13px] font-medium px-6 py-3 rounded-xl transition-all duration-200"
                                >
                                    {data.secondaryCta.icon && <data.secondaryCta.icon size={13} className="text-amber-600" />}
                                    {data.secondaryCta.label}
                                </Link>
                            }
                        </FadeUp>}

                        {/* Social proof */}
                        {data.clientCount && data.clients_initials &&
                            <FadeUp delay={0.2} className="flex items-center gap-3">
                                <div className="flex">
                                    {data.clients_initials.map((i, idx) => (
                                        <div
                                            key={i}
                                            className="size-8 rounded-full border-2 border-[#09090b] bg-zinc-800 flex items-center justify-center text-[9px] font-bold text-amber-600"
                                            style={{ marginLeft: idx === 0 ? 0 : -8 }}
                                        >
                                            {i}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-0.5 mb-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={11}
                                                fill="#f59e0b"
                                                stroke="#f59e0b"
                                                strokeWidth={1}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-[10px] text-zinc-200">
                                        Trusted by{" "}
                                        <span className="text-zinc-300 font-medium">
                                            {data.clientCount} clients
                                        </span>{" "}
                                        across India
                                    </p>
                                </div>
                            </FadeUp>
                        }
                    </div>

                    {/* Right — image placeholder + floating stats */}
                    {data.right_section}
                </div>

                {/* Stat strip */}
                <FadeUp delay={0.25}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden mt-14">
                        {data.stats && data.stats.length && data.stats.map((s) => (
                            <div
                                key={s.label}
                                className="bg-[#09090b] px-6 py-5 text-center"
                            >
                                <p className="font-syne text-2xl font-extrabold text-amber-500">
                                    {s.value}
                                </p>
                                <p className="text-[11px] text-zinc-200 mt-0.5">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    );
}
