"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue");require("./el-select-0ea8fbf8.cjs");const a=require("element-plus"),i=t.defineComponent({emits:["update:modelValue"],setup(s,{emit:d,attrs:n}){function r(e=null){d("update:modelValue",e)}return()=>{const e={...n,"onUpdate:modelValue":r};return t.h(a.ElRadioGroup,e,{default:()=>{var u,o;return[e!=null&&e.radioButton?(u=e.options)==null?void 0:u.map(l=>t.h(a.ElRadioButton,{label:l.value},{default:()=>l.label})):(o=e.options)==null?void 0:o.map(l=>t.h(a.ElRadio,{label:l.value},{default:()=>l.label}))]}})}}});exports.default=i;