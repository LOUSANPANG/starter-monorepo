# monorepo架构应用

## 工程介绍

### 目录

```bash
-| .vscode
-| docs # 使用文档
-| packages # 子工程
-| playground # 应用演示
-| utils # 工具
```

## 工程使用

### 使用命令

```bash
# 作用范围命令
pnpm -C packages/* add xxx # 执行子包操作
pnpm -W add xxx # 执行根目录操作
pnpm -F packages/* add xxx # 执行子包操作
pnpm -r update # 递归地更新所有子包的依赖
pnpm up -r --workspace xxx # 在整个 workspace（工作区）内递归更新 xxx 这个依赖

pnpm import # npm/yarn 迁移到 pnpm
pnpm rebuild # 切换 Node.js 版本、原生模块出错 重新编译依赖
pnpm prune # 清理无用依赖
pnpm dedupe # 合并重复依赖，优化 pnpm-lock.yaml

pnpm exec # 执行本地 node_modules/.bin 中的命令
pnpm dlx # 执行从 npm registry 下载并临时运行的包
pnpm create # 通过预设模板创建项目

pnpm self-update # pnpm 更新
```

### 应用命令

```bash
```

### 根目录依赖

```bash
# changeset
# init
pnpm add -Dw @changesets/cli
pnpm changeset init
# 记录变更
pnpm changeset
# 生成版本号
pnpm changeset version
```
