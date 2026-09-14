import { Metadata } from "next";
import ContactContent from "@/components/contact/contact_content";

export const metadata: Metadata = {
    title: "Contact Us | Wizards Next — Varanasi & Hyderabad",
    description: "Tell us about your business and what you're trying to achieve — a strategist gets back to you within 24 hours. Offices in Varanasi and Hyderabad.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
