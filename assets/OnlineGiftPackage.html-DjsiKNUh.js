import{_ as s,a,b as l,o as e}from"./app-IX9aCo9D.js";const i={};function p(t,n){return e(),a("div",null,n[0]||(n[0]=[l(`<h1 id="online-gift-package-在线礼包" tabindex="-1"><a class="header-anchor" href="#online-gift-package-在线礼包"><span>Online Gift Package 在线礼包</span></a></h1><ul><li>作者: 星夜神花、羽学</li><li>出处: <a href="https://gitee.com/star-night-flower/tshock-gift" target="_blank" rel="noopener noreferrer">github</a></li><li>这是一个Tshock服务器插件主要用于对服务器内的在线玩家进行发放随机的在线奖励</li><li>在【在线礼包.json】文件中添加完物品，游戏发送/Reload可自动计算获取总概率</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/在线礼包</td><td style="text-align:center;">OnlineGiftPackage</td><td style="text-align:center;">显示礼包内所有物品的概率表</td></tr><tr><td>/reload</td><td style="text-align:center;">无</td><td style="text-align:center;">自动计算总概率</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/在线礼包.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;启用&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;总概率(自动更新)&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;发放间隔/秒&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1800</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;跳过生命上限&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;每次发放礼包记录后台&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;礼包列表&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品名称&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;铂金币&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品ID&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">74</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;所占概率&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">      &quot;物品数量&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#005CC5;">        2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#005CC5;">        5</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">    &quot;触发序列&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#032F62;">    &quot;1&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;[c/55CDFF:服主]送了你1个礼包&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>- 1.0.1.2</span></span>
<span class="line"><span>- 完善卸载函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 1.1.1</span></span>
<span class="line"><span>- 1.完善了对“总概率”的Reload重载同步</span></span>
<span class="line"><span>- 2.优化了命令的显示排版</span></span>
<span class="line"><span>- 3.给命令加了个权限名</span></span>
<span class="line"><span>- 4.移除了配置文件里的“将未符合条件者记录后台”</span></span>
<span class="line"><span>-  </span></span>
<span class="line"><span>- 1.1.0</span></span>
<span class="line"><span>- 1.修复了使用/reload或重启服务器时，配置文件被原配置覆盖，无法正常读取修改过的变量问题。</span></span>
<span class="line"><span>- 2.把计算总概率的显示加入到了指令里：/在线礼包</span></span>
<span class="line"><span>- 3.删除配置文件使用/reload可得到个计算过的“总概率”值在配置文件里</span></span>
<span class="line"><span>- 4.配置文件加入了“跳过生命上限”的检测标准，可以决定高血量玩家无法获取在线礼包。</span></span>
<span class="line"><span>- 5.加入了每次发放礼包是否记录后台</span></span>
<span class="line"><span>- 6.“将未符合条件者记录后台”是羽学调试时观察用的，不建议开，后期更新会移除。</span></span>
<span class="line"><span>- 7.赠送礼包后会提醒玩家下次发放时间</span></span>
<span class="line"><span>-  </span></span>
<span class="line"><span>- 1.0.9</span></span>
<span class="line"><span>- 1.修复了不按时送物品的问题，  </span></span>
<span class="line"><span>- 2.移除了广播在线时长的方法，  </span></span>
<span class="line"><span>- 3.配置文件加入了大量预设物品方案，  </span></span>
<span class="line"><span>- 4.修复了/在线礼包指令不显示概率的问题，  </span></span>
<span class="line"><span>- 5.不再根据序列数量来发放物品而是发过一次自动重置为0+1从第一个序列开始发，  </span></span>
<span class="line"><span>- 6.解决了初始化配置文件时自动序列化问题  </span></span>
<span class="line"><span>- 7.加了个计算总概率的新方法。  </span></span>
<span class="line"><span>-  </span></span>
<span class="line"><span>- 1.0.8  </span></span>
<span class="line"><span>- 1.补充了配置文件缺失的变量名称  </span></span>
<span class="line"><span>- 2.增加了总概率选项  </span></span>
<span class="line"><span>- 3.玩家可自定义广播间隔时间，方便与触发时间同步  </span></span>
<span class="line"><span>- 4.再次尝试优化定时器</span></span>
<span class="line"><span>- 5.适配了.net 6.0  </span></span>
<span class="line"><span>-  </span></span>
<span class="line"><span>- 1.0.7  </span></span>
<span class="line"><span>- 1.优化了定时器  </span></span>
<span class="line"><span>- 2.config文件改名为【在线礼包.json】，并对其修改项合理汉化</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const o=s(i,[["render",p],["__file","OnlineGiftPackage.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/OnlineGiftPackage.html","title":"Online Gift Package 在线礼包","lang":"zh-CN","frontmatter":{"description":"Online Gift Package 在线礼包 作者: 星夜神花、羽学 出处: github 这是一个Tshock服务器插件主要用于对服务器内的在线玩家进行发放随机的在线奖励 在【在线礼包.json】文件中添加完物品，游戏发送/Reload可自动计算获取总概率 指令 配置 配置文件位置：tshock/在线礼包.json 更新日志 反馈 优先发issu...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/OnlineGiftPackage.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"Online Gift Package 在线礼包"}],["meta",{"property":"og:description","content":"Online Gift Package 在线礼包 作者: 星夜神花、羽学 出处: github 这是一个Tshock服务器插件主要用于对服务器内的在线玩家进行发放随机的在线奖励 在【在线礼包.json】文件中添加完物品，游戏发送/Reload可自动计算获取总概率 指令 配置 配置文件位置：tshock/在线礼包.json 更新日志 反馈 优先发issu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Online Gift Package 在线礼包\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/OnlineGiftPackage.md"}');export{o as comp,r as data};
