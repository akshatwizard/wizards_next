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

    {
        slug: "shagun-centre",
        name: "Shagun Centre (Shagun Matrimonial)",
        sectors: ["membership-community"],
        tagline: "Built in 2016, stable since 2019, and still running an entire matrimonial business end to end — with zero extra cost to the client.",
        tags: ["Website Development", "Mobile App"],
        services: ["website-development", "app-dev"],
        overview: "Shagun Centre is an offline-and-online matrimonial service with physical offices across 3 cities, offering personalised, advisor-driven matchmaking rather than open self-service browsing. We built their complete system in 2016 — as Inforbit, one of the two companies that would later found Wizards Next — one of the earliest projects in our portfolio, on Drupal 7.\n\nIt isn't just a website; it's the operating system for the entire business. When an inquiry comes in, the sales team logs the lead and every call in the system themselves, through a section of the admin panel accessible only to Shagun's own office employees. Once a candidate's details are ready, the team creates a full matrimonial biodata and adds it to the system, and only then can the candidate or their family log in — through OTP-secured access — to view matches. Crucially, nobody can browse the full database freely: every member only sees the handpicked, preference-matched profiles the office team has specifically set for them. Once a membership is purchased, the service team takes over, managing appointments, personalised searches, and ongoing communication with paying members.\n\nWhat makes it a genuine engineering success story is what happened after launch: the system went through steady, active development for its first two to three years, and since 2019, it has run with almost zero bugs and no further updates needed — while still powering the client's full day-to-day business, generating leads and revenue for them, at no extra development cost. That's seven years of stability on a system built to handle real transactional load, not just serve static pages.\n\nThe search data backs up the same story of quiet, compounding strength: branded searches now dominate across all three operating cities, and average search position across the board improved from around 20 in May 2025 to the mid-single-digits through 2026, on a site that hasn't needed a rebuild in years.",
        highlights: [
            "System built in 2016 (as Inforbit, now Wizards Next); actively developed through 2019, running with near-zero bugs since",
            "Operating across 3 cities, with 25,000+ profiles currently in the system",
            "50+ website inquiries handled daily, with roughly 10% going on to submit a full official matrimonial biodata",
            "16-month cumulative: 2,719 clicks, 124,883 impressions, 2.18% average CTR",
            "Branded dominance in all 3 operating cities — \"shagun matrimonial\" at position 1.92, \"shagun matrimonial gwalior\" at 1.82, \"shagun matrimonial kanpur\" at 1.03",
        ],
        technicalOverview: {
            performance: "The same on-page SEO checklist applies here — optimised meta titles and descriptions across every service and city-facing page, a clean header hierarchy, SEO-friendly URLs, and internal linking — layered on top of a legacy Drupal 7 codebase that our team keeps tuned without needing to touch its core stability. On speed, images and assets stay optimised and cached — basic hygiene maintained even on a decade-old, largely unchanged codebase.",
            responsiveness: "Strongly mobile-first in practice: 2,144 of the site's 2,719 total clicks (79%) come from mobile, at an average position of 6.21 — far ahead of desktop's 17.22. That tracks with how families actually use the service: checking shortlisted matches and appointment updates from a phone.",
            scalability: "Built in 2016 and actively developed through 2019, the system has since run the entire business — leads, sales, service delivery, and membership management — for over 25,000 profiles without needing a rebuild or a significant update. That's the real scalability proof here: a system engineered once, handling years of growing transactional volume without additional engineering cost.",
            uiUxTheme: "The public-facing side leans warm and romantic — a full-bleed wedding-couple hero photograph, a coral-red and indigo brand palette, and a heart-shaped logo mark, with copy built around trust and privacy. Because browsing isn't public, the design leads straight to a login panel rather than a searchable directory. Once logged in, members get a clean, card-based activity dashboard. The internal sales and service panel used by Shagun's own staff is visually distinct — a more utilitarian purple-and-white data-table interface built for speed and volume rather than romance.",
        },
        website: "https://www.shaguncentre.com/",
        screenshots: [
            { src: "/images/clients/shagun-centre/showcase.webp", caption: "The member-facing site, the internal sales panel, and real Search Console performance." },
        ],
        heroImage: "/images/clients/shagun-centre/hero-illustration.webp",
        featured: true,
        imgHeight: "h-44",
    },

    {
        slug: "sjsaa",
        name: "St. John's School DLW Alumni Association (SJSAA)",
        sectors: ["membership-community"],
        tagline: "A secure, self-service home for St. John's School DLW alumni — connecting members across India and beyond, one verified login at a time.",
        tags: ["Website Development"],
        services: ["website-development"],
        overview: "SJSAA needed more than a website — they needed a proper Alumni Data Management System for St. John's School, DLW, Varanasi. We built it on Next.js, hosted on Vercel, with a Drupal 7-based admin panel — our in-house Drupal 7 team has built this same style of admin architecture for several client sites over the years, though newer builds since 2025 use a Laravel-based admin panel instead. It's been running since 2024.\n\nThe core of the system is security and self-service: every alumnus's contact details are protected from public exposure, with access gated behind an OTP-secured login available only to verified fellow alumni. Once in, a member can update their own profile directly. New members go through a full registration and approval workflow rather than being added freely, and the admin panel lets the association manage Events, Activities, Achievements, and the Photo Gallery from one place. Because alumni-association leadership rotates every few years, the system is deliberately built so that day-to-day execution can be handed cleanly from one management committee to the next, without retraining or rebuilding anything.\n\nThat combination of security and ease of use shows up in how the site is actually used: the \"sjsaa\" branded search now ranks at an average position of 1.84 with a 29.83% click-through rate — the association effectively owns its own name in search. More tellingly for an alumni platform, traffic isn't just local: alongside clicks from India, alumni are finding and returning to the site from the US, Canada, the UAE, the UK, Saudi Arabia, and Australia — real evidence the platform is reaching a genuinely dispersed diaspora of old students, not just members still living in Varanasi.",
        highlights: [
            "Website built and running since 2024",
            "16-month cumulative: 616 clicks, 17,062 impressions, 3.61% average CTR, average position 8.97",
            "Branded search \"sjsaa\": position 1.84, 29.83% CTR",
            "International alumni reach in search traffic: India, plus the US, Canada, UAE, UK, Saudi Arabia, and Australia",
            "75% of clicks come from mobile, outranking desktop (position 7.81 vs. 11.25)",
        ],
        technicalOverview: {
            performance: "The same on-page SEO checklist applies across every public-facing page — Home, About Us, Events, Achievements, Gallery — optimised meta titles and descriptions, a clean header hierarchy, SEO-friendly URLs, and internal linking between related pages. On speed, images across the photo gallery are compressed, caching and asset minification are enabled, and the site is kept lightweight — standard hygiene applied consistently, even on a members-first platform where search traffic isn't the primary goal.",
            responsiveness: "Genuinely mobile-first in practice: 464 of the site's 616 total clicks (75%) come from mobile, at a stronger average position (7.81) than desktop (11.25). The site is fully responsive across device sizes, which matters here — alumni checking event updates or their own profile are doing it from a phone, not a desktop.",
            scalability: "Built on Next.js and Vercel with a Drupal 7-based admin panel, the data model is structured specifically to keep growing: new alumni, new batches, new events, and new photo albums all get added without touching the site's design or structure, and the admin handover process is built to survive a change in management committee every few years.",
            uiUxTheme: "A dark, premium institutional aesthetic — charcoal/black backgrounds with a gold/amber accent colour, the school crest and shield prominent in the header, and card-based layouts with circular photo avatars for committee members and alumni profiles. Navigation uses a clean dropdown mega-menu, and the mobile experience carries the same dark-and-gold identity through banner-style event announcements — the overall feel is heritage and trust rather than a casual community-app look.",
        },
        website: "https://www.sjsaa.com",
        screenshots: [
            { src: "/images/clients/sjsaa/showcase.webp", caption: "The Managing Committee page and real Search Console performance, including international alumni reach." },
        ],
        heroImage: "/images/clients/sjsaa/hero-illustration.webp",
        featured: true,
        imgHeight: "h-44",
    },

    {
        slug: "divine-soul-resonance",
        name: "Divine Soul Resonance by Archana Verma",
        sectors: ["personal-services"],
        tagline: "From a custom PHP website to a Next.js platform, supporting Archana's spiritual practice with content, clear enquiry paths, and growing search visibility.",
        tags: ["Website Development", "Advanced SEO", "Content Creation", "Social Media"],
        services: ["website-development", "seo-consultancy", "content-creation", "social-media", "video-editing", "graphic-designing", "analytics-reporting"],
        overview: "Divine Soul Resonance is Archana Verma's USA-based spiritual practice, offering tarot reading and chakra healing. We built her original website back in 2022 — a hardcoded PHP site — and in 2025 migrated the whole platform to Next.js, pairing it with a Laravel admin panel that manages her blog content and structure through the API. That gave her a real publishing workflow instead of a site where every new article meant a manual code change.\n\nFrom February through October 2025, we also handled her social media planning, video editing, and graphic design, supporting how her work is presented visually across platforms. Since February 2026, our focus has shifted to what's now the core of the engagement: website content creation and Advanced SEO.\n\nSearch visibility has been building steadily. Her name alone — \"divine soul resonance\" — now holds an average position of 2.36 on Google, pulling a strong 12.12% click-through rate. Across the wider site, a 16-month Search Console export shows 8,011 impressions and 114 clicks, with August 2026 recording the highest single-month impression total in that stretch — nearly double June's. Seven separate blog articles, including pieces on tarot reading and Reiki/chakra healing, are already generating their own independent search impressions, and just over 40% of all search visibility is coming from the USA, her core market, alongside meaningful activity from India, Canada, and Australia.\n\nClick-through hasn't caught up with that rising visibility yet, and we're not going to pretend otherwise. For a personal, trust-led spiritual practice, that's a familiar pattern — search impressions tend to climb before the click curve follows, and non-branded terms in a niche as specific as tarot and chakra work take longer to convert than they do to simply appear. This is exactly the kind of engagement where patience is part of the plan, not a footnote to it: visibility is the leading indicator, and we expect the rest to follow as the content and rankings mature.",
        highlights: [
            "8,011 search impressions and 114 clicks over a 16-month Search Console history",
            "Average position of 2.36 for the brand name \"divine soul resonance\" — a strong, stable page-1 ranking",
            "August 2026 was the highest complete month for impressions yet — nearly double June's total",
            "7 blog articles independently generating search impressions, including tarot reading and Reiki/chakra healing",
            "40%+ of search visibility comes from the USA, Archana's core market, alongside India, Canada, and Australia",
        ],
        technicalOverview: {
            performance: "The same standing on-page SEO checklist runs across the site — optimised meta titles and descriptions, a clean header hierarchy, descriptive image alt text, SEO-friendly URLs, internal linking, and current sitemap/robots.txt upkeep — alongside our standard speed-hygiene practices of image compression, caching, minification, and lazy-loading. This reflects our standing process on this build, not an independently measured Lighthouse audit.",
            responsiveness: "The site adapts cleanly across devices — desktop uses horizontal navigation with service links beside Archana's portrait, while mobile collapses to a hamburger menu with vertically stacked service cards. Real Google Search activity confirms meaningful use on both: desktop drove 60.5% of clicks and mobile 38.6% over the reporting period.",
            scalability: "Built on a Next.js frontend with Tailwind styling, paired with a Laravel admin panel that manages blog content and structure through API calls — separating content publishing from the frontend so a new article doesn't mean hardcoding a new page. Seven distinct blog URLs are already generating independent search impressions, showing the architecture supporting real content growth.",
            uiUxTheme: "A white background with rust and burnt-orange headings, golden-orange supporting text, generous whitespace, and a script-style \"Archana\" wordmark. The desktop hero pairs large left-aligned copy with a circular peacock-feather graphic, using Archana's own portrait as the page's visual anchor.",
        },
        website: "https://www.divinesoulresonance.com",
        links: [
            { label: "Instagram", url: "https://www.instagram.com/divinesoulresonance" },
            { label: "Facebook", url: "https://www.facebook.com/divinesoulresonance" },
            { label: "YouTube", url: "https://www.youtube.com/@DivineSoulResonance/featured" },
            { label: "Patreon", url: "https://www.patreon.com/DivineSoulResonance" },
        ],
        screenshots: [
            { src: "/images/clients/divine-soul-resonance/showcase.webp", caption: "The current Next.js website alongside real 16-month Search Console performance — 8,011 impressions and 114 clicks, with a 2.36 average position for the brand name search." },
        ],
        heroImage: "/images/clients/divine-soul-resonance/hero-illustration.webp",
        featured: true,
        imgHeight: "h-44",
    },
    {
        slug: "harish-chandra-pg-college",
        name: "Harish Chandra Post Graduate College",
        sectors: ["education"],
        tagline: "Wizards Next's oldest website partnership — carrying a 160-year-old Varanasi institution's legacy online since 2013, now reaching students across India.",
        tags: ["Website Development"],
        services: ["website-development"],
        overview: "Harish Chandra Post Graduate College was founded in 1866 by Bharatendu Harishchandra, the pioneering figure of modern Hindi literature, starting with just five students. A century and a half later, it's grown into one of Varanasi's premier government-aided institutions, running five full faculties — Arts, Commerce, Science, Education, and Law — under the Harish Chandra Vidyalaya Samiti.\n\nWe've been the college's website partner since 2013 — our longest-running relationship of any client on this site. The site started in core PHP and migrated to Drupal 7 in 2017, the platform it still runs on today. What makes this partnership distinctive is how directly the college relies on it day to day: admission merit lists, NCC notices, and holiday announcements all get published live by the college's own staff, not by us — in the second week of September 2026 alone, that included B.A., B.Sc., and B.Com admission merit lists going up in real time.\n\nThe site's E-Lectures section is its own story. It was built during the Covid-19 shift to online classes so faculty could upload study material directly — and it never went away. Reference PDFs originally meant for HCPG's own students, on topics from the Revolt of 1857 to physics diffraction, are now found and downloaded by students across India simply searching for that exact material. One history reference document alone has drawn more than 30,000 clicks from Google search.\n\nThat reach hasn't come at the expense of the college's own identity online: search for \"HCPG,\" \"Harishchandra PG College,\" or any close variant, and the site holds the #1 position, with click-through rates as high as 70–75%. And none of it — the daily administrative use, a nationally distributed student audience, consistently strong rankings — has cost the site any stability. It's carried this load on the same platform for more than a decade without major disruption.",
        highlights: [
            "796,604 clicks and 33,231,465 impressions from Google Search over the last 16 months",
            "Average search position improved from the low teens into single digits over the period",
            "Branded search dominance: \"hcpg,\" \"harishchandra pg college,\" and close variants rank at position ~1.1–1.3, with click-through rates up to 75%",
            "One E-Lectures reference PDF alone has drawn over 30,000 clicks from students nationwide",
            "85% of clicks come from mobile, at a stronger average position (6.5) than desktop (15.3)",
        ],
        technicalOverview: {
            performance: "Maintained under our standing on-page SEO checklist — meta titles and descriptions, proper header hierarchy, image alt text, SEO-friendly URLs, internal linking, and regular sitemap/robots.txt upkeep — plus the same speed-hygiene practices (image compression, caching, minification, lazy-loading) applied as ongoing maintenance, not a one-time setup.",
            responsiveness: "Backed by real device-split data: over the last 16 months, mobile accounts for 676,287 of the site's 796,604 total clicks, at a noticeably stronger average position (6.5) than desktop (15.3) — the site performs best precisely where its real audience is. The founder tribute and NIRF ranking sections reflow cleanly into a single-column mobile layout without losing the desktop content hierarchy.",
            scalability: "Runs on Drupal 7 with a self-service admin panel that college staff use directly to publish notices, merit lists, results, and official documents — no developer involvement needed for day-to-day updates. It also hosts a large, growing library of PDF study material through the E-Lectures section. Handling both a steady stream of administrative updates and heavy nationwide PDF traffic on the same platform for over a decade, without downtime, is the real proof of the architecture.",
            uiUxTheme: "A clean institutional palette of blue and white with red accents, built around a rotating hero image carousel of college events, a dedicated founder tribute section with portrait and couplet, and a structured \"Important News and Notice\" panel linking to admission forms, NIRF documents, and circulars. Navigation spans clear top-level menus — About Us, Management, Courses, Facilities, Faculty, Students, IQAC, News and Events, Alumni — each with dropdowns for deeper sections. Dense but well-organized, appropriate for an information hub serving students, faculty, and administration, and it reflows into single-column cards on mobile without losing the desktop hierarchy.",
        },
        website: "https://www.hcpgcollege.edu.in",
        screenshots: [
            { src: "/images/clients/harish-chandra-pg-college/showcase.webp", caption: "The live HCPG College website alongside its mobile view — the founder tribute and NIRF ranking sections reflowing cleanly into a single-column layout, backed by 796,604 clicks and 33.2M impressions from Google Search over 16 months." },
        ],
        heroImage: "/images/clients/harish-chandra-pg-college/hero-illustration.webp",
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
