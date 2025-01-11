import{_ as n,c as e,a as l,o as a}from"./app-0Q1DnpH9.js";const t={};function i(p,s){return a(),e("div",null,s[0]||(s[0]=[l(`<h1 id="servertools-服务器工具箱" tabindex="-1"><a class="header-anchor" href="#servertools-服务器工具箱"><span>ServerTools 服务器工具箱</span></a></h1><ul><li><strong>作者</strong>: 少司命</li><li><strong>出处</strong>: 无</li><li>该插件提供更多指令与功能方便管理服务器</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/clp [范围]</td><td style="text-align:center;">tshock.clear</td><td style="text-align:center;">清理弹幕但不清理玩家召唤物</td></tr><tr><td>/退出 或 /toolexit</td><td style="text-align:center;">servertool.query.exit</td><td style="text-align:center;">手机端玩家自踢</td></tr><tr><td>/查花苞 或 /scp</td><td style="text-align:center;">servertool.query.wall</td><td style="text-align:center;">查找地图上的花苞并添加到 Warp 里</td></tr><tr><td>/移除花苞 或 /rcp</td><td style="text-align:center;">servertool.query.wall</td><td style="text-align:center;">移除调 Warp 里的花苞</td></tr><tr><td>/自踢 或 /selfkick</td><td style="text-align:center;">servertool.user.kick</td><td style="text-align:center;">将自己踢出服务器</td></tr><tr><td>/自杀 或 /selfkill</td><td style="text-align:center;">servertool.user.kill</td><td style="text-align:center;">杀死自己</td></tr><tr><td>/ghost</td><td style="text-align:center;">servertool.user.ghost</td><td style="text-align:center;">切换到幽灵状态再次使用复原</td></tr><tr><td>/旅途难度 [难度]<code>master</code> <code>journey</code> <code>normal</code> <code>expert</code> 或 /journeydiff [difficulty mode]<code>master</code> <code>journey</code> <code>normal</code> <code>expert</code></td><td style="text-align:center;">servertool.set.journey</td><td style="text-align:center;">设置旅途模式难度</td></tr><tr><td>/在线排行 或 /onlinerank</td><td style="text-align:center;">servertool.user.online</td><td style="text-align:center;">查询玩家在线排行</td></tr><tr><td>/死亡排行 或 /deadrank</td><td style="text-align:center;">servertool.user.dead</td><td style="text-align:center;">查询玩家死亡排行</td></tr></tbody></table><h2 id="rest-api" tabindex="-1"><a class="header-anchor" href="#rest-api"><span>REST API</span></a></h2><table><thead><tr><th>路径</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/deathrank</td><td style="text-align:center;">查询死亡排行数据</td></tr><tr><td>/onlineDuration</td><td style="text-align:center;">查询在线排行数据</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/ServerTools.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;死亡延续&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;限制哨兵数量&quot;</span><span style="color:#D4D4D4;">: 20,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;限制召唤物数量&quot;</span><span style="color:#D4D4D4;">: 11,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;仅允许软核进入&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;是否设置世界模式&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;世界模式&quot;</span><span style="color:#D4D4D4;">: 2,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;限制发言长度&quot;</span><span style="color:#D4D4D4;">: 50,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;设置旅途模式难度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;旅途模式难度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;master&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;阻止未注册进入&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;禁止怪物捡钱&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;清理掉落物&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;死亡倒计时&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;阻止死亡角色进入&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;禁止双箱&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;禁止双饰品&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;禁止肉前第七格饰品&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;死亡倒计时格式&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;你还有{0}秒复活!&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;未注册阻止语句&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;未注册不能进入服务器&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;未注册启动服务器执行命令&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;开启NPC保护&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;NPC保护表&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    17,</span></span>
<span class="line"><span style="color:#D4D4D4;">    18,</span></span>
<span class="line"><span style="color:#D4D4D4;">    19,</span></span>
<span class="line"><span style="color:#D4D4D4;">    20,</span></span>
<span class="line"><span style="color:#D4D4D4;">    38,</span></span>
<span class="line"><span style="color:#D4D4D4;">    105,</span></span>
<span class="line"><span style="color:#D4D4D4;">    106,</span></span>
<span class="line"><span style="color:#D4D4D4;">    107,</span></span>
<span class="line"><span style="color:#D4D4D4;">    108,</span></span>
<span class="line"><span style="color:#D4D4D4;">    160,</span></span>
<span class="line"><span style="color:#D4D4D4;">    123,</span></span>
<span class="line"><span style="color:#D4D4D4;">    124,</span></span>
<span class="line"><span style="color:#D4D4D4;">    142,</span></span>
<span class="line"><span style="color:#D4D4D4;">    207,</span></span>
<span class="line"><span style="color:#D4D4D4;">    208,</span></span>
<span class="line"><span style="color:#D4D4D4;">    227,</span></span>
<span class="line"><span style="color:#D4D4D4;">    228,</span></span>
<span class="line"><span style="color:#D4D4D4;">    229,</span></span>
<span class="line"><span style="color:#D4D4D4;">    353,</span></span>
<span class="line"><span style="color:#D4D4D4;">    354,</span></span>
<span class="line"><span style="color:#D4D4D4;">    376,</span></span>
<span class="line"><span style="color:#D4D4D4;">    441,</span></span>
<span class="line"><span style="color:#D4D4D4;">    453,</span></span>
<span class="line"><span style="color:#D4D4D4;">    550,</span></span>
<span class="line"><span style="color:#D4D4D4;">    579,</span></span>
<span class="line"><span style="color:#D4D4D4;">    588,</span></span>
<span class="line"><span style="color:#D4D4D4;">    589,</span></span>
<span class="line"><span style="color:#D4D4D4;">    633,</span></span>
<span class="line"><span style="color:#D4D4D4;">    663,</span></span>
<span class="line"><span style="color:#D4D4D4;">    678,</span></span>
<span class="line"><span style="color:#D4D4D4;">    679,</span></span>
<span class="line"><span style="color:#D4D4D4;">    680,</span></span>
<span class="line"><span style="color:#D4D4D4;">    681,</span></span>
<span class="line"><span style="color:#D4D4D4;">    682,</span></span>
<span class="line"><span style="color:#D4D4D4;">    683,</span></span>
<span class="line"><span style="color:#D4D4D4;">    684,</span></span>
<span class="line"><span style="color:#D4D4D4;">    685,</span></span>
<span class="line"><span style="color:#D4D4D4;">    686,</span></span>
<span class="line"><span style="color:#D4D4D4;">    687,</span></span>
<span class="line"><span style="color:#D4D4D4;">    375,</span></span>
<span class="line"><span style="color:#D4D4D4;">    442,</span></span>
<span class="line"><span style="color:#D4D4D4;">    443,</span></span>
<span class="line"><span style="color:#D4D4D4;">    539,</span></span>
<span class="line"><span style="color:#D4D4D4;">    444,</span></span>
<span class="line"><span style="color:#D4D4D4;">    445,</span></span>
<span class="line"><span style="color:#D4D4D4;">    446,</span></span>
<span class="line"><span style="color:#D4D4D4;">    447,</span></span>
<span class="line"><span style="color:#D4D4D4;">    448,</span></span>
<span class="line"><span style="color:#D4D4D4;">    605,</span></span>
<span class="line"><span style="color:#D4D4D4;">    627,</span></span>
<span class="line"><span style="color:#D4D4D4;">    601,</span></span>
<span class="line"><span style="color:#D4D4D4;">    613</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;禁止多鱼线&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;浮漂列表&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    360,</span></span>
<span class="line"><span style="color:#D4D4D4;">    361,</span></span>
<span class="line"><span style="color:#D4D4D4;">    362,</span></span>
<span class="line"><span style="color:#D4D4D4;">    363,</span></span>
<span class="line"><span style="color:#D4D4D4;">    364,</span></span>
<span class="line"><span style="color:#D4D4D4;">    365,</span></span>
<span class="line"><span style="color:#D4D4D4;">    366,</span></span>
<span class="line"><span style="color:#D4D4D4;">    381,</span></span>
<span class="line"><span style="color:#D4D4D4;">    382,</span></span>
<span class="line"><span style="color:#D4D4D4;">    760,</span></span>
<span class="line"><span style="color:#D4D4D4;">    775,</span></span>
<span class="line"><span style="color:#D4D4D4;">    986,</span></span>
<span class="line"><span style="color:#D4D4D4;">    987,</span></span>
<span class="line"><span style="color:#D4D4D4;">    988,</span></span>
<span class="line"><span style="color:#D4D4D4;">    989,</span></span>
<span class="line"><span style="color:#D4D4D4;">    990,</span></span>
<span class="line"><span style="color:#D4D4D4;">    991,</span></span>
<span class="line"><span style="color:#D4D4D4;">    992,</span></span>
<span class="line"><span style="color:#D4D4D4;">    993</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">说明</th><th style="text-align:center;">可能的值</th></tr></thead><tbody><tr><td><code>死亡延续</code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">当玩家以死亡状态退出服务器，再次进入服务器需要等待死亡结束。</td><td style="text-align:center;">空</td></tr><tr><td><code>限制哨兵数量</code></td><td style="text-align:center;"><code>int32</code></td><td style="text-align:center;">限制玩家可召唤哨兵数量</td><td style="text-align:center;">空</td></tr><tr><td><code>限制召唤物数量</code></td><td style="text-align:center;"><code>int32</code></td><td style="text-align:center;">限制玩家可召唤召唤物数量</td><td style="text-align:center;">空</td></tr><tr><td><code>仅允许软核进入</code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;"></td><td style="text-align:center;">空</td></tr><tr><td><code>是否设置世界模式</code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">如果为 true 设置世界模式</td><td style="text-align:center;">空</td></tr><tr><td><code>设置世界模式</code></td><td style="text-align:center;"><code>int32</code></td><td style="text-align:center;">难度</td><td style="text-align:center;"><code>0</code>为旅途 <code>1</code>为普通 <code>2</code>为专家 <code>3</code>为大师</td></tr><tr><td><code>限制发言长度</code></td><td style="text-align:center;"><code>int32</code></td><td style="text-align:center;">发言长度限制</td><td style="text-align:center;">空</td></tr><tr><td><code>设置旅途模式难度</code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">为 true 时设置旅途难度</td><td style="text-align:center;">空</td></tr><tr><td><code>旅途模式难度</code></td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">难度</td><td style="text-align:center;"><code>master</code> <code>journey</code> <code>normal</code> <code>expert</code></td></tr><tr><td><code>阻止未注册进入 </code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">阻止未注册玩家进入服务器</td><td style="text-align:center;">空</td></tr><tr><td><code>禁止怪物捡钱 </code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">玩家死亡后怪物无法捡钱</td><td style="text-align:center;">空</td></tr><tr><td><code>清理掉落物</code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">清理玩家死亡后掉落物</td><td style="text-align:center;">空</td></tr><tr><td><code>阻止死亡角色进入</code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">禁止玩家以死亡状态进入服务器，需玩家进入单机模式结束死亡</td><td style="text-align:center;">空</td></tr><tr><td><code>死亡倒计时</code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">是否开启死亡倒计时</td><td style="text-align:center;">空</td></tr><tr><td><code>禁止双箱</code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">禁止同时打开两个箱子</td><td style="text-align:center;">空</td></tr><tr><td><code>禁止双饰品</code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">禁止重复装备相同的饰品</td><td style="text-align:center;">空</td></tr><tr><td><code>禁止肉前第七格饰品</code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">禁止肉前就有第七个饰品栏</td><td style="text-align:center;">空</td></tr><tr><td><code>死亡倒计时格式</code></td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">死亡倒计时格式</td><td style="text-align:center;"><code>{0}</code>剩下时间</td></tr><tr><td><code>未注册阻止语句</code></td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">阻止未注册玩家提示语</td><td style="text-align:center;">空</td></tr><tr><td><code>未注册启动服务器执行命令</code></td><td style="text-align:center;"><code>array&lt;string&gt;</code></td><td style="text-align:center;">当服务器启动且没有注册玩家时执行命令</td><td style="text-align:center;">空</td></tr><tr><td><code>开启NPC保护 </code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">开启NPC保护</td><td style="text-align:center;">空</td></tr><tr><td><code>NPC保护表</code></td><td style="text-align:center;"><code>array&lt;int&gt;</code></td><td style="text-align:center;">NPC保护表</td><td style="text-align:center;">空</td></tr><tr><td><code>禁止多鱼线 </code></td><td style="text-align:center;"><code>bool</code></td><td style="text-align:center;">阻止玩家卡多鱼线 Bug</td><td style="text-align:center;">空</td></tr><tr><td><code>浮漂列表</code></td><td style="text-align:center;"><code>array&lt;int&gt;</code></td><td style="text-align:center;">检测多鱼线浮漂列表</td><td style="text-align:center;">空</td></tr></tbody></table><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>v1.1.7.9</span></span>
<span class="line"><span>修复hook报错</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.7.8</span></span>
<span class="line"><span>也许根本不需要判Main.projectile[e.Index].minion，以及非SSC情况下检测到多饰品不尝试为玩家摘下</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.7.7</span></span>
<span class="line"><span>修复召唤物和哨兵检测问题，完成i18n英文</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.7.6</span></span>
<span class="line"><span>修正默认值和文档，i18n预备</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.1.7.5</span></span>
<span class="line"><span>添加配置限制召唤物数量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.7.4</span></span>
<span class="line"><span>完善卸载函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.1.7.0</span></span>
<span class="line"><span>修复手游恶魔之心格子不正确问题</span></span>
<span class="line"><span>使用_timer字段加快清除速度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.1.6.0</span></span>
<span class="line"><span>添加NPC保护</span></span>
<span class="line"><span>添加禁止肉前第七格饰品栏</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.1.5.0</span></span>
<span class="line"><span>给禁双饰品加入清理物品方法，避免重复刷控制台。</span></span>
<span class="line"><span>只检测Armor前10个格子</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.1.4.0</span></span>
<span class="line"><span>只检查当前装备页与饰品栏</span></span>
<span class="line"><span>给禁双饰品加免检权限：servertool.armor.white</span></span>
<span class="line"><span>修复空饰品时的误判</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.1.3.0</span></span>
<span class="line"><span>配置项加了【禁双饰品】</span></span>
<span class="line"><span>为兼容旧版添加2个别名命令</span></span>
<span class="line"><span>给/查花苞加了个字母命令：/scp</span></span>
<span class="line"><span>给/移除花苞加了个字母命令：/rcp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.1.2.0</span></span>
<span class="line"><span>给Tshock自带的/ai指令 加入了查询指定玩家的账户ID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.1.1.0</span></span>
<span class="line"><span>1.修复禁止怪物捡钱</span></span>
<span class="line"><span>2.移除了禁止快速放入箱子</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.1.0.0</span></span>
<span class="line"><span>添加双箱限制</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.0.0.4</span></span>
<span class="line"><span>修复使用Rest时无法使用ban指令的问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.0.0.3</span></span>
<span class="line"><span>修复死亡排行添加数据库报错</span></span>
<span class="line"><span>修复死亡倒计时</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,14)]))}const c=n(t,[["render",i],["__file","ServerTools.html.vue"]]),o=JSON.parse('{"path":"/zh/guide/ServerTools.html","title":"ServerTools 服务器工具箱","lang":"zh-CN","frontmatter":{"description":"ServerTools 服务器工具箱 作者: 少司命 出处: 无 该插件提供更多指令与功能方便管理服务器 指令 REST API 配置 配置文件位置：tshock/ServerTools.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin 次...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/ServerTools.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"ServerTools 服务器工具箱"}],["meta",{"property":"og:description","content":"ServerTools 服务器工具箱 作者: 少司命 出处: 无 该插件提供更多指令与功能方便管理服务器 指令 REST API 配置 配置文件位置：tshock/ServerTools.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin 次..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ServerTools 服务器工具箱\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"REST API","slug":"rest-api","link":"#rest-api","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/ServerTools.md"}');export{c as comp,o as data};
