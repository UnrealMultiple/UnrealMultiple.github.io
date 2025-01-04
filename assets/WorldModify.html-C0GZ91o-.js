import{_ as n,c as a,a as l,o as e}from"./app-CpstP_eu.js";const p={};function i(d,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="简易的世界修改器" tabindex="-1"><a class="header-anchor" href="#简易的世界修改器"><span>简易的世界修改器</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>/wm info，查看世界信息；</span></span>
<span class="line"><span>/wm name [世界名]，查看/修改 世界名字；</span></span>
<span class="line"><span>/wm id [id]，查看/修改 世界ID；</span></span>
<span class="line"><span>/wm uuid [uuid]，查看/修改 世界uuid；</span></span>
<span class="line"><span>/wm mode [1~4/经典/专家/大师/旅行]，查看/修改 世界难度；</span></span>
<span class="line"><span>/wm seed [种子]，查看/修改 世界种子；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/wm 2020，开启/关闭 05162020 秘密世界；</span></span>
<span class="line"><span>/wm 2021，开启/关闭 05162021 秘密世界；</span></span>
<span class="line"><span>/wm ftw，开启/关闭 for the worthy 秘密世界；</span></span>
<span class="line"><span>/wm ntb，开启/关闭 not the bees 秘密世界（1.4.0.5无此选项）；</span></span>
<span class="line"><span>/wm dst，开启/关闭 the constant 秘密世界（1.4.0.5无此选项）；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/wm research，解锁 全物品研究；</span></span>
<span class="line"><span>/wm bestiary，解锁 怪物图鉴全收集；</span></span>
<span class="line"><span>/wm bestiary false， 重置 怪物图鉴；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/wm spawn，查看 出生点；</span></span>
<span class="line"><span>/wm dungeon，查看 地牢点；</span></span>
<span class="line"><span>/wm surface [深度]，查看/修改 地表深度；</span></span>
<span class="line"><span>/wm cave [深度]，查看/修改 洞穴深度；</span></span>
<span class="line"><span>/wm wind，查看 风速；</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/moon &lt;月相&gt;，修改月相；</span></span>
<span class="line"><span>/moonstyle &lt;月亮样式&gt;，修改月亮样式；</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/boss help，boss管理；</span></span>
<span class="line"><span>/boss info，查看boss进度；</span></span>
<span class="line"><span>/boss &lt;boss名&gt;，切换boss击败状态；</span></span>
<span class="line"><span>/boss list，查看支持切换击败状态的boss名；</span></span>
<span class="line"><span>/boss sb，sb 召唤指令备注；</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/npc help，npc管理；</span></span>
<span class="line"><span>/npc info，查看npc解救情况；</span></span>
<span class="line"><span>/npc &lt;解救npc名 或 猫/狗/兔 &gt;，切换NPC解救状态；</span></span>
<span class="line"><span>/npc list，查看支持切换击败状态的boss名；</span></span>
<span class="line"><span>/npc clear &lt;NPC名&gt;，移除一个NPC；</span></span>
<span class="line"><span>/npc unique，移除重复NPC；</span></span>
<span class="line"><span>/npc tphere &lt;NPC名|town&gt;, 将NPC传送到你身边；</span></span>
<span class="line"><span>/npc relive，复活NPC（根据怪物图鉴记录）；</span></span>
<span class="line"><span>/npc sm，sm召唤指令备注（SpawnMob npc召唤指令）；</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/igen world [种子] [腐化] [大小] [彩蛋特性], 重建地图；</span></span>
<span class="line"><span>/igen room &lt;数量&gt;，生成玻璃小房间（默认生成3个）&quot;；</span></span>
<span class="line"><span>/igen pond，生成玻璃鱼池框架&quot;；</span></span>
<span class="line"><span>/igen sm &lt;w&gt; &lt;h&gt;，盾构机（默认清空前方宽100高10区域，且生成一条石平台）；</span></span>
<span class="line"><span>/igen dig &lt;w&gt; &lt;h&gt;，钻井机（默认在脚下清空宽3高100区域，脚下生成一条石平台和生成一条丝绸绳索）；</span></span>
<span class="line"><span>/igen dirt，填土（一个屏幕范围内，脚下部分填充土块，上面的部分会被清空）；</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/worldinfo，查看世界信息（分配 worldinfo 权限后可用）；</span></span>
<span class="line"><span>/bossinfo，查看boss进度（分配 bossinfo 权限后可用）；</span></span>
<span class="line"><span>/relive，复活入住过的NPC（分配 relive 权限后可用）；</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span>权限</span></a></h2><p>普通用户使用需分配权限</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">/group</span><span style="color:#CE9178;"> addperm</span><span style="color:#CE9178;"> default</span><span style="color:#CE9178;"> bossinfo</span></span>
<span class="line"><span style="color:#DCDCAA;">/group</span><span style="color:#CE9178;"> addperm</span><span style="color:#CE9178;"> default</span><span style="color:#CE9178;"> worldinfo</span></span>
<span class="line"><span style="color:#DCDCAA;">/group</span><span style="color:#CE9178;"> addperm</span><span style="color:#CE9178;"> default</span><span style="color:#CE9178;"> relive</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">/group</span><span style="color:#CE9178;"> addperm</span><span style="color:#CE9178;"> default</span><span style="color:#CE9178;"> worldmodify</span></span>
<span class="line"><span style="color:#DCDCAA;">/group</span><span style="color:#CE9178;"> addperm</span><span style="color:#CE9178;"> default</span><span style="color:#CE9178;"> moonphase</span></span>
<span class="line"><span style="color:#DCDCAA;">/group</span><span style="color:#CE9178;"> addperm</span><span style="color:#CE9178;"> default</span><span style="color:#CE9178;"> moonstyle</span></span>
<span class="line"><span style="color:#DCDCAA;">/group</span><span style="color:#CE9178;"> addperm</span><span style="color:#CE9178;"> default</span><span style="color:#CE9178;"> bossmanage</span></span>
<span class="line"><span style="color:#DCDCAA;">/group</span><span style="color:#CE9178;"> addperm</span><span style="color:#CE9178;"> default</span><span style="color:#CE9178;"> npcmanage</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="moonphase-moonstyle-切换-月相和月亮样式-指令" tabindex="-1"><a class="header-anchor" href="#moonphase-moonstyle-切换-月相和月亮样式-指令"><span>/moonphase，/moonstyle，切换 月相和月亮样式 指令</span></a></h2><ul><li><p>8种月相：满月、亏凸月、下弦、残月、新月、娥眉月、上弦月、盈凸月；</p></li><li><p>9种月亮样式：正常的、火星样式、土星样式、秘银风格、明亮的偏蓝白色、绿色、糖果、金星样式 和 紫色的三重月亮；</p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;"># 切换至满月，moonphase指令可以缩写成 moon</span></span>
<span class="line"><span style="color:#DCDCAA;">/moon</span><span style="color:#B5CEA8;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 切换至 秘银风格，moonstyle指令可以缩写成 ms</span></span>
<span class="line"><span style="color:#DCDCAA;">/moonstyle</span><span style="color:#B5CEA8;"> 4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const c=n(p,[["render",i],["__file","WorldModify.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/WorldModify.html","title":"简易的世界修改器","lang":"zh-CN","frontmatter":{"description":"简易的世界修改器 权限 普通用户使用需分配权限 /moonphase，/moonstyle，切换 月相和月亮样式 指令 8种月相：满月、亏凸月、下弦、残月、新月、娥眉月、上弦月、盈凸月； 9种月亮样式：正常的、火星样式、土星样式、秘银风格、明亮的偏蓝白色、绿色、糖果、金星样式 和 紫色的三重月亮；","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"http://docs.terraria.ink/en/guide/WorldModify.html"}],["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/WorldModify.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"简易的世界修改器"}],["meta",{"property":"og:description","content":"简易的世界修改器 权限 普通用户使用需分配权限 /moonphase，/moonstyle，切换 月相和月亮样式 指令 8种月相：满月、亏凸月、下弦、残月、新月、娥眉月、上弦月、盈凸月； 9种月亮样式：正常的、火星样式、土星样式、秘银风格、明亮的偏蓝白色、绿色、糖果、金星样式 和 紫色的三重月亮；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简易的世界修改器\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"权限","slug":"权限","link":"#权限","children":[]},{"level":2,"title":"/moonphase，/moonstyle，切换 月相和月亮样式 指令","slug":"moonphase-moonstyle-切换-月相和月亮样式-指令","link":"#moonphase-moonstyle-切换-月相和月亮样式-指令","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/WorldModify.md"}');export{c as comp,r as data};
