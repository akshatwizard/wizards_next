import React from 'react'
import { Section, Wrapper } from '../ui/sections'
import { FadeUp } from '../ui/motion_components'
import { SectionBadge } from './section_badge'
import { SectionHeading } from './section_heading'
import { ServiceTeamType } from '@/types/service.types'
import { Clock } from 'lucide-react'
import { Tag } from './section_tag'

export default function ServiceTeam({ data }: { data: ServiceTeamType }) {
    return (
        <Section>
            <Wrapper>
                <FadeUp delay={0} className="mb-10">
                    <SectionBadge label="The team" />
                    <SectionHeading>
                        People behind{' '}
                        <span className="text-amber-500">your project</span>
                    </SectionHeading>
                    <p className="text-zinc-200 text-[13.5px] font-light leading-relaxed mt-2 max-w-lg">
                        You won't be passed to a junior. These are the actual people who design,
                        code, and deliver your website.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.team_list.map((member, i) => (
                        <FadeUp key={member.name} delay={i * 0.08}>
                            <div className="group flex flex-col gap-4 p-5 rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-200">
                                {/* Avatar + name */}
                                <div className="flex items-center gap-3">
                                    {/* Avatar placeholder */}
                                    <div className="size-10 rounded-xl bg-amber-600/15 border border-amber-600/25 flex items-center justify-center text-[12px] font-bold text-amber-600 shrink-0">
                                        {member.initials}
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-semibold text-zinc-200 leading-snug">{member.name}</p>
                                        <p className="text-[12px] text-zinc-200">{member.role}</p>
                                    </div>
                                </div>

                                {/* Experience badge */}
                                <div className="flex items-center gap-1.5">
                                    <Clock size={11} className="text-amber-600" />
                                    <span className="text-[12px] text-zinc-200">{member.exp}</span>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
                                    {member.skills.map(s => <Tag key={s} label={s} />)}
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}
