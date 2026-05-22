export type Project = {
    id: number
    name: string
    industry: string
    tags: string[]
    colSpan?: 'col-span-2'
    rowSpan?: 'row-span-2'
    imgHeight?: string
}


export const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'Sadbhavana Banaras',
        industry: 'Hospitality',
        tags: ['Social Media', 'Meta Ads', 'Branding'],
        colSpan: 'col-span-2',
        imgHeight: 'h-52',
    },
    {
        id: 2,
        name: 'Banarsi Saree',
        industry: 'E-Commerce',
        tags: ['Shopify', 'Google Ads', 'SEO'],
        rowSpan: 'row-span-2',
        imgHeight: 'h-full',
    },
    {
        id: 3,
        name: 'Career Launcher',
        industry: 'Education',
        tags: ['Instagram', 'Content'],
        imgHeight: 'h-44',
    },
    {
        id: 4,
        name: 'Dr. Ankita Chauhan',
        industry: 'Healthcare',
        tags: ['Personal Brand', 'Reels'],
        imgHeight: 'h-44',
    },
    {
        id: 5,
        name: 'Mega Furniture',
        industry: 'Retail',
        tags: ['Shopify', 'Web Dev', 'Ads'],
        imgHeight: 'h-44',
    },
    {
        id: 6,
        name: 'Swarnam Jewellers',
        industry: 'Retail',
        tags: ['Instagram', 'Branding'],
        imgHeight: 'h-44',
    },
    {
        id: 7,
        name: 'GD Sons',
        industry: 'Corporate',
        tags: ['Google Ads', 'Analytics', 'SEO'],
        imgHeight: 'h-44',
    },
]
