import { SectorProjectType } from "@/types/sector.types";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Section, Wrapper } from "../ui/sections";
import { FadeUp } from "../ui/motion_components";
import { SectionBadge } from "../services/section_badge";
import { SectionHeading } from "../services/section_heading";

export default function SectorProjects({ data }: { data: SectorProjectType }) {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                    <div>
                        <SectionBadge label={data.badge ?? 'Projects'} />
                        <SectionHeading>{data.heading}</SectionHeading>
                        {data.subheading && (
                            <p className="text-zinc-200 text-[13.5px] font-light leading-relaxed mt-2 max-w-xl">
                                {data.subheading}
                            </p>
                        )}
                    </div>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.items.map((project, i) => (
                        <FadeUp key={project.name} delay={i * 0.07}>
                            <div className="group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-zinc-700 transition-all duration-200">

                                {/* Image placeholder */}
                                <div className="relative h-44 bg-zinc-950 overflow-hidden shrink-0">
                                    <div aria-hidden className="absolute inset-0 opacity-[0.15]"
                                        style={{
                                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                                            backgroundSize: '24px 24px',
                                        }} />
                                    {/* Ambient glow in card's accent color */}
                                    <div className="absolute inset-0"
                                        style={{ background: 'radial-gradient(ellipse at 50% 110%, rgba(217,119,6,0.1) 0%, transparent 60%)' }} />

                                    {/* Project type label */}
                                    <div className="absolute top-2.5 left-2.5 text-[12px] font-semibold tracking-wider uppercase px-2 py-1 rounded-md border border-amber-600/25 bg-amber-600/10 text-amber-600">
                                        {project.type}
                                    </div>

                                    {/* Hover arrow overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40">
                                        {project.href ? (
                                            <Link href={project.href}
                                                className="inline-flex items-center gap-1.5 bg-amber-600 text-black text-[12px] font-semibold px-4 py-2 rounded-lg">
                                                View project <ExternalLink size={11} />
                                            </Link>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 bg-zinc-800 text-zinc-300 text-[12px] font-medium px-4 py-2 rounded-lg border border-zinc-700">
                                                Coming soon
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Card meta */}
                                <div className="p-4">
                                    <div className="flex items-start justify-between mb-2.5">
                                        <h3 className="font-syne text-[13.5px] font-bold text-zinc-100 leading-snug">
                                            {project.name}
                                        </h3>
                                        <div className="size-6 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600/15 group-hover:border-amber-600/30 transition-colors">
                                            <ArrowRight size={11} className="text-zinc-200 group-hover:text-amber-600 transition-colors" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.map(t => (
                                            <span key={t} className="text-[12px] px-2 py-0.5 rounded border border-zinc-800 bg-zinc-950 text-zinc-300 group-hover:border-amber-600/20 group-hover:text-zinc-200 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}