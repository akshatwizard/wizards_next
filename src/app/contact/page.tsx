import { Metadata } from "next";
import ContactContent from "@/components/contact/contact_content";

export const metadata: Metadata = {
    title: "Contact Us | Wizards Next — Varanasi",
    description: "Tell us about your business and what you're trying to achieve — a strategist gets back to you within 24 hours. Office in Varanasi; serving clients in Hyderabad and across India.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
