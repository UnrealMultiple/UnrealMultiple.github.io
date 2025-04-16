import{_ as n,e as a,f as l,o as p}from"./app-B7FU61Yn.js";const e={};function o(i,s){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="spawninfra-生成基础建设-开服自动基建" tabindex="-1"><a class="header-anchor" href="#spawninfra-生成基础建设-开服自动基建"><span>SpawnInfra 生成基础建设（开服自动基建）</span></a></h1><ul><li>作者: 羽学</li><li>出处: <a href="https://github.com/hufang360/TShockWorldModify" target="_blank" rel="noopener noreferrer">TShockWorldModify</a></li><li>在新世界出生点右侧脚下建一个监狱集群</li><li>出生点上方生成世界平台与世界轨道</li><li>出生点脚下生成地狱直通车,</li><li>直通车洞穴层下方生成简易刷怪场（200 * 200) * 2边</li><li>在世界轨道能找到微光湖直通车(底下放了雨云块防摔)</li><li>在出生点左下角生成8*14个箱子</li><li>从地狱层往下深40格生成地狱平台与轨道</li><li>或使用指令在当前位置创建个监狱（/rm 数量）</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/rm 数量</td><td style="text-align:center;">/基建</td><td style="text-align:center;">room.use</td><td style="text-align:center;">在当前位置建小房子（玩家用）</td></tr><tr><td>/rm reset</td><td style="text-align:center;">/基建 重置</td><td style="text-align:center;">room.admin</td><td style="text-align:center;">重置配置开关:开服自动建监狱</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;使用说明&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;[微光直通车]的高度是从[世界平台]到湖中心,[自建微光湖]天顶从地狱往上算，其他以出生点往下算,开启则关闭[微光直通]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;使用说明2&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;[世界平台]普通世界从出生点往上算，天顶从太空层往下算，[刷怪场比例缩放]为倍数放大，建议不要调太高&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;使用说明3&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;改[箱子数量]要同时改[出生点偏移X]，改[箱子层数]要同时改[出生点偏移Y]，[层数间隔]和[箱子宽度]不建议动&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;使用说明4&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;给玩家用的建晶塔房指令:/rm 数量 权限名:room.use (千万别在出生点用，有炸图风险)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;使用说明5&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;每次重置服务器前使用一遍：/rm 重置，或者直接把这个指令写进重置插件里&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;使用说明6&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;以下参数仅适用于大地图，中地图需自己调试适配&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;使用说明7&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;[设置刷怪率]需所有在线玩家在刷怪场中心且击败[肉山]后生效&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;开服自动基建&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;自建微光湖&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;生成微光湖&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;出生点偏移X&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;出生点偏移Y&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;监狱集群&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否建监狱&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;出生点偏移X&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;出生点偏移Y&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;监狱集群宽度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">36</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;监狱集群高度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;图格ID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">38</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;墙壁ID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">147</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;平台样式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">43</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;椅子样式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">27</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;工作台样式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;火把样式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">13</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;箱子集群&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否建箱子&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;出生点偏移X&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-38</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;出生点偏移Y&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">27</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;箱子数量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;箱子层数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;层数间隔&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;清理高度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;箱子宽度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;箱子ID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">21</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;箱子样式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;平台ID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">19</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;平台样式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">43</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;世界/左海平台&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否建世界平台&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否建世界轨道&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否建左海平台&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;世界平台图格&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">19</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;世界平台样式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">43</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;世界平台高度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;平台清理高度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">35</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;世界平台禁入左海距离&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;左海平台禁入出生点距离&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;左海平台长度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">270</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;左海平台高度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;左海平台间隔&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;实体块包围左海平台(天顶必开)&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;左右实体块是否对齐上下(加载很慢)&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;左海平台产生液(非空岛不需要开)&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;直通车/刷怪场&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否建地狱直通车&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否建地狱平台&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否建地狱轨道&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否建微光直通车&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否建刷怪场&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;只清刷怪区域&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;直通车贯穿刷怪场&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;方块图格&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">38</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;绳子图格&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">214</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;平台图格&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">19</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;平台样式&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">43</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;直通车偏移X&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;直通车偏移Y&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;地狱直通车宽度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;地狱平台深度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;微光直通车宽度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;刷怪场清理深度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;刷怪场清理宽度&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;刷怪场比例缩放&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否放岩浆&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否放尖球&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;是否放飞镖&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;设置刷怪率&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;刷怪间隔/帧&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;刷怪上限/个&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.5.6</span></span>
<span class="line"><span>移除左右实体块是否对齐上下配置项</span></span>
<span class="line"><span>给世界平台加了判断阻拦，如果进入太空层则不生成</span></span>
<span class="line"><span>重新排列了一下世界平台的生成顺序</span></span>
<span class="line"><span>（放最后，避免建了小地图导致平台放置，导致索引越界妨碍其他建筑的放置）</span></span>
<span class="line"><span>声明此插件不适用于小地图，如果是中地图请自己修改相关配置参数进行调试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.5.5</span></span>
<span class="line"><span>完善卸载函数</span></span>
<span class="line"><span>配置项加入开服指令表，用于配合【奖励箱】插件，</span></span>
<span class="line"><span>它会先执行指令再放置建筑物</span></span>
<span class="line"><span>（仅在开启【开服自动基建】时会执行1次）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.5.4</span></span>
<span class="line"><span>给刷怪场加入提高刷怪率方法</span></span>
<span class="line"><span>需击败肉山后所有在线玩家在刷怪场中心才会生效</span></span>
<span class="line"><span>把刷怪层改成传送带，尖球机关改成虚化（取消制动器）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.5.3</span></span>
<span class="line"><span>左海平台不会再建到太空层</span></span>
<span class="line"><span>优化天顶颠倒种子的世界平台与十周年种子的微光直通车</span></span>
<span class="line"><span>加入了实体块包围左海平台配置项（天顶颠倒必开）</span></span>
<span class="line"><span>左侧实体块在x轴0格位置(少于41格只能从地图编辑器看),与右侧实体块等高</span></span>
<span class="line"><span>左右两侧对齐建议别开，加载速度很慢</span></span>
<span class="line"><span>修复了刷怪场的双向无限飞镖，</span></span>
<span class="line"><span>只要开启配置项无论直通车是否覆盖刷怪场都会有边界飞镖</span></span>
<span class="line"><span>给核心区加入了半砖平台让飞镖能正常穿墙进岩浆区</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.5.2</span></span>
<span class="line"><span>加入了自建微光湖（开启则关闭微光湖直通车）</span></span>
<span class="line"><span>优化了左海/世界平台对十周年种子距离控制</span></span>
<span class="line"><span>优化了左海清理方块逻辑（保留液体），加入对天顶的人工造海逻辑</span></span>
<span class="line"><span>给刷怪场左右边界封闭防液体流入，</span></span>
<span class="line"><span>开启直通车贯穿时会在底部放一层岩浆禁止刷怪</span></span>
<span class="line"><span>关闭直通车贯穿则在刷怪场右边放一列飞镖机关</span></span>
<span class="line"><span>刷怪场可自定义是否放岩浆/飞镖/尖球</span></span>
<span class="line"><span>开启\`只清刷怪区域\`会关闭\`自动建刷怪场\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.5.1</span></span>
<span class="line"><span>修复十周年种子没有按天顶微光直通车逻辑运行问题</span></span>
<span class="line"><span>修复颠倒与天顶世界直通车不能到达世界平台的问题</span></span>
<span class="line"><span>给刷怪场加入了一些基础物品放置，匹配了缩放比例</span></span>
<span class="line"><span>给刷怪场加入了无限飞镖机关/完善了“定刷怪区”</span></span>
<span class="line"><span>注意：此插件预设的配置参数仅适用于大地图，小地图需要自己调整</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.5.0</span></span>
<span class="line"><span>支持天顶/颠倒/十周年世界种子</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.4.0</span></span>
<span class="line"><span>修复了左海平台离地太近导致穿插沙滩的问题</span></span>
<span class="line"><span>世界平台与左海平台不再以出生点为起点定高度</span></span>
<span class="line"><span>改为从太空层往下数，主要适配小世界</span></span>
<span class="line"><span>左海平台默认会清理每层间隔内的所有方块</span></span>
<span class="line"><span>加入了世界平台禁入左海的配置项</span></span>
<span class="line"><span>加入了直通车贯穿刷怪场的开关</span></span>
<span class="line"><span>给地狱直通车通道加了发光墙</span></span>
<span class="line"><span>修正了刷怪场中心点为出生点X轴</span></span>
<span class="line"><span>修正了刷怪场比例缩放</span></span>
<span class="line"><span>给刷怪场放个花园侏儒</span></span>
<span class="line"><span>提高优先级避免覆盖CreateSpawn插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.0</span></span>
<span class="line"><span>加入了微光湖直通车</span></span>
<span class="line"><span>地狱直通车洞穴层下方加入了刷怪场（无特殊环境,简易电路）</span></span>
<span class="line"><span>将出生点箱子的垫脚石更换为了灰砖平台</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.0</span></span>
<span class="line"><span>加入自动基建后自动清理一遍全地图掉落物（替换树木引起的图格错误）</span></span>
<span class="line"><span>将具备开关的配置项放入了它们自己的数据组里</span></span>
<span class="line"><span>加入了生成箱子的设定</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.0</span></span>
<span class="line"><span>插件更名为：生成基础建设</span></span>
<span class="line"><span>加入地表/左海/地狱平台（轨道）、地狱直通车</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.0.0</span></span>
<span class="line"><span>将世界修改器插件中的监狱小房子方法独立成一个功能</span></span>
<span class="line"><span>支持配置项自定义监狱细节样式</span></span>
<span class="line"><span>建完监狱后会自动关掉\`开服自动基建\`配置项，</span></span>
<span class="line"><span>需要重置请输入/rm reset 然后重启服务器即可。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,10)]))}const t=n(e,[["render",o],["__file","SpawnInfra.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/SpawnInfra.html","title":"SpawnInfra 生成基础建设（开服自动基建）","lang":"zh-CN","frontmatter":{"description":"SpawnInfra 生成基础建设（开服自动基建） 作者: 羽学 出处: TShockWorldModify 在新世界出生点右侧脚下建一个监狱集群 出生点上方生成世界平台与世界轨道 出生点脚下生成地狱直通车, 直通车洞穴层下方生成简易刷怪场（200 * 200) * 2边 在世界轨道能找到微光湖直通车(底下放了雨云块防摔) 在出生点左下角生成8*14个...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/SpawnInfra.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"SpawnInfra 生成基础建设（开服自动基建）"}],["meta",{"property":"og:description","content":"SpawnInfra 生成基础建设（开服自动基建） 作者: 羽学 出处: TShockWorldModify 在新世界出生点右侧脚下建一个监狱集群 出生点上方生成世界平台与世界轨道 出生点脚下生成地狱直通车, 直通车洞穴层下方生成简易刷怪场（200 * 200) * 2边 在世界轨道能找到微光湖直通车(底下放了雨云块防摔) 在出生点左下角生成8*14个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpawnInfra 生成基础建设（开服自动基建）\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/SpawnInfra.md"}');export{t as comp,r as data};
