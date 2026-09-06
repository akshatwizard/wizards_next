import { MenuType } from "@/types/menu.types";

export const NavMenu: MenuType[] = [
    {
        name: "_hello",
        path: "/",
        subMenu: null
    },
    {
        name: "About",
        path: "/about",
        subMenu: null
    },
    {
        name: "Services",
        path: "/services",
        subMenu: [
            { name: "Social Media Planning & Management", path: "/services/social-media" },
            { name: "Content Creation", path: "/services/content-creation" },
            { name: "Videography", path: "/services/videography" },
            { name: "Video Editing", path: "/services/video-editing" },
            { name: "Influencer Marketing", path: "/services/influencer-marketing" },
            { name: "Performance Marketing", path: "/services/performance-marketing" },
            { name: "Google & Meta Ads Management", path: "/services/google-meta-ads-management" },
            { name: "WhatsApp Marketing", path: "/services/whatsapp-marketing" },
            { name: "Email Marketing", path: "/services/email-marketing" },
            { name: "SEO Consultancy", path: "/services/seo-consultancy" },
            { name: "Analytics & Reporting", path: "/services/analytics-reporting" },
            { name: "Brand Creation", path: "/services/brand-designing" },
            { name: "Graphic Design", path: "/services/graphic-designing" },
            { name: "Corporate Profile Creation", path: "/services/corporate-profile-creation" },
            { name: "Website Development", path: "/services/website-development" },
            { name: "Mobile App Development", path: "/services/app-dev" },
            { name: "E-Commerce Website Development", path: "/services/ecommerce-development" },
            { name: "E-Commerce Business Management", path: "/services/ecommerce-management" },
            { name: "AI Consultancy", path: "/services/ai-consultancy" },
        ]
    },
    {
        name: "Sectors",
        path: "/sector",
        subMenu: [
            { name: "Healthcare", path: "/sector/healthcare" },
            { name: "Travel & Tourism", path: "/sector/travel-and-tourism" },
            { name: "FMCG", path: "/sector/fmcg" },
            { name: "Education", path: "/sector/education" },
            { name: "Automotive", path: "/sector/automotive" },
            { name: "Retail", path: "/sector/retail" },
            { name: "Corporate", path: "/sector/corporate" },
            { name: "E-Commerce", path: "/sector/e-commerce" },
            { name: "Food & Dining", path: "/sector/food-and-dining" },
            { name: "Local Services", path: "/sector/local-services" },
        ]
    },
    {
        name: "Our Works",
        path: "/our-works",
        subMenu: null
    },
    {
        name: "Blogs",
        path: "/blogs",
        subMenu: null
    },
    {
        name: "Contact",
        path: "/contact",
        subMenu: null
    }
]
