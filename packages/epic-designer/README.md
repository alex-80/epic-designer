![](.\docs\public\logo.png)
<h3 align="center" style="background-image:-webkit-linear-gradient(left,#44c0fa,#c26cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">EDesigner</h3>


<h4 align="center">一个开箱即用的拖拽式的可视化低代码设计器</h4>



📦github仓库：[https://github.com/Kchengz/epic-designer](https://github.com/Kchengz/epic-designer)

📦gitee仓库：[https://gitee.com/kcz66/epic-designer](https://gitee.com/kcz66/epic-designer)

💎文档地址：[https://kcz66.gitee.io/epic-designer/](https://kcz66.gitee.io/epic-designer/)

## 简介

可以简称`K设计器`，是一个功能强大、开箱即用的拖拽式低代码设计器。它基于 Vue3 开发，兼容多套 UI 组件库，除了基础的页面设计功能，EDesigner 还提供了强大的扩展功能，可以让开发者根据自己的需求自由扩展和定制组件。此外，EDesigner 使用 JSON 配置来生成页面，可帮助开发者快速生成页面，提高开发效率。它提供了两个重要组件：`epic-designer` 设计器和 `epic-builder` 生成器。

> 目前还处于 Alpha 阶段，所有的 API 及 Props 都可能在后续迭代中发生变化
>
> 同时因为需要维护多套UI组件，也会增加兼容性和测试工作，且作者需要保证不影响到工作，所以开发进度会相对慢一点，但是会尽量利用业余时间更新功能，同时也欢迎各位大佬提供建议和pr

## 最新版本

[![](https://img.shields.io/npm/v/epic-designer.svg?style=flat-square)](https://www.npmjs.com/package/epic-designer)

#### 功能

- [x] 拖拽设计
- [x] 自定义 actionBar
- [x] 布局组件扩展
- [x] 自定义组件扩展
- [x] 事件扩展
- [x] 组件懒加载
- [ ] 完善布局
- [x] 组件属性自定义
- [ ] 支持不同 UI
- [ ] 插件扩展



## 组件介绍

#### epic-designer 设计器

`epic-designer` 是一个可视化设计器组件，用户可以通过拖拽组件的方式快速生成 JSON 配置。它提供了丰富的组件库和配置项，用户可以根据需要选择合适的组件并配置相应的属性、事件和动作。设计器还提供了实时预览功能，用户可以随时查看所设计页面的效果。最终，用户可以将 JSON 配置导出，用于页面的生成和修改。

#### epic-builder 生成器

`epic-builder` 是一个页面构建组件，它可以将设计器生成的 JSON 配置构建成页面，完成组件的渲染、事件绑定和数据回显等操作。

## 安装 epic-designer

```bash
npm i epic-designer
```

epic-designer 目标是支持多 UI 兼容,目前支持以下 UI

- element-plus
- ant-design-vue
- naive-ui

## 选择 UI 组件库

- ### 选择 element-plus

```bash
npm i element-plus
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入Element plus样式
import "element-plus/dist/index.css";
// 引入k-designer样式
import "epic-designer/dist/style.css";
import { pluginManager } from "epic-designer";
import { setupElementPlus } from "epic-designer/dist/ui/elementPlus";
// 注册Element UI
setupElementPlus(pluginManager);
```

- ### 选择 ant-design-vue

```bash
npm i ant-design-vue
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入antd UI样式
import "ant-design-vue/dist/antd.css";
// 引入k-designer样式
import "epic-designer/dist/style.css";
import { pluginManager } from "epic-designer";
import { setupAntd } from "epic-designer/dist/ui/antd";
// 使用Antd UI
setupAntd(pluginManager);
```
- ### 选择 naive-ui

```bash
npm i naive-ui
```

main.ts 或者 main.js 引入注册组件

```javascript
// 引入k-designer样式
import "epic-designer/dist/style.css";
import { pluginManager } from "epic-designer";
import { setupNaiveUi } from "epic-designer/dist/ui/naiveUi";
// 注册Naive Ui
setupNaiveUi(pluginManager);
```
## 在页面使用 epic-designer

```vue
<template>
  <div class="h-full">
    <EDesigner />
  </div>
</template>
<script setup lang="ts">
import { EDesigner } from "epic-designer";
</script>
<style>
.h-full {
  height: 100vh;
}
</style>
```

## 交流

点击链接加入 qq 群聊

- [【epic-designer 交流群：747609683】](https://jq.qq.com/?_wv=1027&k=CtrM9ce2)