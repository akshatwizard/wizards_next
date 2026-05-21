"use client"

import { NavMenu } from "@/constant/menu"
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, Variants } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Span } from "../ui/motion_components";

const menuVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -6,
        scale: 0.97,
        transformOrigin: "top center",
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.22,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.045,
            delayChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        y: -4,
        scale: 0.97,
        transition: {
            duration: 0.15,
            ease: "easeIn",
            staggerChildren: 0.025,
            staggerDirection: -1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -6 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        x: -4,
        transition: { duration: 0.12, ease: "easeIn" },
    },
};

export default function DesktopHeader({scrolled}:{scrolled:boolean | null}) {
    const currentPath = usePathname();
    const [hovered, setHovered] = useState<number | null>(null);

    const activePath = (pathname: string | null) => {
        if (!pathname) return false;
        return currentPath === pathname || currentPath.startsWith(`${pathname}/`);
    };

    return (
        <div className="hidden md:flex h-full items-center gap-0.5">
            {NavMenu.map((item, index) => {
                const isActive = activePath(item.path);
                const isHovered = hovered === index;
                const hasSubMenu = item.subMenu && item.subMenu.length > 0;

                return (
                    <div
                        className="relative h-full group"
                        key={item.name}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {/* Nav Item */}
                        {item.path ? (
                            <Link
                                href={item.path}
                                className={`${isActive ? "text-zinc-100" : "text-zinc-400 group-hover:text-zinc-100"} transition-colors duration-200 ease-linear px-1.5 h-full flex items-center`}
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <button
                                className={`${isActive ? "text-zinc-100" : "text-zinc-400 group-hover:text-zinc-100"} transition-colors duration-200 ease-linear px-1.5 h-full flex items-center gap-1 cursor-pointer`}
                            >
                                {item.name}
                                <motion.span
                                    animate={{ rotate: isHovered ? 180 : 0 }}
                                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex items-center"
                                >
                                    <ChevronDown size={14} />
                                </motion.span>
                            </button>
                        )}

                        {/* Active/Hovered indicator */}
                        <AnimatePresence mode="popLayout">
                            {(isActive || isHovered) && (
                                <Span
                                    layoutId="active-nav"
                                    className={`absolute inset-x-0 h-0.5 ${scrolled ? "bottom-1.5" : "bottom-3"} bg-linear-to-r from-transparent via-white to-transparent`}
                                    transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                                />
                            )}
                        </AnimatePresence>

                        {/* SubMenu */}
                        <AnimatePresence>
                            {hasSubMenu && isHovered && (
                                <motion.div
                                    variants={menuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    onMouseEnter={() => setHovered(index)}
                                    onMouseLeave={() => setHovered(null)}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                                >
                                    {/* Arrow notch */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-zinc-900 border-l border-t border-white/8 z-10" />

                                    {/* Panel */}
                                    <div className="relative min-w-70 rounded-xl border border-white/8 bg-zinc-900/90 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/40">
                                        {/* Top shimmer line */}
                                        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                                        <ul className="p-1.5 flex flex-col gap-0.5">
                                            {item.subMenu!.map((sub) => {
                                                const subActive = activePath(sub.path);
                                                return (
                                                    <motion.li key={sub.name} variants={itemVariants}>
                                                        <Link
                                                            href={sub.path ?? "#"}
                                                            className={`
                                                                group/sub relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150
                                                                ${subActive
                                                                    ? "bg-white/8 text-white"
                                                                    : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                                                                }
                                                            `}
                                                        >
                                                            {/* Active pill */}
                                                            {subActive && (
                                                                <span className="absolute left-1 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full bg-linear-to-b from-[#FEE800] via-[#FD9E17] to-[#FD7303]" />
                                                            )}

                                                            {/* Hover dot */}
                                                            <span className={`
                                                                w-1 h-1 rounded-full shrink-0 transition-colors duration-150
                                                                ${subActive ? "bg-[#FD9E17]" : "bg-zinc-600 group-hover/sub:bg-zinc-400"}
                                                            `} />

                                                            <span className="text-sm leading-none">{sub.name}</span>

                                                            {/* Arrow on hover */}
                                                            <motion.span
                                                                className="ml-auto text-zinc-600 group-hover/sub:text-zinc-400 transition-colors duration-150"
                                                                initial={{ opacity: 0, x: -4 }}
                                                                whileHover={{ opacity: 1, x: 0 }}
                                                            >
                                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </motion.span>
                                                        </Link>
                                                    </motion.li>
                                                );
                                            })}
                                        </ul>

                                        {/* Bottom shimmer */}
                                        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative px-3.5 py-2 ml-1 cursor-pointer group"
            >
                {/* Gradient border layer */}
                <span className="absolute inset-0 rounded-lg p-px bg-linear-to-r from-[#FEE800] via-[#FD9E17] to-[#FD7303] opacity-50 group-hover:opacity-90 transition-opacity duration-200" />
                {/* Dark fill punches out the center */}
                <span className="absolute inset-px rounded-[7px] bg-zinc-950" />
                {/* Gradient text */}
                <span className="relative text-sm font-medium bg-linear-to-r from-[#FEE800] via-[#FD9E17] to-[#FD7303] bg-clip-text text-transparent leading-none">
                    Get Started
                </span>
            </motion.button>
        </div>
    );
}