"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),n=require("naive-ui"),h=e.defineComponent({props:{componentSchema:{type:Object,default:()=>({})}},emits:["ok","close","update:modelValue"],setup(a,{attrs:c,slots:l,emit:t}){return()=>{var r;const o={...a.componentSchema,...c,title:((r=a.componentSchema)==null?void 0:r.label)??"",class:"epic-modal-n",preset:"card",show:c.modelValue,"onUpdate:show":i},u=o.children??[];delete o.children;let d=null;u.length?d=()=>u.map(p=>e.renderSlot(l,"node",{componentSchema:p})):d=()=>[e.renderSlot(l,"default")];function m(){t("ok")}function i(){t("update:modelValue",!1),t("close")}return e.h(n.NModal,o,{default:()=>[e.h("div",{class:"epic-modal-main"},e.renderSlot(l,"edit-node",{},d)),e.h("div",{class:"epic-modal-footer"},e.h(n.NSpace,{justify:"end"},{default:()=>[e.h(n.NButton,{onClick:i},{default:()=>"关闭"}),e.h(n.NButton,{type:"primary",onClick:m},{default:()=>o.okText??"确定"})]}))]})}}});exports.default=h;