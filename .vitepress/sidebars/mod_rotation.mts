import { DefaultTheme } from "vitepress";
import { getRootFunc } from "./common.mts";

const root = getRootFunc('/servers/mod_rotation/');

const sidebars: DefaultTheme.SidebarItem[] = [
    {
        text: '介绍',
        items: [
            { text: '服务器介绍', link: root`/` },
            { text: '当前周目', link: root`/now` },
            { text: '周目历史', link: root`/history` },
            { text: '网络相关', link: root`/links` },
        ]
    },
]

export default sidebars;