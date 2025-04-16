import{_ as a,e,f as l,o as n}from"./app-B7FU61Yn.js";const t="/assets/bfcfbacc-3a63-46be-9f66-3a7f64cf2955-DqDHeGRr.jpg",r="/assets/ef96205f-b82a-4a8d-b0ed-9c024f1d8ff6-DBLuMbDp.jpg",o="/assets/378110c7-74ac-4cf3-a48b-25b265e8c911-DNC5k7Mi.jpg",p="/assets/b1016bc4-3cf6-4589-9c62-8be0430bf44f-Dll6Z086.jpg",i="/assets/390c270e-fb23-4fc4-bac9-2eb6fa9eb988-BU8imI7b.jpg",c="/assets/3b324de0-71b4-4fcc-8d14-8d966318cd2e-iNXUNE8l.jpg",d="/assets/36559065-9475-4402-b9bc-4ec1ec5c8052-nynsAzwQ.jpg",y={};function u(h,s){return n(),e("div",null,s[0]||(s[0]=[l(`<h1 id="part-6-0发送数据包​" tabindex="-1"><a class="header-anchor" href="#part-6-0发送数据包​"><span>Part 6.0发送数据包​</span></a></h1><p>本章你将学到：</p><ul><li>如何向玩家发送数据包</li><li>研究不同数据包参数的方法</li></ul><h2 id="什么是数据包-​" tabindex="-1"><a class="header-anchor" href="#什么是数据包-​"><span>什么是数据包？​</span></a></h2><ul><li>顾名思义，数据包就是存放数据的包。这些包会告诉玩家的客户端一些游戏内的信息(例如物品掉落、地图时间等)，当然服务器也可以接受来自玩家的数据包​</li></ul><h2 id="为什么要发送数据包-​" tabindex="-1"><a class="header-anchor" href="#为什么要发送数据包-​"><span>为什么要发送数据包？​</span></a></h2><ul><li>当你直接修改Terraria服务端中的属性、变量等(例如：玩家最大血量、下雨等)，你会发现你的修改没办法马上生效，这时候就需要向玩家发送一个数据包用来告诉客户端你修改的信息</li></ul><h2 id="如何发送数据包-​" tabindex="-1"><a class="header-anchor" href="#如何发送数据包-​"><span>如何发送数据包？​</span></a></h2><ul><li>我们可以调用TSPlayer对象中的SendData方法来发送数据包</li></ul><ol><li><p>首先我们需要获取对应的TSPlayer对象，前面教程已经有了，就不在过多赘述</p><blockquote><p>注: 如果你需要发送全服数据包玩家对象就是TSPlayer.All</p></blockquote></li><li><p>然后使用SendData方法</p></li></ol><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">player.</span><span style="color:#6F42C1;">SendData</span><span style="color:#24292E;">(数据包类型,字符串参数,参数1,参数2</span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>以修改玩家最大生命值为例：</li></ul><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">private</span><span style="color:#D73A49;"> void</span><span style="color:#6F42C1;"> TestCmd</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">CommandArgs</span><span style="color:#6F42C1;"> args</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//以命令为例</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">    var</span><span style="color:#6F42C1;"> player</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> args.Player;  </span><span style="color:#6A737D;">//获取玩家的对象</span></span>
<span class="line"><span style="color:#24292E;">    player.TPlayer.statLifeMax </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 11451</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">//修改玩家最大生命值(注意: statLifeMax2是加上药水饰品等的最大生命值)</span></span>
<span class="line"><span style="color:#24292E;">    player.</span><span style="color:#6F42C1;">SendData</span><span style="color:#24292E;">(PacketTypes.PlayerHp,</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,player.Index);  </span><span style="color:#6A737D;">//向玩家发送数据包更新</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>此时你应该会想问:<br> WTF?<br> 为什么数据包类型是PlayerHp，为什么参数1是玩家的索引(player.Index)，为什么SendData的参数里没有我要改的血量11451?</p></blockquote><h2 id="发送数据包-senddata-的参数-​" tabindex="-1"><a class="header-anchor" href="#发送数据包-senddata-的参数-​"><span>发送数据包(SendData)的参数:​</span></a></h2><p>这里有一个奇怪的误区，SendData的参数并不一定是写进数据包的值(上面例子中:参数1是player.Index而不是TPlayer.statLifeMax)，对于不同的数据包SendData的参数也会有所不同。想要知道具体参数作用，我们需要反编译NetMessage.orig_SendData<br> 方法如下</p><ol><li>直接在可以执行语句的地方打一个NetMessage.orig_SendData，然后右键orig_SendData，点击转到定义,等待一下反编译我们就能看到NetMessage.orig_SendData的代码了</li></ol><p><img src="`+t+'" alt="image"></p><ol start="2"><li>往下翻，我们会发现有一个switch-case结构, 其中case中的数字就是数据包的编号</li></ol><p><img src="'+r+'" alt="image"></p><ul><li>以修改玩家最大生命为例(修改了玩家的statLifeMax)</li></ul><ol><li><p>我们直接按Ctrl+F搜索statLifeMax</p></li><li><p>此时搜索到16号数据包的case，所以我们需要发送的就是16号数据包(PacketTypes.PlayerHp)<br><img src="'+o+`" alt="image"></p></li><li><p>我们仔细查看这个case部分不难看出, number(参数1)，就是玩家的索引(number为0时发送索引为0的玩家的生命数据，number为1时发送索引为1的玩家的生命数据...) [number2对应参数2，number3对应参数3，有些数据包需要用到字符串参数(例如: 弹幕文字、断开连接等)]</p></li></ol><blockquote><p>注: 你可以用类似的方法查看PacketTypes的定义来找到数据包类型(16=&gt;PacketTypes.PlayerHp)<br> 如果你嫌麻烦也可以直接使用&quot;(PacketTypes)数据包号&quot;<br> [例如: (PacketTypes)16]</p></blockquote><ol start="4"><li>得出PacketTypes.PlayerHp</li></ol><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">player.</span><span style="color:#6F42C1;">SendData</span><span style="color:#24292E;">(PacketTypes.PlayerHp,</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,玩家索引);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="再分析一个数据包试试​" tabindex="-1"><a class="header-anchor" href="#再分析一个数据包试试​"><span>再分析一个数据包试试​</span></a></h2><ol><li>假设我们现在想把服务器中的世纪之花设置为已击败状态(NPC.downedPlantBoss=true),我们现在需要告诉所有的玩家世纪之花已被击败而不是执行命令的人，所以我们需要使用TSPlayer.All作为对象</li></ol><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">private</span><span style="color:#D73A49;"> void</span><span style="color:#6F42C1;"> TestCmd</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">CommandArgs</span><span style="color:#6F42C1;"> args</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//测试命令 (这里只是方便演示)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    NPC.downedPlantBoss </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//设置世纪之花为已击败状态</span></span>
<span class="line"><span style="color:#24292E;">    TSPlayer.All.</span><span style="color:#6F42C1;">SendData</span><span style="color:#24292E;">(数据包，</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, 参数1, 参数2</span><span style="color:#D73A49;">..</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">//向所有玩家发送数据包</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>然后我们转到NetMessage.orig_SendData()搜索downedPlantBoss，找到对应的位置后，详细的阅读这个case中的代码找number，</li><li>发现这个case中没有使用任何number或者text (不需要任何参数和文本)</li></ol><p><img src="`+p+`" alt="image"></p><ol start="4"><li>所以我们直接调用下面的方法就可以发送数据包了 (由于7号数据包没有使用任何参数和文本，所以我们直接只填入包类型就好)</li></ol><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">private</span><span style="color:#D73A49;"> void</span><span style="color:#6F42C1;"> TestCmd</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">CommandArgs</span><span style="color:#6F42C1;"> args</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    NPC.downedPlantBoss </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//设置世纪之花为已击败状态</span></span>
<span class="line"><span style="color:#24292E;">    TSPlayer.All.</span><span style="color:#6F42C1;">SendData</span><span style="color:#24292E;">(PacketTypes.WorldInfo);</span></span>
<span class="line"><span style="color:#6A737D;">//通过查看PacketTypes的定义可以找到数据包编号(7)对应的和PacketTypes(PacketTypes.WorldInfo)</span></span>
<span class="line"><span style="color:#6A737D;">    //也可以直接使用TSPlayer.All.SendData((PacketTypes)7); 但是PacketTypes.WorldInfo的代码可读性更高</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="奇怪的东西" tabindex="-1"><a class="header-anchor" href="#奇怪的东西"><span>奇怪的东西</span></a></h2><ol><li>有一个编写插件常常用到的数据包PlayerSlot(5号)，这个数据包的作用是修改玩家背包的物品(包括装备栏的物品)<br> 我们转到NetMessage.orig_SendData() 找到5号的对应代码</li></ol><p><img src="`+i+'" alt="image"></p><ol start="2"><li>从上面的代码我们能发现number(参数1)是玩家的索引(Index), number2(参数2)是对应格子的索引，而number3(参数3)却很难看出他的作用，此时我们可以通过查看MessageBuffer.GetData的定义来找到number3的作用</li></ol><p><img src="'+c+'" alt="image"></p><ol start="3"><li>根据NetMessage.orig_SendData()中代码number3在第4次被Write进数据包, 那么number3在MessageBuffer.GetData中也会在第4次被Read进变量中，所以MessageBuffer.GetData中的num9就是NetMessage.orig_SendData()中的number3(参数3)，然后我们发现，在使用Prefix方法的时候使用了num9(也就是number3)，从wiki上我们可以知道prefix是修饰语的意思，所以number3就是修饰语ID</li></ol><p><img src="'+d+'" alt="image"></p><ol start="4"><li>得出:</li></ol><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">player.</span><span style="color:#6F42C1;">SendData</span><span style="color:#24292E;">(PacketTypes.PlayerSlot,</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,玩家索引,背包格子索引,物品修饰语ID);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',41)]))}const b=a(y,[["render",u],["__file","Part6.0.html.vue"]]),g=JSON.parse('{"path":"/zh/plugin-dev/Part6.0.html","title":"Part 6.0发送数据包​","lang":"zh-CN","frontmatter":{"description":"Part 6.0发送数据包​ 本章你将学到： 如何向玩家发送数据包 研究不同数据包参数的方法 什么是数据包？​ 顾名思义，数据包就是存放数据的包。这些包会告诉玩家的客户端一些游戏内的信息(例如物品掉落、地图时间等)，当然服务器也可以接受来自玩家的数据包​ 为什么要发送数据包？​ 当你直接修改Terraria服务端中的属性、变量等(例如：玩家最大血量、下...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/plugin-dev/Part6.0.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"Part 6.0发送数据包​"}],["meta",{"property":"og:description","content":"Part 6.0发送数据包​ 本章你将学到： 如何向玩家发送数据包 研究不同数据包参数的方法 什么是数据包？​ 顾名思义，数据包就是存放数据的包。这些包会告诉玩家的客户端一些游戏内的信息(例如物品掉落、地图时间等)，当然服务器也可以接受来自玩家的数据包​ 为什么要发送数据包？​ 当你直接修改Terraria服务端中的属性、变量等(例如：玩家最大血量、下..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Part 6.0发送数据包​\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么是数据包？​","slug":"什么是数据包-​","link":"#什么是数据包-​","children":[]},{"level":2,"title":"为什么要发送数据包？​","slug":"为什么要发送数据包-​","link":"#为什么要发送数据包-​","children":[]},{"level":2,"title":"如何发送数据包？​","slug":"如何发送数据包-​","link":"#如何发送数据包-​","children":[]},{"level":2,"title":"发送数据包(SendData)的参数:​","slug":"发送数据包-senddata-的参数-​","link":"#发送数据包-senddata-的参数-​","children":[]},{"level":2,"title":"再分析一个数据包试试​","slug":"再分析一个数据包试试​","link":"#再分析一个数据包试试​","children":[]},{"level":2,"title":"奇怪的东西","slug":"奇怪的东西","link":"#奇怪的东西","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/plugin-dev/Part6.0.md"}');export{b as comp,g as data};
