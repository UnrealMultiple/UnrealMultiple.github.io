import{_ as s,a,b as e,o as l}from"./app-IX9aCo9D.js";const i={};function t(p,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="autoairitem-自动垃圾桶插件" tabindex="-1"><a class="header-anchor" href="#autoairitem-自动垃圾桶插件"><span>AutoAirItem 自动垃圾桶插件</span></a></h1><ul><li>作者: 羽学</li><li>出处: <a href="https://github.com/1242509682/AutoAirItem" target="_blank" rel="noopener noreferrer">自动垃圾桶</a></li><li>Tshock版自动垃圾桶，帮助玩家清理自身垃圾的小插件</li><li>由玩家使用指令独立运行的插件，无需服主写配置，</li><li>它会自动根据玩家加入服务器自动创建配置结构。</li><li>通过玩家指令交互的一款全自动插件。</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/air</td><td style="text-align:center;">/垃圾</td><td style="text-align:center;">AutoAir.use</td><td style="text-align:center;">指令菜单</td></tr><tr><td>/air on</td><td style="text-align:center;">/垃圾 on</td><td style="text-align:center;">AutoAir.use</td><td style="text-align:center;">开启或关闭自身的垃圾桶功能</td></tr><tr><td>/air list</td><td style="text-align:center;">/垃圾 list</td><td style="text-align:center;">AutoAir.use</td><td style="text-align:center;">列出自己的垃圾桶物品名</td></tr><tr><td>/air clear</td><td style="text-align:center;">/垃圾 clear</td><td style="text-align:center;">AutoAir.use</td><td style="text-align:center;">清空自己的垃圾桶表</td></tr><tr><td>/air yes</td><td style="text-align:center;">/垃圾 yes</td><td style="text-align:center;">AutoAir.use</td><td style="text-align:center;">手持物品加入垃圾桶表</td></tr><tr><td>/air auto</td><td style="text-align:center;">/垃圾 auto</td><td style="text-align:center;">AutoAir.use</td><td style="text-align:center;">将物品放入垃圾桶位格时自动添加垃圾桶表</td></tr><tr><td>/air mess</td><td style="text-align:center;">/垃圾 mess</td><td style="text-align:center;">AutoAir.use</td><td style="text-align:center;">开启或关闭清理消息</td></tr><tr><td>/air ck 数量</td><td style="text-align:center;">/垃圾 ck 数量</td><td style="text-align:center;">AutoAir.use</td><td style="text-align:center;">筛选出物品超过此数量的玩家</td></tr><tr><td>/air add 或 del id</td><td style="text-align:center;">/垃圾 add 或 del 物品名</td><td style="text-align:center;">AutoAir.use</td><td style="text-align:center;">添加或移出自己的垃圾桶物品</td></tr><tr><td>/airreset</td><td style="text-align:center;">/重置垃圾桶</td><td style="text-align:center;">AutoAir.admin</td><td style="text-align:center;">清空玩家数据表（重置服务器用）</td></tr><tr><td>/reload</td><td style="text-align:center;">无</td><td style="text-align:center;">tshock.cfg.reload</td><td style="text-align:center;">重载配置文件</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/自动垃圾桶.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;插件指令权限&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;指令菜单：/air 或 /垃圾，权限名【AutoAir.use】，给玩家权限：/group addperm default AutoAir.use&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;插件开关&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;重启服务器不删数据&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;排除垃圾表&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">    71</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    72</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    73</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    74</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.2.5</span></span>
<span class="line"><span>Database改utf-8</span></span>
<span class="line"><span>v1.2.3</span></span>
<span class="line"><span>将数据库表移到tshock.sqlite内部</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.2</span></span>
<span class="line"><span>清理无用代码</span></span>
<span class="line"><span>修复已经在垃圾桶表里的物品，再次放入垃圾桶时不会主动清除的BUG</span></span>
<span class="line"><span>加入了移除物品时的物品数量反馈播报</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.1</span></span>
<span class="line"><span>加入了【排除垃圾表】配置项</span></span>
<span class="line"><span>修复首次移除的物品没有返还数量的BUG</span></span>
<span class="line"><span>修复钱币也会被视为垃圾进行移除的BUG</span></span>
<span class="line"><span>修复/air ck查不到刚刚移除垃圾数量的BUG</span></span>
<span class="line"><span>补充首次放入垃圾桶的物品也会移除,并记录数量的逻辑</span></span>
<span class="line"><span>修复PE在使用/air del返还物品时,存在2句提示语的BUG</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.0</span></span>
<span class="line"><span>给自动垃圾桶加入了数据库存储逻辑</span></span>
<span class="line"><span>避免每次重启服务器都会清空玩家垃圾桶用</span></span>
<span class="line"><span>请注意重置服务器时使用指令清空数据：/airreset</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.7</span></span>
<span class="line"><span>修复PE使用：/air del 会返还双倍物品的BUG</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.6</span></span>
<span class="line"><span>加入了/air ck 数量指令</span></span>
<span class="line"><span>筛选出物品超过此数量的玩家</span></span>
<span class="line"><span>修复返还物品超出物品叠堆上限的BUG</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.5</span></span>
<span class="line"><span>把移除逻辑改为玩家移动触发（优化性能）</span></span>
<span class="line"><span>移除/air sd 修改清理速度指令</span></span>
<span class="line"><span>加入了/air del 的返还物品逻辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.4</span></span>
<span class="line"><span>移除了自动清理玩家数据的逻辑与其相关配置项</span></span>
<span class="line"><span>将/air reset指令改为:</span></span>
<span class="line"><span>单独的/airreset指令方便跳出循环重置服务器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.3</span></span>
<span class="line"><span>美化了指令菜单</span></span>
<span class="line"><span>加入/air sd 修改垃圾清理速度指令</span></span>
<span class="line"><span>加入/air reset 清空所有玩家数据指令（用来重置服务器）</span></span>
<span class="line"><span>/air mess指令可控制隐藏：加入垃圾桶的物品提示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.2</span></span>
<span class="line"><span>修复玩家退出服务器时的空引用</span></span>
<span class="line"><span>将清理数据功能移到加入服务器事件中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.1</span></span>
<span class="line"><span>修复英文翻译（开源仓版）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.0</span></span>
<span class="line"><span>将数据表内容从Config移到插件内部的MyData类里，</span></span>
<span class="line"><span>不再以来对配置文件的频繁写入，避免玩家太多时把Config写爆。</span></span>
<span class="line"><span>第一次进服自动开启垃圾桶功能，并在玩家把物品放到垃圾桶时会触发相关指令提示</span></span>
<span class="line"><span>加入了对玩家在线状态判断，避免人在服里玩了24小时导致无辜被清理数据。</span></span>
<span class="line"><span>加入了对清理哪些玩家数据时的离服播报</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.0.2</span></span>
<span class="line"><span>加入了将手持物品加入垃圾桶指令：/air yes</span></span>
<span class="line"><span>未选中后才会清理，选中时哪怕输错了，也可以用/air del 物品名 移除</span></span>
<span class="line"><span>加入了开启关闭清理信息指令：/air mess</span></span>
<span class="line"><span>加入了监听玩家垃圾桶位格功能，当物品放入垃圾桶时自动添加到《垃圾桶表》处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.0.1</span></span>
<span class="line"><span>移除了每次/air add 或 del时的插件启用状态提醒</span></span>
<span class="line"><span>加入【清理数据周期】逻辑：</span></span>
<span class="line"><span>玩家每次进出服都会更新【记录时间】，</span></span>
<span class="line"><span>玩家A离线时间与玩家B登录时间相差</span></span>
<span class="line"><span>超过【清理周期】所设定的时间，则自动清理该玩家A的数据</span></span>
<span class="line"><span>如果《清理数据周期》:设置超过9999999999小时，就相当于永远不清理数据了</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.0.0</span></span>
<span class="line"><span>根据使用Mod《更好的体验》的想法，实现的一个Tshock版自动垃圾桶</span></span>
<span class="line"><span>清理垃圾速度单位为帧率，数值越小清理越快。</span></span>
<span class="line"><span>使用指令/air on开启插件</span></span>
<span class="line"><span>使用/air add 物品名 或 物品id 或 Alt+左键点选物品，自动将物品名写入到配置文件当中</span></span>
<span class="line"><span>根据玩家进服事件自动创建  &quot;玩家数据表&quot;，</span></span>
<span class="line"><span>&quot;垃圾桶物品&quot;存在物品且开启了&quot;垃圾桶开关&quot;时会主动触发清理逻辑</span></span>
<span class="line"><span>配备了&quot;登录时间&quot;用于给服主参考：是否需要自己手动移除该玩家的数据</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const r=s(i,[["render",t],["__file","AutoAirItem.html.vue"]]),c=JSON.parse('{"path":"/zh/guide/AutoAirItem.html","title":"AutoAirItem 自动垃圾桶插件","lang":"zh-CN","frontmatter":{"description":"AutoAirItem 自动垃圾桶插件 作者: 羽学 出处: 自动垃圾桶 Tshock版自动垃圾桶，帮助玩家清理自身垃圾的小插件 由玩家使用指令独立运行的插件，无需服主写配置， 它会自动根据玩家加入服务器自动创建配置结构。 通过玩家指令交互的一款全自动插件。 指令 配置 配置文件位置：tshock/自动垃圾桶.json 更新日志 反馈 优先发issue...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/AutoAirItem.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"AutoAirItem 自动垃圾桶插件"}],["meta",{"property":"og:description","content":"AutoAirItem 自动垃圾桶插件 作者: 羽学 出处: 自动垃圾桶 Tshock版自动垃圾桶，帮助玩家清理自身垃圾的小插件 由玩家使用指令独立运行的插件，无需服主写配置， 它会自动根据玩家加入服务器自动创建配置结构。 通过玩家指令交互的一款全自动插件。 指令 配置 配置文件位置：tshock/自动垃圾桶.json 更新日志 反馈 优先发issue..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AutoAirItem 自动垃圾桶插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/AutoAirItem.md"}');export{r as comp,c as data};
