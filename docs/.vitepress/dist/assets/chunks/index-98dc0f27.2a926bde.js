import{R as v}from"./index-b8b964c9.fce975b8.js";import{e as d,r as f,G as k,o as t,c as o,a as e,L as m,W as B,n as c,O as x,u as y,v as C,P as b}from"../app.88701f9d.js";const g={class:"epic-action-bar"},h={class:"actions-container"},A=["title","onClick"],D={class:"text-14px"},E={class:"sidebar-container"},z=d({name:"EActionBar",__name:"index",setup(R){const r=v.getActivitybars(),a=f(0),s=k(null);s.value=r[0].component;function p(u,n){if(a.value===n)return a.value=null,!1;s.value=u.component,a.value=n}return(u,n)=>(t(),o(m,null,[e("div",g,[e("ul",h,[(t(!0),o(m,null,B(y(r),(l,i)=>(t(),o("li",{key:i,class:c(["action-item",{checked:a.value===i}]),title:l.title,onClick:w=>p(l,i)},[e("span",{class:c(["iconfont relative",l.icon])},null,2),e("div",D,x(l.title),1)],10,A))),128))])]),e("aside",{class:c(["epic-left-sidebar",{hide:a.value===null}])},[e("div",E,[(t(),C(b(s.value)))])],2)],64))}});export{z as default};