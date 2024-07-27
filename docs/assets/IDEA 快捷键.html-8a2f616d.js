import{_ as h,W as d,X as l,Y as e,Z as t,a0 as r,a2 as i,C as n}from"./framework-5d92cd28.js";const s={},c=i('<h1 id="idea-编辑器快捷键" tabindex="-1"><a class="header-anchor" href="#idea-编辑器快捷键" aria-hidden="true">#</a> IDEA 编辑器快捷键</h1><h2 id="常用快捷键" tabindex="-1"><a class="header-anchor" href="#常用快捷键" aria-hidden="true">#</a> 常用快捷键</h2><p>设置快捷键：File -&gt; Settings -&gt; IDE Settings -&gt; Keymap -&gt; 选择“eclipse” -&gt; 然后“Copy”一份 -&gt; 再个性化设置（自己习惯的）快捷键</p><p>常用快捷键(keymaps:Default情况下)</p><p>Esc键编辑器（从工具窗口） F1 帮助 千万别按,很卡! F2（Shift+F2） 下/上高亮错误或警告快速定位 F3 向下查找关键字出现位置 F4 查找变量来源 F5 复制文件/文件夹 F6 移动 F11 切换书签 F12 返回到以前的工具窗口</p><p>注意：部分快捷键，必须在没有更改快捷键的情况下才可以使用</p><h2 id="查询快捷键" tabindex="-1"><a class="header-anchor" href="#查询快捷键" aria-hidden="true">#</a> 查询快捷键</h2><p>CTRL+N 查找类 CTRL+SHIFT+N 查找文件，打开工程中的文件(类似于eclipse中的ctrl+shift+R)，目的是打开当前工程下任意目录的文件 CTRL+SHIFT+ALT+N 查 找类中的方法或变量(JS) CIRL+B 找变量的来源，跳到变量申明处 CTRL+ALT+B 找所有的子类 CTRL+SHIFT+B 找变量的 类 CTRL+G 定位行，跳转行 CTRL+F 在当前窗口查找文本 CTRL+SHIFT+F 在指定路径查找文本 CTRL+R 当前窗口替换文本 CTRL+SHIFT+R 在指定路径替换文本 ALT+SHIFT+C 查找修改的文件，最近变更历史 CTRL+E 最近打开的文件 F3 查找下一个 SHIFT+F3 查找上一个 F4 查找变量来源 CTRL+ALT+F7 选 中的字符 查找工程出现的地方 ALT+F7 直接查询选中的字符 Ctrl+F7 文件中查询选中字符</p><p>ctrl+shift+i 查看选中函数内容</p><h2 id="自动代码" tabindex="-1"><a class="header-anchor" href="#自动代码" aria-hidden="true">#</a> 自动代码</h2><p>ALT+回车 导入包,自动修正 CTRL+ALT+L 格式化代码 CTRL+ALT+I 自动缩进 CTRL+ALT+O 优化导入的类和包 CTRL+E 最近更改的文件/代码 CTRL+SHIFT+SPACE 切换窗口 CTRL+SPACE空格 代码自动完成，代码提示,一般与输入法冲突 CTRL+ALT+SPACE 类 名或接口名提示（与系统冲突） CTRL+P 方法参数提示，显示默认参数 CTRL+J 自动代码提示，自动补全 CTRL+ALT+T 把选中的代码放在 TRY{} IF{} ELSE{} 里 ALT+INSERT 生成代码(如GET,SET方法,构造函数等)</p><h2 id="复制快捷方式" tabindex="-1"><a class="header-anchor" href="#复制快捷方式" aria-hidden="true">#</a> 复制快捷方式</h2><p>F5 复制文件/文件夹 CTRL+C 复制 CTRL+V 粘贴 CTRL+X 剪 切,删除行 CTRL+D 快速复制当前行到下一行 Ctrl + Y 删除行插入符号 CTRL+SHIFT+V 可以复制多个文本</p><p>双击选中单词，三击选中当前行</p><h2 id="高亮" tabindex="-1"><a class="header-anchor" href="#高亮" aria-hidden="true">#</a> 高亮</h2><p>CTRL+F 选中的文字,高亮显示 上下跳到下一个或者上一个 F2（Shift+F2） 高亮错误或警告快速定位 SHIFT+F2 高亮错误或警告快速定位 CTRL+SHIFT+F7 高亮显示多个关键字. 本地历史VCS/SVN Alt +反引号（&#39;） 快速弹出VCS菜单 Ctrl + K 提交项目VCS Ctrl + T 更新项目从VCS Alt + Shift + C 查看最近发生的变化</p><h2 id="其他快捷方式" tabindex="-1"><a class="header-anchor" href="#其他快捷方式" aria-hidden="true">#</a> 其他快捷方式</h2><p>CTRL+Z 倒退(代码后悔) CTRL+SHIFT+Z 向前 CTRL+H 显 示类结构图 Ctrl +F12 文件结构弹出 Ctrl+Shift+H 方法的层次结构 Ctrl+Alt+H 呼叫层次 CTRL+Q 显示代码注释 CTRL+W 选中代码，连续按会 有其他效果 Ctrl+Shift+W 减少当前选择到以前的状态 CTRL+B 转到声明，快速打开光标处的类或方法说明注释(CTRL + 鼠标单击 也可以) CTRL+O 魔术方法 CTRL+/ 注释//取消注释 CTRL+SHIFT+/ 注释/<em>...</em>/ CTRL+ [] 光标移动到 {}[]开头或结尾位置 CTRL+SHIFT+[] 选中块代码，可以快速复制 ctrl + &#39;-/+&#39;: 可以折叠项目中的任何代码块,包括htm中的任意nodetype=3的元素，function,或对象直接量等等。它不是选中折叠，而是自动识别折叠。</p><p>ctrl + &#39;.&#39;: 折叠选中的代码的代码</p><p>Ctrl+Shift+U 选中的字符大小写转换 ctrl+shift+i 快速查看变量或方法定义源 CTRL+ALT+F12 资源管理器打开文件夹，跳转至当前文件在磁盘上的位置 ALT+F1 选择当前文件或菜单中的任何视图工具栏 SHIFT+ALT+INSERT 竖编辑模式</p><p>CTRL+ALT ←/→ 返回上次编辑的位置 ALT+ ←/→ 切换代码视图，标签切换 ALT+ ↑/↓ 在方法间快速移动定位 alt + &#39;7&#39;: 显示当前的类/函数结构。类似于eclipse中的outline的效果。试验了一下，要比aptana的给力一些，但还是不能完全显示prototype下面的方法名。 SHIFT+F6 重命名,重构 当前区域内变量重命名/重构 不但可以重命名文件名，而且可以命名函数名，函数名可以搜索引用的文件，还可以重命名局部变量。还可以重命名标签名。在sublime text中有个类似的快捷键：ctrl+shift+d。</p><p>ctrl+shift+enter(智能完善代码 如 if()) ctrl+shift+up/down(移动行、合并选中行，代码选中区域 向上/下移动) CTRL+UP/DOWN 光标跳转到编辑器显示区第一行或最后一行下 ESC 光标返回编辑框 SHIFT+ESC 光 标返回编辑框,关闭无用的窗口 CTRL+F4 关闭当前的编辑器或选项卡</p><p>Ctrl + Alt + V引入变量 Ctrl + Alt + F 类似引入变量 Ctrl + Alt + C引入常量</p><p>Ctrl + Tab 键切换选项卡和工具窗口 Ctrl + Shift + A 查找快捷键 Alt + ＃[0-9] 打开相应的工具窗口 Ctrl + Shift + F12 切换最大化编辑器 Alt + Shift + F 添加到收藏夹 Alt + Shift + I 检查当前文件与当前的配置文件 Ctrl +反引号（`） 快速切换目前的配色/代码方案/快捷键方案/界面方案 Ctrl + Alt + S 打开设置对话框（与QQ冲突）</p><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><p>Alt + Shift + F10 选择的配置和运行 Alt + Shift + F9 选择配置和调试 Shift + F10 运行 Shift + F9调试 Ctrl + Shift + F10运行范围内配置编辑器 Ctrl + Shift + X运行命令行</p><h2 id="调试" tabindex="-1"><a class="header-anchor" href="#调试" aria-hidden="true">#</a> 调试</h2><p>F8步过 F7步入 Shift + F7智能进入 Shift + F8步骤 ALT + F9运行到光标 Alt + F8计算表达式 F9恢复程序 Ctrl + F8切换断点 Ctrl + Shift + F8查看断点</p><h2 id="导航" tabindex="-1"><a class="header-anchor" href="#导航" aria-hidden="true">#</a> 导航</h2><p>Shift + Esc键隐藏活动或最后一个激活的窗口 Ctrl + Shift + F4关闭活动运行/消息/ / ...选项卡 Ctrl + Shift + Backspace键导航到最后编辑的位置 Ctrl + Alt+B 到实施（S） Ctrl + Shift+I 打开快速定义查询 Ctrl + U 转到super-method/super-class Alt + Home 组合显示导航栏</p><p>Ctrl+tab 左右分屏，切换文件界面</p><h2 id="书签" tabindex="-1"><a class="header-anchor" href="#书签" aria-hidden="true">#</a> 书签</h2><p>Ctrl + F11切换书签助记符 Ctrl +＃[0-9]转到编号书签 Shift + F11显示书签</p><h2 id="编辑" tabindex="-1"><a class="header-anchor" href="#编辑" aria-hidden="true">#</a> 编辑</h2><p>Ctrl + Q 快速文档查询 ALT + INSERT 生成的代码...器（getter，setter方法，构造函数） Ctrl + O 覆盖方法 Ctrl + I 实现方法</p><p>Alt + Enter 显示意图的行动和快速修复 Shift + Tab 键缩进/取消缩进选中的行</p><p>Ctrl + Shift + J 智能线连接（仅适用于HTML和JavaScript） Ctrl + Enter 智能线分割（HTML和JavaScript） Shift + Enter 开始新的生产线</p><p>Ctrl + Delete 删除字（word） Ctrl + Backspace删除字开始 Ctrl +小键盘+ / - 展开/折叠代码块 Ctrl + Shift +小键盘+展开全部 Ctrl + Shift +数字键盘关闭全部</p><h2 id="光标操作" tabindex="-1"><a class="header-anchor" href="#光标操作" aria-hidden="true">#</a> 光标操作</h2><p>ALT + j 连续下移光标，自动停止 （phpstorm）</p><p>ALT + j 选中多个相同内容 (pycharm)</p><p>ALT + 鼠标左键 自动选择光标</p><p>ctrl+; 移动到行尾 （自己设置）</p><p>ALT+; 移动到行首 （自己设置）</p>',44),p={href:"https://blog.csdn.net/mingyuli/article/details/108235529",target:"_blank",rel:"noopener noreferrer"},C=e("h2",{id:"格式化代码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#格式化代码","aria-hidden":"true"},"#"),t(" 格式化代码")],-1),T=e("p",null,"ctrl shift l",-1),o={href:"https://blog.csdn.net/qq_38418803/article/details/106914876",target:"_blank",rel:"noopener noreferrer"},f=i(`<h3 id="代码折叠" tabindex="-1"><a class="header-anchor" href="#代码折叠" aria-hidden="true">#</a> 代码折叠</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ctrl+shift+=  全部展开
ctrl+shift+-  全部折叠
ctrl+.    折叠或展开
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h2><h3 id="移动到行尾" tabindex="-1"><a class="header-anchor" href="#移动到行尾" aria-hidden="true">#</a> 移动到行尾</h3><p>ctrl ;</p><h3 id="移动到行首" tabindex="-1"><a class="header-anchor" href="#移动到行首" aria-hidden="true">#</a> 移动到行首</h3><p>ctrl &#39;&#39;</p><h3 id="移动并滚动到下一行" tabindex="-1"><a class="header-anchor" href="#移动并滚动到下一行" aria-hidden="true">#</a> 移动并滚动到下一行</h3><p>alt ;</p><h3 id="移动并滚动到上一行" tabindex="-1"><a class="header-anchor" href="#移动并滚动到上一行" aria-hidden="true">#</a> 移动并滚动到上一行</h3><p>alt &#39;&#39;</p><h3 id="光标多选-在下方克隆文本光标" tabindex="-1"><a class="header-anchor" href="#光标多选-在下方克隆文本光标" aria-hidden="true">#</a> 光标多选（在下方克隆文本光标）</h3><p>ctrl alt 向下箭头</p><h3 id="打开终端" tabindex="-1"><a class="header-anchor" href="#打开终端" aria-hidden="true">#</a> 打开终端</h3><p>ctrl o</p><h3 id="设置代码块" tabindex="-1"><a class="header-anchor" href="#设置代码块" aria-hidden="true">#</a> 设置代码块</h3>`,16),L={href:"https://blog.csdn.net/wzy1551368/article/details/79580055",target:"_blank",rel:"noopener noreferrer"},S=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 设为fp,且光标在$END$处
fmt.Println($END$)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function F(u,R){const a=n("ExternalLinkIcon");return d(),l("div",null,[c,e("p",null,[e("a",p,[t("光标变粗还原"),r(a)])]),C,T,e("p",null,[e("a",o,[t("调整字体大小"),r(a)])]),f,e("p",null,[e("a",L,[t("https://blog.csdn.net/wzy1551368/article/details/79580055"),r(a)])]),S])}const b=h(s,[["render",F],["__file","IDEA 快捷键.html.vue"]]);export{b as default};
