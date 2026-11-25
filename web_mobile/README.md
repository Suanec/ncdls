# 手机离线版

此目录给共用网页版增加首次加载选择、Service Worker 缓存、完整下载、存档导入导出和主屏幕入口。正式站点部署此处生成的 `dist/`。

在本目录运行：

```sh
npm start       # 构建并启动 http://127.0.0.1:8091/
npm run check  # 手机产物静态检查
```

完整构建检查请在工程根目录执行 `npm run check:mobile`。`src/` 和 `scripts/` 是维护入口；`dist/` 是生成目录，勿手改。

- [手机操作与存档](../docs/MOBILE_OPERATION.md)
- [资源加载与缓存](../docs/RESOURCE_LOADING.md)
- [本地开发、发布与回滚](../docs/WEB.md)
- [故障与踩坑](../docs/TROUBLESHOOTING.md)

本 README 只说明目录用途；版本、玩法与验证范围统一见 [工程 README](../README.md)。
