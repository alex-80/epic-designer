import { type FormItemRule } from '../utils/component/KComponent/KRuleEditor/types'
export interface RenderCallbackParams {
  values: Record<string, any>
}

export interface NodeItem {
  type: string
  label?: string
  field?: string
  name?: string
  slotName?: string
  componentProps?: any
  id?: string
  rules?: FormItemRule[]
  noFormItem?: boolean
  labelCol?: any
  wrapperCol?: any
  children?: NodeItem[]
  show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean)
  [propName: string]: any
}

export interface FormConfig {
  layout?: string
  labelWidth?: string
  labelLayout: any
  labelCol: any
  wrapperCol: any
  hideRequiredMark?: boolean
  customStyle?: string
}

export type FormDataModel = Record<string, any>

export interface SchemaGroupItem {
  title: string
  list: string[]
}

export interface SchemaNodeGroupItem {
  title: string
  list: NodeItem[]
}

export interface Designer {
  setCheckedNode: (record: NodeItem) => void
  setHoverNode: (record: NodeItem | null) => void
  setDisableHover: (disableHover = false) => void
  state: DesignerState
  // schemas: NodeItem[];
}

export interface DesignerState {
  checkedNode: NodeItem | null
  hoverNode: NodeItem | null
  disableHover: boolean
  matched: NodeItem[]
}

export interface GlobalApiConfig {
  apis: any
  [configItem: string]: any
}
export interface PageSchema {
  schemas: NodeItem[]
  script: string
  globalApiConfig?: GlobalApiConfig
}
