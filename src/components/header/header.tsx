"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import Link from "next/link";
import { useState } from "react";
import { Span } from "../ui/motion_components";
import { BoltLogo } from "./logo";
import DesktopHeader from "./desktop.header";



export default function Header() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState<boolean | null>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (current) => {
        if (current > 80) {
            setScrolled(true);
        } else {
            setScrolled(null);
        }
    });


    return (
        <motion.header
            key="Header"
            aria-label="Header"
            className={`sticky top-0 lg:mt-2 md:mt-1.5 mt-1 w-full z-20 lg:px-8 md:px-6 px-2 transition-all duration-300 ease-in-out ${scrolled ? "md:h-14 h-12 bg-white/5 backdrop-blur border-b border-white/10" : "md:h-18 h-16  bg-transparent border-b border-white/0 backdrop-blur-none"} `}
        >
            <nav className='relative w-full max-w-7xl mx-auto flex items-center justify-between py-1 h-full gap-5'>
                <Link href="/" className="flex items-center select-none">
                    <BoltLogo scrolled={scrolled} />
                </Link>

                <DesktopHeader />
            </nav>

        </motion.header>
    )
}
