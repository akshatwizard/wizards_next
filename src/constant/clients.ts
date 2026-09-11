import { Client } from "@/types/client.types";

// Reset on request — every client except Girdhar Das and Sons was removed.
// A complete new client list is being prepared with full details; as each
// one is shared, it gets added here as one object, following the same
// shape as gd-sons below.
//
// To add a new client: append one object here, optionally drop screenshot
// files in /public/images/clients/[slug]/, and redeploy. Nothing else needs
// to change — the hub page, individual page route, homepage strip, marquee,
// and each sector's client list all read from this array automatically.
// `sectors` should match one or more slugs from src/constant/sectors — the
// sector pages and their client lists are untouched by this reset.

export const clients: Client[] = [
    {
        slug: "gd-sons",
        name: "Girdhar Das and Sons",
        sectors: ["local-services", "e-commerce"],
        tagline: "A 55-year-old Varanasi retail institution, turned into a pan-India e-commerce brand through consistent content and real customer trust.",
        tags: ["Website Development", "Social Media", "WhatsApp Marketing", "Influencer Marketing"],
        services: ["website-development", "whatsapp-marketing", "content-creation", "videography", "google-meta-ads-management", "social-media", "influencer-marketing", "performance-marketing"],
        overview: "Girdhar Das and Sons has been a fixture in Varanasi's retail scene for 55 years — a trusted name for kitchenware and home appliances long before either of us was in business. We started working together in 2023, beginning with something simple: consistent, honest social media content showing the actual store, the actual products, the actual people behind the counter.\n\nWithin a couple of months, that consistency showed up somewhere unexpected — foot traffic at the physical store increased, as customers began recognising the shop from what they'd already seen online.\n\nThe website had existed for years by that point, but only as a catalogue — a place to browse, not to buy. In December 2025, we helped activate real e-commerce: online payments, cash on delivery, and shipping across India. The first few months were quiet, as first months usually are. By March, that had changed completely — the store now processes consistent orders from across the country every day, ranging from a ₹100 spice tin to a ₹20,000 appliance, some shipments as light as 100g and others as heavy as 45kg.",
        highlights: [
            "10,000+ followers on Instagram, 14,000+ on Facebook, 5,100+ subscribers on YouTube",
            "19.8K clicks and 2.09M impressions on Google Search over the past year (Search Console)",
            "Online payments, COD, and pan-India shipping live since December 2025",
            "Daily orders now arriving from across India, ₹100–₹20,000 in order value",
        ],
        website: "https://gdsons.co.in",
        links: [
            { label: "Instagram", url: "https://www.instagram.com/gdsons.vns/" },
            { label: "Facebook", url: "https://www.facebook.com/gdandsons" },
            { label: "YouTube", url: "https://www.youtube.com/@GirdharDasandSons" },
        ],
        screenshots: [
            { src: "/images/clients/gd-sons/showcase.webp", caption: "Instagram presence, the live product catalogue, and real Search Console performance (19.8K clicks, 2.09M impressions)." },
        ],
        heroImage: "/images/clients/gd-sons/hero-illustration.webp",
        featured: true,
        colSpan: "col-span-2",
        imgHeight: "h-52",
    },

    {
        slug: "dr-k-shilpi-reddy",
        name: "Dr. K. Shilpi Reddy",
        sectors: ["healthcare"],
        tagline: "23+ years of trusted care, turned into Hyderabad's most-followed voice in women's health.",
        tags: ["Social Media", "Content Creation", "Website Development", "SEO"],
        services: ["social-media", "content-creation", "google-meta-ads-management", "performance-marketing", "website-development", "seo-consultancy", "videography"],
        overview: "Dr. K. Shilpi Reddy is an Obstetrician and Gynaecologist with over 23 years of practice, serving as Clinical Director of Obstetrics & Gynaecology at KIMS Cuddles, Kondapur — a Hyderabad hospital she co-founded with Dr. Abhinay Bollineni in 2016, built as a center of excellence for obstetrics, fetal medicine, and paediatric care. Long before any of that following existed, her actual medical work started in rural Telangana — a nursing home in Dubbaka in 2003, then a larger one in Siddipet in 2007 — treating high-risk pregnancies in communities with almost no access to specialist obstetric care. That same instinct is what her digital presence is built on today.\n\nWe began working with her in 2023, taking over social media, content, video production, paid ads, performance marketing, her website, and SEO as one continuous, hands-on engagement rather than a set-and-forget campaign.\n\nWhat's driven the growth since then is the day-to-day discipline behind it: a content calendar planned and shot consistently, not sporadically — patient-education reels, VBAC and high-risk pregnancy stories, myth-busting content on fertility and PCOS, and behind-the-scenes moments from her work as a social activist and motivational speaker. Every week involves fresh video shoots, edits, captions written in her voice, Meta and Google ad campaigns monitored and optimised, and community engagement — replying to comments and DMs — so the page stays active and trustworthy rather than just posting and going quiet.\n\nThat groundwork is what took her from a respected but comparatively lower-visibility clinical profile in 2023 to one of Hyderabad's most-followed gynaecologists online today: 419K+ Instagram followers, a highly engaged Facebook community, and 1.28 million subscribers on YouTube, where longer-form patient stories and expert explainers live. The same consistency now extends to her website and SEO, keeping her positioned as a go-to authority on women's health searches.\n\nAlongside her clinical work, she also runs Mrs. Mom Event, her own venture in pregnancy and infant-care wellness education — part of the same content ecosystem this engagement supports.",
        highlights: [
            "419,000+ Instagram followers, up from a comparatively low-visibility starting point in 2023",
            "1.28 million subscribers on YouTube",
            "29,016 Facebook page likes",
            "23+ years of clinical experience, including co-founding KIMS Cuddles, Kondapur in 2016",
        ],
        website: "https://drkshilpireddy.com",
        links: [
            { label: "Instagram", url: "https://www.instagram.com/dr.k.shilpireddy/" },
            { label: "Facebook", url: "https://www.facebook.com/Dr.k.shilpireddy" },
            { label: "YouTube", url: "https://www.youtube.com/channel/UC4JqmB6gTvjYSQixZtJ0jHw" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/drkshilpireddy/" },
            { label: "Mrs. Mom Event", url: "https://mrsmomevent.com/" },
        ],
        screenshots: [
            { src: "/images/clients/dr-k-shilpi-reddy/showcase.webp", caption: "Her Instagram profile and YouTube channel — 419K+ followers and 1.28M subscribers." },
        ],
        heroImage: "/images/clients/dr-k-shilpi-reddy/hero-illustration.webp",
        featured: true,
        imgHeight: "h-44",
    },
];

export function getClientBySlug(slug: string): Client | undefined {
    return clients.find((c) => c.slug === slug);
}

export function getClientsBySector(sectorSlug: string, excludeSlug?: string): Client[] {
    return clients.filter((c) => c.sectors?.includes(sectorSlug) && c.slug !== excludeSlug);
}

export function getFeaturedClients(limit?: number): Client[] {
    const featured = clients.filter((c) => c.featured);
    return typeof limit === "number" ? featured.slice(0, limit) : featured;
}
