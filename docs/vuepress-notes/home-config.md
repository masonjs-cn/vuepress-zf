# 首页配置

就如上一篇文档中讲到，如果你没有任何配置，你的 VuePress 站点仅有一些最基础的功能可以使用 markdown 进行一些基础写作。但是这样距离我们所说的博客，其实还远远不够。

## 查看。vuepress 目录

当启动了 npm run dev 后 .vuepress 将会自动创建，并且产生缓存文件

```bash
├─ docs
│  ├─ .vuepress // 会生成
│  │  ├─ client.ts   // <--- 客户端配置文件
│  │  └─ config.ts   // <--- 配置文件
│  │  └─ public      // <--- 资源文件
│  └─ README.md
├─ .gitignore
└─ package.json
```

## config 配置文件

这边还是比较建议实用 ts 类型的，毕竟代码的类型提示更加优秀！

### 优先级

它是支持 js 格式，所以有一个优先级的配置如下
.vuepress/config.ts >  .vuepress/config.js > .vuepress/config.mjs

### 做一个基础配置

```typescript
/*
 * @Author: Mason
 * @Date: 2023-02-03 22:58:49
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-03 22:59:20
 * @FilePath: /vuepress-zf/docs/.vuepress/config.ts
 */

import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， VuePress !",
  description: "这是我的第一个 VuePress 站点",
});
```

## 首页配置

图片事先放入资源文件目录下

```bash
├─ docs
│  ├─ .vuepress // 会生成
│  │  └─ public     // <--- 资源文件
│  │    └─    element.png     // <--- 图片
│  └─ README.md  // <--- 首页添加
```

docs/README.md

```markdown
---
home: true
heroImage: /./element.png
heroText: Element
features:
- title: 一致性 Consistency
  details: 与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念
- title: 反馈 Feedback
  details: 通过界面样式和交互动效让用户可以清晰的感知自己的操作
- title: 效率 Efficiency
  details: 界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
footer: by zf
---
```

关于配置，建议阅读[首页信息配置文档](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#home)学习。

## 项目预览

![image.png](/./example-1.png)
