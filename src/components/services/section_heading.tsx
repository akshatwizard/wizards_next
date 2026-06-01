export function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium">
            {children}
        </h2>
    )
}
