import { DefaultTheme } from "vitepress";
import { getRootFunc } from "./common.mts";

const root = getRootFunc('/servers/mod_permanent/');

const sidebars: DefaultTheme.SidebarItem[] = [
    {
        text: '介绍',
        items: [
            { text: '服务器介绍', link: root`/` },
            { text: 'mod 列表', link: root`/mods` },
            { text: '网络相关', link: root`/links` },
        ]
    },
]

export default sidebars;
