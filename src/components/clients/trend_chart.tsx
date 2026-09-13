import { ClientTrendChart } from "@/types/client.types"

export default function TrendChart({ chart }: { chart: ClientTrendChart }) {
    const { title, note, unit = "", data } = chart
    if (!data || data.length < 2) return null

    const width = 700
    const height = 220
    const padding = { top: 16, right: 12, bottom: 24, left: 12 }
    const plotW = width - padding.left - padding.right
    const plotH = height - padding.top - padding.bottom

    const values = data.map((d) => d.value)
    const max = Math.max(...values)
    const min = Math.min(...values)
    const range = max - min || 1

    // Plotted so a higher position on the chart always reads as "better" —
    // for a metric where lower is better (like search ranking position),
    // the higher value maps toward the bottom, not the top.
    const points = data.map((d, i) => {
        const x = padding.left + (data.length === 1 ? 0 : (i / (data.length - 1)) * plotW)
        const y = padding.top + ((d.value - min) / range) * plotH
        return { x, y, ...d }
    })

    const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ")
    const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(1)} ${(padding.top + plotH).toFixed(1)} L ${points[0].x.toFixed(1)} ${(padding.top + plotH).toFixed(1)} Z`

    // Show at most ~6 x-axis labels so they don't crowd on a long series
    const labelStep = Math.max(1, Math.ceil(data.length / 6))

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-200 text-[14px] font-medium mb-1">{title}</p>
            {note && <p className="text-zinc-300 text-[12px] mb-4">{note}</p>}
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#d97706" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#d97706" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#trendFill)" />
                <path d={linePath} fill="none" stroke="#d97706" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                {points.map((p, i) => (
                    <circle key={p.label + i} cx={p.x} cy={p.y} r={i === points.length - 1 ? 3.5 : 2} fill="#d97706" />
                ))}
                {points.map((p, i) => {
                    if (i % labelStep !== 0 && i !== points.length - 1) return null
                    const anchor = i === 0 ? "start" : i === points.length - 1 ? "end" : "middle"
                    return (
                        <text key={"lbl-" + p.label + i} x={p.x} y={height - 6} fontSize={9.5} fill="#d4d4d8" textAnchor={anchor}>
                            {p.label}
                        </text>
                    )
                })}
            </svg>
            <p className="text-zinc-300 text-[12px] mt-2">
                {data[0].label}: {data[0].value}{unit} → {data[data.length - 1].label}: {data[data.length - 1].value}{unit}
            </p>
        </div>
    )
}
