import{_ as t,c as s,a as n,o as a}from"./app-BIPCnSct.js";const l={};function i(c,e){return a(),s("div",null,e[0]||(e[0]=[n(`<h1 id="economics-deal-交易插件" tabindex="-1"><a class="header-anchor" href="#economics-deal-交易插件"><span>Economics.Deal 交易插件</span></a></h1><ul><li>作者: 少司命</li><li>出处: 无</li><li>交易物品插件</li></ul><blockquote><p>[!NOTE]<br> 需要安装前置插件：EconomicsAPI (本仓库)</p></blockquote><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/deal push [价格]</td><td style="text-align:center;">economics.deal.use</td><td style="text-align:center;">发布手持物品</td></tr><tr><td>/deal list [页码]</td><td style="text-align:center;">economics.deal.use</td><td style="text-align:center;">查看交易物品列表</td></tr><tr><td>/deal buy [ID]</td><td style="text-align:center;">economics.deal.use</td><td style="text-align:center;">购买交易物品</td></tr><tr><td>/deal recall [ID]</td><td style="text-align:center;">economics.deal.use</td><td style="text-align:center;">撤回发布物品</td></tr><tr><td>/deal reset</td><td style="text-align:center;">economics.deal.reset</td><td style="text-align:center;">重置交易</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/Economics/Deal.json</p></blockquote><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;最大显示页&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">10</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;交易列表&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>V2.0.0.0</span></span>
<span class="line"><span>适配多货币</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.0.0.3</span></span>
<span class="line"><span>适配新 EconomicsAPI</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.0.0.2</span></span>
<span class="line"><span>支持多语言</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,12)]))}const d=t(l,[["render",i],["__file","Economics.Deal.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/Economics.Deal.html","title":"Economics.Deal 交易插件","lang":"zh-CN","frontmatter":{"description":"Economics.Deal 交易插件 作者: 少司命 出处: 无 交易物品插件 [!NOTE] 需要安装前置插件：EconomicsAPI (本仓库) 指令 配置 配置文件位置：tshock/Economics/Deal.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/UnrealMulti...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/Economics.Deal.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"Economics.Deal 交易插件"}],["meta",{"property":"og:description","content":"Economics.Deal 交易插件 作者: 少司命 出处: 无 交易物品插件 [!NOTE] 需要安装前置插件：EconomicsAPI (本仓库) 指令 配置 配置文件位置：tshock/Economics/Deal.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/UnrealMulti..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Economics.Deal 交易插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/Economics.Deal.md"}');export{d as comp,r as data};