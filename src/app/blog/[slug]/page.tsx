import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { Section, Wrapper } from '@/components/ui/sections'
import ServiceCTA from '@/components/services/service_cta'
import RichText, { plainText } from '@/components/blog/rich_text'
import { POSTS, BLOG_AUTHOR, getPost, formatBlogDate } from '@/constant/blogs'
import { SITE_URL } from '@/constant/site'

export const dynamicParams = false

export function generateStaticParams() {
    return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const p = getPost(slug)
    if (!p) return {}
    const path = `/blog/${p.slug}`
    return {
        title: p.metaTitle,
        description: p.description,
        alternates: { canonical: path },
        authors: [{ name: BLOG_AUTHOR.name }],
        openGraph: {
            title: p.title,
            description: p.description,
            url: path,
            type: 'article',
            publishedTime: p.datePublished,
            modifiedTime: p.dateModified,
            authors: [BLOG_AUTHOR.name],
            images: [{ url: p.cover, width: 1200, height: 630, alt: p.title }],
        },
        twitter: { card: 'summary_large_image', title: p.title, description: p.description, images: [p.cover] },
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const p = getPost(slug)
    if (!p) notFound()
    const url = `${SITE_URL}/blog/${p.slug}`

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        headline: p.title,
        description: p.description,
        image: [`${SITE_URL}${p.cover}`],
        datePublished: p.datePublished,
        dateModified: p.dateModified,
        keywords: [p.keyword, ...p.tags].join(', '),
        articleSection: p.category,
        inLanguage: 'en-IN',
        author: {
            '@type': 'Person',
            name: BLOG_AUTHOR.name,
            jobTitle: BLOG_AUTHOR.jobTitle,
            worksFor: { '@type': 'Organization', name: BLOG_AUTHOR.org, url: SITE_URL },
        },
        publisher: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: BLOG_AUTHOR.org,
            url: SITE_URL,
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/brand/logo.webp` },
        },
        ...(p.sources ? { citation: p.sources.map((s) => s.url) } : {}),
    }
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
            { '@type': 'ListItem', position: 3, name: p.title, item: url },
        ],
    }
    const faqJsonLd = p.faq && {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    }
    const ld = (o: object) => ({ __html: JSON.stringify(o).replace(/</g, '\\u003c') })
    const related = POSTS.filter((x) => x.slug !== p.slug).slice(0, 3)

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={ld(articleJsonLd)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={ld(breadcrumbJsonLd)} />
            {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={ld(faqJsonLd)} />}

            <Section className="relative text-zinc-200">
                <Wrapper className="lg:pt-32 md:pt-28 pt-24 gap-8! max-w-3xl">
                    <header className="flex flex-col gap-4">
                        <nav aria-label="Breadcrumb" className="text-[12px] text-zinc-400">
                            <Link href="/" className="hover:text-amber-500">Home</Link> / <Link href="/blog" className="hover:text-amber-500">Blog</Link> / <span>{p.category}</span>
                        </nav>
                        <h1 className="tracking-tight text-zinc-100 leading-tight text-3xl md:text-4xl font-medium">{p.title}</h1>
                        <div className="flex items-center gap-3 text-[13px] text-zinc-300">
                            <span className="w-9 h-9 rounded-full bg-amber-600/15 border border-amber-600/30 text-amber-500 flex items-center justify-center text-[12px] font-semibold">{BLOG_AUTHOR.initials}</span>
                            <span>
                                <span className="block text-zinc-100">{BLOG_AUTHOR.display}</span>
                                <span className="text-zinc-400">
                                    {p.dateModified !== p.datePublished ? <>Updated <time dateTime={p.dateModified}>{formatBlogDate(p.dateModified)}</time></> : <time dateTime={p.datePublished}>{formatBlogDate(p.datePublished)}</time>} · {p.readTime}
                                </span>
                            </span>
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <picture className="block"><source srcSet={p.cover.replace(/\.png$/, '.webp')} type="image/webp" /><img src={p.cover} alt={p.title} width={1200} height={630} fetchPriority="high" className="w-full h-auto rounded-xl border border-zinc-800" /></picture>
                    </header>

                    <article className="flex flex-col gap-5 text-[15.5px] font-light leading-relaxed text-zinc-200">
                        {p.body.map((b, i) => {
                            if ('h2' in b) return <h2 key={i} className="text-2xl font-medium tracking-tight text-zinc-100 mt-4">{b.h2}</h2>
                            if ('h3' in b) return <h3 key={i} className="text-lg font-medium text-zinc-100 mt-1">{b.h3}</h3>
                            if ('p' in b) return <p key={i}><RichText text={b.p} /></p>
                            if ('ul' in b) return <ul key={i} className="list-disc pl-6 flex flex-col gap-2 marker:text-amber-600">{b.ul.map((li, j) => <li key={j}><RichText text={li} /></li>)}</ul>
                            return <ol key={i} className="list-decimal pl-6 flex flex-col gap-2 marker:text-amber-600">{b.ol.map((li, j) => <li key={j}><RichText text={li} /></li>)}</ol>
                        })}

                        {p.faq && (
                            <section className="flex flex-col gap-4 mt-4">
                                <h2 className="text-2xl font-medium tracking-tight text-zinc-100">Frequently asked questions</h2>
                                {p.faq.map((f) => (
                                    <div key={f.q}>
                                        <h3 className="text-[16px] font-medium text-zinc-100 mb-1">{f.q}</h3>
                                        <p>{plainText(f.a)}</p>
                                    </div>
                                ))}
                            </section>
                        )}

                        {p.sources && (
                            <section className="flex flex-col gap-2 mt-4 text-[13.5px]">
                                <h2 className="text-lg font-medium text-zinc-100">Sources</h2>
                                <ul className="list-disc pl-6 flex flex-col gap-1 marker:text-amber-600">
                                    {p.sources.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener" className="text-amber-500 underline underline-offset-2 hover:text-amber-400">{s.label}</a></li>)}
                                </ul>
                            </section>
                        )}

                        <p className="text-[13px] text-zinc-400 border-t border-zinc-800 pt-4">
                            Written by {BLOG_AUTHOR.display}, a digital marketing agency in Varanasi. <Link href="/about" className="underline underline-offset-2 hover:text-amber-500">About us</Link>
                        </p>
                    </article>

                    <aside className="flex flex-col gap-3">
                        <h2 className="text-lg font-medium text-zinc-100">More from the blog</h2>
                        {related.map((r) => (
                            <Link key={r.slug} href={`/blog/${r.slug}`} className="flex items-center justify-between gap-3 rounded-lg border border-zinc-800 px-4 py-3 text-[14px] text-zinc-200 hover:border-amber-600/40 hover:text-amber-500">
                                {r.title} <ArrowRight size={14} className="shrink-0" />
                            </Link>
                        ))}
                    </aside>
                </Wrapper>
            </Section>
            <ServiceCTA />
        </main>
    )
}
