import { LucideIcon } from "lucide-react";

export type HeroStat = {
    value: string
    label: string
}

export type HeroCta = {
    label: string;
    href: string;
    icon?: LucideIcon
}

export type ServiceHeroTypes = {
    bread_crumb: string;
    badge: string;
    heading: React.ReactNode;
    content: string
    primaryCta?: HeroCta
    secondaryCta?: HeroCta
    clientCount?: string
    clients_initials: string[];
    
    stats?: HeroStat[]

    right_section: React.ReactNode
}

export interface WebDevData {
    data: ServiceHeroTypes
}