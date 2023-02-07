import{_ as e,M as t,p as i,q as l,R as n,t as s,N as o,a1 as p}from"./framework-204010b2.js";const c="/vuepress-zf/./example-1.png",r={},d=p(`<h1 id="首页配置" tabindex="-1"><a class="header-anchor" href="#首页配置" aria-hidden="true">#</a> 首页配置</h1><p>就如上一篇文档中讲到，如果你没有任何配置，你的 VuePress 站点仅有一些最基础的功能可以使用 markdown 进行一些基础写作。但是这样距离我们所说的博客，其实还远远不够。</p><h2 id="查看。vuepress-目录" tabindex="-1"><a class="header-anchor" href="#查看。vuepress-目录" aria-hidden="true">#</a> 查看。vuepress 目录</h2><p>当启动了 npm run dev 后 .vuepress 将会自动创建，并且产生缓存文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├─ docs
│  ├─ .vuepress // 会生成
│  │  ├─ client.ts   // <span class="token operator">&lt;</span>--- 客户端配置文件
│  │  └─ config.ts   // <span class="token operator">&lt;</span>--- 配置文件
│  │  └─ public      // <span class="token operator">&lt;</span>--- 资源文件
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config-配置文件" tabindex="-1"><a class="header-anchor" href="#config-配置文件" aria-hidden="true">#</a> config 配置文件</h2><p>这边还是比较建议实用 ts 类型的，毕竟代码的类型提示更加优秀！</p><h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h3><p>它是支持 js 格式，所以有一个优先级的配置如下 .vuepress/config.ts &gt; .vuepress/config.js &gt; .vuepress/config.mjs</p><h3 id="做一个基础配置" tabindex="-1"><a class="header-anchor" href="#做一个基础配置" aria-hidden="true">#</a> 做一个基础配置</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
 * @Author: Mason
 * @Date: 2023-02-03 22:58:49
 * @LastEditors: Mason
 * @LastEditTime: 2023-02-03 22:59:20
 * @FilePath: /vuepress-zf/docs/.vuepress/config.ts
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">&quot;你好， VuePress !&quot;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&quot;这是我的第一个 VuePress 站点&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="首页配置-1" tabindex="-1"><a class="header-anchor" href="#首页配置-1" aria-hidden="true">#</a> 首页配置</h2><p>图片事先放入资源文件目录下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├─ docs
│  ├─ .vuepress // 会生成
│  │  └─ public     // <span class="token operator">&lt;</span>--- 资源文件
│  │    └─    element.png     // <span class="token operator">&lt;</span>--- 图片
│  └─ README.md  // <span class="token operator">&lt;</span>--- 首页添加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docs/README.md</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /./element.png
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> Element
<span class="token key atrule">features</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 一致性 Consistency
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 反馈 Feedback
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 通过界面样式和交互动效让用户可以清晰的感知自己的操作
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 效率 Efficiency
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
<span class="token key atrule">footer</span><span class="token punctuation">:</span> by zf</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),u={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#home",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"项目预览",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#项目预览","aria-hidden":"true"},"#"),s(" 项目预览")],-1),m=n("p",null,[n("img",{src:c,alt:"image.png"})],-1);function k(h,b){const a=t("ExternalLinkIcon");return i(),l("div",null,[d,n("p",null,[s("关于配置，建议阅读"),n("a",u,[s("首页信息配置文档"),o(a)]),s("学习。")]),v,m])}const f=e(r,[["render",k],["__file","home-config.html.vue"]]);export{f as default};
