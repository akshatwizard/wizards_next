"use client";

import Image from "next/image";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";

const PHOTOS = [
    {
        src: "/images/office/wizards-next-llp-office-varanasi-team.webp",
        alt: "Wizards Next LLP digital marketing team at work in our Varanasi office",
    },
    {
        src: "/images/office/wizards-next-llp-office-varanasi-workspace.webp",
        alt: "Wizards Next LLP team working at monitors in our Varanasi office",
    },
    {
        src: "/images/office/wizards-next-llp-office-varanasi-studio.webp",
        alt: "Video shoot studio with softbox lights at the Wizards Next LLP office in Varanasi",
    },
    {
        src: "/images/office/wizards-next-llp-office-varanasi-meeting-room.webp",
        alt: "Client meeting corner at the Wizards Next LLP office in Varanasi",
    },
] as const;

export default function OfficePhotos() {
    return (
        <Section>
            <Wrapper className="lg:py-10 md:py-8 py-6">
                <FadeUp>
                    <SectionBadge label="Our Office" />
                    <h2 className="tracking-tight text-zinc-200 leading-tight mt-3 mb-2 lg:text-3xl text-2xl font-medium">
                        Our office in <span className="text-amber-600 font-sora">Varanasi</span>
                    </h2>
                    <p className="text-zinc-200 text-sm font-light mb-6 max-w-xl">
                        D59/127 A-1-4, Nirala Nagar Lane No. 3, Shivpurwa, Varanasi – 221010
                    </p>
                </FadeUp>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {PHOTOS.map((photo, i) => (
                        <FadeUp
                            key={photo.src}
                            delay={0.05 * i}
                            className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 aspect-3/4"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                width={900}
                                height={1200}
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="w-full h-full object-cover"
                            />
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    );
}
