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

export type BlogFigure = {
    src: string
    alt: string
    caption: string
    sourceLabel?: string
    sourceUrl?: string
    width: number
    height: number
}

export type BlogBlock =
    | { h2: string }
    | { h3: string }
    | { p: string }
    | { ul: string[] }
    | { ol: string[] }
    | { figure: BlogFigure }

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
        slug: 'whatsapp-business-changes-november-2026',
        title: 'WhatsApp Business Changes in November 2026: What Indian Businesses Should Do',
        metaTitle: 'WhatsApp Business Changes Nov 2026: What to Do',
        description: 'WhatsApp Business app order tools go from 15 Nov 2026 and API service messages are charged again. Key dates and what Indian businesses should do now.',
        keyword: 'WhatsApp Business changes',
        category: 'Digital Marketing News',
        tags: ['WhatsApp Business', 'WhatsApp Marketing', 'Meta'],
        datePublished: '2026-11-16',
        dateModified: '2026-11-16',
        readTime: '6 min read',
        excerpt: 'WhatsApp has started removing order tools from the WhatsApp Business app, and the WhatsApp Business Platform now charges for service messages beyond a free monthly tier. Here is what changed, the dates that matter, and a simple checklist for shops, clinics and brands in India.',
        cover: '/images/blog/whatsapp-business-changes-november-2026.png',
        body: [
            { p: 'If your customers order, enquire or book on WhatsApp, two **WhatsApp Business changes** matter this season. From **15 November 2026**, WhatsApp is removing order tools from the free WhatsApp Business app. And since **1 October 2026**, businesses on the WhatsApp Business Platform (the API used through a provider) pay for service messages again once they pass a free monthly tier.' },
            { p: 'Many shops, clinics and brands we speak to in Varanasi and across India run sales on WhatsApp, so this post sets out what WhatsApp and Meta have actually said, which change applies to you, and what to do before the December deadlines. Everything below comes from WhatsApp’s Help Center and Meta’s pricing documentation; we have not added anything they have not said.' },
            { h2: 'Change 1: Order tools are leaving the WhatsApp Business app' },
            { p: 'WhatsApp’s Help Center says: “We’re removing order tools from the WhatsApp Business app starting November 15, 2026.” If you still have accepted, active orders when removal begins, you can keep using order tools to finish those orders **until 28 December 2026**. After that, you confirm order details and share updates directly in chat.' },
            { figure: { src: '/images/blog/whatsapp-business-order-tools-help-center.webp', alt: 'WhatsApp Help Center article titled About order tools changes on the WhatsApp Business app, saying order tools are removed starting November 15, 2026 and active orders can be managed until December 28, 2026', caption: 'WhatsApp’s Help Center article on the order tools change, listing what goes, what stays and what to do instead. Screenshot captured 16 November 2026.', sourceLabel: 'WhatsApp Help Center', sourceUrl: 'https://faq.whatsapp.com/945451233102323', width: 1200, height: 1162 } },
            { h3: 'What goes' },
            { ul: [
                'The **Orders tab** in Business tools.',
                '**Creating orders** for customers, including custom orders and orders from carts or catalogue items.',
                '**Accepting or declining carts** with built-in buttons.',
                '**Updating order status** or adding tracking with built-in actions.',
                '**Creating direct charges.**',
            ] },
            { h3: 'What stays' },
            { ul: [
                'Customers can still **browse your catalogue and send you carts**.',
                'Your **catalogue, collections and business profile** stay available.',
                'Confirmations, payment coordination (where available) and delivery updates now **happen in chat**.',
            ] },
            { p: 'In other words, the catalogue still works as a shop window, but the “order management” layer on top of it is going. WhatsApp’s [About shopping on WhatsApp](https://faq.whatsapp.com/1312962072846852) page carries the same notice for customers.' },
            { h2: 'Change 2: WhatsApp Business Platform messages cost more since 1 October' },
            { p: 'This one only affects businesses on the **WhatsApp Business Platform** (Cloud API), usually connected through a solution provider or chatbot tool. According to Meta’s [WhatsApp Business Platform pricing page](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing), from 1 October 2026:' },
            { ul: [
                '**Service messages** (free-form replies inside the 24-hour customer service window) are charged again, after a **free tier of 1,000 service messages per business phone number per month**. Unused free messages do not roll over.',
                '**Utility messages** sent in an open customer service window, such as order confirmations, are now charged too.',
                'Businesses without a payment method on file get their service messages delivered only within the free tier.',
                'Chats that start from a **click-to-WhatsApp ad** still open a **free entry point window** of up to 7 days, in which Meta does not charge for marketing, utility, authentication or service messages.',
            ] },
            { p: 'For India, [Mint reported](https://www.livemint.com/technology/whatsapp-business-platform-gets-costlier-from-today-what-indian-businesses-need-to-know-about-new-messaging-charges-11790836512655.html) Meta’s published rates as ₹0.115 per delivered service, utility or authentication message and ₹0.8631 per delivered marketing message. These are Meta’s list prices; your provider’s taxes and fees can come on top.' },
            { figure: { src: '/images/blog/whatsapp-business-app-vs-platform.webp', alt: 'Two-column comparison: WhatsApp Business app loses order tools from 15 November 2026 but keeps catalogue and carts; WhatsApp Business Platform charges service messages after 1,000 free per number per month since 1 October 2026', caption: 'Which change affects you depends on whether you use the free Business app or the Business Platform (API).', width: 1200, height: 700 } },
            { h2: 'One more deadline for India-billed accounts: INR billing' },
            { p: 'Meta’s pricing page also says that businesses and providers billed in India must move every Messaging account in their business portfolio to **INR billing by 31 December 2026**. From 1 January 2027, Meta says it will no longer deliver messages from non-INR Messaging accounts of these eligible customers. If a provider runs your WhatsApp API, ask them whether this applies to your account.' },
            { figure: { src: '/images/blog/whatsapp-business-changes-2026-timeline.webp', alt: 'Timeline of WhatsApp Business changes: 1 October 2026 service message charges, 15 November 2026 order tools removal starts, 28 December 2026 last day for active orders, 31 December 2026 INR billing deadline', caption: 'The four dates to put in your calendar.', width: 1200, height: 820 } },
            { h2: 'What Indian businesses should do now' },
            { ol: [
                '**Check which WhatsApp you use.** The free WhatsApp Business app on a phone, or the Business Platform through a provider or chatbot tool? Some businesses use both.',
                '**App users: save open orders.** Before your access ends, note customer details, items, prices, payment status and delivery details for any active orders, as WhatsApp recommends.',
                '**Set up a simple chat order routine.** Save a quick reply that confirms items, price, delivery and payment in one message, so customers still get a clear confirmation.',
                '**Platform users: check the bill.** Look at service messages per phone number. If you regularly cross 1,000 a month, budget for it or move routine answers into your catalogue, website or FAQ.',
                '**Use click-to-WhatsApp ads wisely.** Conversations that start from these ads open a free window of up to 7 days, which can lower messaging costs for ad-led enquiries.',
                '**Ask about INR billing.** If you are billed in India through a provider, confirm the INR move before 31 December 2026.',
            ] },
            { figure: { src: '/images/blog/whatsapp-business-checklist-2026.webp', alt: 'Five-step WhatsApp checklist for Indian businesses: check which WhatsApp you use, save open orders, set a chat order routine, check the platform bill, plan the INR billing move', caption: 'A short checklist to work through this week.', width: 1200, height: 780 } },
            { p: 'If many orders now come through WhatsApp, this is also a good moment to ask whether a simple online store would save time. Carts and order status live on your own website, and WhatsApp stays the place for questions and updates.' },
            { h2: 'Other updates this month' },
            { p: 'If you advertise on Meta, read our note on the new [Meta Pixel setting that measures conversions on customer devices](/blog/meta-pixel-measure-conversions-on-customer-devices), and our [Meta Ads strategy guide](/blog/meta-ads-2025) for setting up click-to-WhatsApp campaigns. On the search side, the [Google November 2026 core update](/blog/google-november-2026-core-update) is still rolling out.' },
            { h2: 'How Wizards can help' },
            { p: 'Our [WhatsApp marketing](/services/whatsapp-marketing) team sets up WhatsApp Business profiles, catalogues, quick replies and broadcast routines, and our [performance marketing agency in Varanasi](/performance-marketing-agency-varanasi) runs click-to-WhatsApp ad campaigns. If orders are outgrowing chat, see our [e-commerce website development in Varanasi](/ecommerce-website-development-varanasi). You can explore all our [digital marketing services in Varanasi](/digital-marketing-agency-varanasi), or [book a free call](/book) and we will review your WhatsApp setup with you.' },
        ],
        faq: [
            { q: 'When are order tools removed from the WhatsApp Business app?', a: 'WhatsApp says it is removing order tools starting 15 November 2026. If you still have accepted, active orders, you can finish managing them with order tools until 28 December 2026. After that, confirm orders and share updates in chat.' },
            { q: 'Will my WhatsApp catalogue stop working?', a: 'No. WhatsApp says your catalogue, collections and business profile stay available, and customers can still browse the catalogue and send you carts. Only the built-in order tools, such as the Orders tab, order status and direct charges, are removed.' },
            { q: 'Are WhatsApp Business service messages free in India?', a: 'On the WhatsApp Business Platform (API), Meta gives each business phone number 1,000 free service messages a month from 1 October 2026, then charges per delivered message. Mint reported the India rate as ₹0.115 per service message. These per-message charges are for the Business Platform; Meta’s pricing page does not cover the free WhatsApp Business app.' },
            { q: 'What is the INR billing deadline for WhatsApp?', a: 'Meta says businesses and solution providers billed in India must migrate all Messaging accounts in their business portfolio to INR billing by 31 December 2026. From 1 January 2027, Meta will no longer deliver messages from non-INR Messaging accounts of these customers.' },
        ],
        sources: [
            { label: 'WhatsApp Help Center: About order tools changes on the WhatsApp Business app', url: 'https://faq.whatsapp.com/945451233102323' },
            { label: 'WhatsApp Help Center: About shopping on WhatsApp', url: 'https://faq.whatsapp.com/1312962072846852' },
            { label: 'Meta for Developers: Pricing on the WhatsApp Business Platform', url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing' },
            { label: 'Mint: WhatsApp Business Platform gets costlier from today (1 Oct 2026)', url: 'https://www.livemint.com/technology/whatsapp-business-platform-gets-costlier-from-today-what-indian-businesses-need-to-know-about-new-messaging-charges-11790836512655.html' },
        ],
    },
    {
        slug: 'meta-pixel-measure-conversions-on-customer-devices',
        title: 'Meta Pixel Now Measures Conversions on Customer Devices: What Advertisers Should Check',
        metaTitle: 'Meta Pixel On-Device Conversions: What to Check',
        description: 'Since 12 Nov 2026, eligible Meta pixels measure some purchases on the shopper’s device, and the setting is on by default. Who it affects and what to check.',
        keyword: 'Measure conversions on customer devices',
        category: 'Ads',
        tags: ['Meta Ads', 'Meta Pixel', 'Conversion Tracking'],
        datePublished: '2026-11-15',
        dateModified: '2026-11-15',
        readTime: '5 min read',
        excerpt: 'A new Meta Pixel setting, switched on by default, now matches some ad views to purchases on the shopper’s own device. Your reported conversions may rise. Here is who it affects, and how to check the numbers before you move budget.',
        cover: '/images/blog/meta-pixel-measure-conversions-on-customer-devices.png',
        body: [
            { p: 'If you run Facebook or Instagram ads to an online store, the numbers in Ads Manager may look a little different this month. Meta has added a Meta Pixel setting called **“Measure conversions on customer devices”**, and it is **switched on by default** for eligible pixels. Events Manager shows the line “Measurement starting November 12, 2026” under the new toggle, as reported by [PPC Land](https://ppc.land/meta-pixel-will-count-more-conversions-from-nov-12-unless-advertisers-opt-out/).' },
            { p: 'This post explains what the setting does, which websites it applies to, and the simple check we recommend before you change any budget. It is based on Meta’s Business Help Center articles and on trade-press reporting, and we have not added claims that Meta has not made.' },
            { h2: 'What the new Meta Pixel setting does' },
            { p: 'Meta often knows that someone saw an ad, and separately receives a purchase from the Pixel, but cannot always connect the two. Meta’s help article gives the example of someone who sees a lamp ad on Instagram, visits the website two days later and buys it.' },
            { p: 'With the setting on, part of that matching happens **on the customer’s own phone or computer**, using information the customer already gave the business (such as an email address) together with temporary device information. According to Meta, it then receives only the fact that a purchase happened and which campaign should get the credit, not identifying customer information.' },
            { figure: { src: '/images/blog/meta-pixel-on-device-how-it-works.webp', alt: 'Two-column diagram comparing server-only conversion matching with the new Meta Pixel setting that matches some purchases on the customer’s device', caption: 'Before, Meta matched ad views and purchases only on its servers. With the new setting, part of the matching happens on the shopper’s device.', width: 1200, height: 760 } },
            { p: 'In the Events Manager panel, Meta describes it in two sentences: measurement “happens on your customer’s device instead of exclusively on Meta servers.” Trade-press coverage notes that the attribution window and attribution model do not change. What changes is **which conversions Meta is able to see**, not how they are credited.' },
            { h2: 'Does it apply to your website?' },
            { p: 'Meta’s setup article lists clear conditions. As reported by [Performance Marketing News](https://performancemarketingnews.com/updates/meta-pixel-measure-conversions-customer-devices) and [Measurebase](https://measurebase.com/resources/meta-pixel-on-device-conversions), a pixel is eligible only when:' },
            { ul: [
                'The Meta Pixel is **installed directly on the page**, not inside an iframe and not as an image-only pixel.',
                'The website **asks people to log in** to an account with an email address or mobile phone number.',
                'The visitor is **not located in the EU or UK**, where Meta says the feature is not active. India is not on that exclusion list, so Indian websites that meet the other two conditions are covered.',
            ] },
            { figure: { src: '/images/blog/meta-pixel-on-device-eligibility.webp', alt: 'Checklist of three Meta eligibility conditions: pixel installed directly on the page, visitors log in with email or mobile number, visitor outside the EU and UK', caption: 'All three conditions must be true. The setting is on by default for eligible pixels and can be turned off per pixel.', width: 1200, height: 720 } },
            { p: 'In practice, this matters most for **online stores and subscription sites where customers sign in**. If your ads send people to a lead form, a WhatsApp chat or a phone call (which is how most clinics, coaching institutes and local service businesses we work with get enquiries), the login condition is usually not met and you may see little or no change.' },
            { h2: 'Why your reported conversions may go up' },
            { p: 'Meta says the feature recovers conversions that never made it back to Meta to be measured. So if your site is eligible, Ads Manager may start counting purchases it was missing before. That can be good news: sales your ads really drove finally get credited.' },
            { p: 'But a higher number in Ads Manager is not the same thing as more sales. A recovered conversion is a purchase that already happened and is now attributed to an ad. Meta has also not said publicly whether these recovered conversions feed bidding and optimisation or only reporting, as [PPC Land](https://ppc.land/meta-pixel-will-count-more-conversions-from-nov-12-unless-advertisers-opt-out/) points out. With the festive and year-end sale season on, that difference matters when you decide where to spend.' },
            { h2: 'What to do this week' },
            { ol: [
                '**Find the switch.** In Meta Events Manager, go to Data sources, select your pixel, open Settings and look for “Measure conversions on customer devices”. The control is per pixel, so check every pixel you run.',
                '**Note your baseline.** Write down Meta-reported purchases for 1 to 11 November, before the change.',
                '**Count your real orders.** Every week, put Meta-reported purchases next to the paid orders in your store or CRM.',
                '**Watch the ratio, not just the total.** If Meta’s number jumps but real orders don’t, don’t raise budgets on that number alone.',
                '**Keep server-side tracking on.** Meta says the setting works alongside the Pixel and the Conversions API, not instead of them.',
            ] },
            { figure: { src: '/images/blog/meta-pixel-on-device-checklist.webp', alt: 'Five-step checklist: find the switch in Events Manager, note your baseline, count real orders, watch the ratio, keep server-side tracking on', caption: 'A five-step check to run before you move any Meta ad budget.', width: 1200, height: 840 } },
            { p: 'You can turn the setting off at any time. We don’t recommend switching it off by default. Keep it on, reconcile for a few weeks, and only turn it off if Meta’s numbers stop matching your real orders and you can’t find out why.' },
            { h2: 'Other updates from this week' },
            { p: 'The [Google November 2026 core update](/blog/google-november-2026-core-update) is still rolling out, and OpenAI’s new [ChatGPT Business Hub](/blog/chatgpt-business-hub-claim-your-business) lets some businesses claim a profile in ChatGPT. If you advertise on Meta, our guide to [Meta Ads strategy](/blog/meta-ads-2025) covers the basics of setting up campaigns that are easy to measure.' },
            { h2: 'How Wizards can help' },
            { p: 'Our [performance marketing](/services/performance-marketing) and [Google and Meta ads management](/services/google-meta-ads-management) teams set up Meta Pixel and Conversions API tracking and reconcile ad-reported results with real orders and enquiries. If you are in Varanasi, see our [performance marketing agency in Varanasi](/performance-marketing-agency-varanasi) page. Or [book a free call](/book) and we will look at your tracking setup with you.' },
        ],
        faq: [
            { q: 'What is “Measure conversions on customer devices” in Meta Events Manager?', a: 'It is a Meta Pixel setting that matches some ad views to purchases on the shopper’s own device, using information the customer already gave the business and temporary device data. Meta says it receives only that a purchase happened and which campaign gets credit.' },
            { q: 'Is the setting on by default?', a: 'Yes. Meta says it is on by default for eligible pixels, and Events Manager shows measurement starting on 12 November 2026. You can turn it off for each pixel under Events Manager, Data sources, your pixel, Settings.' },
            { q: 'Does it apply to websites in India?', a: 'Meta says the feature is not active for people located in the EU and UK. India is not excluded, so Indian websites can be covered if the pixel is installed directly on the page and visitors log in with an email address or mobile number.' },
            { q: 'Will my Meta ad results look better?', a: 'Possibly. If your site is eligible, Meta may count purchases it was missing before, so reported conversions can rise without any change in real sales. Compare Meta-reported purchases with your actual orders before changing budgets.' },
        ],
        sources: [
            { label: 'Meta Business Help Center: Measuring conversions on customer devices', url: 'https://www.facebook.com/business/help/4237575203200036' },
            { label: 'PPC Land: Meta Pixel will count more conversions from Nov 12 unless advertisers opt out', url: 'https://ppc.land/meta-pixel-will-count-more-conversions-from-nov-12-unless-advertisers-opt-out/' },
            { label: 'Performance Marketing News: Meta Pixel conversions measured on customer devices', url: 'https://performancemarketingnews.com/updates/meta-pixel-measure-conversions-customer-devices' },
            { label: 'Measurebase: Meta Pixel measures conversions on devices from 12 November', url: 'https://measurebase.com/resources/meta-pixel-on-device-conversions' },
            { label: 'Relevant Audience: Meta Pixel on-device conversion measurement explained', url: 'https://www.relevantaudience.com/meta/meta-pixel-measure-conversions-on-customer-devices/' },
        ],
    },
    {
        slug: 'chatgpt-business-hub-claim-your-business',
        title: 'ChatGPT Business Hub: How to Claim Your Business in ChatGPT',
        metaTitle: 'ChatGPT Business Hub: How to Claim Your Business',
        description: 'OpenAI launched Businesses in ChatGPT on 10 Nov 2026. What ChatGPT Business Hub does, who can claim a profile, how verification works and what to prepare.',
        keyword: 'ChatGPT Business Hub',
        category: 'AI Updates',
        tags: ['ChatGPT', 'AI Search', 'Business Hub'],
        datePublished: '2026-11-14',
        dateModified: '2026-11-14',
        readTime: '6 min read',
        excerpt: 'OpenAI now lets businesses claim a profile in ChatGPT, update their details and see how often ChatGPT mentions them. Here is what ChatGPT Business Hub is, what it does not do, and how to get ready.',
        cover: '/images/blog/chatgpt-business-hub-claim-your-business.png',
        body: [
            { p: 'On 10 November 2026, OpenAI announced [Businesses in ChatGPT](https://openai.com/index/introducing-businesses-chatgpt/), a beta that lets companies claim their business inside ChatGPT through a new tool called **ChatGPT Business Hub**. For years the advice for local businesses has been “claim your Google Business Profile.” This is the first time ChatGPT has offered something similar.' },
            { p: 'This post explains what Business Hub does, who can use it today, how verification works and what we recommend businesses in India prepare — based only on what OpenAI and the search industry press have published so far.' },
            { h2: 'What is ChatGPT Business Hub?' },
            { figure: { src: '/images/blog/chatgpt-business-hub-openai-announcement.webp', alt: 'OpenAI announcement page titled Introducing Businesses in ChatGPT, dated 10 November 2026', caption: 'OpenAI announced Businesses in ChatGPT, and the Business Hub tool, on 10 November 2026.', sourceLabel: 'OpenAI', sourceUrl: 'https://openai.com/index/introducing-businesses-chatgpt/', width: 1200, height: 966 } },
            { p: 'According to OpenAI’s announcement, Business Hub lets a business:' },
            { ul: [
                '**Claim its business** in ChatGPT and, once verified, update key details such as website, description, category and logo.',
                '**Add product feeds** with pricing and availability (useful for online stores; Shopify merchants can connect their store directly).',
                '**See insights** — the number of mentions, website clicks, and “discovery topics”, which OpenAI describes as common themes across conversations where the business’s website is cited.',
                '**Build a Business Agent** — a separate, clearly labelled chat that answers customer questions using the business’s own information (currently only for eligible ecommerce and online service businesses in the US).',
            ] },
            { p: 'OpenAI says ChatGPT is used by 1.2 billion people each week, That reach is why it is worth checking now whether your business can claim a profile, even if you are a small business.' },
            { h2: 'Who can claim a business right now?' },
            { p: 'This is where the details matter. OpenAI’s [help article on setting up your business](https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt) says:' },
            { figure: { src: '/images/blog/chatgpt-business-hub-openai-help-setup.webp', alt: 'OpenAI Help Center article, Setting up your business on ChatGPT, showing the Overview and Who is eligible sections', caption: 'OpenAI’s help article sets out who can claim a profile and how eligibility depends on location and business type.', sourceLabel: 'OpenAI Help Center', sourceUrl: 'https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt', width: 1200, height: 1151 } },
            { ul: [
                'You can claim a business if you **own it or are authorised to represent it**. You do not need an ads account or a ChatGPT Enterprise agreement.',
                'Eligible businesses can claim an existing listing or add one “where ChatGPT is available and the required verification is supported” — availability depends on the business’s **location and type**.',
                'If you run an eligible **online business** and can’t find your listing, you may see an option to add it.',
                '**Local stores and restaurants can currently claim only an existing US listing.** So a shop, clinic or restaurant in India may not be able to claim a location profile yet.',
                '**Business Agents** are limited for now to eligible ecommerce and online service businesses in the US with a website.',
            ] },
            { p: 'OpenAI says it plans to expand Businesses in ChatGPT and Business Agents to more markets and business categories over time, but has not given dates.' },
            { h2: 'How verification works' },
            { p: 'The help article lists four ways to verify a claim, depending on what ChatGPT offers for your business:' },
            { ol: [
                '**Business phone** — a code by SMS or automated call to the number on the listing.',
                '**Business email** — a code sent to the business email address.',
                '**Website domain** — adding a DNS TXT record to your domain, then selecting “Verify domain”.',
                '**Shopify store** — signing in to the store you are claiming.',
            ] },
            { figure: { src: '/images/blog/chatgpt-business-hub-verification-steps.webp', alt: 'Diagram of four ChatGPT Business Hub verification methods: business phone, business email, website domain and Shopify store, plus a note about Persona identity verification', caption: 'The four verification methods listed in OpenAI’s help article, plus identity verification with Persona after the claim is approved.', width: 1200, height: 780 } },
            { p: 'After the claim is approved, you also need to complete **identity verification with Persona** before you can publish changes, view insights or create an agent. OpenAI says you may need a government-issued ID, business registration information and proof that you are authorised to represent the business. The blue verified check appears only after Persona verification is approved.' },
            { p: 'In a hands-on walkthrough, [Search Engine Journal](https://www.searchenginejournal.com/submit-website-chatgpt/596785/) found that choosing the physical-location option showed a waitlist, while the website option let them continue — which matches OpenAI’s note that local listings are US-only for now.' },
            { h2: 'What Business Hub does not do' },
            { p: 'OpenAI is clear on this: claiming your business **does not guarantee higher placement or more sales**, and advertising does not influence ChatGPT’s independent answers. ChatGPT may still use other sources when it talks about your business. Business Hub is about keeping your information accurate and seeing how often you are mentioned — not buying a ranking.' },
            { p: 'Businesses also don’t get to see individual customer prompts or conversations. Insights are aggregated, cover the past 28 days, and only appear once there is enough activity to meet OpenAI’s reporting thresholds. A blank number does not necessarily mean zero.' },
            { h2: 'What businesses in India should do now' },
            { ul: [
                '**Check Business Hub.** Sign in to ChatGPT, open Business Hub from the sidebar and search for your business name. If you have a website-based business and see the option to claim or add it, start the process.',
                '**Get your paperwork ready.** Keep the business name, legal name, registered address, business email and phone exactly as they appear on your official records. OpenAI says mismatches can cause Persona checks to fail.',
                '**Line up DNS access.** If you plan to verify by website domain, make sure you (or your web agency) can add a TXT record.',
                '**Keep your public information consistent.** Since ChatGPT can draw on other sources, your website, Google Business Profile and social profiles should show the same name, address, phone and services.',
                '**Make your website easy to cite.** Clear service pages, real contact details, FAQs and accurate structured data help any search system — Google or ChatGPT — understand what you do.',
            ] },
            { figure: { src: '/images/blog/chatgpt-business-hub-india-checklist.webp', alt: 'Five-step checklist of what businesses in India should do now: check Business Hub, prepare paperwork, line up DNS access, keep public information consistent, and make the website easy to cite', caption: 'A short checklist of what businesses in India can do now, while local listing claims remain limited.', width: 1200, height: 860 } },
            { p: 'Google is moving in the same direction: this week it made [Gemini 4 Hydrogen the default model in AI Mode](https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/), and we covered the ongoing [Google November 2026 core update](/blog/google-november-2026-core-update) yesterday. Visibility in AI answers is becoming part of normal SEO work.' },
            { h2: 'How Wizards can help' },
            { p: 'Our [AI consultancy](/services/ai-consultancy) and [SEO consultancy](/services/seo-consultancy) teams help businesses get their information, website and listings in shape for both Google and AI assistants. If you are in Varanasi, see our [SEO services in Varanasi](/seo-services-varanasi) or our full [digital marketing agency in Varanasi](/digital-marketing-agency-varanasi) page. Or simply [book a free call](/book) and we will look at your setup with you.' },
        ],
        faq: [
            { q: 'What is ChatGPT Business Hub?', a: 'It is OpenAI’s tool, launched in beta on 10 November 2026, that lets businesses claim their business in ChatGPT, update key information, add product feeds and see aggregated insights such as mentions and website clicks.' },
            { q: 'Can a business in India claim its profile in ChatGPT?', a: 'Possibly, depending on the business type. OpenAI says availability depends on location and type. Eligible online businesses may be able to claim or add a profile, but local stores and restaurants can currently claim only existing US listings.' },
            { q: 'Does claiming my business make ChatGPT recommend it more?', a: 'No. OpenAI says claiming does not guarantee higher placement or sales, and advertising does not influence ChatGPT’s independent answers. Claiming helps keep your information accurate and gives you insights.' },
            { q: 'How do I verify my business in ChatGPT?', a: 'Depending on what is offered for your business: a code to your business phone or email, a DNS TXT record on your website domain, or connecting your Shopify store. After approval you also complete identity verification with Persona.' },
        ],
        sources: [
            { label: 'OpenAI — Introducing Businesses in ChatGPT (10 Nov 2026)', url: 'https://openai.com/index/introducing-businesses-chatgpt/' },
            { label: 'OpenAI Help Center — Setting up your business on ChatGPT', url: 'https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt' },
            { label: 'OpenAI — Businesses in ChatGPT: Claim your business', url: 'https://openai.com/business/businesses-in-chatgpt/' },
            { label: 'Search Engine Land — ChatGPT Business Hub is now live', url: 'https://searchengineland.com/chatgpt-business-hub-is-now-live-501350' },
            { label: 'Search Engine Journal — How to submit your website to ChatGPT Business Hub', url: 'https://www.searchenginejournal.com/submit-website-chatgpt/596785/' },
            { label: 'Marketing-Interactive — OpenAI launches ChatGPT business profiles with brand insights and AI agents', url: 'https://www.marketing-interactive.com/openai-launches-chatgpt-business-profiles-with-brand-insights-and-ai-agents' },
        ],
    },
    {
        slug: 'google-november-2026-core-update',
        title: 'Google November 2026 Core Update: What Businesses Should Do Now',
        metaTitle: 'Google November 2026 Core Update: What to Do',
        description: 'Google started the November 2026 core update on 10 Nov. What changed, how long the rollout takes, how to check your traffic in Search Console and what to fix.',
        keyword: 'Google November 2026 core update',
        category: 'SEO',
        tags: ['Google Core Update', 'SEO', 'AI Mode'],
        datePublished: '2026-11-13',
        dateModified: '2026-11-16',
        readTime: '6 min read',
        excerpt: 'Google’s third core update of 2026 began rolling out on 10 November and can take up to two weeks. Here is what it is, what not to panic about, and the exact steps to check your site once it finishes.',
        cover: '/images/blog/google-november-2026-core-update.png',
        body: [
            { p: 'On 10 November 2026, Google released the **November 2026 core update**. According to the [Google Search Status Dashboard](https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc), it “applies globally and to all languages” and “the rollout may take up to 2 weeks to complete.” If your website gets enquiries from Google — a clinic in Varanasi, a store in Hyderabad, an online brand selling across India — your rankings may move up or down over the next couple of weeks.' },
            { p: 'This post explains what a core update is, what Google has (and has not) said about this one, and a simple plan for checking your site once the rollout ends.' },
            { h2: 'What is a Google core update?' },
            { p: 'Google describes core updates as broad changes to its ranking systems, made several times a year. In its [core updates documentation](https://developers.google.com/search/updates/core-updates), Google says they “don’t target specific sites or individual web pages” — the aim is to keep its systems current as content on the web changes.' },
            { figure: { src: '/images/blog/google-november-2026-core-update-search-central.webp', alt: 'Google Search Central documentation page titled Google Search’s core updates and your website, explaining how core updates work and how to check a traffic drop in Search Console', caption: 'Google’s own documentation on how core updates work, and how to check a traffic change in Search Console.', sourceLabel: 'Google Search Central', sourceUrl: 'https://developers.google.com/search/updates/core-updates', width: 1200, height: 932 } },
            { p: 'In other words, a drop after a core update is not a penalty. It usually means Google now judges other pages to be more helpful for that search than yours.' },
            { h2: 'What we know about the November 2026 core update' },
            { figure: { src: '/images/blog/google-november-2026-core-update-status-dashboard.webp', alt: 'Google Search Status Dashboard incident page for the November 2026 core update, showing a start time of 10 November 2026 at 10:06 US/Pacific and a rollout of up to two weeks', caption: 'Google’s Search Status Dashboard lists the November 2026 core update as starting on 10 November 2026, with a rollout of up to two weeks.', sourceLabel: 'Google Search Status Dashboard', sourceUrl: 'https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc', width: 1200, height: 650 } },
            { ul: [
                '**Start:** 10 November 2026, 10:06 a.m. US Pacific time (about 11:36 p.m. IST), per the [Search Status Dashboard](https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc).',
                '**Scope:** global, all languages — so Hindi and English results in India are both covered.',
                '**Duration:** up to two weeks. [Search Engine Journal](https://www.searchenginejournal.com/google-november-2026-core-update/596614/) notes a full two-week rollout would end around 24 November.',
                '**Google’s description:** “a regular update designed to better surface relevant, satisfying content for searchers from all types of sites,” as quoted by [Search Engine Land](https://searchengineland.com/google-november-2026-core-update-rolling-out-now-501348).',
                '**It is the third core update of 2026,** after the March and May core updates, according to Search Engine Journal.',
            ] },
            { p: 'Google has not published any new, update-specific guidance. Anyone claiming to know the “secret factor” behind this update is guessing.' },
            { p: '**Status check, 16 November 2026:** the [Search Status Dashboard](https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc) still shows only the 10 November release note, so Google has not yet announced that the rollout is complete. We will update this post when it does.' },
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
            { figure: { src: '/images/blog/google-november-2026-core-update-rollout-plan.webp', alt: 'Two-column plan for the November 2026 core update: what to do during the rollout and what to check in Search Console after it finishes', caption: 'A simple plan: hold major changes during the rollout, then compare Search Console data once it has finished and a further week has passed.', width: 1200, height: 820 } },
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
        dateModified: '2026-11-14',
        readTime: '7 min read',
        excerpt: 'No growth hacks, no bought followers. How Instagram itself says it ranks Reels, what makes it show your content to fewer people, and a simple weekly system to grow an account organically.',
        cover: '/images/blog/grow-instagram-10k.png',
        body: [
            { p: 'Most businesses want more Instagram followers, but followers on their own don’t pay the bills — the right followers do. This guide covers how to **grow Instagram followers organically**, using what Instagram has publicly said about how it ranks content, and a content routine a small team can actually keep up.' },
            { h2: 'Start with how Instagram says it ranks Reels' },
            { p: 'Instagram has published an explainer, [Instagram Ranking Explained](https://about.instagram.com/blog/announcements/instagram-ranking-explained). The key points for Reels:' },
            { figure: { src: '/images/blog/grow-instagram-10k-ranking-explained.webp', alt: 'Instagram’s official blog post titled Instagram Ranking Explained, by Adam Mosseri, describing how ranking works across the app', caption: 'Instagram’s public ranking explainer is the basis for the Reels advice in this guide.', sourceLabel: 'Instagram', sourceUrl: 'https://about.instagram.com/blog/announcements/instagram-ranking-explained', width: 1200, height: 766 } },
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
            { figure: { src: '/images/blog/grow-instagram-10k-less-visible.webp', alt: 'Checklist of reel types Instagram says it aims to show to fewer people, including low-resolution, watermarked, muted, bordered, mostly-text and already-posted reels', caption: 'Instagram says it aims to make these kinds of reels less visible.', width: 1200, height: 700 } },
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
            { figure: { src: '/images/blog/grow-instagram-10k-weekly-system.webp', alt: 'Five-step weekly Instagram content system: pick three pillars, hook in the first seconds, make it worth sharing, post consistently, and reply and engage', caption: 'A weekly content system a small team can keep up, built around how Instagram says it ranks Reels.', width: 1200, height: 860 } },
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
        dateModified: '2026-11-16',
        readTime: '6 min read',
        excerpt: 'Good Meta ads start before the ad: clean tracking, a simple account structure, and a steady supply of creative. A practical checklist for small businesses.',
        cover: '/images/blog/meta-ads-2025.png',
        body: [
            { p: 'Facebook and Instagram ads can bring steady enquiries and sales for a small business — or burn through budget fast. This **Meta ads strategy for small businesses** focuses on the parts you control: tracking, structure, creative and how you judge results.' },
            { figure: { src: '/images/blog/meta-ads-2025-strategy-steps.webp', alt: 'Six-part Meta ads strategy diagram covering tracking, simple account structure, Advantage+, creative, landing pages and judging business outcomes', caption: 'The six parts of the strategy: tracking, structure, Advantage+, creative, the landing page, and judging real outcomes.', width: 1200, height: 920 } },
            { h2: '1. Fix tracking before you spend' },
            { p: 'Meta’s delivery system optimises toward the events you send it. If it can’t see your leads or purchases, it can’t find more people like those customers.' },
            { figure: { src: '/images/blog/meta-ads-2025-about-pixel.webp', alt: 'Meta Business Help Center article titled About Meta pixel, explaining what the pixel measures and how it works', caption: 'Meta’s own help article on the Meta Pixel, the starting point for reliable ad tracking.', sourceLabel: 'Meta Business Help Center', sourceUrl: 'https://www.facebook.com/business/help/742478679120153', width: 1200, height: 876 } },
            { ul: [
                'Install the [Meta Pixel](https://www.facebook.com/business/help/742478679120153) on your website and confirm the events that matter (Lead, Purchase, Contact) fire correctly.',
                'Add the [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api), which sends events from your server, so tracking holds up when browsers block cookies or scripts.',
                'For WhatsApp or call leads, decide how you’ll record which ones became customers — even a simple sheet — so you judge campaigns on real outcomes, not just form fills. If you run click-to-WhatsApp ads, note the [WhatsApp Business changes for November 2026](/blog/whatsapp-business-changes-november-2026).',
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
        dateModified: '2026-11-14',
        readTime: '5 min read',
        excerpt: 'A logo is a signature. A brand is the reputation behind it. What actually makes up a brand, and how a small business can build one deliberately.',
        cover: '/images/blog/logo-vs-brand.png',
        body: [
            { p: 'Many businesses start “branding” by ordering a logo — and then wonder why nothing changes. The **logo vs brand** confusion is common, and clearing it up helps you spend your time and money where it actually matters.' },
            { h2: 'What a logo is' },
            { p: 'A logo is a symbol or wordmark that identifies your business. It works like a signature: it helps people recognise you quickly on a signboard, a package, a post or a website. A good logo is simple, readable at small sizes, and works in one colour.' },
            { h2: 'What a brand is' },
            { p: 'A brand is what people think, feel and expect when they hear your name. It is built from every experience they have with you — your service, your prices, your staff, your content, your reviews, how you answer the phone. The logo is a reminder of that reputation; it isn’t the reputation itself.' },
            { figure: { src: '/images/blog/logo-vs-brand-comparison.webp', alt: 'Side-by-side comparison of a logo, described as a signature or wordmark, and a brand, described as the reputation and expectations people have about a business', caption: 'A logo identifies you. A brand is the reputation that logo stands for.', width: 1200, height: 760 } },
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
            { figure: { src: '/images/blog/logo-vs-brand-building-blocks.webp', alt: 'Five building blocks of a brand: positioning, personality and voice, visual identity, customer experience, and proof', caption: 'The building blocks of a brand go well beyond the logo.', width: 1200, height: 820 } },
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
        dateModified: '2026-11-14',
        readTime: '7 min read',
        excerpt: 'Before you announce your new Shopify store, run through these 12 checks — from test orders and policies to SEO and analytics — so your first customers get a smooth experience.',
        cover: '/images/blog/shopify-checklist.png',
        body: [
            { p: 'Launching a Shopify store is exciting, but small setup gaps — a payment method that fails, missing policies, a broken shipping rate — can cost you your first customers. Use this **Shopify store launch checklist** before you go live.' },
            { figure: { src: '/images/blog/shopify-checklist-12-steps.webp', alt: 'Shopify store launch checklist grouped into store setup, products and content, performance and trust, and measurement and launch, covering 12 checks', caption: 'The 12 checks in this guide, grouped so you can work through them in order.', width: 1200, height: 780 } },
            { h2: 'Store setup' },
            { h3: '1. Connect your own domain' },
            { p: 'Use your brand domain (for example yourbrand.in or .com) rather than the default myshopify address, and make sure it opens over HTTPS. Set the version customers should see as the primary domain.' },
            { h3: '2. Set up payments and place a test order' },
            { p: 'Activate the payment methods your customers expect — UPI, cards, netbanking, and cash on delivery if you offer it. Shopify recommends placing at least one test order during setup; its help centre explains how to use a [test payment gateway or test mode](https://help.shopify.com/en/manual/checkout-settings/test-orders). Remember customers can’t place live orders while payments are in test mode, so switch it off before launch.' },
            { figure: { src: '/images/blog/shopify-checklist-test-order.webp', alt: 'Shopify Help Center article titled Placing a test order, including a caution that customers cannot place live orders while payment providers are in test mode', caption: 'Shopify’s help article on placing a test order, including the warning to switch test mode off before launch.', sourceLabel: 'Shopify Help Center', sourceUrl: 'https://help.shopify.com/en/manual/checkout-settings/test-orders', width: 1200, height: 677 } },
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
