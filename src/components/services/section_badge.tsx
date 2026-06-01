export function SectionBadge({ label }: { label: string }) {
    return (
        <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-3.5 py-1 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-amber-500 text-[10px] font-medium tracking-widest uppercase">
                {label}
            </span>
        </div>
    )
}
