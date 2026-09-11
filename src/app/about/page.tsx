import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, ExternalLink, Zap, Users, Target, ShieldCheck } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";

export const metadata: Metadata = {
    title: "About Us | Wizards Next",
    description: "Wizards Next LLP — a joint venture between JR Digital Marketing Services and Arushi Inforbit Solutions, offering integrated digital marketing and web development from Varanasi.",
};

export default function AboutPage() {
    return (
        <main>
            {/* Hero */}
            <Section className="relative overflow-hidden">
                <div
                    aria-hidden
                    className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-175 h-87.5"
                    style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.1) 0%, transparent 65%)" }}
                />
                <Wrapper className="pb-0!">
                    <FadeUp delay={0}>
                        <div className="flex items-center gap-1.5 text-[11px] text-zinc-300 mb-6">
                            <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-zinc-100">About</span>
                        </div>
                        <SectionBadge label="About Us" />
                    </FadeUp>
                    <FadeUp delay={0.08}>
                        <h1 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium max-w-2xl">
                            The Alchemy of <span className="text-amber-600 font-sora!">Wizards</span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.15}>
                        <p className="text-zinc-200 text-sm font-light max-w-lg">
                            A growth-oriented, progressive organisation working in digital marketing and web development since June 2023 — built as a joint venture, not a startup from scratch.
                        </p>
                    </FadeUp>
                </Wrapper>
            </Section>

            {/* Our Story */}
            <Section>
                <Wrapper className="lg:py-10 md:py-8 py-6">
                    <div className="max-w-2xl flex flex-col gap-4 text-zinc-100 text-[14px] leading-relaxed font-light">
                        <p>
                            Wizards Next LLP emerged as a joint venture between <strong className="text-zinc-300 font-medium">JR Digital Marketing Services</strong> and <strong className="text-zinc-300 font-medium">Arushi Inforbit Solutions</strong> in June 2023 — bringing together a digital marketing practice and a web development practice that had been solving half the same problem separately for years.
                        </p>
                        <p>
                            By combining the capabilities of both companies, Wizards Next is positioned to offer complete, integrated digital services and innovative design to clients across India, with a particular focus on Varanasi — where the founding team has built its reputation over 24+ years of combined, hands-on experience.
                        </p>
                        <p>
                            The strategic emphasis has always been the same: deliver superior service and measurable performance, not just activity. That&apos;s the standard the venture was built to hold itself to from day one.
                        </p>
                    </div>
                </Wrapper>
            </Section>

            {/* Two Foundations */}
            <Section>
                <Wrapper className="lg:py-10 md:py-8 py-6">
                    <FadeUp>
                        <p className="text-zinc-100 font-semibold text-[13px] tracking-wide mb-1">Built on two foundations</p>
                        <p className="text-zinc-300 text-[12.5px] font-light mb-6 max-w-lg">
                            Each side of the joint venture brought a distinct, established practice — not two teams learning on the job together.
                        </p>
                    </FadeUp>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <FadeUp delay={0.05} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center mb-4">
                                <Target size={18} className="text-amber-600" strokeWidth={1.6} />
                            </div>
                            <p className="text-zinc-200 font-medium text-[15px] mb-2">JR Digital Marketing Services</p>
                            <p className="text-zinc-200 text-[13px] font-light leading-relaxed mb-4">
                                The marketing engine behind the venture — SEO, paid search, social media marketing, content marketing, and email marketing, brought in as an established practice rather than built from zero.
                            </p>
                            <a
                                href="https://www.jrdigitalservices.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-amber-600 text-[12px] hover:underline"
                            >
                                jrdigitalservices.com <ExternalLink size={11} />
                            </a>
                        </FadeUp>
                        <FadeUp delay={0.1} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                            <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center mb-4">
                                <Zap size={18} className="text-amber-600" strokeWidth={1.6} />
                            </div>
                            <p className="text-zinc-200 font-medium text-[15px] mb-2">Arushi Inforbit Solutions</p>
                            <p className="text-zinc-200 text-[13px] font-light leading-relaxed mb-4">
                                The technology side — website development, e-commerce platforms, and building responsive, well-engineered sites, which is why development at Wizards Next has never been an afterthought bolted onto marketing.
                            </p>
                            <a
                                href="https://www.inforbit.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-amber-600 text-[12px] hover:underline"
                            >
                                inforbit.in <ExternalLink size={11} />
                            </a>
                        </FadeUp>
                    </div>
                </Wrapper>
            </Section>

            {/* Our Approach */}
            <Section>
                <Wrapper className="lg:py-10 md:py-8 py-6">
                    <FadeUp>
                        <p className="text-zinc-100 font-semibold text-[13px] tracking-wide mb-6">Our approach</p>
                    </FadeUp>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <FadeUp delay={0.05} className="flex items-start gap-4">
                            <div className="shrink-0 size-10 rounded-xl bg-amber-600/15 border border-amber-600/25 flex items-center justify-center">
                                <Zap size={18} className="text-amber-500" strokeWidth={1.8} />
                            </div>
                            <div>
                                <p className="font-medium text-[15px] text-zinc-200 mb-1">Superior Performance</p>
                                <p className="text-[13px] text-zinc-200 leading-relaxed">Measurable goals focused on market leadership and real ROI — not activity for its own sake.</p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.1} className="flex items-start gap-4">
                            <div className="shrink-0 size-10 rounded-xl bg-amber-600/15 border border-amber-600/25 flex items-center justify-center">
                                <Users size={18} className="text-amber-500" strokeWidth={1.8} />
                            </div>
                            <div>
                                <p className="font-medium text-[15px] text-zinc-200 mb-1">Collaborative Power</p>
                                <p className="text-[13px] text-zinc-200 leading-relaxed">A joint venture legacy built on trust and transparency between two established practices, not one team pretending to cover both.</p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.15} className="flex items-start gap-4">
                            <div className="shrink-0 size-10 rounded-xl bg-amber-600/15 border border-amber-600/25 flex items-center justify-center">
                                <ShieldCheck size={18} className="text-amber-500" strokeWidth={1.8} />
                            </div>
                            <div>
                                <p className="font-medium text-[15px] text-zinc-200 mb-1">One Point of Contact</p>
                                <p className="text-[13px] text-zinc-200 leading-relaxed">Branding, website, and marketing under one roof — no coordinating between separate vendors who don&apos;t talk to each other.</p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2} className="flex items-start gap-4">
                            <div className="shrink-0 size-10 rounded-xl bg-amber-600/15 border border-amber-600/25 flex items-center justify-center">
                                <Target size={18} className="text-amber-500" strokeWidth={1.8} />
                            </div>
                            <div>
                                <p className="font-medium text-[15px] text-zinc-200 mb-1">Varanasi-Rooted, Pan-India Reach</p>
                                <p className="text-[13px] text-zinc-200 leading-relaxed">Based in Varanasi with deep knowledge of this market, while serving clients across India remotely.</p>
                            </div>
                        </FadeUp>
                    </div>
                </Wrapper>
            </Section>

            {/* Team section intentionally omitted here — being handled separately. */}

            {/* CTA */}
            <Section>
                <Wrapper className="lg:py-12 md:py-10 py-8">
                    <FadeUp className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
                        <p className="text-zinc-200 text-lg font-medium mb-2">Want to work with us?</p>
                        <p className="text-zinc-200 text-[13px] font-light mb-5 max-w-md mx-auto">
                            Tell us about your business and what you&apos;re trying to achieve.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-black text-[12.5px] font-semibold px-5 py-2.5 rounded-lg transition-colors"
                        >
                            Get in touch <ArrowRight size={13} />
                        </Link>
                    </FadeUp>
                </Wrapper>
            </Section>
        </main>
    );
}
