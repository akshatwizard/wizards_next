export type MenuType = {
    name: string;
    path: string | null;
    subMenu: SubMenuType[] | null
}

export type SubMenuType = Omit<MenuType, "subMenu">