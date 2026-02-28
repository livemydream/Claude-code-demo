# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**UOOI Rental** - 房源租赁管理平台，基于 UmiJS + React + TypeScript + Ant Design 构建。

### Tech Stack

| 技术 | 版本 | 用途 |
|-----|------|-----|
| UmiJS | 4.x | React 框架/构建工具 |
| React | 18.x | UI 库 |
| TypeScript | 5.x | 类型系统 |
| Ant Design | 5.x | UI 组件库 |
| Less | - | CSS 预处理器 |

---

## Architecture

### UmiJS-Specific Patterns

1. **路由配置** - 在 `.umirc.ts` 中集中配置
   ```typescript
   routes: [
     { path: '/', component: '@/pages/index' },
   ]
   ```

2. **全局配置** - `src/app.tsx` 导出 `rootContainer` 函数包裹 Ant Design ConfigProvider
   ```tsx
   export function rootContainer(container: any) {
     return <ConfigProvider locale={zhCN} theme={{...}}>{container}</ConfigProvider>;
   }
   ```

3. **路径别名** - `@/` 映射到 `./src/`，在 `.umirc.ts` 中配置

### Type Definitions

- 共享类型放在 `src/types/` 目录
- 主要类型：`Listing`（房源）、`FilterType`（筛选器）、`NavItem`（导航）

---

## Development Standards

### 组件编写

1. **组件结构** - 函数式组件 + Hooks
   ```tsx
   import React from 'react';
   import styles from './index.module.less';

   interface ComponentProps {
     // 定义 props 类型
   }

   const Component = ({ prop }: ComponentProps) => {
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

- 使用 CSS Modules (Less)：`import styles from './index.module.less'`
- 主题配置：`src/app.tsx` 中 ConfigProvider + `.umirc.ts` theme 配置
- 主色：`#1890ff`，圆角：`8px`，字体：`16px`

---

## Commands

| 命令 | 用途 |
|-----|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm start` | 启动开发服务器（同 dev） |

**工作目录**：项目位于 `uooi-rental/` 子目录

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

---

## 注意事项

1. **语言**：界面、代码注释、Git 提交信息均使用中文
2. **图片资源**：当前使用 Unsplash 图片 URL
3. **响应式**：注意移动端适配
4. **TypeScript**：充分利用类型系统，避免使用 `any`
5. **组件库**：优先使用 Ant Design 组件，图标使用 `@ant-design/icons`
