# 个人主页设计讨论记录

## 阶段总结

当前目标是设计并实现一个静态个人主页网站，部署到 Cloudflare Pages。网站首期以信息展示为主，后续会承载个人基本信息、科研成果、项目经历等内容。

本阶段已经完成技术选型讨论，并基于 `coderxiaoluo` 的 GitHub 个人主页风格制作了第一版静态原型。原型目前保留 GitHub 深色风格布局，包括左侧个人信息区域和右侧 README 展示区域；已按要求移除 Pinned 仓库卡片区域。

参考链接：

- https://github.com/coderxiaoluo

## 已确认目标

- 网站形态：静态网站。
- 部署平台：Cloudflare Pages。
- 首期内容方向：基本信息、科研成果、项目经历等，具体展示内容后续再讨论。
- 视觉参考：GitHub 深色个人主页风格。
- 创意方向：后续希望加入类似 GitHub 贡献图/仓库可视化的动态元素，可能实现为动态贪吃蛇。
- 讨论过程中的有效结论需要持续记录到 `user.md`。

## 技术选型

暂定技术栈：

```txt
Astro + TypeScript + React + Tailwind CSS
```

各技术职责：

- Astro：网站主体框架、页面路由、静态生成、内容组织。
- TypeScript：类型约束、数据结构校验、提升长期维护可靠性。
- React：负责局部动态交互组件，例如后续 GitHub 贡献图风格动态贪吃蛇。
- Tailwind CSS：负责页面布局、响应式、暗色模式和视觉样式开发。

技术选型规则：

- 首期默认不做动态后端。
- 若后续出现评论系统、登录、数据库、后台管理、复杂交互、多语言内容管理等需求，需要重新评估当前技术栈是否仍然合适。
- 如果功能变化导致当前方案不再合适，需要及时提出更优技术选型。

## 当前已实现

已创建 Astro 项目骨架，并实现 GitHub 风格个人主页静态原型。

当前页面包含：

- 左侧个人资料栏。
- 右侧 README 风格展示区。
- GitHub dark 风格整体布局。
- 响应式布局。
- 宽屏桌面布局已参照目标截图重新调整：页面最大宽度约 `1900px`，左侧资料栏和头像最大宽度约 `440px`，README 区域同步放大标题、徽章、技能图标与横幅，进一步减少大屏两侧的无效留白。
- `1200px` 以下使用收敛后的双栏尺寸，`900px` 以下继续切换为单栏布局。

已基于 `coderxiaoluo` 的公开 GitHub 资料进行仿制：

- 用户名：`coderxiaoluo`
- 昵称：不是很菜
- 简介：吃饭睡觉敲代码
- 位置：重庆
- followers/following 数据
- GitHub 头像
- profile README 中的 typing 标题、技术徽章、skill icons、中心技术图标和底部横幅

已移除：

- Pinned 仓库区域。
- 仓库卡片组件。
- 仓库卡片相关样式。

## 当前文件结构

主要文件：

- `src/pages/index.astro`：页面主体结构。
- `src/components/ReadmeShowcase.tsx`：README 展示区。
- `src/styles/global.css`：全局样式和 GitHub dark 风格布局。
- `package.json`：项目依赖与脚本。
- `astro.config.mjs`：Astro 配置。
- `tailwind.config.mjs`：Tailwind 配置。
- `tsconfig.json`：TypeScript 配置。

已删除：

- `src/components/RepoCard.tsx`

## 验证记录

已执行构建验证：

```txt
npm run build
```

结果：

- 构建通过。
- 当前输出目录为 `dist/`。
- Tailwind 提示当前没有检测到 utility class，原因是页面主要使用了自定义 CSS；暂不影响运行。
- 2026-06-23：完成宽屏布局比例调整后再次执行构建，本地环境仍因 `node_modules/.vite` 缓存文件删除权限出现 `EPERM`，尚需在释放缓存占用或重启环境后复验；本次报错未指向页面源码。

本地开发地址：

```txt
http://localhost:4321
```

## Cloudflare Pages 部署方案

推荐部署方式：

- 使用 GitHub 仓库连接 Cloudflare Pages。
- 每次 push 到生产分支后，由 Cloudflare Pages 自动构建和部署；其他分支和 Pull Request 可生成预览部署。
- 当前项目是 Astro 静态站，构建命令为 `npm run build`。
- Astro 默认构建输出目录为 `dist/`。
- 当前网站不需要服务端渲染，因此不需要安装 Cloudflare Adapter 或编写 Workers 代码。
- Cloudflare Pages 直接托管 `dist/` 中的静态文件，并提供 HTTPS、CDN 和预览部署。

部署前需要确认：

- 代码已经推送到 GitHub 仓库。
- 仓库根目录包含 `package.json`、`package-lock.json` 和 `astro.config.mjs`。
- 不要提交 `node_modules/` 和 `dist/`，它们已写入 `.gitignore`。
- 在 Cloudflare Pages 中设置构建命令为 `npm run build`，构建输出目录为 `dist`。
- 根目录保持为仓库根目录；如未来改为 monorepo，再单独调整 Root directory。

Cloudflare 控制台部署流程：

1. 登录 Cloudflare Dashboard，进入 Workers & Pages。
2. 创建 Pages 应用并连接 GitHub 仓库。
3. 选择当前个人主页仓库和生产分支。
4. 框架预设选择 Astro；如需手动填写，构建命令使用 `npm run build`，输出目录使用 `dist`。
5. 保存并部署，等待依赖安装、构建和静态文件发布完成。
6. 使用 Cloudflare 分配的 `*.pages.dev` 地址访问网站。
7. 如需自定义域名，在项目的 Custom domains 中添加并按提示配置 DNS。

迁移记录：

- 2026-06-23：部署目标由 Zeabur 改为 Cloudflare Pages。
- 已删除 Zeabur 专用的 `zbpack.json`，Cloudflare Pages 的构建设置在控制台中配置。
- 迁移后执行 `npm run build` 时，本地 Windows 环境因 `node_modules/.vite` 缓存文件被锁定而出现 `EPERM`；该问题与 Cloudflare 配置无关，释放文件占用或重启终端后需再次验证构建。

## 候选方案记录

保留的备选技术方向：

- Vite + React：适合交互更重、页面内容较少、希望完全手写组件状态的个人主页。
- Next.js 静态导出：适合未来可能扩展到更完整 React 应用生态，但对当前静态主页略重。
- 纯 HTML/CSS/JS：适合极简页面，但后续维护科研成果、项目经历等结构化内容会变麻烦。

创意交互候选：

- 在 Astro 中嵌入 React 组件。
- 使用 SVG 或 Canvas 实现 GitHub 贡献图风格动态贪吃蛇。
- 数据来源可以先使用本地 JSON 或手写配置，后续再决定是否接入 GitHub 数据。

## 后续待讨论

- 网站最终定位：学术主页、科研主页、作品集、简历页、个人品牌入口，或混合形态。
- 是否继续高度还原 `coderxiaoluo` 的 GitHub 风格，还是迁移为更符合个人科研主页的视觉语言。
- 左侧个人资料是否继续保留 GitHub 风格，还是改成更正式的个人介绍区。
- README 展示区未来展示什么：技术栈、研究方向、论文摘要、项目地图、个人介绍，或动态视觉模块。
- 动态贪吃蛇模块的具体表现形式、数据来源、动画方式和性能方案。
- 科研成果、项目经历、论文、博客等内容的数据结构。
- 是否需要博客、CMS、搜索、评论、多语言、访问统计、RSS、sitemap。
- Cloudflare Pages 部署流程、自定义域名与构建配置。

## 待办

- 将当前通过 `img.shields.io`、`skillicons.dev` 和 jsDelivr CDN 引用的徽章、技能图标、技术图标及横幅等静态资源下载并迁移到 `public/images/`，改用本地路径，降低第三方服务异常或网络波动造成的图片加载失败风险。
- 替换 `coderxiaoluo` 的公开资料为用户自己的真实资料。
- 明确个人主页的核心目标与目标访客。
- 明确维护优先级：长期易维护，还是视觉表现优先。
- 设计正式的信息架构。
- 确定是否保留 GitHub README 风格作为主页主视觉。
- 讨论并实现动态贪吃蛇创意模块。
