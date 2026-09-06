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

    // ─── Added from the wizards.co.in deep audit — names/websites confirmed real, no brief yet ───
    { slug: "shagun-matrimonial", name: "Shagun Matrimonial", sector: "local-services", tags: ["Matchmaking"], services: [], website: "https://www.shaguncentre.com" }, // sector is a best-fit guess — Matrimonial isn't one of the 10 sectors yet
    { slug: "benaras-boutique", name: "Benaras Boutique", sector: "e-commerce", tags: ["Sarees", "E-Commerce"], services: [], website: "https://www.benarasboutiue.com" },
    { slug: "earthy-hues", name: "Earthy Hues", sector: "travel-and-tourism", tags: ["Travel"], services: [], website: "https://www.earthyhues.com" },
    { slug: "modern-world-travel", name: "Modern World Travel", sector: "travel-and-tourism", tags: ["Travel Agency"], services: [], website: "https://www.modernworldtravel.com" },
    { slug: "travel-zone", name: "Travel Zone", sector: "travel-and-tourism", tags: ["Travel Agency"], services: [], website: "https://www.travelzonevaranasi.com" },
    { slug: "sunshine-travels", name: "Sunshine Travels", sector: "travel-and-tourism", tags: ["Travel Agency"], services: [], website: "https://www.sunshinetravel.in" },
    { slug: "divine-soul-resonance", name: "Divine Soul Resonance", sector: "corporate", tags: ["Coaching"], services: [], website: "https://www.divinesoulresonance.com" },
    { slug: "labour-law-desk", name: "Labour Law Desk", sector: "corporate", tags: ["Legal Services"], services: [], website: "https://www.labourlawdesk.com" },
    { slug: "soul-creation", name: "Soul Creation", sector: "local-services", tags: ["Photography", "Events"], services: [], website: "https://www.soulcreation.co.in" },
    { slug: "little-leaf", name: "Little Leaf", sector: "corporate", tags: ["Waste Management"], services: [], website: "https://www.littleleaf.one" },
    { slug: "only-polymer", name: "Only Polymer", sector: "corporate", tags: ["Manufacturing"], services: [], website: "https://www.onlypolymer.com" },
    { slug: "ras-polytex", name: "RAS Polytex", sector: "corporate", tags: ["Manufacturing", "Packaging"], services: [], website: "https://www.raspoly.com" },
    { slug: "ganga-papers", name: "Ganga Papers", sector: "corporate", tags: ["Manufacturing", "Paper"], services: [], website: "https://www.gangapapers.com" },
    { slug: "alpran-hr-services", name: "Alpran HR Services", sector: "corporate", tags: ["HR Consultancy"], services: [], website: "https://alpranhrservices.com" },
    { slug: "kailash-rug-industries", name: "Kailash Rug Industries", sector: "corporate", tags: ["Manufacturing", "Export"], services: [], website: "https://www.kailashrug.in" }, // sector is a best-fit guess — Carpets & Rugs isn't one of the 10 sectors yet
    { slug: "hc-pg-college", name: "Harish Chandra PG College", sector: "education", tags: ["College"], services: [], website: "https://www.hcpgcollege.edu.in" },
    { slug: "the-elegance", name: "The Elegance", sector: "travel-and-tourism", tags: ["Hotel"], services: [], website: "https://www.theelegance.co.in" },
    { slug: "hotel-madin", name: "Hotel Madin", sector: "travel-and-tourism", tags: ["Hotel"], services: [], website: "https://www.hotelmadin.com" },
    { slug: "hotel-runway-inn", name: "Hotel Runway Inn", sector: "travel-and-tourism", tags: ["Hotel"], services: [], website: "https://www.hotelrunwayinn.com" },
    { slug: "dr-k-shilpi-reddy", name: "Dr. K. Shilpi Reddy", sector: "healthcare", tags: ["Healthcare"], services: [], website: "https://www.drkshilpireddy.com" },
    { slug: "mrs-mom-event", name: "Mrs. Mom Event", sector: "local-services", tags: ["Events"], services: [], website: "http://www.mrsmomevent.com" },
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
