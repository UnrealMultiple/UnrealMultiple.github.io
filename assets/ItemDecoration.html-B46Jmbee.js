import{_ as n,c as a,a as l,o as e}from"./app-BIPCnSct.js";const o={};function p(i,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="itemdeco-手持物品显示" tabindex="-1"><a class="header-anchor" href="#itemdeco-手持物品显示"><span>ItemDeco 手持物品显示</span></a></h1><ul><li>作者: FrankV22</li><li>出处: <a href="https://github.com/itsFrankV22/ItemsDeco-Plugin" target="_blank" rel="noopener noreferrer">Github</a></li><li>显示物品名称：当玩家切换持有的物品时，该物品的名称会以浮动消息的形式出现在玩家头顶，并在聊天中显示。此功能还支持显示伤害值，并可通过配置文件启用或禁用。</li><li>颜色自定义：浮动消息的颜色默认为白色（RGB 值为 255,255,255），可以自定义</li><li>兼容 <a href="https://github.com/itsFrankV22/FloatingText-Chat" target="_blank" rel="noopener noreferrer">Floating-MessageChat</a></li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>暂无</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件路径：tshock/ItemDecoration.zh-CN.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;物品聊天&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;物品颜色&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;R&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;G&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;B&quot;</span><span style="color:#D4D4D4;">: 255</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;伤害颜色&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;R&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;G&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;B&quot;</span><span style="color:#D4D4D4;">: 255</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;显示名称&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;显示伤害&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;物品切换&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;伤害文本&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Damage&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;默认颜色&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;R&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;G&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;B&quot;</span><span style="color:#D4D4D4;">: 255</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;稀有颜色&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;-1&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 169,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 169,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 169</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;0&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 255</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;1&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 128,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;2&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 112,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 221</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;3&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 128,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 128</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;4&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 128,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;5&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;6&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 215,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;7&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 105,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 180</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;8&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 215,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;9&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 255</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;10&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 105,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 180</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;11&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 75,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 130</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;显示名称&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;显示伤害&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>v1.0.0.1</span></span>
<span class="line"><span>完成西班牙语的i18n config配置，修复聊天不显示名字的问题</span></span>
<span class="line"><span>V1.0.0.0</span></span>
<span class="line"><span>重构代码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>本插件优先找原仓库：<a href="https://github.com/itsFrankV22/ItemsDeco-Plugin" target="_blank" rel="noopener noreferrer">Github</a></li><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,11)]))}const c=n(o,[["render",p],["__file","ItemDecoration.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/ItemDecoration.html","title":"ItemDeco 手持物品显示","lang":"zh-CN","frontmatter":{"description":"ItemDeco 手持物品显示 作者: FrankV22 出处: Github 显示物品名称：当玩家切换持有的物品时，该物品的名称会以浮动消息的形式出现在玩家头顶，并在聊天中显示。此功能还支持显示伤害值，并可通过配置文件启用或禁用。 颜色自定义：浮动消息的颜色默认为白色（RGB 值为 255,255,255），可以自定义 兼容 Floating-Mes...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/ItemDecoration.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"ItemDeco 手持物品显示"}],["meta",{"property":"og:description","content":"ItemDeco 手持物品显示 作者: FrankV22 出处: Github 显示物品名称：当玩家切换持有的物品时，该物品的名称会以浮动消息的形式出现在玩家头顶，并在聊天中显示。此功能还支持显示伤害值，并可通过配置文件启用或禁用。 颜色自定义：浮动消息的颜色默认为白色（RGB 值为 255,255,255），可以自定义 兼容 Floating-Mes..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ItemDeco 手持物品显示\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/ItemDecoration.md"}');export{c as comp,r as data};
