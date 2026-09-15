"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";
import { FAQ_CATEGORIES } from "@/constant/faq";

export default function FAQPageContent() {
    const [openKey, setOpenKey] = useState<string | null>(null);

    return (
        <main>
            <Section>
                <Wrapper className="pb-0!">
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[12px] text-zinc-300 mb-6">
                            <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-100">FAQ</span>
                        </div>
                        <SectionBadge label="Frequently Asked Questions" />
                    </FadeUp>
                    <FadeUp delay={0.08}>
                        <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium max-w-2xl">
                            Everything people <span className="text-amber-600 font-sora">ask us</span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-sm font-light max-w-lg">
                            The short version of the homepage FAQ, in full — organised by topic. Don&apos;t see your question? <Link href="/contact" className="text-amber-600 hover:underline">Just ask us directly</Link>.
                        </p>
                    </FadeUp>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="lg:py-12 md:py-10 py-8 flex flex-col gap-10">
                    {FAQ_CATEGORIES.map((group, gi) => (
                        <FadeUp key={group.category} delay={Math.min(gi * 0.05, 0.2)}>
                            <h2 className="text-zinc-200 text-lg font-semibold mb-4 flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                                {group.category}
                            </h2>
                            <div className="flex flex-col gap-1">
                                {group.items.map((item, ii) => {
                                    const key = `${gi}-${ii}`;
                                    const isOpen = openKey === key;
                                    return (
                                        <div
                                            key={key}
                                            className={`rounded-xl border overflow-hidden transition-colors duration-200 ${isOpen ? "border-amber-600/30 bg-zinc-900" : "border-zinc-800 bg-zinc-900"}`}
                                        >
                                            <button
                                                onClick={() => setOpenKey(isOpen ? null : key)}
                                                className="w-full flex items-center justify-between gap-4 px-5 py-4 cursor-pointer text-left"
                                            >
                                                <h3 className={`text-sm leading-snug transition-colors duration-200 ${isOpen ? "text-zinc-300" : "text-zinc-100"}`}>
                                                    {item.q}
                                                </h3>
                                                <div className={`w-6 h-6 rounded-lg flex items-center justify-center border shrink-0 transition-all duration-200 ${isOpen ? "bg-amber-600/15 border-amber-600/40" : "bg-zinc-800 border-zinc-700"}`}>
                                                    <Plus size={12} strokeWidth={2.5}
                                                        className={`transition-all duration-300 ${isOpen ? "rotate-45 text-amber-600" : "text-zinc-200"}`} />
                                                </div>
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-350 ${isOpen ? "max-h-60 pb-4" : "max-h-0"}`}>
                                                <p className="text-zinc-200 text-xs max-w-3xl leading-relaxed font-light px-5 border-l-2 border-amber-600/40 ml-5">
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </FadeUp>
                    ))}
                </Wrapper>
            </Section>
        </main>
    );
}
