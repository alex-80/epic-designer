import{am as C}from"./index.4abc0d1b.js";import{g as x,r as d,l as w,j as D,p as _,b as j,h as c,o as i,c as m,e as k,s as N,i as f,N as $,Y as q,m as B,u as L,G as O}from"../app.db33cb3d.js";const P={key:0,class:"form-main",style:{height:"100%"}},F=x({__name:"form",props:{componentSchema:{type:Object,require:!0,default:()=>({})}},setup(p,{expose:v}){const o=p,a=d(null),s=w("forms",{}),h=d(!0),l=D({});_("formData",l);function n(){return l}function u(e){Object.assign(l,e)}function y(){var e;return(e=a.value)==null?void 0:e.validate()}j(async()=>{var t;var e;if(((e=o.componentSchema)==null?void 0:e.type)==="form"&&s.value&&a.value){const r=(t=o.componentSchema.name)!=null?t:"default";return s.value[r]=a.value,a.value.getData=n,a.value.setData=u,!1}});const b=c(()=>{const e=o.componentSchema.componentProps;let t=e.labelCol,r=e.wrapperCol;return e.labelLayout==="fixed"&&(t={style:`width:${e.labelWidth}px`},r={style:"width:auto;flex:1"}),{...e,labelCol:t,wrapperCol:r}}),g=c(()=>{var e;return(e=o.componentSchema.children)!=null?e:[]});return v({form:a,getData:n,setData:u,validate:y}),(e,t)=>h.value?(i(),m("div",P,[k(L(C),B({ref_key:"form",ref:a,model:l},b.value,{style:{height:"100%"}}),{default:N(()=>[f(e.$slots,"edit-node",{},()=>[(i(!0),m($,null,q(g.value,r=>f(e.$slots,"node",{componentSchema:r})),256))])]),_:3},16,["model"])])):O("",!0)}});export{F as default};