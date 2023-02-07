/*
 * @Author: Mason
 * @Date: 2023-02-05 16:20:00
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-07 21:36:14
 * @FilePath: /vuepress-zf/docs/.vuepress/config/sidebar.ts
 */

import notes from "../../notes/sidebar";
import vuepressNotes from "../../vuepress-notes/sidebar";

// 侧边栏对象
// 不同子路径下的页面会使用不同的侧边栏
export default {
  "/notes/": notes,
  "/vuepress-notes/": vuepressNotes,
};
