# vue3_h5_project_demo

## demo 旨在快速搭建vue3 h5项目，技术栈涵盖如下：
- vue3 框架 ✅
- pinia 状态管理 ✅
- vite 打包工具 ✅
- vant4 组件库 ✅
- theme 多主题切换 ✅
- eslint 格式化工具 ✅
- prettier 代码美化 ✅
- vite-plugin-vue-devtools 调试 ✅
- vConsole 调试 ✅
- postcss-px-to-viewport 布局 ✅
- vue-router 路由管理 ✅
- vue-echarts 图标组件 
- api封装 ✅
- request axios 接口请求封装拦截 ✅
- mock数据 ✅
- pre-commit, 提交前自动格式化 ✅
- commit-msg 提交格式校验 feat|fix|docs|style|refactor|perf|test|workflow|ci|chore|types|build ✅
- eslint-plugin-simple-import-sort 自动修复 import 排序 ✅
- @vant/auto-import-resolver，unplugin-auto-import/vite，unplugin-vue-components/vite，自动引入vant组件，无需注册或单个引入 ✅
- playwright 单元测试 ✅
- .env 系统环境变量配置、src别名的配置 ✅
- vue-wechat-title 动态修改网页title ✅
- report.js 统计页面停留时长  ✅
- vite-plugin-svg-icons svg图标组件及适配主题 ✅
- unplugin-auto-import/vite vue、vue-router的自动引入，页面不需要在写 import { onMounted, ref } from 'vue 等基本属性引入，可以直接使用。处理自动引入导致的eslint报错和ts报错。✅
- vite-plugin-vue-setup-extend setup 写法增强插件 ✅
- vite-plugin-compression 压缩静态文件 ✅
- rollup-plugin-visualizer 打包分析，自动打开分析报告 ✅
	


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

## Husky 配置
### .husky/_/pre-commit
```sh
. "$(dirname -- "$0")/husky.sh"
npx lint-staged
```
### .husky/_/commit-msg
```sh
. "$(dirname -- "$0")/husky.sh"
npx --no-install commitlint --edit $1
```
- 该配置在执行 `npm install` 后会被覆盖，建议可以选择只安装新增的包，或者把 `npm run prepare` 命令删掉或改名后，再执行 `npm install`，然后再恢复就好。


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
