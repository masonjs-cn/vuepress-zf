# 侧边栏

当顶部导航进入一个模块到，就会出现侧边栏

## 参考文档

[文档说明](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)

## 配置

```javascript
import { defaultTheme } from '@vuepress/theme-default'
import navbar from "./config/navbar";
import sidebar from "./config/sidebar";

export default {
  theme: defaultTheme({
    // 在这里进行配置
		navbar
  }),
}
```

### 相同的侧边栏

```javascript
/*
 * @Author: Mason
 * @Date: 2023-02-05 16:20:00
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-06 00:08:23
 * @FilePath: /vuepress-zf/docs/.vuepress/config/sidebar.ts
 */

// 侧边栏数组
// 所有页面会使用相同的侧边栏
export default [
  // SidebarItem
  {
    text: "笔记",
    link: "/notes/",
    children: [
      // SidebarItem
      {
        text: "github",
        link: "https://github.com",
        children: [],
      },
      // 字符串 - 页面文件路径
      "/notes/bar.md",
    ],
  },
];

```

### 不同的侧边栏

```javascript
/*
 * @Author: Mason
 * @Date: 2023-02-05 16:20:00
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-06 00:08:23
 * @FilePath: /vuepress-zf/docs/.vuepress/config/sidebar.ts
 */

// 侧边栏对象
// 不同子路径下的页面会使用不同的侧边栏
export default {
  '/notes/':[
      // SidebarItem
      {
        text: "笔记",
        link: "/notes/",
        children: [
          // SidebarItem
          {
            text: "github",
            link: "https://github.com",
            children: [],
          },
          // 字符串 - 页面文件路径
          "/notes/bar.md",
        ],
      },
    ];
  ]
}
```

## 拓展

未来考虑到项目的层级问题，所以我比较建议把 siderbar 放在外部目录下，这样的话你可以把只配置一个模块内部的。这个模块拆分为可选，主要看文章是否多来考虑。

```javascript
├── docs
│   ├── README.md
│   ├── blog
│   │   ├── README.md
│   ├── introduce
│   │   └── README.md
└── notes
    ├── bar.md
    ├── foo.md
    ├── javaScript
    │   ├── README.md
    │   ├── data-type.md
    │   └── sidebar.ts // => 侧边栏采集(可选)
    └── sidebar.ts // 侧边栏采集
```

```javascript
/*
 * @Author: Mason
 * @Date: 2023-02-05 16:20:00
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-06 00:29:57
 * @FilePath: /vuepress-zf/docs/.vuepress/config/sidebar.ts
 */

import notes from "../../notes/sidebar";

// 侧边栏对象
// 不同子路径下的页面会使用不同的侧边栏
export default {
  "/notes/": notes,
};

```

这样在 notes 目录下

```javascript
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

```

```javascript
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
    // ... 拓展
  ],
};
```

## 预览

![image.png](/./example-3.png)
