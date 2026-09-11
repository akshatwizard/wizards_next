import Link from "next/link"
import Image from "next/image"
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
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sectorClients.map((client, i) => {
                            const showcase = client.screenshots?.[0]
                            return (
                                <FadeUp key={client.slug} delay={i * 0.05}>
                                    <Link
                                        href={`/our-works/${client.slug}`}
                                        className="group block bg-zinc-900 border border-zinc-800 hover:border-amber-600/30 rounded-xl overflow-hidden transition-colors h-full"
                                    >
                                        {showcase && (
                                            <div className="relative w-full h-36 bg-zinc-950 border-b border-zinc-800">
                                                <Image
                                                    src={showcase.src}
                                                    alt={showcase.caption ?? `${client.name} — real results`}
                                                    width={1254}
                                                    height={1254}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="p-4">
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
                                        </div>
                                    </Link>
                                </FadeUp>
                            )
                        })}
                    </div>
                )}
            </Wrapper>
        </Section>
    )
}
