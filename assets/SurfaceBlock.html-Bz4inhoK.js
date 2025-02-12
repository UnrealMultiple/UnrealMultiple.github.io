import{_ as n,a,b as l,o as e}from"./app-OA8YN-gU.js";const p={};function i(c,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="surfaceblock-禁止地表弹幕" tabindex="-1"><a class="header-anchor" href="#surfaceblock-禁止地表弹幕"><span>SurfaceBlock 禁止地表弹幕</span></a></h1><ul><li>作者: 羽学</li><li>出处: <a href="https://github.com/1242509682/SurfaceBlock" target="_blank" rel="noopener noreferrer">github</a></li><li>这是一个Tshock服务器插件主要用于禁止生成对服务器内玩家处于世界地表时产生的弹幕，</li><li>尤其是针对恶意使用爆炸物破坏服务器地图的人。</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/reload</td><td style="text-align:center;">无</td><td style="text-align:center;">重载配置文件</td></tr><tr><td>无</td><td style="text-align:center;">免检地表弹幕</td><td style="text-align:center;">不检测其弹幕是否违规</td></tr><tr><td>无</td><td style="text-align:center;">SurfaceBlock</td><td style="text-align:center;">不检测其弹幕是否违规</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/禁地表弹幕.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#032F62;">  &quot;启用&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;销毁秒数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;物品掉落&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;还原图格&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;是否广播&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;禁用弹幕&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">    28</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    29</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    37</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    65</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    68</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    99</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    108</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    136</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    137</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    138</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    139</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    142</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    143</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    144</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    146</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    147</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    149</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    164</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    339</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    341</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    354</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    453</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    516</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    519</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    637</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    716</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    718</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    727</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    773</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    780</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    781</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    782</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    783</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    784</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    785</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    786</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    787</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    788</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    789</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    790</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    791</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    792</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    796</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    797</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    798</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    799</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    800</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    801</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    804</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    805</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    806</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    807</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    809</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    810</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    863</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    868</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    869</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    904</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    905</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    906</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    910</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    911</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    949</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    1013</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    1014</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>- 2.0.0</span></span>
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
<span class="line"><span>- 加入了Config配置文件，玩家可通过Config设置拦截的弹幕ID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const r=n(p,[["render",i],["__file","SurfaceBlock.html.vue"]]),t=JSON.parse('{"path":"/zh/guide/SurfaceBlock.html","title":"SurfaceBlock 禁止地表弹幕","lang":"zh-CN","frontmatter":{"description":"SurfaceBlock 禁止地表弹幕 作者: 羽学 出处: github 这是一个Tshock服务器插件主要用于禁止生成对服务器内玩家处于世界地表时产生的弹幕， 尤其是针对恶意使用爆炸物破坏服务器地图的人。 指令 配置 配置文件位置：tshock/禁地表弹幕.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://git...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/SurfaceBlock.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"SurfaceBlock 禁止地表弹幕"}],["meta",{"property":"og:description","content":"SurfaceBlock 禁止地表弹幕 作者: 羽学 出处: github 这是一个Tshock服务器插件主要用于禁止生成对服务器内玩家处于世界地表时产生的弹幕， 尤其是针对恶意使用爆炸物破坏服务器地图的人。 指令 配置 配置文件位置：tshock/禁地表弹幕.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://git..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SurfaceBlock 禁止地表弹幕\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/SurfaceBlock.md"}');export{r as comp,t as data};
