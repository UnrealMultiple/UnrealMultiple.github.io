import{_ as e,e as l,f as a,o as n}from"./app-B7FU61Yn.js";const s={};function r(o,t){return n(),l("div",null,t[0]||(t[0]=[a(`<h1 id="playerrandomswapper-玩家位置随机交换" tabindex="-1"><a class="header-anchor" href="#playerrandomswapper-玩家位置随机交换"><span>PlayerRandomSwapper 玩家位置随机交换</span></a></h1><ul><li>作者: 肝帝熙恩 少司命</li><li>出处: 无</li><li>随机交换玩家的位置，分为多人模式和双人模式</li><li>多人模式下，所有玩家随机交换位置。双人模式下，随机选取两名玩家交换位置</li><li>有权限<code>playerswap</code>并且没有在死亡状态的玩家才会被列入传送列表，当玩家列表少于2人时，不会传送</li><li>支持随机传送时间间隔</li></ul><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/swaptoggle as</td><td style="text-align:center;">/swaptoggle allowself</td><td style="text-align:center;">swapplugin.toggle</td><td style="text-align:center;">切换允许双人模式玩家和自己交换位置的状态</td></tr><tr><td>/swaptoggle en</td><td style="text-align:center;">/swaptoggle enable</td><td style="text-align:center;">swapplugin.toggle</td><td style="text-align:center;">切换随机位置互换的状态</td></tr><tr><td>/swaptoggle i &lt;传送间隔秒&gt;</td><td style="text-align:center;">/swaptoggle interval</td><td style="text-align:center;">swapplugin.toggle</td><td style="text-align:center;">设置传送间隔时间（秒）</td></tr><tr><td>/swaptoggle maxi &lt;最大传送间隔秒&gt;</td><td style="text-align:center;">/swaptoggle maxinterval</td><td style="text-align:center;">swapplugin.toggle</td><td style="text-align:center;">设置最大传送间隔时间（秒）</td></tr><tr><td>/swaptoggle mini &lt;最小传送间隔秒&gt;</td><td style="text-align:center;">/swaptoggle mininterval</td><td style="text-align:center;">swapplugin.toggle</td><td style="text-align:center;">设置最小传送间隔时间（秒）</td></tr><tr><td>/swaptoggle ri</td><td style="text-align:center;">/swaptoggle randominterval</td><td style="text-align:center;">swapplugin.toggle</td><td style="text-align:center;">切换随机传送间隔的状态</td></tr><tr><td>/swaptoggle swap</td><td style="text-align:center;">/swaptoggle swap</td><td style="text-align:center;">swapplugin.toggle</td><td style="text-align:center;">切换广播玩家交换位置信息的状态</td></tr><tr><td>/swaptoggle timer [广播交换倒计时阈值]</td><td style="text-align:center;">/swaptoggle timer</td><td style="text-align:center;">swapplugin.toggle</td><td style="text-align:center;">切换广播剩余传送时间的状态或设置广播交换倒计时阈值</td></tr><tr><td></td><td style="text-align:center;"></td><td style="text-align:center;">playerswap</td><td style="text-align:center;">有这个权限才会被传送</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/PlayerRandomSwapper.zh-CN.json</p></blockquote><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;总开关&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;传送间隔秒&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;随机传送间隔&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;传送间隔秒最大值&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;传送间隔秒最小值&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;双人模式允许玩家和自己交换&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;多人打乱模式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;广播剩余传送时间&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;广播交换倒计时阈值&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;广播玩家交换位置信息&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const i=e(s,[["render",r],["__file","PlayerRandomSwapper.html.vue"]]),d=JSON.parse('{"path":"/zh/guide/PlayerRandomSwapper.html","title":"PlayerRandomSwapper 玩家位置随机交换","lang":"zh-CN","frontmatter":{"description":"PlayerRandomSwapper 玩家位置随机交换 作者: 肝帝熙恩 少司命 出处: 无 随机交换玩家的位置，分为多人模式和双人模式 多人模式下，所有玩家随机交换位置。双人模式下，随机选取两名玩家交换位置 有权限playerswap并且没有在死亡状态的玩家才会被列入传送列表，当玩家列表少于2人时，不会传送 支持随机传送时间间隔 更新日志 指令 配...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/PlayerRandomSwapper.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"PlayerRandomSwapper 玩家位置随机交换"}],["meta",{"property":"og:description","content":"PlayerRandomSwapper 玩家位置随机交换 作者: 肝帝熙恩 少司命 出处: 无 随机交换玩家的位置，分为多人模式和双人模式 多人模式下，所有玩家随机交换位置。双人模式下，随机选取两名玩家交换位置 有权限playerswap并且没有在死亡状态的玩家才会被列入传送列表，当玩家列表少于2人时，不会传送 支持随机传送时间间隔 更新日志 指令 配..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PlayerRandomSwapper 玩家位置随机交换\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/PlayerRandomSwapper.md"}');export{i as comp,d as data};
