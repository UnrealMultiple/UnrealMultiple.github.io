import{_ as l,e as n,f as s,o as t}from"./app-B7FU61Yn.js";const a={};function i(r,e){return t(),n("div",null,e[0]||(e[0]=[s(`<h1 id="consolesql-控制台sql" tabindex="-1"><a class="header-anchor" href="#consolesql-控制台sql"><span>ConsoleSql 控制台SQL</span></a></h1><ul><li>作者: Cai</li><li>出处: 本仓库</li><li>允许你使用在控制台和BOT中执行SQL语句</li></ul><div class="hint-container caution"><p class="hint-container-title">警告</p><p>执行危险SQL语句(DELETE、DROP等)时，请仔细检查(条件等)，否则可能造成严重不可逆后果</p></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>列出Tshock的数据表名：  </span></span>
<span class="line"><span>sql select name from sqlite_master where type=&#39;table&#39;  </span></span>
<span class="line"><span>查询“用户数据表”有什么：  </span></span>
<span class="line"><span>sql select * from users  </span></span>
<span class="line"><span>修改ID为2的用户角色名字为熙恩（帮强制开荒玩家换角色名）：  </span></span>
<span class="line"><span>sql update users set username=&#39;熙恩&#39; where id=2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">无</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h2><table><thead><tr><th>命令名</th><th style="text-align:left;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/sql &lt;SQL语句&gt;</td><td style="text-align:left;">ConsoleSql.Use</td><td style="text-align:center;">执行SQL</td></tr></tbody></table><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.0.0</span></span>
<span class="line"><span>i18n预备</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,13)]))}const c=l(a,[["render",i],["__file","ConsoleSql.html.vue"]]),d=JSON.parse('{"path":"/zh/guide/ConsoleSql.html","title":"ConsoleSql 控制台SQL","lang":"zh-CN","frontmatter":{"description":"ConsoleSql 控制台SQL 作者: Cai 出处: 本仓库 允许你使用在控制台和BOT中执行SQL语句 警告 执行危险SQL语句(DELETE、DROP等)时，请仔细检查(条件等)，否则可能造成严重不可逆后果 示例 配置 命令 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/UnrealMult...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/ConsoleSql.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"ConsoleSql 控制台SQL"}],["meta",{"property":"og:description","content":"ConsoleSql 控制台SQL 作者: Cai 出处: 本仓库 允许你使用在控制台和BOT中执行SQL语句 警告 执行危险SQL语句(DELETE、DROP等)时，请仔细检查(条件等)，否则可能造成严重不可逆后果 示例 配置 命令 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/UnrealMult..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ConsoleSql 控制台SQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/ConsoleSql.md"}');export{c as comp,d as data};
