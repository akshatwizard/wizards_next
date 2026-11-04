// Server-side only (imported from the homepage server component); not used in client code.
import { INSTAGRAM_REELS, InstagramReel } from '@/constant/instagram_reels'

// Server-only: fetches the latest reels from the Instagram Graph API (6h ISR).
// Falls back to the static INSTAGRAM_REELS list on any problem. Never logs the token.
const MAX_REELS = 12
const MAX_CAPTION = 80

type IgMedia = { id: string; caption?: string; media_type?: string; permalink?: string; timestamp?: string }

export function cleanCaption(raw?: string): string {
    const first = (raw ?? '').split(/\r?\n/).find(l => l.trim()) ?? ''
    let s = first
        .replace(/[#@][\p{L}\p{N}_.]+/gu, '')
        .replace(/\s+/g, ' ')
        .trim()
    if (!/[\p{L}\p{N}]/u.test(s)) s = ''
    if (!s) return 'Watch on Instagram'
    if (s.length > MAX_CAPTION) {
        const cut = s.slice(0, MAX_CAPTION)
        const sp = cut.lastIndexOf(' ')
        s = (sp > 40 ? cut.slice(0, sp) : cut).replace(/[\s,.;:!?-]+$/, '') + '…'
    }
    return s
}

export async function getInstagramReels(): Promise<InstagramReel[]> {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN
    if (!token) return INSTAGRAM_REELS
    try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,permalink,timestamp&limit=50&access_token=${encodeURIComponent(token)}`
        const res = await fetch(url, { next: { revalidate: 21600 } })
        if (!res.ok) {
            console.warn(`[instagram] media fetch failed (HTTP ${res.status}); using static reels`)
            return INSTAGRAM_REELS
        }
        const json = (await res.json()) as { data?: IgMedia[] }
        const reels = (json.data ?? [])
            .filter(m => m.media_type === 'VIDEO' && m.permalink?.includes('/reel/'))
            .sort((a, b) => Date.parse(b.timestamp ?? '') - Date.parse(a.timestamp ?? ''))
            .slice(0, MAX_REELS)
            .map(m => ({ url: m.permalink as string, caption: cleanCaption(m.caption) }))
        return reels.length ? reels : INSTAGRAM_REELS
    } catch {
        console.warn('[instagram] media fetch error; using static reels')
        return INSTAGRAM_REELS
    }
}
