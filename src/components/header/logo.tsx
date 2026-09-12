import Image from "next/image";

export function BoltLogo({ scrolled }: { scrolled: boolean | null }) {
    const height = scrolled ? 30 : 38;

    return (
        <Image
            src="/images/brand/logo.webp"
            alt="Wizards Next"
            width={547}
            height={219}
            priority
            style={{ height, width: "auto" }}
            className="shrink-0 transition-all duration-300 ease-in-out"
        />
    );
}
