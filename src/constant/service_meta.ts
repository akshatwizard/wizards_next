export type ServiceMeta = { slug: string; name: string; desc: string; pillar: 'Branding & Identity' | 'Digital Marketing & Growth' | 'Website, Technology & AI' }

// Single source of truth for service name/description text. Icon images
// live at /images/services/icons/[slug]-icon.webp — derived from the slug,
// not stored here, so there's one less place for that to drift.
export const ALL_SERVICES: ServiceMeta[] = [
    { slug: 'brand-designing', name: 'Brand Creation', desc: 'Logo, identity, and guidelines that make you instantly recognisable.', pillar: 'Branding & Identity' },
    { slug: 'graphic-designing', name: 'Graphic Design', desc: 'Scroll-stopping creative — carousels, posters, and ad visuals.', pillar: 'Branding & Identity' },
    { slug: 'corporate-profile-creation', name: 'Corporate Profile Creation', desc: 'Professional company profiles, on video and in print.', pillar: 'Branding & Identity' },
    { slug: 'social-media', name: 'Social Media Planning & Management', desc: 'Strategy, content, and community management, done consistently.', pillar: 'Digital Marketing & Growth' },
    { slug: 'content-creation', name: 'Content Creation', desc: 'Blog posts, captions, and copy that sound like your brand.', pillar: 'Digital Marketing & Growth' },
    { slug: 'videography', name: 'Videography', desc: 'Professional filming, on location or in studio.', pillar: 'Digital Marketing & Growth' },
    { slug: 'video-editing', name: 'Video Editing', desc: 'Reels, YouTube videos, and ad creative, cut for the platform.', pillar: 'Digital Marketing & Growth' },
    { slug: 'influencer-marketing', name: 'Influencer Marketing', desc: 'Matched with creators whose audience actually converts.', pillar: 'Digital Marketing & Growth' },
    { slug: 'performance-marketing', name: 'Performance Marketing', desc: 'Budget strategy across paid channels, tied to real ROI.', pillar: 'Digital Marketing & Growth' },
    { slug: 'google-meta-ads-management', name: 'Google & Meta Ads Management', desc: 'Hands-on campaign management, tested and optimised weekly.', pillar: 'Digital Marketing & Growth' },
    { slug: 'whatsapp-marketing', name: 'WhatsApp Marketing', desc: 'Catalogs, broadcasts, and automation on WhatsApp Business.', pillar: 'Digital Marketing & Growth' },
    { slug: 'email-marketing', name: 'Email Marketing', desc: 'Newsletters and automation on the channel you actually own.', pillar: 'Digital Marketing & Growth' },
    { slug: 'seo-consultancy', name: 'SEO Consultancy', desc: 'SEO built for how search actually works in your market.', pillar: 'Digital Marketing & Growth' },
    { slug: 'analytics-reporting', name: 'Analytics & Reporting', desc: 'Clear dashboards and plain-language monthly reporting.', pillar: 'Digital Marketing & Growth' },
    { slug: 'website-development', name: 'Website Development', desc: 'Fast, conversion-focused websites on modern frameworks.', pillar: 'Website, Technology & AI' },
    { slug: 'app-dev', name: 'Mobile App Development', desc: 'iOS and Android apps built for a real business goal.', pillar: 'Website, Technology & AI' },
    { slug: 'ecommerce-development', name: 'E-Commerce Website Development', desc: 'Online stores built to actually sell.', pillar: 'Website, Technology & AI' },
    { slug: 'ecommerce-management', name: 'E-Commerce Business Management', desc: 'Keeping your store running well after launch.', pillar: 'Website, Technology & AI' },
    { slug: 'ai-consultancy', name: 'AI Consultancy', desc: 'Helping your team adopt the AI workflow we run ourselves.', pillar: 'Website, Technology & AI' },
]

export function getServiceMeta(slug: string): ServiceMeta | undefined {
    return ALL_SERVICES.find((s) => s.slug === slug)
}
