import{_ as n,c as a,a as l,o as e}from"./app-0Q1DnpH9.js";const p={};function i(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="modifyweapons-修改武器插件" tabindex="-1"><a class="header-anchor" href="#modifyweapons-修改武器插件"><span>ModifyWeapons 修改武器插件</span></a></h1><ul><li>作者: 羽学</li><li>出处: Tshock官方QQ群816771079</li><li>这是一个Tshock服务器插件，主要用于：修改储存玩家武器数据并自动重读,可使用/mw指令给予玩家指定属性的物品</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/mw</td><td style="text-align:center;">无</td><td style="text-align:center;">mw.use</td><td style="text-align:center;">指令</td></tr><tr><td>/mw hand</td><td style="text-align:center;">/mw h</td><td style="text-align:center;">mw.use</td><td style="text-align:center;">获取手持物品信息开关</td></tr><tr><td>/mw join</td><td style="text-align:center;">/mw j</td><td style="text-align:center;">mw.use</td><td style="text-align:center;">切换进服重读开关</td></tr><tr><td>/mw list</td><td style="text-align:center;">/mw l</td><td style="text-align:center;">mw.use</td><td style="text-align:center;">列出所有修改物品</td></tr><tr><td>/mw read</td><td style="text-align:center;">无</td><td style="text-align:center;">mw.use</td><td style="text-align:center;">手动重读所有修改物品</td></tr><tr><td>/mw auto</td><td style="text-align:center;">/mw at</td><td style="text-align:center;">mw.amin</td><td style="text-align:center;">自动重读功能开关</td></tr><tr><td>/mw clear</td><td style="text-align:center;">/mw cr</td><td style="text-align:center;">mw.amin</td><td style="text-align:center;">自动清理功能开关</td></tr><tr><td>/mw open 玩家名</td><td style="text-align:center;">/mw op</td><td style="text-align:center;">mw.admin</td><td style="text-align:center;">切换别人进服重读状态</td></tr><tr><td>/mw add 玩家名 次数</td><td style="text-align:center;">无</td><td style="text-align:center;">mw.admin</td><td style="text-align:center;">添加重读次数</td></tr><tr><td>/mw del 玩家名</td><td style="text-align:center;">无</td><td style="text-align:center;">mw.admin</td><td style="text-align:center;">删除指定玩家数据</td></tr><tr><td>/mw set</td><td style="text-align:center;">/mw s</td><td style="text-align:center;">mw.admin</td><td style="text-align:center;">修改自己手持物品属性</td></tr><tr><td>/mw up</td><td style="text-align:center;">/mw update</td><td style="text-align:center;">mw.admin</td><td style="text-align:center;">修改自己手持物品属性</td></tr><tr><td>/mw give</td><td style="text-align:center;">/mw g</td><td style="text-align:center;">mw.admin</td><td style="text-align:center;">给指定玩家修改物品并建数据</td></tr><tr><td>/mw all</td><td style="text-align:center;">无</td><td style="text-align:center;">mw.admin</td><td style="text-align:center;">给所有玩家修改物品并建数据</td></tr><tr><td>/mw pw</td><td style="text-align:center;">/mw p</td><td style="text-align:center;">mw.admin</td><td style="text-align:center;">公用武器相关修改</td></tr><tr><td>/mw reads</td><td style="text-align:center;">/mw rds</td><td style="text-align:center;">mw.admin</td><td style="text-align:center;">帮所有人重读或开启进服重读</td></tr><tr><td>/mw reset</td><td style="text-align:center;">/mw rs</td><td style="text-align:center;">mw.admin</td><td style="text-align:center;">重置所有玩家数据</td></tr><tr><td>/reload</td><td style="text-align:center;">无</td><td style="text-align:center;">tshock.cfg.reload</td><td style="text-align:center;">重载配置文件</td></tr><tr><td>无</td><td style="text-align:center;">无</td><td style="text-align:center;">mw.cd</td><td style="text-align:center;">忽略冷却时间与次数的重读武器权限</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/修改武器.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;插件开关&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;初始重读次数&quot;</span><span style="color:#D4D4D4;">: 2,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;只给指定名字物品&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;给完物品的延迟指令&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;延迟指令毫秒&quot;</span><span style="color:#D4D4D4;">: 500.0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;延迟指令表&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;/mw read&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;自动重读&quot;</span><span style="color:#D4D4D4;">: 1,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;触发重读指令检测表&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;deal&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;shop&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;fishshop&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;fs&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;清理修改武器(丢出或放箱子会消失)&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;免清表&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    1</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;进服只给管理建数据&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;增加重读次数的冷却秒数&quot;</span><span style="color:#D4D4D4;">: 1800.0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;启用公用武器&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;同步数据秒数&quot;</span><span style="color:#D4D4D4;">: 15,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;公用武器播报标题&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;羽学开荒服 &quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;公用武器表&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;名称&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;火枪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;ID&quot;</span><span style="color:#D4D4D4;">: 96,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;数量&quot;</span><span style="color:#D4D4D4;">: 1,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;前缀&quot;</span><span style="color:#D4D4D4;">: 82,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;伤害&quot;</span><span style="color:#D4D4D4;">: 30,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;大小&quot;</span><span style="color:#D4D4D4;">: 1.0,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;击退&quot;</span><span style="color:#D4D4D4;">: 5.5,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;用速&quot;</span><span style="color:#D4D4D4;">: 10,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;攻速&quot;</span><span style="color:#D4D4D4;">: 15,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;弹幕&quot;</span><span style="color:#D4D4D4;">: 10,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;弹速&quot;</span><span style="color:#D4D4D4;">: 9.0,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;弹药&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;发射器&quot;</span><span style="color:#D4D4D4;">: 97,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;颜色&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;A&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;名称&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;夺命枪&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;ID&quot;</span><span style="color:#D4D4D4;">: 800,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;数量&quot;</span><span style="color:#D4D4D4;">: 1,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;前缀&quot;</span><span style="color:#D4D4D4;">: 82,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;伤害&quot;</span><span style="color:#D4D4D4;">: 35,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;大小&quot;</span><span style="color:#D4D4D4;">: 1.0,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;击退&quot;</span><span style="color:#D4D4D4;">: 2.5,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;用速&quot;</span><span style="color:#D4D4D4;">: 10,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;攻速&quot;</span><span style="color:#D4D4D4;">: 15,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;弹幕&quot;</span><span style="color:#D4D4D4;">: 5,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;弹速&quot;</span><span style="color:#D4D4D4;">: 6.0,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;弹药&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;发射器&quot;</span><span style="color:#D4D4D4;">: 97,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;颜色&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;R&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;G&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;B&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;A&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>v1.2.7.3</span></span>
<span class="line"><span>修复reload不重载配置文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.7.2</span></span>
<span class="line"><span>Database改utf-8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.7.1</span></span>
<span class="line"><span>修复空引用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.7</span></span>
<span class="line"><span>修复了/reload后导致玩家所有修改武器被公用武器覆盖的BUG</span></span>
<span class="line"><span>修复了&quot;公用武器已更新&quot;提示语,仅在数据未同步下会播报</span></span>
<span class="line"><span>加入了给完物品后的延时执行指令(支持up all give 子命令):</span></span>
<span class="line"><span>可避免编写RPG时使用:/mw g {0} 物品数据不能及时同步问题</span></span>
<span class="line"><span>不开启【进服只给管理建数据】情况下：</span></span>
<span class="line"><span>up all give 只需输1遍即可同步数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.6</span></span>
<span class="line"><span>以下功能由556牌服主定制</span></span>
<span class="line"><span>1. 为了方便编写RPG配置，给以下子命令加入玩家自己的占位符：{0}</span></span>
<span class="line"><span>up del give all</span></span>
<span class="line"><span>2. 给give与all子命令加入了“只给指定名字物品”配置项</span></span>
<span class="line"><span>开启时只会给指定的物品，反之给玩家数据库内存在的所有修改物品</span></span>
<span class="line"><span>3. 加入了公用武器，根据配置文件编写的物品数据自动给新玩家写入</span></span>
<span class="line"><span>当玩家开荒时捡到这些物品可以手动重读获取新数据，</span></span>
<span class="line"><span>公用武器的数据优先级＞使用指令给的物品数据优先级，</span></span>
<span class="line"><span>如果玩家没有数据时，默认会从配置文件加载一份到数据库内。</span></span>
<span class="line"><span>根据【同步数据秒数】配置项自动更新到玩家数据库内。</span></span>
<span class="line"><span>4. 修改/reload重载逻辑（仅在开启公用武器时有效）：</span></span>
<span class="line"><span>播报玩家数据与公用武器中配置数据的差异性</span></span>
<span class="line"><span>(玩家没拿过那个武器每次重载都会播报那个数值)</span></span>
<span class="line"><span>同时如果配置中没有该武器，重载后会从所有玩家数据移除该武器</span></span>
<span class="line"><span>5. &quot;公用武器播报标题&quot;配置项有任意内容时，会播报多以下信息：</span></span>
<span class="line"><span>xxxxx 公用武器已更新</span></span>
<span class="line"><span>6. 加入了新指令/mw pw（空值输入自带格式教学）：</span></span>
<span class="line"><span>格式1:/mw pw 物品名 da 100 ——修改或添加指定公用武器</span></span>
<span class="line"><span>格式2:/mw pw on与off 开启关闭公用武器</span></span>
<span class="line"><span>格式3:/mw pw del 物品名 删除公用武器配置中与所有玩家数据内的指定武器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.5</span></span>
<span class="line"><span>1. 加入了自动清理功能与其对应开关指令：\`/mw clear\`</span></span>
<span class="line"><span>该指令控制配置项 \`清理修改武器\`</span></span>
<span class="line"><span>并配备1个 \`免清表\` 配置项过滤使用。</span></span>
<span class="line"><span>拥有 \`mw.admin\` 管理权限的免疫清理</span></span>
<span class="line"><span>当玩家主动丢出物品或物品放入箱子时会清理修改武器（重读时掉落的不会清）</span></span>
<span class="line"><span>2. 加入了自动重读识别经济指令逻辑(对管理也有效):</span></span>
<span class="line"><span>当玩家发送字符以 \`/\` 和 \`.\` 开头时,且后续含有 \`触发重读指令检测表\` 内的关键词</span></span>
<span class="line"><span>检查玩家背包是否有修改武器,有则触发重读,避免玩家恶意购买物品刷新数值</span></span>
<span class="line"><span>3. 修复一些bug：</span></span>
<span class="line"><span>修复/mw open指令显示不正确</span></span>
<span class="line"><span>修复/mw all不会查找弹药栏有相同物品,则多给一份bug</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.4</span></span>
<span class="line"><span>优化播报与发送语,补充了修改参数的指令教学</span></span>
<span class="line"><span>移除自动更新的伤害检测逻辑（存在BUG）</span></span>
<span class="line"><span>修复了/mw all指令会重复给身上已有物品的BUG</span></span>
<span class="line"><span>使用/mw read重读时会显示物品身上重读的物品名字与数量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.3</span></span>
<span class="line"><span>加入了自动更新判断:玩家是否正在使用物品的前提条件</span></span>
<span class="line"><span>加入了自动更新判断:物品是否为修改的弹药属性</span></span>
<span class="line"><span>加入了物品重读判断:会查找玩家背包是否有对应修改物品才会更新</span></span>
<span class="line"><span>加入了物品颜色属性:格式为16进制不含#号如：/mw s hc CDEEEB</span></span>
<span class="line"><span>加入了离线修改逻辑:/mw all 与 g 与 up</span></span>
<span class="line"><span>无论玩家在线或离线:没数据则自动建,有数据则更新,在线就重读并直接给物品(除/mw up)</span></span>
<span class="line"><span>（/mw up需该玩家已经拥有修改物品前提下才能修改,已支持多参数组合修改）</span></span>
<span class="line"><span>优化/mw reads 命令:reads 1为帮所有在线玩家重读,reads 2为修改所有人进服重读</span></span>
<span class="line"><span>注意：词缀只有在玩家手上没拿着修改物品才会更新，</span></span>
<span class="line"><span>如果玩家在线且手上拿着修改物品，只会写入手上的词缀</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.2</span></span>
<span class="line"><span>整理优化了代码,补充信息反馈</span></span>
<span class="line"><span>支持修改前缀、物品数量</span></span>
<span class="line"><span>加入了自动重读功能（测试版）：/mw auto</span></span>
<span class="line"><span>开启时会关闭玩家重读次数机制(占用了玩家自己的重读冷却时间)</span></span>
<span class="line"><span>只在手持修改物品时伤害超过修改值+误判值，或者手上物品词缀不对时触发</span></span>
<span class="line"><span>将数据结构从Config搬移到tshock.sqlite存储</span></span>
<span class="line"><span>mw.admin有权享受无视重读次数</span></span>
<span class="line"><span>修复了mw.admin权限无法使用各别管理命令BUG：</span></span>
<span class="line"><span>写的时候用的:cmd.admin,结果忘记改了</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.1</span></span>
<span class="line"><span>加入了/mw all指令给所有在线玩家发指定物品并建立数据</span></span>
<span class="line"><span>玩家收到管理发送物品时会提示准确的修改数值与手动重读提醒</span></span>
<span class="line"><span>修正了/mw read 播报逻辑</span></span>
<span class="line"><span>声明up子命令详情：</span></span>
<span class="line"><span>/mw s 或 g 或 all都会先还原其他数值再改指定数值</span></span>
<span class="line"><span>而/mw up 玩家名字 物品名 ua 20，这能保留之前的数值直接改指定数值</span></span>
<span class="line"><span>物品属性参数详情（也可以用中文名）:</span></span>
<span class="line"><span>伤害:d da</span></span>
<span class="line"><span>大小:c sc</span></span>
<span class="line"><span>击退:k kb</span></span>
<span class="line"><span>用速:t ut</span></span>
<span class="line"><span>攻速:a ua</span></span>
<span class="line"><span>弹幕:h sh</span></span>
<span class="line"><span>弹速:s ss</span></span>
<span class="line"><span>作弹药:m am</span></span>
<span class="line"><span>用弹药:aa uaa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.0</span></span>
<span class="line"><span>重构代码，支持自定义多个武器物品</span></span>
<span class="line"><span>移除了数据库逻辑，改用配置文件来存数据</span></span>
<span class="line"><span>在开启“进服只给管理建数据”配置项时：</span></span>
<span class="line"><span>玩家数据只能用/mw g指令给了一个物品后才会为那个玩家创建数据</span></span>
<span class="line"><span>加入了更多指令：</span></span>
<span class="line"><span>当空值输入/mw s 或 g 或 up时会提示相对应的教学</span></span>
<span class="line"><span>（输入成功后会无视玩家自身重读次数，立即更新玩家游戏内物品状态）</span></span>
<span class="line"><span>使用/mw list支持翻页查找自己所有修改武器数值（一页1个）</span></span>
<span class="line"><span>使用/mw up指令时只会更新指定玩家物品的唯一参数，前提是必须有修改过的物品</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.0</span></span>
<span class="line"><span>加入了修改配置内的数据使用/reload也能同步到数据库中</span></span>
<span class="line"><span>如果误删了配置里的数据表,可以重启服务器它会从数据库写回配置文件里</span></span>
<span class="line"><span></span></span>
<span class="line"><span>加入了组合属性修改逻辑:</span></span>
<span class="line"><span>/mw set d 100 ss 20</span></span>
<span class="line"><span>/mw g 玩家名 物品名 d 100 ss 20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>加入了重读冷却机制与重读次数(免疫权限为:mw.cd)</span></span>
<span class="line"><span>第一次进服默认都有2次重读次数，而进服重读默认为关闭</span></span>
<span class="line"><span>当冷却达到Config预设的秒数时，自动加1次重读次数</span></span>
<span class="line"><span>根据重读次数可直接使用/mw read 手动重读武器数值</span></span>
<span class="line"><span>如果没有达到冷却或没有重读次数可截图自己的/mw菜单页面给管理</span></span>
<span class="line"><span>让管理在后台使用指令也可以帮玩家手动重读:</span></span>
<span class="line"><span>/mw g 玩家名字 武器名 数值…</span></span>
<span class="line"><span>（这个指令也会主动开启玩家进服重读功能）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修复了/mw del 不会删配置文件的BUG</span></span>
<span class="line"><span>修复了/mw open 不会同步配置文件的BUG</span></span>
<span class="line"><span>修复了重铸后再重读武器会吞武器前缀的BUG,</span></span>
<span class="line"><span>/mw g 会判断玩家是否手持自定义武器来获取准确前缀</span></span>
<span class="line"><span>（使用前建议让玩家先选中自定义武器，再让管理员用/mw g）</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.0.0</span></span>
<span class="line"><span>羽学版自定义武器含数据库</span></span>
<span class="line"><span>参考/mw指令菜单最下面一行的数值状态来修改</span></span>
<span class="line"><span>修改自己的手持物品：/mw s 200 1 4 20 12 938 10</span></span>
<span class="line"><span>修改并给予指定玩家的物品：/mw g 羽学 铜短剑 200 1 4 20 12 938 10</span></span>
<span class="line"><span>关于弹幕类武器：</span></span>
<span class="line"><span>有时候降低速度,反而弹幕频率会更密集</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,11)]))}const d=n(p,[["render",i],["__file","ModifyWeapons.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/ModifyWeapons.html","title":"ModifyWeapons 修改武器插件","lang":"zh-CN","frontmatter":{"description":"ModifyWeapons 修改武器插件 作者: 羽学 出处: Tshock官方QQ群816771079 这是一个Tshock服务器插件，主要用于：修改储存玩家武器数据并自动重读,可使用/mw指令给予玩家指定属性的物品 指令 配置 配置文件位置：tshock/修改武器.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https:/...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/ModifyWeapons.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"ModifyWeapons 修改武器插件"}],["meta",{"property":"og:description","content":"ModifyWeapons 修改武器插件 作者: 羽学 出处: Tshock官方QQ群816771079 这是一个Tshock服务器插件，主要用于：修改储存玩家武器数据并自动重读,可使用/mw指令给予玩家指定属性的物品 指令 配置 配置文件位置：tshock/修改武器.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https:/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ModifyWeapons 修改武器插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/ModifyWeapons.md"}');export{d as comp,r as data};
