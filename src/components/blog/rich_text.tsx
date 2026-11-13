import Link from 'next/link'
import React from 'react'

// Renders a blog text string with **bold** and [text](href) inline markup.
// Internal links (starting with /) use next/link; external links open in a new tab.
export default function RichText({ text }: { text: string }) {
    const parts: React.ReactNode[] = []
    const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g
    let last = 0
    let m: RegExpExecArray | null
    let i = 0
    while ((m = re.exec(text))) {
        if (m.index > last) parts.push(text.slice(last, m.index))
        if (m[1]) {
            parts.push(<strong key={i++} className="text-zinc-100 font-medium">{m[1]}</strong>)
        } else if (m[3].startsWith('/')) {
            parts.push(<Link key={i++} href={m[3]} className="text-amber-500 underline underline-offset-2 hover:text-amber-400">{m[2]}</Link>)
        } else {
            parts.push(<a key={i++} href={m[3]} target="_blank" rel="noopener" className="text-amber-500 underline underline-offset-2 hover:text-amber-400">{m[2]}</a>)
        }
        last = re.lastIndex
    }
    if (last < text.length) parts.push(text.slice(last))
    return <>{parts}</>
}

export function plainText(text: string): string {
    return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
}
