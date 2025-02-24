import{_ as n,a,b as l,o as e}from"./app-IX9aCo9D.js";const p={};function i(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="goodnight-宵禁" tabindex="-1"><a class="header-anchor" href="#goodnight-宵禁"><span>Goodnight 宵禁</span></a></h1><ul><li>作者: Jonesn、羽学、少司命</li><li>出处: 无</li><li>每天指定时间禁止进服或禁止召唤怪物（满足在线人数自动解禁召唤怪物）</li><li>本插件整合了白名单、宵禁、禁止召唤怪物等插件功能</li><li>在宵禁时间内根据在线人数来判断，是否允许召唤未击败或已击败的怪物</li><li>在满足在线人数和宵禁时间外的情况下：</li><li>通过NPC死亡事件对比在【禁止怪物表】里的怪物ID，通过击杀计数，自动赋值到【允许召唤表】</li><li>方便宵禁时间允许玩家召唤哪些怪物，避免单人推服务器进度的情况。</li><li>在线人数不满足【关闭禁怪所需人数】情况下：</li><li>可通过【开启召唤区】让所有在线玩家到达指定Region领地才能召唤出《允许召唤表》里的怪物</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/gn</td><td style="text-align:center;">/宵禁</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">查看宵禁指令菜单</td></tr><tr><td>/gn list</td><td style="text-align:center;">无</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">列出所有宵禁表</td></tr><tr><td>/reload</td><td style="text-align:center;">无</td><td style="text-align:center;">tshock.cfg.reload</td><td style="text-align:center;">重载配置文件</td></tr><tr><td>/gn on</td><td style="text-align:center;">无</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">开启或关闭宵禁功能</td></tr><tr><td>/gn kick</td><td style="text-align:center;">无</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">开启或关闭断连功能</td></tr><tr><td>/gn pos</td><td style="text-align:center;">无</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">开启或关闭召唤区</td></tr><tr><td>/gn all</td><td style="text-align:center;">无</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">开启或关闭召唤区需所有人在场</td></tr><tr><td>/gn clear</td><td style="text-align:center;">无</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">清理《允许召唤表》的怪物ID</td></tr><tr><td>/gn boss 次数</td><td style="text-align:center;">无</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">设置加入《允许召唤表》击杀要求次数</td></tr><tr><td>/gn reset 怪物ID</td><td style="text-align:center;">无</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">设置重置《允许召唤表》的怪物ID</td></tr><tr><td>/gn plr 人数</td><td style="text-align:center;">无</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">设置无视《禁止怪物表》在线人数</td></tr><tr><td>/gn add 或 del 怪物名字</td><td style="text-align:center;">无</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">添加或移除指定玩家到断连白名单</td></tr><tr><td>/gn plr add 或 del 玩家名</td><td style="text-align:center;">无</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">添加或删除《禁止怪物表》的指定怪物</td></tr><tr><td>/gn time a &amp; b 23:59</td><td style="text-align:center;">/gn time start &amp; stop</td><td style="text-align:center;">goodnight.admin</td><td style="text-align:center;">设置宵禁开启结束时间</td></tr><tr><td>/region define 召唤区</td><td style="text-align:center;">无</td><td style="text-align:center;">tshock.admin.region</td><td style="text-align:center;">使用TS自带/Region指令设置召唤区</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/宵禁.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;是否关闭宵禁&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;宵禁时间设置(禁怪/断连)&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;Start&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;00:00:00&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;Stop&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;23:59:59&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#032F62;">  &quot;宵禁是否断连&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;玩家进服拦截消息&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;当前为宵禁时间，无法加入游戏。&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;踢出玩家断连消息&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;到点了，晚安&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;断连白名单&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">    &quot;羽学&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;关闭禁怪所需人数(设1为关闭)&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;是否开启召唤区&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;只播报BOSS或非BOSS&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;关闭切换播报类型&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;召唤区的名字&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;召唤区&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;召唤区是否需要所有人&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;计入&#39;允许召唤表&#39;的击杀次数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;重置&#39;允许召唤表&#39;的怪物ID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">398</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;允许召唤表(根据禁怪表ID自动写入)&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">    4</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;禁止怪物生成表(NpcID)&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">    4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    13</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    14</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    35</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    36</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    113</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    114</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    125</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    126</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    127</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    128</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    129</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    130</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    131</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    134</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    135</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    136</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    222</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    245</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    246</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    247</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    248</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    249</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    262</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    266</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    370</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    396</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    397</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    398</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    400</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    439</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    440</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    422</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    493</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    507</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    517</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    636</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    657</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    668</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v2.7.3</span></span>
<span class="line"><span>修正一些广播格式</span></span>
<span class="line"><span>加入了清理《允许召唤表》的指令（/gn clear）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.7.2</span></span>
<span class="line"><span>修复检测到没有配置文件时，创建的配置没有参数</span></span>
<span class="line"><span>不会因为使用/reload重复写入或覆盖原来参数等问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.7.1</span></span>
<span class="line"><span>优化了对《允许召唤表》播报细节的空检查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.7.0</span></span>
<span class="line"><span>加入了播报类型切换</span></span>
<span class="line"><span>(用于修复禁怪表含有自然刷新怪的情况导致广播刷屏问题)</span></span>
<span class="line"><span>【只播报BOSS或非BOSS】为true则只播报BOSS生成事件，反之只播报非BOSS</span></span>
<span class="line"><span>【关闭切换播报类型】为true则恢复默认，false则启动上面这个判断</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.6.0</span></span>
<span class="line"><span>修改召唤区逻辑（不再关闭击杀计数）</span></span>
<span class="line"><span>通过击杀计数从《禁召表》获取ID添加到《可召表》</span></span>
<span class="line"><span>通过《可召表》的ID，允许《召唤区》内召唤。</span></span>
<span class="line"><span>添加了切换召唤区是否需要所有人判定:</span></span>
<span class="line"><span>启用则需所有在线人数到召唤区才能召唤出BOSS</span></span>
<span class="line"><span>或者有一人在召唤区，其他人在任意位置都可以召唤BOSS</span></span>
<span class="line"><span>可通过配置项自定义召唤区的region领地名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.5.0</span></span>
<span class="line"><span>优化了指令方法</span></span>
<span class="line"><span>加入了【允许召唤区】（用于切换2种逻辑的开关）</span></span>
<span class="line"><span>当开启功能时，则关闭原有击杀计数《允许召唤怪物表》功能</span></span>
<span class="line"><span>且所有在线玩家处于召唤区才能召唤怪物</span></span>
<span class="line"><span>否则需等宵禁时间过期或满足指定在线人数解禁</span></span>
<span class="line"><span>关闭后恢复原有宵禁逻辑</span></span>
<span class="line"><span>PS：需用TS自带的/Region指令创建名为“召唤区”的领地</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.4.0</span></span>
<span class="line"><span>加入了根据击杀《禁止怪物生成表》计数，</span></span>
<span class="line"><span>写入《允许召唤怪物表》与其相关指令</span></span>
<span class="line"><span>计数要求则在满足在线人数或不在宵禁时间段</span></span>
<span class="line"><span>由玩家主动击杀存在《禁止怪物生成表》的怪物自动计入（无需手写）</span></span>
<span class="line"><span>加个配置项与指令，控制击杀什么怪物ID来重置《允许召唤怪物表》</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.3.0</span></span>
<span class="line"><span>加入宵禁时间内可召唤已击败怪物</span></span>
<span class="line"><span>通过监听怪物死亡事件从禁止怪物表中</span></span>
<span class="line"><span>取值后比对赋值给“已击败进度限制”配置项实现</span></span>
<span class="line"><span>击败月总后自动清空“已击败进度限制”配置项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.2.1</span></span>
<span class="line"><span>修复移除内置配置项的“集合型”参数引起的指令覆盖参数问题</span></span>
<span class="line"><span>修复重启服务器覆盖配置参数的问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.2.0</span></span>
<span class="line"><span>彻底修复Reload覆盖写入怪物ID问题</span></span>
<span class="line"><span>给弹幕更新方法补充了权限检查</span></span>
<span class="line"><span>加入了/gn 指令方法控制配置项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.1.1</span></span>
<span class="line"><span>清除无用代码，给断开玩家连接加入全检查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.1.0</span></span>
<span class="line"><span>修复玩家加入服务器拦截方法</span></span>
<span class="line"><span>加入在线人数判断禁止召唤怪物</span></span>
<span class="line"><span>将配置项加以描述，并把禁怪物表整理为全进度BOSS的NpcID</span></span>
<span class="line"><span>修复每次/Reload都会写入一次内置怪物ID问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.0.0</span></span>
<span class="line"><span>加入了禁止召唤怪物逻辑</span></span>
<span class="line"><span>羽学适配了.net6.0并重构了大部分方法</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>共同维护的插件库：https:- <a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> 或 TShock官方群等</li></ul>`,11)]))}const d=n(p,[["render",i],["__file","GoodNight.html.vue"]]),o=JSON.parse('{"path":"/zh/guide/GoodNight.html","title":"Goodnight 宵禁","lang":"zh-CN","frontmatter":{"description":"Goodnight 宵禁 作者: Jonesn、羽学、少司命 出处: 无 每天指定时间禁止进服或禁止召唤怪物（满足在线人数自动解禁召唤怪物） 本插件整合了白名单、宵禁、禁止召唤怪物等插件功能 在宵禁时间内根据在线人数来判断，是否允许召唤未击败或已击败的怪物 在满足在线人数和宵禁时间外的情况下： 通过NPC死亡事件对比在【禁止怪物表】里的怪物ID，通过击...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/GoodNight.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"Goodnight 宵禁"}],["meta",{"property":"og:description","content":"Goodnight 宵禁 作者: Jonesn、羽学、少司命 出处: 无 每天指定时间禁止进服或禁止召唤怪物（满足在线人数自动解禁召唤怪物） 本插件整合了白名单、宵禁、禁止召唤怪物等插件功能 在宵禁时间内根据在线人数来判断，是否允许召唤未击败或已击败的怪物 在满足在线人数和宵禁时间外的情况下： 通过NPC死亡事件对比在【禁止怪物表】里的怪物ID，通过击..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Goodnight 宵禁\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/GoodNight.md"}');export{d as comp,o as data};
