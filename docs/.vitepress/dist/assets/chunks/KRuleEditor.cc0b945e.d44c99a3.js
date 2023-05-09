import{D,f as B,k as V}from"../guide_components_k-designer.md.da94422c.js";import{f as w,r as f,w as E,o as t,c as n,a as i,F as v,l as C,j as A,i as j,b as U,u as F,E as k,m as x,h as N,s as _,k as K}from"../app.2d306cc2.js";const R={class:"rule-item-main bg-white m-t-2 p-2 rounded border border-solid border-gray-200 hover:border-primary transition-all relative"},I={key:0,class:"flex m-t-2 first:m-0"},L={class:"attr-label",title:"\u6821\u9A8C\u65F6\u673A"},M={class:"attr-input"},O=i("span",{class:"iconfont icon-shanchu1"},null,-1),S=[O],T=w({__name:"KRuleItem",props:{rule:{type:Object,required:!0}},emits:["update:rule","change","delete"],setup(b,{emit:s}){const h=b,g=_("pageManager",{}),o=K(()=>Object.entries(g.funcs.value).filter(([e,r])=>typeof r=="function").map(([e])=>({label:e,value:e}))),c=["string","number","url","array","email"],l=[{label:"change",value:"change"},{label:"blur",value:"blur"}],y=[{label:"string",value:"string"},{label:"number",value:"number"},{label:"boolean",value:"boolean"},{label:"method",value:"method"},{label:"regexp",value:"regexp"},{label:"integer",value:"integer"},{label:"float",value:"float"},{label:"array",value:"array"},{label:"object",value:"object"},{label:"date",value:"date"},{label:"url",value:"url"},{label:"hex",value:"hex"},{label:"email",value:"email"},{label:"any",value:"any"}],p=[{type:"select",label:"\u6821\u9A8C\u65F6\u673A",model:"trigger",componentProps:{options:l,placeholder:"\u6821\u9A8C\u65F6\u673A",multiple:!0,mode:"multiple"}},{type:"switch",label:"\u81EA\u5B9A\u4E49\u89C4\u5219",model:"isValidator"},{type:"select",label:"\u6821\u9A8C\u51FD\u6570",model:"validator",show(){return Boolean(u.value.isValidator)},componentProps:{options:o.value,placeholder:"\u6821\u9A8C\u51FD\u6570"}},{type:"select",label:"\u7C7B\u578B",model:"type",show(){return!u.value.isValidator},componentProps:{options:y,placeholder:"\u7C7B\u578B"}},{type:"input",label:"\u6B63\u5219\u6821\u9A8C",model:"pattern",show(){return!u.value.isValidator},componentProps:{placeholder:"\u6B63\u5219\u6821\u9A8C"}},{type:"number",label:"\u5B57\u6BB5\u957F\u5EA6",model:"len",show(){var e;return c.includes((e=u.value.type)!=null?e:"")},componentProps:{min:0,placeholder:"\u5B57\u6BB5\u957F\u5EA6"}},{type:"number",label:"\u6700\u5C0F\u957F\u5EA6",model:"min",show(){var e;return c.includes((e=u.value.type)!=null?e:"")},componentProps:{min:0,placeholder:"\u6700\u5C0F\u957F\u5EA6"}},{type:"number",label:"\u6700\u5927\u957F\u5EA6",model:"max",show(){var e;return c.includes((e=u.value.type)!=null?e:"")},componentProps:{min:0,placeholder:"\u6700\u5927\u957F\u5EA6"}},{type:"input",label:"\u6821\u9A8C\u4FE1\u606F",model:"message",componentProps:{placeholder:"\u6821\u9A8C\u4FE1\u606F"}}],u=f({});E(()=>h.rule,e=>{u.value=e},{deep:!0,immediate:!0});function d(){const e=u.value;e.isValidator?(delete e.type,delete e.pattern,delete e.len,delete e.min,delete e.max):delete e.validator,s("update:rule",e),s("change",e)}function m(){s("delete")}return(e,r)=>(t(),n("div",R,[(t(),n(v,null,C(p,(a,P)=>(t(),n(v,{key:P},[!a.show||a.show()?(t(),n("div",I,[i("div",L,k(a.label),1),i("div",M,[A(F(V),{record:a,modelValue:u.value[a.model],"onUpdate:modelValue":q=>u.value[a.model]=q,onChange:d},null,8,["record","modelValue","onUpdate:modelValue"])])])):x("",!0)],64))),64)),i("div",{class:"rule-btn-delete absolute top-0 right-0 transition-all w-6 h-6 cursor-pointer rounded-bl-1 flex-center color-white",onClick:m},S)]))}}),z={class:"rule-item-main bg-white m-t-2 p-2 rounded border border-solid border-gray-200 hover:border-primary transition-all relative"},G={key:0,class:"flex m-t-2 first:m-0"},H={class:"attr-label"},X={class:"flex-1"},Q=w({__name:"KRuleEditor",props:{modelValue:{type:Array,default:null}},emits:["update:modelValue"],setup(b,{emit:s}){const h=b,g=D.getComponent("button"),o=f({required:!1,message:"\u5FC5\u586B\u9879",trigger:["change"]}),c=[{type:"switch",label:"\u5FC5\u586B\u9879",model:"required"},{type:"select",label:"\u6821\u9A8C\u65F6\u673A",model:"trigger",show(){return Boolean(o.value.required)},componentProps:{options:[{label:"change",value:"change"},{label:"blur",value:"blur"}],placeholder:"\u6821\u9A8C\u65F6\u673A",multiple:!0,mode:"multiple"}},{type:"input",label:"\u6821\u9A8C\u4FE1\u606F",model:"message",show(){return Boolean(o.value.required)},componentProps:{placeholder:"\u6821\u9A8C\u4FE1\u606F"}}],l=f([]);E(()=>h.modelValue,d=>{if(d){if(!d)return;l.value=[],d.forEach(m=>{typeof m.required<"u"?o.value=m:l.value.push(m)})}},{immediate:!0});function y(){l.value.push({message:"",trigger:["change"]}),p()}function p(){if(o.value.required){s("update:modelValue",B([...l.value,o.value]));return}if(l.value.length){s("update:modelValue",B(l.value));return}s("update:modelValue",void 0)}function u(d){l.value.splice(d,1),p()}return(d,m)=>(t(),n("div",null,[i("div",z,[(t(),n(v,null,C(c,(e,r)=>(t(),n(v,{key:r},[!e.show||e.show()?(t(),n("div",G,[i("div",H,k(e.label),1),i("div",X,[A(F(V),{record:e,modelValue:o.value[e.model],"onUpdate:modelValue":a=>o.value[e.model]=a,onChange:p},null,8,["record","modelValue","onUpdate:modelValue"])])])):x("",!0)],64))),64))]),(t(!0),n(v,null,C(l.value,(e,r)=>(t(),N(T,{rule:l.value[r],"onUpdate:rule":a=>l.value[r]=a,onDelete:a=>u(r),onChange:p,key:r},null,8,["rule","onUpdate:rule","onDelete"]))),128)),A(F(g),{class:"m-t-2",onClick:y},{default:j(()=>[U("\u6DFB\u52A0\u89C4\u5219")]),_:1})]))}});export{Q as default};
