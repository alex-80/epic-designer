## pluginManager 插件管理器

:::tip 插件管理器
`pluginManager` 是用于管理扩展组件，模块功能的管理器对象

:::

## 注册组件

```ts
import { pluginManager,type ComponentConfigModel } from 'epic-designer'

const Test = {
  component: () => import('./cmp.vue'),
  defaultSchema: {
    label: '测试扩展组件',
    type: 'test',
    componentProps: {
    }
  },
  config: {
    attribute: [
      {
        label: '属性1',
        type: 'input',
        field: 'name'
      }
    ]
  }
}

// 注册组件
pluginManager.registerComponent(Test);
// 添加到组件库分组 左侧不会有新增的组件可选
pluginManager.addSchemaGroup({
  title: "自定义",
  list: ["test"],
});
```

在同级目录下创建cmp.vue 

```vue
<template>
  <div>
  	我是扩展的组件
  </div>
</template>
```



## 组件库分组管理

```ts
import { pluginManager } from "epic-designer";

// 设置页面左侧组件分组内容 - 用于过滤不需要组件，只设置需要展示组件即可
pluginManager.setSchemaGroup({
  title: "自定义",
  list: ["input"],
});
```

## Methods

#### registerComponent

类型：`(componentConfig: ComponentConfigModel) => void`

说明：注册组件到插件管理器中



#### getComponentConfings

类型：`() => ComponentConfigModelRecords`

说明：获取所有插件管理中的所有组件配置



#### getComponentConfingByType

类型：`(type: string) => ComponentConfigModel`

说明：通过type获取组件配置



#### getComponents

类型：`() => Components`

说明：获取已注册的组件



#### getComponent

类型：`(type: string) => any`

说明：通过类型获取的组件



#### registerActivitybar

类型：`(activitybar: ActivitybarModel) => void`

说明：注册活动栏



#### getActivitybars

类型：`() => ActivitybarModel[]`

说明：获取所有已注册活动栏配置



#### registerActivitybar

类型：`(rightSidebar: RightSidebarModel) => void`

说明：注册右侧栏



#### getRightSidebars

类型：`() => RightSidebarModel[]`

说明：获取所有已注册右侧栏配置



#### setSchemaGroup

类型：`(schemaGroup: SchemaGroupItem[]) => void

说明：设置分组,这个操作将会覆盖原来的数据



#### addSchemaGroup

类型：`(schemaGroupItem: SchemaGroupItem) => void

说明：添加分组



#### addPublicMethod

类型：`(method: MethodModel) => void

说明：添加公共方法





