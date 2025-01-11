import{_ as s,c as a,a as e,o as l}from"./app-0Q1DnpH9.js";const i={};function t(p,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="autopluginmanager-自动更新插件" tabindex="-1"><a class="header-anchor" href="#autopluginmanager-自动更新插件"><span>AutoPluginManager 自动更新插件</span></a></h1><ul><li>作者: 少司命，Cai，LaoSparrow</li><li>出处: 本仓库</li><li>使用指令自动更新服务器的插件(仅本仓库)</li><li>提供了热重载插件的可能，但此热重载并不算是真正意义上的热重载，已加载的程序集无法卸载，而是依然存在于应用域 中，只是不再生效!</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/apm -c</td><td style="text-align:center;">AutoUpdatePlugin</td><td style="text-align:center;">检查插件更新</td></tr><tr><td>/apm -u [插件名]</td><td style="text-align:center;">AutoUpdatePlugin</td><td style="text-align:center;">一键升级插件，需要重启服务器，插件名可多选<code>英文逗号隔开</code></td></tr><tr><td>/apm -l</td><td style="text-align:center;">AutoUpdatePlugin</td><td style="text-align:center;">查看仓库插件列表</td></tr><tr><td>/apm -i [插件序号]</td><td style="text-align:center;">AutoUpdatePlugin</td><td style="text-align:center;">安装插件，需重启服务器，插件序号多选<code>英文逗号隔开</code>配合<code>/apm -i</code>指令使用</td></tr><tr><td>/apm -b [插件名]</td><td style="text-align:center;">AutoUpdatePlugin</td><td style="text-align:center;">将插件排除更新</td></tr><tr><td>/apm -r</td><td style="text-align:center;">AutoUpdatePlugin</td><td style="text-align:center;">检查重复安装的插件</td></tr><tr><td>/apm -rb [插件名]</td><td style="text-align:center;">AutoUpdatePlugin</td><td style="text-align:center;">移除排除更新</td></tr><tr><td>/apm -lb</td><td style="text-align:center;">AutoUpdatePlugin</td><td style="text-align:center;">列出排除更新的插件</td></tr><tr><td>/apm -ib</td><td style="text-align:center;">AutoUpdatePlugin</td><td style="text-align:center;">列出已安装插件列表与启用状态</td></tr><tr><td>/apm -on [序号]</td><td style="text-align:center;">AutoUpdatePlugin</td><td style="text-align:center;">启用某个插件</td></tr><tr><td>/apm -off [序号]</td><td style="text-align:center;">AutoUpdatePlugin</td><td style="text-align:center;">关闭某个插件</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/AutoPluginManager.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;允许自动更新插件&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;插件排除列表&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;热重载升级插件&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;热重载出错时继续&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>v2.0.3.3</span></span>
<span class="line"><span>修复无法深度解析插件依赖</span></span>
<span class="line"><span>v2.0.3.1</span></span>
<span class="line"><span>更新英文翻译</span></span>
<span class="line"><span>v2.0.2.9</span></span>
<span class="line"><span>添加指令</span></span>
<span class="line"><span>/apm il 查看本地插件列表</span></span>
<span class="line"><span>/apm on 启用某个插件</span></span>
<span class="line"><span>/apm off 关闭某个插件</span></span>
<span class="line"><span>v2.0.2.8</span></span>
<span class="line"><span>调整apm指令管理</span></span>
<span class="line"><span>v2.0.2.7</span></span>
<span class="line"><span>完全适配自建API</span></span>
<span class="line"><span>v2.0.2.6</span></span>
<span class="line"><span>使用流缓存插件包,抛弃Gitee，自建API</span></span>
<span class="line"><span>v2.0.2.4</span></span>
<span class="line"><span>回滚到 v2.0.2.2</span></span>
<span class="line"><span>v2.0.2.3</span></span>
<span class="line"><span>添加 LazyAPI 依赖</span></span>
<span class="line"><span>配置文件本地化</span></span>
<span class="line"><span>v2.0.2.2</span></span>
<span class="line"><span>默认启用热重载</span></span>
<span class="line"><span>新增配置项热重载出错时跳过报错插件</span></span>
<span class="line"><span>新增\`HotReload\`字段以跳过指定插件热重载</span></span>
<span class="line"><span>细化一些提示</span></span>
<span class="line"><span>v2.0.2.1</span></span>
<span class="line"><span>修复在未开启热重载时，插件更新后版本号未更新</span></span>
<span class="line"><span>修复英文翻译错误</span></span>
<span class="line"><span>v2.0.2.0</span></span>
<span class="line"><span>重构部分逻辑</span></span>
<span class="line"><span>实现自动拉取依赖</span></span>
<span class="line"><span>实现自定义源</span></span>
<span class="line"><span>v2.0.1.7</span></span>
<span class="line"><span>热重载升级插件</span></span>
<span class="line"><span>v2.0.1.4</span></span>
<span class="line"><span>添加英文翻译</span></span>
<span class="line"><span>v2.0.1.3</span></span>
<span class="line"><span>添加配置项可切换到Github源</span></span>
<span class="line"><span>v2.0.1.2</span></span>
<span class="line"><span>将源更换为Gitee</span></span>
<span class="line"><span>v2.0.1.1</span></span>
<span class="line"><span>更新: apm u支持排除插件,支持自动更新插件,apm l优化显示 &amp; 修复: 插件更新回旧版本,更新插件后不重启仍提示更新</span></span>
<span class="line"><span>v2.0.0.3</span></span>
<span class="line"><span>修复: 使用插件包最新目录结构</span></span>
<span class="line"><span>v2.0.0.2</span></span>
<span class="line"><span>更新: 插件仓库链接</span></span>
<span class="line"><span>v2.0.0.1</span></span>
<span class="line"><span>补全卸载函数</span></span>
<span class="line"><span>V2.0.0.0</span></span>
<span class="line"><span>1.正式更名为AutoPluginManager</span></span>
<span class="line"><span>2.添加安装插件功能</span></span>
<span class="line"><span>3.更改指令使用方式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,11)]))}const r=s(i,[["render",t],["__file","AutoPluginManager.html.vue"]]),c=JSON.parse('{"path":"/zh/guide/AutoPluginManager.html","title":"AutoPluginManager 自动更新插件","lang":"zh-CN","frontmatter":{"description":"AutoPluginManager 自动更新插件 作者: 少司命，Cai，LaoSparrow 出处: 本仓库 使用指令自动更新服务器的插件(仅本仓库) 提供了热重载插件的可能，但此热重载并不算是真正意义上的热重载，已加载的程序集无法卸载，而是依然存在于应用域 中，只是不再生效! 指令 配置 配置文件位置：tshock/AutoPluginManage...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/AutoPluginManager.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"AutoPluginManager 自动更新插件"}],["meta",{"property":"og:description","content":"AutoPluginManager 自动更新插件 作者: 少司命，Cai，LaoSparrow 出处: 本仓库 使用指令自动更新服务器的插件(仅本仓库) 提供了热重载插件的可能，但此热重载并不算是真正意义上的热重载，已加载的程序集无法卸载，而是依然存在于应用域 中，只是不再生效! 指令 配置 配置文件位置：tshock/AutoPluginManage..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AutoPluginManager 自动更新插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/AutoPluginManager.md"}');export{r as comp,c as data};
