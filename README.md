# 挪车打螺丝学习工程

**手机浏览器入口：** [挪车打螺丝](https://suanec.github.io/ncdls/)。从首次打开、添加主屏幕到离线下载，按 [手机逐步操作文档](docs/MOBILE_OPERATION.md) 操作。游戏通过独立仓库 Pages 部署，个人主页只增加入口链接。部署状态见 [Actions](https://github.com/Suanec/ncdls/actions)。

**网页版已加入：** 执行 `npm run web`，打开 <http://127.0.0.1:8088/> 即可游玩。复用原引擎、资源、玩法和关卡，附带选关菜单；详见 [网页版运行说明](docs/WEB.md)。无需安装依赖或微信开发者工具。

手机试玩：手机与电脑连接同一 Wi-Fi，执行 `npm run serve:web:lan`，在手机浏览器打开终端打印的 `LAN` 地址。

**手机离线版已加入：** 执行 `npm run mobile`，打开 <http://127.0.0.1:8091/>。新增“离线与存档”菜单，可查看、导出、导入存档，下载完整资源后离线游玩。手机首次安装需要受信任的 **HTTPS** 站点；普通 LAN HTTP 仍只能在线试玩。详见 [手机离线版说明](web_mobile/README.md)。

版本 `20261124.3` 修复第一关车辆、车位重复使用同一模型实例的问题，保持引擎默认 WebGL 路径。默认按关卡加载；只有点击“离线与存档 → 保存离线资源 / 检查并下载更新”才下载完整资源。浏览器自动检查更新不会再启动全量下载。验证记录与 iPhone 真机验收边界见 [渲染兼容说明](docs/RENDERING.md)。

正式入口固定为 [https://suanec.github.io/ncdls/](https://suanec.github.io/ncdls/)，不需要在网址里带版本号。`?v=...` 只辅助刷新入口，不会锁定或切换到某个历史版本，也不改变存档归属。发布会更新该入口；保存过离线包的设备仍需手动更新，网址参数不会绕过离线缓存。

画面异常时，点“选择关卡 → 重启游戏（保留存档）”，会重建绘图环境并回到当前关卡开始。清缓存与更新离线包的区别见 [手机操作指南](docs/MOBILE_OPERATION.md#清除缓存与存档的区别)。

存档保存在浏览器的 `localStorage`，键名为 `user_json_ncdls_web`，不是工程中的文件。菜单“查看存档”可直接读取；电脑控制台可执行 `JSON.parse(localStorage.getItem('user_json_ncdls_web'))`。不同协议、域名/IP 或端口会分开保存，重启静态服务器不会删除进度。

这是从本机微信缓存提取的客户端静态学习工程。脚本已按模块拆分并排版，图片、音效、模型和场景资源单独归档。游戏 AppID 为 `wxa3bf2c77158be359`，缓存版本为 `43`，提取日期为 2026-11-24。

本目录现包含学习源码和微信小游戏还原工程：根目录 `project.config.json` 指向 `wechat-game/`，可以用本目录作为开发者工具的导入目录。微信工程只进行了静态还原和检查，没有安装开发者工具；另有经过 Chrome 抽样运行验证的网页版。原始编辑器工程和服务端代码没有恢复。

**详细说明见 [工程还原、车位、关卡与联网说明](docs/RESTORATION.md)。** 普通玩法和打巨龙的已有车位均已放开。当前有 515 条有效玩法关卡配置（普通及变体 405、打巨龙 110），布局主要预设，配色等含随机逻辑；配置数量不等于本地可玩关数。

修改 `src/`、`vendor/` 后执行 `npm run build:wechat`，再用 `npm run check:wechat` 做静态检查。资源同步后也需要重新构建。请勿直接修改生成的 `wechat-game/`；构建会检测并拒绝覆盖其中的手工修改。

可读地图配置在 `config/decoded/`：优先看 `drama_core.json`、`home-config.expanded.json`、`toolBoxData1.json`、`planeBoxData.json`。解码副本用于学习，不会自动回写运行资源。

## 目录

```text
web/                网页启动与适配源码
web-game/           生成的可运行静态网页版
web_mobile/         手机 PWA 源码、完整 dist/、离线与存档说明
project.config.json  微信开发者工具导入配置
wechat-game/         生成的运行目录
docs/                还原、车位、关卡、联网说明
src/
  bootstrap/       启动流程和依赖加载顺序
  game/main.js     游戏业务脚本，原 libs/min/bundle.min.js
  shared/          B、C、M、W、utils 等共享模块，保留原名称
  platform/        微信适配与广告模块
  open-data/       开放数据域与排行相关代码
  subpackages/     资源分包中的入口模块
vendor/
  laya/            本地缓存的 Laya 插件模块
  runtime/         FairyGUI、Spine、物理等运行库
assets/            已缓存的图片、音效、场景、模型及二进制配置
config/            发布包配置与代码混淆配置
raw/               原始加密包、解密包、未经排版的解包文件
reports/           模块对应表、哈希清单和资源缺口
scripts/           静态校验、解包、缓存资源同步
```

`reports/module-map.json` 给出原模块名与当前文件的完整对应关系。`raw/` 保留原始文件结构，可作为后续进一步还原的依据。打开 `ncdls.code-workspace` 可以在 VS Code 中默认折叠原始归档，并让搜索优先覆盖业务代码。

## 建议阅读顺序

1. `src/bootstrap/game.js`：加载启动画面，初始化适配层，再进入 `index.js`。
2. `src/bootstrap/index.js`：设置竖屏，加载 `libs` 分包。
3. `src/bootstrap/load-libraries.js`：依次加载 Laya 插件、FairyGUI、共享框架和业务包。
4. `src/game/main.js`：业务入口。可搜索 `GameConfig`、`RankSceneUI`、`planeBoxData`、`toolBoxData1`；文件开头有很长的资源表，后续才是主要业务类。
5. `assets/res/`：结合代码中的资源路径查看对应图片、场景与模型。

`config/app-config.json` 声明的 Laya 插件版本是 `2.13.0`。`vendor/laya/` 来自同一 provider 的本地插件缓存，构建时复制为本地引擎模块。运行产物已做静态校验，未进行完整运行验证。

## 资源完整性

初次提取到主包及 8 个分包，共 1,257 个解包文件，另有独立 Laya 插件包。游戏配置声明了 21 个分包。

初次缺少：`dls_main`、`dls_snow`、`room_2` 至 `room_12`。最新状态以 `reports/resource-status.json` 和以下命令为准：

```sh
npm run resources
```

在这台 Mac 的微信中进入对应玩法、场景或房间后，可同步新增缓存：

```sh
npm run sync:resources
npm run check
```

同步脚本只读取此 AppID 的版本 43 缓存，更新 `assets/`、`raw/` 和资源报告。它不会修改 `src/`、`vendor/`，也不会运行游戏逻辑或主动联网；被替换的不同内容会备份到 `.sync-backups/`。若游戏更新到其他版本，应重新提取整套代码，避免混用版本。

分包到齐不等于远程资源全部到齐。资源索引对照额外发现 `dls_cat` 的 11 个资源和 `other`（打巨龙）的 246 个资源尚未缓存，见 `reports/resource-reference-audit.json`。关卡运行时从 CDN 加载的内容可能另存其他缓存；本次只整理 `.wxapkg` 内的文件。若干扩展名为 `.json` 的资源实际是 Brotli 压缩数据，原文件保持不变。`npm run decode:configs` 可更新关卡总表与三份主玩法配置的可读副本。

## 校验

需要 Node.js 18 或更高版本；以下命令不需要安装依赖：

```sh
npm run check
```

检查脚本静态解析 `src/`、`vendor/` 和工具脚本，并校验原始包、解密包、解包文件、资源的 SHA-256。它不会执行第三方游戏代码。格式化使用 Prettier 3.10.1；排版不等于去混淆。

## 格式参考

- 包解密格式参考：https://github.com/BlackTrace/pc_wxapkg_decrypt/blob/master/main.go
- 包索引格式参考：https://gist.github.com/Integ/bcac5c21de5ea35b63b3db2c725f07ad

本地 `scripts/extract.cjs` 实现了包头、长度、文件边界和输出路径校验。需要单独提取时，指定输入缓存目录、AppID 和一个新的输出目录：

```sh
node scripts/extract.cjs /path/to/wxa3bf2c77158be359/43 wxa3bf2c77158be359 /path/to/new-output
```
