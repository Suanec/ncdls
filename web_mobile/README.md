# 手机离线版 web_mobile

手机入口：[https://suanec.github.io/ncdls/](https://suanec.github.io/ncdls/)。完整的点击步骤、存档与排障见 [手机逐步操作文档](../docs/MOBILE_OPERATION.md)。

复用 `../web/` 的网页入口、原 Laya 引擎、玩法和已有资源。新增主屏幕安装、完整离线资源缓存，以及存档查看、导出和导入。纯静态前端，无业务后端、无 npm 依赖。

## 电脑启动和手机在线试玩

需要 Node.js 18+。在本目录执行：

```sh
npm start
```

默认打开 <http://127.0.0.1:8091/>。只启动已生成版本用 `npm run serve`；端口被占用可用 `PORT=8092 npm run serve`。在启动服务的终端按 Ctrl+C 停止，不会清除存档。

手机与电脑连接同一 Wi-Fi 后：

```sh
npm run serve:lan
```

在手机浏览器打开终端的 LAN 地址。**普通局域网 HTTP 只能在线试玩，不能安装离线资源。** 电脑的 localhost 是本地开发例外，不能用来判断手机 LAN 地址是否支持离线。

## 手机独立离线运行

1. 将整个 `dist/` 目录放到一个手机可访问、证书受信任的 HTTPS 静态站点。可部署在域名根目录或子目录；子目录网址保留末尾 `/`。不需要业务服务器或数据库。
2. iPhone 用 Safari 打开该网址，分享 → 添加到主屏幕。Android 可在支持 PWA 的浏览器菜单里安装/添加到主屏幕。
3. **从主屏幕图标打开**，左下角“离线与存档” → “保存离线资源”。保持页面打开，等待“离线资源已就绪”。现有资源约 44.4 MiB，共 1,915 个文件，手机实际占用还包含浏览器管理开销。
4. 开飞行模式，关闭游戏再从主屏幕重新打开，确认可以进入和切换关卡。此后日常游玩不依赖电脑开机，也不依赖站点在线。

不能把源代码文件直接交给 Safari 就完成此过程。首次安装仍需 HTTPS 站点；本工程配置为在独立的 `Suanec/ncdls` 仓库发布 GitHub Pages，是否已上线以 Actions 的部署结果为准。仅绕过证书警告不等于受信任 HTTPS。

如已有设备信任的证书，可用内置服务器提供 HTTPS：

```sh
NCDLS_TLS_CERT=/absolute/path/cert.pem NCDLS_TLS_KEY=/absolute/path/key.pem npm run serve:lan
```

证书须匹配手机访问的域名/IP，并被手机信任。脚本不会生成证书或修改设备信任设置。

浏览器可能在空间不足或清理网站数据时删除缓存；离线资源就绪不代表永久保存。建议导出重要存档。Safari 网页和主屏幕应用之间是否共享数据受系统行为影响，因此应从主屏幕打开后再下载并确认自己的进度。

当前可见版本为 `20261124.3`。第一关实例复用修复已通过 Chrome 画面、重启、断网重开和手机视口检查；尚未进行 iPhone 真机验证。默认按关卡加载，完整 1,915 个资源仅由“保存离线资源 / 检查并下载更新”按钮触发。自动检查新版不全量下载；手动更新复用哈希一致的旧资源。见 [渲染兼容说明](../docs/RENDERING.md)。

## 重启与清理缓存

画面异常时，点“选择关卡 → 重启游戏（保留存档）”。会重新创建游戏引擎并回到当前玩法、当前关卡开始，不删除进度或离线资源。绘图环境中断时会显示重启按钮。已经安装离线旧版的设备，需要先“检查并下载更新 → 应用更新并重启游戏”才能获得这些改动。

清 Safari 网站数据会影响存档和离线包；具体入口和备份步骤见 [手机操作指南](../docs/MOBILE_OPERATION.md#清除缓存与存档的区别)。

## 查看、备份和迁移存档

游戏左下角“离线与存档”中：

- **查看存档**：显示当前浏览器里的 JSON。
- **导出存档**：下载 `ncdls-save-YYYY-MM-DD.json`，iPhone 可保存到“文件”App。
- **导入并重启**：选择此前导出的 JSON，替换当前存档并重新加载游戏。会回到该关开始，当前正在操作的盘面不作为完整快照保存。

`localStorage` 是浏览器存储 API，不是文件名；存档键名为 `user_json_ncdls_web`。工程和服务器目录里没有自动生成的存档文件。经典关卡进度位于 `total_type.grade`，其他玩法也有各自字段。

电脑在**实际游玩的那个网址**打开开发者工具 Console：

```js
JSON.parse(localStorage.getItem('user_json_ncdls_web'))
```

Chrome 可在 Application → Local Storage、Safari 可在 Storage → Local Storage 查看。返回 `null` 通常表示当前站点尚无存档。协议、域名/IP、端口不同会分开保存，例如 `http://127.0.0.1:8088` 与 `http://127.0.0.1:8091` 是两份存档。同设备同浏览器的同源网页可共享此键；电脑与手机不会自动同步。

要从原 `web-game` 转移进度，可先停旧服务，再将手机版部署到原来的协议、主机和端口，沿用该浏览器的存档；或在旧游戏页面 Console 执行下段导出，再到手机导入：

```js
(() => {
  const key = 'user_json_ncdls_web';
  const data = localStorage.getItem(key);
  if (!data) throw new Error('当前网址没有存档');
  const blob = new Blob([JSON.stringify({
    format: 'ncdls-save', version: 1, key, data,
    exportedAt: new Date().toISOString()
  }, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ncdls-save-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
})();
```

重启 Node 静态服务不影响浏览器存档；清理网站数据、使用无痕会话或换设备/网址可能看不到原进度。

## 构建与更新

```sh
npm run build
npm run check
```

- `src/`：手机菜单、离线下载逻辑、Service Worker 和 PWA 清单。
- `scripts/`：构建、检查和静态服务器；只用 Node 内置模块。
- `dist/`：完整可部署产物，含原有资源和生成图标。请勿手工修改；构建会检测并拒绝覆盖手工改动。
- `../web/`：共用的游戏网页入口；`../src/`、`../vendor/`、`../assets/`：原游戏逻辑、引擎和资源。

构建调用原 `build-web.cjs`，在临时目录解压资源并叠加手机功能，不改动 `web-game/`。部署更新时应整包替换或原子切换目录，避免混合不同构建的清单和资源。

联网后在菜单点“检查并下载更新”。新版本下载齐全才会替换旧版本；有游戏页面仍打开时，点“应用更新并重启游戏”，或关闭所有该游戏页面后重开。下载失败保留已完成部分，再次点击可继续；同版本缺失的缓存可重新补齐。资源通过 SHA-256 校验。

游戏逻辑和存档键保持共用。Service Worker 只缓存当前应用目录的 GET 资源，原有其他网络分支保持原行为；离线缓存不提供第三方登录、广告或云存档服务。原联网逻辑说明见 [RESTORATION.md](../docs/RESTORATION.md)。

## 范围与验证

选关菜单提供经典 294、星星 12、海洋 27、冰雪 30、哪吒 30，共 393 条配置。沿用原来的解锁逻辑和已放开的车位。猫咪、打巨龙和未缓存房间的资源没有新增。

静态检查验证文件哈希、离线清单完整性、脚本语法、WASM 和关卡配置。运行验证结果见 `../reports/web-mobile-smoke-test.json`。浏览器自动化使用本机 Chrome 的手机视口，不等同于 iPhone Safari 真机验证；首次安装后请按上文进行一次飞行模式冷启动确认。

机制参考：[Service Worker 使用条件](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)、[WebKit 存储策略](https://webkit.org/blog/14403/updates-to-storage-policy/)。
