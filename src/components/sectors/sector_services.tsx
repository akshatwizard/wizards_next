import { SectorServicesType } from "@/types/sector.types"
import { Section, Wrapper } from "../ui/sections"
import { FadeUp } from "../ui/motion_components"
import { SectionBadge } from "../services/section_badge"
import { SectionHeading } from "../services/section_heading"
import Link from "next/link"
import { ArrowRight } from "lucide-react"


export default function SectorServices({ data }: { data: SectorServicesType }) {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                    <div>
                        <SectionBadge label={data.badge ?? 'What we do for you'} />
                        <SectionHeading>{data.heading}</SectionHeading>
                        {data.subheading && (
                            <p className="text-zinc-500 text-[13.5px] font-light leading-relaxed mt-2 max-w-xl">
                                {data.subheading}
                            </p>
                        )}
                    </div>
                    <Link href="/contact"
                        className="inline-flex items-center gap-1.5 text-amber-600 text-[12px] font-medium border border-amber-600/25 rounded-lg px-4 py-2 hover:bg-amber-600/8 transition-colors shrink-0">
                        Discuss your needs <ArrowRight size={12} />
                    </Link>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {data.items.map((svc, i) => {
                        const Icon = svc.icon
                        return (
                            <FadeUp key={svc.title} delay={i * 0.07}>
                                <div className="group h-full flex flex-col gap-4 p-5 rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-200">
                                    <div className="size-10 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center">
                                        <Icon size={18} className="text-amber-500" strokeWidth={1.7} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-syne text-[15px] font-bold text-zinc-100 mb-1.5">
                                            {svc.title}
                                        </h3>
                                        <p className="text-[12.5px] text-zinc-500 leading-relaxed font-light">
                                            {svc.desc}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
                                        {svc.tags.map(t => (
                                            <span key={t} className="text-[10px] px-2 py-0.5 rounded border border-zinc-700/60 bg-zinc-950 text-zinc-500">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeUp>
                        )
                    })}
                </div>
            </Wrapper>
        </Section>
    )
}