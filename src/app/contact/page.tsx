import { Metadata } from "next";
import ContactContent from "@/components/contact/contact_content";

export const metadata: Metadata = {
    title: "Contact Us | Wizards Next — Varanasi",
    description: "Tell us about your business and goals and a strategist gets back to you within 24 hours. Office in Varanasi; serving Hyderabad and all of India.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
