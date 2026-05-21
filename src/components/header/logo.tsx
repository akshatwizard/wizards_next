"use client";
import { motion, useAnimation } from "motion/react";
import { Fragment, useEffect, useRef } from "react";

const BOLT_PATH = "M30 2 L8 34 L20 34 L14 62 L36 30 L24 30 Z";

export function BoltLogo({ scrolled }: { scrolled: boolean | null }) {
    const strokeRef = useRef<SVGPathElement>(null);
    const fillCtrl = useAnimation();
    const wiCtrl = useAnimation();
    const ardsCtrl = useAnimation();

    useEffect(() => {
        const el = strokeRef.current;
        if (!el) return;

        const len = el.getTotalLength();

        el.style.strokeDasharray = `${len}`;
        el.style.strokeDashoffset = `${len}`;
        el.style.transition = "none";

        void el.getBoundingClientRect();

        el.style.transition = "stroke-dashoffset 0.65s cubic-bezier(0.4,0,0.2,1)";
        el.style.strokeDashoffset = "0";

        const onDrawDone = async () => {
            el.removeEventListener("transitionend", onDrawDone);

            // Fill floods in via motion
            await fillCtrl.start({
                fillOpacity: 1,
                transition: { duration: 0.25, ease: "easeOut" },
            });

            // Text springs in with stagger
            wiCtrl.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0.38, ease: [0.34, 1.56, 0.64, 1] },
            });
            await ardsCtrl.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0.38, ease: [0.34, 1.56, 0.64, 1], delay: 0.08 },
            });
        };

        el.addEventListener("transitionend", onDrawDone);

        return () => el.removeEventListener("transitionend", onDrawDone);
    }, []);

    const textSize = scrolled ? "text-3xl" : "text-4xl";
    const svgSize = scrolled ? { w: 20, h: 40 } : { w: 30, h: 50 };

    return (
        <div className="flex items-center">

            <motion.span
                initial={{ opacity: 0, x: -14 }}
                animate={wiCtrl}
                className={`font-sora uppercase font-bold text-white ${textSize}`}
            >
                WI
            </motion.span>

            <svg
                width={svgSize.w}
                height={svgSize.h}
                viewBox="0 0 40 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 mx-0.5 rotate-10"
            >
                <defs>
                    <linearGradient id="bolt-gradient" x1="36" y1="2" x2="14" y2="62" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FEE800" />
                        <stop offset="50%" stopColor="#FD9E17" />
                        <stop offset="100%" stopColor="#FD7303" />
                    </linearGradient>
                </defs>

                {/* Stroke draw — driven by ref + CSS transition */}
                <path
                    ref={strokeRef}
                    d={BOLT_PATH}
                    stroke="#FD9E17"
                    strokeWidth="2.5"
                    strokeLinejoin="miter"
                    strokeLinecap="square"
                    fill="none"
                />

                {/* Fill layer — driven by motion after stroke completes */}
                <motion.path
                    d={BOLT_PATH}
                    stroke="none"
                    fill="url(#bolt-gradient)"
                    initial={{ fillOpacity: 0 }}
                    animate={fillCtrl}
                />
            </svg>

            <motion.span
                initial={{ opacity: 0, x: 14 }}
                animate={ardsCtrl}
                className={`font-sora uppercase font-bold text-white ${textSize}`}
            >
                ARDS
            </motion.span>
        </div>
    );
}