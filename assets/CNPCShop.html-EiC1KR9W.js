import{_ as n,c as a,a as l,o as e}from"./app-BIPCnSct.js";const p={};function o(i,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="cnpcshop-自定义npc商店" tabindex="-1"><a class="header-anchor" href="#cnpcshop-自定义npc商店"><span>CNPCShop 自定义NPC商店</span></a></h1><ul><li>作者: Megghy，肝帝熙恩更新1449</li><li>出处: <a href="https://github.com/Megghy/CNPCShop" target="_blank" rel="noopener noreferrer">github</a></li><li>使你可以自定义NPC出售的商品</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>无</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/CNPCShop.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;更新间隔&quot;</span><span style="color:#D4D4D4;">: 500,  </span><span style="color:#6A9955;">//默认为500, 单位毫秒, 一般来说这个间隔差不多够用了, 不过要是想替换得更快的话可以调低, 不过建议尽量不要低于100, 再低不仅十分占用带宽而且也没啥意义</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;总列表&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;启用&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,   </span><span style="color:#6A9955;">//表示是否启用此商店块</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;世界ID[-1则不限制世界]&quot;</span><span style="color:#D4D4D4;">: -1,    </span><span style="color:#6A9955;">//指定在某个地图生效, 填-1的话则在所有世界都生效. 世界id可使用/worldinfo 查看</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;商店列表&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;启用&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,   </span><span style="color:#6A9955;">//表示是否启用此商店</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;用户组[留空则允许所有]&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;guest&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;default&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;superadmin&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          ],   </span><span style="color:#6A9955;">//只有在此列表中的用户组才能使用自定义商店</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;进入消息&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;商人: 想买点啥?&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;商人: 大甩卖!&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;商人: 你好啊 {name}&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          ],   </span><span style="color:#6A9955;">//与npc进行对话时向玩家发送的文本, 多条文本会随机选择, 留空则不发送. 文本中的 {name} 将会被替换为玩家名字</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;关闭消息&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;商人: 欢迎再来&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          ],   </span><span style="color:#6A9955;">//关闭对话时向玩家发送的文本, 多条文本会随机选择, 留空则不发送. 文本中的 {name} 将会被替换为玩家名字</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;NPCID&quot;</span><span style="color:#D4D4D4;">: 17,   </span><span style="color:#6A9955;">//将要替换的npc的id</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;商品&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">            {</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;物品ID&quot;</span><span style="color:#D4D4D4;">: 8,   </span><span style="color:#6A9955;">//物品id, 详见wiki</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;前缀&quot;</span><span style="color:#D4D4D4;">: 0,   </span><span style="color:#6A9955;">//物品前缀, 详见wiki</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;价格&quot;</span><span style="color:#D4D4D4;">: {   </span><span style="color:#6A9955;">//注意 金银铜只能输入0-99之间, 铂为0-999</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铜&quot;</span><span style="color:#D4D4D4;">: 99,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;银&quot;</span><span style="color:#D4D4D4;">: 3,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;金&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铂&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#D4D4D4;">            {</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;物品ID&quot;</span><span style="color:#D4D4D4;">: 28,</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;前缀&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;价格&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铜&quot;</span><span style="color:#D4D4D4;">: 99,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;银&quot;</span><span style="color:#D4D4D4;">: 12,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;金&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铂&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#D4D4D4;">            {</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;物品ID&quot;</span><span style="color:#D4D4D4;">: 292,</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;前缀&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;价格&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铜&quot;</span><span style="color:#D4D4D4;">: 99,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;银&quot;</span><span style="color:#D4D4D4;">: 49,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;金&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铂&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#D4D4D4;">            {</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;物品ID&quot;</span><span style="color:#D4D4D4;">: 2350,</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;前缀&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;价格&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铜&quot;</span><span style="color:#D4D4D4;">: 99,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;银&quot;</span><span style="color:#D4D4D4;">: 99,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;金&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铂&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          ]</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;启用&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;用户组[留空则允许所有]&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          ],</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;进入消息&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          ],</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;关闭消息&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">          ],</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;NPCID&quot;</span><span style="color:#D4D4D4;">: 17,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;商品&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">            {</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;物品ID&quot;</span><span style="color:#D4D4D4;">: 1,</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;前缀&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;价格&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铜&quot;</span><span style="color:#D4D4D4;">: 99,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;银&quot;</span><span style="color:#D4D4D4;">: 9,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;金&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铂&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            },</span></span>
<span class="line"><span style="color:#D4D4D4;">            {</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;物品ID&quot;</span><span style="color:#D4D4D4;">: 2,</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;前缀&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">              &quot;价格&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铜&quot;</span><span style="color:#D4D4D4;">: 5,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;银&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;金&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;铂&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            }</span></span>
<span class="line"><span style="color:#D4D4D4;">          ]</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">      ]</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>v1.0.1</span></span>
<span class="line"><span>i18n预备</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,11)]))}const t=n(p,[["render",o],["__file","CNPCShop.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/CNPCShop.html","title":"CNPCShop 自定义NPC商店","lang":"zh-CN","frontmatter":{"description":"CNPCShop 自定义NPC商店 作者: Megghy，肝帝熙恩更新1449 出处: github 使你可以自定义NPC出售的商品 指令 配置 配置文件位置：tshock/CNPCShop.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/CNPCShop.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"CNPCShop 自定义NPC商店"}],["meta",{"property":"og:description","content":"CNPCShop 自定义NPC商店 作者: Megghy，肝帝熙恩更新1449 出处: github 使你可以自定义NPC出售的商品 指令 配置 配置文件位置：tshock/CNPCShop.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CNPCShop 自定义NPC商店\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/CNPCShop.md"}');export{t as comp,r as data};