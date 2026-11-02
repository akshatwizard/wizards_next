"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

const DEFAULT_TEXT = "Hi Wizards Next, I'd like to know more about your services.";
const DOCTOR_TEXT = "Hi, I'm a doctor and want a free profile audit";

export function trackWhatsAppClick(path: string) {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") w.gtag("event", "whatsapp_click", { page_path: path });
}

export default function WhatsAppButton() {
    const pathname = usePathname() || "/";
    const text = pathname.startsWith("/services/personal-branding-for-doctors") ? DOCTOR_TEXT : DEFAULT_TEXT;
    const href = "https://wa.me/918072199651?text=" + encodeURIComponent(text);
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"
            onClick={() => trackWhatsAppClick(pathname)}
            className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-500 text-black shadow-lg transition-all duration-200 active:scale-[0.97]">
            <MessageCircle size={26} />
        </a>
    );
}
