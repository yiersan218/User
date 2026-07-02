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
- 创意方向：已接入类似 GitHub 贡献图/仓库可视化的动态贪吃蛇背景，后续可继续扩展数据来源或交互表现。
- 讨论过程中的有效结论需要持续记录到 `user.md`。

## 技术选型

暂定技术栈：

```txt
Astro + TypeScript + React + Tailwind CSS
```

各技术职责：

- Astro：网站主体框架、页面路由、静态生成、内容组织。
- TypeScript：类型约束、数据结构校验、提升长期维护可靠性。
- React：负责局部组件化展示，目前用于 README 展示区；后续如出现更复杂的局部交互，也可继续由 React 承载。
- Tailwind CSS：负责页面布局、响应式、暗色模式和视觉样式开发。

技术选型规则：

- 首期默认不做动态后端。
- 若后续出现评论系统、登录、数据库、后台管理、复杂交互、多语言内容管理等需求，需要重新评估当前技术栈是否仍然合适。
- 如果功能变化导致当前方案不再合适，需要及时提出更优技术选型。

## 当前已实现

已创建 Astro 项目骨架，并实现 GitHub 风格个人主页静态原型。

当前页面包含：

- 页面顶部的 GitHub 风格横向目录导航，顺序为“个人主页、项目实践、科研经历、加瓦之路”；桌面端导航字体为 `20px`，移动端为 `15px`。
- 导航内容增加少量顶部空间，使标签整体略微下移；导航栏最右侧显示圆形 mini 头像，复用当前个人资料头像并链接回个人主页。头像上下留白保持视觉对称，桌面端尺寸为 `52px` 并向上微调 `4px`，移动端尺寸为 `42px` 并向上微调 `3px`。
- “个人主页”为当前激活项并链接到 `/`；其余三个栏目现阶段仅作为禁用的预留入口，不创建对应内容页，避免产生空页面或 404，后续开发页面时再启用跳转。
- 左侧个人资料栏。
- 右侧 README 风格展示区。
- README 展示区当前使用后端/AI 技术栈静态徽章：Java、Python、PyTorch、MySQL、PostgreSQL、Elasticsearch、Redis、MongoDB、Spring Boot、MyBatis、RocketMQ、Kafka、Agent、Docker、Maven、GitHub、Steam；徽章均下载到 `public/images/` 并通过本地路径引用。
- README 展示区已在技术 banner 图片上方新增自我介绍区。当前文案基于用户提供的真实信息：姓名廖栩锐，本科毕业于西安电子科技大学，目前继续在西安电子科技大学攻读研究生；研究方向为不完备多视图学习和联邦学习；已在 CCF-A 类会议 ICLR 发表论文；科研之外持续关注后端开发、数据处理和 AI 相关技术。文案保留少量表情，整体保持轻松但适合个人主页展示。
- 自我介绍区使用 `.self-intro` 相关样式，以分隔线、正文宽度和响应式字号承接 README 内容；技术 banner 区域通过顶部间距与自我介绍区保持层次。
- 主页背景已参考 `C:\Users\29101\Downloads\HomePage-master\HomePage-master` 中 `src/js/main.js` 的 `GridAnimation` 思路，扩展为当前项目的独立 Astro 组件 `src/components/SnakeGridBackground.astro`：使用 Canvas 绘制 GitHub dark 风格移动网格，鼠标/触摸移动时生成类似贪吃蛇的蛇身轨迹，蛇身初始长度为 5 格；每次碰撞绿色“食物”方块后蛇身长度增加 1 格，食物方块颜色为高对比亮绿色 `rgba(111, 239, 124, 0.96)`；食物生成会避开当前可见 DOM 元素，并在滚动、图片加载和后续 DOM 变化后重新检查，避免与现有或新增页面元素重合。
- GitHub dark 风格整体布局。
- 响应式布局。
- 宽屏桌面布局已参照目标截图重新调整：页面最大宽度约 `1900px`，左侧资料栏和头像最大宽度约 `440px`，README 区域同步放大标题、徽章、技能图标与横幅，进一步减少大屏两侧的无效留白。
- `1200px` 以下使用收敛后的双栏尺寸，`900px` 以下继续切换为单栏布局。

## 当前文件结构

主要文件：

- `src/pages/index.astro`：页面主体结构。
- `src/components/ReadmeShowcase.tsx`：README 展示区。
- `src/styles/global.css`：全局样式和 GitHub dark 风格布局。
- `public/images/`：本地图片资源，包括头像、技术徽章、技能图标、中心技术图标、社交图标与二维码图片。
- `package.json`：项目依赖与脚本。
- `astro.config.mjs`：Astro 配置。
- `tailwind.config.mjs`：Tailwind 配置。
- `tsconfig.json`：TypeScript 配置。

已删除：

- `src/components/RepoCard.tsx`

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
- 左侧个人资料是否继续保留 GitHub 风格，还是改成更正式的个人介绍区。
- README 展示区未来除已完成的自我介绍与技术栈外，还可继续讨论是否展示研究方向、论文摘要、项目地图或动态视觉模块。
- 科研成果、项目经历、论文、博客等内容的数据结构。
- Cloudflare Pages 部署流程、自定义域名与构建配置。

## 待办

- 明确维护优先级：长期易维护，还是视觉表现优先。
- 设计正式的信息架构。
- 静态技术徽章可使用 Shields.io 生成，入口为 `https://shields.io/badges`。静态徽章格式为 `https://img.shields.io/badge/显示文字-背景颜色?style=flat-square&logo=图标名&logoColor=图标颜色`，例如 MySQL 可使用 `https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white`。生成后应下载到 `public/images/`，再在组件中使用本地 `/images/...` 路径引用。
- 技能图标组可使用 Skill Icons 生成，入口为 `https://skillicons.dev`。生成格式为 `https://skillicons.dev/icons?i=图标1,图标2,图标3`，例如后端技术栈可使用 `https://skillicons.dev/icons?i=java,spring,maven,mysql,redis,mongodb,docker,kubernetes,nginx,linux,git`；可追加 `&perline=6` 控制每行数量，追加 `&theme=light` 或 `&theme=dark` 控制主题。生成后同样应下载为 `public/images/skill-icons.svg` 并本地引用。
- 后续替换 README 中心动态图标时，优先调研两类素材来源：一是 GitHub README 资源库、个人主页素材库、动图素材站等现成 `.webp` / `.gif` / `.png` 动图资源；二是使用 After Effects、Figma、Photoshop、Canva、LottieFiles 等设计工具自制并导出动图资源。同时保留第三种实现方式：使用静态 SVG 图标结合 CSS / SVG / React 动画实现轻微浮动、旋转、发光等动态效果，避免必须依赖外部动图素材。
