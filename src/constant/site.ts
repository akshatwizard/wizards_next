// Single source of truth for the site's canonical URL and core business
// details — used by root metadata, sitemap.ts, robots.ts, the
// Organization/LocalBusiness JSON-LD in layout.tsx, and the email templates
// (lib/email-templates.ts) for absolute image/link URLs.
//
// Production domain: https://www.wizards.co.in
// NEXT_PUBLIC_SITE_URL can still override this per-environment (e.g. a
// staging URL) without touching code.
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.wizards.co.in";

// Google Analytics 4 measurement ID, wired up in layout.tsx via
// @next/third-parties/google. NEXT_PUBLIC_GA_ID overrides this per
// environment (e.g. a separate GA property for staging) without a code
// change; this is the real production ID as the default so it works with
// zero extra setup on Vercel.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-RR0DWW6W1N";

export const BUSINESS = {
    name: "Wizards Next LLP",
    legalName: "Wizards Next LLP",
    description:
        "Wizards Next is a full-service digital marketing agency based in Varanasi, running 50+ projects across India (including clients in Hyderabad) — plus overseas clients in the USA, Russia, and Spain. Social media, branding, performance ads, SEO, and website development, under one roof.",
    telephone: "+91-80721-99651",
    email: "admin@wizards.co.in",
    // NAP as published on the Google Business Profile (Ravi confirmed the
    // map pin on 14 Nov 2026). Kept in sync with /contact and the Varanasi page.
    streetAddress: "No 3, D59/127 A-1-4, Nirala Nagar Rd, Nirala Nagar, Shivepurva, Mahmoorganj",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "221010",
    addressCountry: "IN",
    latitude: 25.3080027,
    longitude: 82.9778417,
    foundingDate: "2023-06",
    // Countries with an active, real client relationship today — used by
    // the Organization JSON-LD's areaServed. India is the primary market;
    // these three are the current overseas footprint. Add to this list as
    // the roster genuinely grows — never pad it for appearances.
    overseasCountries: ["United States", "Russia", "Spain"],
};

// Official profiles already linked in the footer, plus the Google Business Profile.
export const SAME_AS = [
    "https://www.instagram.com/wizards.digital/",
    "https://www.facebook.com/wizardsdigital/",
    "https://in.linkedin.com/company/wizardsnext",
    "https://share.google/zYiIe2jRbaZmqOOWi",
];

export const HAS_MAP = `https://www.google.com/maps/search/?api=1&query=${BUSINESS.latitude},${BUSINESS.longitude}`;
