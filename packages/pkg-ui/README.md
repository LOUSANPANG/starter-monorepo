### 目录

```bash
pkg-ui/
├── src/
│   ├── components/
│   │   ├── shadcn/         # 来自shadcn-vue的组件
│   │   └── custom/         # 自定义组件目录
│   ├── index.ts            # 主入口文件
│   └── types.ts           # 类型声明文件
├── .npmignore
├── package.json
├── tsconfig.json
├── vite.config.ts         # 或使用tsup等构建工具
└── README.md
```

### 安装

````bash
# 在monorepo根目录
npm install pkg-ui --workspace=@your-project/root

## 使用示例
```vue
<script setup>
import { Button, Calendar, CustomButton } from 'pkg-ui'
</script>

<template>
  <Button variant="outline">基础按钮</Button>
  <Calendar />
  <CustomButton variant="primary">自定义按钮</CustomButton>
</template>
````
