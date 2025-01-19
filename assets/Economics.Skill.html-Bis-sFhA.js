import{_ as n,c as l,a,o as e}from"./app-BIPCnSct.js";const p={};function o(i,s){return e(),l("div",null,s[0]||(s[0]=[a(`<h1 id="economics-skill-技能插件" tabindex="-1"><a class="header-anchor" href="#economics-skill-技能插件"><span>Economics.Skill 技能插件</span></a></h1><ul><li>作者: 少司命</li><li>出处: 无</li><li>一个可以释放技能的插件</li></ul><blockquote><p>[!NOTE]<br> 需要安装前置插件：EconomicsAPI、Economics.RPG (本仓库) 使用AI样式功能可能会造成占用大量带宽量力而为</p></blockquote><h2 id="配置注意事项" tabindex="-1"><a class="header-anchor" href="#配置注意事项"><span>配置注意事项</span></a></h2><ul><li>触发模式中 <code>击杀</code> <code>击打</code> <code>主动</code> 三个模式，其中任意两个都无法组合，击杀 击打 本身就是主动的体现。</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/skill buy [技能索引]</td><td style="text-align:center;">economics.skill.use</td><td style="text-align:center;">购买技能</td></tr><tr><td>/skill del [技能索引]</td><td style="text-align:center;">economics.skill.use</td><td style="text-align:center;">解绑技能</td></tr><tr><td>/skill ms</td><td style="text-align:center;">economics.skill.use</td><td style="text-align:center;">查看已绑定技能</td></tr><tr><td>/skill delall</td><td style="text-align:center;">economics.skill.use</td><td style="text-align:center;">解绑手持武器的所有技能</td></tr><tr><td>/skill clear</td><td style="text-align:center;">economics.skill.use</td><td style="text-align:center;">解绑所有技能</td></tr><tr><td>/skill reset</td><td style="text-align:center;">economics.skill.admin</td><td style="text-align:center;">重置技能</td></tr><tr><td>/skill give [玩家] [技能索引]</td><td style="text-align:center;">economics.skill.admin</td><td style="text-align:center;">给予玩家技能(不安全的，此指令不会检查玩家技能情况)</td></tr><tr><td>/skill del [玩家] [技能索引]</td><td style="text-align:center;">economics.skill.admin</td><td style="text-align:center;">移除目标玩家技能</td></tr><tr><td>/skill clearh [玩家]</td><td style="text-align:center;">economics.skill.admin</td><td style="text-align:center;">移除玩家所有隐藏技能</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/Economics/Skill.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;购买主动技能最大数量&quot;</span><span style="color:#D4D4D4;">: 1,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;单武器绑定最大技能数量&quot;</span><span style="color:#D4D4D4;">: 1,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;被动绑定最大技能数量&quot;</span><span style="color:#D4D4D4;">: 4,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;禁止拉怪表&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;最大显示页&quot;</span><span style="color:#D4D4D4;">: 20,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;技能列表&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;名称&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;喊话&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;技能唯一&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;全服唯一&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;隐藏&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">//开启后无法被主动购买</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;技能价格&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制等级&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制进度&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;触发设置&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;触发模式&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;主动&quot;</span><span style="color:#6A9955;"> //触发模式 CD 主动 打击 击杀 死亡 血量 蓝量 冲刺 装备 跳跃</span></span>
<span class="line"><span style="color:#D4D4D4;">        ],</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;冷却&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;血量&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;蓝量&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;物品条件&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;伤害敌怪&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;伤害&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;范围&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;范围命令&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;命令&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;范围&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;治愈&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;血量&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;魔力&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;范围&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;清理弹幕&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;启用&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;范围&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;拉怪&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;X轴调整&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;Y轴调整&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;范围&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;传送&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;启用&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;X轴位置&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;Y轴位置&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;无敌&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;启用&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">//无敌帧，不保证完全无敌，算是我留的小坑，而且不想改，觉得这样挺好。</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;时长&quot;</span><span style="color:#D4D4D4;">: 2000</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;范围Buff&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;Buff列表&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;范围&quot;</span><span style="color:#D4D4D4;">: 0</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;弹幕&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;弹幕ID&quot;</span><span style="color:#D4D4D4;">: 132,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;伤害&quot;</span><span style="color:#D4D4D4;">: 40,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;击退&quot;</span><span style="color:#D4D4D4;">: 1.0,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;起始角度&quot;</span><span style="color:#D4D4D4;">: 2,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;X轴起始位置&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;Y轴起始位置&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;X轴速度&quot;</span><span style="color:#D4D4D4;">: 0.0,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;Y轴速度&quot;</span><span style="color:#D4D4D4;">: 0.0,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;自动方向&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;持续时间&quot;</span><span style="color:#D4D4D4;">: -1,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;AI&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">            0.0,</span></span>
<span class="line"><span style="color:#D4D4D4;">            0.0,</span></span>
<span class="line"><span style="color:#D4D4D4;">            0.0</span></span>
<span class="line"><span style="color:#D4D4D4;">          ],</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;AI样式&quot;</span><span style="color:#D4D4D4;">: 0, </span><span style="color:#6A9955;">//目前只有0有效</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;射速&quot;</span><span style="color:#D4D4D4;">: 10.0, </span></span>
<span class="line"><span style="color:#CE9178;">          &quot;锁定怪物配置&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;启用&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;弹幕锁定敌怪&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">, </span></span>
<span class="line"><span style="color:#CE9178;">            &quot;以锁定敌怪为中心&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;锁定血量最少&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">//不开启则锁定距离最近 锁定方式: Boss &gt; 小怪</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;范围&quot;</span><span style="color:#D4D4D4;">: 200</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;延迟&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">          &quot;弹幕循环&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">            &quot;配置&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">              {</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;次数&quot;</span><span style="color:#D4D4D4;">: 5,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;X递增&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;Y递增&quot;</span><span style="color:#D4D4D4;">: 0,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;角度递增&quot;</span><span style="color:#D4D4D4;">: 20,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;圆面半径&quot;</span><span style="color:#D4D4D4;">: 20, </span><span style="color:#F44747;">把老版本画圆挪过来了</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;反向发射&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;延迟&quot;</span><span style="color:#D4D4D4;">: 100,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;跟随玩家位置&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">                &quot;根据角度计算新的点&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#F44747;"> 配合画圆使用</span></span>
<span class="line"><span style="color:#D4D4D4;">              }</span></span>
<span class="line"><span style="color:#D4D4D4;">            ]</span></span>
<span class="line"><span style="color:#D4D4D4;">          }</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">      ]</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>V2.0.0.0</span></span>
<span class="line"><span>适配多货币</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.2.1.6</span></span>
<span class="line"><span>添加隐藏技能，隐藏技能无法被主动购买。</span></span>
<span class="line"><span>添加新指令:</span></span>
<span class="line"><span>/skill give 给玩家添加技能，此指令不是一个安全的指令，它不会检查玩家技能状态。</span></span>
<span class="line"><span>/skill del 这个指令可以删除目标玩家技能</span></span>
<span class="line"><span>/skill clearh 移除目标玩家身上的隐藏技能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.2.1.5</span></span>
<span class="line"><span>适配新 EconomicsAPI</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.1.0.1</span></span>
<span class="line"><span>添加 无敌帧，锁定怪物，AI样式，传送玩家，移除画圆配置，改用循环实现</span></span>
<span class="line"><span>修复: 弹幕AI无法生效，持续时间无法生效</span></span>
<span class="line"><span></span></span>
<span class="line"><span>V1.0.0.1</span></span>
<span class="line"><span>修复:物品消耗</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>国内社区 trhub.cn 或 TShock 官方群等</li></ul>`,14)]))}const c=n(p,[["render",o],["__file","Economics.Skill.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/Economics.Skill.html","title":"Economics.Skill 技能插件","lang":"zh-CN","frontmatter":{"description":"Economics.Skill 技能插件 作者: 少司命 出处: 无 一个可以释放技能的插件 [!NOTE] 需要安装前置插件：EconomicsAPI、Economics.RPG (本仓库) 使用AI样式功能可能会造成占用大量带宽量力而为 配置注意事项 触发模式中 击杀 击打 主动 三个模式，其中任意两个都无法组合，击杀 击打 本身就是主动的体现。 ...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/Economics.Skill.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"Economics.Skill 技能插件"}],["meta",{"property":"og:description","content":"Economics.Skill 技能插件 作者: 少司命 出处: 无 一个可以释放技能的插件 [!NOTE] 需要安装前置插件：EconomicsAPI、Economics.RPG (本仓库) 使用AI样式功能可能会造成占用大量带宽量力而为 配置注意事项 触发模式中 击杀 击打 主动 三个模式，其中任意两个都无法组合，击杀 击打 本身就是主动的体现。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Economics.Skill 技能插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"配置注意事项","slug":"配置注意事项","link":"#配置注意事项","children":[]},{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/Economics.Skill.md"}');export{c as comp,r as data};
