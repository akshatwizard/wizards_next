import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constant/site";
import { ALL_SERVICES } from "@/constant/service_meta";
import { clients } from "@/constant/clients";
import { NavMenu } from "@/constant/menu";

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
        { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/our-works`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
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

    return [...staticRoutes, ...serviceRoutes, ...sectorRoutes, ...clientRoutes];
}
