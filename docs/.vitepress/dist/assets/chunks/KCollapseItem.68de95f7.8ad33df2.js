import{c5 as c}from"../guide_components_k-designer.md.da94422c.js";import{f as s,G as a,B as o}from"../app.2d306cc2.js";const f=s({props:{record:{type:Object,require:!0},children:{type:Array}},setup(r,{attrs:l,slots:t}){return()=>{const e={...r.record,title:r.record.label},d=e.children;return delete e.children,a(c,e,{default:()=>o(t,"edit-node",{},()=>d.map(n=>o(t,"node",{record:n})))})}}});export{f as default};
