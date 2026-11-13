import { Metadata } from 'next'
import Link from 'next/link'
import { Section, Wrapper } from '@/components/ui/sections'
import { POSTS, BLOG_AUTHOR, formatBlogDate } from '@/constant/blogs'
import { SITE_URL } from '@/constant/site'

export const metadata: Metadata = {
    title: 'Digital Marketing, SEO & AI Blog | Wizards Next',
    description: 'Practical digital marketing, SEO, social media and AI updates for Indian businesses, written by Ravi Khetan, Founder of Wizards Next LLP, Varanasi.',
    alternates: { canonical: '/blog' },
    openGraph: {
        title: 'Digital Marketing, SEO & AI Blog | Wizards Next',
        description: 'Practical digital marketing, SEO, social media and AI updates for Indian businesses.',
        url: '/blog',
        type: 'website',
        images: [{ url: POSTS[0].cover, width: 1200, height: 630 }],
    },
}

export default function BlogIndex() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': `${SITE_URL}/blog#blog`,
        name: 'Wizards Next Blog',
        url: `${SITE_URL}/blog`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        blogPost: POSTS.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.datePublished,
            dateModified: p.dateModified,
            author: { '@type': 'Person', name: BLOG_AUTHOR.name, jobTitle: BLOG_AUTHOR.jobTitle },
        })),
    }
    const [first, ...rest] = POSTS
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
            <Section className="relative text-zinc-200">
                <Wrapper className="lg:pt-32 md:pt-28 pt-24 gap-10!">
                    <div className="flex flex-col gap-4">
                        <nav aria-label="Breadcrumb" className="text-[12px] text-zinc-400">
                            <Link href="/" className="hover:text-amber-500">Home</Link> / <span>Blog</span>
                        </nav>
                        <h1 className="tracking-tight text-zinc-100 leading-tight text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl">
                            Digital marketing, SEO &amp; <span className="text-amber-600 font-sora!">AI insights</span>
                        </h1>
                        <p className="text-zinc-200 text-[15px] font-light leading-relaxed max-w-2xl">
                            Practical guides and the latest updates from Google, Meta and the AI world — explained for Indian businesses by {BLOG_AUTHOR.display}.
                        </p>
                    </div>

                    <Link href={`/blog/${first.slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-amber-600/40 transition-colors">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={first.cover} alt={first.title} width={1200} height={630} className="w-full h-auto object-cover" />
                        <div className="p-6 md:pl-0 flex flex-col gap-3 justify-center">
                            <span className="text-[12px] uppercase tracking-[1.2px] text-amber-600">{first.category} · Latest</span>
                            <h2 className="text-2xl font-medium tracking-tight text-zinc-100 group-hover:text-amber-500">{first.title}</h2>
                            <p className="text-[14px] font-light text-zinc-300 leading-relaxed">{first.excerpt}</p>
                            <p className="text-[12px] text-zinc-400">{formatBlogDate(first.datePublished)} · {first.readTime}</p>
                        </div>
                    </Link>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {rest.map((p) => (
                            <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-amber-600/40 transition-colors">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={p.cover} alt={p.title} width={1200} height={630} loading="lazy" className="w-full h-auto object-cover" />
                                <div className="p-4 flex flex-col gap-2">
                                    <span className="text-[11px] uppercase tracking-[1.2px] text-amber-600">{p.category}</span>
                                    <h2 className="text-[15px] font-medium leading-snug text-zinc-100 group-hover:text-amber-500">{p.title}</h2>
                                    <p className="text-[12px] text-zinc-400">Updated {formatBlogDate(p.dateModified)} · {p.readTime}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Wrapper>
            </Section>
        </main>
    )
}
