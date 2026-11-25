# 联网范围与数据存储

适用 `20261125.5` 网页构建。微信缓存源码仍带多平台 SDK，不能把源码里的每个域名都当成当前网页实际请求。

## 当前网页

页面、运行代码、配置、模型、图片、音效和 WASM 从部署站点同源读取；正式站点为 `suanec.github.io/ncdls/`。运行时 `base_url` 已改为当前站点，`oss_cache` 设为 null。关卡选择、配色、碰撞和存档不依赖新增业务后端。

| 请求 | 何时发生 |
| --- | --- |
| 页面、CSS、启动脚本、`scripts.json`、`runtime/` | 打开/更新时；有效缓存可复用 |
| `res/`、`libs/`、配置 | 当前关卡或特效需要，且本地未缓存时 |
| `sw.js`、离线清单 | 准备缓存、检查更新或完整下载 |
| `offline-packs/` | 首次选择全量，或点击保存/更新全部资源时 |
| 校验失败的资源 | 按需重新下载，不自动补齐全部关卡 |

存档在 localStorage，资源在 Cache Storage；诊断留在内存，用户复制/导出才离开页面。本次已去掉车位解锁，以及网页磁铁、刷新的广告路径；其他旧 SDK 代码没有全局删除或统一封锁。

## 实测范围

本地当前构建、隔离 Chrome 手机视口，覆盖启动、经典第 2/294 关、刷新、出车和磁铁按钮路径：记录 **327 个 GET，第三方 HTTP(S) 请求尝试为 0，无页面异常**。该请求观察使用本地文件路由、关闭 Service Worker，并设置第三方尝试记录后拦截；结果没有触发拦截。缓存请求另由源码和缓存测试核对。

见 [请求记录](../reports/web-network-20261125.5.json)。这不是所有玩法、结算、隐藏入口或每款手机的全量抓包，也没有证明原 SDK 所有分支永远不会发请求。

## 原代码保留的地址

| 域名/地址 | 原用途或来源 |
| --- | --- |
| `api.game.chot.cn`、`api1.game.chot.cn` | 运营初始化、登录、用户数据、排行、分享关系与行为上报 |
| `cdn.game.chot.cn` | 原资源 CDN；网页资源根地址已替换 |
| `api.datanexus.qq.com` | 腾讯统计、配置、行为/广告归因 |
| `sr-home-1257214331.cos.ap-guangzhou.myqcloud.com` | 腾讯统计 SDK 下载 |
| `yw-1254280439.cos.ap-guangzhou.myqcloud.com`、`1254280439-3c74rpfh1t.ap-guangzhou.tencentscf.com` | 原云存档相关配置 |
| `mmocgame.qpic.cn` | 分享图片 |
| `analytics.oceanengine.com`、`gate.snssdk.com`、`ad.partner.gifshow.com`、`gamectrl.ikun666666.com` | 其他平台 SDK 的归因、视频、运营等分支 |
| `192.168.2.245:8001` | 共享代码中的内网地址，当前测试未访问 |

微信工程另保留 `wx.login`、广告、云排行、分享/跳转等平台 API；通用适配器提供 WebSocket，但静态检索未发现主动建立游戏 WebSocket 会话的业务路径。原云存档 `mode=0`，存在代码不代表默认启用。

静态地址与操作名见 [network-analysis.json](../reports/network-analysis.json)，来源为 `src/platform/ads.js`、`src/game/main.js`、`src/shared/W.js`；该清单不是请求日志。

## 部署到内网或换托管

当前已测试玩法可以从普通静态服务运行，现有站点下载地址随部署来源变化，不需要原游戏服务器返回地图。未缓存内容、首次下载与更新仍需要能访问该静态站点；真正不联网要先保存离线包并冷启动验证。

换域名不会自动带走 localStorage；先导出再导入。局域网 HTTP 缺少持久离线能力，要用 HTTPS。当前没有实施第三方域名总开关或 CSP 白名单；若以后要做到严格禁止外联，应单独设计和验证，不把本次“未观察到”写成安全保证。
