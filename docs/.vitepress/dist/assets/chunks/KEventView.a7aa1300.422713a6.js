import{D as a,P as y,I as k,T as U}from"../guide_components_k-designer.md.da94422c.js";import{f as B,s as c,k as i,o as l,c as p,u as o,j as F,m as g}from"../app.2d306cc2.js";const h={class:"k-event-view"},V={key:0},w=B({__name:"KEventView",setup(N){const v=c("schemas"),d=c("designer"),m=a.getComponent("k-action-editor"),f=a.getComponentConfings(),u=i(()=>d.state.checkedNode),b=i(()=>{var t,e,n,r;const s=[{title:"\u751F\u547D\u5468\u671F",events:[{type:"vnodeBeforeMount",describe:"beforeMount"},{type:"vnodeMounted",describe:"mounted"},{type:"vnodeBeforeUpdate",describe:"beforeUpdate"},{type:"vnodeUpdated",describe:"updated"},{type:"vnodeBeforeUnmount",describe:"beforeUnmount"},{type:"vnodeUnmounted",describe:"unmounted"},{type:"vnodeErrorCaptured",describe:"errorCaptured"}]}],E=(r=(n=f[(e=(t=d.state.checkedNode)==null?void 0:t.type)!=null?e:""])==null?void 0:n.config.event)!=null?r:[];return s.unshift({title:"\u7EC4\u4EF6\u4E8B\u4EF6",events:E}),s});function C(t,e){k(t,e,u.value),U.push(v.value,"\u7F16\u8F91\u7EC4\u4EF6\u5C5E\u6027")}return(t,e)=>(l(),p("aside",h,[o(u)?(l(),p("div",V,[F(o(m),{eventList:o(b),"model-value":o(y)("on",o(u)),"onUpdate:modelValue":e[0]||(e[0]=n=>C(n,"on"))},null,8,["eventList","model-value"])])):g("",!0)]))}});export{w as default};
