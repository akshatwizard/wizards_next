import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";
import { SECTOR_INDEX } from "@/constant/sector_index";

export const metadata: Metadata = {
    title: "Industries We Serve | Wizards Next",
    description: "Digital marketing tailored to 11 industries — healthcare, retail, education, e-commerce, and more — for clients across Varanasi, Hyderabad, and India.",
    alternates: {
        canonical: "/sector",
    },
};

function SectorCard({ sector }: { sector: (typeof SECTOR_INDEX)[number] }) {
    const { icon: Icon, slug, name, description, iconBg, iconColor } = sector;
    return (
        <Link
            href={`/sector/${slug}`}
            className="group h-full relative flex flex-col gap-3 p-5 rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800/60 hover:border-amber-600/30 transition-all duration-200 overflow-hidden"
        >
            <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(circle at 20% 20%, rgba(217,119,6,0.04) 0%, transparent 60%)" }}
            />
            <div className="flex items-start justify-between gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
                    <Icon size={18} className={iconColor} strokeWidth={1.7} />
                </div>
                <ArrowUpRight size={16} className="text-zinc-300 group-hover:text-amber-600 transition-colors shrink-0 mt-1" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
                <p className="text-[15px] font-semibold text-zinc-200 group-hover:text-amber-600 transition-colors leading-snug">
                    {name}
                </p>
                <p className="text-[12.5px] text-zinc-200 font-light leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
    );
}

export default function SectorIndexPage() {
    return (
        <main>
            <Section>
                <Wrapper className="pb-0!">
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[12px] text-zinc-300 mb-6">
                            <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-100">Sectors</span>
                        </div>
                        <SectionBadge label="Sectors We Serve" />
                    </FadeUp>
                    <FadeUp delay={0.08}>
                        <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium max-w-2xl">
                            11 sectors, <span className="text-amber-600 font-sora!">each with its own playbook</span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-sm font-light max-w-lg">
                            Healthcare markets differently than retail. Retail markets differently than education. Below is a distinct strategy for each sector we work in — not one template stretched across all of them.
                        </p>
                    </FadeUp>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="lg:py-10 md:py-8 py-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {SECTOR_INDEX.map((sector, i) => (
                            <FadeUp key={sector.slug} delay={Math.min(i * 0.05, 0.3)} className="h-full">
                                <SectorCard sector={sector} />
                            </FadeUp>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="lg:py-12 md:py-10 py-8">
                    <FadeUp className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 text-center">
                        <p className="text-zinc-200 text-lg font-medium mb-2">Don&apos;t see your industry?</p>
                        <p className="text-zinc-200 text-[13px] font-light mb-5 max-w-md mx-auto">
                            Every sector above started as a first conversation — tell us about yours.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-black text-[12.5px] font-semibold px-5 py-2.5 rounded-lg transition-colors"
                        >
                            Get in touch →
                        </Link>
                    </FadeUp>
                </Wrapper>
            </Section>
        </main>
    );
}
