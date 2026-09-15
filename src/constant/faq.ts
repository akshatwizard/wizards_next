export type FAQItem = {
    q: string;
    a: string;
    // Marks the 10 questions shown on the homepage's own FAQ section.
    // The full set below is always the source of truth — this just flags
    // which ones are promoted there. Everything appears on /faq regardless.
    homepage?: boolean;
};

export type FAQCategoryGroup = {
    category: string;
    items: FAQItem[];
};

export const FAQ_CATEGORIES: FAQCategoryGroup[] = [
    {
        category: "Getting Started",
        items: [
            {
                q: "How do I start working with Wizards Next?",
                a: "Reach out through our contact form or a quick call — we'll ask about your business, goals, and current setup, then send back a proposal scoped to what you actually need. Most engagements start within a week of that first conversation.",
                homepage: true,
            },
            {
                q: "What's the minimum budget to get started?",
                a: "Our service packages start from ₹15,000/month for social media management. Ad budgets are separate, typically starting around ₹10,000/month for meaningful reach. Every plan is scoped to your specific goals and budget, not a fixed package.",
                homepage: true,
            },
            {
                q: "Do you require a long-term contract?",
                a: "No lock-ins. We work on rolling monthly engagements — you stay because the work is holding up, not because a contract requires it.",
                homepage: true,
            },
            {
                q: "Can I start with just one service and add more later?",
                a: "Yes — most clients start with one service (often website development or social media) and add more as it proves out. A few use several services together from day one. Either way, it's the same team and standard throughout.",
                homepage: true,
            },
        ],
    },
    {
        category: "Services We Offer",
        items: [
            {
                q: "What services does Wizards Next actually offer?",
                a: "19 services across three groups: branding and identity (logo, graphic design, corporate profiles), digital marketing and growth (social media, ads, SEO, content, influencer marketing), and website and technology (development, e-commerce, AI consultancy). The full list is on our Services page.",
            },
            {
                q: "Can you handle everything — branding, website, and ads — under one roof?",
                a: "That's exactly what we're built for. One team, one point of contact — no coordination headache between separate vendors for each piece.",
                homepage: true,
            },
            {
                q: "Do you specialise in specific industries?",
                a: "We work across 12 sectors — healthcare, education, retail, e-commerce, hospitality, and more — each with an approach built around how that specific industry actually buys, not a generic template stretched across all of them. See our Sectors page for the full list.",
            },
            {
                q: "Do you offer AI consultancy?",
                a: "Yes. We help businesses adopt AI-assisted development and planning workflows — the same approach we use in our own practice, not theory we haven't tested ourselves.",
            },
        ],
    },
    {
        category: "Results & Timeline",
        items: [
            {
                q: "How long does it take to see results?",
                a: "It depends on the channel. Paid ads (Meta and Google) typically show meaningful traction within 2–4 weeks. Organic channels like SEO and content take longer — usually 3–6 months to build real momentum, sometimes more in competitive or niche industries. We're upfront about this rather than promising a launch-week spike: digital marketing results are a long game, and patience is part of the plan, not a footnote to it.",
                homepage: true,
            },
            {
                q: "Why do some of your case studies show impressions rising before clicks do?",
                a: "That's a genuinely common, expected pattern — especially for newer or niche-focused sites. Search visibility tends to build before the click-through curve catches up, as rankings mature and trust compounds. We report this honestly in every case study rather than dressing it up.",
            },
            {
                q: "How do you report on progress?",
                a: "Plain-language updates on what search, social, and ad activity is actually showing — real numbers from Search Console, ad platforms, and social insights, explained clearly, including when something hasn't moved yet and why that's not unusual at that stage.",
            },
            {
                q: "Do you guarantee specific rankings or results?",
                a: "No — nobody honestly can. What we commit to is disciplined, consistent execution and transparent reporting, which is what actually drives results over time.",
            },
        ],
    },
    {
        category: "Ownership & Working With Us",
        items: [
            {
                q: "Will I own the content and creatives you make for me?",
                a: "Yes — all deliverables, creatives, content, copy, and design files are 100% yours. We hand over full source files at the end of every project. No lock-ins, no watermarks, no strings attached.",
                homepage: true,
            },
            {
                q: "Who will I actually be working with?",
                a: "A dedicated point of contact who coordinates across our team, so you're never bounced between departments or chasing separate vendors for different pieces of the work.",
            },
            {
                q: "How often will we communicate?",
                a: "It depends on the engagement, but most clients get a standing check-in cadence plus ad hoc updates whenever something meaningful happens — a ranking milestone, a campaign result, a decision that needs your input.",
            },
        ],
    },
    {
        category: "Who We Work With",
        items: [
            {
                q: "Where is Wizards Next based?",
                a: "We have offices in Varanasi and Hyderabad, running 50+ projects across India.",
                homepage: true,
            },
            {
                q: "Do you work with clients outside India?",
                a: "Yes — alongside our India-wide client base, we currently work with clients in the USA, Russia, and Spain, all handled remotely with the same standard of communication and reporting.",
                homepage: true,
            },
            {
                q: "Do you work with small or solo-practice businesses?",
                a: "Yes — we work with everyone from solo practitioners and small local businesses to larger institutions and multi-branch operations, including a 160-year-old educational institution. The team and standard are the same regardless of size; the scope is sized to fit.",
                homepage: true,
            },
        ],
    },
];

// Flat homepage subset, derived from the categorized list above so
// there's one source of truth — never maintained as a separate list.
export const HOMEPAGE_FAQS: FAQItem[] = FAQ_CATEGORIES.flatMap((c) => c.items).filter(
    (item) => item.homepage
);
