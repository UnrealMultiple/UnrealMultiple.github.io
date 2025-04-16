import{_ as n,e,f as a,o as l}from"./app-B7FU61Yn.js";const t={};function i(p,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="caipacketdebug-数据包调试" tabindex="-1"><a class="header-anchor" href="#caipacketdebug-数据包调试"><span>CaiPacketDebug 数据包调试</span></a></h1><ul><li>作者: Cai</li><li>出处: 本仓库</li><li>本插件用于查看客户端、服务端的数据包内容</li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>需要安装前置：TrProtocol</p></div><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/cpd</td><td style="text-align:center;">CaiPacketDebug.Use</td><td style="text-align:center;">查看调试启用状态</td></tr><tr><td>/cpd stc</td><td style="text-align:center;">CaiPacketDebug.Use</td><td style="text-align:center;">S-&gt;C数据包调试</td></tr><tr><td>/cpd cts</td><td style="text-align:center;">CaiPacketDebug.Use</td><td style="text-align:center;">C-&gt;S数据包调试</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/CaiPacketDebug.zh-CN.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;C-&gt;S&quot;</span><span style="color:#24292E;">: { </span><span style="color:#6A737D;">//客户端向服务器发送的数据包</span></span>
<span class="line"><span style="color:#032F62;">    &quot;自启动&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//打开服务器时自动启用调试</span></span>
<span class="line"><span style="color:#032F62;">    &quot;白名单模式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//只显示白名单列表的数据包</span></span>
<span class="line"><span style="color:#032F62;">    &quot;白名单模式数据包&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">      1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">      2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">      3</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#032F62;">    &quot;排除数据包&quot;</span><span style="color:#24292E;">: [ </span><span style="color:#6A737D;">//排除以下数据包</span></span>
<span class="line"><span style="color:#005CC5;">      114</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">      514</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#032F62;">  &quot;S-&gt;C&quot;</span><span style="color:#24292E;">: { </span><span style="color:#6A737D;">//服务器向客户端发送的数据包</span></span>
<span class="line"><span style="color:#032F62;">    &quot;自启动&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;白名单模式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;白名单模式数据包&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">      1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">      2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">      3</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#032F62;">    &quot;排除数据包&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">      23</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>2025.1.25.2 添加 GetString</span></span>
<span class="line"><span>2025.1.25.1 提高插件优先级，显示客户端索引, 修复无法解析NetManager发送的数据包</span></span>
<span class="line"><span>2024.11.30.0 使用lazyapi,i18n预备</span></span>
<span class="line"><span>2024.11.10.0 添加插件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,12)]))}const c=n(t,[["render",i],["__file","CaiPacketDebug.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/CaiPacketDebug.html","title":"CaiPacketDebug 数据包调试","lang":"zh-CN","frontmatter":{"description":"CaiPacketDebug 数据包调试 作者: Cai 出处: 本仓库 本插件用于查看客户端、服务端的数据包内容 注 需要安装前置：TrProtocol 指令 配置 配置文件位置：tshock/CaiPacketDebug.zh-CN.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/Unre...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/CaiPacketDebug.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"CaiPacketDebug 数据包调试"}],["meta",{"property":"og:description","content":"CaiPacketDebug 数据包调试 作者: Cai 出处: 本仓库 本插件用于查看客户端、服务端的数据包内容 注 需要安装前置：TrProtocol 指令 配置 配置文件位置：tshock/CaiPacketDebug.zh-CN.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/Unre..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CaiPacketDebug 数据包调试\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/CaiPacketDebug.md"}');export{c as comp,r as data};
