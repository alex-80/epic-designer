import{A as U}from"./vuedraggable.umd.190d59ef.78e84975.js";import{D as d,f as h,M as g,a as _,T as b}from"../guide_components_k-designer.md.da94422c.js";import{f as I,r as C,s as V,o as c,c as k,j as y,i as m,F as K,l as F,u,h as M,y as $,a as E,H as j,b as A,E as L,D as x}from"../app.2d306cc2.js";import"./commonjsHelpers.da91e947.9d7ceee7.js";const P={class:"k-component-view"},S=["onClick"],R=I({__name:"KComponentView",setup(T){const N=d.getComponent("Collapse"),w=d.getComponent("CollapseItem"),s=C([]);s.value=d.getSchemaByGroup();const r=V("schemas"),p=V("designer"),o=C(s.value.map(l=>l.title));function B(l,a){a[l.oldIndex]=h({...x(a[l.oldIndex]),id:g()})}function D(l){var a,e;const t=_(r.value,(e=(a=p.state.checkedNode)==null?void 0:a.id)!=null?e:"root");if(!t)return!1;let{list:i,schema:n,index:v}=t;n.children&&!["row","tabs"].includes(n.type)&&(i=n.children,v=n.children.length-1);const f=h({...x(l),id:g()});i.splice(v+1,0,f),p.setCheckedNode(f),b.push(r.value,"\u63D2\u5165\u7EC4\u4EF6")}return(l,a)=>(c(),k("div",P,[y(u(N),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),activeKey:o.value,"onUpdate:activeKey":a[1]||(a[1]=e=>o.value=e)},{default:m(()=>[(c(!0),k(K,null,F(s.value,e=>(c(),M(u(w),{title:e.title,header:e.title,name:e.title,key:e.title},{default:m(()=>[y(u(U),$({modelValue:e.list,"onUpdate:modelValue":t=>e.list=t},{group:{name:"edit-draggable",pull:"clone",put:!1},sort:!1,animation:180,ghostClass:"moving"},{"item-key":"id","component-data":{name:"list"},onEnd:t=>B(t,e.list)}),{item:m(({element:t})=>[E("div",{class:"source-componet-item",onClick:i=>D(t)},[E("span",{class:j(["iconfont",t.icon])},null,2),A(" "+L(t.label),1)],8,S)]),_:2},1040,["modelValue","onUpdate:modelValue","onEnd"])]),_:2},1032,["title","header","name"]))),128))]),_:1},8,["modelValue","activeKey"])]))}});export{R as default};
