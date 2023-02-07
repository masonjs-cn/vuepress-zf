import{_ as e,M as t,p as i,q as r,R as s,t as a,N as p,a1 as o}from"./framework-204010b2.js";const l={},c=o(`<h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> markdown</h1><h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>加粗
<span class="token operator">**</span>这是加粗的文字<span class="token operator">**</span>

斜体
<span class="token operator">*</span>这是倾斜的文字<span class="token operator">*</span>\`

斜体加粗
<span class="token operator">**</span><span class="token operator">*</span>这是斜体加粗的文字<span class="token operator">**</span><span class="token operator">*</span>

删除线
<span class="token operator">~</span><span class="token operator">~</span>这是加删除线的文字<span class="token operator">~</span><span class="token operator">~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&gt;</span> 这是引用的内容
<span class="token operator">&gt;&gt;</span> 这是引用的内容
<span class="token operator">&gt;&gt;&gt;</span><span class="token operator">&gt;&gt;&gt;</span><span class="token operator">&gt;&gt;&gt;</span><span class="token operator">&gt;</span> 这是引用的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>
<span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">**</span><span class="token operator">*</span>
<span class="token operator">**</span><span class="token operator">**</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token punctuation">[</span>图片alt<span class="token punctuation">]</span><span class="token punctuation">(</span>图片地址 <span class="token string">&#39;&#39;</span>图片title<span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="超链接" tabindex="-1"><a class="header-anchor" href="#超链接" aria-hidden="true">#</a> 超链接</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span>超链接名<span class="token punctuation">]</span><span class="token punctuation">(</span>超链接地址 <span class="token string">&quot;超链接title&quot;</span><span class="token punctuation">)</span>
title可加可不加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span>简书<span class="token punctuation">]</span><span class="token punctuation">(</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>jianshu<span class="token punctuation">.</span>com<span class="token punctuation">)</span>
<span class="token punctuation">[</span>百度<span class="token punctuation">]</span><span class="token punctuation">(</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>baidu<span class="token punctuation">.</span>com<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">-</span> 列表内容
<span class="token operator">+</span> 列表内容
<span class="token operator">*</span> 列表内容

注意：<span class="token operator">-</span> <span class="token operator">+</span> <span class="token operator">*</span> 跟内容之间都要有一个空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> 列表内容
<span class="token number">2.</span> 列表内容
<span class="token number">3.</span> 列表内容

注意：序号跟内容之间要有空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>姓名<span class="token operator">|</span>年龄<span class="token operator">|</span> 分数
<span class="token operator">--</span> <span class="token operator">|</span><span class="token operator">:</span><span class="token operator">--</span><span class="token operator">:</span><span class="token operator">|</span><span class="token operator">--</span><span class="token operator">:</span>
张三<span class="token operator">|</span> <span class="token number">20</span> <span class="token operator">|</span> <span class="token number">100</span>
李四<span class="token operator">|</span> <span class="token number">20</span> <span class="token operator">|</span> <span class="token number">98</span>
王五<span class="token operator">|</span> <span class="token number">20</span> <span class="token operator">|</span> <span class="token number">60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">javascript

    let a = 1

    </span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji 🎉 ！</h2>`,24),d={href:"https://github.com/ikatyang/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"};function u(v,m){const n=t("ExternalLinkIcon");return i(),r("div",null,[c,s("p",null,[a("你可以在你的 Markdown 内容中输入 :EMOJICODE: 来添加 Emoji 表情。 前往 "),s("a",d,[a("emoji-cheat-sheet"),p(n)]),a(" 来查看所有可用的 Emoji 表情和对应代码")])])}const h=e(l,[["render",u],["__file","markdown-learn.html.vue"]]);export{h as default};
