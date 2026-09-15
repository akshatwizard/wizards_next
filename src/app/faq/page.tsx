import { Metadata } from "next";
import FAQPageContent from "@/components/faq/faq_page_content";
import { FAQ_CATEGORIES } from "@/constant/faq";

export const metadata: Metadata = {
    title: "FAQ | Wizards Next — Digital Marketing Agency",
    description: "Answers to the questions we get most — pricing, timelines, ownership, and how we work — organised by topic.",
    alternates: {
        canonical: "/faq",
    },
};

export default function FAQPage() {
    // FAQPage structured data for the complete list — separate from the
    // homepage's own (which only covers its curated 10), so the full set
    // gets its own rich-result eligibility on this page.
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_CATEGORIES.flatMap((group) =>
            group.items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.a,
                },
            }))
        ),
    };

    return (
        <>
            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
            />
            <FAQPageContent />
        </>
    );
}
