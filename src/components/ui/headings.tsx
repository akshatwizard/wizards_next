import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

type PageHeadingProps = ComponentProps<"h1"> & {
    children: ReactNode
    className?: string
}

export function PageHeading({ children, className, ...rest }: PageHeadingProps) {
    return (
        <h1
            className={cn("text-4xl md:text-5xl lg:text-6xl leading-[1.08]", className)}
            {...rest}
        >
            {children}
        </h1>
    )
}