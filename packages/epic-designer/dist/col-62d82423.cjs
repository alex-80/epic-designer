"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),d=require("element-plus"),u=e.defineComponent({props:{componentSchema:{type:Object,required:!0,default:()=>({})}},setup(n,{attrs:m,slots:o}){return()=>{var r;const t={...n.componentSchema,title:(r=n.componentSchema)==null?void 0:r.label},c=t.children??[];return delete t.children,e.h(d.ElCol,t,{default:()=>e.renderSlot(o,"edit-node",{},()=>c.map(l=>e.renderSlot(o,"node",{componentSchema:l})))})}}});exports.default=u;