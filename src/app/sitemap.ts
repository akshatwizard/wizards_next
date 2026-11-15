import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constant/site";
import { ALL_SERVICES } from "@/constant/service_meta";
import { clients } from "@/constant/clients";
import { NavMenu } from "@/constant/menu";
import { POSTS } from "@/constant/blogs";

// Sector slugs are derived from the same nav data every sector link on the
// site already uses, so this list can't drift out of sync with the real
// routes — same "single source of truth" pattern as the client/service data.
const sectorPaths = (NavMenu.find((m) => m.name === "Sectors")?.subMenu ?? []).map(
    (s) => s.path
);

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
        { url: `${SITE_URL}/digital-marketing-agency-varanasi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/digital-marketing-agency-hyderabad`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/social-media-marketing-agency-varanasi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/seo-services-varanasi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/website-development-company-varanasi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/performance-marketing-agency-varanasi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/google-ads-agency-varanasi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/branding-agency-varanasi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/ecommerce-website-development-varanasi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/ivf-clinic-marketing-agency`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/dermatology-clinic-marketing-agency`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/social-media-marketing-agency-hyderabad`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/seo-services-hyderabad`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/website-development-company-hyderabad`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/healthcare-marketing-agency`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/healthcare-digital-marketing-hyderabad`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/services/personal-branding-for-doctors`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/sector`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/our-works`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${SITE_URL}/social-media-clients`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
        { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
        { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${SITE_URL}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
        { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
        { url: `${SITE_URL}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ];

    const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICES.map((s) => ({
        url: `${SITE_URL}/services/${s.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const sectorRoutes: MetadataRoute.Sitemap = sectorPaths.map((path) => ({
        url: `${SITE_URL}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const clientRoutes: MetadataRoute.Sitemap = clients.map((c) => ({
        url: `${SITE_URL}/our-works/${c.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const blogRoutes: MetadataRoute.Sitemap = [
        { url: `${SITE_URL}/blog`, lastModified: new Date(POSTS[0].dateModified), changeFrequency: "daily", priority: 0.7 },
        ...POSTS.map((p) => ({
            url: `${SITE_URL}/blog/${p.slug}`,
            lastModified: new Date(p.dateModified),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        })),
    ];

    return [...staticRoutes, ...serviceRoutes, ...sectorRoutes, ...clientRoutes, ...blogRoutes];
}
