"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import Link from "next/link";
import { useState } from "react";
import { Span } from "../ui/motion_components";
import { BoltLogo } from "./logo";
import DesktopHeader from "./desktop.header";
import MobileMenu from "./mobile.header";



export default function Header() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState<boolean | null>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (current) => {
        if (current > 50) {
            setScrolled(true);
        } else {
            setScrolled(null);
        }
    });


    return (
        <>
            <motion.header
                key="Header"
                aria-label="Header"
                className={`sticky top-0 lg:mt-2 md:mt-1.5 mt-1 w-full z-40 lg:px-8 md:px-6 px-2 transition-all duration-300 ease-in-out ${scrolled ? "md:h-16 h-12 bg-black/1 backdrop-blur border-b border-white/5" : "md:h-18 h-16  bg-transparent border-b border-white/0 backdrop-blur-none"} `}
            >
                <nav className='relative w-full max-w-7xl mx-auto flex items-center justify-between h-full gap-5'>
                    <Link href="/" className="flex items-center select-none">
                        <BoltLogo scrolled={scrolled} />
                    </Link>

                    <DesktopHeader scrolled={scrolled} />

                    <button
                        onClick={() => setOpenMenu(true)}
                        className="flex md:hidden flex-col gap-1.5 p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        aria-label="Open menu"
                    >
                        <span className="w-5 h-px bg-current" />
                        <span className="w-3.5 h-px bg-current" />
                        <span className="w-5 h-px bg-current" />
                    </button>

                </nav>

            </motion.header>

            <MobileMenu open={openMenu} onClose={() => setOpenMenu(false)} />
        </>
    )
}
