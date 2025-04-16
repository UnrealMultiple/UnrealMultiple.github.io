import{_ as n,e as a,f as l,o as e}from"./app-B7FU61Yn.js";const o={};function t(p,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="lagrange-xocmat-bot适配插件" tabindex="-1"><a class="header-anchor" href="#lagrange-xocmat-bot适配插件"><span>Lagrange.XocMat BOT适配插件</span></a></h1><ul><li>作者: 少司命</li><li>仓库: 此仓库</li></ul><h2 id="lagrange-xocmat-地址" tabindex="-1"><a class="header-anchor" href="#lagrange-xocmat-地址"><span>Lagrange.XocMat 地址</span></a></h2><ul><li><a href="https://github.com/UnrealMultiple/XocMat" target="_blank" rel="noopener noreferrer">Lagrange.XocMat</a></li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>暂无</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/Lagrange.XocMat.Adapter.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;阻止未注册进入&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;阻止语句&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;未注禁止进入服务器！&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;Socket&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;套字节地址&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;127.0.0.1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;服务器名称&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;玄荒&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 名称要求相同</span></span>
<span class="line"><span style="color:#032F62;">    &quot;端口&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">6000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;心跳包间隔&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">60000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;重连间隔&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;空指令注册&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">      &quot;购买&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;抽&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#032F62;">    &quot;验证令牌&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#B31D28;font-style:italic;"> //与Lagrange.XocMat配置中相同</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#032F62;">  &quot;重置设置&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;删除地图&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;删除日志&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;执行命令&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">      &quot;/skill reset&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;/deal reset&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;/礼包 重置&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;/level reset&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;/clearallplayersplus&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#032F62;">    &quot;删除表&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">      &quot;boss数据统计&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;economics&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;economicsskill&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;learnt&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;OnlineDuration&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;BotOnlineDuration&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;BotDeath&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;onlybaniplist&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;permabuff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;permabuffs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;regions&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;user&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;Death&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;rememberedpos&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;research&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;stronger&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;synctable&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;tscharacter&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;users&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;warps&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;weapons&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;使用日志&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.0.0.1</span></span>
<span class="line"><span>阻止语句改string[]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,13)]))}const i=n(o,[["render",t],["__file","Lagrange.XocMat.Adapter.html.vue"]]),c=JSON.parse('{"path":"/zh/guide/Lagrange.XocMat.Adapter.html","title":"Lagrange.XocMat BOT适配插件","lang":"zh-CN","frontmatter":{"description":"Lagrange.XocMat BOT适配插件 作者: 少司命 仓库: 此仓库 Lagrange.XocMat 地址 Lagrange.XocMat 指令 配置 配置文件位置：tshock/Lagrange.XocMat.Adapter.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/Unre...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/Lagrange.XocMat.Adapter.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"Lagrange.XocMat BOT适配插件"}],["meta",{"property":"og:description","content":"Lagrange.XocMat BOT适配插件 作者: 少司命 仓库: 此仓库 Lagrange.XocMat 地址 Lagrange.XocMat 指令 配置 配置文件位置：tshock/Lagrange.XocMat.Adapter.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/Unre..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lagrange.XocMat BOT适配插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Lagrange.XocMat 地址","slug":"lagrange-xocmat-地址","link":"#lagrange-xocmat-地址","children":[]},{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/Lagrange.XocMat.Adapter.md"}');export{i as comp,c as data};
