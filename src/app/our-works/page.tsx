import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";
import { clients } from "@/constant/clients";

export const metadata: Metadata = {
    title: "Our Works | Client Case Studies — Wizards Next",
    description: "Case studies and client profiles from across Wizards Next's work in marketing, branding, and web development.",
    alternates: {
        canonical: "/our-works",
    },
};

const SECTOR_ORDER: { slug: string; label: string }[] = [
    { slug: "healthcare", label: "Healthcare" },
    { slug: "travel-and-tourism", label: "Travel & Tourism" },
    { slug: "fmcg", label: "FMCG" },
    { slug: "education", label: "Education" },
    { slug: "automotive", label: "Automotive" },
    { slug: "retail", label: "Retail" },
    { slug: "corporate", label: "Corporate" },
    { slug: "e-commerce", label: "E-Commerce" },
    { slug: "food-and-dining", label: "Food & Dining" },
    { slug: "local-services", label: "Local Services" },
    { slug: "membership-community", label: "Membership & Community" },
    { slug: "personal-services", label: "Personal Services" },
];

function ClientCard({ client }: { client: (typeof clients)[0] }) {
    return (
        <Link
            href={`/our-works/${client.slug}`}
            className="group bg-zinc-900 border border-zinc-800 hover:border-amber-600/30 rounded-2xl overflow-hidden transition-colors flex flex-col"
        >
            <div className="relative w-full aspect-square shrink-0 bg-zinc-950 flex items-center justify-center p-3 border-b border-zinc-800">
                {client.heroImage ? (
                    <Image
                        src={client.heroImage}
                        alt={`${client.name} illustration`}
                        width={1254}
                        height={1254}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <span className="text-[12px] font-medium text-zinc-300 tracking-widest uppercase">{client.name}</span>
                )}
            </div>
            <div className="p-5 flex flex-col justify-between flex-1 gap-3">
                <div>
                    <p className="text-zinc-100 font-syne font-bold text-[19px] leading-snug group-hover:text-amber-600 transition-colors">{client.name}</p>
                    {client.tagline && <p className="text-zinc-300 text-[13.5px] leading-relaxed mt-2">{client.tagline}</p>}
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                        {client.tags.map((t) => (
                            <span key={t} className="text-[12px] font-medium px-2 py-1 rounded-full border border-zinc-800 text-zinc-200 bg-zinc-950 group-hover:border-amber-600/25 transition-colors">{t}</span>
                        ))}
                    </div>
                    <ArrowUpRight size={16} className="text-zinc-300 group-hover:text-amber-600 transition-colors shrink-0" />
                </div>
            </div>
        </Link>
    );
}

export default function OurWorksPage() {
    const bySector = SECTOR_ORDER.map(({ slug, label }) => ({
        label,
        clients: clients.filter((c) => c.sectors?.includes(slug)),
    })).filter((g) => g.clients.length > 0);

    const unassigned = clients.filter((c) => !c.sectors || c.sectors.length === 0);

    return (
        <main>
            <Section>
                <Wrapper className="pb-0!">
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[12px] text-zinc-300 mb-6">
                            <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-100">Our Works</span>
                        </div>
                        <SectionBadge label="Our Works" />
                    </FadeUp>
                    <FadeUp delay={0.08}>
                        <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium max-w-2xl">
                            {clients.length}+ brands, <span className="text-amber-600 font-sora!">one growth partner</span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-sm font-light max-w-lg">
                            A profile for every client we work with — browse by sector, or open a profile directly.
                        </p>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <p className="text-zinc-200 text-[13px] font-light max-w-2xl mt-4 leading-relaxed">
                            Every profile below is a real client, a real sector, and real numbers — not a portfolio of logos we&apos;re hoping you won&apos;t look too closely at. Where we have it, you&apos;ll find actual Search Console data: clicks, impressions, and ranking position, not vague claims of &ldquo;increased visibility.&rdquo; Where a result belongs to the client&apos;s own effort rather than ours, we say so.
                        </p>
                    </FadeUp>
                </Wrapper>
            </Section>

            {bySector.map((group, gi) => (
                <Section key={group.label}>
                    <Wrapper className={gi === 0 ? "lg:pt-8 md:pt-6 pt-4" : "lg:py-8 md:py-6 py-4"}>
                        <FadeUp>
                            <p className="text-zinc-100 font-semibold text-[13px] tracking-wide mb-4">{group.label}</p>
                        </FadeUp>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {group.clients.map((c) => <ClientCard key={c.slug} client={c} />)}
                        </div>
                    </Wrapper>
                </Section>
            ))}

            {unassigned.length > 0 && (
                <Section>
                    <Wrapper className="lg:py-8 md:py-6 py-4">
                        <FadeUp>
                            <p className="text-zinc-100 font-semibold text-[13px] tracking-wide mb-4">More Clients</p>
                        </FadeUp>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {unassigned.map((c) => <ClientCard key={c.slug} client={c} />)}
                        </div>
                    </Wrapper>
                </Section>
            )}
        </main>
    );
}
