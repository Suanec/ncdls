# 开发、发布与回滚

当前网页复用原 Laya、FairyGUI、物理、玩法和素材，通过 HTML/CSS/JavaScript 外壳运行，无业务后端。版本与入口统一见 [README](../README.md)。

## 本地启动

在工程根目录执行，Node.js 18+，无需安装 npm 依赖：

| 用途 | 构建并启动 | 已有产物只启动 | 地址 |
| --- | --- | --- | --- |
| 基础网页 | `npm run web` | `npm run serve:web` | `http://127.0.0.1:8088/` |
| 手机/PWA，与正式入口一致 | `npm run mobile` | `npm run serve:mobile` | `http://127.0.0.1:8091/` |
| 手机访问电脑 | `npm run web:lan` / `npm run mobile:lan` | `npm run serve:web:lan` / `npm run serve:mobile:lan` | 终端打印的 LAN 地址 |

手机和电脑需要网络互通；手机的 `localhost` 指向手机自身。电脑保持开机与服务运行。公司 Wi-Fi 的设备隔离、防火墙、错误 IP/端口会导致局域网不可达；复制网址不能修复网络连通性。

Ctrl+C 停止前台服务。8088 被后台进程占用时，先查看占用者，确认是本游戏服务再结束：

```sh
lsof -nP -iTCP:8088 -sTCP:LISTEN
kill <确认过的PID>
# 或换端口，不结束其他服务
PORT=8089 npm run serve:web
```

普通 LAN HTTP 只能在线运行；手机持久离线缓存需要受信任 HTTPS，电脑 localhost 可用于开发测试。当前多文件/WASM 版本不支持直接双击 `file://` 页面。

## 修改与校验

| 修改入口 | 负责什么 |
| --- | --- |
| `src/game/main.js`、`src/shared/` | 游戏规则与共享运行时 |
| `web/` | 首屏、选关、重启、诊断、引擎适配 |
| `web_mobile/src/` | 首次资源选择、缓存、离线更新、存档 |
| `scripts/web-runtime-compat.cjs` | 网页构建时去除旧平台检查，保留对象池维护 |
| `scripts/web-props-compat.cjs` | 网页磁铁/刷新免费且可重复使用 |
| `assets/` | 实际运行资源；解码副本见 [工程还原](RESTORATION.md) |

```sh
npm run build:web
npm run check:web
# 正式站点对应手机产物
npm run build:mobile
npm run check:mobile
```

构建将原资源展开到生成目录；基础网页保留脚本顺序，手机版合并运行脚本、生成清单和离线包。勿手改 `web-game/`、`web_mobile/dist/`、`wechat-game/`：重建会检测并拒绝覆盖手工改动。

静态/单元检查不等于画面验收。资源、渲染、缓存或玩法有改动时，再运行相关 `scripts/probe-*.cjs` 浏览器检查；这些脚本另外需要 Playwright 和浏览器。版本范围见 [报告索引](../reports/README.md)，不用为纯文档整理重跑游戏。

## 发布 GitHub Pages

游戏独立仓库为 `Suanec/ncdls`；个人主页仓库仅保留链接。游戏仓库 Pages 来源设置为 GitHub Actions，工作流为 [deploy-mobile-pages.yml](../.github/workflows/deploy-mobile-pages.yml)。

1. 游戏相关修改推到 `main`，或手动触发工作流。
2. 工作流构建 `web_mobile/dist/`、运行 `check:mobile`，只上传这个静态产物。
3. 在 [Actions](https://github.com/Suanec/ncdls/actions) 确认 build/deploy 成功，再核对线上选关菜单版本及实际画面。
4. 旧完整离线包需要用户更新；发布成功不会立即替换每个手机上的缓存。

正式入口不需要 `?v=...`；参数不是历史版本选择器，也不能绕过 Service Worker。新域名可另行部署同一产物，但存档按浏览器来源隔离，须导出/导入迁移。无需为当前游戏另搭业务服务器。

## 里程碑与恢复

固定标签 **`milestone-20261125.5`** 指向 `4401c3804449d207abfc51f3eb638f2c74d44a52`，已经推送远端。备份源码、配置、资源及验证记录；手机存档不在 Git 中。后续版本另建标签，不移动这个基准。

先提交或备份自己的未提交修改，再开恢复分支查看旧版：

```sh
git fetch origin --tags
git switch -c restore-20261125.5 milestone-20261125.5
npm run build:mobile
npm run check:mobile
```

这只恢复本地工作副本，不会改变线上。线上回滚应把目标版本构建并重新部署；可以手动运行历史 ref 的工作流（受仓库环境权限限制），也可以在当前主线创建回退提交。保留后续历史，不使用强推覆盖 main。当前构建只允许覆盖未被手改的旧产物；有改动时先备份并移出生成目录。

回滚之后仍需验证入口、资源版本与旧缓存升级；手机用“检查并下载更新”或恢复入口切换。更旧代码未必兼容未来新增的存档字段，玩法或存档结构改变前应额外导出存档。
