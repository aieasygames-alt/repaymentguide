# Plan: RepaymentGuide.com 开发计划

> Source PRD: /Users/robert/Downloads/SAVE计划更新与替代方案.md

## Architectural decisions

适用于所有阶段的持久性架构决策：

- **Routes**:
  - `/` - 首页（产品介绍 + 计算器入口）
  - `/student-loan-payment-calculator` - 月供计算器
  - `/save-plan-calculator` - SAVE 替代方案对比
  - `/income-driven-repayment-calculator` - IDR 计划推荐
  - `/pslf-calculator` - PSLF 宽免计算器
  - `/blog` - 内容库
  - `/news` - SAVE 计划更新新闻

- **技术栈**:
  - Next.js 14 (App Router) + TypeScript
  - 部署: Cloudflare Pages (`@cloudflare/next-on-pages`)
  - 样式: Tailwind CSS
  - 数据库: Supabase (后期集成)
  - AI: Anthropic Claude API (后期集成)

- **Schema (Supabase)**:
  ```sql
  -- 用户表
  users (
    id, email, created_at, loan_balance,
    income, family_size, state
  )

  -- 计算结果缓存
  calculations (
    id, user_id, calculation_type,
    inputs, results, created_at
  )

  -- Lead 表单
  leads (
    id, name, email, phone,
    loan_amount, intent, created_at
  )
  ```

- **Key models**:
  - `LoanCalculator` - 各类计算器核心逻辑
  - `Recommender` - AI 推荐引擎
  - `ContentGenerator` - 内容生成系统

---

## Phase 1: 静态站点基础设施

**用户故事**: 作为开发者，建立可部署的静态站点基础

### What to build

使用 Next.js + Tailwind CSS 搭建纯静态站点，支持 Cloudflare Pages 部署。

### Acceptance criteria

- [ ] Next.js 14 项目初始化，使用 App Router
- [ ] Tailwind CSS 配置完成
- [ ] `output: 'export'` 静态导出配置
- [ ] Cloudflare Pages 构建配置（`wrangler.toml`）
- [ ] 基础布局组件（Header, Footer, Layout）
- [ ] 全局样式和主题配置
- [ ] 部署到 Cloudflare Pages 成功

---

## Phase 2: SEO 页面结构（静态）

**用户故事**: 作为用户，能找到关键的还款计算器页面

### What to build

创建核心 SEO 页面，所有内容静态，SEO 友好。

### Acceptance criteria

- [ ] 首页 `/` - 产品介绍 + CTA
- [ ] `/student-loan-payment-calculator` - 页面框架
- [ ] `/save-plan-calculator` - 页面框架
- [ ] `/income-driven-repayment-calculator` - 页面框架
- [ ] `/pslf-calculator` - 页面框架
- [ ] `/blog` 索引页
- [ ] Meta 标签优化（title, description, OG tags）
- [ ] JSON-LD Schema markup (WebSite, Calculator)
- [ ] sitemap.xml 生成
- [ ] robots.txt 配置

---

## Phase 3: 月供计算器（客户端逻辑）

**用户故事**: 作为借款人，计算我的月供金额

### What to build

纯客户端计算的月供计算器，无后端依赖。

### Acceptance criteria

- [ ] 贷款金额输入组件
- [ ] 利率输入组件
- [ ] 贷款期限选择（10/20/25年）
- [ ] 标准还款计划计算逻辑
- [ ] 结果展示（月供、总利息、总还款）
- [ ] 结果对比图表（使用 Chart.js 或 Recharts）
- [ ] 移动端响应式设计
- [ ] 输入验证和错误处理

---

## Phase 4: SAVE 替代方案对比（静态数据）

**用户故事**: 作为 SAVE 用户，了解其他 IDR 计划选项

### What to build

基于静态数据的 IDR 计划对比页面。

### Acceptance criteria

- [ ] SAVE、PAYE、IBR、ICR 计划静态数据
- [ ] 对比表格组件
- [ ] 资格检查逻辑（客户端）
- [ ] 月供估算（基于输入的简化计算）
- [ ] 方案推荐（基于规则的简单逻辑）
- [ ] FAQ 部分
- [ ] Schema.org FAQ markup

---

## Phase 5: PSLF 宽免计算器（客户端）

**用户故事**: 作为公共服务工作者，计算我的 PSLF 宽免金额

### What to build

PSLF 宽免计算器，基于 2024 赦免规则。

### Acceptance criteria

- [ ] 就业类型选择（非营利/政府）
- [ ] 贷款类型检查（Direct Loans）
- [ ] 还款月数输入
- [ ] 宽免金额计算逻辑
- [ ] 资格验证流程
- [ ] 结果展示和解释
- [ ] 申请步骤指南

---

## Phase 6: 内容库（静态文章）

**用户故事**: 作为用户，找到学生贷款相关指南

### What to build

基于 Markdown 的静态内容系统。

### Acceptance criteria

- [ ] Next.js Markdown 渲染配置
- [ ] 5-10 篇种子文章（SAVE 终止、IDR 对比、PSLF 指南等）
- [ ] 文章列表页
- [ ] 文章详情页
- [ ] 相关文章推荐（基于标签）
- [ ] 阅读时间估算
- [ ] 社交分享按钮

---

## Phase 7: Lead Capture 系统（静态表单）

**用户故事**: 作为用户，获取专业还款建议

### What to build

静态表单 + 邮件发送（使用第三方服务）。

### Acceptance criteria

- [ ] Lead Capture 表单设计
- [ ] 表单验证（客户端）
- [ ] 集成 FormSubmit.io 或类似服务
- [ ] 感谢页面
- [ ] 表单转化跟踪（Google Analytics 4）
- [ ] A/B 测试框架（使用 Google Optimize 或类似）

---

## Phase 8: 基础分析与变现

**用户故事**: 作为站点所有者，追踪流量和收入

### What to build

分析工具和基础广告位。

### Acceptance criteria

- [ ] Google Analytics 4 集成
- [ ] Google Search Console 验证
- [ ] 页面浏览量、跳出率、会话时长追踪
- [ ] 广告位预留（Sidebar, Banner）
- [ ] Affiliate 链接配置
- [ ] 热门页面识别

---

## Phase 9: Supabase 集成（动态化开始）

**用户故事**: 作为用户，保存我的计算结果

### What to build

集成 Supabase，实现数据持久化。

### Acceptance criteria

- [ ] Supabase 项目创建和配置
- [ ] 用户认证系统（Magic Link 或 Email/Password）
- [ ] 计算结果保存功能
- [ ] 用户 Dashboard 页面
- [ ] 历史计算查看
- [ ] 环境变量配置
- [ ] Edge-compatible Supabase 客户端

---

## Phase 10: AI 推荐引擎

**用户故事**: 作为用户，获得个性化的还款方案推荐

### What to build

基于 Claude API 的智能推荐系统。

### Acceptance criteria

- [ ] Claude API 集成
- [ ] 推荐提示词工程
- [ ] 用户画像构建
- [ ] AI 推荐结果展示
- [ ] 结果解释和对比
- [ ] API 调用优化（缓存、限流）
- [ ] 成本控制（月度预算限制）

---

## Phase 11: 内容生成流水线

**用户故事**: 作为内容团队，批量生成 SEO 文章

### What to build

基于 Claude API 的自动化内容生成。

### Acceptance criteria

- [ ] 关键词研究工具集成
- [ ] 批量文章生成脚本
- [ ] 内容质量检查（EEAT 评分）
- [ ] 自动发布到 `/blog`
- [ ] 内部链接自动生成
- [ ] 图片生成集成（DALL-E 或类似）
- [ ] 发布计划管理

---

## Phase 12: 收入验证系统（PSLF/IDR）

**用户故事**: 作为用户，上传收入证明进行资格验证

### What to build

文件上传和验证流程。

### Acceptance criteria

- [ ] 文件上传 UI（支持 W2、1040、Pay stubs）
- [ ] Supabase Storage 配置
- [ ] 文件类型验证
- [ ] OCR 集成（Tesseract 或云服务）
- [ ] 收入数据提取
- [ ] 资格重新计算
- [ ] 文件管理（查看、删除）

---

## Phase 13: SAVE 新闻追踪系统

**用户故事**: 作为用户，了解 SAVE 计划最新动态

### What to build

新闻聚合和展示系统。

### Acceptance criteria

- [ ] 新闻数据源配置（RSS、API）
- [ ] 自动抓取和更新（Cron Job）
- [ ] 新闻分类和标签
- [ ] 首页新闻模块
- [ ] 新闻订阅（Email）
- [ ] 历史新闻存档

---

## Phase 14: 高级分析与优化

**用户故事**: 作为站点所有者，优化转化率

### What to build

深度分析和优化工具。

### Acceptance criteria

- [ ] 热力图集成（Hotjar 或类似）
- [ ] A/B 测试多变量实验
- [ ] 转化漏斗分析
- [ ] 用户行为录制
- [ ] 定向调查和反馈
- [ ] 性能监控（Core Web Vitals）
- [ ] SEO 排名追踪

---

## Phase 15: 合规与隐私

**用户故事**: 作为用户，我的数据得到保护

### What to build

隐私保护和合规功能。

### Acceptance criteria

- [ ] 隐私政策页面
- [ ] 服务条款页面
- [ ] CCPA/数据删除请求处理
- [ ] Cookie 同意管理
- [ ] 数据加密（传输和存储）
- [ ] 安全审计日志
- [ ] 定期安全扫描

---

## Deployment 策略

### 阶段 1-8: 静态部署
- Cloudflare Pages 静态导出
- 无服务器函数
- 极低成本

### 阶段 9-15: 动态部署
- Cloudflare Pages + Functions
- `@cloudflare/next-on-pages` 适配
- Supabase 作为后端

---

## 时间估算

| 阶段 | 预计时间 | 优先级 |
|------|----------|--------|
| Phase 1-2 | 1 周 | P0 |
| Phase 3-5 | 2 周 | P0 |
| Phase 6-8 | 1 周 | P1 |
| Phase 9 | 1 周 | P1 |
| Phase 10-12 | 2-3 周 | P2 |
| Phase 13-15 | 1-2 周 | P3 |

**总计**: 约 8-10 周完成 MVP（Phase 1-8），额外 4-5 周完成高级功能。
