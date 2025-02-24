import{_ as s,a,b as l,o as i}from"./app-IX9aCo9D.js";const p={};function e(c,n){return i(),a("div",null,n[0]||(n[0]=[l(`<h1 id="challenger-挑战者模式" tabindex="-1"><a class="header-anchor" href="#challenger-挑战者模式"><span>Challenger 挑战者模式</span></a></h1><ul><li>作者: 星夜神花、枳、羽学</li><li>出处: <a href="https://github.com/skywhale-zhi/Challenger" target="_blank" rel="noopener noreferrer">github</a></li><li>这是一个Tshock服务器插件主要用于修改服务器BOSSAI的魔改与装备套装、饰品被动技能等</li><li>并使玩家受伤时会被抽出血包，血包会给附近的敌怪回血（boss优先），若玩家能拦截住血包就能给自己回血。</li><li>并允许通过修改配置文件控制所有怪物的血量倍数。由于作者丢失1.0.1版本源码，羽学将插件反编译进行二次开源与更新。</li><li></li><li>修改的套装增强效果有：</li><li>箭袋饰品：给予永久buff，启用无限弹药</li><li>挖矿套装：给予永久的挖矿、糖果冲刺buff，启用连锁挖矿能力</li><li>垂钓套装：给予永久的声纳、钓鱼、宝匣、镇定Buff​</li><li>忍者套：有四分之一概率闪避非致命伤害并释放烟雾​</li><li>化石套：在头上召唤一个琥珀光球，向敌人抛出极快的闪电矢​</li><li>暗影套：暴击时从玩家周围生成吞噬怪飞弹攻击周围敌人，冷却 1秒​</li><li>猩红套：暴击时从周围每个敌怪处吸取一定血量随着敌怪数目增多吸血量-1，冷却 5秒​</li><li>陨石套：暴击时恢复些许魔力，间歇地降下高伤害落星攻击敌人​</li><li>蜜蜂套：给予永久的蜂蜜增益；不间断地向四周撒蜂糖罐，玩家接触后回血并给予15秒蜂蜜增益；<br> 对玩家自身的治疗量略低于对其他玩家​</li><li>丛林套（远古钴）：间歇地从玩家周围生成伤害性的孢子​</li><li>死灵套：受到伤害时，向四周飞溅骨头；攻击时偶尔发射骨箭​</li><li>黑曜石套：因为盗贼的祝福，掉落物会尝试掉落两次(仅对非boss生物和非高血量怪物有效)​</li><li>熔岩套：免疫岩浆，给予永久的地狱火增益​</li><li>蜘蛛套：攻击时，给予敌人中毒和剧毒减益，按“up”键生成一个毒牙药水瓶，砸中敌人时爆炸&quot;​</li><li>水晶刺客套：当有敌人在附近时，自身释放出水晶碎片；若玩家被击中，释放出更强大的碎片​</li><li>寒霜套：你周围开始下雪​（冰雪女王掉落武器“北极”弹幕）</li><li>禁戒套：释放自动寻的灵焰魂火攻击附近的敌人​</li><li>神圣套（远古神圣）：击中敌人时召唤光与暗剑气，输入“/cf”切换剑气类型​</li><li>叶绿套：释放不精确的叶绿水晶矢，丛林之力给你更高的生命上限​</li><li>海龟套：增加60血上限，自动在附近释放爆炸碎片​</li><li>提基套：增加20血上限，在鞭子的轨迹上留下孢子​</li><li>甲虫套：增加60血上限，敌人的伤害的一部分会治疗周围的队友并给予buff；<br> 当装备圣骑士盾或其上级合成物时，近战武器伤害翻倍​</li><li>蘑菇套：射弹会不稳定地留下蘑菇​</li><li>阴森套：使用鞭子时，甩出蝙蝠或南瓜头​</li><li>幽魂套：根据头饰选择增加40血上限或80魔力上限；召唤 2个幽魂诅咒环绕玩家，向附近敌人攻击​</li><li>皇家凝胶：天空开始下凝胶小雨​</li><li>克苏鲁之盾：冲刺时获得一小段无敌时间，冷却12秒​</li><li>混乱之脑：输入“/cf”混乱周围所有敌怪​</li><li>蠕虫围巾：免疫寒冷，霜火，灵液和咒火​</li><li>收音机零件：输入“/cf”收听天气预报，在困难模式中可以收听世界先知预报​</li><li>蜜蜂背包：不间断地向四周扔出毒蜂罐，爆炸后释放一只蜜蜂​</li><li>挥发明胶：击中敌人有概率掉落碎魔晶，珍珠石，凝胶等​</li><li></li><li>【目前存在的问题】：增加的效果造成的伤害不会算作玩家造成的，但依然可以杀死怪物</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/cenable</td><td style="text-align:center;">无</td><td style="text-align:center;">challenger.enable</td><td style="text-align:center;">启用挑战模式，再次使用解除</td></tr><tr><td>/tips</td><td style="text-align:center;">无</td><td style="text-align:center;">challenger.tips</td><td style="text-align:center;">启用内容提示，如各种物品的文字提示，再次使用取消</td></tr><tr><td>/cf</td><td style="text-align:center;">无</td><td style="text-align:center;">无</td><td style="text-align:center;">用于切换或触发装备被动技能类型</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/ChallengerConfig.json</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;是否启用挑战模式&quot;: true,</span></span>
<span class="line"><span>  &quot;是否启用BOSS魔改&quot;: false,</span></span>
<span class="line"><span>  &quot;启用话痨模式&quot;: false,</span></span>
<span class="line"><span>  &quot;启用广播话痨模式&quot;: false,</span></span>
<span class="line"><span>  &quot;是否启用怪物吸血&quot;: true,</span></span>
<span class="line"><span>  &quot;怪物吸血比率&quot;: 0.25,</span></span>
<span class="line"><span>  &quot;怪物吸血比率对于Boss&quot;: 0.5,</span></span>
<span class="line"><span>  &quot;怪物回血上限：小怪&gt;1.5倍则会消失&quot;: 1.5,</span></span>
<span class="line"><span>  &quot;所有怪物血量倍数(仅开启魔改BOSS时生效)&quot;: 1.0,</span></span>
<span class="line"><span>  &quot;冲刺饰品类的闪避冷却时间/默认12秒&quot;: 5,</span></span>
<span class="line"><span>  &quot;蜜蜂背包是否扔毒蜂罐&quot;: true,</span></span>
<span class="line"><span>  &quot;蜜蜂背包首次弹幕ID&quot;: 183,</span></span>
<span class="line"><span>  &quot;蜜蜂背包首次弹幕伤害&quot;: 30,</span></span>
<span class="line"><span>  &quot;蜜蜂背包首次弹幕击退&quot;: 10.0,</span></span>
<span class="line"><span>  &quot;蜜蜂背包生成弹幕概率/分母值&quot;: 3,</span></span>
<span class="line"><span>  &quot;蜜蜂背包弹幕爆炸后的弹幕ID&quot;: 566,</span></span>
<span class="line"><span>  &quot;蜜蜂背包弹幕爆炸后的弹幕伤害&quot;: 30,</span></span>
<span class="line"><span>  &quot;蜜蜂背包弹幕爆炸后的弹幕击退&quot;: 0.0,</span></span>
<span class="line"><span>  &quot;蜜蜂背包二次弹幕间隔/帧&quot;: 240,</span></span>
<span class="line"><span>  &quot;化石套是否出琥珀光球&quot;: true,</span></span>
<span class="line"><span>  &quot;化石套的弹幕ID&quot;: 732,</span></span>
<span class="line"><span>  &quot;化石套的弹幕射程&quot;: 48.0,</span></span>
<span class="line"><span>  &quot;化石套的识敌范围&quot;: 3750.0,</span></span>
<span class="line"><span>  &quot;化石套的弹幕伤害&quot;: 25,</span></span>
<span class="line"><span>  &quot;化石套的弹幕击退&quot;: 8.0,</span></span>
<span class="line"><span>  &quot;化石套的弹幕间隔/帧&quot;: 10.0,</span></span>
<span class="line"><span>  &quot;丛林套是否环绕伤害孢子&quot;: true,</span></span>
<span class="line"><span>  &quot;丛林套弹幕射程/速率&quot;: 1.5,</span></span>
<span class="line"><span>  &quot;丛林套弹幕ID1&quot;: 569,</span></span>
<span class="line"><span>  &quot;丛林套弹幕ID2&quot;: 572,</span></span>
<span class="line"><span>  &quot;丛林套弹幕伤害&quot;: 35,</span></span>
<span class="line"><span>  &quot;丛林套弹幕击退&quot;: 8.0,</span></span>
<span class="line"><span>  &quot;丛林套弹幕间隔/帧&quot;: 1,</span></span>
<span class="line"><span>  &quot;忍者套是否会闪避&quot;: true,</span></span>
<span class="line"><span>  &quot;忍者套闪避概率随机数/0则100%闪避&quot;: 2,</span></span>
<span class="line"><span>  &quot;忍者套闪避释放的弹幕ID&quot;: 196,</span></span>
<span class="line"><span>  &quot;忍者套闪避释放的弹幕伤害&quot;: 0,</span></span>
<span class="line"><span>  &quot;忍者套闪避释放的弹幕击退&quot;: 0.0,</span></span>
<span class="line"><span>  &quot;暗影套的弹幕ID&quot;: 307,</span></span>
<span class="line"><span>  &quot;暗影套的弹幕伤害&quot;: 40,</span></span>
<span class="line"><span>  &quot;暗影套的弹幕击退&quot;: 2.0,</span></span>
<span class="line"><span>  &quot;暗影套的弹幕间隔/帧&quot;: 180,</span></span>
<span class="line"><span>  &quot;猩红套的弹幕ID&quot;: 305,</span></span>
<span class="line"><span>  &quot;猩红套的弹幕伤害&quot;: 0,</span></span>
<span class="line"><span>  &quot;猩红套的弹幕击退&quot;: 0.0,</span></span>
<span class="line"><span>  &quot;猩红套的弹幕间隔/帧&quot;: 300,</span></span>
<span class="line"><span>  &quot;流星套是否下落星&quot;: true,</span></span>
<span class="line"><span>  &quot;流星套的弹幕ID&quot;: 725,</span></span>
<span class="line"><span>  &quot;流星套的弹幕射程&quot;: 1000,</span></span>
<span class="line"><span>  &quot;流星套的弹幕速度/帧&quot;: 8.0,</span></span>
<span class="line"><span>  &quot;流星套的弹幕间隔/帧&quot;: 120,</span></span>
<span class="line"><span>  &quot;死灵套是否产生额外弹幕&quot;: true,</span></span>
<span class="line"><span>  &quot;死灵套受到攻击时的弹幕ID&quot;: 532,</span></span>
<span class="line"><span>  &quot;死灵套受到攻击时的弹幕伤害&quot;: 20,</span></span>
<span class="line"><span>  &quot;死灵套受到攻击时的弹幕击退&quot;: 5.0,</span></span>
<span class="line"><span>  &quot;死灵套的受伤弹幕间隔/帧&quot;: 1,</span></span>
<span class="line"><span>  &quot;死灵套攻击时的弹幕ID&quot;: 117,</span></span>
<span class="line"><span>  &quot;死灵套攻击时的弹幕伤害&quot;: 20,</span></span>
<span class="line"><span>  &quot;死灵套攻击时的弹幕击退&quot;: 2.0,</span></span>
<span class="line"><span>  &quot;死灵套的攻击弹幕间隔/帧&quot;: 1,</span></span>
<span class="line"><span>  &quot;黑曜石套是否盗窃双倍掉落物&quot;: true,</span></span>
<span class="line"><span>  &quot;黑曜石套盗窃的稀有等级&quot;: 2,</span></span>
<span class="line"><span>  &quot;水晶刺客套是否释放水晶碎片&quot;: true,</span></span>
<span class="line"><span>  &quot;水晶刺客套遇怪自动释放的弹幕ID&quot;: 90,</span></span>
<span class="line"><span>  &quot;水晶刺客套受伤释放的弹幕ID&quot;: 94,</span></span>
<span class="line"><span>  &quot;水晶刺客套弹幕间隔/帧&quot;: 50,</span></span>
<span class="line"><span>  &quot;蜘蛛套给NPC施加什么BUFF1&quot;: 70,</span></span>
<span class="line"><span>  &quot;蜘蛛套给NPC施加BUFF1时长&quot;: 180,</span></span>
<span class="line"><span>  &quot;蜘蛛套给NPC施加什么BUFF2&quot;: 20,</span></span>
<span class="line"><span>  &quot;蜘蛛套给NPC施加BUFF2时长&quot;: 360,</span></span>
<span class="line"><span>  &quot;禁戒套是否释放弹幕&quot;: true,</span></span>
<span class="line"><span>  &quot;禁戒套释放什么弹幕ID&quot;: 950,</span></span>
<span class="line"><span>  &quot;禁戒套的弹幕伤害&quot;: 125,</span></span>
<span class="line"><span>  &quot;禁戒套的弹幕频率/分母值&quot;: 15,</span></span>
<span class="line"><span>  &quot;禁戒套的弹幕范围&quot;: 300,</span></span>
<span class="line"><span>  &quot;寒霜套是否下弹幕&quot;: true,</span></span>
<span class="line"><span>  &quot;寒霜套释放什么弹幕ID&quot;: 297,</span></span>
<span class="line"><span>  &quot;寒霜套的弹幕伤害&quot;: 40,</span></span>
<span class="line"><span>  &quot;寒霜套的弹幕击退&quot;: 5.0,</span></span>
<span class="line"><span>  &quot;寒霜套的弹幕间隔/帧&quot;: 60,</span></span>
<span class="line"><span>  &quot;神圣套额外弹幕多少伤害/默认55%&quot;: 0.35,</span></span>
<span class="line"><span>  &quot;神圣套释放什么弹幕ID&quot;: 156,</span></span>
<span class="line"><span>  &quot;神圣套释放什么弹幕ID2&quot;: 157,</span></span>
<span class="line"><span>  &quot;神圣套的弹幕间隔/帧&quot;: 2,</span></span>
<span class="line"><span>  &quot;叶绿套加多少生命上限&quot;: 100,</span></span>
<span class="line"><span>  &quot;海龟套加多少生命上限&quot;: 120,</span></span>
<span class="line"><span>  &quot;海龟套的弹幕ID&quot;: 338,</span></span>
<span class="line"><span>  &quot;海龟套的弹幕伤害&quot;: 50,</span></span>
<span class="line"><span>  &quot;海龟套的弹幕间隔/默认3秒&quot;: 3,</span></span>
<span class="line"><span>  &quot;提基套加多少生命上限&quot;: 200,</span></span>
<span class="line"><span>  &quot;提基套的弹幕ID&quot;: 523,</span></span>
<span class="line"><span>  &quot;提基套的弹幕伤害&quot;: 1.2,</span></span>
<span class="line"><span>  &quot;提基套的弹幕间隔/帧&quot;: 2,</span></span>
<span class="line"><span>  &quot;阴森套是否出弹幕&quot;: true,</span></span>
<span class="line"><span>  &quot;阴森套白天出什么弹幕&quot;: 316,</span></span>
<span class="line"><span>  &quot;阴森套晚上出什么弹幕&quot;: 321,</span></span>
<span class="line"><span>  &quot;阴森套弹幕伤害/默认0.2&quot;: 0.8,</span></span>
<span class="line"><span>  &quot;阴森套的弹幕间隔/帧&quot;: 10,</span></span>
<span class="line"><span>  &quot;蘑菇套是否出弹幕&quot;: true,</span></span>
<span class="line"><span>  &quot;蘑菇套的弹幕ID&quot;: 819,</span></span>
<span class="line"><span>  &quot;蘑菇套的弹幕伤害倍数&quot;: 0.6,</span></span>
<span class="line"><span>  &quot;蘑菇套的弹幕击退&quot;: 1.14514,</span></span>
<span class="line"><span>  &quot;蘑菇套的弹幕间隔/帧&quot;: 1,</span></span>
<span class="line"><span>  &quot;甲虫套加多少生命上限&quot;: 180,</span></span>
<span class="line"><span>  &quot;甲虫套受到伤害给其他玩家的回血转换比例/默认30%&quot;: 0.5,</span></span>
<span class="line"><span>  &quot;甲虫套减多少回复量/默认为0&quot;: 15,</span></span>
<span class="line"><span>  &quot;甲虫套带骑士盾加多少弹幕伤害/默认90%&quot;: 1.5,</span></span>
<span class="line"><span>  &quot;甲虫套的弹幕ID&quot;: 866,</span></span>
<span class="line"><span>  &quot;甲虫套的治疗弹幕间隔/帧&quot;: 1,</span></span>
<span class="line"><span>  &quot;甲虫套的攻击弹幕间隔/帧&quot;: 1,</span></span>
<span class="line"><span>  &quot;皇家凝胶是否下物品雨&quot;: true,</span></span>
<span class="line"><span>  &quot;皇家凝胶物品雨表&quot;: [</span></span>
<span class="line"><span>    75</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;挥发凝胶击中敌怪掉落物品表&quot;: [</span></span>
<span class="line"><span>    72,</span></span>
<span class="line"><span>    75,</span></span>
<span class="line"><span>    501,</span></span>
<span class="line"><span>    502</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;幽灵套加多少生命和魔力上限&quot;: 80,</span></span>
<span class="line"><span>  &quot;幽灵兜帽是否出幽灵弹幕&quot;: true,</span></span>
<span class="line"><span>  &quot;幽灵面具是否出幽灵弹幕&quot;: false,</span></span>
<span class="line"><span>  &quot;幽灵套的弹幕ID&quot;: 79,</span></span>
<span class="line"><span>  &quot;幽灵套的弹幕伤害倍数&quot;: 50.0,</span></span>
<span class="line"><span>  &quot;幽灵套的弹幕击退&quot;: 0.0,</span></span>
<span class="line"><span>  &quot;幽灵套环绕的弹幕ID&quot;: 299,</span></span>
<span class="line"><span>  &quot;幽灵套环绕的弹幕伤害&quot;: 0,</span></span>
<span class="line"><span>  &quot;幽灵套环绕的弹幕击退&quot;: 0.0,</span></span>
<span class="line"><span>  &quot;幽灵套的攻击弹幕间隔/帧&quot;: 2,</span></span>
<span class="line"><span>  &quot;幽灵套给什么永久BUFF&quot;: [</span></span>
<span class="line"><span>    6,</span></span>
<span class="line"><span>    7,</span></span>
<span class="line"><span>    181,</span></span>
<span class="line"><span>    178</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;蜜蜂套是否释放弹幕&quot;: true,</span></span>
<span class="line"><span>  &quot;蜜蜂套的BUFF时长/帧&quot;: 150,</span></span>
<span class="line"><span>  &quot;蜜蜂套的弹幕间隔/帧&quot;: 120,</span></span>
<span class="line"><span>  &quot;蜜蜂套给什么永久BUFF&quot;: [</span></span>
<span class="line"><span>    48</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;狱岩套给什么永久BUFF&quot;: [</span></span>
<span class="line"><span>    1,</span></span>
<span class="line"><span>    172</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;钓鱼套包含哪些永久BUFF&quot;: [</span></span>
<span class="line"><span>    106,</span></span>
<span class="line"><span>    123,</span></span>
<span class="line"><span>    121,</span></span>
<span class="line"><span>    122</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;挖矿套是否开启连锁挖矿&quot;: true,</span></span>
<span class="line"><span>  &quot;挖矿套给什么永久BUFF&quot;: [</span></span>
<span class="line"><span>    104,</span></span>
<span class="line"><span>    192</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;挖矿套连锁图格ID表&quot;: [</span></span>
<span class="line"><span>    6,</span></span>
<span class="line"><span>    7,</span></span>
<span class="line"><span>    8,</span></span>
<span class="line"><span>    9,</span></span>
<span class="line"><span>    166,</span></span>
<span class="line"><span>    167,</span></span>
<span class="line"><span>    168,</span></span>
<span class="line"><span>    169,</span></span>
<span class="line"><span>    22,</span></span>
<span class="line"><span>    221,</span></span>
<span class="line"><span>    222,</span></span>
<span class="line"><span>    223,</span></span>
<span class="line"><span>    224,</span></span>
<span class="line"><span>    232,</span></span>
<span class="line"><span>    37,</span></span>
<span class="line"><span>    404,</span></span>
<span class="line"><span>    408,</span></span>
<span class="line"><span>    48,</span></span>
<span class="line"><span>    481,</span></span>
<span class="line"><span>    482,</span></span>
<span class="line"><span>    483,</span></span>
<span class="line"><span>    56,</span></span>
<span class="line"><span>    571,</span></span>
<span class="line"><span>    58,</span></span>
<span class="line"><span>    63,</span></span>
<span class="line"><span>    64,</span></span>
<span class="line"><span>    65,</span></span>
<span class="line"><span>    66,</span></span>
<span class="line"><span>    67,</span></span>
<span class="line"><span>    68,</span></span>
<span class="line"><span>    107,</span></span>
<span class="line"><span>    108,</span></span>
<span class="line"><span>    111,</span></span>
<span class="line"><span>    123,</span></span>
<span class="line"><span>    178,</span></span>
<span class="line"><span>    204,</span></span>
<span class="line"><span>    211,</span></span>
<span class="line"><span>    229,</span></span>
<span class="line"><span>    230</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;蠕虫围巾免疫buff是否开启&quot;: false,</span></span>
<span class="line"><span>  &quot;蠕虫围巾遍历前几个buff&quot;: 22,</span></span>
<span class="line"><span>  &quot;蠕虫围巾免疫DeBuff列表/遇到会清空所有BUFF&quot;: [</span></span>
<span class="line"><span>    39,</span></span>
<span class="line"><span>    69,</span></span>
<span class="line"><span>    44,</span></span>
<span class="line"><span>    46</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;蠕虫围巾给什么永久BUFF&quot;: [</span></span>
<span class="line"><span>    5,</span></span>
<span class="line"><span>    114,</span></span>
<span class="line"><span>    215</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;箭袋补充开关&quot;: true,</span></span>
<span class="line"><span>  &quot;箭袋补充时间/帧&quot;: 20,</span></span>
<span class="line"><span>  &quot;箭袋补充物品数量&quot;: 99,</span></span>
<span class="line"><span>  &quot;箭袋补充物品ID&quot;: [</span></span>
<span class="line"><span>    40,</span></span>
<span class="line"><span>    41,</span></span>
<span class="line"><span>    47,</span></span>
<span class="line"><span>    51,</span></span>
<span class="line"><span>    516,</span></span>
<span class="line"><span>    545,</span></span>
<span class="line"><span>    988,</span></span>
<span class="line"><span>    1235,</span></span>
<span class="line"><span>    1334,</span></span>
<span class="line"><span>    1341,</span></span>
<span class="line"><span>    3003,</span></span>
<span class="line"><span>    3568,</span></span>
<span class="line"><span>    5348</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;箭袋给什么永久BUFF&quot;: [</span></span>
<span class="line"><span>    16,</span></span>
<span class="line"><span>    93,</span></span>
<span class="line"><span>    112</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>更新日志</span></span>
<span class="line"><span>1.1.7</span></span>
<span class="line"><span>添加西班牙语翻译(By itsFrankV22)</span></span>
<span class="line"><span>添加英文文档(By Hexagonforce12)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.1.6</span></span>
<span class="line"><span>添加英文翻译</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.1.5</span></span>
<span class="line"><span>多语言支持</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.1.4</span></span>
<span class="line"><span>修复ServerLeave Null报错</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.1.3</span></span>
<span class="line"><span>补全卸载函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.1.2 fix</span></span>
<span class="line"><span>尝试修复以下三个方法引起的空引用</span></span>
<span class="line"><span>OnGameUpdate/WormScarf/OnServerLeave</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.1.1</span></span>
<span class="line"><span>给【皇家凝胶】加了随机生成概率与间隔</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.1.0</span></span>
<span class="line"><span>给以下套装加入了【弹幕间隔】的配置项：</span></span>
<span class="line"><span>蜜蜂背包、化石套、丛林套、暗影套、</span></span>
<span class="line"><span>猩红套、流星套、水晶刺客套、寒霜套、神圣套</span></span>
<span class="line"><span>海龟套、提基套、阴森套、蘑菇矿套、甲虫套、幽灵套</span></span>
<span class="line"><span>调整挑战者模式套装默认配置数值，考虑化石套弹幕的特殊性额外加入个【识敌范围】</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.9</span></span>
<span class="line"><span>修复玩家穿套装时退服会刷血量上限BUG</span></span>
<span class="line"><span>详情看1.0.5更新日志，羽学注释掉了ServerLeave方法引起的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.8</span></span>
<span class="line"><span>修复了幽灵套永久BUFF</span></span>
<span class="line"><span>加入了箭袋饰品加强，启用无限弹药</span></span>
<span class="line"><span>佩戴箭袋类饰品攻击时自动重置弹药数量，无法进行分堆（避免玩家利用特性刷物品）</span></span>
<span class="line"><span>添加了蠕虫围巾/幽灵套永久BUFF、禁戒套的弹幕频率/范围、甲虫套的弹幕ID</span></span>
<span class="line"><span>修改了大量默认的配置项参数（主要是肉后的套装）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.7</span></span>
<span class="line"><span>优化了配置文件的排版次序</span></span>
<span class="line"><span>加入了“挖矿套是否开启连锁挖矿”配置项</span></span>
<span class="line"><span>添加了挖矿套的连锁挖矿能力，可配置其buff与连锁图格ID</span></span>
<span class="line"><span>添加了暗影套、猩红套、黑曜石套、挥发凝胶的配置项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.6</span></span>
<span class="line"><span>给怪物吸血加入了个上限值（避免养蛊bug）</span></span>
<span class="line"><span>给冲刺类饰品都配备了闪避效果</span></span>
<span class="line"><span>增加了蜜蜂背包、化石套、禁戒套、蘑菇套、幽灵套、渔夫套的配置项</span></span>
<span class="line"><span>修正了一些配置项的错误名字</span></span>
<span class="line"><span>移除了以下3个配置项：</span></span>
<span class="line"><span>  &quot;怪物吸血条件:玩家受到多少伤害触发&quot;: 1500,</span></span>
<span class="line"><span>  &quot;怪物吸血条件:给非BOSS小于多少生命值上限的怪回血&quot;: 4000.0,</span></span>
<span class="line"><span>  &quot;怪物弹幕吸血条件:给非BOSS小于多少生命值上限的怪回血&quot;: 6000.0,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.5</span></span>
<span class="line"><span>声明：套装效果下玩家血量不加的问题是没开强制开荒导致的</span></span>
<span class="line"><span>修复了玩家退出游戏重进时加载时间过长问题</span></span>
<span class="line"><span>修复了玩家退出时出现的空引用问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.4</span></span>
<span class="line"><span>加入了大量配置项（实在太多了 写不过来 直接看配置文件吧）</span></span>
<span class="line"><span>注意：蠕虫围巾的免疫debuff功能存在BUG，</span></span>
<span class="line"><span>当遇到需免疫DeBUFF时会清空所有现有BUFF（50号包问题），不建议用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.3</span></span>
<span class="line"><span>配置项加入了</span></span>
<span class="line"><span>  &quot;幽灵兜帽是否出幽灵弹幕&quot;: true,</span></span>
<span class="line"><span>  &quot;幽灵面具是否出幽灵弹幕&quot;: false,</span></span>
<span class="line"><span>  &quot;甲虫套受到伤害给其他玩家的回血转换比例/默认30%&quot;: 0.3,</span></span>
<span class="line"><span>  &quot;甲虫套减多少回复量/默认为0&quot;: 10,</span></span>
<span class="line"><span>经玩家反馈1.0.2版幽灵套无限换头会累积弹幕，故此添加修复此BUG</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.2</span></span>
<span class="line"><span>羽学添加了大量配置项，允许自定义开启或修改某些饰品的被动技能</span></span>
<span class="line"><span>可修改配置项来决定是否开启BOSS_AI的魔改</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.0.1</span></span>
<span class="line"><span>玩家受伤时会被抽出血包，血包会给附近的敌怪回血（boss优先），若玩家能拦截住血包就能给自己回血</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const u=s(p,[["render",e],["__file","Challenger.html.vue"]]),v=JSON.parse('{"path":"/zh/guide/Challenger.html","title":"Challenger 挑战者模式","lang":"zh-CN","frontmatter":{"description":"Challenger 挑战者模式 作者: 星夜神花、枳、羽学 出处: github 这是一个Tshock服务器插件主要用于修改服务器BOSSAI的魔改与装备套装、饰品被动技能等 并使玩家受伤时会被抽出血包，血包会给附近的敌怪回血（boss优先），若玩家能拦截住血包就能给自己回血。 并允许通过修改配置文件控制所有怪物的血量倍数。由于作者丢失1.0.1版本...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/Challenger.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"Challenger 挑战者模式"}],["meta",{"property":"og:description","content":"Challenger 挑战者模式 作者: 星夜神花、枳、羽学 出处: github 这是一个Tshock服务器插件主要用于修改服务器BOSSAI的魔改与装备套装、饰品被动技能等 并使玩家受伤时会被抽出血包，血包会给附近的敌怪回血（boss优先），若玩家能拦截住血包就能给自己回血。 并允许通过修改配置文件控制所有怪物的血量倍数。由于作者丢失1.0.1版本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Challenger 挑战者模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/Challenger.md"}');export{u as comp,v as data};
