import{a as n,i as c,l as i,h as m,m as p}from"../guide_components_e-designer.md.ee402248.js";import{h as d,o as r,c as o,y as t,u as s,m as l,b as y,V as h,M as u,a as f,D as v}from"../app.c181f4ec.js";const S=n({header:{type:String,default:""},bodyStyle:{type:c([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=d({name:"ElCard"}),g=d({...b,props:S,setup(k){const a=i("card");return(e,C)=>(r(),o("div",{class:t([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),o("div",{key:0,class:t(s(a).e("header"))},[l(e.$slots,"header",{},()=>[y(h(e.header),1)])],2)):u("v-if",!0),f("div",{class:t(s(a).e("body")),style:v(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var w=p(g,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const $=m(w);export{$ as N,S};