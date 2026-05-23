import { Target, Sparkles, Globe, Video, LayoutTemplate, PenLine, ShoppingCart, BarChart3, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
    Icon: LucideIcon;
    name: string;
    desc: string;
    tags: string[];
    video: string
}

export const services: Service[] = [
    {
        Icon: Megaphone,
        name: "Social Media Marketing",
        desc: "Strategy, content, scheduling and community management across Instagram, Facebook, LinkedIn & more.",
        tags: ["Instagram", "Facebook", "LinkedIn"],
        video:"/video/vdo.mp4",
    },
    {
        Icon: Target,
        name: "Meta & Google Ads",
        desc: "Performance campaigns that target the right audience and turn ad spend into measurable revenue.",
        tags: ["Meta Ads", "Google Ads", "Retargeting"],
        video:"/video/vdo.mp4",
    },
    {
        Icon: Sparkles,
        name: "Brand Creation",
        desc: "Logo design, visual identity, brand guidelines and positioning that make you instantly recognisable.",
        tags: ["Logo", "Identity", "Guidelines"],
        video:"/video/vdo.mp4",
    },
    {
        Icon: Globe,
        name: "Web & App Development",
        desc: "Fast, conversion-focused websites, Shopify stores, and mobile apps built for real business goals.",
        tags: ["Shopify", "Web Dev", "Mobile App"],
        video:"/video/vdo.mp4",
    },
    {
        Icon: Video,
        name: "Video & Podcast",
        desc: "YouTube channel strategy, podcast setup, scripting, editing and thumbnail design for creators and brands.",
        tags: ["YouTube", "Podcast", "Editing"],
        video:"/video/vdo.mp4",
    },
    {
        Icon: LayoutTemplate,
        name: "Graphic Design",
        desc: "Scroll-stopping creatives — carousels, posters, motion graphics and ad visuals that get noticed.",
        tags: ["Carousels", "Posters", "Motion"],
        video:"/video/vdo.mp4",
    },
    {
        Icon: PenLine,
        name: "Content Strategy",
        desc: "Data-driven content calendars, copywriting, blog posts and SEO content that builds authority.",
        tags: ["SEO", "Copywriting", "Blogs"],
        video:"/video/vdo.mp4",
    },
    {
        Icon: ShoppingCart,
        name: "E-commerce & Shopify",
        desc: "End-to-end Shopify setup, product listing, payment integration and store optimisation.",
        tags: ["Shopify", "Products", "Payments"],
        video:"/video/vdo.mp4",
    },
    {
        Icon: BarChart3,
        name: "Analytics & Reporting",
        desc: "Monthly performance reports with insights, trend analysis and clear next-step recommendations.",
        tags: ["Reports", "Insights", "Tracking"],
        video:"/video/vdo.mp4",
    },
];