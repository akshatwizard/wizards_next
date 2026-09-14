import { Metadata } from "next";
import { notFound } from "next/navigation";
import { clients, getClientBySlug } from "@/constant/clients";
import ClientProfile from "@/components/clients/client_profile";
import { shortenForTitle } from "@/lib/utils";

export function generateStaticParams() {
    return clients.map((c) => ({ slug: c.slug }));
}

const TITLE_SUFFIX = " — Case Study | Wizards Next";
const MAX_TITLE_LENGTH = 65;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const client = getClientBySlug(slug);
    if (!client) return {};
    const name = shortenForTitle(client.name, MAX_TITLE_LENGTH - TITLE_SUFFIX.length);
    return {
        title: `${name}${TITLE_SUFFIX}`,
        description: client.tagline ?? `How Wizards Next has worked with ${client.name}.`,
        alternates: {
            canonical: `/our-works/${client.slug}`,
        },
    };
}

export default async function ClientPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const client = getClientBySlug(slug);
    if (!client) notFound();
    return <ClientProfile client={client} />;
}
