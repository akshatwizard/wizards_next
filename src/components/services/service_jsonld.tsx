"use client";
import { usePathname } from "next/navigation";
import { getServiceMeta } from "@/constant/service_meta";
import { SITE_URL } from "@/constant/site";

// Service + BreadcrumbList structured data for every /services/<slug> page,
// built from the same name/description shown in the services menu
// (constant/service_meta). Client component only to read the path; it is
// still server-rendered. Provider is the Varanasi office (the only office);
// areaServed India — no city-level claims here.
const EXTRA: Record<string, { name: string; desc: string }> = {
    "personal-branding-for-doctors": { name: "Personal Branding for Doctors", desc: "Personal branding for doctors, dentists and clinics in India — a trustworthy, guideline-compliant Instagram presence." },
};

export default function ServiceJsonLd() {
    const path = (usePathname() || "").replace(/\/$/, "");
    const slug = path.split("/")[2];
    if (!slug) return null;
    const meta = getServiceMeta(slug) ?? EXTRA[slug];
    if (!meta) return null;
    const desc = "desc" in meta ? meta.desc : "";
    const url = `${SITE_URL}/services/${slug}`;
    const data = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            name: meta.name,
            serviceType: meta.name,
            description: desc,
            url,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "Country", name: "India" },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                { "@type": "ListItem", position: 3, name: meta.name, item: url },
            ],
        },
    ];
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
