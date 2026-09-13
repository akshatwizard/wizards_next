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
            "Real (human) site traffic runs 64.5% mobile — the design and checkout are built around that",
        ],
        technicalOverview: {
            performance: "The same standing on-page SEO checklist runs on every product and category page — optimised meta titles and descriptions, a clean header hierarchy, descriptive alt text on every product image, SEO-friendly URLs, internal linking between related products and categories, and a current XML sitemap. On speed, product images are compressed, browser caching and asset minification are enabled, and listing pages use lazy-loading — treated as non-negotiable on every build, not an optional extra.",
            responsiveness: "Built mobile-first on Laravel with Tailwind CSS. Our own visitor intelligence tracking shows real (human) traffic running 64.5% mobile, and the design and checkout flow are built and tested around that reality.",
            scalability: "The backend runs on Laravel with a Razorpay webhook-based payment integration — order creation happens only after payment is verified server-side, independent of whether the customer's browser stays open, the industry-standard, most reliable pattern for growing order volume. The catalogue and category structure, including a custom-built two-panel sidebar menu, are built to keep expanding as new products are added, without needing a redesign.",
        },
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
        technicalOverview: {
            performance: "The same on-page SEO checklist runs everywhere — optimised meta titles and descriptions, a clean header hierarchy built around real patient search intent, descriptive alt text on every image, SEO-friendly URLs, internal linking across service and blog pages, and a current sitemap. On speed, images are compressed, caching and minification are enabled, and render-blocking scripts are kept to a minimum — standing hygiene, checked every time new content goes live.",
            scalability: "The website and SEO work run as one continuous engagement alongside the content calendar, so new patient-education content, service pages, and blog posts get added on a steady cadence without needing structural rework — the same discipline that's driven the social growth applies to the site itself.",
        },
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

    {
        slug: "ganga-papers-india",
        name: "Ganga Papers India Ltd.",
        sectors: ["corporate"],
        tagline: "Keeping a 41-year-old paper manufacturer's shareholder record current, compliant, and easy to find — one document at a time.",
        tags: ["Website Development"],
        services: ["website-development"],
        overview: "Ganga Papers India Ltd. is an established Indian paper manufacturer, in operation since 1985 — 41 years now — producing Kraft Paper, Pulp, and Newsprint & Writing/Printing Paper. As a publicly listed company, they're required to keep a wide range of statutory and shareholder-facing documents — quarterly results, annual reports, corporate governance reports, board meeting notices, related party transactions, investor KYC forms, credit ratings, and more — accurate and accessible on their website at all times.\n\nWe've managed their website since 2019, purely on the content and document side. The site is built in core PHP with a Drupal 7–based admin panel, structured specifically so this kind of document-heavy maintenance stays simple: whenever Ganga Papers issues a new filing, they send us the list of documents to update, and the site's dedicated Shareholders' Desk section — with over 20 clearly defined document categories, from Annual Returns to Secretarial Compliance Reports to Newspaper Advertisements — means every update lands in the right place without needing to restructure anything.\n\nSix years in, that same discipline still holds — the current AGM notice and annual return for this fiscal year are already live, alongside decades of historical filings, on a website built to match a listed manufacturer's compliance calendar without friction.",
        highlights: [
            "Managing their website's content and documents since 2019 — six years and counting",
            "20+ distinct statutory and shareholder document categories in the Shareholders' Desk",
            "41 years in operation (established 1985), with current fiscal-year filings kept live alongside decades of history",
        ],
        technicalOverview: {
            performance: "For a compliance-driven site like this, on-page SEO focuses on making sure every disclosure and filing page is properly titled, cleanly structured, and genuinely findable — correct meta titles and descriptions, a clean heading hierarchy, SEO-friendly URLs for every document category, and internal linking between related filings, so a shareholder or regulator can locate what they need without digging. On speed, images and assets are kept optimised with caching enabled — basic hygiene applied consistently, even on a content-first, document-heavy site.",
            responsiveness: "The site carries a standard responsive configuration, and the Shareholders' Desk and document-heavy pages render cleanly across devices. Device-level search analytics aren't currently exported for this client to quantify the exact mobile/desktop split.",
            scalability: "Built on core PHP with a Drupal 7-based admin panel, the site's real proof of scalability is the Shareholders' Desk itself: 20+ distinct statutory and compliance document categories, each independently maintainable, so new filings get added without ever touching the site's structure or design.",
            uiUxTheme: "The design follows a traditional, function-first corporate/investor-relations style rather than a flashy consumer one — appropriate for a listed manufacturer whose primary visitors are shareholders and regulators. The homepage leads with trust-building icon blocks (decades of experience, eco-friendly manufacturing, plant infrastructure, round-the-clock customer service), and the Shareholders' Desk is presented as clean, scannable tables rather than buried behind PDF-only navigation.",
        },
        website: "https://gangapapers.com",
        screenshots: [
            { src: "/images/clients/ganga-papers-india/showcase.webp", caption: "The Shareholders' Desk navigation and a live Quarterly Results filing page." },
        ],
        heroImage: "/images/clients/ganga-papers-india/hero-illustration.webp",
        featured: true,
        imgHeight: "h-44",
    },

    {
        slug: "clinica-derm",
        name: "Clinica Derm",
        sectors: ["healthcare"],
        tagline: "From buried on page three to owning page one — the SEO engine behind Hyderabad's most-searched-for skin clinic.",
        tags: ["SEO Consultancy", "Website Development"],
        services: ["seo-consultancy", "website-development"],
        overview: "Clinica Derm is a skin and hair clinic in Banjara Hills, Hyderabad, led by Dr. Deepthi Atmakuri — a board-certified dermatologist (DDVL, MBBS) with an aesthetics fellowship from Mahidol University, Thailand, and over 2,500 clients treated. She's also an independently recognised voice in the field — featured in the Times of India, and honoured at Times Power Women Telangana 2026 — credentials that exist entirely apart from our scope here, which is purely the website and its search visibility.\n\nWe've managed Clinica Derm's WordPress website and full-scope SEO since August 2024. No social media is part of this engagement — Dr. Atmakuri runs her own Instagram and Facebook independently.\n\nThe process runs on a fixed weekly and monthly rhythm: keyword research, done in discussion with the client and layered against competitor research, drives every new piece of content — blog posts and treatment pages built around real search demand, not guesswork. A dedicated team member handles ongoing backlink building across the web. Clinica Derm gets a performance report every week and a full audit every month, so they always know exactly where the site stands.\n\nThe Google Search Console data tells the actual story: average search position moved from the mid-30s in May 2025 to single digits by March 2026 — a site that used to be buried in search results now regularly lands on page one, and has held that ground for over a year since. Branded searches dominate outright, but just as important, competitive non-branded terms like \"dermatologist hyderabad\" and \"best dermatologist in hyderabad\" now rank in the 4.5–5.7 range, putting Clinica Derm in real contention against every other clinic in the city, not just searches for their own name.",
        highlights: [
            "16-month cumulative: 7,083 clicks and 1.18 million impressions on Google Search",
            "Average search position improved from 35.3 to a low of 7.9, holding in the 8–17 range through 2026",
            "Branded searches near position 1: \"clinicaderm\" at 1.12, \"clinica derm banjara hills\" at 1.03",
            "Competitive non-branded terms now rank top-5: \"dermatologist hyderabad\" (4.5), \"best dermatologist hyderabad\" (5.0)",
            "Managing the website and SEO since August 2024",
            "5,407 of 7,083 total clicks come from mobile at an average position of 8.69, vs. 32.16 on desktop",
        ],
        technicalOverview: {
            performance: "The same standing on-page SEO checklist runs across every treatment and blog page — optimised meta titles and descriptions, a clean header hierarchy, descriptive alt text on treatment photography, SEO-friendly URLs, and internal linking between related treatment and blog pages, on top of the keyword and competitor research already driving the content plan. On speed, images are compressed (important on a photography-heavy clinic site), caching and minification are enabled, and render-blocking scripts are kept to a minimum — checked every time new content goes live.",
            responsiveness: "Built on WordPress (Elementor), and the search data backs up how well it performs on mobile: 5,407 of the site's 7,083 total clicks come from mobile at an average position of 8.69, compared to 32.16 on desktop — a meaningful gap in the site's favour on the device most patients actually search from.",
            scalability: "The WordPress/Elementor setup makes it easy to keep expanding the treatment and blog library — new procedures, new patient-education content — without redesigning the site, which is exactly the structure behind the SEO growth: content added consistently, month over month, on a foundation built to hold it.",
            uiUxTheme: "Photography-led and trust-focused, in keeping with an aesthetic/dermatology practice: a hero section built around Dr. Deepthi Atmakuri herself, three feature blocks up top (Expert Dermatologists / Advanced Technology / Personalized Treatment), a clean treatment-category grid, and dedicated sections for media features and patient testimonials — all designed to build credibility before a first-time visitor ever picks up the phone.",
        },
        website: "https://clinicaderm.in",
        screenshots: [
            { src: "/images/clients/clinica-derm/showcase.webp", caption: "The Clinica Derm website and 16 months of real Google Search Console performance." },
        ],
        trendChart: {
            title: "Average Google search position, May 2025 – Sep 2026",
            note: "Lower is better — position 1 is the top organic result",
            data: [
                { label: "May '25", value: 35.3 },
                { label: "Jun '25", value: 39.0 },
                { label: "Jul '25", value: 33.1 },
                { label: "Aug '25", value: 28.0 },
                { label: "Sep '25", value: 17.4 },
                { label: "Oct '25", value: 9.9 },
                { label: "Nov '25", value: 11.4 },
                { label: "Dec '25", value: 10.4 },
                { label: "Jan '26", value: 10.6 },
                { label: "Feb '26", value: 8.4 },
                { label: "Mar '26", value: 7.9 },
                { label: "Apr '26", value: 9.8 },
                { label: "May '26", value: 13.9 },
                { label: "Jun '26", value: 17.0 },
                { label: "Jul '26", value: 13.4 },
                { label: "Aug '26", value: 13.7 },
                { label: "Sep '26*", value: 12.5 },
            ],
        },
        heroImage: "/images/clients/clinica-derm/hero-illustration.webp",
        featured: true,
        imgHeight: "h-44",
    },

    {
        slug: "travel-zone",
        name: "Travel Zone",
        sectors: ["travel-and-tourism"],
        tagline: "Built once on Drupal in 2019, still fully self-managed — a platform built to scale with the business, not slow it down.",
        tags: ["Website Development"],
        services: ["website-development"],
        overview: "Travel Zone is a Varanasi-based travel agency established in 1995 — 28+ years in business, a 4.9 Google rating, and approval from the Ministry of Tourism, Government of India, with affiliations including IATA, IATO, TAFI, ASTA, WTAAA, UFTAA, and TAAI. Based near Varanasi Cantt Station, they run tour packages across Uttar Pradesh, Indian Domestic, International, and Inbound routes, alongside visa services.\n\nWe built and launched their website on Drupal 7 in 2019, and the engagement since then has stayed focused specifically on the website itself — development and maintenance, not marketing or SEO, which the Travel Zone team handles entirely on their own.\n\nWhat that build actually delivers is a fully client-manageable platform: the Travel Zone team adds and updates every itinerary, city, and destination page themselves through the admin panel, with no need to come back to us for routine content work. The site structure interlinks every page deliberately, and the underlying database is optimised specifically to handle a large, constantly growing content library — itinerary pages spanning domestic and international routes — without the site slowing down as it scales.\n\nSix years on, that structure is still holding up under real load. The client has built out a genuinely large content library on top of it, including nationwide travel-blog content that, per their own Search Console data, reaches well beyond Varanasi — cities like Tirupati, Surat, Raipur, and Nagpur among them. That's entirely the client's own content and SEO work; what the platform we built in 2019 had to do was handle that scale of growth without needing to be rebuilt or restructured along the way — and it has.",
        highlights: [
            "Website built and launched on Drupal 7 in 2019 — still running, still fully self-managed by the client's own team six years later",
            "Every itinerary, city, and destination page interlinked, with the database structure optimised for a large, constantly growing content library",
            "The client's own content and SEO work, running on this platform, reached 132,994 clicks and 10.8 million impressions over a recent 16-month window",
            "28+ years in business (established 1995), 4.9 Google rating, Ministry of Tourism (Govt. of India) approved",
            "86% of all clicks (114,430 of 132,994) come from mobile, at an average position of 7.43 vs. 13.86 on desktop",
        ],
        technicalOverview: {
            performance: "Every itinerary, city, and destination page follows the same on-page SEO checklist applied everywhere — optimised meta titles and descriptions, a clean header hierarchy, descriptive alt text, SEO-friendly URLs, and internal linking between related tours. On speed, the image-heavy destination pages are compressed and cached, assets are minified, and lazy-loading is used across the growing itinerary library — standing hygiene, not a one-time setup.",
            responsiveness: "Genuinely mobile-dominant: 114,430 of the site's 132,994 total clicks (86%) come from mobile, at an average position of 7.43 — nearly double the ranking strength of desktop's 13.86. For a travel site where most research happens on a phone, that's exactly where the site needed to perform.",
            scalability: "Built on Drupal 7 with every itinerary, city, and destination page interlinked and the content model optimised at the table level — precisely what let the content library scale to dozens of Indian cities without a single redesign. The client manages all of it themselves through the admin panel.",
            uiUxTheme: "Bold, photography-first design built around Varanasi's ghats and festival culture — the homepage hero uses full-bleed destination photography with elegant script-style typography over it, a bold red-and-white brand palette carried through the logo and CTAs, and a mega-menu that surfaces dozens of curated tour packages without feeling cluttered. Trust badges (Ministry of Tourism approval, IATA/IATO/TAFI/ASTA affiliations) sit prominently on the homepage, and a WhatsApp quick-contact button stays fixed on screen.",
        },
        website: "https://www.travelzonevaranasi.com",
        screenshots: [
            { src: "/images/clients/travel-zone/showcase.webp", caption: "The Travel Zone website and the client's own 16-month Search Console performance." },
        ],
        trendChart: {
            title: "Clicks on the client's own content, May 2025 – Sep 2026",
            note: "This is the client's own SEO and content work, not ours — shown as evidence the platform handles real scale",
            data: [
                { label: "May '25", value: 6113 },
                { label: "Jun '25", value: 8772 },
                { label: "Jul '25", value: 8389 },
                { label: "Aug '25", value: 9370 },
                { label: "Sep '25", value: 8771 },
                { label: "Oct '25", value: 12235 },
                { label: "Nov '25", value: 11959 },
                { label: "Dec '25", value: 21589 },
                { label: "Jan '26", value: 17668 },
                { label: "Feb '26", value: 4408 },
                { label: "Mar '26", value: 5440 },
                { label: "Apr '26", value: 3513 },
                { label: "May '26", value: 3997 },
                { label: "Jun '26", value: 4051 },
                { label: "Jul '26", value: 2914 },
                { label: "Aug '26", value: 2840 },
                { label: "Sep '26*", value: 965 },
            ],
        },
        heroImage: "/images/clients/travel-zone/hero-illustration.webp",
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
