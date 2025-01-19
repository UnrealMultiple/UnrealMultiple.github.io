import{_ as n,c as a,a as l,o as e}from"./app-BIPCnSct.js";const i={};function p(c,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="surfaceblock-禁止地表弹幕" tabindex="-1"><a class="header-anchor" href="#surfaceblock-禁止地表弹幕"><span>SurfaceBlock 禁止地表弹幕</span></a></h1><ul><li>作者: 羽学</li><li>出处: <a href="https://github.com/1242509682/SurfaceBlock" target="_blank" rel="noopener noreferrer">github</a></li><li>这是一个Tshock服务器插件主要用于禁止生成对服务器内玩家处于世界地表时产生的弹幕，</li><li>尤其是针对恶意使用爆炸物破坏服务器地图的人。</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/reload</td><td style="text-align:center;">无</td><td style="text-align:center;">重载配置文件</td></tr><tr><td>无</td><td style="text-align:center;">免检地表弹幕</td><td style="text-align:center;">不检测其弹幕是否违规</td></tr><tr><td>无</td><td style="text-align:center;">SurfaceBlock</td><td style="text-align:center;">不检测其弹幕是否违规</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/禁地表弹幕.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;启用&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;销毁秒数&quot;</span><span style="color:#D4D4D4;">: 5,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;物品掉落&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;还原图格&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;是否广播&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;禁用弹幕&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    28,</span></span>
<span class="line"><span style="color:#D4D4D4;">    29,</span></span>
<span class="line"><span style="color:#D4D4D4;">    37,</span></span>
<span class="line"><span style="color:#D4D4D4;">    65,</span></span>
<span class="line"><span style="color:#D4D4D4;">    68,</span></span>
<span class="line"><span style="color:#D4D4D4;">    99,</span></span>
<span class="line"><span style="color:#D4D4D4;">    108,</span></span>
<span class="line"><span style="color:#D4D4D4;">    136,</span></span>
<span class="line"><span style="color:#D4D4D4;">    137,</span></span>
<span class="line"><span style="color:#D4D4D4;">    138,</span></span>
<span class="line"><span style="color:#D4D4D4;">    139,</span></span>
<span class="line"><span style="color:#D4D4D4;">    142,</span></span>
<span class="line"><span style="color:#D4D4D4;">    143,</span></span>
<span class="line"><span style="color:#D4D4D4;">    144,</span></span>
<span class="line"><span style="color:#D4D4D4;">    146,</span></span>
<span class="line"><span style="color:#D4D4D4;">    147,</span></span>
<span class="line"><span style="color:#D4D4D4;">    149,</span></span>
<span class="line"><span style="color:#D4D4D4;">    164,</span></span>
<span class="line"><span style="color:#D4D4D4;">    339,</span></span>
<span class="line"><span style="color:#D4D4D4;">    341,</span></span>
<span class="line"><span style="color:#D4D4D4;">    354,</span></span>
<span class="line"><span style="color:#D4D4D4;">    453,</span></span>
<span class="line"><span style="color:#D4D4D4;">    516,</span></span>
<span class="line"><span style="color:#D4D4D4;">    519,</span></span>
<span class="line"><span style="color:#D4D4D4;">    637,</span></span>
<span class="line"><span style="color:#D4D4D4;">    716,</span></span>
<span class="line"><span style="color:#D4D4D4;">    718,</span></span>
<span class="line"><span style="color:#D4D4D4;">    727,</span></span>
<span class="line"><span style="color:#D4D4D4;">    773,</span></span>
<span class="line"><span style="color:#D4D4D4;">    780,</span></span>
<span class="line"><span style="color:#D4D4D4;">    781,</span></span>
<span class="line"><span style="color:#D4D4D4;">    782,</span></span>
<span class="line"><span style="color:#D4D4D4;">    783,</span></span>
<span class="line"><span style="color:#D4D4D4;">    784,</span></span>
<span class="line"><span style="color:#D4D4D4;">    785,</span></span>
<span class="line"><span style="color:#D4D4D4;">    786,</span></span>
<span class="line"><span style="color:#D4D4D4;">    787,</span></span>
<span class="line"><span style="color:#D4D4D4;">    788,</span></span>
<span class="line"><span style="color:#D4D4D4;">    789,</span></span>
<span class="line"><span style="color:#D4D4D4;">    790,</span></span>
<span class="line"><span style="color:#D4D4D4;">    791,</span></span>
<span class="line"><span style="color:#D4D4D4;">    792,</span></span>
<span class="line"><span style="color:#D4D4D4;">    796,</span></span>
<span class="line"><span style="color:#D4D4D4;">    797,</span></span>
<span class="line"><span style="color:#D4D4D4;">    798,</span></span>
<span class="line"><span style="color:#D4D4D4;">    799,</span></span>
<span class="line"><span style="color:#D4D4D4;">    800,</span></span>
<span class="line"><span style="color:#D4D4D4;">    801,</span></span>
<span class="line"><span style="color:#D4D4D4;">    804,</span></span>
<span class="line"><span style="color:#D4D4D4;">    805,</span></span>
<span class="line"><span style="color:#D4D4D4;">    806,</span></span>
<span class="line"><span style="color:#D4D4D4;">    807,</span></span>
<span class="line"><span style="color:#D4D4D4;">    809,</span></span>
<span class="line"><span style="color:#D4D4D4;">    810,</span></span>
<span class="line"><span style="color:#D4D4D4;">    863,</span></span>
<span class="line"><span style="color:#D4D4D4;">    868,</span></span>
<span class="line"><span style="color:#D4D4D4;">    869,</span></span>
<span class="line"><span style="color:#D4D4D4;">    904,</span></span>
<span class="line"><span style="color:#D4D4D4;">    905,</span></span>
<span class="line"><span style="color:#D4D4D4;">    906,</span></span>
<span class="line"><span style="color:#D4D4D4;">    910,</span></span>
<span class="line"><span style="color:#D4D4D4;">    911,</span></span>
<span class="line"><span style="color:#D4D4D4;">    949,</span></span>
<span class="line"><span style="color:#D4D4D4;">    1013,</span></span>
<span class="line"><span style="color:#D4D4D4;">    1014</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>- 2.0.0</span></span>
<span class="line"><span>- 重构所有代码,移除指令方法</span></span>
<span class="line"><span>- 加入了数据库存储逻辑用于查找需要销毁弹幕的对应玩家</span></span>
<span class="line"><span>- 加入了物品掉落、图格还原等方法逻辑</span></span>
<span class="line"><span>- 支持全类型种子不同地图大小</span></span>
<span class="line"><span>- 1.0.0.6.0</span></span>
<span class="line"><span>- i18n预备</span></span>
<span class="line"><span>- 1.0.6</span></span>
<span class="line"><span>- 补全卸载函数</span></span>
<span class="line"><span>- 1.0.5</span></span>
<span class="line"><span>- 移除了计时器，使用OnWorldload方法实现加载完地图后再创建配置文件，</span></span>
<span class="line"><span>- 方便计算出准确的Main.worldSurface地表值</span></span>
<span class="line"><span>- 1.0.4</span></span>
<span class="line"><span>- 添加了个计时器，20秒后再创建计算好Main.worldSurface世界地表值的配置文件，</span></span>
<span class="line"><span>- 配置文件可支持正常地图与颠倒世界，将指令同步到配置文件总开关。</span></span>
<span class="line"><span>- 1.0.3</span></span>
<span class="line"><span>- 给插件加了个指令开关与权限，并在开启时获取所有ID带有名称的列表，</span></span>
<span class="line"><span>- 名字显示不全的改为“未知”。</span></span>
<span class="line"><span>- 开关指令名：/禁地表弹幕 （该指令的权限同名）</span></span>
<span class="line"><span>- 1.0.2</span></span>
<span class="line"><span>- 对config预设了更多的弹幕类型，涵盖了主要破坏地图的手段</span></span>
<span class="line"><span>- 1.0.1</span></span>
<span class="line"><span>- 加入了Config配置文件，玩家可通过Config设置拦截的弹幕ID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,11)]))}const t=n(i,[["render",p],["__file","SurfaceBlock.html.vue"]]),o=JSON.parse('{"path":"/zh/guide/SurfaceBlock.html","title":"SurfaceBlock 禁止地表弹幕","lang":"zh-CN","frontmatter":{"description":"SurfaceBlock 禁止地表弹幕 作者: 羽学 出处: github 这是一个Tshock服务器插件主要用于禁止生成对服务器内玩家处于世界地表时产生的弹幕， 尤其是针对恶意使用爆炸物破坏服务器地图的人。 指令 配置 配置文件位置：tshock/禁地表弹幕.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://git...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/SurfaceBlock.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"SurfaceBlock 禁止地表弹幕"}],["meta",{"property":"og:description","content":"SurfaceBlock 禁止地表弹幕 作者: 羽学 出处: github 这是一个Tshock服务器插件主要用于禁止生成对服务器内玩家处于世界地表时产生的弹幕， 尤其是针对恶意使用爆炸物破坏服务器地图的人。 指令 配置 配置文件位置：tshock/禁地表弹幕.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://git..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SurfaceBlock 禁止地表弹幕\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/SurfaceBlock.md"}');export{t as comp,o as data};
