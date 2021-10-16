(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{560:function(a,t,s){"use strict";s.r(t);var v=s(2),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[a._v("梦开始的地方")])]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("h3",{attrs:{id:"常量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[a._v("#")]),a._v(" 常量")]),a._v(" "),s("p",[a._v("一 字面常量")]),a._v(" "),s("p",[a._v("整型 实型 字符")]),a._v(" "),s("p",[a._v("二 符号常量")]),a._v(" "),s("p",[a._v("Define")]),a._v(" "),s("p",[a._v("unsigned int 表示无符号，即都为正数")]),a._v(" "),s("p",[a._v("0x 十六进制")]),a._v(" "),s("p",[a._v("0 八进制")]),a._v(" "),s("p",[a._v("Static int a=2; 只定义一次，不会再重新覆盖；而 int a=2; 则每次遍历都会覆盖 a 的值")]),a._v(" "),s("h3",{attrs:{id:"变量类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量类型"}},[a._v("#")]),a._v(" 变量类型")]),a._v(" "),s("p",[a._v("Float 精度六位")]),a._v(" "),s("p",[a._v("\"%s\" 整个输入作为一个串,并设置末尾的'\\0'")]),a._v(" "),s("p",[a._v("\"%ns\",n 为整数,读入的串最长不超过 n,然后在末尾补'\\0'")]),a._v(" "),s("p",[a._v("%nf 读入的浮点数最多有 n 位整数,位数多于 n,会截断。")]),a._v(" "),s("p",[a._v('"%n[a-z]" 读入最多 n 个字符,如果遇到非 a-z 的字符,停止')]),a._v(" "),s("p",[a._v('"%[^=]" 读入任意多的字符,直到遇到"="停止')]),a._v(" "),s("p",[a._v('"%n[^=]" 读入"="号前的至多 n 个字符')]),a._v(" "),s("h3",{attrs:{id:"字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符"}},[a._v("#")]),a._v(" 字符")]),a._v(" "),s("p",[a._v("[-] 数据向左靠拢")]),a._v(" "),s("p",[a._v("\\t 水平制表符 相当于加 Tab 空四个空格")]),a._v(" "),s("h3",{attrs:{id:"计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算"}},[a._v("#")]),a._v(" 计算")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("++i，先加一在使用 i")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\tI++，先使用i在加一\n")])])])]),a._v(" "),s("li",[s("p",[a._v("强制类型转换运算符：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t在前面加（int）如：（float）a\n\n\t1/2结果为零，/是整数运算，可改成1.0/2或1/2.0；或强制类型转换（float）1/2\n")])])])]),a._v(" "),s("li",[s("p",[a._v("逗号运算符：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t自左向右运算，最后一个数值即为赋值结果，如\n\n\ta=3;a=(3 * 5,a * 4); \t结果a=12.\n\n\ta=3;a=(3 * 5,a * 4);\t结果a=60.\n\n\t(a=3 * 5 ,a * 4),a+5;\t结果a=20.\n\n\tI=3;j=-i++;结果 i=4,j=-3.  j=-i++可看成j=-(i++)\n")])])])]),a._v(" "),s("li",[s("p",[a._v("优先级：赋值<关系<算数 如：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\ta=1,b=2;c==a>b;\t结果：c==0;\n")])])])]),a._v(" "),s("li",[s("p",[a._v("关系运算符结合性：自左向右 如：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\tx=95；100>=x>=90;\n\n\t结果：0，假；过程：先100>=95真，为1；在1>=90,假，为0；故结果为零。\n")])])])]),a._v(" "),s("li",[s("p",[a._v("逻辑运算符优先级：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t赋值<||<&&<关系<算术<!\n")])])])]),a._v(" "),s("li",[s("p",[a._v("对所有整数取反=本身的相反数-1 如 ~9 = -10 ~-1=0")])])]),a._v(" "),s("h3",{attrs:{id:"输入函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入函数"}},[a._v("#")]),a._v(" 输入函数")]),a._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"scanf-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scanf-s"}},[a._v("#")]),a._v(" scanf_s")])])]),a._v(" "),s("p",[a._v("scanf_s 里面可加普通字符，但运行时不显示，要按原样打上去才显示")]),a._v(" "),s("p",[a._v("scanf_s 当遇到 tab,空格，回车键，或遇到非法字符（即不符合如整数类型的），该数的读取即停止。")]),a._v(" "),s("p",[a._v("scanf() 函数接收字符串时的结束标志为回车或者空格")]),a._v(" "),s("p",[a._v('scanf_s("%d", &a) != EOF,scanf_s 中有多少个字符被成功格式化并赋值时，返回值则为成功读入的数量。故当 scanf_s 无字符赋值，则=EOF（end of file),于是跳出此表达式')]),a._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"stdin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stdin"}},[a._v("#")]),a._v(" stdin")])])]),a._v(" "),s("p",[a._v("stdin 是标准输入 std 即 standard（标准），in 即 input（输入），合起来就是标准输入。 一般就是指键盘输入到"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E7%BC%93%E5%86%B2%E5%8C%BA",target:"_blank",rel:"noopener noreferrer"}},[a._v("缓冲区"),s("OutboundLink")],1),a._v("里的东西")]),a._v(" "),s("p",[a._v("fflush(stdin);，清空输入缓冲区并写入文本")]),a._v(" "),s("p",[a._v("setbuf(stdin,NULL),将缓冲区赋值为空")]),a._v(" "),s("h3",{attrs:{id:"输出函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出函数"}},[a._v("#")]),a._v(" 输出函数")]),a._v(" "),s("h3",{attrs:{id:"字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[a._v("#")]),a._v(" 字符串")]),a._v(" "),s("p",[a._v("Char 数组若是字符串，空间要 6 多一个/0，如 char a[6]={“hello”} 字符串输入要多一个空间，char a[6]=”hello”,char a[]=”hello”")]),a._v(" "),s("p",[a._v("用%s 输出时，要遇到’/0’才能结束，所以数组要么扩大一个容量，要么初始化为字符串形式")]),a._v(" "),s("h3",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),s("ul",[s("li",[a._v("数组一旦有一元素赋值，余下自动赋值为零。故将数组第一个元素赋值为零，可使剩下都为零。")]),a._v(" "),s("li",[a._v("省略掉了数组的大小，数组的大小则为初始化时元素的个数,如 str[]")]),a._v(" "),s("li",[a._v("定义数组时对第一维的长度可以不指定，但第二维的长度不能省 如")]),a._v(" "),s("li",[a._v("只有字符串数组可以通过数组名来整体引用一个数组，整形不可以")]),a._v(" "),s("li",[a._v("若有说明 static int a[3][3];那么数组 a 中每个元素初值为 0")])]),a._v(" "),s("h3",{attrs:{id:"指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指针"}},[a._v("#")]),a._v(" 指针")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("&取地址，*取地址的内容")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t直接访问：按变量地址存取变量值 如i=3；\n\n\t间接访问：通过存放变量地址的变量去访问变量 如 i_pointer=&i;*i_pointer=20;\n\n\t指针p+1是p+1*d（d为p指向变量所占的字节数）\n")])])])]),a._v(" "),s("li",[s("p",[a._v("int _a=(int _ )malloc(n * sizeof(int));")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t介绍：可以当作数组使用，表示定义一个int类型的指针变量a，并申请n * sizeof(int)个字节（即4*n个字节）的存储空间。malloc是在C语言中是一个申请内存单元的函数。函数原型：void *malloc(unsigned size)\n\n\t头文件 ：<stdlib.h>\n")])])])]),a._v(" "),s("li",[s("p",[a._v("p 或 str[]可作为一维数组的函数形参，*p[3]或 str[][3]可作为二维数组的函数参数")])]),a._v(" "),s("li",[s("p",[a._v("char *gets_s(char *buffer,size_t sizeInCharacters);")])]),a._v(" "),s("li",[s("p",[a._v("在用指针 1 查找字符串时需小心指针 1 的改变，应定义一个指针 2 储存原来的首地址，然后使用完指针 1 后，指针 2 再赋值给指针 1")])]),a._v(" "),s("li",[s("p",[a._v("认清 char* p[5]，malloc 分配后为一个一维指针数组，即数组里所有元素都为指针")])]),a._v(" "),s("li",[s("p",[a._v("P[i]是第 i 行的首地址，指向下一个字符可 p[i]=*(p+i)+1 或 p[i]++;")])]),a._v(" "),s("li",[s("p",[a._v("*P[i]相当与 p[i][0]，已是一个确切的位置和数据")])]),a._v(" "),s("li",[s("p",[a._v("Gets_s("),s("em",[a._v("p[i]，20)报错是因为")]),a._v("p[i]已经赋值了是一个常量。")])]),a._v(" "),s("li",[s("p",[a._v("从而 gets(char *str ) 说明里面参数要用地址，即 p[i].")])]),a._v(" "),s("li",[s("p",[a._v("Free(链表的一个节点指针）相当于删除这个节点")])]),a._v(" "),s("li",[s("p",[a._v('scanf("%d",&n); *p=n; 错，p 指针还没有指向任何内容，是野指针，无法赋值')])])]),a._v(" "),s("h3",{attrs:{id:"结构体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构体"}},[a._v("#")]),a._v(" 结构体")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("可以定义一个 struct 结构体函数，其返回值为结构体变量，因此可返回多个值，当然也需要结构体变量来接收，使用结构体指针的时候要为指针分配内存，因为系统不知道你的制作的 struct Date 的大小多少，且储存结构体的地址需要一个结构体大小的内存空间。如：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\tp = (struct Date*)malloc(sizeof(struct Date));\n")])])])]),a._v(" "),s("li",[s("p",[a._v("结构体之类出现 不允许使用不完整的类型 即此结构体未定义 当然有时候是你的结构体名称打错了，所以未定义就报错，还挺难发现的，就有点气了。")])])]),a._v(" "),s("h3",{attrs:{id:"链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[a._v("#")]),a._v(" 链表")]),a._v(" "),s("p",[a._v("链表无非就两个点，一是结构储存着数据域(另一个结构体)和指针域(存储下一个结构体的地址，即指针)，二是给本身定义一个结构体指针，如此每个表便能拥有自身的指针(一个明确的地址)和下一个表的地址")]),a._v(" "),s("h3",{attrs:{id:"文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[a._v("#")]),a._v(" 文件")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("while (!feof(fp1)) 可以一直读取文件")])]),a._v(" "),s("li",[s("p",[a._v("Rewind(fp) 重置文件位置指针于文件开始处，以便读入数据")])]),a._v(" "),s("li",[s("p",[a._v("fprintf 后，消息没有被写到文件的解决方法(类似于 scanf)")])]),a._v(" "),s("li",[s("p",[a._v("由于缓存的原因，内容未写入文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t1.在fopen之后，加句：setbuf(fp,NULL);\n\n\t2.fprintf后面加上fflush(fp);\n")])])])]),a._v(" "),s("li",[s("p",[a._v("文件读取后要关闭文件或者重置到初始位置，否则如指针一般，会接着末尾读取数据，造成难以发现的错误")])]),a._v(" "),s("li",[s("p",[a._v("fscanf 和 scanf 一样输入时数据之间默认以空格或回车隔开。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('\t比如用scanf（"%d%d",&a,&b）;在输入的时候，如果你想输入1和2.而你输入了12，则只认为输入了一个数据12.所以scanf失败。你必须输入1空格2，或者1回车2才能成功。fscanf也一样。在从二进制文件输入时，读入一个数据后要读入一个空格才能接着读下一个数据。\n\n\t所以fprintf的时候要在数据之间显示的加空格。因为fprintf是对文件的写入，影响着fscanf的输出格式\n')])])])]),a._v(" "),s("li",[s("p",[a._v("fprintf 成功写入但 fsanf 读取文件不成功还有可能是打开文件模式是’w’，而用 rewind 重置后仍处于这种模式下，无法读取")])]),a._v(" "),s("li",[s("p",[a._v("不管 fgets 还是 fscanf，只要文件的数据传入，都需要变量来接收在打印出来")])]),a._v(" "),s("li",[s("p",[a._v("fputc('\\n', fp1); 在文本中添加’\\n’，可实现换行，添加’\\0’可视为字符串结束，同时 feof(fp)=1 为真")])]),a._v(" "),s("li",[s("p",[a._v("用 fwrite 读取时，下面最好不要加入额外的字符，如 fputc('\\n', fp1); 会导致 fread 写入了空格，出现乱码。要么删除字符，要么在 fread 部分也加入同样的字符，保持对称关系，fscanf 和 fprintf 同理")])]),a._v(" "),s("li",[s("p",[a._v("使用 gets 或者 scanf 若有输入问题（没有停顿，直接显示结果），要清除缓冲区，使用 setbuf,否则缓冲区堵塞，会导致读入数据缺失")])]),a._v(" "),s("li",[s("p",[a._v("txt 中文读取乱码")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t改一下记事本的格式从utf-8改成ansi的格式\n\n\t同时附上如何改变编码格式，打开左上角文件，点击另存为\t的时候，底下有一个选择格式，将utf-8换成ansi即可\n")])])])])]),a._v(" "),s("h3",{attrs:{id:"switch-和-break"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch-和-break"}},[a._v("#")]),a._v(" switch 和 break")]),a._v(" "),s("p",[a._v("当 break 用于开关语句 switch 中时,可使程序跳出 switch 而执行 switch 以后的语句。")]),a._v(" "),s("p",[a._v("而 continue 再 switch 中则跳过本次循环，后面语句都不执行")]),a._v(" "),s("h2",{attrs:{id:"功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[a._v("#")]),a._v(" 功能")]),a._v(" "),s("h3",{attrs:{id:"vs-快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vs-快捷键"}},[a._v("#")]),a._v(" vs 快捷键")]),a._v(" "),s("p",[a._v("注释: 先 CTRL+K，然后 CTRL+C")]),a._v(" "),s("p",[a._v("取消注释: 先 CTRL+K，然后 CTRL+U")]),a._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),s("h3",{attrs:{id:"消除-vs-中动态申请二维数组-c6011-c6385-c6386-的警告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消除-vs-中动态申请二维数组-c6011-c6385-c6386-的警告"}},[a._v("#")]),a._v(" 消除 VS 中动态申请二维数组 C6011，C6385，C6386 的警告]()")]),a._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 消除C6011警告")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("NULL")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"无法动态申请内存！\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"vs2019【c-报错】e0144-const-char-类型的值不能用于初始化-char-类型的实体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vs2019【c-报错】e0144-const-char-类型的值不能用于初始化-char-类型的实体"}},[a._v("#")]),a._v(' VS2019【C++报错】E0144"const char *" 类型的值不能用于初始化 "char *" 类型的实体')]),a._v(" "),s("p",[a._v("不改代码，修改项目属性。项目>>属性>>C/C++>>语言>>符合模式，将符合模式由是改为否（优点是不需要修改代码，缺点是每写新的项目就要修改一次设置）")]),a._v(" "),s("h3",{attrs:{id:"思考-为什么给指针动态分配空间可以当作数组用-而其他类型就不可以"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思考-为什么给指针动态分配空间可以当作数组用-而其他类型就不可以"}},[a._v("#")]),a._v(" 思考：为什么给指针动态分配空间可以当作数组用，而其他类型就不可以")]),a._v(" "),s("p",[a._v("个人解答：因为扩大空间同时新增了些地址，所以指针能通过指向不同地址来指定某一内存空间，于是可以输入输出。而其他变量即使扩大空间，依旧只能使用第一格的内存空间，多余空间算作废，并不能扩大存储的字节。")]),a._v(" "),s("p",[a._v("大部分指针问题都可以类比成数组把问题简单化。指针的指针可以变成二维数组.结构体的指针动态分配内存后变成一个一维数组，指向数组只需要指针就行，而不是指针的指针。")]),a._v(" "),s("h3",{attrs:{id:"报错-字符常量中的字符过多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报错-字符常量中的字符过多"}},[a._v("#")]),a._v(" 报错：字符常量中的字符过多")]),a._v(" "),s("p",[a._v("如 str[100]={‘three’}; 在这里使用了单引号，即把 three 放进一个 char 大小的空间里，自然内存不够报。此单引号是代表一个字母")]),a._v(" "),s("p",[a._v("方法：应改成 str[100]={“three”}; 改为双引号，即赋值的是一个字符串，每个数组位置只放一个字符，直到满为止。")]),a._v(" "),s("h2",{attrs:{id:"知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[a._v("#")]),a._v(" 知识点")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("网址：指向资源的指针；变量地址：指向变量的指针")])]),a._v(" "),s("li",[s("p",[a._v("#pragma once 是一个比较常用的 C/C++预处理指令，只要在头文件的最开始加入这条预处理指令，就能够保证头文件只被编译一次")])]),a._v(" "),s("li",[s("p",[a._v("如果其他文件要使用这个文件中定义的全局变量，则必须在使用前用“extern”做外部声明。如 extern int day()")])]),a._v(" "),s("li",[s("p",[a._v("栈（stack）")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("\t又名堆栈，它是一种运算受限的线性表。限定仅在表尾进行插入和删除操作的线性表。这一端被称为栈顶，相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。\n")])])])]),a._v(" "),s("li",[s("p",[a._v("不使用安全版函数 加 #define _CRT_SECURE_NO_WARNINGS")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);