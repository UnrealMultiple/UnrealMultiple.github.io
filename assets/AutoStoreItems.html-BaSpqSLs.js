import{_ as n,a,b as e,o as l}from"./app-BbsyK8BH.js";const i={};function t(p,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="autostoreitems-自动储存" tabindex="-1"><a class="header-anchor" href="#autostoreitems-自动储存"><span>AutoStoreItems 自动储存</span></a></h1><ul><li>作者: 羽学 cmgy雱</li><li>出处: 无</li><li>持有指定物品根据配置物品ID自动存入存储空间</li><li>（支持自动存钱,感谢cmgy雱的钱币叠堆算法）</li></ul><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/ast</td><td style="text-align:center;">/自存</td><td style="text-align:center;">AutoStore.use</td><td style="text-align:center;">指令菜单</td></tr><tr><td>/ast auto</td><td style="text-align:center;">/自存 auto</td><td style="text-align:center;">AutoStore.use</td><td style="text-align:center;">开启或关闭自动识别模式</td></tr><tr><td>/ast hand</td><td style="text-align:center;">/自存 hand</td><td style="text-align:center;">AutoStore.use</td><td style="text-align:center;">开启或关闭手持识别模式</td></tr><tr><td>/ast armor</td><td style="text-align:center;">/自存 armor</td><td style="text-align:center;">AutoStore.use</td><td style="text-align:center;">开启或关闭装备识别模式</td></tr><tr><td>/ast list</td><td style="text-align:center;">/自存 list</td><td style="text-align:center;">AutoStore.use</td><td style="text-align:center;">列出自己的自存桶物品名</td></tr><tr><td>/ast clear</td><td style="text-align:center;">/自存 clear</td><td style="text-align:center;">AutoStore.use</td><td style="text-align:center;">清空自己的自存桶表</td></tr><tr><td>/ast bank</td><td style="text-align:center;">/自存 auto</td><td style="text-align:center;">AutoStore.use</td><td style="text-align:center;">将物品放入存钱罐时自动添加自存表</td></tr><tr><td>/ast mess</td><td style="text-align:center;">/自存 mess</td><td style="text-align:center;">AutoStore.use</td><td style="text-align:center;">开启或关闭自存消息</td></tr><tr><td>/ast add 或 del id</td><td style="text-align:center;">/自存 add 或 del 物品名</td><td style="text-align:center;">AutoStore.use</td><td style="text-align:center;">添加或移除自己的自存物品</td></tr><tr><td>/ast pm</td><td style="text-align:center;">/自存 pm</td><td style="text-align:center;">AutoStore.admin</td><td style="text-align:center;">开启或关闭性能模式(不为堆叠达到单格上限物品进行分堆累积)</td></tr><tr><td>/astreset</td><td style="text-align:center;">/重置自存</td><td style="text-align:center;">AutoStore.admin</td><td style="text-align:center;">清空玩家数据表（重置服务器用）</td></tr><tr><td>/reload</td><td style="text-align:center;">无</td><td style="text-align:center;">tshock.cfg.reload</td><td style="text-align:center;">重载配置文件</td></tr></tbody></table><hr><h2 id="配置注意事项" tabindex="-1"><a class="header-anchor" href="#配置注意事项"><span>配置注意事项</span></a></h2><ol><li><code>自动</code> <code>手持</code> <code>装备</code> 当开启3种模式<code>任意一个</code>时其他2个模式会<code>默认关闭</code>，不论哪种模式都需要<code>玩家移动和攻击</code>才会触发储存</li></ol><p>2.<code>性能模式</code>不会对<code>单格达到9999</code>或者本身为<code>1</code>堆叠上限的物品，进行空槽分堆累积，如果<code>服务器人少</code>的情况下可以考虑<code>关闭</code>给玩家最好的自存体验</p><p>3.<code>存在BUG</code>收藏的物品会被<code>取消收藏</code>(指<code>虚空袋</code>的药水有<code>堆叠进箱子</code>的风险),物品如果没放到<code>存钱罐</code>等储存空间内是<code>不会触发</code>自动存储的</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/AutoStoreItems.zh-CN.json</p></blockquote><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;插件开关&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;性能模式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;存钱罐&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;保险箱&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;虚空袋&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;护卫熔炉&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;触发存储的物品ID&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">    87</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    346</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    3213</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    3813</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    4076</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    4131</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    5098</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    5325</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;装备饰品的物品ID&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">    88</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    410</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    411</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    489</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    490</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    491</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    855</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    935</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    1301</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    2220</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    2998</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    3034</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    3035</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    3061</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    3068</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    4008</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    4056</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    4989</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    5098</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    5107</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    5126</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.3.4</span></span>
<span class="line"><span>修正错别字</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.3</span></span>
<span class="line"><span>准备更新TS 5.2.1,修正文档，初始配置内容更改</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.0</span></span>
<span class="line"><span>修复物品超堆叠上限BUG</span></span>
<span class="line"><span>加入了性能模式新指令：/ast pm </span></span>
<span class="line"><span>对应的Config中加入了性能模式开关</span></span>
<span class="line"><span>开启时堆叠达到上限9999则不再储存，只会设置数量为该物品的最大上限。</span></span>
<span class="line"><span>关闭时会为超堆叠的物品在存钱罐等空间里，查找空槽继续累积该物品(多人服务器不建议开)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.9</span></span>
<span class="line"><span>把世界更新时触发储存逻辑改为玩家移动触发（优化性能）</span></span>
<span class="line"><span>自动模式与盔甲模式加入了对宠物道具的识别</span></span>
<span class="line"><span>移除/ast sd 修改储存速度指令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.8</span></span>
<span class="line"><span>移除了自动清理玩家数据的逻辑与其相关配置项</span></span>
<span class="line"><span>将/ast reset指令改为:</span></span>
<span class="line"><span>单独的/astreset指令方便跳出循环重置服务器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.7 fix</span></span>
<span class="line"><span>修复钱币堆叠错误问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.7</span></span>
<span class="line"><span>移除大量非必要的配置项</span></span>
<span class="line"><span>加入了一个完整的指令版并美化了指令菜单</span></span>
<span class="line"><span>修复自动存储在没有存钱罐的情况下也会存钱的BUG</span></span>
<span class="line"><span>修复了自动识别的逻辑，不再需要写入大量物品ID进配置表进行匹配</span></span>
<span class="line"><span>加入移除玩家数据指令（用来重置服务器）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.6</span></span>
<span class="line"><span>移除了背包存钱速度配置项</span></span>
<span class="line"><span>修复了【手持存储模式】配置项以解决行走卡顿感</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.5</span></span>
<span class="line"><span>添加英文翻译</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.4</span></span>
<span class="line"><span>加入对装备饰品的检测</span></span>
<span class="line"><span>可以定义装备什么饰品触发自动储存</span></span>
<span class="line"><span>预设物品加入常见方块（非人工方块）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.3 </span></span>
<span class="line"><span>cmgy雱的钱币叠堆算法</span></span>
<span class="line"><span>修复自动存储超堆叠BUG</span></span>
<span class="line"><span>加入了对钱币计算的单独逻辑，储钱速度与物品分开</span></span>
<span class="line"><span>储物空间物品超过9999时默认会恢复9999（不再增加）</span></span>
<span class="line"><span>移除对给玩家免检堆叠权限的播报</span></span>
<span class="line"><span>加入大量内置物品，大概抄了wiki一半的物品ID进去：</span></span>
<span class="line"><span>除了方块/家具/武器/装备/饰品/服装/染料等非叠堆9999的材料</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.2</span></span>
<span class="line"><span>优化代码，添加使用说明</span></span>
<span class="line"><span>移除了【控超堆叠】配置项</span></span>
<span class="line"><span>使用本插件会使堆叠超上限</span></span>
<span class="line"><span>需给玩家免检堆叠权限：tshock.ignore.itemstack</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.1</span></span>
<span class="line"><span>将物品ID改为数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.0</span></span>
<span class="line"><span>修复储存速度修改无效导致刷物品bug</span></span>
<span class="line"><span>补充使用说明：不建议放药水进虚空袋</span></span>
<span class="line"><span>加入手持“储存道具”才会触发自动存储的配置项</span></span>
<span class="line"><span>加入了“控超堆叠”避免物品超过9999</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.0  </span></span>
<span class="line"><span>移除了\`物品前缀\`的配置项  </span></span>
<span class="line"><span>加入手持或所选物品不会被自动存储  </span></span>
<span class="line"><span>自存支持保险箱、护卫熔炉、虚空袋  </span></span>
<span class="line"><span>预设配置存储物品加入：  </span></span>
<span class="line"><span>“凝胶”、&quot;坠落之星&quot;、“礼物”、“礼袋”、“护卫奖章”  </span></span>
<span class="line"><span>加入存储回馈提示（避免玩家不知道东西去哪了）  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>v1.0.0  </span></span>
<span class="line"><span>根据背包/存钱罐/配置表里存在的物品进行自动存储</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,16)]))}const d=n(i,[["render",t],["__file","AutoStoreItems.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/AutoStoreItems.html","title":"AutoStoreItems 自动储存","lang":"zh-CN","frontmatter":{"description":"AutoStoreItems 自动储存 作者: 羽学 cmgy雱 出处: 无 持有指定物品根据配置物品ID自动存入存储空间 （支持自动存钱,感谢cmgy雱的钱币叠堆算法） 命令 配置注意事项 自动 手持 装备 当开启3种模式任意一个时其他2个模式会默认关闭，不论哪种模式都需要玩家移动和攻击才会触发储存 2.性能模式不会对单格达到9999或者本身为1堆叠...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/AutoStoreItems.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"AutoStoreItems 自动储存"}],["meta",{"property":"og:description","content":"AutoStoreItems 自动储存 作者: 羽学 cmgy雱 出处: 无 持有指定物品根据配置物品ID自动存入存储空间 （支持自动存钱,感谢cmgy雱的钱币叠堆算法） 命令 配置注意事项 自动 手持 装备 当开启3种模式任意一个时其他2个模式会默认关闭，不论哪种模式都需要玩家移动和攻击才会触发储存 2.性能模式不会对单格达到9999或者本身为1堆叠..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AutoStoreItems 自动储存\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":2,"title":"配置注意事项","slug":"配置注意事项","link":"#配置注意事项","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/AutoStoreItems.md"}');export{d as comp,r as data};
