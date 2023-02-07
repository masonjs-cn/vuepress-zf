# vuepress 项目初始搭建

该项目主要使用 vuepress 搭建技术博客

## 参考网站

[vuepress官网](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html#%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85)

## 依赖环境

- [Node.js v14.18.0+](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/zh-Hans/)

## 构建项目

### 创建文件

```javascript
// 创建文件、进入文件
mkdir vuepress-zf && cd vuepress-zf
```

### 初始化 npm 项目

```bash
// 初始化 npm 项目, 不论是 npm 、yarn 、pnpm 都可以
pnpm init

# yarn init
# npm init -y
```

### 将默认的临时目录和缓存目录添加到 .gitignore 文件中

```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

### 将 VuePress 安装为本地依赖

```bash
pnpm add -D vuepress@next @vuepress/client@next vue

# yarn add -D vuepress@next
# npm install -D vuepress@next
```

### 创建你的第一篇文档

```javascript
mkdir docs && echo '# Hello zf' > docs/README.md
```

### 在 packjson 启动项目

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

### 在本地启动服务器

```bash
npm run dev

# yarn dev
# pnpm run dev
```

## 访问本地地址

直接访问 [http://localhost:8080](http://localhost:8080)
你将看到一个略微兼容的博客

![image.png](/./example-0.png)
