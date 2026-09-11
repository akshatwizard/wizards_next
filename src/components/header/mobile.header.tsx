"use client"

import { NavMenu } from "@/constant/menu"
import { MenuType } from "@/types/menu.types";
import { X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, Variants } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { BoltLogo } from "./logo";

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2, delay: 0.15 } },
};

const drawerVariants: Variants = {
    hidden: { x: "-100%" },
    visible: {
        x: 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        x: "-100%",
        transition: { duration: 0.28, ease: [0.65, 0, 0.35, 1] },
    },
};

const navListVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.055, delayChildren: 0.15 },
    },
    exit: {
        transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
};

const navItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        x: -12,
        transition: { duration: 0.15, ease: "easeIn" },
    },
};

const subMenuVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
        height: "auto",
        opacity: 1,
        transition: {
            height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.2, delay: 0.05 },
            staggerChildren: 0.04,
            delayChildren: 0.08,
        },
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: {
            height: { duration: 0.22, ease: [0.65, 0, 0.35, 1] },
            opacity: { duration: 0.15 },
        },
    },
};

const subItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        x: -6,
        transition: { duration: 0.1 },
    },
};


function MobileNavItem({ item, onClose }: { item: MenuType; onClose: () => void; }) {
    const currentPath = usePathname();
    const [subOpen, setSubOpen] = useState(false);
    const hasSubMenu = item.subMenu && item.subMenu.length > 0;

    const isActive = item.path
        ? currentPath === item.path || currentPath.startsWith(`${item.path}/`)
        : item.subMenu?.some(
            (s) =>
                currentPath === s.path ||
                currentPath.startsWith(`${s.path}/`)
        ) ?? false;

    return (
        <motion.div variants={navItemVariants}>
            {/* Row */}
            <div className="flex items-center justify-between">
                {item.path ? (
                    <Link
                        href={item.path}
                        onClick={onClose}
                        className={`flex-1 flex items-center gap-3 py-3.5 text-base font-medium transition-colors duration-150 ${isActive ? "text-white" : "text-zinc-100"
                            }`}
                    >
                        {isActive && (
                            <span className="w-0.5 h-5 rounded-full bg-linear-to-b from-[#FEE800] via-[#FD9E17] to-[#FD7303] shrink-0" />
                        )}
                        {item.name}
                    </Link>
                ) : (
                    <button
                        onClick={() => setSubOpen((p) => !p)}
                        className={`flex-1 flex items-center gap-3 py-3.5 text-base font-medium text-left transition-colors duration-150 cursor-pointer ${isActive ? "text-white" : "text-zinc-100"
                            }`}
                    >
                        {isActive && (
                            <span className="w-0.5 h-5 rounded-full bg-linear-to-b from-[#FEE800] via-[#FD9E17] to-[#FD7303] shrink-0" />
                        )}
                        {item.name}
                    </button>
                )}

                {hasSubMenu && (
                    <button
                        onClick={() => setSubOpen((p) => !p)}
                        className="p-2 text-zinc-200 hover:text-zinc-200 transition-colors duration-150 cursor-pointer"
                        aria-label={subOpen ? "Collapse" : "Expand"}
                    >
                        <motion.span
                            animate={{ rotate: subOpen ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center"
                        >
                            <ChevronDown size={16} />
                        </motion.span>
                    </button>
                )}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5" />

            {/* Sub menu */}
            <AnimatePresence initial={false}>
                {hasSubMenu && subOpen && (
                    <motion.div
                        variants={subMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                    >
                        <motion.ul className="pl-4 pt-1 pb-2 flex flex-col gap-0.5">
                            {item.subMenu!.map((sub) => {
                                const subActive =
                                    currentPath === sub.path ||
                                    currentPath.startsWith(`${sub.path}/`);
                                return (
                                    <motion.li
                                        key={sub.name}
                                        variants={subItemVariants}
                                    >
                                        <Link
                                            href={sub.path ?? "#"}
                                            onClick={onClose}
                                            className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150 ${subActive
                                                ? "bg-white/6 text-white"
                                                : "text-zinc-200 hover:bg-white/4 hover:text-zinc-200"
                                                }`}
                                        >
                                            {subActive && (
                                                <span className="absolute left-1 top-1/2 -translate-y-1/2 w-0.5 h-3.5 rounded-full bg-linear-to-b from-[#FEE800] to-[#FD7303]" />
                                            )}
                                            <span
                                                className={`w-1 h-1 rounded-full shrink-0 transition-colors duration-150 ${subActive
                                                    ? "bg-[#FD9E17]"
                                                    : "bg-zinc-600 group-hover:bg-zinc-400"
                                                    }`}
                                            />
                                            <span className="text-sm">{sub.name}</span>
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void; }) {

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    const pathname = usePathname();
    useEffect(() => { onClose(); }, [pathname]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="mobile-overlay"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        className="md:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        key="mobile-drawer"
                        variants={drawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden fixed inset-y-0 left-0 z-40 w-[80vw] max-w-[320px] flex flex-col bg-zinc-950 border-r border-white/8 shadow-2xl shadow-black/60"
                    >
                        {/* Top shimmer */}
                        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/6">
                            <BoltLogo scrolled={true} />

                            <button
                                onClick={onClose}
                                className="p-1.5 rounded-lg text-zinc-200 hover:text-zinc-200 hover:bg-white/6 transition-colors duration-150 cursor-pointer"
                                aria-label="Close menu"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Nav items */}
                        <motion.nav
                            variants={navListVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex-1 overflow-y-auto px-4 py-3"
                        >
                            <ul className="flex flex-col">
                                {NavMenu.map((item) => (
                                    <MobileNavItem
                                        key={item.name}
                                        item={item}
                                        onClose={onClose}
                                    />
                                ))}
                            </ul>
                        </motion.nav>

                        {/* Footer CTA */}
                        <div className="px-4 py-5 border-t border-white/6 flex flex-col gap-2.5">
                            <Link
                                href="/contact"
                                onClick={onClose}
                                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-linear-to-r from-[#FEE800] via-[#FD9E17] to-[#FD7303] text-black font-semibold text-sm"
                            >
                                Book a free call
                            </Link>
                        </div>

                        {/* Bottom shimmer */}
                        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}