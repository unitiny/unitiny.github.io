import{_ as d,W as n,X as t,Y as e,Z as a,a0 as s,a2 as r,C as c}from"./framework-5d92cd28.js";const l="/assets/image-20220924163554009-b49644b2.png",o="/assets/image-20220926145208505-95a46de5.png",g="/assets/image-20220926151258870-45d1c6b3.png",u="/assets/image-20220926154804367-bf08d24c.png",m={},h=e("h2",{id:"学习",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#学习","aria-hidden":"true"},"#"),a(" 学习")],-1),v={href:"https://reg.coderead.cn/?u_dit=bili2#/course/regex",target:"_blank",rel:"noopener noreferrer"},x=r(`<h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[0-9]等同于\\d，表示匹配0-9的单个数字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.不包括换行符，但\\s包括
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[A-Z^IO] 要大写字母，又想排除I和O,这么写是不对的。A-Z已经包含I和O了,匹配字符中有I和O也会匹配A-Z
导致^IO不起作用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>量词后面不能在加量词,如a**,a{1,3}*，?可加在量词后面，表示最少化匹配
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>同一个分组如果使用了量词，该分组会代表多个值，这时通过$组号去提取值的时候会得到该组最后匹配的值。
如(\\d)+ 匹配12345，通过$1将得到5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反向引用" tabindex="-1"><a class="header-anchor" href="#反向引用" aria-hidden="true">#</a> 反向引用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在表达式中引用之前的分组，即反向引用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="image-20220924163554009" tabindex="0" loading="lazy"><figcaption>image-20220924163554009</figcaption></figure><h3 id="替换" tabindex="-1"><a class="header-anchor" href="#替换" aria-hidden="true">#</a> 替换</h3><p>替换操作指将正则匹配到的内容，替换成指定字符串，该字符串可通过<code>$组号</code>引用组进行拼装。通过<code>$0</code>可以引用整个匹配的内容。比如：日期“1960/02/19”被匹配之后 <code>$0</code>表示整个日期，<code>$1、$2、$3</code> 分别表示年月日。请注意反向引用与替换引用的<strong>语法区别</strong>，前者是使用<code>\\组号</code>，而替换使用<code>$组号</code>。</p><h3 id="命名分组" tabindex="-1"><a class="header-anchor" href="#命名分组" aria-hidden="true">#</a> 命名分组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(?&lt;title&gt;),命名了一个名为title的分组,但不能使用反向引用\\title，故较少使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="移除分组" tabindex="-1"><a class="header-anchor" href="#移除分组" aria-hidden="true">#</a> 移除分组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(?:)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="断言" tabindex="-1"><a class="header-anchor" href="#断言" aria-hidden="true">#</a> 断言</h3><figure><img src="`+o+'" alt="image-20220926145208505" tabindex="0" loading="lazy"><figcaption>image-20220926145208505</figcaption></figure><figure><img src="'+g+'" alt="image-20220926151258870" tabindex="0" loading="lazy"><figcaption>image-20220926151258870</figcaption></figure><figure><img src="'+u+'" alt="image-20220926154804367" tabindex="0" loading="lazy"><figcaption>image-20220926154804367</figcaption></figure>',19);function b(p,_){const i=c("ExternalLinkIcon");return n(),t("div",null,[h,e("p",null,[e("a",v,[a("网址"),s(i)])]),x])}const $=d(m,[["render",b],["__file","正则表达式.html.vue"]]);export{$ as default};
