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
        sectors: ["travel-and-tourism"],
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
        sectors: ["e-commerce"],
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
        sectors: ["education"],
        tags: ["Instagram", "Content"],
        services: ["social-media", "content-creation"],
        featured: true,
        imgHeight: "h-44",
    },
    {
        slug: "dr-ankita-chauhan",
        name: "Dr. Ankita Chauhan",
        sectors: ["healthcare"],
        tags: ["Personal Brand", "Reels"],
        services: ["brand-designing", "videography"],
        website: "https://drankitachauhan.com",
        featured: true,
        imgHeight: "h-44",
    },
    {
        slug: "mega-furniture",
        name: "Mega Furniture",
        sectors: ["retail"],
        tags: ["Shopify", "Web Dev", "Ads"],
        services: ["ecommerce-development", "website-development", "google-meta-ads-management"],
        featured: true,
        imgHeight: "h-44",
    },
    {
        slug: "swarnam-jewellers",
        name: "Swarnam Jewellers",
        sectors: ["retail"],
        tags: ["Instagram", "Branding"],
        services: ["social-media", "brand-designing"],
        featured: true,
        imgHeight: "h-44",
    },
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
    { slug: "shagun-matrimonial", name: "Shagun Matrimonial", sectors: ["local-services"], tags: ["Matchmaking"], services: [], website: "https://www.shaguncentre.com" }, // sector is a best-fit guess — Matrimonial isn't one of the 10 sectors yet
    { slug: "benaras-boutique", name: "Benaras Boutique", sectors: ["e-commerce"], tags: ["Sarees", "E-Commerce"], services: [], website: "https://www.benarasboutiue.com" },
    { slug: "earthy-hues", name: "Earthy Hues", sectors: ["travel-and-tourism"], tags: ["Travel"], services: [], website: "https://www.earthyhues.com" },
    { slug: "modern-world-travel", name: "Modern World Travel", sectors: ["travel-and-tourism"], tags: ["Travel Agency"], services: [], website: "https://www.modernworldtravel.com" },
    { slug: "travel-zone", name: "Travel Zone", sectors: ["travel-and-tourism"], tags: ["Travel Agency"], services: [], website: "https://www.travelzonevaranasi.com" },
    { slug: "sunshine-travels", name: "Sunshine Travels", sectors: ["travel-and-tourism"], tags: ["Travel Agency"], services: [], website: "https://www.sunshinetravel.in" },
    { slug: "divine-soul-resonance", name: "Divine Soul Resonance", sectors: ["corporate"], tags: ["Coaching"], services: [], website: "https://www.divinesoulresonance.com" },
    { slug: "labour-law-desk", name: "Labour Law Desk", sectors: ["corporate"], tags: ["Legal Services"], services: [], website: "https://www.labourlawdesk.com" },
    { slug: "soul-creation", name: "Soul Creation", sectors: ["local-services"], tags: ["Photography", "Events"], services: [], website: "https://www.soulcreation.co.in" },
    { slug: "little-leaf", name: "Little Leaf", sectors: ["corporate"], tags: ["Waste Management"], services: [], website: "https://www.littleleaf.one" },
    { slug: "only-polymer", name: "Only Polymer", sectors: ["corporate"], tags: ["Manufacturing"], services: [], website: "https://www.onlypolymer.com" },
    { slug: "ras-polytex", name: "RAS Polytex", sectors: ["corporate"], tags: ["Manufacturing", "Packaging"], services: [], website: "https://www.raspoly.com" },
    { slug: "ganga-papers", name: "Ganga Papers", sectors: ["corporate"], tags: ["Manufacturing", "Paper"], services: [], website: "https://www.gangapapers.com" },
    { slug: "alpran-hr-services", name: "Alpran HR Services", sectors: ["corporate"], tags: ["HR Consultancy"], services: [], website: "https://alpranhrservices.com" },
    { slug: "kailash-rug-industries", name: "Kailash Rug Industries", sectors: ["corporate"], tags: ["Manufacturing", "Export"], services: [], website: "https://www.kailashrug.in" }, // sector is a best-fit guess — Carpets & Rugs isn't one of the 10 sectors yet
    { slug: "hc-pg-college", name: "Harish Chandra PG College", sectors: ["education"], tags: ["College"], services: [], website: "https://www.hcpgcollege.edu.in" },
    { slug: "the-elegance", name: "The Elegance", sectors: ["travel-and-tourism"], tags: ["Hotel"], services: [], website: "https://www.theelegance.co.in" },
    { slug: "hotel-madin", name: "Hotel Madin", sectors: ["travel-and-tourism"], tags: ["Hotel"], services: [], website: "https://www.hotelmadin.com" },
    { slug: "hotel-runway-inn", name: "Hotel Runway Inn", sectors: ["travel-and-tourism"], tags: ["Hotel"], services: [], website: "https://www.hotelrunwayinn.com" },
    { slug: "dr-k-shilpi-reddy", name: "Dr. K. Shilpi Reddy", sectors: ["healthcare"], tags: ["Healthcare"], services: [], website: "https://www.drkshilpireddy.com" },
    { slug: "mrs-mom-event", name: "Mrs. Mom Event", sectors: ["local-services"], tags: ["Events"], services: [], website: "http://www.mrsmomevent.com" },
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
