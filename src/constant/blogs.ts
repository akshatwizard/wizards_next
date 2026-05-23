export const FEATURED: FeaturedPost = {
    category: 'Social Media',
    author: { initials: 'AK', name: 'Aditya Kumar' },
    date: '12 May 2025',
    readTime: '6 min read',
    title: 'How to grow your Instagram from 0 to 10K followers in 90 days',
    excerpt:
        'The exact content strategy, posting frequency and reel format we used to scale 3 client accounts to 10K+ organically — no paid ads, no gimmicks.',
    tags: ['Instagram', 'Organic Growth', 'Reels'],
    href: '/blog/grow-instagram-10k',
}

export const SMALL_POSTS: SmallPost[] = [
    {
        category: 'Ads',
        date: '3 May 2025',
        readTime: '4 min',
        title: "Meta Ads in 2025: what's actually working right now",
        tags: ['Meta Ads', 'Performance'],
        href: '/blog/meta-ads-2025',
    },
    {
        category: 'Branding',
        date: '24 Apr 2025',
        readTime: '5 min',
        title: "Why your logo isn't your brand — and what actually is",
        tags: ['Branding', 'Identity'],
        href: '/blog/logo-vs-brand',
    },
    {
        category: 'E-Commerce',
        date: '15 Apr 2025',
        readTime: '7 min',
        title: 'Shopify store checklist: 12 things before you go live',
        tags: ['Shopify', 'E-Commerce'],
        href: '/blog/shopify-checklist',
    },
]


export type Tag = string

export type FeaturedPost = {
    category: string
    author: { initials: string; name: string }
    date: string
    readTime: string
    title: string
    excerpt: string
    tags: Tag[]
    href: string
}

export type SmallPost = {
    category: string
    date: string
    readTime: string
    title: string
    tags: Tag[]
    href: string
}
