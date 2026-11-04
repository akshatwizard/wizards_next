import Image from "next/image";
import { SmmClient } from "@/constant/smm_clients";

// Round Instagram profile picture, with an initials fallback when no
// picture is on file. These are small static files, so they're served
// as-is (unoptimized) rather than through the image optimizer.
export default function SmmAvatar({ client, size, useLogo = false }: { client: SmmClient; size: number; useLogo?: boolean }) {
    const src = useLogo && client.logo ? client.logo : client.avatar;
    const initials = client.name.replace(/^Dr\.?\s+/i, "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    const isLogo = useLogo && !!client.logo;
    return (
        <div
            className={`relative shrink-0 overflow-hidden border border-zinc-800 flex items-center justify-center ${isLogo ? "rounded-2xl p-3 bg-white" : "rounded-full bg-zinc-950"}`}
            style={isLogo ? { width: size * 2, height: size } : { width: size, height: size }}
        >
            {src ? (
                <Image
                    src={src}
                    alt={`${client.name} logo`}
                    width={isLogo ? size * 2 : size}
                    height={size}
                    unoptimized
                    className={`w-full h-full ${isLogo ? "object-contain" : "object-cover"}`}
                />
            ) : (
                <span className="font-syne font-bold text-amber-600" style={{ fontSize: size / 3 }}>{initials}</span>
            )}
        </div>
    );
}
