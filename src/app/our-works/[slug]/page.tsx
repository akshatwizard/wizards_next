import { Metadata } from "next";
import { notFound } from "next/navigation";
import { clients, getClientBySlug } from "@/constant/clients";
import ClientProfile from "@/components/clients/client_profile";

export function generateStaticParams() {
    return clients.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const client = getClientBySlug(slug);
    if (!client) return {};
    return {
        title: `${client.name} — Case Study | Wizards Next`,
        description: client.tagline ?? `How Wizards Next has worked with ${client.name}.`,
    };
}

export default async function ClientPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const client = getClientBySlug(slug);
    if (!client) notFound();
    return <ClientProfile client={client} />;
}
