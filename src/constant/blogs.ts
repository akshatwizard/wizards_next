// Blog posts for /blog and /blog/[slug]. Single source of truth: the blog
// index, post pages, sitemap and the (currently hidden) homepage blog section
// all read from POSTS. Body text supports inline links as [text](href).
// Rule: no invented stats, client results, quotes or news — cite sources.

export type Tag = string

export const BLOG_AUTHOR = {
    name: 'Ravi Khetan',
    jobTitle: 'Founder',
    org: 'Wizards Next LLP',
    initials: 'RK',
    display: 'Ravi Khetan, Founder, Wizards Next LLP',
}

export type BlogBlock =
    | { h2: string }
    | { h3: string }
    | { p: string }
    | { ul: string[] }
    | { ol: string[] }

export type BlogPost = {
    slug: string
    title: string // H1
    metaTitle: string // <title>, under 60 chars incl. brand suffix
    description: string // meta description
    keyword: string // one target keyword
    category: string
    tags: Tag[]
    datePublished: string // ISO date
    dateModified: string // ISO date
    readTime: string
    excerpt: string
    cover: string // /images/blog/<slug>.png, 1200x630
    body: BlogBlock[]
    faq?: { q: string; a: string }[]
    sources?: { label: string; url: string }[]
}

export const POSTS: BlogPost[] = [
    {
        slug: 'google-november-2026-core-update',
        title: 'Google November 2026 Core Update: What Businesses Should Do Now',
        metaTitle: 'Google November 2026 Core Update: What to Do',
        description: 'Google started the November 2026 core update on 10 Nov. What changed, how long the rollout takes, how to check your traffic in Search Console and what to fix.',
        keyword: 'Google November 2026 core update',
        category: 'SEO',
        tags: ['Google Core Update', 'SEO', 'AI Mode'],
        datePublished: '2026-11-13',
        dateModified: '2026-11-13',
        readTime: '6 min read',
        excerpt: 'Google’s third core update of 2026 began rolling out on 10 November and can take up to two weeks. Here is what it is, what not to panic about, and the exact steps to check your site once it finishes.',
        cover: '/images/blog/google-november-2026-core-update.png',
        body: [
            { p: 'On 10 November 2026, Google released the **November 2026 core update**. According to the [Google Search Status Dashboard](https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc), it “applies globally and to all languages” and “the rollout may take up to 2 weeks to complete.” If your website gets enquiries from Google — a clinic in Varanasi, a store in Hyderabad, an online brand selling across India — your rankings may move up or down over the next couple of weeks.' },
            { p: 'This post explains what a core update is, what Google has (and has not) said about this one, and a simple plan for checking your site once the rollout ends.' },
            { h2: 'What is a Google core update?' },
            { p: 'Google describes core updates as broad changes to its ranking systems, made several times a year. In its [core updates documentation](https://developers.google.com/search/updates/core-updates), Google says they “don’t target specific sites or individual web pages” — the aim is to keep its systems current as content on the web changes.' },
            { p: 'In other words, a drop after a core update is not a penalty. It usually means Google now judges other pages to be more helpful for that search than yours.' },
            { h2: 'What we know about the November 2026 core update' },
            { ul: [
                '**Start:** 10 November 2026, 10:06 a.m. US Pacific time (about 11:36 p.m. IST), per the [Search Status Dashboard](https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc).',
                '**Scope:** global, all languages — so Hindi and English results in India are both covered.',
                '**Duration:** up to two weeks. [Search Engine Journal](https://www.searchenginejournal.com/google-november-2026-core-update/596614/) notes a full two-week rollout would end around 24 November.',
                '**Google’s description:** “a regular update designed to better surface relevant, satisfying content for searchers from all types of sites,” as quoted by [Search Engine Land](https://searchengineland.com/google-november-2026-core-update-rolling-out-now-501348).',
                '**It is the third core update of 2026,** after the March and May core updates, according to Search Engine Journal.',
            ] },
            { p: 'Google has not published any new, update-specific guidance. Anyone claiming to know the “secret factor” behind this update is guessing.' },
            { h2: 'Two other Google changes landing at the same time' },
            { h3: 'Gemini 4 Hydrogen in AI Mode and AI Overviews' },
            { p: 'On 12 November, Google announced that [Gemini 4 Hydrogen is now in Google Search](https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/) for all users globally. Google says it improves intent understanding and “query fan-out”, connecting people to “a broader range of helpful links”, with more visual answers and better handling of all AI Mode languages. As [Search Engine Roundtable](https://www.seroundtable.com/google-search-gemini-4-hydrogen-42526.html) points out, this appears to affect AI Overviews and AI Mode rather than the core rankings — but it lands in the middle of the core update, so expect some noise in your data.' },
            { h3: 'Ads in AI Mode are now live in India' },
            { p: 'On 28 October, Google said it is [scaling ads in AI Mode to 10 new countries, including India](https://blog.google/products/ads-commerce/ads-in-ai-mode-global/). Google’s [help page](https://support.google.com/google-ads/answer/16297775) says existing Search, Shopping and Performance Max campaigns are automatically eligible — no new campaign or budget needed — and that AI Mode results are reported together with your normal campaign data, not separately. If you run Google Ads, a shift in your numbers this month may come from this, not from organic rankings.' },
            { h2: 'What to do during the rollout' },
            { ul: [
                '**Don’t make big changes yet.** Rankings often swing back and forth while an update rolls out. Rewriting or deleting pages now makes it impossible to tell what caused what.',
                '**Note your baseline.** Google suggests comparing against a week before the update started — so roughly 3–9 November 2026.',
                '**Keep publishing normally.** Useful new pages and fixes are fine; avoid “quick fix” edits made only because you read they are bad for SEO.',
            ] },
            { h2: 'How to check your site after the update finishes' },
            { p: 'Google’s own advice is to wait until the rollout is confirmed complete on the Status Dashboard, then wait at least one more full week before analysing.' },
            { ol: [
                'Open **Google Search Console → Performance → Search results**.',
                'Compare the week after completion with the week before 10 November.',
                'Sort by **Pages** and **Queries** to see which pages lost or gained clicks and average position.',
                'Treat small moves (for example position 2 to 4) as normal; Google itself recommends not changing content that is already performing well.',
                'For large drops (for example position 4 to 29), read Google’s [self-assessment questions on helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) and compare your page honestly with the pages now ranking above it.',
                'Check Web, Images and Video search types separately, as Google suggests.',
            ] },
            { h2: 'What tends to hold up through core updates' },
            { p: 'Google’s guidance has been consistent for years: content made for people, by people who know the subject, does best over time. For local businesses that usually means:' },
            { ul: [
                'Service pages that answer real customer questions — prices or price ranges where you can share them, process, timelines, areas served — instead of thin pages stuffed with keywords.',
                'Showing real experience: your own photos, real case studies, named authors and clear contact details.',
                'A complete, accurate Google Business Profile with genuine reviews, which matters for map results as much as your website does.',
                'A fast, mobile-friendly site with clean technical basics (titles, canonical tags, structured data, no broken pages).',
            ] },
            { p: 'If you want help reading your Search Console data after the update, our [SEO consultancy](/services/seo-consultancy) team does exactly this, and businesses in Varanasi can see our local work on the [SEO services in Varanasi](/seo-services-varanasi) page. You can also [book a free call](/book) or explore our full [digital marketing services in Varanasi](/digital-marketing-agency-varanasi).' },
        ],
        faq: [
            { q: 'When did the Google November 2026 core update start?', a: 'On 10 November 2026 at 10:06 a.m. US Pacific time (about 11:36 p.m. IST), according to the Google Search Status Dashboard.' },
            { q: 'How long will the November 2026 core update take?', a: 'Google says the rollout may take up to two weeks. If it uses the full time, it would finish around 24 November 2026.' },
            { q: 'My rankings dropped. Is my site penalised?', a: 'Not necessarily. Google says core updates do not target specific sites or pages. A drop usually means other pages are now seen as more helpful for that search. Wait until the rollout is complete, then compare Search Console data before and after.' },
            { q: 'Should I change my website during the rollout?', a: 'Avoid big changes until the update is complete and you have at least a week of data. Then focus on meaningful improvements to the pages that lost the most, not quick fixes.' },
        ],
        sources: [
            { label: 'Google Search Status Dashboard — November 2026 core update', url: 'https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc' },
            { label: 'Google Search Central — Core updates and your website', url: 'https://developers.google.com/search/updates/core-updates' },
            { label: 'Search Engine Journal — Google’s November 2026 core update starts rolling out', url: 'https://www.searchenginejournal.com/google-november-2026-core-update/596614/' },
            { label: 'Search Engine Land — Google November 2026 core update rolling out now', url: 'https://searchengineland.com/google-november-2026-core-update-rolling-out-now-501348' },
            { label: 'Google blog — Google Search gets a major upgrade with Gemini 4 Hydrogen', url: 'https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/' },
            { label: 'Google Ads & Commerce blog — Ads in AI Mode expand to new markets', url: 'https://blog.google/products/ads-commerce/ads-in-ai-mode-global/' },
            { label: 'Google Ads Help — About ads in AI-powered experiences in Google Search', url: 'https://support.google.com/google-ads/answer/16297775' },
        ],
    },
    {
        slug: 'grow-instagram-10k',
        title: 'How to Grow Instagram Followers Organically: A Practical Reels Guide',
        metaTitle: 'Grow Instagram Followers Organically | Wizards Next',
        description: 'How to grow Instagram followers organically without ads: how Instagram ranks Reels, what it hides, and a weekly content system any business can run.',
        keyword: 'grow Instagram followers organically',
        category: 'Social Media',
        tags: ['Instagram', 'Organic Growth', 'Reels'],
        datePublished: '2025-05-12',
        dateModified: '2026-11-13',
        readTime: '7 min read',
        excerpt: 'No growth hacks, no bought followers. How Instagram itself says it ranks Reels, what makes it show your content to fewer people, and a simple weekly system to grow an account organically.',
        cover: '/images/blog/grow-instagram-10k.png',
        body: [
            { p: 'Most businesses want more Instagram followers, but followers on their own don’t pay the bills — the right followers do. This guide covers how to **grow Instagram followers organically**, using what Instagram has publicly said about how it ranks content, and a content routine a small team can actually keep up.' },
            { h2: 'Start with how Instagram says it ranks Reels' },
            { p: 'Instagram has published an explainer, [Instagram Ranking Explained](https://about.instagram.com/blog/announcements/instagram-ranking-explained). The key points for Reels:' },
            { ul: [
                'Most of what people see in Reels comes from accounts they **don’t** follow. That is why Reels are the main way new people discover a business.',
                'Instagram says its most important predictions are how likely someone is to **reshare** a reel, **watch it all the way through**, **like** it, and **go to the audio page**.',
                'The main signals, in rough order, are the viewer’s own activity, their history of interacting with you, information about the reel (audio, visuals, popularity) and information about you as the poster.',
            ] },
            { p: 'So the practical goal is simple: make reels people finish and want to send to someone.' },
            { h2: 'What makes Instagram show your reels to fewer people' },
            { p: 'In the same explainer, Instagram says it aims to make some reels **less visible**, including:' },
            { ul: [
                'Low-resolution reels.',
                'Watermarked reels (for example, videos exported with another app’s logo on them).',
                'Muted reels, or reels with borders.',
                'Reels that are mostly text.',
                'Reels that have already been posted on Instagram (reposts of someone else’s content).',
            ] },
            { p: 'Fixing just these — shooting vertically in good light, exporting clean files, and making original content — removes the most common reasons a business account stalls.' },
            { h2: 'A weekly content system that works for small teams' },
            { h3: '1. Pick three content pillars' },
            { p: 'Choose three themes your ideal customer cares about. For a clinic that might be common patient questions, behind-the-scenes of the clinic, and patient education myths. For a retailer: new arrivals, how-to-use, and customer stories (with permission). Every post should fit one pillar.' },
            { h3: '2. Hook in the first seconds' },
            { p: 'Since watching to the end is one of the key predictions, open with the payoff or the question — “3 mistakes people make when…” — not a logo intro. Add on-screen captions; many people watch with sound off.' },
            { h3: '3. Make it worth sharing' },
            { p: 'Shares are one of the strongest signals Instagram names. Useful checklists, local tips, honest comparisons and relatable moments get sent to friends far more than pure promotion.' },
            { h3: '4. Post consistently, not constantly' },
            { p: 'A schedule you can keep for months beats a burst you abandon in two weeks. Batch-shoot once a week, edit, and schedule. Use Stories daily for lighter, behind-the-scenes updates to the followers you already have.' },
            { h3: '5. Reply and engage' },
            { p: 'Your history of interaction with a viewer is a ranking signal. Reply to comments and DMs quickly, and engage with accounts in your city and industry.' },
            { h2: 'Profile basics that turn views into followers' },
            { ul: [
                'A clear name field with what you do and where (e.g. “Dental Clinic | Varanasi”).',
                'A bio that says who you help and what to do next, with a working link.',
                'Highlights for services, prices or FAQs, reviews and location.',
                'Pinned posts that explain who you are to someone seeing your profile for the first time.',
            ] },
            { h2: 'What to measure' },
            { p: 'Use Instagram’s built-in insights. Track, per reel: accounts reached (especially non-followers), average watch time, shares and saves, and profile visits and follows. Double down on formats that earn shares and completions; drop the ones that don’t.' },
            { h2: 'What to avoid' },
            { ul: [
                'Buying followers or using engagement pods — they add accounts that never buy and can mislead your insights.',
                'Reposting other creators’ videos — Instagram says it reduces visibility of content already posted on Instagram.',
                'Chasing trends that have nothing to do with your business.',
            ] },
            { p: 'If you’d rather have a team plan, shoot and manage this for you, see our [social media management](/services/social-media) service, our [video editing](/services/video-editing) work, or — for Varanasi businesses — our [social media marketing agency in Varanasi](/social-media-marketing-agency-varanasi) page. You can also [book a free call](/book).' },
        ],
        faq: [
            { q: 'How can I grow Instagram followers organically?', a: 'Post original Reels people watch to the end and share, keep a consistent weekly schedule, reply to comments and DMs, and set up a clear profile that tells new visitors what you do and where.' },
            { q: 'Does Instagram reduce reach for reposted or watermarked videos?', a: 'Yes. Instagram’s ranking explainer says it aims to make low-resolution, watermarked, muted, bordered, mostly-text and already-posted reels less visible.' },
            { q: 'Should a business buy Instagram followers?', a: 'No. Bought followers do not become customers and make your insights unreliable. Organic growth from the right audience is what leads to enquiries.' },
        ],
        sources: [
            { label: 'Instagram — Instagram Ranking Explained', url: 'https://about.instagram.com/blog/announcements/instagram-ranking-explained' },
            { label: 'Instagram for Creators', url: 'https://creators.instagram.com/' },
        ],
    },
    {
        slug: 'meta-ads-2025',
        title: 'Meta Ads Strategy for Small Businesses: What Works in 2026',
        metaTitle: 'Meta Ads Strategy for Small Businesses | Wizards',
        description: 'A practical Meta ads strategy for small businesses in India: tracking with Pixel and Conversions API, simple campaign structure, Advantage+ and creative testing.',
        keyword: 'Meta ads strategy for small businesses',
        category: 'Ads',
        tags: ['Meta Ads', 'Performance'],
        datePublished: '2025-05-03',
        dateModified: '2026-11-13',
        readTime: '6 min read',
        excerpt: 'Good Meta ads start before the ad: clean tracking, a simple account structure, and a steady supply of creative. A practical checklist for small businesses.',
        cover: '/images/blog/meta-ads-2025.png',
        body: [
            { p: 'Facebook and Instagram ads can bring steady enquiries and sales for a small business — or burn through budget fast. This **Meta ads strategy for small businesses** focuses on the parts you control: tracking, structure, creative and how you judge results.' },
            { h2: '1. Fix tracking before you spend' },
            { p: 'Meta’s delivery system optimises toward the events you send it. If it can’t see your leads or purchases, it can’t find more people like those customers.' },
            { ul: [
                'Install the [Meta Pixel](https://www.facebook.com/business/help/742478679120153) on your website and confirm the events that matter (Lead, Purchase, Contact) fire correctly.',
                'Add the [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api), which sends events from your server, so tracking holds up when browsers block cookies or scripts.',
                'For WhatsApp or call leads, decide how you’ll record which ones became customers — even a simple sheet — so you judge campaigns on real outcomes, not just form fills.',
            ] },
            { h2: '2. Keep the account structure simple' },
            { p: 'Small budgets split across many campaigns and ad sets each get too little data to learn from. A simpler structure usually works better:' },
            { ul: [
                'One campaign per real business goal (for example, leads for a clinic, or sales for an online store).',
                'Broad targeting in your service area, letting Meta’s system find buyers, rather than many narrow interest groups.',
                'A separate, smaller retargeting effort for website visitors and people who engaged with your Instagram or Facebook.',
            ] },
            { h2: '3. Understand Advantage+' },
            { p: 'Meta’s [Advantage+](https://www.facebook.com/business/ads/meta-advantage) tools use its AI to automate parts of a campaign — audience, placements, budget and creative variations. They can save time, but they work best with good conversion tracking and a range of creatives to choose from. Review where results are coming from rather than switching everything on blindly.' },
            { h2: '4. Creative is the biggest lever' },
            { p: 'With broad targeting, the ad itself does most of the work of finding the right person. Plan a steady flow of new creatives:' },
            { ul: [
                'Vertical video for Reels and Stories, with captions and the main message in the first seconds.',
                'Different angles for the same offer: a problem-solution ad, a demonstration, a founder talking to camera, a real customer story (with permission).',
                'Clear, honest offers and a single call to action — WhatsApp, call, or a fast landing page.',
                'Refresh creative when results start to slip, rather than raising the budget on a tired ad.',
            ] },
            { h2: '5. Send clicks somewhere that converts' },
            { p: 'A slow or confusing landing page wastes paid clicks. Make sure the page loads quickly on mobile, matches the ad’s promise, and has one obvious next step. For local services, show your address, hours and phone number clearly.' },
            { h2: '6. Judge results on business outcomes' },
            { ul: [
                'Look at cost per qualified lead or cost per sale, not just cost per click.',
                'Give campaigns enough time and conversions to stabilise before judging them; avoid editing them every day.',
                'Compare ad-reported results with your own records (CRM, sheet, store orders) every month.',
            ] },
            { h2: 'Common mistakes' },
            { ul: [
                'Boosting posts with no clear goal or tracking.',
                'Running the same creative for months.',
                'Targeting too narrowly for the budget.',
                'Sending traffic to the homepage instead of a page built for the offer.',
            ] },
            { p: 'Want a team to set up tracking, campaigns and creative for you? See our [Google & Meta ads management](/services/google-meta-ads-management) and [performance marketing](/services/performance-marketing) services, or our [performance marketing agency in Varanasi](/performance-marketing-agency-varanasi) page. [Book a free call](/book) to talk it through.' },
        ],
        faq: [
            { q: 'What is the best Meta ads strategy for a small business?', a: 'Set up accurate tracking (Meta Pixel plus Conversions API), keep a simple campaign structure with broad targeting in your service area, test several creatives, and judge results by cost per qualified lead or sale.' },
            { q: 'What is the Meta Conversions API?', a: 'It is Meta’s way of sending conversion events from your server rather than only from the browser, which makes tracking more reliable when cookies or scripts are blocked.' },
            { q: 'Should I use Meta Advantage+?', a: 'It can help once your tracking is reliable and you have several creatives for it to test. Review results regularly instead of turning every automated option on by default.' },
        ],
        sources: [
            { label: 'Meta Business Help Center — About Meta Pixel', url: 'https://www.facebook.com/business/help/742478679120153' },
            { label: 'Meta for Developers — Conversions API', url: 'https://developers.facebook.com/docs/marketing-api/conversions-api' },
            { label: 'Meta — Meta Advantage', url: 'https://www.facebook.com/business/ads/meta-advantage' },
        ],
    },
    {
        slug: 'logo-vs-brand',
        title: 'Logo vs Brand: Why Your Logo Isn’t Your Brand',
        metaTitle: 'Logo vs Brand: What’s the Difference? | Wizards',
        description: 'Logo vs brand explained: a logo is one symbol, a brand is what people think and feel about you. The building blocks of a brand and how to build one.',
        keyword: 'logo vs brand',
        category: 'Branding',
        tags: ['Branding', 'Identity'],
        datePublished: '2025-04-24',
        dateModified: '2026-11-13',
        readTime: '5 min read',
        excerpt: 'A logo is a signature. A brand is the reputation behind it. What actually makes up a brand, and how a small business can build one deliberately.',
        cover: '/images/blog/logo-vs-brand.png',
        body: [
            { p: 'Many businesses start “branding” by ordering a logo — and then wonder why nothing changes. The **logo vs brand** confusion is common, and clearing it up helps you spend your time and money where it actually matters.' },
            { h2: 'What a logo is' },
            { p: 'A logo is a symbol or wordmark that identifies your business. It works like a signature: it helps people recognise you quickly on a signboard, a package, a post or a website. A good logo is simple, readable at small sizes, and works in one colour.' },
            { h2: 'What a brand is' },
            { p: 'A brand is what people think, feel and expect when they hear your name. It is built from every experience they have with you — your service, your prices, your staff, your content, your reviews, how you answer the phone. The logo is a reminder of that reputation; it isn’t the reputation itself.' },
            { h2: 'The building blocks of a brand' },
            { h3: 'Positioning' },
            { p: 'Who you serve, what you do for them, and why they should choose you over the alternatives. If you can’t say this in one sentence, customers won’t be able to either.' },
            { h3: 'Personality and voice' },
            { p: 'How you sound — warm or formal, playful or expert. Your captions, website copy, WhatsApp replies and staff conversations should all sound like the same business.' },
            { h3: 'Visual identity' },
            { p: 'The logo plus colours, typography, photo style and layout rules. Used consistently, these make your posts and materials recognisable even before people see your name.' },
            { h3: 'Customer experience' },
            { p: 'Delivery on the promise: response times, quality, after-sales care. This is where most brands are really made or broken.' },
            { h3: 'Proof' },
            { p: 'Genuine reviews, case studies and word of mouth. What others say about you carries more weight than what you say about yourself.' },
            { h2: 'Signs your brand needs work (not just your logo)' },
            { ul: [
                'Customers mainly compare you on price.',
                'Your social media, website and shop all look and sound different.',
                'Your team describes the business in different ways.',
                'People like your service but can’t explain why to a friend.',
            ] },
            { h2: 'How to build a brand step by step' },
            { ol: [
                'Write down your positioning: audience, problem, promise, and what makes you different.',
                'Define three to five words for your brand personality and use them to guide all copy.',
                'Create or refresh the visual identity — logo, colours, fonts — and put it in a simple brand guide.',
                'Apply it everywhere: website, Google Business Profile, Instagram, packaging, signage, uniforms.',
                'Fix the experience gaps customers complain about, then collect reviews and stories that prove the promise.',
            ] },
            { p: 'A logo is still important — it is the visual shortcut to everything above. It just works best when there’s a clear brand behind it.' },
            { p: 'If you want help with positioning, identity and a brand guide, see our [brand creation](/services/brand-designing) and [graphic design](/services/graphic-designing) services, or explore our [digital marketing agency in Varanasi](/digital-marketing-agency-varanasi). [Book a free call](/book) to start.' },
        ],
        faq: [
            { q: 'What is the difference between a logo and a brand?', a: 'A logo is a visual symbol that identifies your business. A brand is the overall reputation and set of expectations people have about you, built from every interaction with your business.' },
            { q: 'Do I need a new logo to rebrand?', a: 'Not always. If your positioning, messaging or customer experience is the problem, a new logo alone won’t fix it. Start with strategy, then decide whether the visual identity needs to change.' },
        ],
    },
    {
        slug: 'shopify-checklist',
        title: 'Shopify Store Launch Checklist: 12 Things to Do Before You Go Live',
        metaTitle: 'Shopify Store Launch Checklist (12 Steps) | Wizards',
        description: 'A Shopify store launch checklist for Indian brands: domain, payments, test orders, shipping, taxes, policies, product pages, SEO, speed and analytics.',
        keyword: 'Shopify store launch checklist',
        category: 'E-Commerce',
        tags: ['Shopify', 'E-Commerce'],
        datePublished: '2025-04-15',
        dateModified: '2026-11-13',
        readTime: '7 min read',
        excerpt: 'Before you announce your new Shopify store, run through these 12 checks — from test orders and policies to SEO and analytics — so your first customers get a smooth experience.',
        cover: '/images/blog/shopify-checklist.png',
        body: [
            { p: 'Launching a Shopify store is exciting, but small setup gaps — a payment method that fails, missing policies, a broken shipping rate — can cost you your first customers. Use this **Shopify store launch checklist** before you go live.' },
            { h2: 'Store setup' },
            { h3: '1. Connect your own domain' },
            { p: 'Use your brand domain (for example yourbrand.in or .com) rather than the default myshopify address, and make sure it opens over HTTPS. Set the version customers should see as the primary domain.' },
            { h3: '2. Set up payments and place a test order' },
            { p: 'Activate the payment methods your customers expect — UPI, cards, netbanking, and cash on delivery if you offer it. Shopify recommends placing at least one test order during setup; its help centre explains how to use a [test payment gateway or test mode](https://help.shopify.com/en/manual/checkout-settings/test-orders). Remember customers can’t place live orders while payments are in test mode, so switch it off before launch.' },
            { h3: '3. Configure shipping' },
            { p: 'Set shipping zones and rates that match your courier costs, including any free-shipping threshold. Check delivery estimates and that COD charges (if any) are shown clearly.' },
            { h3: '4. Set up taxes' },
            { p: 'Configure tax settings for your business with your CA’s guidance, and check that prices, invoices and the order confirmation show tax correctly.' },
            { h3: '5. Publish your store policies' },
            { p: 'Add refund/return, privacy, terms of service, shipping and contact information pages and link them in the footer. Clear policies reduce support queries and build trust. Have your legal or compliance adviser confirm what Indian e-commerce rules require for your business.' },
            { h2: 'Products and content' },
            { h3: '6. Complete every product page' },
            { p: 'Good photos from several angles, honest descriptions, sizes or specifications, variants, accurate stock, and the price including or excluding tax as you’ve decided. Answer the questions customers would ask in-store.' },
            { h3: '7. Organise collections and navigation' },
            { p: 'Group products into collections that match how people shop, and keep the main menu short. Make search and filters work on mobile.' },
            { h3: '8. Write SEO titles and descriptions' },
            { p: 'Give each product, collection and page a unique title and meta description, use descriptive image alt text, and keep URLs short and readable. This is the foundation of getting found on Google.' },
            { h2: 'Performance and trust' },
            { h3: '9. Check speed on mobile' },
            { p: 'Most customers will shop on their phones. Compress images, remove apps you don’t use, and test key pages with Google PageSpeed Insights.' },
            { h3: '10. Test the full customer journey' },
            { p: 'On a real phone: find a product, add to cart, apply a discount code, check out, and confirm you receive the order confirmation email or message. Then test a cancellation and refund.' },
            { h2: 'Measurement and launch' },
            { h3: '11. Set up analytics and pixels' },
            { p: 'Connect Google Analytics 4 and the Meta Pixel (through the official sales channel apps) so you can measure traffic, add-to-carts and purchases from day one.' },
            { h3: '12. Plan your launch and after-sales' },
            { p: 'Prepare your launch posts, WhatsApp broadcast or email, and a simple process for packing, dispatch, customer queries and reviews. Ask your first happy customers for reviews.' },
            { p: 'Need a team to build or run your store? See our [e-commerce website development](/services/ecommerce-development) and [e-commerce management](/services/ecommerce-management) services, or our [website development company in Varanasi](/website-development-company-varanasi) page. [Book a free call](/book).' },
        ],
        faq: [
            { q: 'What should I check before launching a Shopify store?', a: 'Domain, payments with a test order, shipping, taxes, store policies, complete product pages, navigation, SEO titles, mobile speed, a full checkout test, analytics, and a launch and after-sales plan.' },
            { q: 'How do I place a test order on Shopify?', a: 'Use Shopify’s test payment gateway, or Shopify Payments’ test mode, as explained in the Shopify Help Center. Switch test mode off before you launch, as customers can’t place live orders while it is on.' },
        ],
        sources: [
            { label: 'Shopify Help Center — Placing a test order', url: 'https://help.shopify.com/en/manual/checkout-settings/test-orders' },
            { label: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
        ],
    },
]

export function getPost(slug: string): BlogPost | undefined {
    return POSTS.find((p) => p.slug === slug)
}

export function formatBlogDate(iso: string): string {
    return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
}

// ---- Homepage blog section (components/blogs.tsx, currently hidden) ----
export type FeaturedPost = {
    category: string
    author: { initials: string; name: string }
    date: string
    readTime: string
    title: string
    excerpt: string
    tags: Tag[]
    href: string
}

export type SmallPost = {
    category: string
    date: string
    readTime: string
    title: string
    tags: Tag[]
    href: string
}

export const FEATURED: FeaturedPost = {
    category: POSTS[0].category,
    author: { initials: BLOG_AUTHOR.initials, name: BLOG_AUTHOR.display },
    date: formatBlogDate(POSTS[0].datePublished),
    readTime: POSTS[0].readTime,
    title: POSTS[0].title,
    excerpt: POSTS[0].excerpt,
    tags: POSTS[0].tags,
    href: `/blog/${POSTS[0].slug}`,
}

export const SMALL_POSTS: SmallPost[] = POSTS.slice(1, 4).map((p) => ({
    category: p.category,
    date: formatBlogDate(p.dateModified),
    readTime: p.readTime,
    title: p.title,
    tags: p.tags,
    href: `/blog/${p.slug}`,
}))
