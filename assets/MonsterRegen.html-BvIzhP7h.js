import{_ as n,e as a,f as l,o as e}from"./app-BCaq2qm9.js";const p={};function i(o,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="monsterregen-怪物进度回血" tabindex="-1"><a class="header-anchor" href="#monsterregen-怪物进度回血"><span>MonsterRegen 怪物进度回血</span></a></h1><ul><li>作者: 途逗 羽学</li><li>出处: Tshock官方Q群-816771079</li><li>通过创建计时器给怪物实现每秒回血设定，</li><li>击败配置指定BOSS来提升阶级，</li><li>来决定所有怪物的回复量、回复间隔</li><li>可定义【回复量】、【回复间隔】的上下限</li><li>如不需要【进度模式】，可控制【最少/多回复量】</li><li>控制怪物【百分比回血】的固定回血值</li><li>【禁止回血表】只需要填写怪物ID即可（仅对本插件有效）</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/reload</td><td style="text-align:center;">tshock.cfg.reload</td><td style="text-align:center;">重载怪物进度回血配置文件</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/怪物进度回血.json</p></blockquote><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;插件开关&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;开启进度模式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;默认间隔/秒&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1.2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;升阶减多少间隔&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.05</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;间隔到多少不减&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;默认回复血量/百分比&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.005</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;每次最少回复&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;每次最多回复&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;还原间隔的阶级&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;还原默认间隔值&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1.25</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;进度阶级（阶级数:回复量）&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;1&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.01</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;2&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.015</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;3&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.02</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;4&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.025</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;5&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.03</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;6&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.005</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;禁止回血表&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#005CC5;">  &quot;进度BOSS表（怪物ID:阶级数）&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;13&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;266&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;113&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;134&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;126&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;127&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;262&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;245&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    &quot;398&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">6</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.7.1</span></span>
<span class="line"><span>完善卸载函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.7.0</span></span>
<span class="line"><span>还原【开启进度模式】配置项</span></span>
<span class="line"><span>加入了【间隔到多少不减】的下限</span></span>
<span class="line"><span>考虑到有些人不喜欢进度模式</span></span>
<span class="line"><span>加2个配置项控制上下限：【每次最少回复】、【每次最多回复】</span></span>
<span class="line"><span>同时为考虑使用挑战者模式与自定义怪物血量关系</span></span>
<span class="line"><span>加入个【禁止回血表】配置项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.6.0</span></span>
<span class="line"><span>将【进度阶级】改为字典键值</span></span>
<span class="line"><span>移除了【进度开关】选项</span></span>
<span class="line"><span>因百分比回血对肉前低血量小怪近乎无效，</span></span>
<span class="line"><span>特此加入【小怪回血倍数】</span></span>
<span class="line"><span>加入了&quot;升阶减多少间隔&quot;与“还原间隔默认值”的配置项，</span></span>
<span class="line"><span>每击败一个BOSS就会减0.05（击败月总自动还原）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.5.0 fix</span></span>
<span class="line"><span>修复当前阶级回复血量百分比播报</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.5.0</span></span>
<span class="line"><span>修复计时器，</span></span>
<span class="line"><span>更改【回复间隔】配置项后输入/reload可重载更新计时器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.4.0</span></span>
<span class="line"><span>移除固定进度模式</span></span>
<span class="line"><span>只保留非固定进度模式</span></span>
<span class="line"><span>回复血量改为百分比</span></span>
<span class="line"><span>阶级数最高为12阶</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.0</span></span>
<span class="line"><span>加入进度回血（分5个进度阶级）2种模式</span></span>
<span class="line"><span>当开启以下模式时将默认回复血量视为0阶，击杀以下BOSS后通过升阶提高怪物回复值</span></span>
<span class="line"><span>固定进度模式（世吞/克脑1阶,肉山2阶,新一王3阶,世花4阶,石巨人5阶）</span></span>
<span class="line"><span>非固定进度模式（根据BOSS表里的击杀怪物ID决定取其最高阶级，解决玩家不按顺序击杀BOSS）</span></span>
<span class="line"><span>加入了击杀BOSS后当前阶级数播报</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.0</span></span>
<span class="line"><span>羽学重构代码，加入/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const c=n(p,[["render",i],["__file","MonsterRegen.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/MonsterRegen.html","title":"MonsterRegen 怪物进度回血","lang":"zh-CN","frontmatter":{"description":"MonsterRegen 怪物进度回血 作者: 途逗 羽学 出处: Tshock官方Q群-816771079 通过创建计时器给怪物实现每秒回血设定， 击败配置指定BOSS来提升阶级， 来决定所有怪物的回复量、回复间隔 可定义【回复量】、【回复间隔】的上下限 如不需要【进度模式】，可控制【最少/多回复量】 控制怪物【百分比回血】的固定回血值 【禁止回血表...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/MonsterRegen.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"MonsterRegen 怪物进度回血"}],["meta",{"property":"og:description","content":"MonsterRegen 怪物进度回血 作者: 途逗 羽学 出处: Tshock官方Q群-816771079 通过创建计时器给怪物实现每秒回血设定， 击败配置指定BOSS来提升阶级， 来决定所有怪物的回复量、回复间隔 可定义【回复量】、【回复间隔】的上下限 如不需要【进度模式】，可控制【最少/多回复量】 控制怪物【百分比回血】的固定回血值 【禁止回血表..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MonsterRegen 怪物进度回血\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/MonsterRegen.md"}');export{c as comp,r as data};
