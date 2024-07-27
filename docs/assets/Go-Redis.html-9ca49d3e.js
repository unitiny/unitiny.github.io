import{_ as e,W as i,X as a,a2 as n}from"./framework-5d92cd28.js";const d="/assets/image-20221024172412379-29b36a7f.png",s={},r=n('<h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><h3 id="redis通信协议" tabindex="-1"><a class="header-anchor" href="#redis通信协议" aria-hidden="true">#</a> redis通信协议</h3><figure><img src="'+d+`" alt="image-20221024172412379" tabindex="0" loading="lazy"><figcaption>image-20221024172412379</figcaption></figure><ul><li><p>正常回复</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+OK\\r\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>错误回复</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Error Msg\\r\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>整数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:123456\\r\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>多行字符串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$7\\r\\nunitiny\\r\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*3\\r\\n$3\\r\\nSET\\r\\n$3\\r\\nKEY\\r\\n$5\\r\\nVALUE\\r\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,4),t=[r];function l(c,u){return i(),a("div",null,t)}const v=e(s,[["render",l],["__file","Go-Redis.html.vue"]]);export{v as default};