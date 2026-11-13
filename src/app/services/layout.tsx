import ServiceJsonLd from "@/components/services/service_jsonld";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ServiceJsonLd />
            {children}
        </>
    );
}
