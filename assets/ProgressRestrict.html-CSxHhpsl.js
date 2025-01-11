import{_ as n,c as a,a as l,o as p}from"./app-0Q1DnpH9.js";const o={};function e(t,s){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="progressrestrict-超进度检测" tabindex="-1"><a class="header-anchor" href="#progressrestrict-超进度检测"><span>ProgressRestrict 超进度检测</span></a></h1><ul><li>作者: 少司命 &amp; 恋恋魔改三合一</li><li>出处: github</li><li>超进度检测</li><li>可对物品，弹幕，buff 进行超进度检测</li></ul><blockquote><p>[!NOTE]<br> 需要安装前置插件：DataSync(本仓库)</p></blockquote><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>空</td><td style="text-align:center;">progress.item.white</td><td style="text-align:center;">超进度物品检查白名权限</td></tr><tr><td>空</td><td style="text-align:center;">progress.projecttile.white</td><td style="text-align:center;">超进度弹幕检查白名权限</td></tr><tr><td>空</td><td style="text-align:center;">progress.buff.white</td><td style="text-align:center;">超进度 Buff 检查白名权限</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/超进度检测.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" data-title="json5" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;惩罚违规&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;惩罚Debuff时长&quot;</span><span style="color:#D4D4D4;">: 5,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;公示违规者&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;写入日志&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;清除违规物品&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;清除违规状态&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;踢出违规玩家&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">  &quot;限制列表&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;史莱姆王&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;克苏鲁之眼&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;邪恶Boss&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;蜂后&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;骷髅王&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;肉山&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;任一三王&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;双子魔眼&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;机械毁灭者&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;机械骷髅&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;世纪之花&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;石巨人&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;猪鲨公爵&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;拜月教徒&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;月球领主&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;日耀塔&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;星旋塔&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;星云塔&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;星尘塔&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;冰雪女王&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;圣诞坦克&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;永恒尖啸&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;哀嚎之木&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;史莱姆皇后&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;独眼巨鹿&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;光之女皇&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;血月&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;困难血月&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;日食&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;三王后日食&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;花后日食&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;南瓜月&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;霜月&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;火星暴乱&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;旧日军团&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;哥布林军团&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;困难哥布林军团&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;海盗军团&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;雪人军团&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;一阶旧日军团&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;二阶旧日军团&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;三阶旧日军团&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制物品&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制弹幕&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;限制状态&quot;</span><span style="color:#D4D4D4;">: [],</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;对应进度&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;不存在的进度&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">      &quot;跨服解禁&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>v1.0.0.2</span></span>
<span class="line"><span>移除构造函数加载配置文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v1.0.0.1</span></span>
<span class="line"><span>完善卸载函数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：https://github.com/UnrealMultiple/TShockPlugin</li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：国内社区trhub.cn ，bbstr.net , tr.monika.love</li></ul>`,12)]))}const i=n(o,[["render",e],["__file","ProgressRestrict.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/ProgressRestrict.html","title":"ProgressRestrict 超进度检测","lang":"zh-CN","frontmatter":{"description":"ProgressRestrict 超进度检测 作者: 少司命 & 恋恋魔改三合一 出处: github 超进度检测 可对物品，弹幕，buff 进行超进度检测 [!NOTE] 需要安装前置插件：DataSync(本仓库) 指令 配置 配置文件位置：tshock/超进度检测.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https:...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/ProgressRestrict.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"ProgressRestrict 超进度检测"}],["meta",{"property":"og:description","content":"ProgressRestrict 超进度检测 作者: 少司命 & 恋恋魔改三合一 出处: github 超进度检测 可对物品，弹幕，buff 进行超进度检测 [!NOTE] 需要安装前置插件：DataSync(本仓库) 指令 配置 配置文件位置：tshock/超进度检测.json 更新日志 反馈 优先发issued -> 共同维护的插件库：https:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ProgressRestrict 超进度检测\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/ProgressRestrict.md"}');export{i as comp,r as data};
