// Shared layout for the Wizards Connect (WhatsApp platform) legal pages under /wa/*.
// Same look as /privacy-policy and /terms-of-service.
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";

export const WA_BRAND = "Wizards Connect";
export const WA_LAST_UPDATED = "25 Nov 2026";
export const WA_OPERATOR_ADDRESS = "D 59/127 A-1-4, Lane No. 3, Nirala Nagar, Varanasi, Uttar Pradesh 221010, India";

export function LegalPage({ title, intro, children }: { title: string; intro?: React.ReactNode; children: React.ReactNode }) {
    return (
        <main>
            <Section>
                <Wrapper>
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[12px] text-zinc-300 mb-6">
                            <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-100">{title}</span>
                        </div>
                        <SectionBadge label={`${WA_BRAND} · Legal`} />
                        <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
                            {title}
                        </h1>
                        <p className="text-zinc-300 text-[12.5px] mb-10">Last updated: {WA_LAST_UPDATED}</p>
                    </FadeUp>

                    <div className="max-w-2xl flex flex-col gap-8 text-zinc-100 text-[14px] leading-relaxed font-light">
                        {intro ? <div>{intro}</div> : null}
                        {children}
                        <p className="text-zinc-300 text-[12.5px]">
                            Related:{" "}
                            <Link href="/wa/privacy" className="text-amber-600 hover:underline">Privacy Policy</Link>
                            {" · "}
                            <Link href="/wa/terms" className="text-amber-600 hover:underline">Terms of Service</Link>
                            {" · "}
                            <Link href="/wa/refund" className="text-amber-600 hover:underline">Refund &amp; Cancellation</Link>
                            {" · "}
                            <Link href="/wa/data-deletion" className="text-amber-600 hover:underline">Data Deletion</Link>
                        </p>
                    </div>
                </Wrapper>
            </Section>
        </main>
    );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h2 className="text-zinc-200 font-medium text-[16px] mb-2">{title}</h2>
            <div className="flex flex-col gap-3">{children}</div>
        </div>
    );
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
    return (
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
            {items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
    );
}

export const WA_GRIEVANCE_OFFICER = "Ravi Khetan";

export function Mail() {
    return <a href="mailto:admin@wizards.co.in" className="text-amber-600 hover:underline">admin@wizards.co.in</a>;
}
