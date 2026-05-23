import { MenuType } from "@/types/menu.types";

export const NavMenu: MenuType[] = [
    {
        name: "_hello",
        path: "/",
        subMenu: null
    },
    {
        name: "About",
        path: "/about",
        subMenu: null
    },
    {
        name: "Services",
        path: "/services",
        subMenu: [
            {
                name: "Digital Marketing",
                path: "/services/digital-marketing"
            },
            {
                name: "Social Media Management",
                path: "/services/social-media"
            },
            {
                name: "Brand Designing",
                path: "/services/brand-designing"
            },
            {
                name: "Graphic Designing",
                path: "/services/graphic-designing"
            },
            {
                name: "Website Development",
                path: "/services/website-development"
            },
            {
                name: "App Development",
                path: "/services/app-dev"
            },
        ]
    },
    {
        name: "Our Works",
        path: "/our-works",
        subMenu: null
    },
    {
        name: "Blogs",
        path: "/blogs",
        subMenu: null
    }
]