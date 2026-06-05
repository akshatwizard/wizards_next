import { SectorStatsBannerType } from "@/types/sector.types";
import { Section, Wrapper } from "../ui/sections";
import { FadeUp } from "../ui/motion_components";

export default function SectorStatsBanner({ data }: { data: SectorStatsBannerType }) {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0}>
                    <div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 rounded-2xl overflow-hidden"
                        style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                        {data.stats.map((s, i) => (
                            <div key={i} className="relative bg-[#0f0f11] px-6 py-8 text-center group hover:bg-[#131315] transition-colors duration-200">
                                {/* Amber top accent on hover */}
                                <div className="absolute top-0 inset-x-0 h-px bg-amber-600/0 group-hover:bg-amber-600/40 transition-colors duration-300" />
                                <p className="font-syne text-3xl lg:text-4xl font-extrabold text-amber-500 leading-none mb-1">
                                    {s.value}
                                </p>
                                <p className="text-[12px] font-medium text-zinc-300 mt-1">{s.label}</p>
                                {s.sublabel && (
                                    <p className="text-[10px] text-zinc-600 mt-0.5">{s.sublabel}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}