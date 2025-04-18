import{_ as n,e as a,f as l,o as e}from"./app-B7FU61Yn.js";const t={};function o(p,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="packetsstop-数据包拦截" tabindex="-1"><a class="header-anchor" href="#packetsstop-数据包拦截"><span>PacketsStop 数据包拦截</span></a></h1><ul><li>作者: 羽学 少司命</li><li>出处: <a href="https://github.com/1242509682/PacketsStop/" target="_blank" rel="noopener noreferrer">PacketsStop</a></li><li>这是一个Tshock服务器插件主要用于：</li><li>使用指令开启拦截指定玩家的数据包</li><li>输入【/pksp add 名字】将指定玩家添加到拦截名单后输入【/pksp on】即可开启拦截</li><li>插件源码来于少司命的游客限制插件，将其处理数据包方法做成了一个独立的功能插件</li></ul><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><table><thead><tr><th>语法</th><th style="text-align:center;">别名</th><th style="text-align:center;">权限</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>/pksp 或 packetstop</td><td style="text-align:center;">无</td><td style="text-align:center;">packetstop.use</td><td style="text-align:center;">指令菜单</td></tr><tr><td>/pksp on</td><td style="text-align:center;">无</td><td style="text-align:center;">packetstop.use</td><td style="text-align:center;">开启数据包拦截</td></tr><tr><td>/pksp off</td><td style="text-align:center;">无</td><td style="text-align:center;">packetstop.use</td><td style="text-align:center;">关闭数据包拦截</td></tr><tr><td>/pksp list</td><td style="text-align:center;">无</td><td style="text-align:center;">packetstop.use</td><td style="text-align:center;">列出拦截名单</td></tr><tr><td>/pksp add 玩家名</td><td style="text-align:center;">无</td><td style="text-align:center;">packetstop.use</td><td style="text-align:center;">将指定玩家添加到拦截名单</td></tr><tr><td>/pksp del 玩家名</td><td style="text-align:center;">无</td><td style="text-align:center;">packetstop.use</td><td style="text-align:center;">将指定玩家从拦截名单移除</td></tr><tr><td>/pksp reset</td><td style="text-align:center;">无</td><td style="text-align:center;">packetstop.use</td><td style="text-align:center;">清空拦截名单</td></tr><tr><td>/reload</td><td style="text-align:center;">无</td><td style="text-align:center;">tshock.cfg.reload</td><td style="text-align:center;">重载配置文件</td></tr></tbody></table><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志"><span>更新日志</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span>- 1.0.6</span></span>
<span class="line"><span>- 重构并修复代码，不再将拦截对象加入到一个新的组</span></span>
<span class="line"><span>- 而是通过配置文件中的名单进行指定</span></span>
<span class="line"><span>- 完善了部分指令用于更方便的增删改查</span></span>
<span class="line"><span>- 预设配置中加入了全部的数据包名，方便筛选</span></span>
<span class="line"><span>- 1.0.5</span></span>
<span class="line"><span>- 添加英文命令，修改权限</span></span>
<span class="line"><span>- 1.0.1</span></span>
<span class="line"><span>- 完善卸载函数</span></span>
<span class="line"><span>- 2.0</span></span>
<span class="line"><span>- 修复数据包拦截插件的GetPacket逻辑：原对配置文件内的数据包名以外的全部拦截问题已修复</span></span>
<span class="line"><span>- 1.0</span></span>
<span class="line"><span>- 将少司命的游客限制插件处理数据包方法，做成了一个独立的功能插件。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><blockquote><p>配置文件位置：tshock/数据包拦截.json</p></blockquote><div class="language-json5 line-numbers-mode" data-highlighter="shiki" data-ext="json5" style="background-color:#fff;color:#24292e;"><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#032F62;">  &quot;数据包名可查看&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://github.com/Pryaxis/TSAPI/blob/general-devel/TerrariaServerAPI/TerrariaApi.Server/PacketTypes.cs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;插件指令与权限名&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;指令：pksp 权限：packetstop.use&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;功能开关&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">  &quot;拦截玩家名单&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">    &quot;羽学&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#032F62;">  &quot;拦截数据包名&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ConnectRequest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;Disconnect&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ContinueConnecting&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerInfo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerSlot&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ContinueConnecting2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;WorldInfo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TileGetSection&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;Status&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TileSendSection&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TileFrameSection&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerSpawn&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerUpdate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerActive&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerHp&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;Tile&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TimeSet&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;DoorUse&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TileSendSquare&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ItemDrop&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ItemOwner&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NpcUpdate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NpcItemStrike&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ProjectileNew&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NpcStrike&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ProjectileDestroy&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TogglePvp&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ChestGetContents&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ChestItem&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ChestOpen&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlaceChest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;EffectHeal&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;Zones&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PasswordRequired&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PasswordSend&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;RemoveItemOwner&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NpcTalk&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerAnimation&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerMana&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;EffectMana&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerTeam&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SignRead&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SignNew&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;LiquidSet&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerSpawnSelf&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerBuff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NpcSpecial&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ChestUnlock&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NpcAddBuff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NpcUpdateBuff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerAddBuff&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;UpdateNPCName&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;UpdateGoodEvil&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayHarp&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;HitSwitch&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;UpdateNPCHome&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SpawnBossorInvasion&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerDodge&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PaintTile&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PaintWall&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;Teleport&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerHealOther&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;Placeholder&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ClientUUID&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ChestName&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;CatchNPC&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ReleaseNPC&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TravellingMerchantInventory&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TeleportationPotion&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;AnglerQuest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;CompleteAnglerQuest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NumberOfAnglerQuestsCompleted&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;CreateTemporaryAnimation&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ReportInvasionProgress&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlaceObject&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SyncPlayerChestIndex&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;CreateCombatText&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;LoadNetModule&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NpcKillCount&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerStealth&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ForceItemIntoNearestChest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;UpdateTileEntity&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlaceTileEntity&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TweakItem&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlaceItemFrame&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;UpdateItemDrop&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;EmoteBubble&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SyncExtraValue&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SocialHandshake&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;KillPortal&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerTeleportPortal&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NotifyPlayerNpcKilled&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NotifyPlayerOfEvent&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;UpdateMinionTarget&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NpcTeleportPortal&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;UpdateShieldStrengths&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NebulaLevelUp&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;MoonLordCountdown&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;NpcShopItem&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;GemLockToggle&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PoofOfSmoke&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SmartTextMessage&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;WiredCannonShot&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;MassWireOperation&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;MassWireOperationPay&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ToggleParty&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TreeGrowFX&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;CrystalInvasionStart&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;CrystalInvasionWipeAll&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;MinionAttackTargetUpdate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;CrystalInvasionSendWaitTime&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerHurtV2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayerDeathV2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;CreateCombatTextExtended&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;Emoji&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TileEntityDisplayDollItemSync&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;RequestTileEntityInteraction&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;WeaponsRackTryPlacing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TileEntityHatRackItemSync&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SyncTilePicking&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SyncRevengeMarker&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;RemoveRevengeMarker&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;LandGolfBallInCup&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;FinishedConnectingToServer&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;FishOutNPC&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;TamperWithNPC&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;PlayLegacySound&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;FoodPlatterTryPlacing&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;UpdatePlayerLuckFactors&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;DeadPlayer&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SyncCavernMonsterType&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;RequestNPCBuffRemoval&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ClientSyncedInventory&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SetCountsAsHostForGameplay&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SetMiscEventValues&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;RequestLucyPopup&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SyncProjectileTrackers&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;CrystalInvasionRequestedToSkipWaitTime&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;RequestQuestEffect&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SyncItemsWithShimmer&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;ShimmerActions&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SyncLoadout&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">    &quot;SyncItemCannotBeTakenByEnemies&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反馈" tabindex="-1"><a class="header-anchor" href="#反馈"><span>反馈</span></a></h2><ul><li>优先发issued -&gt; 共同维护的插件库：<a href="https://github.com/UnrealMultiple/TShockPlugin" target="_blank" rel="noopener noreferrer">https://github.com/UnrealMultiple/TShockPlugin</a></li><li>次优先：TShock官方群：816771079</li><li>大概率看不到但是也可以：<a href="http://xn--trhub-vu5h35hcuk6n7f.cn" target="_blank" rel="noopener noreferrer">国内社区trhub.cn</a> ，<a href="http://bbstr.net" target="_blank" rel="noopener noreferrer">bbstr.net</a> , tr.monika.love</li></ul>`,11)]))}const c=n(t,[["render",o],["__file","PacketsStop.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/PacketsStop.html","title":"PacketsStop 数据包拦截","lang":"zh-CN","frontmatter":{"description":"PacketsStop 数据包拦截 作者: 羽学 少司命 出处: PacketsStop 这是一个Tshock服务器插件主要用于： 使用指令开启拦截指定玩家的数据包 输入【/pksp add 名字】将指定玩家添加到拦截名单后输入【/pksp on】即可开启拦截 插件源码来于少司命的游客限制插件，将其处理数据包方法做成了一个独立的功能插件 指令 更新日志...","head":[["meta",{"property":"og:url","content":"http://docs.terraria.ink/zh/guide/PacketsStop.html"}],["meta",{"property":"og:site_name","content":"TShock中文插件库"}],["meta",{"property":"og:title","content":"PacketsStop 数据包拦截"}],["meta",{"property":"og:description","content":"PacketsStop 数据包拦截 作者: 羽学 少司命 出处: PacketsStop 这是一个Tshock服务器插件主要用于： 使用指令开启拦截指定玩家的数据包 输入【/pksp add 名字】将指定玩家添加到拦截名单后输入【/pksp on】即可开启拦截 插件源码来于少司命的游客限制插件，将其处理数据包方法做成了一个独立的功能插件 指令 更新日志..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PacketsStop 数据包拦截\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"反馈","slug":"反馈","link":"#反馈","children":[]}],"git":{},"autoDesc":true,"filePathRelative":"zh/guide/PacketsStop.md"}');export{c as comp,r as data};
