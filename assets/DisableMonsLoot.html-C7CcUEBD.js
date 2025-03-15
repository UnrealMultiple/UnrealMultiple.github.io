import{_ as n,e as a,f as l,o as e}from"./app-BCaq2qm9.js";const i={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="disablemonsloot-禁怪物掉落" tabindex="-1"><a class="header-anchor" href="#disablemonsloot-禁怪物掉落"><span>DisableMonsLoot 禁怪物掉落</span></a></h1><ul><li>作者: 羽学</li><li>出处: <a href="https://gitee.com/Crafty/bean-points" target="_blank" rel="noopener noreferrer">github</a></li><li>魔改&lt;怪物不掉钱插件&gt;开发初衷于配合随机掉落物品开荒用</li><li>此插件通过怪物死亡事件清理当前进度的物品，</li><li>如击败【怪物ID】任意一个怪物则自动关闭【清理功能】</li><li>如果开启了【是否全杀】，则需要击败【怪物ID】所有怪物才会自动关闭</li><li>输入/kdm reset可将所有【清理】开关全部开启，以便重置服务器时还原</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/kdm</td><td style="text-align:center;">killitem.admin</td><td style="text-align:center;">查看禁怪掉落指令菜单</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/禁怪物掉落.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;使用说明&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;你只管改‘ID’就行，‘清理’和‘怪物名’不用动，击杀其中1个怪物ID自动关闭清理功能。指令：/kdm (权限killitem.admin)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;插件开关&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;是否全杀&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;清理范围&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">35</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;清理列表&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物名&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;蓝史莱姆, 恶魔眼, 僵尸&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;清理&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物ID&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        3</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品ID&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        71</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        72</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        73</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        74</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.3.4</span></span>
<span class="line"><span>添加 GetString</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.1.0</span></span>
<span class="line"><span>i18n预备</span></span>
<span class="line"><span>v1.3.1</span></span>
<span class="line"><span>补全卸载函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.0</span></span>
<span class="line"><span>加入指令功能方便重置、控制配置项</span></span>
<span class="line"><span>默认配置调整清理范围35</span></span>
<span class="line"><span>克脑 世吞 骷髅王 加入：</span></span>
<span class="line"><span>魔矿/暗影鳞片/猩红矿/组织样本/骨头/金钥匙</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.0</span></span>
<span class="line"><span>预设一堆进度物品ID</span></span>
<span class="line"><span>将怪物ID也改为数组，支持更多ID</span></span>
<span class="line"><span>加入【是否全杀】配置项</span></span>
<span class="line"><span>怪物名支持多ID转换中文名</span></span>
<span class="line"><span>为贴合自动转换中文名避免空引用报错，</span></span>
<span class="line"><span>在空处输入{},然后reload会预设个示例格式如：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>     怪物名&quot;:蓝史莱姆&quot;,</span></span>
<span class="line"><span>     清理&quot;: false,</span></span>
<span class="line"><span>     怪物ID&quot;: [1],</span></span>
<span class="line"><span>     物品ID&quot;: []</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.0</span></span>
<span class="line"><span>魔改怪物不掉钱插件</span></span>
<span class="line"><span>掉落物可用数组控制，击败指定怪物ID，自动关闭清理功能</span></span>
<span class="line"><span>使用/reload 可取怪物ID赋值给怪物名，自动转换中文名。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const r=n(i,[["render",p],["__file","DisableMonsLoot.html.vue"]]),c=JSON.parse('{"path":"/zh/guide/DisableMonsLoot.html","title":"DisableMonsLoot 禁怪物掉落","lang":"zh-CN","frontmatter":{"description":"DisableMonsLoot 禁怪物掉落 作者: 羽学 出处: github 魔改<怪物不掉钱插件>开发初衷于配合随机掉落物品开荒用 此插件通过怪物死亡事件清理当前进度的物品， 如击败【怪物ID】任意一个怪物则自动关闭【清理功能】 如果开启了【是否全杀】，则需要击败【怪物ID】所有怪物才会自动关闭 输入/kdm reset可将所有【清理】开关全部开启...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/DisableMonsLoot.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"DisableMonsLoot 禁怪物掉落"}],["meta",{"property":"og:description","content":"DisableMonsLoot 禁怪物掉落 作者: 羽学 出处: github 魔改<怪物不掉钱插件>开发初衷于配合随机掉落物品开荒用 此插件通过怪物死亡事件清理当前进度的物品， 如击败【怪物ID】任意一个怪物则自动关闭【清理功能】 如果开启了【是否全杀】，则需要击败【怪物ID】所有怪物才会自动关闭 输入/kdm reset可将所有【清理】开关全部开启..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DisableMonsLoot 禁怪物掉落\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/DisableMonsLoot.md"}');export{r as comp,c as data};
