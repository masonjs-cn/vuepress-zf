/*
 * @Author: Mason
 * @Date: 2023-02-05 23:06:15
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-06 00:35:17
 * @FilePath: /vuepress-zf/docs/notes/sidebar.ts
 */
import javaScript from "./javaScript/sidebar";

export default [
  {
    // SidebarItem
    text: "笔记",
    link: "/notes/",
    children: [
      { ...javaScript },
      // SidebarItem
      {
        text: "github",
        link: "https://github.com",
      },
      // 字符串 - 页面文件路径
      "/notes/bar.md",
    ],
  },
];
