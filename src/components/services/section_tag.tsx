export function Tag({ label }: { label: string }) {
    return (
        <span className="text-[12px] px-2 py-0.5 rounded border border-zinc-700/60 bg-zinc-950 text-zinc-200">
            {label}
        </span>
    )
}