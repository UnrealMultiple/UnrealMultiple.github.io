import{_ as e,c as a,a as n,o as t}from"./app-BIPCnSct.js";const i={};function l(r,s){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="鱼店" tabindex="-1"><a class="header-anchor" href="#鱼店"><span>鱼店</span></a></h1><p>鱼店是一个指令商店，除出售物品外，还出售 召唤boss、召唤入侵、生成NPC、获得buff、调时间 等自定义商品。支持配置购买条件 和 支付条件。</p><p>下载地址：</p><table><thead><tr><th>文件名</th><th>适用版本</th></tr></thead><tbody><tr><td><a href="https://github.com/hufang360/TShockFishShop/releases/download/v1.4.3/FishShop-v1.4.3.1.dll" target="_blank" rel="noopener noreferrer">FishShop-v1.4.3.1.dll</a></td><td>TShock5.0beta - Terraria1.4.4.x</td></tr></tbody></table><ul><li>Terraria 1.4.3.x 请下载 1.4.2及之前的版本</li></ul><br><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>/fish list，查看商店;</span></span>
<span class="line"><span>/fish ask &lt;商品编号&gt;，询价;</span></span>
<span class="line"><span>/fish buy &lt;商品编号&gt; [件数]，购买;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/fish info, 显示钓鱼信息;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/fish reload, 重载配置;</span></span>
<span class="line"><span>/fish reset, 重置限量记录（1.4）;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/fish special, 查看特别指令（仅管理员）;</span></span>
<span class="line"><span>/fish finish &lt;次数&gt;，修改自己的渔夫任务完成次数（仅管理员）;</span></span>
<span class="line"><span>/fish change，更换今天的任务鱼（仅管理员）;</span></span>
<span class="line"><span>/fish changesuper &lt;物品id|物品名&gt;，指定今天的任务鱼（仅管理员）;</span></span>
<span class="line"><span>/fish docs，生成参考文档（仅管理员）;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/fish = /fishshop = /fs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span>权限</span></a></h2><table><thead><tr><th>权限</th><th>说明</th></tr></thead><tbody><tr><td>fishshop.change</td><td>切换钓鱼任务</td></tr><tr><td>fishshop.changesuper</td><td>指定钓鱼任务</td></tr><tr><td>fishshop.finish</td><td>修改钓鱼完成次数</td></tr><tr><td>fishshop.reload</td><td>重载鱼店配置 和 重置限量记录</td></tr><tr><td>fishshop.special</td><td>服主和开发者专用</td></tr><tr><td>fishshop.ignore.allowgroup</td><td>忽略用户组购买限制</td></tr></tbody></table><p>授权示意（服主默认拥有全部权限）：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">/group</span><span style="color:#CE9178;"> addperm</span><span style="color:#CE9178;"> default</span><span style="color:#CE9178;"> fishshop.change</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><br><h2 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明"><span>配置说明：</span></a></h2><p><a href="https://www.yuque.com/hufang/bv/tshock-fish-shop" target="_blank" rel="noopener noreferrer">https://www.yuque.com/hufang/bv/tshock-fish-shop</a></p><br><h2 id="支持" tabindex="-1"><a class="header-anchor" href="#支持"><span>支持：</span></a></h2><p><a href="https://afdian.net/@hufang360" target="_blank" rel="noopener noreferrer">https://afdian.net/@hufang360</a></p>`,19)]))}const h=e(i,[["render",l],["__file","FishShop.html.vue"]]),d=JSON.parse('{"path":"/zh/guide/FishShop.html","title":"鱼店","lang":"zh-CN","frontmatter":{"description":"鱼店 鱼店是一个指令商店，除出售物品外，还出售 召唤boss、召唤入侵、生成NPC、获得buff、调时间 等自定义商品。支持配置购买条件 和 支付条件。 下载地址： Terraria 1.4.3.x 请下载 1.4.2及之前的版本 指令 权限 授权示意（服主默认拥有全部权限）： 配置说明： https://www.yuque.com/hufang/bv...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"http://docs.terraria.ink/en/guide/FishShop.html"}],["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/FishShop.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"鱼店"}],["meta",{"property":"og:description","content":"鱼店 鱼店是一个指令商店，除出售物品外，还出售 召唤boss、召唤入侵、生成NPC、获得buff、调时间 等自定义商品。支持配置购买条件 和 支付条件。 下载地址： Terraria 1.4.3.x 请下载 1.4.2及之前的版本 指令 权限 授权示意（服主默认拥有全部权限）： 配置说明： https://www.yuque.com/hufang/bv..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"鱼店\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"权限","slug":"权限","link":"#权限","children":[]},{"level":2,"title":"配置说明：","slug":"配置说明","link":"#配置说明","children":[]},{"level":2,"title":"支持：","slug":"支持","link":"#支持","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/FishShop.md"}');export{h as comp,d as data};