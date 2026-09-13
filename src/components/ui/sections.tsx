import { cn } from "@/lib/utils"
import { ComponentProps, ReactNode } from "react"

type SectionProps = ComponentProps<"section"> & {
    children: ReactNode
    className?: string
    tone?: "default" | "raised"
}

type WrapperProps = ComponentProps<"div"> & {
    children: ReactNode
    className?: string
}

export function Section({ children, className, tone = "default", ...rest }: SectionProps) {
    return (
        <section
            className={cn(
                "w-full lg:px-8 md:px-6 px-3",
                tone === "raised" && "bg-zinc-900/40 border-y border-zinc-800/60",
                className
            )}
            {...rest}
        >
            {children}
        </section>
    )
}

export function Wrapper({ children, className, ...rest }: WrapperProps) {
    return (
        <div className={cn("w-full max-w-7xl mx-auto lg:py-20 md:py-16 py-14 flex flex-col lg:gap-16 md:gap-14 gap-12", className)}
            {...rest}>
            {children}
        </div>
    )
}