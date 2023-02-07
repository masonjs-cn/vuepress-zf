/*
 * @Author: Mason
 * @Date: 2023-02-05 16:20:00
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-07 21:38:46
 * @FilePath: /vuepress-zf/docs/.vuepress/config/navbar.ts
 */

export default [
  // NavbarItem 连接组合
  {
    text: "博客",
    link: "/blog/",
  },
  {
    text: "vuepress文档",
    link: "/vuepress-notes/",
  },
  // NavbarGroup 子集模式
  {
    text: "笔记",
    children: ["/notes/foo.md", "/notes/bar.md"],
  },
  //  字符串 - 页面文件路径
  "/introduce/README.md",
  // 外部链接
  {
    text: "百度",
    link: "https://www.baidu.com",
  },
];
