# 挪车打螺丝：工程还原、车位、关卡与联网说明

更新：2026-11-24。依据本机版本 43 的客户端缓存、源码和微信官方文档整理。

本次已生成微信小游戏工程并通过静态检查。按要求没有安装微信开发者工具、没有启动游戏或模拟器，也没有调用游戏服务器。这里的“通过检查”只代表语法、模块引用、配置、资源哈希和已检查的数据引用正确，不代表已经验证完整启动或所有关卡可玩。

## 1. 工程入口与维护方式

导入目录为 `/Users/suanec/suanec/suanec-material/codes/ncdls`。根目录的 [project.config.json](/Users/suanec/suanec/suanec-material/codes/ncdls/project.config.json) 设置 `compileType: game`、`miniprogramRoot: wechat-game/`。

`src/`、`vendor/` 是阅读和修改源文件的地方；`wechat-game/` 是生成的运行目录；`raw/` 保留原始缓存归档。

```text
ncdls/
  project.config.json
  wechat-game/
    game.js                 主入口
    game.json               游戏配置及已缓存分包
    index.js                加载 libs 分包
    splash.js
    weapp-adapter.js
    libs/game.js            按原顺序加载引擎和业务
    libs/laya/              本地 Laya 引擎
    libs/min/               业务、平台适配、FairyGUI、物理库等
    OpenWalls/index.js      开放数据域入口
    res/                    按原发布路径保存的资源
    loading/、json/、img/…
  src/、vendor/、assets/、config/、raw/
  scripts/
  reports/
  docs/RESTORATION.md
```

项目暂用 `touristappid` 作为本地导入占位。手机预览时应在开发者工具中选择有效的**小游戏测试号**，或填写你自己的小游戏 AppID；占位字符串本身不代表已取得测试号。当前官方新手文档支持使用测试号体验，限制包括不能验证商业化能力、不能上传发布。登录、广告、云排行等能力依赖 AppID 和平台配置，不能凭原游戏的 AppID 获得这些能力。本次没有改写业务 SDK 中原有的服务标识，也没有伪造登录结果。

在 `ncdls` 目录执行以下命令即可维护工程；它们只处理文件，不会启动游戏：

```sh
npm run build:wechat
npm run check:wechat
npm run check
```

新增缓存后的顺序：

```sh
npm run sync:resources
npm run decode:configs
npm run build:wechat
npm run check:wechat
```

构建会保留对 `src/game/main.js` 的车位修改。直接编辑生成目录后，构建脚本会拒绝覆盖，需先把修改移回源文件或自行备份。`project.private.config.json` 已加入忽略清单。

### 只在自己的手机运行，不发布

在微信开发者工具中选择小游戏测试号或自己的小游戏 AppID，导入 `ncdls` 目录，编译通过后点击“预览”，再用自己的手机微信扫码。预览生成开发版，不需要提交审核或发布。需要排错时使用“真机调试”。这是平台提供的预览流程；本工程尚未实际启动，当前保留的远程初始化和未缓存资源仍可能导致启动/玩法错误。

官方依据：[小游戏新手教程（含测试号说明）](https://developers.weixin.qq.com/minigame/dev/guide/develop/start.html)、[开发版代码包通过预览及扫码获取](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/code-package.html)。

## 2. 本次修复了什么

| 问题 | 处理 |
| --- | --- |
| 提取的脚本仍是微信缓存 `define(...)` 注册包装 | 按模块表解开包装，恢复 CommonJS 文件及相对引用 |
| 启动入口与分类后的学习目录不匹配 | 恢复 `game.js → splash → index.js → libs/game.js`，保留原加载顺序 |
| 引擎依赖原发布项目的 Laya 插件 | 改成 `libs/laya/` 下的本地引擎引用 |
| 共享框架还留有另一套 `WXEngine` 可选插件路径 | 改为明确的缺失错误；当前配置未选择该引擎，未冒充提供它 |
| Emscripten 保留 Node 的 `fs/path` 引用 | 运行产物中移除不适用于微信的 Node 分支，避免编译期错误解析 |
| 未缓存的 `asmp2` 兼容分包失败后原代码不反馈 | 如走到该分支，明确提示需要 WebAssembly；实际 `laya.physics.wasm.wasm` 已复制 |
| 游戏屏蔽所有 console 日志 | 运行产物保留 `log/info/warn/error`，便于以后定位运行错误 |
| 资源分包缺少可导入的独立入口 | 为已缓存资源分包生成空 `game.js`，`libs` 保留代码入口 |
| 发布缓存配置带有内部字段与不存在的分包目录 | 新写 `game.json`，保留 10 个已缓存分包，根路径使用相对路径 |
| 主目录包含原包、文档等大量非运行文件 | 将源码根限定为 `wechat-game/`，不把学习归档打进小游戏 |

使用文档中的标准名称 `subpackages`。官方也支持 `subPackages`，因此大小写本身不是原缓存的错误。`parallelPreloadSubpackages` 在当前文档中是支持的；本次省略它，用主入口显式加载 `libs`，不沿用缓存里的历史警告字段。

主包源码约 **0.91 MiB**，运行目录总源码约 **27.22 MiB**。按本次查阅的官方文档，主包上限 4M、总包上限 30M、普通分包没有单独大小上限。这里统计的是文件字节数，正式编译后的包大小仍以开发者工具为准。

## 3. 车位全开放

修改在 [src/game/main.js](/Users/suanec/suanec/suanec-material/codes/ncdls/src/game/main.js)，可查看 [完整补丁](/Users/suanec/suanec/suanec-material/codes/ncdls/reports/parking-unlock.patch)。

普通挪车玩法使用 `dD` 车位组件，打巨龙玩法使用 `S` 车位组件。原逻辑中 `park` 数组的 `0` 表示普通车位，`1` 表示激励视频位；普通玩法中 `2` 表示分享位。普通玩法还会用 `gK.park_3` 覆盖其中一个位置。打巨龙当前代码把 `1/2` 都设为需要解锁的状态。

这里的“两套”指普通挪车和打巨龙两套玩法实现。当前 515 条有效关卡的 `park` 数组均有 7 个位置：前 4 个原本开放，后 3 个原本需要解锁；普通玩法的车位挂点模型也有 7 个子节点。因此本次每套玩法实际新增可用的是原来锁着的 3 个位置，最终为 7 个车位全部可用，不是新增 3 个地图位置。普通玩法最后三个位置中的第一个还会受 `gK.park_3` 覆盖，本次组件层修改同样覆盖该情况。

两套组件现在均做了以下处理：

- `video` getter 始终返回 `false`，车辆选择车位、失败判断和道具查询都能看到开放状态。
- setter 忽略传入的锁定值，隐藏锁定图标；打巨龙分享位恢复普通材质。
- 关卡创建车位时直接设为开放，重开关卡不会重新加锁。
- 点击车位直接保持开放，不再调用分享、激励视频及对应广告埋点。

“全部开放”指地图里已经存在的车位全部可用。车位总数、坐标、车辆占用、出入移动和容量约束仍按地图运行。VIP 模型的身份判断保留，它不再影响 `video` 可用性。其他功能的广告和分享逻辑仍保留。

## 4. 一共有多少关

以下是 **当前缓存配置条数**，各玩法已扣除 `id=0` 的空白占位行：

| 玩法 | 表名 | 有效配置 |
| --- | --- | ---: |
| 普通挪车打螺丝 | `drama_temp` | 294 |
| 招财猫 | `cat_temp` | 12 |
| 星座 | `star_temp` | 12 |
| 海洋 | `sea_temp` | 27 |
| 雪地 | `snow_temp` | 30 |
| 哪吒 | `nezha_temp` | 30 |
| 挪车打巨龙 | `ncdjl_temp` | 110 |
| 合计 | | **515** |

普通挪车及五个变体共 405 条，加打巨龙 110 条得到 515。它们不等于 515 张独立地图，也不等于 515 关都已具备本地资源。普通关卡、星座、海洋、雪地、哪吒等取表逻辑有取模循环；招财猫在当前入口中按进度直接索引。显示关卡数不能据此认定为到 515 就结束。

另有 **347 个二维地图名称、236 条车辆地图统计、235 套车辆布局、269 组板块布局、58 套难度配置、24 套颜色权重配置**。这些是不同层次的数据，不能相加当作关卡数量；地图编号 `0` 有实际内容，不能像玩法空占位行一样删除。

详细统计和引用检查在 [level-analysis.json](/Users/suanec/suanec/suanec-material/codes/ncdls/reports/level-analysis.json)。

## 5. 预设地图配置在哪

原 `assets/` 中若干 `.json` 实际经过 Brotli 压缩。新增的可读文件在 `config/decoded/`；**修改可读副本不会自动改写游戏资源**。

| 文件 | 内容 |
| --- | --- |
| [drama_core.json](/Users/suanec/suanec/suanec-material/codes/ncdls/config/decoded/drama_core.json) | 各玩法关卡总表；`map_3d`、`map_2d`、`park`、层级等；`dls_map_temp` 映射二维地图名到 FGUI 包；`nc_map_temp` 记录车辆、螺丝等统计 |
| [toolBoxData1.json](/Users/suanec/suanec/suanec-material/codes/ncdls/config/decoded/toolBoxData1.json) | `ToolBox{map_3d}`：车辆位置、颜色、容量与方向，以及车库、障碍物布局 |
| [planeBoxData.json](/Users/suanec/suanec/suanec-material/codes/ncdls/config/decoded/planeBoxData.json) | 板块组的形状、位置、旋转和螺丝孔位置 |
| [home-config.expanded.json](/Users/suanec/suanec/suanec-material/codes/ncdls/config/decoded/home-config.expanded.json) | 已展开字段字典的难度和颜色配置，优先读这一份：`levelData`、`colourData`、`collectData` |
| [home-config.json](/Users/suanec/suanec/suanec-material/codes/ncdls/config/decoded/home-config.json) | 上一份的原始字典压缩结构，`keys`、行内数字均需查 `dic` |
| [resource-index.json](/Users/suanec/suanec/suanec-material/codes/ncdls/config/decoded/resource-index.json) | 从业务脚本中的 `MediaMetaMap.ani9` 提取的资源编号、分组和 CDN 根地址 |

对应的运行原始数据路径：`assets/json/drama_core.json` 和 `assets/res/home/json/{config,planeBoxData,toolBoxData1}.json`。构建后相同路径出现在 `wechat-game/` 下。

例如哪吒第 1 条配置的 `map_3d=923`、`map_2d=Level_哪吒_莲花哪吒`：车辆布局查 `toolBoxData1.json → ToolBox923`；二维画面在 `drama_core.json → dls_map_temp` 按名称查 `pkg/used`，再加载 `res/dls_*/daluosi2d/fgui/` 对应的 `.bin` 和图集。这里的二维组件布局保存在 FairyGUI 二进制包里，不全是 JSON。

打巨龙另走 `ncdjl_temp` 中的 `rid/env/path/js`，对应 `res/other/nuochedajulong/` 的地图、路径和 `sorted_carPathJson.json`。当前资源尚未缓存。

## 6. 关卡是固定的还是生成的

结论是 **预设布局加局部随机**。

1. **布局主要预设。** 关卡表选定地图，车辆、障碍、板块和孔位从上述配置读取；二维图案来自预制 FGUI 组件。`generateAllToolBox`、`generateAllPlane` 在这里主要是按配置创建对象。
2. **螺丝颜色动态分配。** `getScrewsColorFromAllPool` 从已停靠、可移动、被阻挡等车辆需求池中按权重选池，再在池内按颜色权重分配，使用 `Math.random()`。玩家当前局面也会影响颜色选择。
3. **后期关卡可随机匹配基础模板。** 普通玩法 `initMap` 遇到 `map_3d > 60` 时，会找螺丝总数相同的候选配置，再用 `Utils.Random.get` 选一个基础模板；车辆布局仍使用当前关卡原来的地图编号。
4. **打巨龙也有随机逻辑。** 预设车辆路径和关卡参数之外，会随机配色、洗牌、按权重选择颜色；部分颜色结果写入本地 `colorConfig`，重进时可能复用，并非每次都完全重新随机。

没有在这些关卡构建路径里看到“每过一关就向服务器请求生成完整地图”的实现。这个结论来自静态阅读，不代表做过联网抓包；远端开关和资源下载仍可能影响实际呈现。

源码定位可搜索：`GetLevelTemp`、`getCurrentLevelData`、`generateAllToolBox`、`getScrewsColorFromAllPool`、`weightedRandom`、`找不到匹配的temp数据`、`randomColorArr`、`colorConfig`。

## 7. 打巨龙入口

按这份客户端代码：**主页的更多游戏入口 → 列表最后一项“挪车打巨龙”**。主页按钮变量为 `btn_games`，`onBtnMoreGame` 打开 `MoreUI`；`GetGames` 将“挪车打巨龙”放在列表末尾，选择后调用本地 `NcdjlGameUI`。这条入口没有单独的通关等级门槛。

列表中的其他游戏有跳转到别的小程序的分支，打巨龙使用的是 `local.open`。本地缺少它的画面、地图等资源，只有入口和代码不代表能离线进入。

## 8. 有哪些联网逻辑

以下是代码中可见的调用链和字面量域名，不是实际请求日志。本次没有访问这些游戏服务。可核对 [network-analysis.json](/Users/suanec/suanec/suanec-material/codes/ncdls/reports/network-analysis.json) 及 [src/platform/ads.js](/Users/suanec/suanec/suanec-material/codes/ncdls/src/platform/ads.js)。

| 类别 | 调用与作用 |
| --- | --- |
| 微信登录 | 加载页 `initCm → Ad.mainCH().login → wx.login`；SDK 另有平台 code 换服务端登录态的流程 |
| 运营初始化、远程参数 | `api.game.chot.cn`，失败时可回退 `api1.game.chot.cn`；SDK 的 `operate` 包括 `game.init_app`、`user.login`，返回开关、自定义参数、推荐信息等 |
| 进度、排行、用户数据 | 同一 SDK 的 `user.update_user_data`、`user.get_user_data`、`rank.receive_level`、`rank.get_world_rank`、`user.report_game_data`；实际调用受平台与功能开关影响 |
| 分享关系、奖励、订阅、导流 | `share.append_share`、`share.get_share_info`、`share.get_shared_rewards`、`user.subscribe_game`、`statistic.start`、`statistic.jump_out`；还有微信分享、跳转小程序等 API |
| CDN 资源 | `cdn.game.chot.cn/resource/carcrewd_ncdls_wx`，共享加载器生成资源路径并下载未内置资源；不是关卡内容生成 API |
| 广告 | 微信渠道创建激励视频、横幅、插屏、原生广告等对象；当前车位不再走这些解锁请求，其他道具/奖励广告仍可能调用 |
| 数据分析与归因 | `api.datanexus.qq.com` 的 SDK 配置、日志、行为接口；包含启动、关卡、广告等事件。另有 `sr-home-1257214331.cos.ap-guangzhou.myqcloud.com` SDK 资源地址 |
| 微信好友排行 | 主域 `setUserCloudStorage` 写入分数，开放数据域 `getFriendCloudStorage` 读取好友托管数据 |
| 云存档相关代码 | 配置中有腾讯云函数和 COS 地址，`oss_cache.mode=0`；存在相关客户端代码不等于当前构建默认启用云同步 |
| 多平台 SDK 分支 | `analytics.oceanengine.com`、`gate.snssdk.com`、`ad.partner.gifshow.com`、`gamectrl.ikun666666.com` 等；分别属于其他渠道/SDK 路径，不能把它们都说成微信启动必发请求 |

`weapp-adapter` 提供 WebSocket 到 `wx.connectSocket` 的通用适配；当前静态检索未发现业务主动建立游戏 WebSocket 会话。许多本地状态存储、Brotli 解压与预设地图解析本身不联网。

**本次没有把整个游戏改造成完全离线版。** 保留的登录、远端参数、广告、排行榜以及 CDN 仍可能因身份或资源不可用而失败。不能把域名校验关闭、空成功回调或填写原 AppID 当作这些服务已经恢复。本次只去掉了车位解锁相关的分享/广告调用。

## 9. 资源缺口和验证范围

已缓存 10 个声明分包，另有主包和本地引擎。主玩法及哪吒等现有包按原路径复制。`room_2` 至 `room_12` 按要求没有继续补齐，也没有写入不存在的目录声明。

进一步按资源索引核对发现：

- `dls_cat` 组 11 个索引资源，本地缺 11 个。
- `other` 组 246 个索引资源，内容为打巨龙相关资源，本地缺 246 个。
- 这些分组属于资源加载器的远端资源，并未列在原 `game.json` 的本地分包声明里；因此仅检查声明分包会漏掉它们。
- 房间缺口另列在报告，未尝试下载。所有已缓存索引分组的对应文件均存在。

完整清单见 [resource-reference-audit.json](/Users/suanec/suanec/suanec-material/codes/ncdls/reports/resource-reference-audit.json)。这份报告只覆盖索引已列出的资源，不能排除运行时拼接地址带来的其他需求。

已完成的验证：38 个运行脚本语法检查、21 处字面量模块引用解析、10 个分包入口检查、1,886 个资源 SHA-256 对照、WASM 文件头检查、两套车位修改检查、主包/总源码体积估算。原归档另校验了 1,904 个解包文件的哈希。

405 条普通及变体关卡引用的二维地图名、车辆布局、直接使用的难度配置，以及难度配置引用的板块组，静态检查均未发现缺失。网络接口有效性、SDK 回调时序、真实渲染、物理行为、开放域权限和完整通关流程没有运行验证。

## 10. 使用的官方文档

- [项目配置文件：compileType、源码根目录、编译设置](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)
- [小游戏 game.json 配置](https://developers.weixin.qq.com/minigame/dev/reference/configuration/app.html)
- [小游戏分包加载与入口规则](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/subPackage/useSubPackage.html)
- [wx.loadSubpackage：加载后自动执行分包代码](https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.loadSubpackage.html)
- [代码包大小与文件类型](https://developers.weixin.qq.com/minigame/dev/guide/base-ability/code-package.html)

以上为本次修复的文档依据；没有进行开发者工具安装、模拟器运行或线上发布。
