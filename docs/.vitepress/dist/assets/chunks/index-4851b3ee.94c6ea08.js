import{i as _,m as f,p as w,o as p,c as k,P as N,Q as j,d as g,e as u,v as U,u as t,k as z,q as D,t as x,G as E,C,f as K}from"../app.b200646e.js";import{R as O}from"./vuedraggable.umd-95bb1123.93b8ed8d.js";import{Y as b}from"./index.0d4f5749.js";import{m as h}from"./icon.vue_vue_type_script_setup_true_lang-3f9e4127.6b0b97e0.js";const R={key:0,class:"pl-4"},q=_({name:"KOptionsCol",__name:"optionsCol",props:{modelValue:{}},emits:["update:modelValue"],setup(c,{emit:v}){const V=c,i=b.getComponent("input"),s=z("tree",!1),d=v,r=f({get(){return V.modelValue},set(l){d("update:modelValue",l)}});function n(l){const o={label:"",value:""};l.children?l.children.push(o):l.children=[o]}function m(l){var o;(o=r.value)==null||o.splice(l,1)}return(l,o)=>{const y=D("KOptionsCol");return p(),x(t(O),{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=e=>r.value=e),"item-key":"id","component-data":{type:"transition-group"},group:"option-list",handle:".handle",animation:200},{item:U(({element:e,index:B})=>[g("div",null,[g("div",{class:E([t(s)?"grid-cols-[16px_auto_auto_16px_16px]":"grid-cols-[16px_auto_auto_16px]","option-item grid gap-2 items-center mb-2"])},[u(t(h),{class:"mr-2 text-lg cursor-move handle",name:"icon-tuozhuai"}),u(t(i),{modelValue:e.label,"onUpdate:modelValue":a=>e.label=a,value:e.label,"onUpdate:value":a=>e.label=a,placeholder:"label"},null,8,["modelValue","onUpdate:modelValue","value","onUpdate:value"]),u(t(i),{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,value:e.value,"onUpdate:value":a=>e.value=a,placeholder:"value"},null,8,["modelValue","onUpdate:modelValue","value","onUpdate:value"]),t(s)?(p(),x(t(h),{key:0,class:"text-lg",name:"icon-tianjia1",onClick:a=>n(e)},null,8,["onClick"])):C("",!0),u(t(h),{class:"text-lg hover:text-red cursor-pointer",name:"icon-shanchu1",onClick:a=>m(B)},null,8,["onClick"])],2),e.children?(p(),k("div",R,[u(y,{modelValue:e.children,"onUpdate:modelValue":a=>e.children=a},null,8,["modelValue","onUpdate:modelValue"])])):C("",!0)])]),_:1},8,["modelValue"])}}}),G={class:""},H={class:"py-4 my-2 text-center text-gray-400 bg-white"},S=_({__name:"index",props:{tree:{type:Boolean},modelValue:{}},emits:["update:modelValue"],setup(c,{emit:v}){const V=b.getComponent("button"),i=c,s=v,d=f({get(){return i.modelValue},set(n){s("update:modelValue",n)}});w("tree",i.tree);function r(){var n;const m={label:"",value:""};(n=d.value)==null||n.push(m)}return(n,m)=>{var l;return p(),k("div",G,[N(g("div",H,"\u6682\u65E0\u9009\u9879",512),[[j,!((l=d.value)!=null&&l.length)]]),u(q,{modelValue:d.value,"onUpdate:modelValue":m[0]||(m[0]=o=>d.value=o)},null,8,["modelValue"]),u(t(V),{onClick:r},{default:U(()=>[K("\u6DFB\u52A0\u9009\u9879")]),_:1})])}}});export{S as default};