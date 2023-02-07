/*
 * @Author: Mason
 * @Date: 2023-02-05 23:06:15
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-07 22:08:02
 * @FilePath: /vuepress-zf/docs/vuepress-notes/sidebar.ts
 */

const vuepressNotes = "/vuepress-notes/";

export default [
  {
    // SidebarItem
    text: "vuepress",
    link: "/vuepress-notes/",
    children: [
      {
        text: "vuepress 项目初始搭建",
        link: `${vuepressNotes}`,
      },
      {
        text: "首页配置",
        link: `${vuepressNotes}home-config`,
      },
      {
        text: "页面路由配置",
        link: `${vuepressNotes}page-config`,
      },
      {
        text: "顶部导航栏",
        link: `${vuepressNotes}nav-config`,
      },
      {
        text: "侧边栏",
        link: `${vuepressNotes}sidebar-config`,
      },
      {
        text: "markdown",
        link: `${vuepressNotes}markdown-learn`,
      },
    ],
  },
];
