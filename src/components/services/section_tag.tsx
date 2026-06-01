export function Tag({ label }: { label: string }) {
    return (
        <span className="text-[10px] px-2 py-0.5 rounded border border-zinc-700/60 bg-zinc-950 text-zinc-500">
            {label}
        </span>
    )
}