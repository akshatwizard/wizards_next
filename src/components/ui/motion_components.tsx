'use client';

import { HTMLMotionProps, motion, Variants } from "motion/react"
import Link from "next/link";
import { ReactNode } from "react";


export const Div = motion.create("div");
export const Span = motion.create("span");
export const Anchor = motion.create(Link);

type Props = HTMLMotionProps<'div'> & {
    children: React.ReactNode
    className?: string
    delay?: number
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay,
        },
    }),
}

export const FadeUp = ({ children, className, delay = 0, ...rest }: Props) => {
    return (
        <Div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: true,
                amount: 0.2,
                margin:"-20px"
            }}
            custom={delay}
            className={className}
            {...rest}
        >
            {children}
        </Div>
    )
}
