# UOOI Rental - Claude Code 项目配置

## 项目概述

**UOOI Rental** - 房源租赁管理平台，基于 UmiJS + React + TypeScript + Ant Design 构建。

### 技术栈

| 技术 | 版本 | 用途 |
|-----|------|-----|
| UmiJS | 4.x | React 框架/构建工具 |
| React | 18.x | UI 库 |
| TypeScript | 5.x | 类型系统 |
| Ant Design | 5.x | UI 组件库 |
| Less | - | CSS 预处理器 |

### 项目结构

```
uooi-rental/
├── src/
│   ├── app.tsx                 # 根容器配置 (Ant Design ConfigProvider)
│   ├── global.less             # 全局样式
│   ├── types/                  # TypeScript 类型定义
│   │   └── listing.ts          # 房源、筛选器、导航类型
│   ├── components/             # 通用组件
│   │   ├── Navbar/             # 导航栏
│   │   ├── Banner/             # Banner 横幅
│   │   ├── FilterBar/          # 筛选栏
│   │   ├── ListingCard/        # 房源卡片
│   │   ├── FeaturedListings/   # 精选房源列表
│   │   └── Footer/             # 页脚
│   └── pages/                  # 页面组件
│       └── index/              # 首页
├── .umirc.ts                   # UmiJS 配置
├── tsconfig.json               # TypeScript 配置
└── package.json                # 项目依赖
```

---

## 开发规范

### 组件编写

1. **组件结构** - 使用函数式组件 + Hooks
```tsx
import React from 'react';
import styles from './index.module.less';

interface ComponentProps {
  // 定义 props 类型
}

const Component = ({ prop }: ComponentProps) => {
  // 组件逻辑
  return <div className={styles.container}>...</div>;
};

export default Component;
```

2. **组件文件组织**
   - 每个组件独立文件夹：`ComponentName/index.tsx`
   - 样式文件：`ComponentName/index.module.less`
   - Props 接口定义在组件文件内

3. **导入顺序**
```tsx
// 1. React 相关
import React, { useState } from 'react';

// 2. 第三方库
import { Button, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

// 3. 类型导入
import type { MenuProps } from 'antd';
import type { Listing } from '@/types/listing';

// 4. 样式
import styles from './index.module.less';
```

### 样式规范

1. **使用 CSS Modules (Less)**
```tsx
import styles from './index.module.less';
<div className={styles.container}>...</div>
```

2. **主题配置**
   - 主色：`#0056D2`（UOOI 品牌色）或 `#1890ff`（Ant Design 默认）
   - 圆角：`8px`
   - 字体大小：`16px`
   - 配置位置：`src/app.tsx` 和 `.umirc.ts`

### 类型定义

1. **共享类型** 放在 `src/types/` 目录
2. **组件特定类型** 定义在组件文件内
3. **使用 `type` 关键字导入类型**
```tsx
import type { Listing } from '@/types/listing';
```

### 路径别名

- `@/` → `./src/`
- 示例：`import type { Listing } from '@/types/listing';`

---

## 设计系统

### 颜色

| 用途 | 颜色值 |
|-----|--------|
| 主色 (Primary) | `#0056D2` / `#1890ff` |
| 成功 | 绿色 (Ant Design 默认) |
| 警告 | 橙色 (Ant Design 默认) |
| 错误 | 红色 (Ant Design 默认) |

### 组件库

- **优先使用** Ant Design 组件 (`antd`)
- **图标** 使用 `@ant-design/icons`
- **主题** 已配置中文 locale (`zhCN`)

---

## 命令

| 命令 | 用途 |
|-----|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |

---

## Git 提交规范

### 提交信息格式

**类型标识使用英文，描述使用中文**

```
<类型>: <简短描述>

<详细描述（可选）>
```

### 类型标识

| 类型 | 说明 | 示例 |
|-----|------|-----|
| `feat` | 添加新功能 | `feat: 添加用户登录组件` |
| `fix` | 修复 Bug | `fix: 修复房源卡片图片显示问题` |
| `update` | 更新现有功能 | `update: 优化导航栏响应式布局` |
| `refactor` | 代码重构 | `refactor: 重构筛选器组件逻辑` |
| `style` | 样式修改 | `style: 调整按钮主题色` |
| `docs` | 文档更新 | `docs: 更新 README 说明` |
| `config` | 配置文件修改 | `config: 更新 UmiJS 路由配置` |

### 示例

```bash
# 简单提交
git commit -m "feat: 添加房源详情页面"

# 带描述的提交
git commit -m "fix: 修复筛选器状态不同步问题

- 修复价格筛选无法正确重置的问题
- 添加筛选器状态持久化"
```

---

## 注意事项

1. **语言**：界面、代码注释、Git 提交信息均使用中文
2. **图片资源**：当前使用 Unsplash 图片 URL
3. **响应式**：注意移动端适配
4. **代码风格**：保持与现有代码一致
5. **TypeScript**：充分利用类型系统，避免使用 `any`
6. **Git 提交**：commit 信息和描述必须使用中文
