"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Section, Wrapper } from "./ui/sections";
import { FadeUp } from "./ui/motion_components";
import { faqs } from "@/constant/faq";

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    // FAQPage structured data, built from the same list rendered below.
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: {
                "@type": "Answer",
                text: a,
            },
        })),
    };

    return (
        <Section>
            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
            />
            <Wrapper>
                <div>
                    <FadeUp className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-4 py-1.5 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        <span className="text-amber-600 text-[12px] tracking-widest uppercase font-medium">FAQ</span>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <h2 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
                            Questions we get <span className="text-amber-600 font-sora!">all the time</span>
                        </h2>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-sm font-light">No jargon. Just straight answers.</p>
                    </FadeUp>
                </div>

                <FadeUp delay={0.25} className="flex flex-col gap-1">
                    {faqs.map(({ q, a }, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={i}
                                className={`rounded-xl border overflow-hidden transition-colors duration-200 ${isOpen ? "border-amber-600/30 bg-zinc-900" : "border-zinc-800 bg-zinc-900"}`}>
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 px-5 py-4 cursor-pointer text-left"
                                >
                                    <h3 className={`text-sm leading-snug transition-colors duration-200 ${isOpen ? "text-zinc-300" : "text-zinc-100"}`}>
                                        {q}
                                    </h3>
                                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center border shrink-0 transition-all duration-200 ${isOpen ? "bg-amber-600/15 border-amber-600/40" : "bg-zinc-800 border-zinc-700"}`}>
                                        <Plus size={12} strokeWidth={2.5}
                                            className={`transition-all duration-300 ${isOpen ? "rotate-45 text-amber-600" : "text-zinc-200"}`} />
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-350 ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}>
                                    <p className="text-zinc-200 text-xs max-w-3xl leading-relaxed font-light px-5 border-l-2 border-amber-600/40 ml-5">
                                        {a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </FadeUp>
            </Wrapper>
        </Section>
    );
}