import{_ as n,c as a,a as l,o as e}from"./app-BIPCnSct.js";const p={};function o(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="buildmaster-豆沙小游戏·建筑大师" tabindex="-1"><a class="header-anchor" href="#buildmaster-豆沙小游戏·建筑大师"><span>BuildMaster 豆沙小游戏·建筑大师</span></a></h1><ul><li>作者: [Bean_Paste]https://gitee.com/Crafty/projects,羽学</li><li>出处: [bbstr]https://www.bbstr.net/r/117/</li><li>这是一款全新的小游戏，基于MiniGamesAPI框架开发，它的玩法类似于MC中的小游戏(速建大比拼)。</li><li>玩家将需要在一定时间内完成相对应主题的建筑，时间到后将由每位玩家进行评分，</li><li>得分会在游戏结束后进行一个排名。快来发挥你的想象力，把建筑搞起来！</li></ul><blockquote><p>[!NOTE]<br> 需要安装前置插件：MiniGamesAPI (本仓库)</p></blockquote><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/bm list</td><td style="text-align:center;">bm.user</td><td style="text-align:center;">查看房间列表</td></tr><tr><td>/bm join 房间ID</td><td style="text-align:center;">bm.user</td><td style="text-align:center;">加入房间</td></tr><tr><td>/bm leave</td><td style="text-align:center;">bm.user</td><td style="text-align:center;">离开房间</td></tr><tr><td>/bm ready</td><td style="text-align:center;">bm.user</td><td style="text-align:center;">准备/未准备</td></tr><tr><td>/bm vote 主题</td><td style="text-align:center;">bm.user</td><td style="text-align:center;">投票主题</td></tr><tr><td>/bma list</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">列出所有房间</td></tr><tr><td>/bma create 房间名</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">创建房间</td></tr><tr><td>/bma remove 房间ID</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">移除指定房间</td></tr><tr><td>/bma start 房间ID</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">开启指定房间</td></tr><tr><td>/bma stop 房间ID</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">关闭指定房间</td></tr><tr><td>/bma smp 房间ID 人数</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">设置房间最大玩家数</td></tr><tr><td>/bma sdp 房间ID 人数</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">设置房间最小玩家数</td></tr><tr><td>/bma swt 房间ID 时间</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">设置等待时间(单位：秒)</td></tr><tr><td>/bma sgt 房间ID 时间</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">设置游戏时间(单位：秒)</td></tr><tr><td>/bma sst 房间ID 时间</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">设置评分时间(单位：秒)</td></tr><tr><td>/bma sp 1/2</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">选取点1/2</td></tr><tr><td>/bma sr 房间ID 主题</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">设置房间的游戏区域</td></tr><tr><td>/bma addt 房间ID 主题名</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">添加主题</td></tr><tr><td>/bma sh 房间ID 高度</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">设置小区域高</td></tr><tr><td>/bma sw 房间ID 宽度</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">设置小区域宽</td></tr><tr><td>/bma sg 房间ID 间隔</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">设置小区域间隔</td></tr><tr><td>/bma dp 玩家名</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">设置玩家的基础建造背包</td></tr><tr><td>/bma ep</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">设置评分套装</td></tr><tr><td>/bma reload</td><td style="text-align:center;">bm.admin</td><td style="text-align:center;">重载配置文件非房间文件</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/BuildMaster</p></blockquote><blockquote><p>Config.json</p></blockquote><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;UnlockAll&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;Range&quot;</span><span style="color:#D4D4D4;">: {},</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;BanItem&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>default.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;Name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;基础套&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;ID&quot;</span><span style="color:#D4D4D4;">: 2,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;UnlockedBiomeTorches&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;HappyFunTorchTime&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;UsingBiomeTorches&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;QuestsCompleted&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;HideVisuals&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;EyeColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: 4283128425,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: 105,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: 90,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: 75,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: 4283128425</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;SkinColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: 4284120575,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: 125,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: 90,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: 4284120575</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;ShoeColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: 4282149280,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: 160,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: 105,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: 60,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: 4282149280</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;UnderShirtColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: 4292326560,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: 160,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: 180,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: 215,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: 4292326560</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;ShirtColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: 4287407535,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: 175,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: 165,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: 140,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: 4287407535</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;HairColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: 4287407535,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: 175,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: 165,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: 140,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: 4287407535</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;PantsColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: 4287407535,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: 175,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: 165,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: 140,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: 255,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: 4287407535</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;Hair&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;SkinVariant&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;ExtraSlots&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;SpawnY&quot;</span><span style="color:#D4D4D4;">: -1,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;SpawnX&quot;</span><span style="color:#D4D4D4;">: -1,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;Exists&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;MaxMana&quot;</span><span style="color:#D4D4D4;">: 20,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;Mana&quot;</span><span style="color:#D4D4D4;">: 20,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;MaxHP&quot;</span><span style="color:#D4D4D4;">: 100,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;HP&quot;</span><span style="color:#D4D4D4;">: 100,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;HairDye&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;Items&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>eva.json</p></blockquote><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;Name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;评分套&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;ID&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;UnlockedBiomeTorches&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;HappyFunTorchTime&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;UsingBiomeTorches&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;QuestsCompleted&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;HideVisuals&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#569CD6;">    false</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;EyeColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4283128425</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">105</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">90</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">75</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">255</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4283128425</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;SkinColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4284120575</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">255</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">125</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">90</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">255</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4284120575</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;ShoeColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4282149280</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">160</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">105</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">60</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">255</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4282149280</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;UnderShirtColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4292326560</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">160</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">180</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">215</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">255</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4292326560</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;ShirtColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4287407535</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">175</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">165</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">140</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">255</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4287407535</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;HairColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4287407535</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">175</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">165</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">140</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">255</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4287407535</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;PantsColor&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;packedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4287407535</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;R&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">175</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;G&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">165</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;B&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">140</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;A&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">255</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;PackedValue&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">4287407535</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;Hair&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;SkinVariant&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;ExtraSlots&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;SpawnY&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;SpawnX&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">-1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;Exists&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;MaxMana&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">20</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;Mana&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">20</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;MaxHP&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;HP&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;HairDye&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;Items&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>rooms.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">[]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>1.0.5</span></span>
<span class="line"><span>修正不正确的GetString</span></span>
<span class="line"><span>1.0.3</span></span>
<span class="line"><span>i18n预定（这个好多，不想写啊）</span></span>
<span class="line"><span>1.0.2</span></span>
<span class="line"><span>完善卸载函数</span></span>
<span class="line"><span>1.0.1</span></span>
<span class="line"><span>补全修正卸载函数</span></span>
<span class="line"><span>1.0.0</span></span>
<span class="line"><span>记得开SSC，本插件运行在旅行模式服务器中（因为本插件使用到旅行的创造模式）  </span></span>
<span class="line"><span>设置好基本建筑套装（不用太复杂的,因为有创造模式 直接去里边拿东西），就可以设置评分套装了（插件内置默认 不用多余配置 只需要输入一条指令）  </span></span>
<span class="line"><span>玩家单独建筑区域 要计算好 加起来不要超过总区域的宽度（玩家建筑区域默认水平创建）不然是生成不了单独建筑区域的</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,19)]))}const c=n(p,[["render",o],["__file","BuildMaster.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/BuildMaster.html","title":"BuildMaster 豆沙小游戏·建筑大师","lang":"zh-CN","frontmatter":{"description":"BuildMaster 豆沙小游戏·建筑大师 作者: [Bean_Paste]https://gitee.com/Crafty/projects,羽学 出处: [bbstr]https://www.bbstr.net/r/117/ 这是一款全新的小游戏，基于MiniGamesAPI框架开发，它的玩法类似于MC中的小游戏(速建大比拼)。 玩家将需要在一定...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/BuildMaster.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"BuildMaster 豆沙小游戏·建筑大师"}],["meta",{"property":"og:description","content":"BuildMaster 豆沙小游戏·建筑大师 作者: [Bean_Paste]https://gitee.com/Crafty/projects,羽学 出处: [bbstr]https://www.bbstr.net/r/117/ 这是一款全新的小游戏，基于MiniGamesAPI框架开发，它的玩法类似于MC中的小游戏(速建大比拼)。 玩家将需要在一定..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BuildMaster 豆沙小游戏·建筑大师\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/BuildMaster.md"}');export{c as comp,r as data};