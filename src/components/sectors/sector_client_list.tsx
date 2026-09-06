import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Section, Wrapper } from "@/components/ui/sections"
import { FadeUp } from "@/components/ui/motion_components"
import { getClientsBySector } from "@/constant/clients"

export default function SectorClientList({ sectorSlug, sectorLabel }: { sectorSlug: string; sectorLabel: string }) {
    const sectorClients = getClientsBySector(sectorSlug)

    return (
        <Section>
            <Wrapper className="lg:py-12 md:py-10 py-8">
                <FadeUp>
                    <p className="text-zinc-100 font-semibold text-lg mb-1">
                        {sectorLabel} clients we work with
                    </p>
                    <p className="text-zinc-500 text-[13px] font-light mb-6">
                        {sectorClients.length > 0
                            ? "Real profiles, real work — open one to see the details."
                            : `Case studies for ${sectorLabel} are on their way — check back soon.`}
                    </p>
                </FadeUp>

                {sectorClients.length > 0 && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {sectorClients.map((client, i) => (
                            <FadeUp key={client.slug} delay={i * 0.05}>
                                <Link
                                    href={`/our-works/${client.slug}`}
                                    className="group block bg-zinc-900 border border-zinc-800 hover:border-amber-600/30 rounded-xl p-4 transition-colors h-full"
                                >
                                    <div className="flex items-start justify-between">
                                        <p className="text-zinc-200 text-[14px] font-medium group-hover:text-amber-600 transition-colors">
                                            {client.name}
                                        </p>
                                        <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-amber-600 transition-colors shrink-0" />
                                    </div>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {client.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="text-[9.5px] px-1.5 py-0.5 rounded border border-zinc-800 text-zinc-500 bg-zinc-950">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            </FadeUp>
                        ))}
                    </div>
                )}
            </Wrapper>
        </Section>
    )
}
