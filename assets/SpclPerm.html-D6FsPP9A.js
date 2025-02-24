import{_ as n,a,b as l,o as p}from"./app-IX9aCo9D.js";const e={};function o(i,s){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="spclperm-服主特权" tabindex="-1"><a class="header-anchor" href="#spclperm-服主特权"><span>SpclPerm 服主特权</span></a></h1><ul><li>作者: 羽学</li><li>出处: 无</li><li>根据名单进服或复活自动执行：无敌、BUFF、物品、命令、设置背包，</li><li>用户组名无视所有开关，开关只对特权名单有效，需关用户组权限直接删组名</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>暂无</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/服主特权.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;使用说明&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;根据名单进服或复活自动执行：无敌、BUFF、物品、命令、设置背包，用户组名无视所有开关，开关只对特权名单有效，需关用户组权限直接删组名&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;进服给无敌&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;进服用命令&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;进服给物品&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;进服给BUFF&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;设置SSC背包&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;特权名单/受以上开关影响&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">    &quot;羽学&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;灵乐&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;所有特权的用户组名&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;admin,owner&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;无敌权限的用户组名&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;admin,owner&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;物品权限的用户组名&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;admin,owner&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;BUFF权限的用户组名&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;admin,owner&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;命令权限的用户组名&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;admin,owner&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;特权背包的用户组名&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;admin,owner&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;命令表&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">    &quot;/clear i 9999&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;.clear p 9999&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;物品表（ID:数量）&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;4346&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#032F62;">  &quot;Buff表（ID:分钟）&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;1&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;11&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;12&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;3&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;192&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;165&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;207&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;274&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;63&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;257&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-1</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#032F62;">  &quot;特权背包表&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;初始血量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;初始魔力&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;初始物品&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#032F62;">          &quot;netID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4956</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">81</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;stack&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#032F62;">          &quot;netID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4346</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;stack&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#032F62;">          &quot;netID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5437</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;stack&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;非特权背包表&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;初始血量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;初始魔力&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;初始物品&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#032F62;">          &quot;netID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;stack&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#032F62;">          &quot;netID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-13</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;stack&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#032F62;">          &quot;netID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-16</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">          &quot;stack&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.8.1</span></span>
<span class="line"><span>完善卸载函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.8.0</span></span>
<span class="line"><span>把物品与BUFF表改为字典键值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.7.0</span></span>
<span class="line"><span>加入非特权背包，来区分普通用户的SSC默认背包</span></span>
<span class="line"><span>修复了进服给不到无敌、特权玩家进服导致其他人进服也会有特权背包问题</span></span>
<span class="line"><span>加入了对存在特别名单，未注册的玩家检测</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.6.0</span></span>
<span class="line"><span>加入设置特权SSC背包</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.5.0</span></span>
<span class="line"><span>对配置文件重新拍板</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.4.0</span></span>
<span class="line"><span>移除权限名，加入对指定用户组名开启</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.0</span></span>
<span class="line"><span>加入权限名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.0</span></span>
<span class="line"><span>执行命令采用临时超管权限执行，不用控制台执行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.0</span></span>
<span class="line"><span>BUFF支持-1永久写法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.0.0</span></span>
<span class="line"><span>根据名单进服自动无敌/给buff/物品/执行命令</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const t=n(e,[["render",o],["__file","SpclPerm.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/SpclPerm.html","title":"SpclPerm 服主特权","lang":"zh-CN","frontmatter":{"description":"SpclPerm 服主特权 作者: 羽学 出处: 无 根据名单进服或复活自动执行：无敌、BUFF、物品、命令、设置背包， 用户组名无视所有开关，开关只对特权名单有效，需关用户组权限直接删组名 指令 配置 配置文件位置：tshock/服主特权.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/Un...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/SpclPerm.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"SpclPerm 服主特权"}],["meta",{"property":"og:description","content":"SpclPerm 服主特权 作者: 羽学 出处: 无 根据名单进服或复活自动执行：无敌、BUFF、物品、命令、设置背包， 用户组名无视所有开关，开关只对特权名单有效，需关用户组权限直接删组名 指令 配置 配置文件位置：tshock/服主特权.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/Un..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpclPerm 服主特权\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/SpclPerm.md"}');export{t as comp,r as data};
