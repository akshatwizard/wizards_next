import { FadeUp } from './ui/motion_components'
import { Section, Wrapper } from './ui/sections'

const data = [
    { num: '500', suffix: '+', tag: 'Happy Clients' },
    { num: '200', suffix: '+', tag: 'Projects Delivered' },
    { num: '24', suffix: '+', tag: 'Years Experience' },
    { num: '250', suffix: '%', tag: 'Increase in Leads' },
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
                            <p className="text-[11px] font-normal uppercase tracking-widest text-zinc-200">
                                {item.tag}
                            </p>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}