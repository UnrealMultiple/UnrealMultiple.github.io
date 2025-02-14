import{_ as n,a,b as l,o as e}from"./app-_4TOW6Hv.js";const p={};function t(i,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="playerspeed-玩家速度插件" tabindex="-1"><a class="header-anchor" href="#playerspeed-玩家速度插件"><span>PlayerSpeed 玩家速度插件</span></a></h1><ul><li>作者: 逆光奔跑 羽学</li><li>出处: Tshock官方Q群816771079</li><li>这是一个Tshock服务器插件，主要用于：<br> 提升玩家冲刺跳跃速度与距离,当使用满配置文件指定次数自动进入冷却时间。</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/vel on</td><td style="text-align:center;">无</td><td style="text-align:center;">vel.admin</td><td style="text-align:center;">开启插件功能</td></tr><tr><td>/vel off</td><td style="text-align:center;">无</td><td style="text-align:center;">vel.admin</td><td style="text-align:center;">关闭插件功能</td></tr><tr><td>/vel set</td><td style="text-align:center;">/vel s</td><td style="text-align:center;">vel.admin</td><td style="text-align:center;">设置全局冲刺速度与冷却时间</td></tr><tr><td>/vel boss</td><td style="text-align:center;">无</td><td style="text-align:center;">vel.admin</td><td style="text-align:center;">自动进度模式开关</td></tr><tr><td>/vel mess</td><td style="text-align:center;">无</td><td style="text-align:center;">vel.admin</td><td style="text-align:center;">开启或关闭播报系统</td></tr><tr><td>/vel del</td><td style="text-align:center;">无</td><td style="text-align:center;">vel.admin</td><td style="text-align:center;">删除指定玩家数据</td></tr><tr><td>/vel reset</td><td style="text-align:center;">无</td><td style="text-align:center;">vel.admin</td><td style="text-align:center;">重置所有玩家数据</td></tr><tr><td>/reload</td><td style="text-align:center;">无</td><td style="text-align:center;">tshock.cfg.reload</td><td style="text-align:center;">重载配置文件</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/玩家速度.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;开关&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;次数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;间隔&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2000.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;冷却&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;速度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;高度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;播报&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;冲刺&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;冲刺速度倍数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;跳跃&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;跳跃下降除于倍数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;跳跃加速物品&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">    5107</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    4989</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;自动进度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;自动进度表&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物名称&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;克苏鲁之眼, 史莱姆王&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;击败状态&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;设置速度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;设置高度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;使用次数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;冷却时间&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物ID&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        50</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物名称&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;世界吞噬怪, 克苏鲁之脑&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;击败状态&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;设置速度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">25.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;设置高度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;使用次数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;冷却时间&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物ID&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        13</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        266</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物名称&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;血肉墙&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;击败状态&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;设置速度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;设置高度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;使用次数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;冷却时间&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物ID&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        113</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物名称&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;激光眼, 魔焰眼, 机械骷髅王, 毁灭者&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;击败状态&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;设置速度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">40.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;设置高度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">15.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;使用次数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;冷却时间&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物ID&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        125</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        126</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        127</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        134</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.2.3</span></span>
<span class="line"><span>Database改utf-8</span></span>
<span class="line"><span>v1.2.2</span></span>
<span class="line"><span>加入自动进度模式,根据击败任意BOSS自动设置速度与冷却等相关数值…(开关指令:/vel boss)</span></span>
<span class="line"><span>使用自动进度模式记得用指令重置击败记录：/vel reset </span></span>
<span class="line"><span>拥有vel.admin管理权限不会进入冷却期(触发间隔不免,防止卡服)</span></span>
<span class="line"><span>允许vel.use权限的玩家使用/vel 查询当前速度状态</span></span>
<span class="line"><span>加入了跳跃下降除于倍数配置项(用于辅助坐骑冲刺时优化手感)</span></span>
<span class="line"><span>加入了Y轴上升下降加速逻辑:</span></span>
<span class="line"><span>当按住左上或左下时按空格会加速上升与下降</span></span>
<span class="line"><span>反之只按左或右，直接按空格则往前加速</span></span>
<span class="line"><span>/vel s指令加入了新属性参数：</span></span>
<span class="line"><span>高度:h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.1</span></span>
<span class="line"><span>重构无限冲逻辑避免性能问题：</span></span>
<span class="line"><span>满足配置中的\`次数\`进入冷却时间</span></span>
<span class="line"><span>并给每次动作设定了间隔时间(毫秒)</span></span>
<span class="line"><span>移除了\`上次跳跃\`的相关播报</span></span>
<span class="line"><span>移除了停止时间（ut）属性</span></span>
<span class="line"><span>/vel s指令加入了新属性参数：</span></span>
<span class="line"><span>间隔:r</span></span>
<span class="line"><span>次数:c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.0</span></span>
<span class="line"><span>加入了无限冲刺机制：</span></span>
<span class="line"><span>1.当使用克盾类饰品双击冲刺不断冲刺</span></span>
<span class="line"><span>2.装备指定物品时不断使用跳跃</span></span>
<span class="line"><span>可以刷新无限冲刺的间隔</span></span>
<span class="line"><span>当冲刺间隔超过《停止无限冲时的毫秒》时自动进入冷却期</span></span>
<span class="line"><span>/vel s指令加入了新属性参数：</span></span>
<span class="line"><span>停止时间:ut</span></span>
<span class="line"><span>添加跳跃物品:add</span></span>
<span class="line"><span>移除跳跃物品:del</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.0</span></span>
<span class="line"><span>因群友&quot;哨兵&quot;服主的定制要求修改而来</span></span>
<span class="line"><span>加入了冲刺判断逻辑和冷却机制</span></span>
<span class="line"><span>重构了大部分代码与指令方法、触发逻辑</span></span>
<span class="line"><span>玩家使用权限：vel.use</span></span>
<span class="line"><span>管理员权限：vel.admin</span></span>
<span class="line"><span>/vel set 指令格式：</span></span>
<span class="line"><span>/vel s sd 40 t 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.0.0</span></span>
<span class="line"><span>从逆光奔跑那反编译来的</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlayerSpeed" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlayerSpeed</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const c=n(p,[["render",t],["__file","PlayerSpeed.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/PlayerSpeed.html","title":"PlayerSpeed 玩家速度插件","lang":"zh-CN","frontmatter":{"description":"PlayerSpeed 玩家速度插件 作者: 逆光奔跑 羽学 出处: Tshock官方Q群816771079 这是一个Tshock服务器插件，主要用于： 提升玩家冲刺跳跃速度与距离,当使用满配置文件指定次数自动进入冷却时间。 指令 配置 配置文件位置：tshock/玩家速度.json 更新日志 反馈 优先发issued -> 共同维护的插件库：http...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/PlayerSpeed.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"PlayerSpeed 玩家速度插件"}],["meta",{"property":"og:description","content":"PlayerSpeed 玩家速度插件 作者: 逆光奔跑 羽学 出处: Tshock官方Q群816771079 这是一个Tshock服务器插件，主要用于： 提升玩家冲刺跳跃速度与距离,当使用满配置文件指定次数自动进入冷却时间。 指令 配置 配置文件位置：tshock/玩家速度.json 更新日志 反馈 优先发issued -> 共同维护的插件库：http..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PlayerSpeed 玩家速度插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/PlayerSpeed.md"}');export{c as comp,r as data};
