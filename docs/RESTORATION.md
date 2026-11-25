# 工程还原与资源地图

来源为本机微信小游戏 `wxa3bf2c77158be359` 的客户端缓存版本 `43`，2026-11-24 开始整理。产物包含发布 JavaScript、引擎、配置和已访问内容的资源；没有原始 TypeScript、完整 Laya/FairyGUI 编辑器项目或服务端源码。

## 目录与运行链

| 目录 | 用途 |
| --- | --- |
| `src/bootstrap/` | 微信启动顺序：game → splash/index → libs |
| `src/game/main.js` | 业务代码，原 bundle；开头的大段内容是资源表 |
| `src/shared/` | W、B、C、M、utils 等原共享框架 |
| `src/platform/`、`src/open-data/` | 微信适配、广告 SDK、开放数据域 |
| `vendor/laya/`、`vendor/runtime/` | Laya 及 FairyGUI、Spine、物理运行库 |
| `assets/` | 当前收集到的运行资源，原压缩数据保留 |
| `config/decoded/` | 为阅读解码的配置副本 |
| `raw/` | 原包、解密包、解包文件及插件归档 |
| `web/`、`web_mobile/src/` | 浏览器外壳与 PWA 适配 |
| `scripts/`、`reports/` | 提取、同步、构建、检查与证据 |

模块对应关系见 [module-map.json](../reports/module-map.json)。格式化只是拆模块和排版，混淆变量仍存在；优先搜索方法名阅读，不做未经验证的全局改名。Laya 是负责渲染、动画、加载和物理接口的游戏引擎；本项目缓存配置声明插件版本 2.13.0。

## 缓存恢复中解决的问题

- 发布包的 `define(...)` 包装和分类目录不能直接作为微信入口：构建恢复模块引用、启动顺序和分包入口。
- 引擎依赖原微信插件：构建改用本地 `vendor/` 引擎；未提供的可选 WXEngine 分支明确报错。
- 物理库保留 Node 环境分支：微信产物移除不适用的 `fs/path` 引用，并补齐 WASM 路径。
- 部分 `.json` 实际是 Brotli 字节：原件保留，阅读时解码，网页构建时展开。
- 原游戏屏蔽控制台：运行产物保留日志，方便排查。
- 缓存只包含访问过的内容：不能把“声明分包齐全”当作所有运行资源齐全。

原始格式参考：[包解密](https://github.com/BlackTrace/pc_wxapkg_decrypt/blob/master/main.go)、[包索引](https://gist.github.com/Integ/bcac5c21de5ea35b63b3db2c725f07ad)。本地工具还检查包头、边界和输出路径。

## 当前资源与补齐方法

当前有 10 个已缓存的声明分包、1,886 个归档资源；`dls_main`、`dls_snow` 已补齐。缺口包括 `room_2`～`room_12`，以及资源索引中的 `dls_cat` 11 项、打巨龙 `other` 246 项。房间按用户要求停止补齐；猫咪、打巨龙未开放网页选关入口。

```sh
npm run resources       # 查看资源状态
npm run sync:resources  # 用户在微信里加载相关内容后，同步本机版本 43 的缓存
npm run decode:configs  # 更新阅读副本
npm run check           # 原包、资源哈希及脚本语法
```

同步只更新资源/原包/报告，不运行游戏、不主动下载、不覆盖业务源码；变动文件备份到 `.sync-backups/`。微信升级了缓存版本时应重新核对整套代码和资源，避免混用。同步后按目标重新构建。触发 `dls_main` 的关卡可查 [触发配置](../reports/dls-main-triggers.json)。

状态来源：[声明分包](../reports/resource-status.json)、[索引资源缺口](../reports/resource-reference-audit.json)。索引检查不覆盖所有运行时拼接 URL。

## 配置与素材位置

| 阅读入口 | 对应内容 |
| --- | --- |
| [drama_core.json](../config/decoded/drama_core.json) | 关卡表；`map_3d`、`map_2d`、车位、层级；二维包与车辆地图索引 |
| [toolBoxData1.json](../config/decoded/toolBoxData1.json) | `ToolBox{map_3d}`：车辆、车库、挡板的位置与参数 |
| [home-config.expanded.json](../config/decoded/home-config.expanded.json) | `levelData` 难度/基础配置与 `colourData` 配色权重 |
| [planeBoxData.json](../config/decoded/planeBoxData.json) | 基础板块组、位置、旋转与孔位；实际二维画面还使用 FGUI 组件 |
| [resource-index.json](../config/decoded/resource-index.json) | 资源 ID、路径、分组及原 CDN 根地址 |
| [汽车资源](../assets/res/home/car/) | 车型、材质、贴图，车库数字 `Assets/Game_tex/num_0.png`～`num_9.png` |
| [螺丝资源](../assets/res/home/screw/) | 螺丝模型、材质；二维螺丝与卡片还依赖 FGUI 图集 |

运行原件在 `assets/json/drama_core.json`、`assets/res/home/json/`；**改 `config/decoded/` 不会自动回写原件**。二维组件还保存在 `res/dls_*/daluosi2d/fgui/` 的 `.bin` 和图集中，并非所有布局都在 JSON。

例：哪吒首关 `map_3d=923`，车辆查 `ToolBox923`；`map_2d=Level_哪吒_莲花哪吒`，再查 `dls_map_temp` 的 `pkg/used` 找二维包。打巨龙另用 `ncdjl_temp` 的 `rid/env/path/js`，当前缺少相应资源。原客户端入口是“更多游戏”最后一项，入口存在不代表可离线运行。

## 微信工程的边界

根目录 `project.config.json` 指向生成目录 `wechat-game/`，不是可直接在 Laya 编辑器继续设计的原始工程。

```sh
npm run build:wechat
npm run check:wechat
```

已做模块、分包、WASM、哈希与车位静态检查；按用户要求未安装开发者工具，未完成微信编译、手机预览或发布验收。`touristappid` 只是占位；未来使用微信预览需自己的有效小游戏身份及平台配置。当前交付和日常游玩以网页为主，不将网页测试结论套用到微信工程。
