"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Eye } from "lucide-react";
import { FadeUp } from "@/components/ui/motion_components";
import { Section, Wrapper } from "@/components/ui/sections";
import { Tag } from "./section_tag";
import { SectionHeading } from "./section_heading";
import { ProjectListType, ServiceProjectType } from "@/types/service.types";

const SECTOR_STYLES: Record<string, { bg: string; badgeBg: string; badgeText: string; badgeBorder: string }> = {
    Hospitality: { bg: "#0d110f", badgeBg: "rgba(15,110,86,.25)", badgeText: "#5DCAA5", badgeBorder: "rgba(15,110,86,.3)" },
    "E-Commerce": { bg: "#0d0a0a", badgeBg: "rgba(153,60,29,.25)", badgeText: "#F0997B", badgeBorder: "rgba(153,60,29,.3)" },
    Corporate: { bg: "#090c11", badgeBg: "rgba(24,95,165,.20)", badgeText: "#85B7EB", badgeBorder: "rgba(24,95,165,.3)" },
    Education: { bg: "#0c0a11", badgeBg: "rgba(83,74,183,.20)", badgeText: "#AFA9EC", badgeBorder: "rgba(83,74,183,.3)" },
    Healthcare: { bg: "#0d0a0c", badgeBg: "rgba(153,53,86,.20)", badgeText: "#ED93B1", badgeBorder: "rgba(153,53,86,.3)" },
    Retail: { bg: "#110d09", badgeBg: "rgba(133,79,11,.25)", badgeText: "#EF9F27", badgeBorder: "rgba(133,79,11,.3)" },
};

function ProjectCard({ project }: { project: ProjectListType }) {
    const [hovered, setHovered] = useState(false);
    const s = SECTOR_STYLES[project.sector] ?? SECTOR_STYLES["Corporate"];

    return (
        <Link
            href={project.href}
            className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-200"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* ── Placeholder thumbnail ── */}
            <div className="relative h-40 shrink-0 flex items-center justify-center" style={{ background: s.bg }}>

                {/* sector badge */}
                <div
                    className="absolute top-2.5 left-2.5 text-[9px] font-semibold tracking-wide uppercase px-2 py-1 rounded-md border z-10"
                    style={{ background: s.badgeBg, color: s.badgeText, borderColor: s.badgeBorder }}
                >
                    {project.sector}
                </div>

                {/* metric badge */}
                <div className="absolute bottom-2.5 right-2.5 bg-amber-600 px-2.5 py-1.5 rounded-lg z-10">
                    <p className="font-syne text-sm font-black text-amber-900 leading-none">{project.metric}</p>
                    <p className="text-[8px] font-semibold text-amber-800 mt-0.5">{project.metricLabel}</p>
                </div>

                {/* hover overlay */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"}`}>
                    <div className="inline-flex items-center gap-1.5 bg-amber-600 text-amber-950 text-[11px] font-semibold px-3.5 py-1.5 rounded-lg">
                        <Eye size={12} strokeWidth={2} />
                        View project
                    </div>
                </div>
            </div>

            {/* ── Card body ── */}
            <div className="flex flex-col gap-1.5 p-4 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-syne text-[13.5px] font-bold text-zinc-100 leading-snug">{project.name}</h3>
                    <ArrowUpRight
                        size={14}
                        className={`text-amber-600 shrink-0 mt-0.5 transition-all duration-200 ${hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}`}
                    />
                </div>
                <p className="text-[11px] text-amber-600 font-medium">{project.result}</p>
                <p className="text-[11.5px] text-zinc-500 leading-relaxed font-light flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-1 pt-2 border-t border-zinc-800 mt-auto">
                    {project.tags.map((t) => <Tag key={t} label={t} />)}
                </div>
            </div>
        </Link>
    );
}

export default function ProjectsSection({ data }: { data: ServiceProjectType }) {
    const [active, setActive] = useState("All");

    const filtered = active === "All" ? data.project_list : data.project_list.filter((p) => p.sector === active);

    return (
        <Section id="projects" className="bg-[#09090b]">
            <Wrapper>

                {/* ── Header ── */}
                <FadeUp delay={0} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span className="text-amber-500 text-[10px] font-medium tracking-widest uppercase">Our Projects</span>
                        </div>
                        <SectionHeading>
                            Work we're <span className="text-amber-500">proud of</span>
                        </SectionHeading>
                        <p className="text-zinc-600 text-[12px] mt-1.5">
                            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                            {active === "All" ? " across 6 sectors" : ` in ${active}`}
                        </p>
                    </div>
                    <Link
                        href="/our-works"
                        className="inline-flex items-center gap-1.5 text-amber-600 text-[12px] font-medium border border-amber-600/25 rounded-lg px-4 py-2 hover:bg-amber-600/08 hover:border-amber-600/45 transition-all duration-200 whitespace-nowrap self-start sm:self-auto"
                    >
                        All projects <ArrowUpRight size={13} />
                    </Link>
                </FadeUp>

                {/* ── Filter pills ── */}
                <FadeUp delay={0.05} className="flex flex-wrap gap-2 mb-8">
                    {data.filter.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActive(f)}
                            className={`px-4 py-1.5 rounded-full border text-[11px] font-medium transition-all duration-200 ${active === f
                                ? "bg-amber-600/12 border-amber-600/40 text-amber-600"
                                : "border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </FadeUp>

                {/* ── Project grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((project, i) => (
                        <FadeUp key={project.name} delay={i * 0.07}>
                            <ProjectCard project={project} />
                        </FadeUp>
                    ))}
                </div>

            </Wrapper>
        </Section>
    );
}