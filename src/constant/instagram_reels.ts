// Instagram reels shown on the homepage (src/components/instagram_reels.tsx).
// Edit this list to change the slider: paste the public reel URL and a short caption.
// Only use real reel URLs from https://www.instagram.com/wizards.digital/ — newest first.
export type InstagramReel = { url: string; caption: string }

export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/wizards.digital/'
export const INSTAGRAM_HANDLE = '@wizards.digital'

export const INSTAGRAM_REELS: InstagramReel[] = [
    { url: 'https://www.instagram.com/reel/Delj1JLRlC8/', caption: 'NDC guidelines every dentist should know' },
]
