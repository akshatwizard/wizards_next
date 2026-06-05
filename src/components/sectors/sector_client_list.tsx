import { SectorClientListType } from "@/types/sector.types";
import { SectionBadge } from "../services/section_badge";
import { SectionHeading } from "../services/section_heading";
import { FadeUp } from "../ui/motion_components";
import { Section, Wrapper } from "../ui/sections";

export default function SectorClientList({ data }: { data: SectorClientListType }) {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0} className="mb-8">
                    <SectionBadge label={data.badge ?? 'Our clients'} />
                    <SectionHeading>{data.heading}</SectionHeading>
                </FadeUp>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {data.items.map((c, i) => (
                        <FadeUp key={c.name} delay={i * 0.05}>
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-200">
                                <div className="size-10 rounded-xl bg-amber-600/15 border border-amber-600/25 flex items-center justify-center text-[11px] font-bold text-amber-600 shrink-0">
                                    {c.initials}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[12.5px] font-semibold text-zinc-200 leading-snug truncate">{c.name}</p>
                                    <p className="text-[10.5px] text-zinc-500">{c.type}</p>
                                    {c.location && (
                                        <p className="text-[10px] text-zinc-700">{c.location}</p>
                                    )}
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}