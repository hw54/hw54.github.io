# Hins · 摄影

网站：<https://hw54.github.io/>。

基于 [XD-QIN/astro-photo-folio](https://github.com/XD-QIN/astro-photo-folio)，保留模板的侧栏、响应式图库、灯箱与明暗主题。导入版本：`17f521702ada184a7864d64add1e5e04bd1c9e25`。原始说明见 [README.template.md](README.template.md)。

## 本地开发

推荐 Node.js 24，与 GitHub Actions 的构建环境一致。

```sh
npm install
npm run dev -- --background
npm run build
npm run preview
```

后台开发服务管理：`npm run astro -- dev status`、`npm run astro -- dev logs`、`npm run astro -- dev stop`。

## 更新内容

- 个人资料与菜单：`src/config.ts`。
- 首页照片：`src/assets/digital/`；说明：`src/data/galleries.ts`。
- 摄影日记：`src/content/photography/`，使用 Markdown 或 MDX。
- 日记照片：`src/assets/blog/`，通过 `<Photo src="文件名.jpg" caption="说明" />` 展示。
- 月历：`src/assets/calendar/` 与 `src/data/calendar.ts`。
- 第一篇试验帖子：`src/content/photography/20220918-city-fragments.mdx`。

试验帖子采用 2022 年 9 月 18 日的 8 幅组照。拍摄日期与发布日期分别记录，发布日期为 2026 年 10 月 1 日。

SMB 地址用于本机读取，网页不能直接读取 `smb://`。本次导入保留共享盘原文件，仓库中存储长边不超过 3840 像素、去除 EXIF 的 JPEG 网页副本。构建时模板再生成响应式 WebP。GitHub 公开仓库中的网页副本可被访问。

## 发布

将修改推送到 `main` 后，`.github/workflows/deploy.yml` 自动构建并部署 GitHub Pages。仓库的 Pages 来源设为 GitHub Actions。站点地址在 `astro.config.mjs` 中配置为 `https://hw54.github.io`，使用根路径，无需 `base` 或 `CNAME`。

摄影与文字内容保留所有权利。模板代码的 MIT 许可保留在 `LICENSE` 中。
