import{_ as n,c as a,a as l,o as e}from"./app-BIPCnSct.js";const t={};function i(p,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="autofish-自动钓鱼" tabindex="-1"><a class="header-anchor" href="#autofish-自动钓鱼"><span>AutoFish 自动钓鱼</span></a></h1><ul><li>作者: 羽学 少司命</li><li>出处: 无</li><li>这是一个Tshock服务器的自动钓鱼插件</li><li>可钓出除了环境已存在物品外还可以为钓鱼配置【额外物品】</li><li>可通过配置文件调整单次鱼钩数量上限，或消耗指定物品来换取插件使用时长。</li><li>配备完整的指令系统(有些功能没开启或没权限不会显示相关指令)</li><li>本插件无法在血月钓任何NPC请注意使用指令关闭</li><li>(处于血月环境下使用/af指令会有相对于提示)</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/af</td><td style="text-align:center;">/autofish</td><td style="text-align:center;">autofish</td><td style="text-align:center;">指令菜单（查询自动钓鱼所剩时长）</td></tr><tr><td>/af on</td><td style="text-align:center;">/autofish on</td><td style="text-align:center;">autofish</td><td style="text-align:center;">开启玩家自己的自动钓鱼</td></tr><tr><td>/af off</td><td style="text-align:center;">/autofish off</td><td style="text-align:center;">autofish</td><td style="text-align:center;">关闭玩家自己的自动钓鱼</td></tr><tr><td>/af list</td><td style="text-align:center;">/autofish list</td><td style="text-align:center;">autofish</td><td style="text-align:center;">列出消耗模式指定物品表</td></tr><tr><td>/af loot</td><td style="text-align:center;">/autofish loot</td><td style="text-align:center;">autofish</td><td style="text-align:center;">列出额外渔获表</td></tr><tr><td>/af buff</td><td style="text-align:center;">/autofish buff</td><td style="text-align:center;">autofish</td><td style="text-align:center;">开启或关闭玩家自己的钓鱼BUFF</td></tr><tr><td>/af more</td><td style="text-align:center;">/autofish more</td><td style="text-align:center;">autofish.admin</td><td style="text-align:center;">开启或关闭多线模式</td></tr><tr><td>/af duo 数量</td><td style="text-align:center;">/autofish duo</td><td style="text-align:center;">autofish.admin</td><td style="text-align:center;">设置多线的钩子数量</td></tr><tr><td>/af + 物品名</td><td style="text-align:center;">/autofish + name</td><td style="text-align:center;">autofish.admin</td><td style="text-align:center;">为额外渔获添加物品</td></tr><tr><td>/af - 物品名</td><td style="text-align:center;">/autofish - name</td><td style="text-align:center;">autofish.admin</td><td style="text-align:center;">为额外渔获移除物品</td></tr><tr><td>/af mod</td><td style="text-align:center;">/autofish mod</td><td style="text-align:center;">autofish.admin</td><td style="text-align:center;">开启或关闭消耗模式</td></tr><tr><td>/af set 数量</td><td style="text-align:center;">/autofish set num</td><td style="text-align:center;">autofish.admin</td><td style="text-align:center;">设置消耗物品数量要求</td></tr><tr><td>/af time 数字</td><td style="text-align:center;">/autofish time num</td><td style="text-align:center;">autofish.admin</td><td style="text-align:center;">设置消耗自动时长</td></tr><tr><td>/af add 物品名</td><td style="text-align:center;">/autofish add name</td><td style="text-align:center;">autofish.admin</td><td style="text-align:center;">添加消耗指定物品</td></tr><tr><td>/af del 物品名</td><td style="text-align:center;">/autofish del name</td><td style="text-align:center;">autofish.admin</td><td style="text-align:center;">移除消耗指定物品</td></tr><tr><td>/reload</td><td style="text-align:center;">无</td><td style="text-align:center;">tshock.cfg.reload</td><td style="text-align:center;">重载配置文件</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/AutoFish.zh-CN.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;插件开关&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,  </span><span style="color:#6A9955;">//全局插件开关</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;多钩钓鱼&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">//为自动钓鱼开启连发模式，让钓鱼效率更高</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;随机物品&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">//随机钓出任意物品</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;多钩上限&quot;</span><span style="color:#D4D4D4;">: 5, </span><span style="color:#6A9955;">//定义最多可以多少鱼钩同时自动钓</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;广告开关&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">//下面这条字符串的开关</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;广告内容&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">[i:3456][C/F2F2C7:插件开发] [C/BFDFEA:by] [c/00FFFF:羽学] | [c/7CAEDD:少司命][i:3459]&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">//可自定义的字符串内容</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;Buff&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;80&quot;</span><span style="color:#D4D4D4;">: 10, </span><span style="color:#6A9955;">//80为buff的ID，10为持续时间，单位为帧，60帧=1秒</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;122&quot;</span><span style="color:#D4D4D4;">: 240</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;消耗模式&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">//消耗物品来换取自动钓鱼使用时长</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;消耗数量&quot;</span><span style="color:#D4D4D4;">: 10, </span><span style="color:#6A9955;">//在消耗模式下对以下物品的数量要求（比如物品A有6个+物品B有4个，就算10个）</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;自动时长&quot;</span><span style="color:#D4D4D4;">: 24, </span><span style="color:#6A9955;">//在消耗模式下赐予玩家使用自动钓鱼的时间，单位为分钟</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;消耗物品&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    2002, </span><span style="color:#6A9955;">//消耗模式的指定消耗物品</span></span>
<span class="line"><span style="color:#D4D4D4;">    2675,</span></span>
<span class="line"><span style="color:#D4D4D4;">    2676,</span></span>
<span class="line"><span style="color:#D4D4D4;">    3191,</span></span>
<span class="line"><span style="color:#D4D4D4;">    3194</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;额外渔获&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    75, </span><span style="color:#6A9955;">//除了环境本身存在的渔获外的自定义渔获</span></span>
<span class="line"><span style="color:#D4D4D4;">    29,</span></span>
<span class="line"><span style="color:#D4D4D4;">    3093,</span></span>
<span class="line"><span style="color:#D4D4D4;">    4345</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;禁止衍生弹幕&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    623, </span><span style="color:#6A9955;">//用于解决在多线钓鱼的模式下，单体召唤物会衍生更多数量的BUG</span></span>
<span class="line"><span style="color:#D4D4D4;">    625,</span></span>
<span class="line"><span style="color:#D4D4D4;">    626,</span></span>
<span class="line"><span style="color:#D4D4D4;">    627,</span></span>
<span class="line"><span style="color:#D4D4D4;">    628,</span></span>
<span class="line"><span style="color:#D4D4D4;">    831,</span></span>
<span class="line"><span style="color:#D4D4D4;">    832,</span></span>
<span class="line"><span style="color:#D4D4D4;">    833,</span></span>
<span class="line"><span style="color:#D4D4D4;">    834,</span></span>
<span class="line"><span style="color:#D4D4D4;">    835,</span></span>
<span class="line"><span style="color:#D4D4D4;">    963,</span></span>
<span class="line"><span style="color:#D4D4D4;">    970</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>v1.3.5</span></span>
<span class="line"><span>准备更新TS 5.2.1,修正文档，初始配置内容更改</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.4</span></span>
<span class="line"><span>补充v1.3.2遗漏的代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.3</span></span>
<span class="line"><span>引用LazyAPI</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.2</span></span>
<span class="line"><span>尝试修复鱼饵数量为1时崩服BUG</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.1</span></span>
<span class="line"><span>修复了在多钩钓鱼模式下，单体召唤物衍生更多数量BUG</span></span>
<span class="line"><span>并加了一个配置项来禁止它们&quot;禁止衍生弹幕&quot;。</span></span>
<span class="line"><span>加入了随机物品配置项，开启时会随机钓到任意物品。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.0</span></span>
<span class="line"><span>修复了首选鱼饵不会消失,变成无限饵,或卡线程BUG</span></span>
<span class="line"><span>修改了额外渔获也能与其他环境已存在的物品一起上钩</span></span>
<span class="line"><span>重构了消耗模式的代码逻辑，优化性能，修复BUG。</span></span>
<span class="line"><span>加入了设置多钩数量的指令：/af duo 数量</span></span>
<span class="line"><span>加入了额外渔获表的相关指令</span></span>
<span class="line"><span>把/af buff指令改为玩家可用，用来切换自身BUFF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.0</span></span>
<span class="line"><span>修复了钓鱼不消耗鱼饵问题</span></span>
<span class="line"><span>修复了松露虫钓不了猪鲨的BUG</span></span>
<span class="line"><span>修复了鱼饵数量为1时线程卡住问题</span></span>
<span class="line"><span>加入了【消耗模式】配置项</span></span>
<span class="line"><span>加入了【钓鱼BUFF】配置项（上钩才会触发）</span></span>
<span class="line"><span>消耗模式为1.1.0版的扣除物品数量获取自动时长逻辑</span></span>
<span class="line"><span>完善了自动钓鱼的指令系统，并对其做了不同权限与模式下的内容显示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.0</span></span>
<span class="line"><span>成功完成Tshock版《自动钓鱼》，</span></span>
<span class="line"><span>加入了消耗鱼饵数量来换取自动钓鱼使用时长的逻辑</span></span>
<span class="line"><span>当身上有松露虫时，会自动钓上铁镐，并试图关闭玩家的自动钓鱼开关</span></span>
<span class="line"><span>玩家可通过/af on指令重新开启插件，并不会清空玩家的自动钓鱼时长</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.0.0</span></span>
<span class="line"><span>试图制作Tshock版《自动钓鱼》，而失败的半成品：</span></span>
<span class="line"><span>服务器无法修改客户端玩家的操作，更没有相对数据包来处理上钩的状态。</span></span>
<span class="line"><span>尝试从AI[0]改为1来触发收线效果，但无法获取到实际的渔获。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,11)]))}const c=n(t,[["render",i],["__file","AutoFish.html.vue"]]),o=JSON.parse('{"path":"/zh/guide/AutoFish.html","title":"AutoFish 自动钓鱼","lang":"zh-CN","frontmatter":{"description":"AutoFish 自动钓鱼 作者: 羽学 少司命 出处: 无 这是一个Tshock服务器的自动钓鱼插件 可钓出除了环境已存在物品外还可以为钓鱼配置【额外物品】 可通过配置文件调整单次鱼钩数量上限，或消耗指定物品来换取插件使用时长。 配备完整的指令系统(有些功能没开启或没权限不会显示相关指令) 本插件无法在血月钓任何NPC请注意使用指令关闭 (处于血月环...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/AutoFish.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"AutoFish 自动钓鱼"}],["meta",{"property":"og:description","content":"AutoFish 自动钓鱼 作者: 羽学 少司命 出处: 无 这是一个Tshock服务器的自动钓鱼插件 可钓出除了环境已存在物品外还可以为钓鱼配置【额外物品】 可通过配置文件调整单次鱼钩数量上限，或消耗指定物品来换取插件使用时长。 配备完整的指令系统(有些功能没开启或没权限不会显示相关指令) 本插件无法在血月钓任何NPC请注意使用指令关闭 (处于血月环..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AutoFish 自动钓鱼\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/AutoFish.md"}');export{c as comp,o as data};