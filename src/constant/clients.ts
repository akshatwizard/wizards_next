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
            { src: "/images/clients/gd-sons/showcase.png", caption: "Instagram presence, the live product catalogue, and real Search Console performance (19.8K clicks, 2.09M impressions)." },
        ],
        heroImage: "/images/clients/gd-sons/hero-illustration.png",
        featured: true,
        colSpan: "col-span-2",
        imgHeight: "h-52",
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
