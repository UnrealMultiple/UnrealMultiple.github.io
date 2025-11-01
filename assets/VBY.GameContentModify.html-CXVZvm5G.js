import{_ as n,c as i,a,o as l}from"./app-DaEuJxNx.js";const p={};function e(t,s){return l(),i("div",null,[...s[0]||(s[0]=[a(`<h1 id="vby-gamecontentmodify-游戏内容修改" tabindex="-1"><a class="header-anchor" href="#vby-gamecontentmodify-游戏内容修改"><span>VBY.GameContentModify 游戏内容修改</span></a></h1><ul><li><p>作者: xuyuwtu</p></li><li><p>出处: <a href="https://github.com/xuyuwtu/MyPlugin" target="_blank" rel="noopener noreferrer">MyPlgin</a></p></li><li><p>爆改Terraria的一些东西...</p></li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/gcm</td><td style="text-align:center;">gcm.ctl</td><td style="text-align:center;">查看该指令的子命令菜单</td></tr><tr><td>/gcm show main [-nd] [-code]</td><td style="text-align:center;">gcm.ctl</td><td style="text-align:center;">查看主配置文件</td></tr><tr><td>/gcm show chest</td><td style="text-align:center;">gcm.ctl</td><td style="text-align:center;">查看箱子配置文件</td></tr><tr><td>/gcm set &lt;属性&gt; &lt;值&gt;</td><td style="text-align:center;">gcm.ctl</td><td style="text-align:center;">设置主配置文件的设置项</td></tr><tr><td>/gcm save</td><td style="text-align:center;">gcm.ctl</td><td style="text-align:center;">保存配置</td></tr><tr><td>/gcm debug</td><td style="text-align:center;">gcm.ctl</td><td style="text-align:center;">切换调试模式</td></tr><tr><td>/reload</td><td style="text-align:center;">gcm.ctl</td><td style="text-align:center;">重载配置文件</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>主配置路径 Config/VBY.GameContentModify/MainConfig.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-json5"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;生成&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;城镇NPC&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;禁止生成的城镇NPC&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;禁止自然生成&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;晚上生成&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;有入侵时生成&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;日食时生成&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;时间速率为0时仍然生成&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;时间速率为0时的生成速率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;旅商晚上不离开&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;房屋忽略腐化检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;忽略松露人环境检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;自然生成陨石的几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;克苏鲁之眼&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;自然生成击败检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;自然生成血量和防御检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;自然生成未击败时生成的几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;自然生成已击败时生成的几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;自然生成城镇NPC数量检测检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;机械Boss&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;自然生成的几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;自然生成击败检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;自然生成克眼自然生成检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;自然生成时三王为或者的关系&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;自然生成时世界上是否有Boss检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;召唤月亮领主等待时间&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">720</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;柱子死亡后月亮领主等待时间&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3600</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;禁用世花花苞生成世花已存在检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;入侵&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;未击败时自然生成哥布林入侵的几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;已击败时自然生成哥布林入侵的几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;困难模式且已击败时自然生成哥布林入侵的几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">60</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;未击败时自然生成海盗入侵的几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;已击败时自然生成海盗入侵的几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">60</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;血月&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;自然生成几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;十周年世界自然生成几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;自然生成玩家血量检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;自然生成克眼检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;清除日晷和月晷冷却&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;世界&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;生长生命果需要的进度ID&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      9</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;非困难模式时启用困难模式更新&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;感染传播距离&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;不生成落星&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;白天也生成落星&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;时间速率为0时仍然更新&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;时间速率为0时的更新速率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;禁止液体更新&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;宝石树可以在地表生长&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;球体&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;生成Boss需要的数量&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;心脏掉落物品&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">800</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">97</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1256</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">802</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3062</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1290</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;暗影珠掉落物品&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">96</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">97</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">162</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">115</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">111</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;晶塔&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;危险检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;花前神庙墙检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;环境要求检测&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;需要的城镇NPC数量&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;使用时检测距离X&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">60</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;使用时检测距离Y&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">60</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;网络消息&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;同步所有NPC&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;同步所有物品&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;同步所有射弹&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;扩展&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;不发送的NetPacket类名称&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;在每天开始的时候生成旅商&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;在每天开始的时候生成旅商的几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;免疫熔岩的NPC&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;免疫射弹的NPC&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;渔夫在海边水里死亡时会生成猪鲨&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;旅商每天刷新&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;液体&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;破坏信息&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {},</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;禁止熔岩破坏草方块&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;启用液体破坏修改&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;机械&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;300范围内的物品生成数量限制&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;800范围内的物品生成数量限制&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;世界范围内的物品生成数量限制&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;物品生成数量限制使用物品数量&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;生成物品的冷却时间&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">600</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;200范围内的NPC生成数量限制&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;600范围内的NPC生成数量限制&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;世界范围内的NPC生成数量限制&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;生成NPC的冷却时间&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;巨石雕像冷却时间&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">900</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;飞镖机关冷却时间&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;尖球机关冷却时间&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;长矛机关冷却时间&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">90</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;热喷泉冷却时间&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;自然生成日食几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;屏蔽射弹破坏物块ID列表&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    102</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;老旧摇摇箱开启后生成的物品ID列表&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;毒气陷阱叠加&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;毒气陷阱生成射弹ID&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1007</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;毒气陷阱射弹伤害&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;日晷冷却天数&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;月晷冷却天数&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;附魔剑冢掉落物品信息&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;RandomValue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;Items&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stackEnd&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4144</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;Else&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;RandomValue&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;Items&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;stackEnd&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">989</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;stack&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;prefix&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          ],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;Else&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;Continute&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;Continute&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;老旧摇摇箱在长者史莱姆解锁后依旧生成&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;禁止蜂王和小蜜蜂伤害其他敌对NPC&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;禁止掉出世界时杀死城镇NPC的圣诞节检查&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;禁止敌怪NPC碰撞伤害城镇NPC&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;禁用微光分解&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;每天可以摇树的数量&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">500</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;摇树不掉落炸弹射弹&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;罐子不掉落炸弹射弹&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;禁止马桶生成射弹&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;开始史莱姆雨的随机数的被除数&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">450000.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;史莱姆雨时生成史莱姆王需要击杀的史莱姆数量&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">150</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;史莱姆王被击败后史莱姆雨时生成史莱姆王需要击杀的史莱姆数量&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">75</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;史莱姆雨期间杀死史莱姆王不停止史莱姆雨&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;禁止NPC死亡时生成熔岩&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;禁止敌对雪球生成雪块&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;禁止敌对雪球掉落物品&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;禁止蚁狮的沙球生成沙块&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;蚁狮的沙球会掉落物品&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;禁止墓碑射弹放置墓碑并掉落墓碑物品&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;药草生长改为随机&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;药草随机生长几率&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;下雨基础随机数&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">86000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;城镇NPC死亡时掉落墓碑&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;城镇NPC不会淹死&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;向导巫毒娃娃生成血肉墙时可以没有向导&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;NPC不掉落旗帜&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;破坏蜂巢不生成蜜蜂&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &quot;草药盆不生长杂草&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进度值" tabindex="-1"><a class="header-anchor" href="#进度值"><span>进度值</span></a></h2><table><thead><tr><th>进度值</th><th>数值</th></tr></thead><tbody><tr><td>无</td><td>0</td></tr><tr><td>史莱姆王</td><td>1</td></tr><tr><td>克眼</td><td>2</td></tr><tr><td>世吞克脑</td><td>3</td></tr><tr><td>蜂王</td><td>4</td></tr><tr><td>骷髅王</td><td>5</td></tr><tr><td>鹿角怪</td><td>6</td></tr><tr><td>困难模式（肉山）</td><td>7</td></tr><tr><td>史莱姆皇后</td><td>8</td></tr><tr><td>任意机械BOSS</td><td>9</td></tr><tr><td>毁灭者</td><td>10</td></tr><tr><td>双子魔眼</td><td>11</td></tr><tr><td>机械骷髅王</td><td>12</td></tr><tr><td>世纪之花</td><td>13</td></tr><tr><td>石巨人</td><td>14</td></tr><tr><td>猪鲨</td><td>15</td></tr><tr><td>光女</td><td>16</td></tr><tr><td>教徒</td><td>17</td></tr><tr><td>日耀柱</td><td>18</td></tr><tr><td>星云柱</td><td>19</td></tr><tr><td>星璇柱</td><td>20</td></tr><tr><td>星尘柱</td><td>21</td></tr><tr><td>月总</td><td>22</td></tr><tr><td>衰木</td><td>23</td></tr><tr><td>南瓜王</td><td>24</td></tr><tr><td>常绿尖叫怪</td><td>25</td></tr><tr><td>圣诞坦克</td><td>26</td></tr><tr><td>冰雪女王</td><td>27</td></tr><tr><td>四柱</td><td>28</td></tr><tr><td>血月小丑</td><td>29</td></tr><tr><td>哥布林入侵</td><td>30</td></tr><tr><td>海盗入侵</td><td>31</td></tr><tr><td>火星暴乱</td><td>32</td></tr></tbody></table><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>1.9</span></span>
<span class="line"><span>添加:</span></span>
<span class="line"><span>PlanterBoxNotGrowingWeeds 草药盆不生长杂草</span></span>
<span class="line"><span>Spawn.TownNPC.HouseIgnoreEvil 房屋忽略腐化检测</span></span>
<span class="line"><span>Spawn.TownNPC.IgnoreTruffEnvCheck 忽略松露人环境检测</span></span>
<span class="line"><span>Spawn.TownNPC.DisableSpawnTownNPC 禁止生成的城镇NPC</span></span>
<span class="line"><span>Spawn.DisablePlanteraBulbSpawnPlanteraExistsCheck 禁用世花花苞生成世花已存在检测</span></span>
<span class="line"><span>Extension.TravelNPCRefreshOnStartDay 旅商每天刷新</span></span>
<span class="line"><span>修复：</span></span>
<span class="line"><span>建表错误导致的破坏方块掉落物异常问题（挖外露宝石掉魔刺BUG、宝石合成的方块挖了不掉落BUG）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>羽学的配置文件：配置了老旧摇摇箱的物品</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.8</span></span>
<span class="line"><span>添加:</span></span>
<span class="line"><span>Spawn.TownNPC.TravelNPCNotLeavingAtNight 旅商晚上不离开</span></span>
<span class="line"><span>Spawn.TownNPC.HouseIgnoreEvil 房屋忽略腐化检测</span></span>
<span class="line"><span>Spawn.TownNPC.IgnoreTruffEnvCheck 忽略松露人环境检测</span></span>
<span class="line"><span>World.GemTreeCanGrowOverground 宝石树可以在地表生长</span></span>
<span class="line"><span>NotSpawnBeeWhenKillHive 破坏蜂巢不生成蜜蜂</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.7</span></span>
<span class="line"><span>NPCNotDropBanner NPC不掉落旗帜</span></span>
<span class="line"><span>GuideVoodooDollSpawnWOFCanWithoutGuide 向导巫毒娃娃生成血肉墙时可以没有向导</span></span>
<span class="line"><span>Spawn.TownNPC.DisableSpawn 禁止自然生成城镇NPC(包括老人)</span></span>
<span class="line"><span>Spawn.MoonLordCountdownOfSummon 召唤月亮领主等待时间</span></span>
<span class="line"><span>Spawn.MoonLordCountdownOfTowerKilled 柱子死亡后月亮领主等待时间</span></span>
<span class="line"><span>Extension.IgnoreLavaNPCs 免疫熔岩的NPC</span></span>
<span class="line"><span>Extension.IgnoreProjectileNPCs 免疫射弹的NPC</span></span>
<span class="line"><span>World.DisableLiquidUpdate 禁止液体更新（存在BUG）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.6 fix：</span></span>
<span class="line"><span>Mech.ItemSpawnLimitOfRange600 600范围内的物品生成数量限制</span></span>
<span class="line"><span>改为：</span></span>
<span class="line"><span>Mech.ItemSpawnLimitOfRange800 800范围内的物品生成数量限制</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.6：</span></span>
<span class="line"><span>添加：</span></span>
<span class="line"><span>TownNPCDropTombstoneWhenDead 城镇死亡时掉落墓碑</span></span>
<span class="line"><span>TownNPCDrowningImmunity 城镇NPC不会淹死</span></span>
<span class="line"><span>Spawn.TownNPC.SpawnStillWhenTimeRateIsZero 时间速率为0时仍然生成</span></span>
<span class="line"><span>Spawn.TownNPC.SpawnTimeRateWhenTimeRateIsZero 时间速率为0时的生成速率</span></span>
<span class="line"><span>World.UpdateStillWhenTimeRateIsZero 时间速率为0时仍然更新</span></span>
<span class="line"><span>World.UpdateTimeRateWhenTimeRateIsZero 时间速率为0时的更新速率</span></span>
<span class="line"><span>Mech.ItemSpawnLimitOfRange300 300范围内的物品生成数量限制</span></span>
<span class="line"><span>Mech.ItemSpawnLimitOfRange600 600范围内的物品生成数量限制</span></span>
<span class="line"><span>Mech.ItemSpawnLimitOfWorld 世界范围内的物品生成数量限制</span></span>
<span class="line"><span>Mech.ItemSpawnLimitUseStack 物品生成数量限制使用物品数量</span></span>
<span class="line"><span>Mech.ItemSpawnCoolingTime 生成物品的冷却时间</span></span>
<span class="line"><span>Mech.NPCSpawnLimitOfRange200 200范围内的NPC生成数量限制</span></span>
<span class="line"><span>Mech.NPCSpawnLimitOfRange600 600范围内的NPC生成数量限制</span></span>
<span class="line"><span>Mech.NPCSpawnLimitOfWorld 世界范围内的NPC生成数量限制</span></span>
<span class="line"><span>Mech.NPCSpawnCoolingTime 生成NPC的冷却时间</span></span>
<span class="line"><span>Mech.BoulderStatueCoolingTime 巨石雕像冷却时间</span></span>
<span class="line"><span>Mech.DartTrapCoolingTime 飞镖机关冷却时间 —— [超级/毒液]飞镖/烈焰</span></span>
<span class="line"><span>Mech.SpikyBallTrapCoolingTime 尖球机关冷却时间</span></span>
<span class="line"><span>Mech.SpearTrapCoolingTime 长矛机关冷却时间</span></span>
<span class="line"><span>Mech.GeyserTrapCoolingTime 热喷泉冷却时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.5(FIx1):</span></span>
<span class="line"><span>修复 World.GrowLifeFruitRequireProgressIDs 配置无效且导致无法生成生命果的问题(不写任何值是可以生成的，不过那样也没有了进度限制)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.5</span></span>
<span class="line"><span>改名：</span></span>
<span class="line"><span>World.hardUpdateWorldCheck 困难模式世界更新是否检测困难模式 </span></span>
<span class="line"><span>-&gt;World.EnableHardModeUpdateWhenNotHardMode 非困难模式时启用困难模式更新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更新Common以支持static的ActionHook</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修复晶塔修改不生效的问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>新增.命令：</span></span>
<span class="line"><span>/gcm debug 切换调试模式，</span></span>
<span class="line"><span>切换后reload时会在控制台显示一些信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>新增.配置：</span></span>
<span class="line"><span>Liquid.DisableLavaDestoryGrassTile </span></span>
<span class="line"><span>禁止熔岩破坏草方块</span></span>
<span class="line"><span>Liquid.EnableLiquidDeathModify </span></span>
<span class="line"><span>启用液体破坏修改 —— 修改可能会导致奇怪问题，</span></span>
<span class="line"><span>为true时 Liquid.DestoryInfo 才有效，</span></span>
<span class="line"><span>仅对可被液体浸没的图格生效，固体物块不生效</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Liquid.DestoryInfo 破坏信息</span></span>
<span class="line"><span>格式：</span></span>
<span class="line"><span>[{</span></span>
<span class="line"><span>     &quot;图格ID&quot;: {</span></span>
<span class="line"><span>        &quot;子ID&quot;: {</span></span>
<span class="line"><span>            &quot;WaterDeath&quot;: true, //水破坏</span></span>
<span class="line"><span>            &quot;LavaDeath&quot;: false //熔岩破坏</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}]</span></span>
<span class="line"><span>当debug开启时，会显示是设置的TileObjectData还是Main.tile{Lava,Water}Death，</span></span>
<span class="line"><span>对于Main.tile{Lava,Water}Death，子ID无效，但是要写</span></span>
<span class="line"><span></span></span>
<span class="line"><span>World.GrowLifeFruitRequireProgressIDs </span></span>
<span class="line"><span>生长生命果需要的进度ID —— 使用微光转换的那边的进度ID，全部ID对应的进度都满足时可生成生命果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>进度值：</span></span>
<span class="line"><span>无 0</span></span>
<span class="line"><span>史莱姆王 1</span></span>
<span class="line"><span>克眼 2</span></span>
<span class="line"><span>世吞克脑 3</span></span>
<span class="line"><span>蜂王 4</span></span>
<span class="line"><span>骷髅王 5</span></span>
<span class="line"><span>鹿角怪 6</span></span>
<span class="line"><span>困难模式（肉山） 7</span></span>
<span class="line"><span>史莱姆皇后 8</span></span>
<span class="line"><span>任意机械BOSS 9</span></span>
<span class="line"><span>毁灭者 10</span></span>
<span class="line"><span>双子魔眼 11</span></span>
<span class="line"><span>机械骷髅王 12</span></span>
<span class="line"><span>世纪之花 13</span></span>
<span class="line"><span>石巨人 14</span></span>
<span class="line"><span>猪鲨 15</span></span>
<span class="line"><span>光女 16</span></span>
<span class="line"><span>教徒 17</span></span>
<span class="line"><span>日耀柱 18</span></span>
<span class="line"><span>星云柱 19</span></span>
<span class="line"><span>星璇柱 20</span></span>
<span class="line"><span>星尘柱 21</span></span>
<span class="line"><span>月总 22</span></span>
<span class="line"><span>衰木 23</span></span>
<span class="line"><span>南瓜王 24</span></span>
<span class="line"><span>常绿尖叫怪 25</span></span>
<span class="line"><span>圣诞坦克 26</span></span>
<span class="line"><span>冰雪女王 27</span></span>
<span class="line"><span>四柱 28</span></span>
<span class="line"><span>血月小丑 29</span></span>
<span class="line"><span>哥布林入侵 30</span></span>
<span class="line"><span>海盗入侵 31</span></span>
<span class="line"><span>火星暴乱 32</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EnchantedSwordInStoneDropItemInfo </span></span>
<span class="line"><span>附魔剑冢掉落物品信息 —— 可以稍微修改下附魔剑冢的掉落物</span></span>
<span class="line"><span>格式：</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;RandomValue&quot;: 50, //几率 依旧为 1/RandomValue 的几率，不写时为1，必中</span></span>
<span class="line"><span>      &quot;Items&quot;: [ //生成物品信息</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;stackEnd&quot;: null, //数量的结尾，会生成 [stack-stackEnd] 之间数量的物品</span></span>
<span class="line"><span>为null或和stack相同时生成 stack数量的物品，不写为null</span></span>
<span class="line"><span>          &quot;type&quot;: 4144,</span></span>
<span class="line"><span>          &quot;stack&quot;: 1, //数量，不写为1</span></span>
<span class="line"><span>          &quot;prefix&quot;: -1 //前缀，不写为-1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      &quot;Else&quot;: [{ //否则，如果上面的随机没成功，会尝试Else里的，不写为null</span></span>
<span class="line"><span>        &quot;Items&quot;: [{&quot;type&quot;: 989}],</span></span>
<span class="line"><span>        &quot;Else&quot;: null,</span></span>
<span class="line"><span>        &quot;Continute&quot;: true</span></span>
<span class="line"><span>      }],</span></span>
<span class="line"><span>      &quot;Continute&quot;: true //如果有多个信息对象</span></span>
<span class="line"><span>这个决定是否进行下个对象试掉落</span></span>
<span class="line"><span>看父对象是否成功(会掉落物品)</span></span>
<span class="line"><span>如果成功会进入下一个对象尝试掉落，不写为true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.4</span></span>
<span class="line"><span>本插件目标为游戏内容的修改，全部的操作都在服务端，不要问我一些客户端的东西</span></span>
<span class="line"><span>有几个配置项，西江要说一下</span></span>
<span class="line"><span>修改：</span></span>
<span class="line"><span>不再有需要重启服务器才能生效的配置项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>添加：</span></span>
<span class="line"><span>StaticStartRainBaseRandomNum 下雨基础随机数 —— 游戏每秒检查60次，想好改什么数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MemberSetter.json </span></span>
<span class="line"><span>用于设置OTAPI一些静态成员，插件重载时会还原值，如果你会看代码的话，可以自己加新的可更改成员，</span></span>
<span class="line"><span>不局限于默认内容，目前只支持基本数字数据类型、布尔和字符串，及其对应数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MemberName 用于设置成员名称，简短格式为 &quot;&lt;自定义成员名称&gt;&quot;: &quot;&lt;成员完全名称&gt;&quot;，长格式为 &quot;&lt;自定义成员名称&gt;&quot;: { &quot;Name&quot;: &quot;&lt;成员完全名称&gt;&quot;, ...}</span></span>
<span class="line"><span>MemberValue 用于设置成员值，非数组成员直接 &quot;&lt;自定义成员名称&gt;&quot;: 成员值，数组成员为&quot;自定义成员名称&quot;: { &quot;&lt;索引&gt;&quot;: 成员值, ... }，长格式值名称为Value，MemberName长格式名称为Name</span></span>
<span class="line"><span>示例</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;MemberName&quot;: {</span></span>
<span class="line"><span>        &quot;可掉落图格&quot;: {</span></span>
<span class="line"><span>            &quot;Name&quot;: &quot;Terraria.ID.TileID+Sets.Falling&quot;,</span></span>
<span class="line"><span>            &quot;Tip&quot;: &quot;可掉落图格，可以用来把沙子一类设置为false来防止掉落，不要给原本不可掉落的设置为true，那些并没有相应弹幕承载&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;物品免疫熔岩摧毁&quot;: &quot;Terraria.ID.ItemID+Sets.IsLavaImmuneRegardlessOfRarity&quot;,</span></span>
<span class="line"><span>        &quot;检测宽度&quot;: &quot;Terraria.NPC.sWidth&quot;,</span></span>
<span class="line"><span>        &quot;检测高度&quot;: &quot;Terraria.NPC.sHeight&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;MemberValue&quot;: {</span></span>
<span class="line"><span>        &quot;可掉落图格&quot;: {</span></span>
<span class="line"><span>            &quot;53&quot;: {</span></span>
<span class="line"><span>                &quot;Value&quot;: false,</span></span>
<span class="line"><span>                &quot;Tip&quot;: &quot;沙子&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &quot;112&quot;: false</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;物品免疫熔岩摧毁&quot;: {</span></span>
<span class="line"><span>            &quot;1&quot;: true</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;检测宽度&quot;: 1920,</span></span>
<span class="line"><span>        &quot;检测高度&quot;: 1680</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>【MainConfig.json】</span></span>
<span class="line"><span>屏蔽射弹破坏物块ID列表</span></span>
<span class="line"><span>这个配置项目是ServerOnly(仅由服务器产生的射弹)的，玩家的炸弹是客户端自己算的，然后转换为方块破坏发送到服务器(这也是ts物块破坏速度能限制炸弹的原因)，这里有个默认值是机械骷髅王的炸弹，为ftw世界准备的，ts也有一个屏蔽这个炸弹的，不过那是直接把射弹删掉了，其他的非玩家弹幕破坏方块的好像也没几个。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>老旧摇摇箱在长者史莱姆解锁后依旧生成</span></span>
<span class="line"><span>这个配置是为了让世界上一些不可再生的饰品准备的，比如钉鞋什么的只能开箱子，箱子开完就没了，可以把物品ID加到列表(BoundTownSlimeOldSpawnItemIDs)里，并设置这个为true，这样玩家后来解救这个npc的时候就会出列表里的物品</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GasTraps系列</span></span>
<span class="line"><span>类型：娱乐</span></span>
<span class="line"><span>叠加：如果里面有多个炸弹，会全都爆，伤害会叠加到生成的射弹</span></span>
<span class="line"><span>射弹Type：不用多说，不过毒气炸弹这个弹幕设置伤害是没用的，所以要用其他弹幕，比如炸药桶的</span></span>
<span class="line"><span>射弹伤害：伤害</span></span>
<span class="line"><span></span></span>
<span class="line"><span>渔夫在海边水里死亡时会生成猪鲨：肉后可用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不发送的NetPacket类名称</span></span>
<span class="line"><span>用来屏蔽一些包到服务器的，这个包名需要自己看代码，</span></span>
<span class="line"><span>本是某多世界服务器主城有晶塔，传送后把这个数据带到了其他世界，导致地图错乱而出的，晶塔的类名为NetTeleportPylonModule</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可用来拦截的类名有：</span></span>
<span class="line"><span>NetAmbienceModule【星星夜、血月等事件播报模块】</span></span>
<span class="line"><span>NetBestiaryModule【怪物图鉴模块】</span></span>
<span class="line"><span>NetCreativePowerPermissionsModule【创意权限模块】</span></span>
<span class="line"><span>NetCreativePowersModule【创意力量模块】</span></span>
<span class="line"><span>NetCreativeUnlocksModule【创意解锁模块】</span></span>
<span class="line"><span>NetCreativeUnlocksPlayerReportModule【玩家解锁物品信息报告模块】</span></span>
<span class="line"><span>NetLiquidModule【液体模块】</span></span>
<span class="line"><span>NetParticlesModule【粒子模块】</span></span>
<span class="line"><span>NetPingModule【位置数据模块】</span></span>
<span class="line"><span>NetTeleportPylonModule【晶塔模块】</span></span>
<span class="line"><span>NetTextModule【聊天模块】</span></span>
<span class="line"><span></span></span>
<span class="line"><span>自然生成机械Boss时三王为或者的关系</span></span>
<span class="line"><span>类型：扩展</span></span>
<span class="line"><span>一次只能生成三王之一不给力？这个可以让三王都可能来</span></span>
<span class="line"><span>（来三王的游戏基础条件是要打破一个祭坛的，不要问我把几率改成1为什么不来)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SpawnTravel系列</span></span>
<span class="line"><span>类型：扩展</span></span>
<span class="line"><span>总是没旅商？开个让每天开始都可能来</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hardUpdateWorldCheck(困难模式世界更新是否检测困难模式)</span></span>
<span class="line"><span>可以在肉前享受肉后的世界更新：腐化石块蔓延，蔓延距离增加，叶绿生成等</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Orb.*DropItems(球体的掉落物品)</span></span>
<span class="line"><span>列表的第一个子列表是第一次打破必掉的(游戏也这么写的，我改成数组了而已)物品，后来的随机取其一</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TeleportPylons.Reach{X,Y}(使用时检测距离Y)</span></span>
<span class="line"><span>虽然这个能扩展服务器那边的限制，但是客户端有自己的限制(离太远地图上点不了)，所以其实意义不大</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NetMessage.SyncAll*</span></span>
<span class="line"><span>进入世界时同步的内容，为多世界子服所准备，不建议开启SyncAllProjectile，这1000个还是有点多了</span></span>
<span class="line"><span>产生原因是在其他世界的NPC和物品如果在新世界没有对于索引的对象顶替，那么对于客户端来说依旧可用(比如主城未强制开荒，玩家丢天顶出来然后切服，如果切的服没有任何物品或者刚好那个位置没有物品，那么客户端就可以去捡上个世界丢出的物品，NPC同理)，弹幕多销毁的也快，感觉不用多管。</span></span>
<span class="line"><span>感觉这样应该交给多世界端处理，而不是新世界全同步</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>【ItemTrasnfrom.json】</span></span>
<span class="line"><span>微光转换修改的配置文件，不包括微光分解</span></span>
<span class="line"><span>默认配置内容为原版微光特殊转换，谨慎删除</span></span>
<span class="line"><span>TransformInfos：可以写文本形式和json形式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>文本形式：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>源物品ID- 目标物品ID 进度ID</span></span>
<span class="line"><span>    &quot;1326 5335 22&quot;,</span></span>
<span class="line"><span>    &quot;779 5134 22&quot;,</span></span>
<span class="line"><span>    &quot;3031-5364 22&quot;,【“-”表示互相，比如3031(无底水桶)与5364(无底微光桶)在微光内属于互转】</span></span>
<span class="line"><span>    &quot;1533 1156 13&quot;,</span></span>
<span class="line"><span>    &quot;1534 1571 13&quot;,</span></span>
<span class="line"><span>    &quot;1535 1569 13&quot;,</span></span>
<span class="line"><span>    &quot;1536 1260 13&quot;,</span></span>
<span class="line"><span>    &quot;1537 1572 13&quot;,</span></span>
<span class="line"><span>    &quot;4714 4607 13&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>json形式 </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> &quot;src&quot;: 0,【丢入微光的物品ID】</span></span>
<span class="line"><span> &quot;dest&quot;: 0,【转换的物品ID】</span></span>
<span class="line"><span> &quot;pg&quot;: 0【进度ID】</span></span>
<span class="line"><span>}，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>进度ID如下：</span></span>
<span class="line"><span>0 无</span></span>
<span class="line"><span>1 史莱姆王</span></span>
<span class="line"><span>2 克眼</span></span>
<span class="line"><span>3 世吞、克脑</span></span>
<span class="line"><span>4 蜂王</span></span>
<span class="line"><span>5 骷髅王</span></span>
<span class="line"><span>6 鹿角怪</span></span>
<span class="line"><span>7 困难模式（肉山）</span></span>
<span class="line"><span>8 史莱姆皇后</span></span>
<span class="line"><span>9 任意机械BOSS</span></span>
<span class="line"><span>10 毁灭者</span></span>
<span class="line"><span>11 双子眼</span></span>
<span class="line"><span>12 机械骷髅王</span></span>
<span class="line"><span>13 世花</span></span>
<span class="line"><span>14 石巨人</span></span>
<span class="line"><span>15 猪鲨</span></span>
<span class="line"><span>16 光女</span></span>
<span class="line"><span>17 教徒</span></span>
<span class="line"><span>18 日耀柱</span></span>
<span class="line"><span>19 星云柱</span></span>
<span class="line"><span>20 星璇柱</span></span>
<span class="line"><span>21 星尘柱</span></span>
<span class="line"><span>22 月总</span></span>
<span class="line"><span>23 衰木</span></span>
<span class="line"><span>24 南瓜王</span></span>
<span class="line"><span>25 常绿尖叫怪</span></span>
<span class="line"><span>26 圣诞坦克</span></span>
<span class="line"><span>27 冰雪女王</span></span>
<span class="line"><span>28 四柱</span></span>
<span class="line"><span>29 血月小丑</span></span>
<span class="line"><span>30 哥布林入侵</span></span>
<span class="line"><span>31 海盗入侵</span></span>
<span class="line"><span>32 火星暴乱</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ClearIDs：</span></span>
<span class="line"><span>如果不想要一些原版的微光转换，可以把源物品ID写在这，会清除对应的转换</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>【ChestSpawn.json】</span></span>
<span class="line"><span>箱子生成的配置文件，默认配置内容为原版的三环境宝箱怪还有一个3金钥匙换普通宝箱怪，谨慎删除</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;NPCType&quot;: 475, 【腐化世界生成的NPCID】</span></span>
<span class="line"><span>    &quot;NpcStack&quot;: 1, 【NPC数量】</span></span>
<span class="line"><span>    &quot;Action&quot;: 0,</span></span>
<span class="line"><span>    &quot;ItemType&quot;: 3092,【物品ID】</span></span>
<span class="line"><span>    &quot;ItemStack&quot;: 1, 【物品数量】</span></span>
<span class="line"><span>    &quot;OnlyEqualItemStack&quot;: true,【仅当数量相同时启用】</span></span>
<span class="line"><span>    &quot;CrimsonNPCType&quot;: 475【猩红世界生成的NPC ID】</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>——————————————————</span></span>
<span class="line"><span>更新日志1.3</span></span>
<span class="line"><span>VBY.Common 有所更改，以修复插件热重载无法清理的问题，对于普通用户无差别</span></span>
<span class="line"><span>修复：</span></span>
<span class="line"><span>SpawnTravelNPCWhenStartDay(在每天开始的时候生成旅商的几率)使用随机数是SpawnMeteorRandomNum(自然生成陨石的几率)的问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>添加：</span></span>
<span class="line"><span>DisablePotDropBombProj</span></span>
<span class="line"><span>罐子不掉落炸弹射弹</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DisableTombstoneProjPlaceTombstoneAndDropTombstoneItem</span></span>
<span class="line"><span>禁止墓碑射弹放置墓碑并掉落墓碑物品</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HerbGrowIsRandom</span></span>
<span class="line"><span>药草生长改为随机,取消所有药草原本的生长和开花要求，</span></span>
<span class="line"><span>统一设置为随机判定，开花后不会再回到成熟阶段</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HerbGrowRandomNumWhenIsRandom 药草随机生长几率</span></span>
<span class="line"><span>仅当HerbGrowIsRandom为true时有效</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更新日志1.2.1</span></span>
<span class="line"><span>给指令/gcm，增加权限名：gcm.ctl</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更新日志1.2</span></span>
<span class="line"><span>MainConfig.json大部分内容改为中文，移动部分内容</span></span>
<span class="line"><span>做不到：</span></span>
<span class="line"><span>落星物品白天不消失（服务器客户端双判）</span></span>
<span class="line"><span>添加：</span></span>
<span class="line"><span>World.NoSpawnFallenStar 不生成落星</span></span>
<span class="line"><span>World.SpawnFallenStarAtDay 白天也生成落星</span></span>
<span class="line"><span>DisableSpawnLavaWhenNPCDead 禁止NPC死亡时生成熔岩</span></span>
<span class="line"><span>DisableHostileSnowBallFromGeneratingSnowBlock 禁止敌对雪球生成雪块</span></span>
<span class="line"><span>DisableHostileSnowBallDropItem 禁止敌对雪球掉落物品</span></span>
<span class="line"><span>DisableSandBallOfAntlionFromGeneratingSandBlock 禁止蚁狮的沙球生成沙块</span></span>
<span class="line"><span>SandBallOfAntlionCanDropItem 蚁狮的沙球会掉落物品</span></span>
<span class="line"><span></span></span>
<span class="line"><span>移动：</span></span>
<span class="line"><span>SpawnDukeFishronWhenAnglerDeadAtSeaZoneInWater -&gt; Extension.{name}</span></span>
<span class="line"><span>NotSendNetPacketIDs -&gt; Extension.{name}</span></span>
<span class="line"><span>Spawn.SpawnTravelNPCWhenStartDay -&gt; Extension.{name}</span></span>
<span class="line"><span>Spawn.SpawnTravelNPCWhenStartDayRandomNum -&gt; Extension.{name}</span></span>
<span class="line"><span>Spawn.Eye{*} -&gt; Spawn.EyeOfCthulhu.$1</span></span>
<span class="line"><span>Spawn.MechBoss{*} -&gt; Spawn.MechBoss.$1</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>更新日志1.1</span></span>
<span class="line"><span>添加：</span></span>
<span class="line"><span>DisableShimmerDecrafte 禁用微光分解</span></span>
<span class="line"><span>MaxTreeShakes 每天最大摇树数量</span></span>
<span class="line"><span>DisableShakeTreeDropBombProj 摇树不掉落炸弹</span></span>
<span class="line"><span>DisableToiletSpawnProj 禁止马桶生成射弹</span></span>
<span class="line"><span>MoondialCooldown 日晷冷却天数</span></span>
<span class="line"><span>SundialCooldown 月晷冷却天数</span></span>
<span class="line"><span>DividendOfStartSlimeRainRandomNum 开始史莱姆雨的随机数的被除数 设为负数理论上是可以禁掉史莱姆雨，未测试</span></span>
<span class="line"><span>SpawnSlimeKingWhenSlimeRainNeedKillCount 史莱姆雨时生成史莱姆王需要击杀的史莱姆数量</span></span>
<span class="line"><span>SpawnSlimeKingWhenSlimeRainAndDownedSlimeKingNeedKillCount 史莱姆王被击败后史莱姆雨时生成史莱姆王需要击杀的史莱姆数量</span></span>
<span class="line"><span>NoStopSlimeRainAfterKillSlimeKingWhenSlimeRaining 史莱姆雨期间杀死史莱姆王不停止史莱姆雨</span></span>
<span class="line"><span>World.InfectionTransmissionDistance 感染传播距离</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修复概率性事件设置为0时几率为100%的问题</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,13)])])}const h=n(p,[["render",e]]),k=JSON.parse('{"path":"/zh/guide/VBY.GameContentModify.html","title":"VBY.GameContentModify 游戏内容修改","lang":"zh-CN","frontmatter":{"description":"VBY.GameContentModify 游戏内容修改 作者: xuyuwtu 出处: MyPlgin 爆改Terraria的一些东西... 指令 配置 主配置路径 Config/VBY.GameContentModify/MainConfig.json 进度值 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VBY.GameContentModify 游戏内容修改\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/VBY.GameContentModify.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"VBY.GameContentModify 游戏内容修改"}],["meta",{"property":"og:description","content":"VBY.GameContentModify 游戏内容修改 作者: xuyuwtu 出处: MyPlgin 爆改Terraria的一些东西... 指令 配置 主配置路径 Config/VBY.GameContentModify/MainConfig.json 进度值 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]]},"git":{},"autoDesc":true,"filePathRelative":"zh/guide/VBY.GameContentModify.md"}');export{h as comp,k as data};
