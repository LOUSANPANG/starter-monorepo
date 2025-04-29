## monorepo架构应用


### 目录

```bash
```

### 使用

```bash
# 安装
pnpm add -w <package-name> # 根项目添加依赖
pnpm --filter <project-name> add <package-name> # 为特定项目添加依赖

# 运行
pnpm dev # 启动所有项目开发模式
pnpm --filter <project-name> dev # 启动特定项目开发模式

# 打包
pnpm build # 构建所有项目
pnpm --filter <project-name> build # 构建特定项目
```
