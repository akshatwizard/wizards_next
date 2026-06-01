import { Globe } from "lucide-react";
import { FadeUp } from "../ui/motion_components";

export function ServiceHeroPlaceholder() {
    return (
        <FadeUp delay={0.15} className="relative">
            {/* Main placeholder */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                {/* Grid texture inside */}
                <div aria-hidden className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 opacity-20">
                        <Globe size={48} className="text-amber-600" strokeWidth={1} />
                        <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Project screenshot</span>
                    </div>
                </div>
                {/* Amber corner pip */}
                <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-amber-600/60" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl">
                <p className="font-syne text-xl font-black text-amber-500 leading-none">2.1s</p>
                <p className="text-[9px] text-zinc-500 mt-0.5 uppercase tracking-widest">Avg load time</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 shadow-xl">
                <p className="font-syne text-xl font-black text-amber-500 leading-none">120+</p>
                <p className="text-[9px] text-zinc-500 mt-0.5 uppercase tracking-widest">Sites launched</p>
            </div>
        </FadeUp>
    )
}