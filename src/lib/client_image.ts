import { smmClients } from "@/constant/smm_clients";

// Instagram profile picture for SMM clients; logo from the client's own website otherwise.
const websiteLogos = new Set(["gd-sons", "ganga-papers-india", "clinica-derm", "travel-zone", "shagun-centre", "sjsaa", "divine-soul-resonance", "harish-chandra-pg-college"]);

export const clientLogo = (slug: string) =>
    smmClients.find((c) => c.slug === slug)?.avatar ?? (websiteLogos.has(slug) ? `/images/clients/${slug}/logo.webp` : undefined);
