import{_ as e,M as t,p as i,q as l,R as n,t as s,N as p,a1 as c}from"./framework-204010b2.js";const o="/vuepress-zf/./example-2.png",r={},d=n("h1",{id:"顶部导航栏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#顶部导航栏","aria-hidden":"true"},"#"),s(" 顶部导航栏")],-1),u=n("p",null,"设置导航项目的，其实就是在 vuepress 的主题中设置，首先要安装主题配置",-1),v=n("h2",{id:"参考文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),s(" 参考文档")],-1),m={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html",target:"_blank",rel:"noopener noreferrer"},b=c(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i @vuepress/theme-default@next <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── config
│   └── sidebar.ts
│   └── navbar.ts
├── config.ts
└── public
    └── element.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> from <span class="token string">&#39;@vuepress/theme-default&#39;</span>
<span class="token function">import</span> navbar from <span class="token string">&quot;./config/navbar&quot;</span><span class="token punctuation">;</span>

<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  theme: defaultTheme<span class="token punctuation">(</span><span class="token punctuation">{</span>
    // 在这里进行配置
		navbar
  <span class="token punctuation">}</span><span class="token punctuation">)</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Author: Mason
 * @Date: 2023-02-05 16:20:00
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-05 22:56:46
 * @FilePath: /vuepress-zf/docs/.vuepress/config/navbar.ts
 */</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token comment">// NavbarItem 连接组合</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;博客&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/blog/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// NavbarGroup 子集模式</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;笔记&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/notes/foo.md&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/notes/bar.md&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//  字符串 - 页面文件路径</span>
  <span class="token string">&quot;/introduce/README.md&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 外部链接</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;百度&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由文件配置" tabindex="-1"><a class="header-anchor" href="#路由文件配置" aria-hidden="true">#</a> 路由文件配置</h3><p>如果看不懂，这时候可以回到上一章，看路由的配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├── docs
│   ├── <span class="token constant">README</span><span class="token punctuation">.</span>md
│   ├── blog
│   │   ├── <span class="token constant">README</span><span class="token punctuation">.</span>md
│   ├── introduce
│   │   └── <span class="token constant">README</span><span class="token punctuation">.</span>md
│   └── notes
│       ├── bar<span class="token punctuation">.</span>md
│       ├── foo<span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2><p><img src="`+o+'" alt="image.png"></p><p>这样顶部导航就完成了。</p>',12);function k(h,g){const a=t("ExternalLinkIcon");return i(),l("div",null,[d,u,v,n("p",null,[n("a",m,[s("文档说明"),p(a)])]),b])}const _=e(r,[["render",k],["__file","nav-config.html.vue"]]);export{_ as default};
