export interface CareerRole {
    id: string;
    title: string;
    department: string;
    type: string;
    location: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
}

// Placeholder roles — generic and illustrative. Replace with real open
// positions (or remove entries) before this goes live.
export const openRoles: CareerRole[] = [
    {
        id: "seo-executive",
        title: "SEO Executive",
        department: "SEO",
        type: "Full-time",
        location: "Varanasi · On-site",
        description:
            "Support SEO strategy and execution across client accounts — keyword research, on-page optimisation, and monthly reporting.",
        responsibilities: [
            "Conduct keyword research and competitor analysis",
            "Execute on-page and technical SEO fixes",
            "Support content team with SEO-aligned briefs",
            "Track rankings and prepare client reports",
        ],
        requirements: [
            "0–2 years of SEO experience — strong fundamentals matter more than years",
            "Familiarity with tools like Google Search Console and keyword research platforms",
            "Clear written English for client-facing reporting",
        ],
    },
    {
        id: "content-writer",
        title: "Content Writer",
        department: "Content",
        type: "Full-time",
        location: "Varanasi · On-site",
        description:
            "Write across blogs, social captions, and website copy for clients spanning healthcare, retail, education, and more.",
        responsibilities: [
            "Write blog posts, captions, and web copy to brief",
            "Adapt tone and language across English, Hindi, and Hinglish as needed",
            "Coordinate with the SEO team on content targeting",
        ],
        requirements: [
            "Strong written English; Hindi/Hinglish fluency is a plus",
            "A portfolio of writing samples",
            "Comfortable holding several distinct client voices at once",
        ],
    },
    {
        id: "social-media-executive",
        title: "Social Media Executive",
        department: "Digital Marketing",
        type: "Full-time",
        location: "Varanasi · On-site",
        description:
            "Manage content calendars, scheduling, and community management across client social accounts.",
        responsibilities: [
            "Plan and maintain monthly content calendars",
            "Schedule posts and manage community responses",
            "Coordinate with design and video teams for asset production",
        ],
        requirements: [
            "Hands-on experience managing Instagram/Facebook/LinkedIn for a brand or business",
            "Comfortable with scheduling tools and basic analytics",
        ],
    },
    {
        id: "frontend-developer",
        title: "Frontend Developer — Next.js",
        department: "Development",
        type: "Full-time",
        location: "Varanasi · On-site",
        description:
            "Build and maintain client websites and web apps across the Next.js and React stack.",
        responsibilities: [
            "Build responsive, performant pages from design handoff",
            "Integrate with backend APIs and data sources",
            "Maintain and extend the internal component library",
        ],
        requirements: [
            "Solid React and Next.js experience",
            "Comfortable with Tailwind CSS and TypeScript",
            "Attention to performance and accessibility",
        ],
    },
];
