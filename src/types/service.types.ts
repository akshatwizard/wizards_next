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

export type WhatIsTypes = {
    icon: LucideIcon,
    title: string,
    body: string
}


export type ServiceAboutTypes = {
    badge: string;
    heading: React.ReactNode;
    content: string;
    what_is: WhatIsTypes[]
}

export type ServiceLists = {
    icon: LucideIcon,
    title: string,
    desc: string;
    tags: string[];
}

export type ServicesOfferedTypes = {
    badge: string;
    heading: React.ReactNode;
    // content: string;
    service_list: ServiceLists[]
}

export type ProcessListType = {
    num: string;
    title: string;
    desc: string;
}

export type ServiceProcessType = {
    badge: string;
    heading: React.ReactNode;
    process_list: ProcessListType[]
}

export type CaseStudyType = {
    client: string,
    industry: string,
    result: string,
    metric: string,
    label: string,
    desc: string,
    tags: string[],
}

export type ServiceCaseStudyType = {
    badge: string;
    heading: React.ReactNode;
    content: string;
    case_study_list: CaseStudyType[]
}

export type ProjectListType = {
    name: string,
    sector: string,
    result: string,
    metric: string,
    metricLabel: string,
    desc: string,
    tags: string[],
    href: string,
}

export type ServiceProjectType = {
    project_list: ProjectListType[],
    filter: string[]
}

export type ClientList = {
    initials: string,
    name: string,
    industry: string
}

export type ServiceClientListType = {
    client_list: ClientList[]
}