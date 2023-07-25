import{w as V,n as ve,g as ye,f as _e,u as h,s as T,r as k,I as we,B as te,h as I,A,o as E,c as Q,K,L as Z,a as _,V as le,y as ee,U as pe,j as L,k as X,H as q,l as M,v as Se,a5 as Ce,a1 as Ne,M as $e,a3 as re,D as he,m as Oe}from"../app.c181f4ec.js";import{bA as fe,bw as W,bB as Be,bC as ie,bD as ke,bx as ue,by as Y,bv as De,bE as Fe,bF as Ee,bG as Te}from"../guide_components_e-designer.md.ee402248.js";import{_ as ce}from"./node.vue_vue_type_script_setup_true_lang.778c5354.js";import{d as Re}from"./vuedraggable.umd.dd4475b1.js";function Ve(s){return ye()?(_e(s),!0):!1}function Ae(s){return typeof s=="function"?s():h(s)}const Me=typeof window<"u";function ze(s,l,i){const e=V(s,(...u)=>(ve(()=>e()),l(...u)),i)}function J(s){var l;const i=Ae(s);return(l=i==null?void 0:i.$el)!=null?l:i}const me=Me?window:void 0;function Ie(){const s=k(!1);return we()&&te(()=>{s.value=!0}),s}function je(s){const l=Ie();return T(()=>(l.value,Boolean(s())))}var de=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,Ue=(s,l)=>{var i={};for(var e in s)He.call(s,e)&&l.indexOf(e)<0&&(i[e]=s[e]);if(s!=null&&de)for(var e of de(s))l.indexOf(e)<0&&Pe.call(s,e)&&(i[e]=s[e]);return i};function G(s,l,i={}){const e=i,{window:u=me}=e,f=Ue(e,["window"]);let n;const x=je(()=>u&&"ResizeObserver"in u),d=()=>{n&&(n.disconnect(),n=void 0)},m=T(()=>Array.isArray(s)?s.map(c=>J(c)):[J(s)]),r=V(m,c=>{if(d(),x.value&&u){n=new ResizeObserver(l);for(const a of c)a&&n.observe(a,f)}},{immediate:!0,flush:"post",deep:!0}),t=()=>{d(),r()};return Ve(t),{isSupported:x,stop:t}}function Le(s,l={width:0,height:0},i={}){const{window:e=me,box:u="content-box"}=i,f=T(()=>{var d,m;return(m=(d=J(s))==null?void 0:d.namespaceURI)==null?void 0:m.includes("svg")}),n=k(l.width),x=k(l.height);return G(s,([d])=>{const m=u==="border-box"?d.borderBoxSize:u==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(e&&f.value){const r=J(s);if(r){const t=e.getComputedStyle(r);n.value=Number.parseFloat(t.width),x.value=Number.parseFloat(t.height)}}else if(m){const r=Array.isArray(m)?m:[m];n.value=r.reduce((t,{inlineSize:c})=>t+c,0),x.value=r.reduce((t,{blockSize:c})=>t+c,0)}else n.value=d.contentRect.width,x.value=d.contentRect.height},i),V(()=>J(s),d=>{n.value=d?l.width:0,x.value=d?l.height:0}),{width:n,height:x}}const We={class:"action-item whitespace-nowrap"},Je=_("span",{class:"iconfont icon-fuzhi3"},null,-1),Ge=[Je],Qe=_("span",{class:"iconfont icon-shanchu1"},null,-1),Xe=[Qe],Ye=I({__name:"previewWidgets",setup(s){const l=A("pageManager",{}),i=A("pageSchema"),e=A("designer"),u=k(null),f=k(null),n=k(null),x=k(!1),d=k(!1),m=k(!0),{canvasScale:r}=fe();let t=null;const c=T(()=>{var w,C,$,N,O,F;const o=l.componentInstances.value,g=(w=e.state.checkedNode)==null?void 0:w.id,S=($=W.getComponentConfingByType((C=e.state.checkedNode)==null?void 0:C.type))!=null?$:null;if(!g||!(o!=null&&o[g]))return null;if((S==null?void 0:S.defaultSchema.input)&&((N=e.state.checkedNode)==null?void 0:N.noFormItem)!==!0)return(O=o[g+"formItem"])==null?void 0:O.$el;const p=o[g];return((F=p==null?void 0:p.$el)==null?void 0:F.nodeName)==="#text"?null:p==null?void 0:p.$el}),a=T(()=>{var w,C,$,N,O;const o=l.componentInstances.value,g=(w=e.state.hoverNode)==null?void 0:w.id,S=($=W.getComponentConfingByType((C=e.state.hoverNode)==null?void 0:C.type))!=null?$:null;if(!g||!(o!=null&&o[g]))return null;if((S==null?void 0:S.defaultSchema.input)&&((N=e.state.hoverNode)==null?void 0:N.noFormItem)!==!0)return(O=o[g+"formItem"])==null?void 0:O.$el;const p=o[g];return(p==null?void 0:p.$el.nodeName)==="#text"?null:p==null?void 0:p.$el}),{mutationObserver:y,observerConfig:D}=se(R),{startTimedQuery:b,stopTimedQuery:v}=Be(R);V(()=>c.value,o=>{if(o){x.value=!0,y.observe(o,D);const g=o.parentNode;g&&(g.ondragstart=()=>{m.value=!1,b()},g.ondragend=()=>{m.value=!0,v()}),R()}else x.value=!1});const{mutationObserver:B,observerConfig:z}=se(oe);V(()=>a.value,o=>{o&&(B.observe(o,z),oe())});let j=0;V(()=>{var o;return(o=e.state.hoverNode)==null?void 0:o.id},o=>{d.value=!0,clearTimeout(j),!o&&(j=setTimeout(()=>{d.value=!1},300))});function R(){var H,P,U;const o=c.value;if(!o)return;const{top:g,left:S}=(H=t==null?void 0:t.getBoundingClientRect())!=null?H:{top:0,left:0},{top:p,left:w,width:C,height:$}=o.getBoundingClientRect(),N=p-g+((P=t==null?void 0:t.scrollTop)!=null?P:0)*r.value,O=w-S+((U=t==null?void 0:t.scrollLeft)!=null?U:0)*r.value,F=$/r.value;u.value&&(u.value.style.width=`${C/r.value}px`,u.value.style.height=`${F}px`,u.value.style.top=`${N/r.value}px`,u.value.style.left=`${O/r.value}px`),n.value&&(N<45&&F<100?(n.value.style.top="",n.value.style.bottom="-30px",n.value.style["border-radius"]="0px 0px 4px 4px"):N<45?(n.value.style.top="0px",n.value.style["border-radius"]="0px 0px 4px 0"):(n.value.style.top="-30px",n.value.style["border-radius"]="4px 4px 0px 0px"))}function oe(){var F,H,P,U,ne,ae;const o=a.value;if(!o)return;const{top:g,left:S}=(F=t==null?void 0:t.getBoundingClientRect())!=null?F:{top:0,left:0},{top:p,left:w,width:C,height:$}=(U=(H=o.getBoundingClientRect)==null?void 0:H.call(o))!=null?U:(P=o.nextElementSibling)==null?void 0:P.getBoundingClientRect(),N=p-g+((ne=t==null?void 0:t.scrollTop)!=null?ne:0)*r.value,O=w-S+((ae=t==null?void 0:t.scrollLeft)!=null?ae:0)*r.value;f.value&&(f.value.style.width=`${C/r.value}px`,f.value.style.height=`${$/r.value}px`,f.value.style.top=`${N/r.value}px`,f.value.style.left=`${O/r.value}px`)}function se(o){const g=window.MutationObserver,S={childList:!0,attributes:!0,subtree:!0};return{mutationObserver:new g(o),observerConfig:S}}function be(){var $,N,O;const o=ie(i.schemas,(N=($=e.state.checkedNode)==null?void 0:$.id)!=null?N:"root");if(!o)return!1;const{list:g,schema:S,index:p}=o,w=ke({...S,id:ue()});g.splice(p+1,0,w);const C=w.children?[...w.children]:[];for(;C.length>0;){const F=C.pop();F.id=ue(),((O=F.children)==null?void 0:O.length)>0&&C.push(...F.children)}e.setCheckedNode(w),Y.push(i.schemas,"\u590D\u5236\u7EC4\u4EF6")}function xe(){var w,C;const o=ie(i.schemas,(C=(w=e.state.checkedNode)==null?void 0:w.id)!=null?C:"root");if(!o)return!1;let{list:g,schema:S,index:p}=o;g.splice(p,1),p===g.length&&p--,e.setCheckedNode(g[p]),Y.push(i.schemas,"\u5220\u9664\u7EC4\u4EF6")}return te(()=>{t=document.querySelector(".epic-edit-range"),t==null||t.addEventListener("scroll",()=>{R()}),G(c,R),G(a,R)}),(o,g)=>{var S,p,w,C,$,N,O;return E(),Q(pe,null,[K(_("div",{ref_key:"selectorRef",ref:u,class:ee(["checked-widget absolute pointer-events-none z-20",{"transition-all":m.value}])},[_("div",{class:"action-box",ref_key:"actionBoxRef",ref:n},[_("div",We,le((S=h(e).state.checkedNode)==null?void 0:S.type)+" "+le((N=(p=h(e).state.checkedNode)==null?void 0:p.label)!=null?N:($=h(W).getComponentConfingByType((C=(w=h(e).state.checkedNode)==null?void 0:w.type)!=null?C:""))==null?void 0:$.defaultSchema.label),1),_("div",{title:"\u590D\u5236",class:"action-item pointer-events-auto",onClick:be},Ge),_("div",{title:"\u5220\u9664",class:"action-item pointer-events-auto",onClick:xe},Xe)],512)],2),[[Z,x.value&&((O=h(e).state.checkedNode)==null?void 0:O.id)!=="root"]]),K(_("div",{ref_key:"hoverWidgetRef",ref:f,class:"hover-widget absolute transition-all pointer-events-none z-998"},null,512),[[Z,d.value]])],64)}}}),qe=["index","onClick","onMouseover"],Ke=I({__name:"editNodeItem",props:{schemas:{}},emits:["update:schemas"],setup(s,{emit:l}){const i=s,e=A("designer"),u=A("pageSchema"),f=T({get(){return i.schemas},set(m){l("update:schemas",m)}});function n(m){e.setCheckedNode(f.value[m])}function x(){e.setDisableHover(),Y.push(u.schemas,"\u62D6\u62FD\u7EC4\u4EF6")}function d(){Y.push(u.schemas,"\u63D2\u5165\u7EC4\u4EF6")}return(m,r)=>(E(),L(h(Re),Se({modelValue:f.value,"onUpdate:modelValue":r[1]||(r[1]=t=>f.value=t),"item-key":"id","component-data":{name:"draggable-range",type:"transition-group"},class:"draggable-range"},{animation:200,group:"edit-draggable",ghostClass:"moveing"},{onStart:r[2]||(r[2]=t=>{n(t.oldIndex),h(e).setDisableHover(!0)}),onEnd:r[3]||(r[3]=t=>x()),onAdd:r[4]||(r[4]=t=>{n(t.newIndex),d()})}),{item:X(({element:t,index:c})=>[_("div",{index:c,onClick:q(a=>h(e).setCheckedNode(t),["stop"]),onMouseover:q(a=>h(e).setHoverNode(t),["stop"]),onMouseout:r[0]||(r[0]=q(a=>h(e).setHoverNode(null),["stop"]))},[M(ge,{schema:t},null,8,["schema"])],40,qe)]),_:1},16,["modelValue"]))}}),ge=I({name:"ENodeItem",__name:"nodeItem",props:{schema:{}},setup(s){const l=s;return(i,e)=>{var f;const u=Ce("ENodeItem");return["row","tabs"].includes((f=l.schema)==null?void 0:f.type)?(E(),L(h(ce),{key:0,record:l.schema},{"edit-node":X(()=>[(E(!0),Q(pe,null,Ne(l.schema.children,n=>(E(),L(u,{key:n.id,schema:n},null,8,["schema"]))),128))]),_:1},8,["record"])):(E(),L(h(ce),{key:1,record:l.schema},{"edit-node":X(()=>[l.schema.children?(E(),L(Ke,{key:0,schemas:l.schema.children,"onUpdate:schemas":e[0]||(e[0]=n=>l.schema.children=n)},null,8,["schemas"])):$e("",!0)]),_:1},8,["record"]))}}}),Ze={class:"edit-toolbar flex items-center justify-end text-gray-500 px-4"},et=_("span",{class:"icon iconfont"},"\uE60B",-1),tt=[et],ot=_("span",{class:"icon iconfont"},"\uE60C",-1),st={class:"pr-8px w-82px cursor-pointer"},nt={class:"w-90px cursor-pointer"},at=I({__name:"toolbar",setup(s){const l=W.getComponent("slider"),i=W.getComponent("select"),{canvasScale:e}=fe(),u=A("pageSchema"),f=k(null),n=T({get(){return`${(e.value*100).toFixed(0)}%`},set(c){e.value=Number(c)}}),x=[{label:"60%",value:"0.6"},{label:"80%",value:"0.8"},{label:"100%",value:"1.0"},{label:"120%",value:"1.2"},{label:"140%",value:"1.4"}];function d(c="demo.json"){let a="data:text/json;charset=utf-8,";a+=JSON.stringify(u,null,2);var y=encodeURI(a),D=document.createElement("a");D.setAttribute("href",y),D.setAttribute("download",c),D.click()}function m(){var c;(c=f.value)==null||c.click()}function r(c){var D;const a=(D=c.target.files)==null?void 0:D[0];if(!a)return;c.target.value=null;const y=new FileReader;y.readAsText(a),y.onload=b=>{var v;t((v=b.target)==null?void 0:v.result)}}function t(c){try{const a=JSON.parse(c!=null?c:"");De(u,a)}catch(a){console.error(a)}}return(c,a)=>(E(),Q("div",Ze,[_("div",{title:"\u5BFC\u51FA",class:"pr-16px cursor-pointer",onClick:a[0]||(a[0]=y=>d("demo.json"))},tt),_("div",{title:"\u5BFC\u5165",class:"pr-16px cursor-pointer",onClick:a[1]||(a[1]=y=>m())},[ot,K(_("input",{type:"file",ref_key:"fileRef",ref:f,onChange:r},null,544),[[Z,!1]])]),_("div",st,[M(h(i),{value:n.value,"onUpdate:value":a[2]||(a[2]=y=>n.value=y),modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=y=>n.value=y),options:x,size:"small"},null,8,["value","modelValue"])]),_("div",nt,[M(h(l),{min:.2,max:2,step:.1,tooltip:!1,value:h(e),"onUpdate:value":a[4]||(a[4]=y=>re(e)?e.value=y:null),modelValue:h(e),"onUpdate:modelValue":a[5]||(a[5]=y=>re(e)?e.value=y:null)},null,8,["value","modelValue"])])]))}}),lt={class:"h-full flex flex-col relative"},rt=["draggable"],it=I({__name:"editScreenContainer",props:{rootSchema:{}},setup(s){const l=s,i=k(null),e=k(null),{pressSpace:u}=Fe(),{handleElementDragStart:f,handleElementDrag:n,handleElementDragEnd:x}=Ee(i),{width:d,height:m}=Le(i),{canvasScale:r,handleZoom:t}=Te(e),c=k({}),a=T(()=>{var B,z,j,R;const b=parseFloat((z=(B=l.rootSchema.componentProps.style)==null?void 0:B.width)!=null?z:1320),v=parseFloat((R=(j=l.rootSchema.componentProps.style)==null?void 0:j.height)!=null?R:800);return{width:b,height:v}});ze(d,()=>{y(),D()}),V(()=>l.rootSchema.componentProps.style.width,y);function y(){let b=a.value.width,v=a.value.height;(Number.isNaN(b)||b<d.value)&&(b=d.value),(Number.isNaN(v)||b<m.value)&&(v=m.value),c.value={width:d.value+b+"px",height:m.value+v+"px"}}function D(){ve(()=>{let b=a.value.width,v=a.value.height;(Number.isNaN(b)||b<d.value)&&(b=d.value),(Number.isNaN(v)||b<m.value)&&(v=m.value);const B=v/2,z=b/2;i.value.scrollTo(z,B)})}return G(i,([{contentRect:b}])=>{const v=(b.width-20)/a.value.width;v<1.2&&(r.value=v),y(),D()}),te(()=>{G(i,([{contentRect:b}])=>{const v=(b.width-20)/a.value.width;v<1.2?r.value=v:r.value=1.2,y(),D()})}),(b,v)=>(E(),Q("div",lt,[M(at),_("div",{ref_key:"editScreenContainerRef",ref:i,class:ee(["flex-1 overflow-auto epic-edit-screen-container",{"cursor-grab":h(u)}]),draggable:h(u),onWheel:v[0]||(v[0]=(...B)=>h(t)&&h(t)(...B)),onDragstart:v[1]||(v[1]=(...B)=>h(f)&&h(f)(...B)),onDragend:v[2]||(v[2]=(...B)=>h(x)&&h(x)(...B)),onDrag:v[3]||(v[3]=(...B)=>h(n)&&h(n)(...B))},[_("div",{id:"canvasContainer",class:"flex items-center justify-center",style:he(c.value)},[_("div",{ref_key:"draggableElRef",ref:e,class:"transition-all"},[_("div",{class:ee({"pointer-events-none":h(u)})},[Oe(b.$slots,"default")],2)],512)],4)],42,rt)]))}}),ut={class:"epic-edit-canvas"},ht=I({__name:"index",setup(s){const l=A("pageSchema"),i=T(()=>l.schemas[0]),e=T(()=>{var u,f,n,x;return{width:(f=(u=i.value.componentProps.style)==null?void 0:u.width)!=null?f:"1320px",height:(x=(n=i.value.componentProps.style)==null?void 0:n.height)!=null?x:"800px"}});return(u,f)=>(E(),Q("section",ut,[M(it,{"root-schema":i.value},{default:X(()=>[_("div",{class:"epic-edit-range rounded-md overflow-auto relative",style:he(e.value)},[M(ge,{schema:i.value},null,8,["schema"]),M(Ye)],4)]),_:1},8,["root-schema"])]))}});export{ht as default};