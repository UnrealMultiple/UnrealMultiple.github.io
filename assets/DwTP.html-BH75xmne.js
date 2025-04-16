import{_ as t,e as n,f as l,o as a}from"./app-B7FU61Yn.js";const s={};function i(r,e){return a(),n("div",null,e[0]||(e[0]=[l(`<h1 id="dwtp-定位传送插件" tabindex="-1"><a class="header-anchor" href="#dwtp-定位传送插件"><span>DwTP 定位传送插件</span></a></h1><ul><li>作者: 羽学</li><li>出处: 无</li><li>这是一个Tshock服务器插件，主要用于：使用指令定位传送微光湖、地牢、神庙、世纪之花花苞、BOSS宝藏袋</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/dw</td><td style="text-align:center;">/定位</td><td style="text-align:center;">dw.use</td><td style="text-align:center;">指令菜单</td></tr><tr><td>/dw hb</td><td style="text-align:center;">/定位 花苞</td><td style="text-align:center;">dw.use</td><td style="text-align:center;">传送到世纪之花花苞</td></tr><tr><td>/dw dl</td><td style="text-align:center;">/定位 地牢</td><td style="text-align:center;">dw.use</td><td style="text-align:center;">传送到地牢老人或邪教徒弓箭手</td></tr><tr><td>/dw sm</td><td style="text-align:center;">/定位 神庙</td><td style="text-align:center;">dw.use</td><td style="text-align:center;">传送到神庙门前或丛林蜥蜴祭坛</td></tr><tr><td>/dw bag</td><td style="text-align:center;">/定位 宝藏袋</td><td style="text-align:center;">dw.use</td><td style="text-align:center;">传送到BOSS死亡地点(宝藏袋)</td></tr><tr><td>/dw wgh</td><td style="text-align:center;">/定位 微光湖</td><td style="text-align:center;">dw.use</td><td style="text-align:center;">传送到微光湖(并在液体上方为空时放置灰砖)</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">暂无</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.0.0</span></span>
<span class="line"><span>使用/dw指令传送到定位地标</span></span>
<span class="line"><span>定位花苞：只在世界图格上存在花苞时才会传送</span></span>
<span class="line"><span>定位地牢：只在世界存在地牢老人或邪教徒弓箭手时才会传送</span></span>
<span class="line"><span>定位神庙：神庙门没打开时传送到门前，打开后传送到丛林蜥蜴祭坛</span></span>
<span class="line"><span>定位宝藏袋：只在有BOSS死亡后才会传送到其死亡地点</span></span>
<span class="line"><span>定位微光湖：传送到微光液体，第一次会判断液体上方没有方块时放置灰砖</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,10)]))}const c=t(s,[["render",i],["__file","DwTP.html.vue"]]),h=JSON.parse('{"path":"/zh/guide/DwTP.html","title":"DwTP 定位传送插件","lang":"zh-CN","frontmatter":{"description":"DwTP 定位传送插件 作者: 羽学 出处: 无 这是一个Tshock服务器插件，主要用于：使用指令定位传送微光湖、地牢、神庙、世纪之花花苞、BOSS宝藏袋 指令 配置 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin 次优先：TShock官方群：8...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/DwTP.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"DwTP 定位传送插件"}],["meta",{"property":"og:description","content":"DwTP 定位传送插件 作者: 羽学 出处: 无 这是一个Tshock服务器插件，主要用于：使用指令定位传送微光湖、地牢、神庙、世纪之花花苞、BOSS宝藏袋 指令 配置 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin 次优先：TShock官方群：8..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DwTP 定位传送插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/DwTP.md"}');export{c as comp,h as data};
