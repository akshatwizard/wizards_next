// Client / portfolio profile types.
//
// Designed so this array can be lifted into a real database later with
// almost no changes to the page components — each Client here is already
// shaped like a single database row. See CLIENT-SUBMISSION-TEMPLATE.md
// for the intake format used to fill these in each week.

export type ClientScreenshot = {
    src: string          // path under /public/images/clients/[slug]/...
    caption?: string
}

export type ClientLink = {
    label: string         // e.g. "Website", "Instagram", "Google Business"
    url: string
}

export type Client = {
    slug: string           // URL slug — /our-works/[slug]
    name: string
    sectors?: string[]       // one or more sector slugs from src/constant/sectors; multiple means the client genuinely spans sectors (e.g. a local retailer that's also an e-commerce brand)
    heroImage?: string        // optional decorative/conceptual hero visual — NOT a screenshot of real work, just mood-setting art for the page (real proof lives in `screenshots`)
    tagline?: string          // one-line description for cards
    tags: string[]           // short display tags (shown on homepage/hub cards)
    services: string[]         // service slugs we've provided, e.g. ["seo-consultancy"]

    // The fuller narrative — left undefined until a real brief is provided.
    // The page renders a graceful placeholder when these are missing rather
    // than inventing content.
    overview?: string
    highlights?: string[]

    website?: string
    links?: ClientLink[]
    screenshots?: ClientScreenshot[]

    featured?: boolean        // show on the homepage "Our Work" strip
    colSpan?: 'col-span-2'      // homepage bento-grid display hints
    rowSpan?: 'row-span-2'
    imgHeight?: string
}
