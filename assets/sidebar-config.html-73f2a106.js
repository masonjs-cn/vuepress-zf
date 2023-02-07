import{_ as e,M as t,p,q as i,R as n,t as s,N as o,a1 as l}from"./framework-204010b2.js";const c="/vuepress-zf/./example-3.png",r={},u=n("h1",{id:"侧边栏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#侧边栏","aria-hidden":"true"},"#"),s(" 侧边栏")],-1),d=n("p",null,"当顶部导航进入一个模块到，就会出现侧边栏",-1),v=n("h2",{id:"参考文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),s(" 参考文档")],-1),k={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>
<span class="token keyword">import</span> navbar <span class="token keyword">from</span> <span class="token string">&quot;./config/navbar&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> sidebar <span class="token keyword">from</span> <span class="token string">&quot;./config/sidebar&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 在这里进行配置</span>
		navbar
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相同的侧边栏" tabindex="-1"><a class="header-anchor" href="#相同的侧边栏" aria-hidden="true">#</a> 相同的侧边栏</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Author: Mason
 * @Date: 2023-02-05 16:20:00
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-06 00:08:23
 * @FilePath: /vuepress-zf/docs/.vuepress/config/sidebar.ts
 */</span>

<span class="token comment">// 侧边栏数组</span>
<span class="token comment">// 所有页面会使用相同的侧边栏</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token comment">// SidebarItem</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;笔记&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/notes/&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// SidebarItem</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;github&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 字符串 - 页面文件路径</span>
      <span class="token string">&quot;/notes/bar.md&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不同的侧边栏" tabindex="-1"><a class="header-anchor" href="#不同的侧边栏" aria-hidden="true">#</a> 不同的侧边栏</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Author: Mason
 * @Date: 2023-02-05 16:20:00
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-06 00:08:23
 * @FilePath: /vuepress-zf/docs/.vuepress/config/sidebar.ts
 */</span>

<span class="token comment">// 侧边栏对象</span>
<span class="token comment">// 不同子路径下的页面会使用不同的侧边栏</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/notes/&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token comment">// SidebarItem</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;笔记&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/notes/&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// SidebarItem</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;github&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// 字符串 - 页面文件路径</span>
          <span class="token string">&quot;/notes/bar.md&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h2><p>未来考虑到项目的层级问题，所以我比较建议把 siderbar 放在外部目录下，这样的话你可以把只配置一个模块内部的。这个模块拆分为可选，主要看文章是否多来考虑。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├── docs
│   ├── <span class="token constant">README</span><span class="token punctuation">.</span>md
│   ├── blog
│   │   ├── <span class="token constant">README</span><span class="token punctuation">.</span>md
│   ├── introduce
│   │   └── <span class="token constant">README</span><span class="token punctuation">.</span>md
└── notes
    ├── bar<span class="token punctuation">.</span>md
    ├── foo<span class="token punctuation">.</span>md
    ├── javaScript
    │   ├── <span class="token constant">README</span><span class="token punctuation">.</span>md
    │   ├── data<span class="token operator">-</span>type<span class="token punctuation">.</span>md
    │   └── sidebar<span class="token punctuation">.</span>ts <span class="token comment">// =&gt; 侧边栏采集(可选)</span>
    └── sidebar<span class="token punctuation">.</span>ts <span class="token comment">// 侧边栏采集</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Author: Mason
 * @Date: 2023-02-05 16:20:00
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-06 00:29:57
 * @FilePath: /vuepress-zf/docs/.vuepress/config/sidebar.ts
 */</span>

<span class="token keyword">import</span> notes <span class="token keyword">from</span> <span class="token string">&quot;../../notes/sidebar&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 侧边栏对象</span>
<span class="token comment">// 不同子路径下的页面会使用不同的侧边栏</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;/notes/&quot;</span><span class="token operator">:</span> notes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样在 notes 目录下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Author: Mason
 * @Date: 2023-02-05 23:06:15
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-06 00:35:17
 * @FilePath: /vuepress-zf/docs/notes/sidebar.ts
 */</span>
<span class="token keyword">import</span> javaScript <span class="token keyword">from</span> <span class="token string">&quot;./javaScript/sidebar&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// SidebarItem</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;笔记&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/notes/&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token operator">...</span>javaScript <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// SidebarItem</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;github&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 字符串 - 页面文件路径</span>
      <span class="token string">&quot;/notes/bar.md&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Author: Mason
 * @Date: 2023-02-05 23:06:15
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-06 00:30:17
 * @FilePath: /vuepress-zf/docs/notes/javaScript/sidebar.ts
 */</span>

<span class="token keyword">const</span> javaScript <span class="token operator">=</span> <span class="token string">&quot;/notes/javaScript/&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;javaScript&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可折叠的侧边栏</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;介绍&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>javaScript<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;基本数据类型&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>javaScript<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">data-type</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ... 拓展</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2><p><img src="`+c+'" alt="image.png"></p>',15);function b(h,g){const a=t("ExternalLinkIcon");return p(),i("div",null,[u,d,v,n("p",null,[n("a",k,[s("文档说明"),o(a)])]),m])}const q=e(r,[["render",b],["__file","sidebar-config.html.vue"]]);export{q as default};
