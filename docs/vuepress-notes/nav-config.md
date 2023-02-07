# 顶部导航栏

设置导航项目的，其实就是在 vuepress 的主题中设置，首先要安装主题配置

## 参考文档

[文档说明](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)

## 配置

```bash
pnpm i @vuepress/theme-default@next -D
```

```bash
├── config
│   └── sidebar.ts
│   └── navbar.ts
├── config.ts
└── public
    └── element.png
```

```bash
import { defaultTheme } from '@vuepress/theme-default'
import navbar from "./config/navbar";

export default {
  theme: defaultTheme({
    // 在这里进行配置
		navbar
  }),
}
```

### 基础用法

```javascript
/*
 * @Author: Mason
 * @Date: 2023-02-05 16:20:00
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-05 22:56:46
 * @FilePath: /vuepress-zf/docs/.vuepress/config/navbar.ts
 */

export default [
  // NavbarItem 连接组合
  {
    text: "博客",
    link: "/blog/",
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

```

### 路由文件配置

如果看不懂，这时候可以回到上一章，看路由的配置

```javascript
├── docs
│   ├── README.md
│   ├── blog
│   │   ├── README.md
│   ├── introduce
│   │   └── README.md
│   └── notes
│       ├── bar.md
│       ├── foo.md
```

## 预览

![image.png](/./example-2.png)

这样顶部导航就完成了。
