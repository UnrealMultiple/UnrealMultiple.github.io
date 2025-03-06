import{_ as n,a,b as l,o as e}from"./app-BhlGNrBw.js";const p={};function o(i,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="damageruleloot-伤害规则掉落" tabindex="-1"><a class="header-anchor" href="#damageruleloot-伤害规则掉落"><span>DamageRuleLoot 伤害规则掉落</span></a></h1><ul><li>作者: 羽学、西江小子</li><li>出处: Tshock官方QQ群816771079</li><li>根据玩家输出百分比决定是否掉落宝藏袋，从伤害统计插件基础上进行二创。</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/reload</td><td style="text-align:center;">无</td><td style="text-align:center;">tshock.cfg.reload</td><td style="text-align:center;">重载配置文件</td></tr></tbody></table><hr><h2 id="主体配置注意事项" tabindex="-1"><a class="header-anchor" href="#主体配置注意事项"><span>主体配置注意事项</span></a></h2><p>1.玩家对BOSS的<code>伤害百分比</code>超过<code>低于多少不掉宝藏袋</code>的百分比才能捡到<code>宝藏袋</code></p><p>2.<code>参与伤害榜的非BOSS怪ID</code>的不会参与惩罚榜播报，其中<code>火星飞碟</code>和<code>荷兰飞盗船</code>已经过处理，切勿删除。</p><p>3.<code>惩罚榜</code>播报只关联有宝藏袋的BOSS</p><p>4.<code>监控暴击次数</code>会监控所有正在产生暴击的玩家，<code>监控转移伤害</code>为监控转移伤害状态，该功能为开发者专用，切勿开启，否则会刷屏。</p><p>5.<code>天顶新三王统计为美杜莎伤害榜</code>仅在天顶世界有效，如果关闭则会独立播报天顶世界中新三王的各别所受伤害，反之播报美杜莎整体伤害，正常世界不受该配置项影响。</p><p>6.<code>攻击机械吴克四肢造成真实伤害</code>开启后数值会超出BOSS血量，同时能对肢体造成血量伤害。</p><p>7.<code>攻击鲨鱼龙给猪鲨造成真实伤害</code>可以让其他玩家在清理鲨鱼龙时给主力启到实际的辅助作用（实打实的会扣猪鲨的血量），同样数值会超出BOSS血量</p><p>8.<code>攻击小鬼与饿鬼给肉山造成真伤</code>只在FTW和天顶种子生效，同样数值会超出BOSS血量</p><p>9.如不需要参与惩罚则可以关闭<code>是否惩罚</code></p><hr><h2 id="自定义转移伤害表注意事项" tabindex="-1"><a class="header-anchor" href="#自定义转移伤害表注意事项"><span>自定义转移伤害表注意事项</span></a></h2><p><code>自定义转移伤害表</code>在列表<code>[]</code>里面的最后，输入<code>,{}</code>然后使用<code>/reload</code>指令，可得到一份新格式（并预设好了参数）</p><p><code>转移伤害</code>只有在任何一个玩家，击中一次BOSS才会生效</p><p><code>怪物名称</code>根据<code>受伤怪物</code>的NPC ID 在使用<code>/reload</code>指令时自动写入，无需手动填写</p><p><code>停转生命</code>根据<code>受伤怪物</code>生命到达多少不再触发转移伤害</p><p><code>最低转伤</code>为触发转发伤害的最低下限</p><p><code>最高转伤</code>为拦截转发伤害的最高上限</p><p><code>涵盖暴击</code>根据对<code>转伤怪物</code>所有伤害转移,关闭后所有触发<code>暴击</code>的伤害都不会转移</p><p><code>播报排名</code>根据<code>受伤怪物</code>来提示排名</p><p><code>伤值进榜</code>把对<code>转伤怪物</code>造成的伤害值统计进输出排行榜</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;插件开关&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;是否惩罚&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;广告开关&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;广告内容&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;[i:3456][C/F2F2C7:插件开发] [C/BFDFEA:by]  羽学 [C/E7A5CC:|] [c/00FFFF:西江小子][i:3459]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;伤害榜播报&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;惩罚榜播报&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;低于多少不掉宝藏袋&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0.15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;天顶新三王统计为美杜莎伤害榜&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;忽略计算石巨人头部输出榜伤害&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;攻击机械吴克四肢造成真实伤害&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;攻击鲨鱼龙给猪鲨造成真实伤害&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;攻击小鬼与饿鬼给肉山造成真伤(仅FTW与天顶)&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;参与伤害榜的非BOSS怪ID&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">    243</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    541</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    473</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    474</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    475</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    564</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    565</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    576</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    577</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    471</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    491</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    618</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    620</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    621</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    622</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    623</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    216</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">    392</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;监控暴击次数&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;监控转移伤害&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;自定义转移伤害&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;自定义转移伤害表&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物名称&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;克苏鲁之眼&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;受伤怪物&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;停转血量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">600</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;最低转伤&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;最高转伤&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;涵盖暴击&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;播报排名&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;伤值进榜&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;转伤怪物&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        5</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物名称&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;史莱姆王&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;受伤怪物&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;停转血量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">800</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;最低转伤&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;最高转伤&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;涵盖暴击&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;播报排名&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;伤值进榜&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;转伤怪物&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        535</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;怪物名称&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;世纪之花&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;受伤怪物&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">262</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;停转血量&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;最低转伤&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;最高转伤&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;涵盖暴击&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;播报排名&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;伤值进榜&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;转伤怪物&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        264</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>v1.3.4</span></span>
<span class="line"><span>修复猪鲨伤害统计不开&quot;攻击鲨鱼龙给猪鲨造成真实伤害“不播报</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.1</span></span>
<span class="line"><span>对代码做了重复部分做成统一方法整理归纳</span></span>
<span class="line"><span>修复了自定义转移伤害表里的【涵盖暴击】配置项</span></span>
<span class="line"><span>给自定义转移伤害加了更多配置项：</span></span>
<span class="line"><span>【怪物名称】/reload时自动根据【受伤怪物】的ID写入</span></span>
<span class="line"><span>【最低转伤】触发转发伤害的最低下限</span></span>
<span class="line"><span>【最高转伤】触发转发伤害的最高上限</span></span>
<span class="line"><span>【播报排名】是否播报【受伤怪物】的输出排名</span></span>
<span class="line"><span>移除了【是否排除计算石巨人头部伤害】配置项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.3.0</span></span>
<span class="line"><span>给伤害榜标题加了渐变色</span></span>
<span class="line"><span>所有转移伤害都视为真伤，加入了自定义转移伤害表</span></span>
<span class="line"><span>加入了攻击小鬼与饿鬼给肉山造成真实伤害配置项</span></span>
<span class="line"><span>将机械骷髅王计入四肢伤害视为虚值改为造成真伤</span></span>
<span class="line"><span>给转移伤害加了雕像怪判断</span></span>
<span class="line"><span>给杀怪建表加了城镇npc、雕像怪、假人判断</span></span>
<span class="line"><span>自定义转移伤害表有自己的伤害统计逻辑（非真实血量数值）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.3</span></span>
<span class="line"><span>加入了对火星飞船的特殊处理</span></span>
<span class="line"><span>加入了美杜莎的判定与特殊处理</span></span>
<span class="line"><span>加入了开发者专用的暴击监控配置项</span></span>
<span class="line"><span>加入忽略石巨人头部伤害配置项</span></span>
<span class="line"><span>加入计算机械骷髅王四肢伤害配置项（虚标）</span></span>
<span class="line"><span>加入攻击鲨鱼龙给猪鲨造成真实伤害配置项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.2</span></span>
<span class="line"><span>再次重构《伤怪建表法》，使伤害更接近准确数值</span></span>
<span class="line"><span>加入对暴击连续统计播报与怯战人数播报</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.1</span></span>
<span class="line"><span>加入对暴击伤害计数法来归纳玩家的真实伤害</span></span>
<span class="line"><span>将广告内容放到了Config方便玩家自定义</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.2.0</span></span>
<span class="line"><span>重构全部代码，以枳的伤害统计插件作为基础二次开发</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对各别分体化的BOSS伤害输出做了特殊处理</span></span>
<span class="line"><span>美化了输出榜播报内容</span></span>
<span class="line"><span>加入了额外伤害榜NPC扩展项</span></span>
<span class="line"><span>加入了惩罚榜与伤害榜的独立开关配置项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.1.0</span></span>
<span class="line"><span>移除了大部分不需要的参数</span></span>
<span class="line"><span>把《玩家输出表》转换成了字典键值方便参考观看</span></span>
<span class="line"><span>优化了多BOSS场景下也能判断宝藏袋掉落</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.0.0</span></span>
<span class="line"><span>从伤害统计插件基础上进行二创的伤害规则掉落插件</span></span>
<span class="line"><span>新玩家进服会自动创建【玩家数据表】，如果玩家已经在配置里则会清空【伤害值】</span></span>
<span class="line"><span>玩家对BOSS的【伤害百分比】超过【领取条件】的百分比才能捡到【物品ID】内的物品</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,32)]))}const t=n(p,[["render",o],["__file","DamageRuleLoot.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/DamageRuleLoot.html","title":"DamageRuleLoot 伤害规则掉落","lang":"zh-CN","frontmatter":{"description":"DamageRuleLoot 伤害规则掉落 作者: 羽学、西江小子 出处: Tshock官方QQ群816771079 根据玩家输出百分比决定是否掉落宝藏袋，从伤害统计插件基础上进行二创。 指令 主体配置注意事项 1.玩家对BOSS的伤害百分比超过低于多少不掉宝藏袋的百分比才能捡到宝藏袋 2.参与伤害榜的非BOSS怪ID的不会参与惩罚榜播报，其中火星飞碟...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/DamageRuleLoot.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"DamageRuleLoot 伤害规则掉落"}],["meta",{"property":"og:description","content":"DamageRuleLoot 伤害规则掉落 作者: 羽学、西江小子 出处: Tshock官方QQ群816771079 根据玩家输出百分比决定是否掉落宝藏袋，从伤害统计插件基础上进行二创。 指令 主体配置注意事项 1.玩家对BOSS的伤害百分比超过低于多少不掉宝藏袋的百分比才能捡到宝藏袋 2.参与伤害榜的非BOSS怪ID的不会参与惩罚榜播报，其中火星飞碟..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DamageRuleLoot 伤害规则掉落\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"主体配置注意事项","slug":"主体配置注意事项","link":"#主体配置注意事项","children":[]},{"level":2,"title":"自定义转移伤害表注意事项","slug":"自定义转移伤害表注意事项","link":"#自定义转移伤害表注意事项","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/DamageRuleLoot.md"}');export{t as comp,r as data};
