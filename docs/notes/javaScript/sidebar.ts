/*
 * @Author: Mason
 * @Date: 2023-02-05 23:06:15
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-06 00:30:17
 * @FilePath: /vuepress-zf/docs/notes/javaScript/sidebar.ts
 */

const javaScript = "/notes/javaScript/";

export default {
  text: "javaScript",
  collapsible: true, // 可折叠的侧边栏
  children: [
    {
      text: "介绍",
      link: `${javaScript}`,
    },
    {
      text: "基本数据类型",
      link: `${javaScript}data-type`,
    },
  ],
};
