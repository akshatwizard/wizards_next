import { Metadata } from "next";
import CareersContent from "@/components/careers/careers_content";

export const metadata: Metadata = {
    title: "Careers | Wizards Next — Digital Marketing Agency",
    description: "A small, hands-on marketing and development team in Varanasi and Hyderabad — no department silos, no six-week approval chains. See open roles.",
    alternates: {
        canonical: "/careers",
    },
};

export default function CareersPage() {
    return <CareersContent />;
}
