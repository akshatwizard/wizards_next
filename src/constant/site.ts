// Single source of truth for the site's canonical URL and core business
// details — used by root metadata, sitemap.ts, robots.ts, and the
// Organization/LocalBusiness JSON-LD in layout.tsx.
//
// SITE_URL defaults to the current Vercel URL. Once a custom domain
// (e.g. wizards.co.in) is live, either set NEXT_PUBLIC_SITE_URL in the
// Vercel project's environment variables, or just update the fallback
// string below — nothing else needs to change.
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://wizards-next.vercel.app";

export const BUSINESS = {
    name: "Wizards Next LLP",
    legalName: "Wizards Next LLP",
    description:
        "Wizards Next is a full-service digital marketing agency — social media, branding, performance ads, SEO, and website development — serving clients across India.",
    telephone: "+91-73394-74554",
    email: "akshat@wizards.co.in",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
    foundingDate: "2023-06",
};
