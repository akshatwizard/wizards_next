'use client'

export function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

            {/* Grid — fades out toward top via mask */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: '44px 44px',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.8) 55%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.8) 55%, transparent 100%)',
                }}
            />

            {/* Primary orb — bottom right, brand blue */}
            <div
                className="absolute -bottom-80 -right-80 size-150 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(24,95,165,0.28) 0%, transparent 70%)',
                }}
            />

            {/* Brand amber orb — bottom left */}
            <div
                className="absolute bottom-10 -left-100 size-150 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(253,115,3,0.14) 0%, transparent 70%)',
                }}
            />

            {/* Brand yellow orb — top center, very faint */}
            {/* <div
                className="absolute -top-20 left-1/3 size-[320px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(254,232,0,0.07) 0%, transparent 70%)',
                }}
            /> */}

            {/* Top-left corner bleed — amber */}
            {/* <div
                className="absolute -top-10 -left-10 size-55"
                style={{
                    background: 'radial-gradient(circle at top left, rgba(253,158,23,0.13) 0%, transparent 65%)',
                }}
            /> */}

            {/* Vertical line accent — right side, blue */}
            <div
                className="absolute top-0 right-0 w-px h-72 opacity-30"
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(55,138,221,0.7), transparent)',
                    transform: 'translateX(-120px)',
                }}
            />

            {/* Vertical line accent — right side, dimmer */}
            <div
                className="absolute top-0 right-0 w-px h-44 opacity-[0.08]"
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(55,138,221,0.5), transparent)',
                    transform: 'translateX(-200px)',
                }}
            />

            {/* Vertical line accent — left side, amber */}
            <div
                className="absolute top-0 left-0 w-px h-56 opacity-20"
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(253,158,23,0.8), transparent)',
                    transform: 'translateX(80px)',
                }}
            />

            {/* Horizontal rule — mid section, very subtle */}
            <div
                className="absolute top-1/2 inset-x-0 h-px opacity-[0.04]"
                style={{
                    background: 'linear-gradient(to right, transparent, rgba(254,232,0,0.6) 30%, rgba(253,115,3,0.6) 70%, transparent)',
                }}
            />

        </div>
    )
}