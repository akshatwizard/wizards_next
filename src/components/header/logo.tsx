export function BoltLogo({ scrolled }: { scrolled: boolean | null }) {
    const height = scrolled ? 30 : 38;

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src="/images/brand/logo.webp"
            alt="Wizards Next"
            height={height}
            className="shrink-0 w-auto transition-all duration-300 ease-in-out"
        />
    );
}
