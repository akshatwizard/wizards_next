export function BoltLogo({ scrolled }: { scrolled: boolean | null }) {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src="/images/brand/logo.webp"
            alt="Wizards Next"
            className={`shrink-0 w-auto object-contain transition-all duration-300 ease-in-out ${
                scrolled ? "max-h-8 max-w-32" : "max-h-10 max-w-40"
            }`}
        />
    );
}
