import { Section, Wrapper } from './ui/sections'
import { FadeUp } from './ui/motion_components'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { ALL_SERVICES, ServiceMeta } from '@/constant/service_meta'

function ServiceCard({ service }: { service: ServiceMeta }) {
    const { name, desc, slug } = service
    return (
        <Link
            href={`/services/${slug}`}
            className="group h-full relative bg-zinc-900 lg:p-6 md:p-5 p-4 flex flex-col gap-3 transition-colors duration-200 hover:bg-zinc-800/60"
        >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-zinc-700/50 group-hover:bg-amber-600 transition-colors duration-300" />

            {/* Icon + heading side by side — no more stacking them with empty space underneath */}
            <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-amber-600/10 blur-xl rounded-full scale-90 group-hover:bg-amber-600/15 transition-colors duration-300" />
                    <Image
                        src={`/images/services/icons/${slug}-icon.webp`}
                        alt={`${name} icon`}
                        width={256}
                        height={256}
                        className="relative w-full h-full object-contain"
                    />
                </div>
                <div className="flex-1 flex items-start justify-between gap-2 min-w-0">
                    <h3 className="text-[17px] text-zinc-200 leading-snug tracking-tight font-semibold">
                        {name}
                    </h3>
                    <ArrowUpRight size={16} className="text-zinc-300 group-hover:text-amber-600 shrink-0 mt-1 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                </div>
            </div>

            <p className="text-[13px] text-zinc-200 leading-relaxed font-light">
                {desc}
            </p>
        </Link>
    )
}

export default function Services() {
    return (
        <Section className="relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-140 h-45 bg-amber-600/5 blur-3xl rounded-full" />
            <Wrapper>
                <FadeUp delay={0.1} className="relative mb-8">
                    <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-4 py-1.5 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
                        <span className="text-amber-600 text-[12px] tracking-widest uppercase">
                            What We Do
                        </span>
                    </div>

                    <h2 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
                        Everything your brand needs{" "}<br />
                        <span className="text-amber-600 font-sora!">to grow online</span>
                    </h2>

                    <p className="text-zinc-200 text-[13.5px] leading-relaxed font-light max-w-xl">
                        From building your identity to running high-converting ad campaigns —
                        we cover the full digital spectrum so you don&apos;t have to juggle
                        multiple agencies.
                    </p>
                </FadeUp>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-px border border-zinc-800 rounded-2xl overflow-hidden">
                    {ALL_SERVICES.map((svc, idx) => (
                        <FadeUp delay={Math.min(idx * 0.04, 0.4)} key={svc.slug} className="h-full">
                            <ServiceCard service={svc} />
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.2} className="flex items-center justify-between pt-4">
                    <span className="text-zinc-300 text-xs">
                        {ALL_SERVICES.length} services · Varanasi &amp; Pan-India
                    </span>
                    <Link
                        href="/services"
                        className="bg-amber-600 hover:bg-amber-700 active:scale-[0.98] transition-all duration-200 text-black text-[12.5px] font-medium px-5 py-2.5 rounded-lg"
                    >
                        View all services →
                    </Link>
                </FadeUp>
            </Wrapper>
        </Section>
    )
}
