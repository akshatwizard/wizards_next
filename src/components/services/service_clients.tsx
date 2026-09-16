import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { getClientsByService } from "@/constant/clients";
import { getServiceMeta } from "@/constant/service_meta";
import { ProjectCard } from "@/components/work";

export default function ServiceClientList({ serviceSlug }: { serviceSlug: string }) {
    const serviceClients = getClientsByService(serviceSlug);
    const serviceName = getServiceMeta(serviceSlug)?.name ?? "this service";

    // No fallback/placeholder copy invented here — if no real client is
    // tagged with this service yet, the section simply doesn't render,
    // the same rule the rest of the site already follows for missing data.
    if (serviceClients.length === 0) return null;

    return (
        <Section tone="raised">
            <Wrapper className="lg:py-12 md:py-10 py-8">
                <FadeUp>
                    <p className="text-zinc-100 font-semibold text-lg mb-1">
                        Clients using {serviceName}
                    </p>
                    <p className="text-zinc-200 text-[13px] font-light mb-6">
                        Real engagements, not mockups — open a profile to see the actual results.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {serviceClients.map((client, i) => (
                        <FadeUp key={client.slug} delay={Math.min(i * 0.05, 0.3)}>
                            <ProjectCard client={client} />
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    );
}
