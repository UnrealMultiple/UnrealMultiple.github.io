import{_ as n,e as a,f as l,o as e}from"./app-B7FU61Yn.js";const o={};function t(p,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="shortcommand-简短指令" tabindex="-1"><a class="header-anchor" href="#shortcommand-简短指令"><span>ShortCommand 简短指令</span></a></h1><ul><li>作者: GK、少司命、羽学</li><li>出处: QQ群（232109072）</li><li>这是一个Tshock服务器插件主要用于将插件或原生自带的Tshock命令映射成一个自己想要的命令</li><li>并可通过配置文件中的【阻止原始】彻底禁用一个命令，加了Reload重载配置文件方法</li><li>并配备了一个权限名【免检指令】使特定用户组不受【阻止原始】的影响</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>无</td><td style="text-align:center;">免禁指令</td><td style="text-align:center;">插件不对其禁止使用原始命令</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/简短指令.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;命令表&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;原始命令&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;执行&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;新的命令&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;重置玩家数据&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;余段补充&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;阻止原始&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;限制条件&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;冷却秒数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;冷却共享&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;原始命令&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;pskill list&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;新的命令&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;被动书店&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;余段补充&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;阻止原始&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;限制条件&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;冷却秒数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;冷却共享&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.3.0.1</span></span>
<span class="line"><span>完善卸载函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.0</span></span>
<span class="line"><span>修复了Dispose方法中关服引发的超堆栈问题</span></span>
<span class="line"><span>加了个免疫阻止原始的权限名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>共同维护的插件库：<a href="https://github.com/THEXN/TShockPlugin/" target="_blank" rel="noopener noreferrer">https://github.com/THEXN/TShockPlugin/</a></li><li><a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> 或 TShock官方群等</li></ul>`,11)]))}const r=n(o,[["render",t],["__file","ShortCommand.html.vue"]]),c=JSON.parse('{"path":"/zh/guide/ShortCommand.html","title":"ShortCommand 简短指令","lang":"zh-CN","frontmatter":{"description":"ShortCommand 简短指令 作者: GK、少司命、羽学 出处: QQ群（232109072） 这是一个Tshock服务器插件主要用于将插件或原生自带的Tshock命令映射成一个自己想要的命令 并可通过配置文件中的【阻止原始】彻底禁用一个命令，加了Reload重载配置文件方法 并配备了一个权限名【免检指令】使特定用户组不受【阻止原始】的影响 指令...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/ShortCommand.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"ShortCommand 简短指令"}],["meta",{"property":"og:description","content":"ShortCommand 简短指令 作者: GK、少司命、羽学 出处: QQ群（232109072） 这是一个Tshock服务器插件主要用于将插件或原生自带的Tshock命令映射成一个自己想要的命令 并可通过配置文件中的【阻止原始】彻底禁用一个命令，加了Reload重载配置文件方法 并配备了一个权限名【免检指令】使特定用户组不受【阻止原始】的影响 指令..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ShortCommand 简短指令\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/ShortCommand.md"}');export{r as comp,c as data};
