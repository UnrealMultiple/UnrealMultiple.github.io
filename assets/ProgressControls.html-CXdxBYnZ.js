import{_ as n,c as l,a,o as e}from"./app-BIPCnSct.js";const o={};function p(t,s){return e(),l("div",null,s[0]||(s[0]=[a(`<h1 id="progresscontrol-计划书" tabindex="-1"><a class="header-anchor" href="#progresscontrol-计划书"><span>ProgressControl 计划书</span></a></h1><ul><li>作者: 枳、羽学</li><li>出处: <a href="https://github.com/skywhale-zhi/ProgressControl" target="_blank" rel="noopener noreferrer">github</a></li><li>这是一个Tshock服务器插件主要用于自动化：</li><li>重置服务器、重启服务器、执行命令、控制NPC进度、备份或删除文件</li><li>1.能够自动重置地图</li><li>可设置重置地图的大小、模式、种子、名称、地图存放目录、等功能</li><li>2.能自动重启地图</li><li>可按照当前的端口，地图数据来重启泰拉瑞亚服务器</li><li>3.能自动执行指令</li><li>自动执行你要设定的指令，支持原版和其他插件的</li><li>4.按时间来对Boss和NPC进行封禁，时间未到不可打，会自动消失</li><li>5.指令功能还可以删除或复制指定路径文件(进行清理与备份)</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/pco help</td><td style="text-align:center;">/pco</td><td style="text-align:center;">无</td><td style="text-align:center;">查看这个插件下的所有帮助指令</td></tr><tr><td>/pco now</td><td style="text-align:center;">无</td><td style="text-align:center;">pco.admin</td><td style="text-align:center;">将现在时间同步为：开服日期、上次重启日期和上次自动执行指令日期</td></tr><tr><td>/pco delFile</td><td style="text-align:center;">无</td><td style="text-align:center;">pco.admin</td><td style="text-align:center;">删除配置项中指定路径文件或文件夹</td></tr><tr><td>/pco copy</td><td style="text-align:center;">无</td><td style="text-align:center;">pco.admin</td><td style="text-align:center;">复制配置项中指定路径文件或者文件夹并重命名</td></tr><tr><td>/pco npc help</td><td style="text-align:center;">无</td><td style="text-align:center;">pco.npc</td><td style="text-align:center;">查看控制NPC进度的指令帮助</td></tr><tr><td>/pco com help</td><td style="text-align:center;">无</td><td style="text-align:center;">pco.com</td><td style="text-align:center;">查看执行指令的指令帮助</td></tr><tr><td>/pco reload help</td><td style="text-align:center;">无</td><td style="text-align:center;">pco.reload</td><td style="text-align:center;">查看自动重启的指令帮助</td></tr><tr><td>/pco reset help</td><td style="text-align:center;">无</td><td style="text-align:center;">pco.reset</td><td style="text-align:center;">查看自动重置的指令帮助</td></tr><tr><td>/pco mess</td><td style="text-align:center;">/pco view</td><td style="text-align:center;">拥有以上任意1个权限</td><td style="text-align:center;">来查看当前服务器的自动化计划，详细版</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/ProgressControl.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;开服日期&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2024-06-14T17:15:20.1069407+08:00&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;是否启用自动重置世界&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;多少小时后开始自动重置世界&quot;</span><span style="color:#D4D4D4;">: 176.0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置是否重置玩家数据&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置前是否删除地图&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;NPC死亡次数触发执行指令&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;398&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      3,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;pco reset hand&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;bc 击杀月总3次自动重置&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    ]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置前执行的指令&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;clall&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;zout all&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;wat clearall&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;pbreload&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;pco copy&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;礼包 重置&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;礼包重置&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;pvp reset&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;派系 reset&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;bwl reload&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;task clear&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;task reset&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;rpg reset&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;bank reset&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;deal reset&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;skill reset&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;level reset&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;replenreload&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;重读多重限制&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;重读阶段库存&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;clearbuffs all&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;重读物品超数量封禁&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;重读自定义怪物血量&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;重读禁止召唤怪物表&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;zresetallplayers&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;clearallplayersplus&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;reload&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置前删除哪些数据库表&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;HousingDistrict&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;TerrariaRobot死亡统计&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Warps&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;渡劫表&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;RememberedPos&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Zhipm_PlayerBackUp&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Zhipm_PlayerExtra&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Research&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;使用日志&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;区域执行指令&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Economics&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Economicsskill&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Regions&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;RPG&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Skill&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Permabuff&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Permabuffs&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Onlineduration&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Onlybaniplist&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Stronger&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Synctable&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;Task&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;TaskKillnpc&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;TaskTallk&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;OnlineDuration&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;WeaponPlusDBcostCoin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;WeaponPlusdbbasedOnEconomics&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置前删除哪些文件或文件夹&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;tshock/backups/*.bak&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;tshock/logs/*.log&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;tshock/Watcher/logs/*.log&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;tshock/检查背包/检查日志/*.txt&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置后的地图大小_小1_中2_大3&quot;</span><span style="color:#D4D4D4;">: 3,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置后的地图难度_普通0_专家1_大师2_旅途3&quot;</span><span style="color:#D4D4D4;">: 2,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置后的地图种子&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置后的地图名称&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;SFE4&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;你提供用于重置的地图名称&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;地图存放目录&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./world/&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置后的最多在线人数&quot;</span><span style="color:#D4D4D4;">: 32,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置后的端口&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;7777&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重置后的服务器密码&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;上次重启服务器的日期&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2024-06-14T17:15:20.1069667+08:00&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;是否启用自动重启服务器&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;多少小时后开始自动重启服务器&quot;</span><span style="color:#D4D4D4;">: 0.0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重启后的最多在线人数&quot;</span><span style="color:#D4D4D4;">: 32,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重启后的端口&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;7777&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重启后的服务器密码&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;重启前执行的指令&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;是否自动控制NPC进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;Boss封禁时长距开服日期&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;史莱姆王&quot;</span><span style="color:#D4D4D4;">: 0.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;克苏鲁之眼&quot;</span><span style="color:#D4D4D4;">: 0.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;世界吞噬者&quot;</span><span style="color:#D4D4D4;">: 24.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;克苏鲁之脑&quot;</span><span style="color:#D4D4D4;">: 24.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;蜂后&quot;</span><span style="color:#D4D4D4;">: 42.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;巨鹿&quot;</span><span style="color:#D4D4D4;">: 36.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;骷髅王&quot;</span><span style="color:#D4D4D4;">: 48.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;血肉墙&quot;</span><span style="color:#D4D4D4;">: 72.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;史莱姆皇后&quot;</span><span style="color:#D4D4D4;">: 84.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;双子魔眼&quot;</span><span style="color:#D4D4D4;">: 96.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;毁灭者&quot;</span><span style="color:#D4D4D4;">: 102.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;机械骷髅王&quot;</span><span style="color:#D4D4D4;">: 108.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;猪龙鱼公爵&quot;</span><span style="color:#D4D4D4;">: 120.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;世纪之花&quot;</span><span style="color:#D4D4D4;">: 132.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;光之女皇&quot;</span><span style="color:#D4D4D4;">: 138.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;石巨人&quot;</span><span style="color:#D4D4D4;">: 150.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;拜月教教徒&quot;</span><span style="color:#D4D4D4;">: 162.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;四柱&quot;</span><span style="color:#D4D4D4;">: 164.0,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;月亮领主&quot;</span><span style="color:#D4D4D4;">: 170.0</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;NPC封禁时长距开服日期_ID和单位小时&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;上次自动执行指令的日期&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2024-06-14T17:15:20.1069949+08:00&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;是否启用自动执行指令&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;多少小时后开始自动执行指令&quot;</span><span style="color:#D4D4D4;">: 0.0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;自动执行的指令_不需要加斜杠&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;执行指令时是否发广播&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;越权检查&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;是否关闭ServerLog写入功能(Windows千万别开)&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;指令功能_删除哪些文件或文件夹&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;指令功能_要复制的文件或文件夹&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;world/SFE4.wld&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;指令功能_复制目标目录&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;tshock/Zhipm/&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;指令功能_文件是否允许覆盖&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>更新日志</span></span>
<span class="line"><span>v1.0.8</span></span>
<span class="line"><span>完善卸载函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.0.7</span></span>
<span class="line"><span>修复新建配置没有内置参数问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.6 </span></span>
<span class="line"><span>修复/reload导致配置文件被覆盖问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.5</span></span>
<span class="line"><span>修复了Windows系统使用Bat脚本中goto start循环启动服务器时无法重置的问题</span></span>
<span class="line"><span>加入了/pco copy指令复制指定路径文件夹，并重命名源文件加上日期</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.4</span></span>
<span class="line"><span>适配了Linux系统与面板服的自动重置，</span></span>
<span class="line"><span>修复了用Bash脚本中while true;done循环启动服务器时无法重置的问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.3</span></span>
<span class="line"><span>加入了重置时删除指定文件，</span></span>
<span class="line"><span>加入了/pco delfile指令删除指定路径文件夹</span></span>
<span class="line"><span>根据击杀NPCID记数执行命令</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,11)]))}const c=n(o,[["render",p],["__file","ProgressControls.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/ProgressControls.html","title":"ProgressControl 计划书","lang":"zh-CN","frontmatter":{"description":"ProgressControl 计划书 作者: 枳、羽学 出处: github 这是一个Tshock服务器插件主要用于自动化： 重置服务器、重启服务器、执行命令、控制NPC进度、备份或删除文件 1.能够自动重置地图 可设置重置地图的大小、模式、种子、名称、地图存放目录、等功能 2.能自动重启地图 可按照当前的端口，地图数据来重启泰拉瑞亚服务器 3.能自...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/ProgressControls.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"ProgressControl 计划书"}],["meta",{"property":"og:description","content":"ProgressControl 计划书 作者: 枳、羽学 出处: github 这是一个Tshock服务器插件主要用于自动化： 重置服务器、重启服务器、执行命令、控制NPC进度、备份或删除文件 1.能够自动重置地图 可设置重置地图的大小、模式、种子、名称、地图存放目录、等功能 2.能自动重启地图 可按照当前的端口，地图数据来重启泰拉瑞亚服务器 3.能自..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ProgressControl 计划书\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/ProgressControls.md"}');export{c as comp,r as data};