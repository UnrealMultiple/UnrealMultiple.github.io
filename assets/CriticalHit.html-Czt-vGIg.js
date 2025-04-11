import{_ as n,e as a,f as l,o as e}from"./app-DZ7_zUSE.js";const i={};function p(o,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="criticalhit-打击文字提示" tabindex="-1"><a class="header-anchor" href="#criticalhit-打击文字提示"><span>CriticalHit 打击文字提示</span></a></h1><ul><li>作者: White,Stone·Free，肝帝熙恩</li><li>出处: TShock官方群聊</li><li>在攻击NPC如果产生暴击，会弹出特殊的浮动文字（和伤害数字一样）</li><li>根据武器类型不同产生不同文字</li><li>可以设置即使不暴击也产生文字</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>暂无</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/CriticalConfig.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;总开关&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;仅暴击显示&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;消息分类&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;近战&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;详细消息设置&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">        &quot;砰!&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">          255</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          120</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          0</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#032F62;">        &quot;嘭!&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">          255</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          40</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          50</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#032F62;">        &quot;啪!&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">          255</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          255</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          0</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#032F62;">        &quot;噗通!&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">          255</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          0</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#032F62;">    &quot;爆炸&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;详细消息设置&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">        &quot;Boom!&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">          255</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          0</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#032F62;">        &quot;轰隆!&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">          255</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          0</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#032F62;">    &quot;远程&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;详细消息设置&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">        &quot;Biu biu!&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">          50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          255</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          10</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#032F62;">    &quot;魔法&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;详细消息设置&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">        &quot;啪嗒!&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">          10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          255</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#032F62;">        &quot;嗖!&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">          0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          150</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          255</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#032F62;">        &quot;Whoomph!&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">          0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">          255</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.2.1 添加英文翻译</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const t=n(i,[["render",p],["__file","CriticalHit.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/CriticalHit.html","title":"CriticalHit 打击文字提示","lang":"zh-CN","frontmatter":{"description":"CriticalHit 打击文字提示 作者: White,Stone·Free，肝帝熙恩 出处: TShock官方群聊 在攻击NPC如果产生暴击，会弹出特殊的浮动文字（和伤害数字一样） 根据武器类型不同产生不同文字 可以设置即使不暴击也产生文字 指令 配置 配置文件位置：tshock/CriticalConfig.json 更新日志 反馈 优先发iss...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/CriticalHit.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"CriticalHit 打击文字提示"}],["meta",{"property":"og:description","content":"CriticalHit 打击文字提示 作者: White,Stone·Free，肝帝熙恩 出处: TShock官方群聊 在攻击NPC如果产生暴击，会弹出特殊的浮动文字（和伤害数字一样） 根据武器类型不同产生不同文字 可以设置即使不暴击也产生文字 指令 配置 配置文件位置：tshock/CriticalConfig.json 更新日志 反馈 优先发iss..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CriticalHit 打击文字提示\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/CriticalHit.md"}');export{t as comp,r as data};
