import { Client } from "@/types/client.types";

// Seed data, merged from two places already in the codebase: the 7 clients
// shown on the homepage bento grid (which had real service tags) and the 20
// names in the old client marquee list (which had almost no detail beyond a
// name). JR Digital Marketing Services is deliberately excluded — it's one
// of the two founding companies behind Wizards Next itself, not a client.
//
// Sector is left unset (undefined) for names where the only signal was the
// business name itself — those are genuine guesses I'm not comfortable
// locking in, and sector 1 of your plan is exactly "you tell us the real
// category." Clients with an unset sector still appear in the marquee and
// the /our-works hub, they just won't show up filtered into a specific
// sector page until confirmed. See CLIENT-SUBMISSION-TEMPLATE.md for the
// intake format for both new clients and corrections to these seed ones.
//
// To add a new client: append one object here, optionally drop screenshot
// files in /public/images/clients/[slug]/, and redeploy. Nothing else needs
// to change — the hub page, individual page route, homepage strip, marquee,
// and each sector's client list all read from this array automatically.

export const clients: Client[] = [
    // ─── Confirmed sector + real service history (from the homepage grid) ───
    {
        slug: "sadbhavana-banaras",
        name: "Sadbhavana Banaras",
        sector: "travel-and-tourism",
        tags: ["Social Media", "Meta Ads", "Branding"],
        services: ["social-media", "google-meta-ads-management", "brand-designing"],
        website: "https://sadbhavanabanaras.com",
        featured: true,
        colSpan: "col-span-2",
        imgHeight: "h-52",
    },
    {
        slug: "banarsi-saree",
        name: "Banarsi Saree",
        sector: "e-commerce",
        tags: ["Shopify", "Google Ads", "SEO"],
        services: ["ecommerce-development", "google-meta-ads-management", "seo-consultancy"],
        website: "https://banarsisaree.com",
        featured: true,
        rowSpan: "row-span-2",
        imgHeight: "h-full",
    },
    {
        slug: "career-launcher",
        name: "Career Launcher",
        sector: "education",
        tags: ["Instagram", "Content"],
        services: ["social-media", "content-creation"],
        featured: true,
        imgHeight: "h-44",
    },
    {
        slug: "dr-ankita-chauhan",
        name: "Dr. Ankita Chauhan",
        sector: "healthcare",
        tags: ["Personal Brand", "Reels"],
        services: ["brand-designing", "videography"],
        website: "https://drankitachauhan.com",
        featured: true,
        imgHeight: "h-44",
    },
    {
        slug: "mega-furniture",
        name: "Mega Furniture",
        sector: "retail",
        tags: ["Shopify", "Web Dev", "Ads"],
        services: ["ecommerce-development", "website-development", "google-meta-ads-management"],
        featured: true,
        imgHeight: "h-44",
    },
    {
        slug: "swarnam-jewellers",
        name: "Swarnam Jewellers",
        sector: "retail",
        tags: ["Instagram", "Branding"],
        services: ["social-media", "brand-designing"],
        featured: true,
        imgHeight: "h-44",
    },
    {
        slug: "gd-sons",
        name: "GD Sons",
        sector: "corporate",
        tags: ["Google Ads", "Analytics", "SEO"],
        services: ["google-meta-ads-management", "analytics-reporting", "seo-consultancy"],
        website: "https://gdsons.co.in",
        featured: true,
        imgHeight: "h-44",
    },

    // ─── From the old marquee list — name confirmed real, sector/services pending your input ───
    { slug: "kaasvi", name: "Kaasvi", tags: [], services: [], website: "https://kaasvi.in" },
    { slug: "dhanuka-silks", name: "Dhanuka Silks", tags: [], services: [] },
    { slug: "dr-jyosthna-elagandula", name: "Dr. Jyosthna Elagandula", tags: [], services: [] },
    { slug: "mastertech-pune", name: "MasterTech Pune", tags: [], services: [] },
    { slug: "rimika-jaipur", name: "Rimika Jaipur", tags: [], services: [], website: "https://rimikajaipur.com" },
    { slug: "sunbeam-academy", name: "Sunbeam Academy", tags: [], services: [], website: "https://sunbeamacademy.com" },
    { slug: "kshitij-auto", name: "Kshitij Auto", tags: [], services: [] },
    { slug: "laurels-care", name: "Laurels Care", tags: [], services: [], website: "https://laurelscare.in" },
    { slug: "dr-payal-bajaj", name: "Dr. Payal Bajaj", tags: [], services: [] },
    { slug: "dr-ramya-valiveru", name: "Dr. Ramya Valiveru", tags: [], services: [] },
    { slug: "steel-dalal", name: "Steel Dalal", tags: [], services: [] },
];

export function getClientBySlug(slug: string): Client | undefined {
    return clients.find((c) => c.slug === slug);
}

export function getClientsBySector(sectorSlug: string, excludeSlug?: string): Client[] {
    return clients.filter((c) => c.sector === sectorSlug && c.slug !== excludeSlug);
}

export function getFeaturedClients(limit?: number): Client[] {
    const featured = clients.filter((c) => c.featured);
    return typeof limit === "number" ? featured.slice(0, limit) : featured;
}
