import{_ as n,e as a,f as l,o as e}from"./app-DZ7_zUSE.js";const p={};function o(i,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="endureboost-拥有指定数量物品给指定buff" tabindex="-1"><a class="header-anchor" href="#endureboost-拥有指定数量物品给指定buff"><span>EndureBoost 拥有指定数量物品给指定buff</span></a></h1><ul><li>作者: 肝帝熙恩</li><li>出处: 本仓库</li><li>当玩家背包药水或某些物品到达一定数量后，给与指定buff</li><li>进入服务器刷新，指令刷新，死亡刷新，回城刷新</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/ebbuff 或 /ldbuff 或 /loadbuff 或 /刷新buff</td><td style="text-align:center;">EndureBoost</td><td style="text-align:center;">立即刷新本插件buff状态</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件路径：tshock/EndureBoost.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;猪猪储钱罐&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;保险箱&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;护卫熔炉&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;虚空宝藏袋&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;持续时间(s)&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3600</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;自动更新频率(s)&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;药水&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;药水id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        288</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        289</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;药水数量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;药水id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        290</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;药水数量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;背包&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;同时拥有时触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 为true时，必须要有全部物品且都达到数量才触发</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        3</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品数量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;给buff的id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        9</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        11</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;同时拥有时触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        5</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品数量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;给buff的id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        11</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;配饰&quot;</span><span style="color:#24292E;">: [ </span><span style="color:#6A737D;">// 装备和饰品，包括社交栏</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;同时拥有时触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;配饰id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        2763</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        2764</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        2765</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品数量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;给buff的id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        181</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;非本装备栏也触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;社交栏也触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;同时拥有时触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;配饰id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        13</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        14</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品数量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;给buff的id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        178</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;非本装备栏也触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;社交栏也触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;染料&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;同时拥有时触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;染料id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        2871</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品数量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;给buff的id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        10</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;非本装备栏也触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;同时拥有时触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;染料id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        1007</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        1008</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品数量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;给buff的id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        12</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;非本装备栏也触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;全部物品&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;同时拥有时触发&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        30</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品数量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;给buff的id&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        26</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        27</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        29</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.0.4</span></span>
<span class="line"><span>全部物品包含社交栏</span></span>
<span class="line"><span>v1.0.3</span></span>
<span class="line"><span>允许自定义自动更新评率，添加配饰，染料，全部物品类型</span></span>
<span class="line"><span>v1.0.2</span></span>
<span class="line"><span>其他物品类型内支持多个buff，完成i18n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const t=n(p,[["render",o],["__file","EndureBoost.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/EndureBoost.html","title":"EndureBoost 拥有指定数量物品给指定buff","lang":"zh-CN","frontmatter":{"description":"EndureBoost 拥有指定数量物品给指定buff 作者: 肝帝熙恩 出处: 本仓库 当玩家背包药水或某些物品到达一定数量后，给与指定buff 进入服务器刷新，指令刷新，死亡刷新，回城刷新 指令 配置 配置文件路径：tshock/EndureBoost.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://githu...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/EndureBoost.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"EndureBoost 拥有指定数量物品给指定buff"}],["meta",{"property":"og:description","content":"EndureBoost 拥有指定数量物品给指定buff 作者: 肝帝熙恩 出处: 本仓库 当玩家背包药水或某些物品到达一定数量后，给与指定buff 进入服务器刷新，指令刷新，死亡刷新，回城刷新 指令 配置 配置文件路径：tshock/EndureBoost.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://githu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"EndureBoost 拥有指定数量物品给指定buff\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/EndureBoost.md"}');export{t as comp,r as data};
