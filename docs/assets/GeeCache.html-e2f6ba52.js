const e=JSON.parse('{"key":"v-00d0e8d0","path":"/posts/%E5%90%8E%E7%AB%AF/Go/%E9%A1%B9%E7%9B%AE%E7%AC%94%E8%AE%B0/GeeCache.html","title":"GeeCache","lang":"en-US","frontmatter":{"icon":"article","date":"2022-01-10T00:00:00.000Z","title":"GeeCache","category":["后端","Go","项目笔记"],"tag":["GeeCache"],"description":"GeeCache 介绍： 分布式缓存 知识点： LRU 缓存淘汰策略 最近最少使用，相对于仅考虑时间因素的 FIFO 和仅考虑访问频率的 LFU，LRU 算法可以认为是相对平衡的 一种淘汰算法。LRU 认为，如果数据最近被访问过，那么将来被访问的概率也会更高。LRU 算法的实现非常 简单，维护一个队列，如果某条记录被访问了，则移动到队尾，那么队首则是最近最少访问的数据，淘汰该条记录即可。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/%E5%90%8E%E7%AB%AF/Go/%E9%A1%B9%E7%9B%AE%E7%AC%94%E8%AE%B0/GeeCache.html"}],["meta",{"property":"og:site_name","content":"unitiny的宇宙"}],["meta",{"property":"og:title","content":"GeeCache"}],["meta",{"property":"og:description","content":"GeeCache 介绍： 分布式缓存 知识点： LRU 缓存淘汰策略 最近最少使用，相对于仅考虑时间因素的 FIFO 和仅考虑访问频率的 LFU，LRU 算法可以认为是相对平衡的 一种淘汰算法。LRU 认为，如果数据最近被访问过，那么将来被访问的概率也会更高。LRU 算法的实现非常 简单，维护一个队列，如果某条记录被访问了，则移动到队尾，那么队首则是最近最少访问的数据，淘汰该条记录即可。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-25T09:20:57.000Z"}],["meta",{"property":"article:author","content":"unitiny"}],["meta",{"property":"article:tag","content":"GeeCache"}],["meta",{"property":"article:published_time","content":"2022-01-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-25T09:20:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GeeCache\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-25T09:20:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unitiny\\",\\"url\\":\\"#\\"}]}"]]},"headers":[{"level":2,"title":"GeeCache","slug":"geecache","link":"#geecache","children":[{"level":3,"title":"介绍：","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"知识点：","slug":"知识点","link":"#知识点","children":[]},{"level":3,"title":"难点：","slug":"难点","link":"#难点","children":[]}]}],"git":{"createdTime":1721899257000,"updatedTime":1721899257000,"contributors":[{"name":"unitiny","email":"2069234934@qq.com","commits":1}]},"readingTime":{"minutes":2.58,"words":773},"filePathRelative":"posts/后端/Go/项目笔记/GeeCache.md","localizedDate":"January 10, 2022","excerpt":"<h2> GeeCache</h2>\\n<h3> 介绍：</h3>\\n<p>分布式缓存</p>\\n<h3> 知识点：</h3>\\n<p>LRU 缓存淘汰策略</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>最近最少使用，相对于仅考虑时间因素的 FIFO 和仅考虑访问频率的 LFU，LRU 算法可以认为是相对平衡的\\n一种淘汰算法。LRU 认为，如果数据最近被访问过，那么将来被访问的概率也会更高。LRU 算法的实现非常\\n简单，维护一个队列，如果某条记录被访问了，则移动到队尾，那么队首则是最近最少访问的数据，淘汰该条记录即可。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
