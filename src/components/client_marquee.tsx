"use client";

import Marquee from "react-fast-marquee";
import { FadeUp } from "./ui/motion_components";
import { clients } from "@/constant/clients";
import { ArrowUpRight } from "lucide-react";
import { Section, Wrapper } from "./ui/sections";
import { LinkPreview } from "./ui/link-preview";

function getInitials(name: string) {
    return name
        .replace(/^Dr\.\s*/i, "")
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();
}

const marqueeItems = clients.map((c) => ({
    initials: getInitials(c.name),
    name: c.name,
    href: `/our-works/${c.slug}`,
}));
const midpoint = Math.ceil(marqueeItems.length / 2);
const row1 = marqueeItems.slice(0, midpoint);
const row2 = marqueeItems.slice(midpoint);

type MarqueeClient = (typeof marqueeItems)[0];

function MarqueeItem({ initials, name, href }: MarqueeClient) {
    return (
        <LinkPreview url={href}>
            <div
                className="group/item inline-flex items-center gap-3 mx-2 p-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-800/70  hover:border-amber-600/30 transition-all duration-300 cursor-pointer no-underline shrink-0"
            >
                {/* Avatar */}
                <div
                    className="font-sora! w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-[11px] font-bold tracking-wide  bg-zinc-800 border border-zinc-700  text-amber-600  group-hover/item:bg-amber-600/15  group-hover/item:border-amber-600/40  group-hover/item:text-amber-500 transition-all duration-300"
                >
                    {initials}
                </div>

                {/* Name */}
                <span className="text-[13px] font-medium whitespace-nowrap text-zinc-100 group-hover/item:text-zinc-100 transition-colors duration-300 "
                >
                    {name}
                </span>

                {/* Arrow — appears on hover */}
                <ArrowUpRight size={12} className="text-amber-600 shrink-0 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
            </div>
        </LinkPreview>
    );
}

export default function ClientMarquee() {
    // A marquee needs multiple items to actually read as "scrolling" —
    // with only a few clients in the system right now, this section
    // simply doesn't render rather than looping one or two names.
    // Reappears on its own once the client list grows back.
    if (clients.length < 4) return null

    return (
        <Section className="overflow-hidden">

            <Wrapper className="overflow-hidden">
                {/* Header */}
                <div className="text-center">
                    <FadeUp className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/20 rounded-full px-4 py-1.5 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
                        <span className="text-amber-600 text-[10.5px] tracking-[2px] uppercase font-medium">
                            Our Clients
                        </span>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-100">
                            Trusted by <span className="font-sora! text-amber-600">{clients.length}+ brands</span> across India
                        </h2>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-sm mt-2 font-light">
                            From Varanasi to pan-India — brands that chose to grow with Wizards.
                        </p>
                    </FadeUp>
                </div>

                <div>
                    <FadeUp delay={0.2} className="relative">
                        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-zinc-950 to-transparent" />
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-zinc-950 to-transparent" />
                        <Marquee pauseOnHover speed={40} gradient={false} className="overflow-visible!">
                            {row1.map((client, i) => (
                                <MarqueeItem key={i} {...client} />
                            ))}
                        </Marquee>
                    </FadeUp>

                    {/* Gap */}
                    <div className="h-3" />

                    <FadeUp delay={0.25} className="relative">
                        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-zinc-950 to-transparent" />
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-zinc-950 to-transparent" />
                        <Marquee pauseOnHover direction="right" speed={30} gradient={false} className="overflow-visible!">
                            {row2.map((client, i) => (
                                <MarqueeItem key={i} {...client} />
                            ))}
                        </Marquee>
                    </FadeUp>

                </div>
            </Wrapper>
        </Section>
    );
}