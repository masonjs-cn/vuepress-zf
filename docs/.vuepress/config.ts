/*
 * @Author: Mason
 * @Date: 2023-02-03 22:58:49
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-09 21:43:53
 * @FilePath: /vuepress-zf/docs/.vuepress/config.ts
 */
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import navbar from "./config/navbar";
import sidebar from "./config/sidebar";

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  base: "/vuepress-zf/",
  theme: defaultTheme({
    // 在这里进行配置
    navbar,
    // 所有页面会使用相同的侧边栏
    sidebar,
  }),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
});
