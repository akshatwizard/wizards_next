import { FadeUp } from './ui/motion_components'
import { Section, Wrapper } from './ui/sections'
import { clients } from '@/constant/clients'
import { ALL_SERVICES } from '@/constant/service_meta'

// "Happy Clients" and "Services Under One Roof" are derived from the real
// data arrays rather than hardcoded, so this strip never goes stale as the
// client roster grows toward 50 or a new service is added.
const data = [
    { num: String(clients.length), suffix: '+', tag: 'Happy Clients' },
    { num: '200', suffix: '+', tag: 'Projects Delivered' },
    { num: '24', suffix: '+', tag: 'Years Experience' },
    { num: String(ALL_SERVICES.length), suffix: '+', tag: 'Services Under One Roof' },
]

export default function NumberStrip() {
    return (
        <Section className="border-y border-white/10 bg-zinc-800/10">
            <Wrapper className="py-0!">
                <div className="grid grid-cols-2 divide-y divide-white/5 divide-x lg:grid-cols-4">
                    {data.map((item, index) => (
                        <FadeUp
                            key={item.tag}
                            delay={index * 0.1}
                            className="group flex flex-col gap-1.5 px-8 py-9"
                        >
                            <span className="mb-0.5 block h-0.5 w-5 rounded-full bg-amber-600/60" />

                            {/* number */}
                            <h2 className="lg:text-6xl md:text-5xl text-3xl leading-none tracking-tight text-zinc-200">
                                {item.num}
                                <span className="text-amber-600">{item.suffix}</span>
                            </h2>

                            {/* label */}
                            <p className="text-[12px] font-normal uppercase tracking-widest text-zinc-200">
                                {item.tag}
                            </p>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}