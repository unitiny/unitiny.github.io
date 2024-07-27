import{_ as p,W as i,X as o,Y as n,Z as a,a0 as e,a2 as t,C as l}from"./framework-5d92cd28.js";const c={},r=t(`<h1 id="php-笔记" tabindex="-1"><a class="header-anchor" href="#php-笔记" aria-hidden="true">#</a> PHP 笔记</h1><h2 id="使用及功能" tabindex="-1"><a class="header-anchor" href="#使用及功能" aria-hidden="true">#</a> 使用及功能：</h2><h3 id="cmd-查看端口" tabindex="-1"><a class="header-anchor" href="#cmd-查看端口" aria-hidden="true">#</a> cmd 查看端口</h3><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>netstat -aon 查看端口  
netstat -ano|findstr &quot;8080&quot; 查看8080端口  
taskkill -PID 992 -F 停止某端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d={id:"php自动补全",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#php自动补全","aria-hidden":"true"},"#",-1),k={href:"http://www.bubuko.com/infodetail-3212164.html",target:"_blank",rel:"noopener noreferrer"},v=t(`<h3 id="逆序输出" tabindex="-1"><a class="header-anchor" href="#逆序输出" aria-hidden="true">#</a> 逆序输出</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token function">array_reverse</span><span class="token punctuation">(</span><span class="token variable">$rows</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$msg</span><span class="token punctuation">)</span> <span class="token comment">//加上array_reverse</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="php中实现页面跳转的几种方式" tabindex="-1"><a class="header-anchor" href="#php中实现页面跳转的几种方式" aria-hidden="true">#</a> php中实现页面跳转的几种方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://www.cnblogs.com/du892294464/p/6835277.html

延迟跳转（比如登陆成功后会有几秒钟等待时间，然后跳转到了其他页面
&lt;?php  header(&quot;Refresh:秒数;url=地址&quot;)     ?&gt; 
例如 ：
&lt;?php   header(&quot;Refresh:3;url=helloworld.php&quot;)?&gt; 会在3秒后执行跳转
&lt;?php sleep(3); header(&quot;location:url地址&quot;)?&gt;  调用了sleep()方法,效果也是x秒后执行跳转
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php跳转并传值" tabindex="-1"><a class="header-anchor" href="#php跳转并传值" aria-hidden="true">#</a> php跳转并传值</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 在url添加后缀，get传值</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;script&gt;window.location=&#39;./other.php?data=<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$data</span><span class="token punctuation">}</span></span>&#39;&lt;/script&gt;&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// post传值则写个form，然后echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php传值给js并处理数据" tabindex="-1"><a class="header-anchor" href="#php传值给js并处理数据" aria-hidden="true">#</a> php传值给js并处理数据</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//用+号分隔字符串</span>
<span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;+&quot;</span> <span class="token operator">.</span> <span class="token variable">$user</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;qqMailbox&#39;</span><span class="token punctuation">]</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;+&quot;</span><span class="token operator">.</span><span class="token variable">$user</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;phone&#39;</span><span class="token punctuation">]</span><span class="token operator">.</span> <span class="token string double-quoted-string">&quot;+&quot;</span> <span class="token operator">.</span><span class="token variable">$user</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;key&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//可以在js中分割 </span>
<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>responseText<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串格式数字增加" tabindex="-1"><a class="header-anchor" href="#字符串格式数字增加" aria-hidden="true">#</a> 字符串格式数字增加</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$var</span><span class="token operator">=</span><span class="token function">sprintf</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;%04d&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//生成4位数，不足前面补0</span>
<span class="token keyword">echo</span> <span class="token variable">$var</span><span class="token punctuation">;</span><span class="token comment">//结果为0002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回前端json格式数据" tabindex="-1"><a class="header-anchor" href="#返回前端json格式数据" aria-hidden="true">#</a> 返回前端json格式数据</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="后端如何返回数据给前端" tabindex="-1"><a class="header-anchor" href="#后端如何返回数据给前端" aria-hidden="true">#</a> 后端如何返回数据给前端</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return不行要echo
json_encode($data)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时间" tabindex="-1"><a class="header-anchor" href="#时间" aria-hidden="true">#</a> 时间</h3>`,16),h={href:"https://www.php.cn/php-weizijiaocheng-413941.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$real_lend_time = date(&quot;Y/m/d H:i:s&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="保存图片" tabindex="-1"><a class="header-anchor" href="#保存图片" aria-hidden="true">#</a> 保存图片</h3>`,2),b={href:"https://www.php.cn/php-ask-431370.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法：</h2><h3 id="引用-全局变量" tabindex="-1"><a class="header-anchor" href="#引用-全局变量" aria-hidden="true">#</a> 引用 全局变量</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 函数内使用global $i,使$i可以被外部访问到，扩大作用域</span>
<span class="token comment">// 定义global $i=0;语法错误，定义时不可赋值</span>
<span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">global</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
    <span class="token variable">$i</span> <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39; &#39;</span> <span class="token operator">.</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39; &#39;</span> <span class="token operator">.</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39; &#39;</span> <span class="token operator">.</span> <span class="token variable">$i</span><span class="token punctuation">;</span>  <span class="token comment">// 输出结果 0 3 3</span>

更简单的方法为 传参是加上引入<span class="token operator">&amp;</span>，即不会被释放
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用&amp;</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>如果变量为对象，那么在某函数使用后不会被释放，仍会改变值<span class="token operator">.</span>
因为在<span class="token constant">PHP</span>中，传入参数为对象的话并不是把对象复制一份进行操作（常见情况如此），而是直接操作该对象<span class="token operator">.</span>
<span class="token operator">&amp;</span><span class="token variable">$i</span><span class="token punctuation">,</span>即类似对象传递，是直接更改原变量的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html镶入变量" tabindex="-1"><a class="header-anchor" href="#html镶入变量" aria-hidden="true">#</a> html镶入变量</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 在PHP中不用转义输出一段html代码，注意起始和尾部可以为其他字符，但要相同。尾部一定要置顶，不得有空格。此方法方便快速使用变量，不改变作用域</span>
<span class="token variable">$html</span> <span class="token operator">=</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>END</span>
            &lt;tr&gt;
                &lt;td&gt;&lt;input class=&quot;sort&quot; type=&quot;text&quot; name=&quot;sort&quot; /&gt;&lt;/td&gt;
                &lt;td&gt;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;module_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>[id:<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>]&lt;/td&gt;
                &lt;td&gt;&lt;a href=&quot;#&quot;&gt;[访问]&lt;/a&gt;&amp;nbsp;&amp;nbsp;&lt;a href=&quot;#&quot;&gt;[编辑]&lt;/a&gt;&amp;nbsp;&amp;nbsp;&lt;a href=&quot;#&quot;&gt;[删除]&lt;/a&gt;&lt;/td&gt;
            &lt;/tr&gt;
<span class="token delimiter symbol">END<span class="token punctuation">;</span></span></span>
                <span class="token keyword">echo</span> <span class="token variable">$html</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组类" tabindex="-1"><a class="header-anchor" href="#数组类" aria-hidden="true">#</a> 数组类</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>获取数组长度
<span class="token variable">$length</span><span class="token operator">=</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$array</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>字符串转化为数组
<span class="token variable">$_POST</span> <span class="token operator">=</span> <span class="token function">str_split</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;selectID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 切割两个字符为一元素</span>
<span class="token variable">$_POST</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;selectID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 分割字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span>							<span class="token comment">// 计算数组长度</span>

<span class="token function">reset</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span>							<span class="token comment">// 返回数组第一个单元的值</span>

<span class="token function">key</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span> 							<span class="token comment">// 返回数组中当前单元的键名</span>

<span class="token function">end</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span> 							<span class="token comment">// 将 array 的内部指针移动到最后一个单元并返回其值。</span>

<span class="token comment">// 将 array 的第一个单元移出并作为结果返回，将 array</span>
<span class="token comment">// 的长度减一并将所有其它单元向前移动一位。所有的数字键名将改为从零开始计数，文字键名将不变</span>
<span class="token function">array_shift</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span> 	

<span class="token comment">// 弹出并返回 array 数组的最后一个单元，并将数组 array 的长度减一。</span>
<span class="token function">array_pop</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span> 

<span class="token function">array_unshift</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">,</span><span class="token variable">$var</span><span class="token punctuation">)</span>			<span class="token comment">// 插入$var到数组头部位置</span>

<span class="token function">array_push</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">,</span><span class="token variable">$var</span><span class="token punctuation">)</span>				<span class="token comment">// 插入$var到数组尾部位</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$var</span> <span class="token keyword">as</span> <span class="token variable">$k</span><span class="token operator">=&gt;</span><span class="token variable">$v</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// 数组遍历格式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$res</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;lendGoods&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$lendGoods</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;lendExamines&quot;</span> <span class="token operator">=&gt;</span>  <span class="token variable">$lendExamines</span>
<span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;returnExamines&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$returnExamines</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据格式转转换" tabindex="-1"><a class="header-anchor" href="#数据格式转转换" aria-hidden="true">#</a> 数据格式转转换</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>第一种转换方式： (int)  (bool)  (float)  (string)  (array) (object)
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>  
<span class="token variable">$num1</span><span class="token operator">=</span><span class="token number">3.14</span><span class="token punctuation">;</span>  
<span class="token variable">$num2</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span><span class="token variable">$num1</span><span class="token punctuation">;</span>  
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$num1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出float(3.14)  </span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$num2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出int(3)  </span>
<span class="token delimiter important">?&gt;</span></span> 


第二种转换方式：  intval()  floatval()  strval()
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>  
<span class="token variable">$str</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;123.9abc&quot;</span><span class="token punctuation">;</span>  
<span class="token variable">$int</span><span class="token operator">=</span><span class="token function">intval</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//转换后数值：123  </span>
<span class="token variable">$float</span><span class="token operator">=</span><span class="token function">floatval</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//转换后数值：123.9  </span>
<span class="token variable">$str</span><span class="token operator">=</span><span class="token function">strval</span><span class="token punctuation">(</span><span class="token variable">$float</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//转换后字符串：&quot;123.9&quot;   </span>
<span class="token delimiter important">?&gt;</span></span> 


第三种转换方式：  settype();
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>  
<span class="token variable">$num4</span><span class="token operator">=</span><span class="token number">12.8</span><span class="token punctuation">;</span>  
<span class="token variable">$flg</span><span class="token operator">=</span><span class="token function">settype</span><span class="token punctuation">(</span><span class="token variable">$num4</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;int&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$flg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//输出bool(true)  </span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$num4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出int(12)  </span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三元表达式" tabindex="-1"><a class="header-anchor" href="#三元表达式" aria-hidden="true">#</a> 三元表达式</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>接多个语句
<span class="token variable">$btn</span> <span class="token operator">?</span> <span class="token variable">$msg</span><span class="token operator">-&gt;</span><span class="token property">state</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$msg</span><span class="token operator">-&gt;</span><span class="token property">state</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">and</span> <span class="token variable">$msg</span><span class="token operator">-&gt;</span><span class="token property">flag</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="碰到的bug" tabindex="-1"><a class="header-anchor" href="#碰到的bug" aria-hidden="true">#</a> 碰到的bug:</h2><h3 id="undefind-index-name" tabindex="-1"><a class="header-anchor" href="#undefind-index-name" aria-hidden="true">#</a> undefind index:name</h3><p>原因之一:用户名输入错误，使name为空，则未定义</p><h3 id="数据库-数据添加不成功" tabindex="-1"><a class="header-anchor" href="#数据库-数据添加不成功" aria-hidden="true">#</a> 数据库 数据添加不成功</h3><p>还要注意 引号和分号使用是否正确,如 value (<code>name</code>) 里边使用引号，但应该为字符串，故要改为单引号&#39;&#39;</p><h3 id="请求头问题" tabindex="-1"><a class="header-anchor" href="#请求头问题" aria-hidden="true">#</a> 请求头问题</h3><p>l ![img](file:///C:\\Users\\20692\\AppData\\Local\\Temp\\ksohtml10760\\wps5.jpg)</p><p>![img](file:///C:\\Users\\20692\\AppData\\Local\\Temp\\ksohtml10760\\wps6.jpg)</p><p>要用PHP server 打开 而不是open in default browser 打开</p><h3 id="error-array-to-string-conversion" tabindex="-1"><a class="header-anchor" href="#error-array-to-string-conversion" aria-hidden="true">#</a> Error：Array to string conversion</h3><p>Array 数组被当作字符串使用 如 echo (“$a”) 或echo $a，要用var_dump函数</p><h3 id="使用pdo-1054-连接不上数据库" tabindex="-1"><a class="header-anchor" href="#使用pdo-1054-连接不上数据库" aria-hidden="true">#</a> 使用pdo 1054 连接不上数据库</h3>`,30),f={href:"https://blog.csdn.net/m0_46278037/article/details/113923726",target:"_blank",rel:"noopener noreferrer"},x=t(`<h3 id="uncaught-syntaxerror-unexpected-token-a-in-json-at-position-0" tabindex="-1"><a class="header-anchor" href="#uncaught-syntaxerror-unexpected-token-a-in-json-at-position-0" aria-hidden="true">#</a> Uncaught SyntaxError: Unexpected token a in JSON at position 0</h3><p>问题：json接收的数据格式出错</p><p>解决：要从数据来源上入手转化成正确格式</p><h3 id="foreach-无法改变数组的值的问题" tabindex="-1"><a class="header-anchor" href="#foreach-无法改变数组的值的问题" aria-hidden="true">#</a> foreach 无法改变数组的值的问题</h3><p>用foreach来遍历数组，所操作的$val是指定数组的一个拷贝，而不是数组本身</p><h3 id="unexpected-endoffile" tabindex="-1"><a class="header-anchor" href="#unexpected-endoffile" aria-hidden="true">#</a> Unexpected &#39;EndOfFile&#39;.</h3><p>tab空格隐藏为一个空格报错，若为空格，双击回有个点，若错误空格双击无点。</p><p>解决:把所有错误tab空格修改为正常空格</p><h3 id="跨域问题" tabindex="-1"><a class="header-anchor" href="#跨域问题" aria-hidden="true">#</a> 跨域问题：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>header(&quot;Access-Control-Allow-Origin: *&quot;); // 添加头请求，允许所有域名请求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h2>`,11),_=n("li",null,"echo 不能输出bool值，要用var_dump()",-1),$=n("li",null,"在xhr.onload=functionn 中传返回值无效",-1),q=n("li",null,"Print_r可以输出数组或对象，PHP fetchAll后可以user[‘name’]即是name 的字符串",-1),y=n("li",null,'用form 注意给每个标签写上name=”",才能把输入框内的值post上去',-1),w=n("li",null,'onsubmit="return $judge" 控制action执行',-1),j={href:"http://blog.sina.com.cn/s/blog_693d183d0100uolj.html",target:"_blank",rel:"noopener noreferrer"},P=n("li",null,"Update 数据库要MySQL -u root-p启动服务后才能更新",-1);function E(H,S){const s=l("ExternalLinkIcon");return i(),o("div",null,[r,n("h3",d,[u,a(),n("a",k,[a("php自动补全"),e(s)])]),v,n("p",null,[n("a",h,[a("https://www.php.cn/php-weizijiaocheng-413941.html"),e(s)])]),m,n("p",null,[n("a",b,[a("网址"),e(s)])]),g,n("p",null,[n("a",f,[a("解决办法"),e(s)])]),x,n("ul",null,[_,$,q,y,w,n("li",null,[n("a",j,[a("Form中按钮button submit 区别"),e(s)])]),P])])}const A=p(c,[["render",E],["__file","PHP 笔记.html.vue"]]);export{A as default};
