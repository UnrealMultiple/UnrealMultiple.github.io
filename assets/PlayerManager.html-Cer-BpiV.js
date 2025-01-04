import{_ as n,c as s,a as e,o as l}from"./app-CpstP_eu.js";const p={};function i(r,a){return l(),s("div",null,a[0]||(a[0]=[e(`<h1 id="tshockplayermanager" tabindex="-1"><a class="header-anchor" href="#tshockplayermanager"><span>TShockPlayerManager</span></a></h1><p>导出/备份/恢复玩家存档，查看玩家背包。</p><p>下载地址：<a href="https://github.com/hufang360/TShockPlayerManager/releases/download/v1.3.4/PlayerManager-v1.3.4.dll" target="_blank" rel="noopener noreferrer">PlayerManager-v1.3.4.dll</a></p><h1 id="部分指令" tabindex="-1"><a class="header-anchor" href="#部分指令"><span>部分指令</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>/pm help, 帮助</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/pm look &lt;玩家名&gt;, 查看玩家</span></span>
<span class="line"><span>/lookbag &lt;玩家名&gt;, 查看玩家（普通用户）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/pm export &lt;玩家名&gt;, 导出单个玩家存档</span></span>
<span class="line"><span>/pm exportall, 导出全部玩家存档</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/pm hp &lt;玩家名&gt; &lt;生命值&gt;, 修改生命值</span></span>
<span class="line"><span>/pm maxhp &lt;玩家名&gt; &lt;生命上限&gt;, 修改生命上限</span></span>
<span class="line"><span>/pm mana &lt;玩家名&gt; &lt;魔力值&gt;, 修改魔力值</span></span>
<span class="line"><span>/pm maxmana &lt;玩家名&gt; &lt;魔力上限&gt;, 修改魔力上限</span></span>
<span class="line"><span>/pm quest &lt;玩家名&gt; &lt;次数&gt;, 修改钓鱼任务次数（v1.3）</span></span>
<span class="line"><span>/pm enhance help, 开启/关闭 永久增强属性（v1.3）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/pm backup help, 备份（v1.3）</span></span>
<span class="line"><span>/pm recover help, 恢复（v1.3）</span></span>
<span class="line"><span>/pm list help, 列表（v1.3）</span></span>
<span class="line"><span>/pm reload, 重载配置（v1.3）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 主指令的其它写法</span></span>
<span class="line"><span>/pm = /playermanager</span></span>
<span class="line"><span>.pm = /pm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 简写</span></span>
<span class="line"><span>/pm look = /pm l</span></span>
<span class="line"><span>/lookbag = /lb</span></span>
<span class="line"><span>/pm export = /pm e</span></span>
<span class="line"><span>/pm exportall = /pm ea</span></span>
<span class="line"><span>/pm maxhp = /pm mh</span></span>
<span class="line"><span>/pm maxmana = /pm mm</span></span>
<span class="line"><span>/pm enhance = /pm en</span></span>
<span class="line"><span>/pm backup = /pm b</span></span>
<span class="line"><span>/pm recover = /pm r</span></span>
<span class="line"><span>/pm list = /pm ls</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span>权限</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>playermanager</span></span>
<span class="line"><span>lookbag</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>开放查背包功能</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>/group addperm default lookbag</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h1><p>导出玩家数据部分，使用了此项目的部分代码： https://github.com/Megghy/PlayerExport</p>`,11)]))}const c=n(p,[["render",i],["__file","PlayerManager.html.vue"]]),d=JSON.parse('{"path":"/en/guide/PlayerManager.html","title":"TShockPlayerManager","lang":"en-US","frontmatter":{"description":"TShockPlayerManager 导出/备份/恢复玩家存档，查看玩家背包。 下载地址：PlayerManager-v1.3.4.dll 部分指令 权限 开放查背包功能 说明 导出玩家数据部分，使用了此项目的部分代码： https://github.com/Megghy/PlayerExport","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"http://docs.terraria.ink/zh/guide/PlayerManager.html"}],["meta",{"property":"og:url","content":"http://docs.terraria.ink/en/guide/PlayerManager.html"}],["meta",{"property":"og:site_name","content":"TShock Chinese Plugin Repo"}],["meta",{"property":"og:title","content":"TShockPlayerManager"}],["meta",{"property":"og:description","content":"TShockPlayerManager 导出/备份/恢复玩家存档，查看玩家背包。 下载地址：PlayerManager-v1.3.4.dll 部分指令 权限 开放查背包功能 说明 导出玩家数据部分，使用了此项目的部分代码： https://github.com/Megghy/PlayerExport"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TShockPlayerManager\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"autoDesc":true,"filePathRelative":"en/guide/PlayerManager.md"}');export{c as comp,d as data};
