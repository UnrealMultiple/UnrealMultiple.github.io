import{_ as e,c as o,a as l,o as n}from"./app-BIPCnSct.js";const a={};function s(r,t){return n(),o("div",null,t[0]||(t[0]=[l(`<h1 id="proxyprotocolsocket" tabindex="-1"><a class="header-anchor" href="#proxyprotocolsocket"><span>ProxyProtocolSocket</span></a></h1><ul><li>作者: <a href="https://github.com/LaoSparrow" target="_blank" rel="noopener noreferrer">LaoSparrow</a></li><li>出处: https://github.com/LaoSparrow/ProxyProtocolSocket</li><li>让 TShock 支持 <code>proxy protocol</code>, 获取用户真实IP</li><li>需要搭配开启了 <code>proxy protocol</code> 功能的 <code>frp</code>, <code>nginx</code> 等反代软件使用</li><li>安装此插件后游戏客户端只能通过反代连接 TShock, 直接连接 TShock 会被拒绝接入</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th style="text-align:center;">语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">无</td><td style="text-align:center;">无</td><td style="text-align:center;">无</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件路径：tshock/ProxyProtocolSocket.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;Settings&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;log_level&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Info&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">    &quot;timeout&quot;</span><span style="color:#D4D4D4;">: 1000</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:center;">值范围</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">log_level</td><td style="text-align:left;">终端日志等级</td><td style="text-align:center;">None, Error, Warning, Info, Debug</td><td style="text-align:center;">Info</td></tr><tr><td style="text-align:left;">timeout</td><td style="text-align:left;">超时毫秒数(接收到 proxy protocol 数据前等待的时间), -1代表不启用超时功能</td><td style="text-align:center;">-1 或 正整数</td><td style="text-align:center;">1000</td></tr></tbody></table><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>v2.1</span></span>
<span class="line"><span>重构 Parsers</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v2.0</span></span>
<span class="line"><span>适配 TShock 5.2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,12)]))}const c=e(a,[["render",s],["__file","ProxyProtocolSocket.html.vue"]]),p=JSON.parse('{"path":"/zh/guide/ProxyProtocolSocket.html","title":"ProxyProtocolSocket","lang":"zh-CN","frontmatter":{"description":"ProxyProtocolSocket 作者: LaoSparrow 出处: https://github.com/LaoSparrow/ProxyProtocolSocket 让 TShock 支持 proxy protocol, 获取用户真实IP 需要搭配开启了 proxy protocol 功能的 frp, nginx 等反代软件使用 安装此插件...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/ProxyProtocolSocket.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"ProxyProtocolSocket"}],["meta",{"property":"og:description","content":"ProxyProtocolSocket 作者: LaoSparrow 出处: https://github.com/LaoSparrow/ProxyProtocolSocket 让 TShock 支持 proxy protocol, 获取用户真实IP 需要搭配开启了 proxy protocol 功能的 frp, nginx 等反代软件使用 安装此插件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ProxyProtocolSocket\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/ProxyProtocolSocket.md"}');export{c as comp,p as data};