import{_ as n,c as a,a as l,o as e}from"./app-BIPCnSct.js";const i={};function p(c,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="veinminer-连锁挖矿" tabindex="-1"><a class="header-anchor" href="#veinminer-连锁挖矿"><span>VeinMiner 连锁挖矿</span></a></h1><ul><li>作者: Megghy|YSpoof|Maxthegreat99|肝帝熙恩</li><li>出处: <a href="https://github.com/Maxthegreat99/TSHockVeinMiner" target="_blank" rel="noopener noreferrer">github</a></li><li>连锁挖矿，字面意思</li><li>可以连锁挖一堆矿然后爆指定物品</li></ul><blockquote><p>[!IMPORTANT] 启用连锁挖矿需要权限<code>veinminer</code><br> 授权命令: <code>/group addperm default veinminer</code>(<code>default</code>为默认组，你也可以替换为你需要的组)</p></blockquote><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/vm</td><td style="text-align:center;">veinminer</td><td style="text-align:center;">开关连锁挖矿指令</td></tr><tr><td>/vm [任意参数]</td><td style="text-align:center;">veinminer</td><td style="text-align:center;">开关连锁挖矿提示消息指令</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/VeinMiner.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;启用&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;广播&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;放入背包&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;矿石物块ID&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    7,</span></span>
<span class="line"><span style="color:#D4D4D4;">    166,</span></span>
<span class="line"><span style="color:#D4D4D4;">    6,</span></span>
<span class="line"><span style="color:#D4D4D4;">    167,</span></span>
<span class="line"><span style="color:#D4D4D4;">    9,</span></span>
<span class="line"><span style="color:#D4D4D4;">    168,</span></span>
<span class="line"><span style="color:#D4D4D4;">    8,</span></span>
<span class="line"><span style="color:#D4D4D4;">    169,</span></span>
<span class="line"><span style="color:#D4D4D4;">    37,</span></span>
<span class="line"><span style="color:#D4D4D4;">    22,</span></span>
<span class="line"><span style="color:#D4D4D4;">    204,</span></span>
<span class="line"><span style="color:#D4D4D4;">    56,</span></span>
<span class="line"><span style="color:#D4D4D4;">    58,</span></span>
<span class="line"><span style="color:#D4D4D4;">    107,</span></span>
<span class="line"><span style="color:#D4D4D4;">    221,</span></span>
<span class="line"><span style="color:#D4D4D4;">    108,</span></span>
<span class="line"><span style="color:#D4D4D4;">    222,</span></span>
<span class="line"><span style="color:#D4D4D4;">    111,</span></span>
<span class="line"><span style="color:#D4D4D4;">    223,</span></span>
<span class="line"><span style="color:#D4D4D4;">    211,</span></span>
<span class="line"><span style="color:#D4D4D4;">    408,</span></span>
<span class="line"><span style="color:#D4D4D4;">    123,</span></span>
<span class="line"><span style="color:#D4D4D4;">    224,</span></span>
<span class="line"><span style="color:#D4D4D4;">    404,</span></span>
<span class="line"><span style="color:#D4D4D4;">    178,</span></span>
<span class="line"><span style="color:#D4D4D4;">    63,</span></span>
<span class="line"><span style="color:#D4D4D4;">    64,</span></span>
<span class="line"><span style="color:#D4D4D4;">    65,</span></span>
<span class="line"><span style="color:#D4D4D4;">    66,</span></span>
<span class="line"><span style="color:#D4D4D4;">    67,</span></span>
<span class="line"><span style="color:#D4D4D4;">    68</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;忽略挖掘表面方块ID&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    21,</span></span>
<span class="line"><span style="color:#D4D4D4;">    26,</span></span>
<span class="line"><span style="color:#D4D4D4;">    88</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#F44747;">  奖励规则</span><span style="color:#CE9178;">&quot;: [],</span></span>
<span class="line"><span style="color:#CE9178;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;启用&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;广播&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;放入背包&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;矿石物块ID&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    7,</span></span>
<span class="line"><span style="color:#D4D4D4;">    166,</span></span>
<span class="line"><span style="color:#D4D4D4;">    6,</span></span>
<span class="line"><span style="color:#D4D4D4;">    167,</span></span>
<span class="line"><span style="color:#D4D4D4;">    9,</span></span>
<span class="line"><span style="color:#D4D4D4;">    168,</span></span>
<span class="line"><span style="color:#D4D4D4;">    8,</span></span>
<span class="line"><span style="color:#D4D4D4;">    169,</span></span>
<span class="line"><span style="color:#D4D4D4;">    37,</span></span>
<span class="line"><span style="color:#D4D4D4;">    22,</span></span>
<span class="line"><span style="color:#D4D4D4;">    204,</span></span>
<span class="line"><span style="color:#D4D4D4;">    56,</span></span>
<span class="line"><span style="color:#D4D4D4;">    58,</span></span>
<span class="line"><span style="color:#D4D4D4;">    107,</span></span>
<span class="line"><span style="color:#D4D4D4;">    221,</span></span>
<span class="line"><span style="color:#D4D4D4;">    108,</span></span>
<span class="line"><span style="color:#D4D4D4;">    222,</span></span>
<span class="line"><span style="color:#D4D4D4;">    111,</span></span>
<span class="line"><span style="color:#D4D4D4;">    223,</span></span>
<span class="line"><span style="color:#D4D4D4;">    211,</span></span>
<span class="line"><span style="color:#D4D4D4;">    408,</span></span>
<span class="line"><span style="color:#D4D4D4;">    123,</span></span>
<span class="line"><span style="color:#D4D4D4;">    224,</span></span>
<span class="line"><span style="color:#D4D4D4;">    404,</span></span>
<span class="line"><span style="color:#D4D4D4;">    178,</span></span>
<span class="line"><span style="color:#D4D4D4;">    63,</span></span>
<span class="line"><span style="color:#D4D4D4;">    64,</span></span>
<span class="line"><span style="color:#D4D4D4;">    65,</span></span>
<span class="line"><span style="color:#D4D4D4;">    66,</span></span>
<span class="line"><span style="color:#D4D4D4;">    67,</span></span>
<span class="line"><span style="color:#D4D4D4;">    68</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;忽略挖掘表面方块ID&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    21,</span></span>
<span class="line"><span style="color:#D4D4D4;">    26,</span></span>
<span class="line"><span style="color:#D4D4D4;">    88</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;奖励规则&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;仅给予物品&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;最小尺寸&quot;</span><span style="color:#D4D4D4;">: 10,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;矿石物块ID&quot;</span><span style="color:#D4D4D4;">: 168,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;奖励物品&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;666&quot;</span><span style="color:#D4D4D4;">: 1,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;669&quot;</span><span style="color:#D4D4D4;">: 1</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;仅给予物品&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;最小尺寸&quot;</span><span style="color:#D4D4D4;">: 10,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;矿石物块ID&quot;</span><span style="color:#D4D4D4;">: 8,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;奖励物品&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;662&quot;</span><span style="color:#D4D4D4;">: 5,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;219&quot;</span><span style="color:#D4D4D4;">: 1</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>v1.6.0.6</span></span>
<span class="line"><span>修复：背包满的时候去挖达到可获得奖励数量的矿，只会挖掉一个矿，但却会给予一个奖励物品，然后就可以用这个刷奖励</span></span>
<span class="line"><span>完善消息提示逻辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.6.0.5</span></span>
<span class="line"><span>修复刷矿，添加英文翻译</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.6.0.4</span></span>
<span class="line"><span>完善卸载函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.6.0.3</span></span>
<span class="line"><span>添加配置，当矿石上方有指定方块时，不会触发连锁挖矿（避免刷矿）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,14)]))}const r=n(i,[["render",p],["__file","VeinMiner.html.vue"]]),t=JSON.parse('{"path":"/zh/guide/VeinMiner.html","title":"VeinMiner 连锁挖矿","lang":"zh-CN","frontmatter":{"description":"VeinMiner 连锁挖矿 作者: Megghy|YSpoof|Maxthegreat99|肝帝熙恩 出处: github 连锁挖矿，字面意思 可以连锁挖一堆矿然后爆指定物品 [!IMPORTANT] 启用连锁挖矿需要权限veinminer 授权命令: /group addperm default veinminer(default为默认组，你也可以...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/VeinMiner.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"VeinMiner 连锁挖矿"}],["meta",{"property":"og:description","content":"VeinMiner 连锁挖矿 作者: Megghy|YSpoof|Maxthegreat99|肝帝熙恩 出处: github 连锁挖矿，字面意思 可以连锁挖一堆矿然后爆指定物品 [!IMPORTANT] 启用连锁挖矿需要权限veinminer 授权命令: /group addperm default veinminer(default为默认组，你也可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VeinMiner 连锁挖矿\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/VeinMiner.md"}');export{r as comp,t as data};
