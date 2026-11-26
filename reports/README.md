# 报告索引与证据范围

这里保留提取、检查、故障复现、发布与浏览器测试的原始记录。当前实现以 [项目 README](../README.md) 和 [故障记录](../docs/TROUBLESHOOTING.md) 为准，**旧报告是当时快照，不是当前验收结论**。本次文档整理不重写旧 JSON、截图、补丁，也不将旧测试标成重新运行。

浏览器记录中的 `iphoneVerified: false` 等字段应按原意理解：桌面 WebKit 或手机视口不等于真实 iPhone。`success` 只覆盖该脚本列出的断言；请求计数、对象数量正确不能单独证明画面/全部关卡正常。

协作过程另见 [会话统计](conversation-statistics-20261125.json)：截至 2026-11-25 本次统计请求的轮次、技能使用和消息主题分类，不是游戏测试结果。

## 当前基准相关

| 报告 | 版本与范围 |
| --- | --- |
| [settings-icons-chrome](settings-icons-chrome.json)、[webkit](settings-icons-webkit.json) | `20261126.2`：静态图标声明、PNG 解码、震动开关保存且设备调用为零；不是 iPhone 主屏幕安装测试 |
| [settings-icons-release](settings-icons-release.json) | `20261126.2`：发布成功，线上页面、脚本、三种图标和缓存控制器均与本地构建一致 |
| [audio-playback-baseline-webkit](audio-playback-baseline-webkit.json)、[chrome](audio-playback-chrome.json)、[webkit](audio-playback-webkit.json) | `.5` 基线 / `20261126.1` 修复：HTML 背景音乐失败、真实点击重试、切关/重启保留进度、非音频错误与简短失败页；桌面故障注入，非真机播放策略复现 |
| [audio-playback-release](audio-playback-release.json) | `20261126.1`：Pages 发布成功，线上页面/修复脚本一致，缓存清单匹配；本地与 CI 图标仅压缩字节不同，非手机游玩测试 |
| [resource-loading-chrome](resource-loading-chrome.json)、[webkit](resource-loading-webkit.json) | `20261125.5`：首次加载选择、坏图片校验与重取、缓存重开、销毁对象保护；不是截图原现场的真机复现 |
| [web-network-20261125.5](web-network-20261125.5.json) | `.5` 本地隔离 Chrome：启动、经典 2/294、道具路径；327 GET，未观察到第三方请求尝试；无 Service Worker、非全功能抓包 |
| [unlimited-play-chrome](unlimited-play-chrome.json)、[webkit](unlimited-play-webkit.json) | `20261125.4`：关号循环、安全整数边界、磁铁/刷新数量与重启保存 |
| [platform-freeze-chrome](platform-freeze-chrome.json)、[webkit](platform-freeze-webkit.json) | `20261125.3`：普通来源、第 2/294 关超过 2000 帧的停绘修复验证 |
| [level-analysis](level-analysis.json) | 配置统计：515 条全玩法模板、294 条经典；不代表所有资源完整 |
| [network-analysis](network-analysis.json) | 源码中域名与操作名静态清单；不是已发出的请求 |

固定备份标签：`milestone-20261125.5` → `4401c38`。本目录后续索引/说明提交不改变这份游戏基准。

## 还原与资源

| 报告 | 用途/限制 |
| --- | --- |
| [package-manifest](package-manifest.json)、[laya-plugin-manifest](laya-plugin-manifest.json) | 微信缓存版本 43 的包与引擎归档 |
| [module-map](module-map.json)、[reading-report](reading-report.json) | 模块对应与格式化记录；后者早期 `modules/readable` 等路径为当时布局，现布局见工程还原文档 |
| [asset-manifest](asset-manifest.json)、[resource-status](resource-status.json) | 已归档文件哈希、声明分包状态；不是所有远程内容清单 |
| [resource-reference-audit](resource-reference-audit.json) | 资源索引缺口；不覆盖所有动态拼接 URL |
| [dls-main-triggers](dls-main-triggers.json) | 按配置推导会使用该包的关卡 |
| [parking-changes](parking-changes.json)、[parking-unlock.patch](parking-unlock.patch) | 两套车位实现的改动证据 |
| [wechat-build](wechat-build.json)、[wechat-static-check](wechat-static-check.json) | 微信工程构建/静态检查；没有执行开发者工具或手机验收 |

## 2026-11-24：网页、渲染、下载与更新

| 报告 | 当时验证什么 |
| --- | --- |
| [web-smoke-test](web-smoke-test.json)、[web-mobile-smoke-test](web-mobile-smoke-test.json) | 早期抽样运行与布局/离线流程；不覆盖后来发现的长期停绘问题 |
| [github-pages-deployment](github-pages-deployment.json) | 首次部署与抽样线上文件核对；不代表现在版本 |
| [rendering-release](rendering-release.json)、[rendering-rollback](rendering-rollback.json) | `.1` WebGL 1 尝试与 `.2` 回滚；不是已修好渲染的证据 |
| [first-level-verification](first-level-verification.json)、[live](first-level-live.json)、[release](first-level-release.json) | `.3` 对象池修复后第一关独立实例、点击、重开与发布 |
| [download-benchmark](download-benchmark.json) | 控制响应延迟的本地下载对照；不是手机网络测速 |
| [download-browser-verification](download-browser-verification.json)、[live](download-live-verification.json)、[release](download-release.json) | `.4` 完整下载、断网重开、发布与 Mac 访问线上速度 |
| [startup-verification](startup-verification.json)、[offline](startup-offline-verification.json) | `.5` 首屏先绘制、慢下载与离线流程 |
| [freeze-reproduction](freeze-reproduction.json)、[freeze-diagnostics-verification](freeze-diagnostics-verification.json) | 早期冻结排查、`.6` 诊断接口；当时未覆盖真实根因 |
| [update-recovery-chrome](update-recovery-chrome.json)、[webkit](update-recovery-webkit.json) | `.7` 大包更新、超时、断流和独立恢复入口 |

## 2026-11-25：缓存、性能与边界修正

| 报告 | 当时验证什么 |
| --- | --- |
| [render-cache-chrome](render-cache-chrome.json)、[webkit](render-cache-webkit.json) | `.1` 按需缓存、重开、可见时恢复绘制；恢复措施后来证实未解决根因 |
| [render-cache-upgrade](render-cache-upgrade.json)、[webkit](render-cache-upgrade-webkit.json) | `.1` 旧完整包升级与恢复；与普通按需缓存测试分开 |
| [diagnostics-v2-chrome](diagnostics-v2-chrome.json)、[webkit](diagnostics-v2-webkit.json) | `.2` 精简摘要、帧与执行耗时诊断 |
| [performance-probe-webkit](performance-probe-webkit.json) | 阶段性性能采样；Stage.render 耗时与后来整帧测量不能直接比较 |
| [platform-freeze-baseline](platform-freeze-baseline.json) | `.2` 未修复普通来源随帧数变慢/停绘的基线，与 `.3` 对照 |
| [classic-level-boundary](classic-level-boundary.json) | 原版 294 后跳到 296 的历史记录；当前 `.4+` 已连续编号，勿作为现规则 |

截图保留在本目录：`first-level-*.png`、`download-live-offline.png`、`startup-*.png` 等，以对应 JSON/故障记录解释范围。没有关联现场数据的截图只说明当时画面，不单独证明根因。
