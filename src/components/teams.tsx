"use client";

import { team } from "@/constant/team";
import { Section, Wrapper } from "./ui/sections";
import { FadeUp } from "./ui/motion_components";

export default function Team() {
    return (
        <Section>
            <Wrapper>
                <div>
                    <FadeUp className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-4 py-1.5 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        <span className="text-amber-600 text-[10px] tracking-widest uppercase">
                            The Team
                        </span>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <h2 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
                            Meet the <span className="text-amber-600 font-sora!">wizards</span> behind the magic
                        </h2>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-sm font-light max-w-md">
                            A tight-knit crew of strategists, designers, developers and storytellers — obsessed with growth.
                        </p>
                    </FadeUp>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-px bg-zinc-800/10 rounded-2xl overflow-hidden">
                    {team.map(({ initials, name, role, bio, socials }, index) => (
                        <FadeUp
                            delay={index * 0.13}
                            key={name}
                            className="group bg-zinc-900 hover:bg-zinc-900/70 transition-colors duration-200 p-6 flex flex-col gap-3 cursor-default"
                        >
                            {/* Avatar */}
                            <div className="w-13 h-13 rounded-xl flex items-center justify-center text-base font-bold text-amber-600 bg-amber-600/10 border border-amber-600/20 group-hover:bg-amber-600/20 group-hover:border-amber-600/45 transition-all duration-200 font-mono">
                                {initials}
                            </div>

                            {/* Name + role */}
                            <div>
                                <p className="font-sora! text-zinc-200 font-medium tracking-tight">{name}</p>
                                <p className="text-amber-600 text-[10px] mt-0.5">{role}</p>
                            </div>

                            {/* Bio */}
                            <p className="text-zinc-200 text-xs leading-relaxed font-light flex-1">{bio}</p>

                            {/* Text-label social buttons */}
                            <div className="flex gap-2 mt-auto pt-1">
                                {socials.map(({ label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 hover:bg-amber-600/12 hover:border-amber-600/35 hover:text-amber-600 flex items-center justify-center text-[11px] font-bold text-zinc-200 transition-all duration-200"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    );
}