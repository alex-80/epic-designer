import{f,s as u,k,o as n,c as i,u as s,F as v,l as h,m as b,a,O as P,P as w,E as D,j as B}from"../app.2d306cc2.js";import{P as F,k as C,I as E,T as g}from"../guide_components_k-designer.md.da94422c.js";const V={class:"k-attribute-view"},N={key:0},x={class:"attr-item"},z=["title"],A={class:"attr-input"},U=f({__name:"KStyleView",setup(S){const p=u("designer"),r=u("schemas"),c=[{label:"\u5BBD\u5EA6",type:"k-input-size",field:"componentProps.style.width"},{label:"\u9AD8\u5EA6",type:"k-input-size",field:"componentProps.style.height"},{label:"\u5185\u8FB9\u8DDD",type:"k-input-size",field:"componentProps.style.padding"},{label:"\u5916\u8FB9\u8DDD",type:"k-input-size",field:"componentProps.style.margin"},{label:"\u80CC\u666F\u8272",type:"color-picker",field:"componentProps.style.backgroundColor",componentProps:{type:"color",style:{width:"60px"}}},{label:"\u5B57\u4F53\u989C\u8272",type:"color-picker",field:"componentProps.style.color",componentProps:{type:"color",style:{width:"60px"}}}],l=k(()=>p.state.checkedNode);function d(o){var t,e;return typeof o.show=="boolean"?o.show:(e=(t=o.show)==null?void 0:t.call(o,{values:l.value}))!=null?e:!0}function m(o,t){E(o,t,l.value),g.push(r.value,"\u7F16\u8F91\u7EC4\u4EF6\u5C5E\u6027")}return(o,t)=>(n(),i("aside",V,[s(l)?(n(),i("div",N,[(n(),i(v,null,h(c,e=>a("div",{key:e.field+s(l).id},[P(a("div",x,[a("div",{class:"attr-label",title:e.label},D(e.label),9,z),a("div",A,[B(s(C),{record:{...e,componentProps:{...e.componentProps},show:!0},"model-value":s(F)(e.field,s(l)),"onUpdate:modelValue":y=>m(y,e.field)},null,8,["record","model-value","onUpdate:modelValue"])])],512),[[w,d(e)]])])),64))])):b("",!0)]))}});export{U as default};
