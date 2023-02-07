# 页面路由配置

VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。

## 参考文档

[页面说明](https://v2.vuepress.vuejs.org/zh/guide/page.html#%E8%B7%AF%E7%94%B1)

## 路由

默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。

```bash
└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
```

### 自动生成

| 相对路径 | 路由路径 |
| --- | --- |
| /README.md | / |
| /index.md | / |
| /contributing.md | /contributing.html |
| /guide/README.md | /guide/ |
| /guide/getting-started.md | /guide/getting-started.html |

## Frontmatter

```bash
---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---
```

### 自动生成

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="页面的描述">
    <title>页面的标题</title>
</head>
<body>

</body>
</html>
```
