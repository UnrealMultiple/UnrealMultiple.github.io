import{_ as e,c as i,a as s,o as a}from"./app-BIPCnSct.js";const n={};function t(d,l){return a(),i("div",null,l[0]||(l[0]=[s(`<h1 id="survivalcrisis-类among-us小游戏" tabindex="-1"><a class="header-anchor" href="#survivalcrisis-类among-us小游戏"><span>SurvivalCrisis 类among us小游戏</span></a></h1><ul><li>作者: GUZZ07, Cobalt-27(洞穴地形生成)和不愿被透露的最初策划者</li><li>这是一个用于TShock服务端的小游戏插件</li><li>需要搭配专门的地图和预设建筑用，也可以自行制作地图</li><li>开一盘小游戏需要至少四名玩家和游戏内一昼夜的时间</li><li>虽然能运行，但这个小游戏依旧是最初设想时的状态，很多地方缺少调整，因此实际可玩性并不太行</li></ul><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><ul><li>需要配置地图和预设建筑，建议直接将Presets文件夹的内容复制到目录下</li><li>启动服务器后，需要至少四名玩家进入准备区域(对于预设地图，可通过出生点左侧不远处传送器进入准备区域)，等待30s倒计时后开始一盘游戏</li><li>开始游戏后会进入夜晚，全员死亡或者一昼夜过后自动结束游戏并结算</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>名称</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/hotreload</td><td style="text-align:center;">无</td><td style="text-align:center;">sc.hotreload</td><td style="text-align:center;">热重载插件</td></tr><tr><td>/scd</td><td style="text-align:center;">无</td><td style="text-align:center;">sc.debug</td><td style="text-align:center;">几个用于debug的命令</td></tr><tr><td>/sc</td><td style="text-align:center;">无</td><td style="text-align:center;">sc.player</td><td style="text-align:center;">玩家用得到的命令</td></tr><tr><td>/sc pch &lt;聊天内容&gt;</td><td style="text-align:center;">无</td><td style="text-align:center;">sc.player</td><td style="text-align:center;">背板者玩家私聊</td></tr><tr><td>/sc task</td><td style="text-align:center;">无</td><td style="text-align:center;">sc.player</td><td style="text-align:center;">查看生存者任务(可选完成)</td></tr><tr><td>/sc st &lt;数字&gt;</td><td style="text-align:center;">无</td><td style="text-align:center;">sc.player</td><td style="text-align:center;">背板者商店(游戏中使用)</td></tr><tr><td>/sc rank</td><td style="text-align:center;">无</td><td style="text-align:center;">sc.player</td><td style="text-align:center;">查看分数排名</td></tr><tr><td>/sc score</td><td style="text-align:center;">无</td><td style="text-align:center;">sc.player</td><td style="text-align:center;">查看战绩</td></tr><tr><td>/sc nt</td><td style="text-align:center;">无</td><td style="text-align:center;">sc.player</td><td style="text-align:center;">更换称号(下一个)</td></tr><tr><td>/sc np</td><td style="text-align:center;">无</td><td style="text-align:center;">sc.player</td><td style="text-align:center;">更换前缀(下一个)</td></tr></tbody></table><h1 id="游戏玩法" tabindex="-1"><a class="header-anchor" href="#游戏玩法"><span>游戏玩法</span></a></h1><h2 id="背景故事" tabindex="-1"><a class="header-anchor" href="#背景故事"><span>背景故事</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>SurvivalCrisis——生存危机</span></span>
<span class="line"><span>你和你的同伴们不幸遭遇了一场空难</span></span>
<span class="line"><span>当你们苏醒时，发现自己正身处一块未知的大陆</span></span>
<span class="line"><span>所幸，营救的信号已经发出，接下来你们只需要等待</span></span>
<span class="line"><span>但要小心……在那黑暗之中，潜伏着某种可怖的存在</span></span>
<span class="line"><span>亦要小心，在你们尚处昏迷之时，你们中的一些人就已经被掉包了。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="游戏规则" tabindex="-1"><a class="header-anchor" href="#游戏规则"><span>游戏规则</span></a></h2><ul><li>游戏中有两种身份：“生存者”和“背板者”，玩家将在游戏开始时被随机分配身份</li><li>游戏至少需要4人才能进行，&quot;背板者&quot;数量占总人数的1/4(向下取整)</li><li>游戏开始时，时间将被调至19:30，并在一段时间后强制开启PVP；第二天16:30时，所有玩家将被传送回出生岛并强制关闭PVP，在19:30时，将自动召唤弱化机械骷髅王并强制开启PVP</li><li>游戏开始时，玩家将自动获取身份。“生存者”需要击败弱化机械骷髅王才能获得胜利；若所有&quot;生存者&quot;死亡，或是在第三天黎明带来之前未能击败骷髅王，则&quot;背板者&quot;获胜</li><li>在23min的游戏进程中，将会发生三次&quot;特殊事件&quot;，其名称和到来倒计时将会显示在屏幕右侧</li><li>屏幕右侧会显示当前生存者任务，将所需物品放入飞猪即可提交（不需要一次性全部提交）</li><li>装备”打折卡“时右侧会显示背板者商店，将所需物品一次性放入飞猪即可购买</li><li>在开启强制PVP前可自由组队，每队至多两人；boss战斗开启后则可以任意组队</li><li>在决战前死于非pvp手段可复活，但在决战中死亡则无法复活，被其他玩家击杀也无法复活</li></ul><h2 id="生存者" tabindex="-1"><a class="header-anchor" href="#生存者"><span>生存者</span></a></h2><ul><li>收集资源并尽量活下去</li><li>提交资源完成可选的集体任务，解锁更多功能</li><li>在探索途中，注意观察队友的行为，寻找背板者</li><li>在决战前做好战斗准备击败小boss</li><li>在天亮前击败boss获得胜利</li></ul><h2 id="背板者" tabindex="-1"><a class="header-anchor" href="#背板者"><span>背板者</span></a></h2><ul><li>伪装成生存者，混入他们之中</li><li>开局装备更优</li><li>找机会用pvp手段消灭落单的生存者</li><li>阻挠生存者击败boss</li><li>有单独的商店，可以购买特殊装备和道具</li></ul><h2 id="注" tabindex="-1"><a class="header-anchor" href="#注"><span>注</span></a></h2><ul><li>聊天存在距离限制，距离过远玩家无法交流</li><li>背板者装备幽灵眼镜后会进入专门的聊天频道，只有背板者可以看到</li><li>距离决战3分钟前，所有玩家会被传送回出生点，暂时强制关闭pvp</li><li>决战前有投票环节，用类似虫洞药水传送方式可投票淘汰一名玩家</li><li>决战前死于非玩家因素可复活，决战中死亡则无法复活</li><li>决战开始，所有人暴露身份</li><li>装备袖珍镜时攻击他人可揭露身份</li><li>死亡玩家可观战</li></ul><h1 id="地图" tabindex="-1"><a class="header-anchor" href="#地图"><span>地图</span></a></h1><p>游戏场地内，地图按高度分为7层(可在配置文件调节具体高度)，内容不固定，每次都是随机生成</p><h2 id="天空" tabindex="-1"><a class="header-anchor" href="#天空"><span>天空</span></a></h2><ul><li>位于出生点上方，有若干生成的空岛，内有会刷新装备的宝箱</li></ul><h2 id="地表" tabindex="-1"><a class="header-anchor" href="#地表"><span>地表</span></a></h2><ul><li>游戏开始时的出生点，出生地头上会生成一栋小楼，右侧会生成5栋房屋并附带5名固定的npc</li><li>地表会生成湖泊、树木和小山包，每个小山包一侧生成一条向下蔓延的通道</li><li>地表之下会生成些许宝箱和矿物</li></ul><h2 id="洞穴" tabindex="-1"><a class="header-anchor" href="#洞穴"><span>洞穴</span></a></h2><ul><li>位于地表下方，地形与原版地下类似，但不含遗迹</li><li>同样会生成宝箱和矿物(包括生命水晶)，但质量比地表层更高</li><li>存在少数上锁宝箱，需要从地狱层获得金钥匙方能开启，内含足以逆转战局的装备</li></ul><h2 id="空洞层" tabindex="-1"><a class="header-anchor" href="#空洞层"><span>空洞层</span></a></h2><ul><li>铺满了背景墙，但是依然会刷新特定怪物</li><li>需要依靠火箭靴、钩爪以地图中刷新的大量灯笼状结构四处行动</li><li>矿物和箱子生成于大大小小的“资源球”中</li><li>小资源球位置随机，大资源球位置固定但种类不固定</li><li>建筑岛不刷新资源</li></ul><h2 id="迷宫层" tabindex="-1"><a class="header-anchor" href="#迷宫层"><span>迷宫层</span></a></h2><ul><li>上下边界处有等距分布的固定数量出入口</li><li>迷宫通路不唯一</li><li>不生成矿物，但会生成大量宝箱，品质比上层更高</li><li>会生成固定数目个大房间，大房间中心有晶塔，使用镐子敲击可随机传送至另一大房间晶塔处</li><li>尽管铺满背景墙，但依然会刷怪</li></ul><h2 id="迷幻洞穴" tabindex="-1"><a class="header-anchor" href="#迷幻洞穴"><span>迷幻洞穴</span></a></h2><ul><li>地形同浅层洞穴，但宝箱和矿物等级更高、数量更多</li><li>会刷新特殊怪物美杜莎，击杀概率掉落关键道具袖珍镜</li></ul><h2 id="地狱层" tabindex="-1"><a class="header-anchor" href="#地狱层"><span>地狱层</span></a></h2><ul><li>大部分区域被灰烬块填充，随机刷新岩浆空洞，空洞中含被神庙砖包裹的宝箱</li><li>需要排掉岩浆或者装备抗岩浆道具以开启宝箱</li><li>宝箱概率开出金钥匙，用于开启洞穴层上锁宝箱</li></ul><h1 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明"><span>配置说明</span></a></h1><h2 id="目录说明" tabindex="-1"><a class="header-anchor" href="#目录说明"><span>目录说明</span></a></h2><p>在<code>TShock.Server.exe</code>所在目录下应当存在以下内容</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>.  </span></span>
<span class="line"><span>├── SurvivalCrisis/  </span></span>
<span class="line"><span>│   ├── CrisisConfig.json  地图配置文件  </span></span>
<span class="line"><span>│   ├── Islands/  </span></span>
<span class="line"><span>│   │   └── (天空岛的预设和部分建筑的预设)  </span></span>
<span class="line"><span>│   └── Spheres/  </span></span>
<span class="line"><span>│       └── (空洞层资源球的预设)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件项" tabindex="-1"><a class="header-anchor" href="#配置文件项"><span>配置文件项</span></a></h2><p>文件中包含固定个区域的上下左右边界，通过TShock自带的命令/pos获取</p><ul><li>Hall 开始一轮游戏时的出生地</li><li>Lobby 进入服务器后的大厅区域</li><li>WaitingZone 准备开始游戏的等待区域，4名义上玩家进入后开始倒计时</li><li>GamingZone 游戏开始后的区域，包含以下共7层</li><li>Islands 天空层</li><li>Surface 地表层</li><li>Cave 洞穴层</li><li>Spheres 空洞层</li><li>Maze 迷宫层</li><li>CaseEx 迷幻洞穴</li><li>Hell 地狱层</li></ul><p>还有一个条目<code>SpheresLarge</code>，用于配置空洞层的大资源球位置(以左上角为基准)，格式如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>  &quot;SpheresLarge&quot;: </span></span>
<span class="line"><span>  [</span></span>
<span class="line"><span>    { &quot;X&quot;: 456, &quot;Y&quot;: 1060 },</span></span>
<span class="line"><span>    { &quot;X&quot;: 801, &quot;Y&quot;: 1353 },</span></span>
<span class="line"><span>    { &quot;X&quot;: 1156, &quot;Y&quot;: 1111 },</span></span>
<span class="line"><span>    { &quot;X&quot;: 1503, &quot;Y&quot;: 1037 },</span></span>
<span class="line"><span>    { &quot;X&quot;: 1794, &quot;Y&quot;: 1367 },</span></span>
<span class="line"><span>    { &quot;X&quot;: 2133, &quot;Y&quot;: 1107 },</span></span>
<span class="line"><span>    { &quot;X&quot;: 2491, &quot;Y&quot;: 1303 },</span></span>
<span class="line"><span>    { &quot;X&quot;: 2882, &quot;Y&quot;: 1123 }</span></span>
<span class="line"><span>  ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预设建筑" tabindex="-1"><a class="header-anchor" href="#预设建筑"><span>预设建筑</span></a></h2><p>位于SurvivalCrisis下的Islands和Spheres文件夹内，包含了建筑、资源球和天空岛的预设</p><h2 id="islands" tabindex="-1"><a class="header-anchor" href="#islands"><span>islands</span></a></h2><ul><li><code>Hall.sec</code> 出生点小楼</li><li><code>NPCHouse.sec</code> 出生点旁NPC小屋</li><li><code>Pylon.sec</code> 迷宫层的晶塔</li><li><code>SkyIslandαV5.sec</code> 天空岛的预设，α为编号，生成时随机选择，V5在此处没有实际含义</li><li><code>SkyLakeX.sec</code> 未使用的天空湖泊预设</li></ul><h2 id="spheres" tabindex="-1"><a class="header-anchor" href="#spheres"><span>Spheres</span></a></h2><ul><li><code>XXXXLarge.sec</code> 大号资源球的预设，Large后缀是必须的，前面的随意</li><li><code>Huneger*.sec</code> 建筑岛的预设，Hunger前缀是必须的，*为编号，生成时随机选择</li><li><code>Light.sec</code> 灯笼预设，会在空洞层大量分布以辅助玩家移动</li><li>除此之外的均为小号资源球的预设，<code>Vx</code>后缀是必须的，x为箱子等级，可以叠加多种等级的箱子</li></ul><h1 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h1><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>该插件年代久远，并且未经太多测试，实际可玩性并不太行，并且存在许多问题</li></ul>`,50)]))}const c=e(n,[["render",t],["__file","SurvivalCrisis.html.vue"]]),p=JSON.parse('{"path":"/zh/guide/SurvivalCrisis.html","title":"SurvivalCrisis 类among us小游戏","lang":"zh-CN","frontmatter":{"description":"SurvivalCrisis 类among us小游戏 作者: GUZZ07, Cobalt-27(洞穴地形生成)和不愿被透露的最初策划者 这是一个用于TShock服务端的小游戏插件 需要搭配专门的地图和预设建筑用，也可以自行制作地图 开一盘小游戏需要至少四名玩家和游戏内一昼夜的时间 虽然能运行，但这个小游戏依旧是最初设想时的状态，很多地方缺少调整，因...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/SurvivalCrisis.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"SurvivalCrisis 类among us小游戏"}],["meta",{"property":"og:description","content":"SurvivalCrisis 类among us小游戏 作者: GUZZ07, Cobalt-27(洞穴地形生成)和不愿被透露的最初策划者 这是一个用于TShock服务端的小游戏插件 需要搭配专门的地图和预设建筑用，也可以自行制作地图 开一盘小游戏需要至少四名玩家和游戏内一昼夜的时间 虽然能运行，但这个小游戏依旧是最初设想时的状态，很多地方缺少调整，因..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SurvivalCrisis 类among us小游戏\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"背景故事","slug":"背景故事","link":"#背景故事","children":[]},{"level":2,"title":"游戏规则","slug":"游戏规则","link":"#游戏规则","children":[]},{"level":2,"title":"生存者","slug":"生存者","link":"#生存者","children":[]},{"level":2,"title":"背板者","slug":"背板者","link":"#背板者","children":[]},{"level":2,"title":"注","slug":"注","link":"#注","children":[]},{"level":2,"title":"天空","slug":"天空","link":"#天空","children":[]},{"level":2,"title":"地表","slug":"地表","link":"#地表","children":[]},{"level":2,"title":"洞穴","slug":"洞穴","link":"#洞穴","children":[]},{"level":2,"title":"空洞层","slug":"空洞层","link":"#空洞层","children":[]},{"level":2,"title":"迷宫层","slug":"迷宫层","link":"#迷宫层","children":[]},{"level":2,"title":"迷幻洞穴","slug":"迷幻洞穴","link":"#迷幻洞穴","children":[]},{"level":2,"title":"地狱层","slug":"地狱层","link":"#地狱层","children":[]},{"level":2,"title":"目录说明","slug":"目录说明","link":"#目录说明","children":[]},{"level":2,"title":"配置文件项","slug":"配置文件项","link":"#配置文件项","children":[]},{"level":2,"title":"预设建筑","slug":"预设建筑","link":"#预设建筑","children":[]},{"level":2,"title":"islands","slug":"islands","link":"#islands","children":[]},{"level":2,"title":"Spheres","slug":"spheres","link":"#spheres","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/SurvivalCrisis.md"}');export{c as comp,p as data};