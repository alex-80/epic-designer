import{e as M,j as V,f as F,o as B,c as q,d as U,q as J,b as x,s as re,r as T,w as W,k as ce,D as K,E as X,u as i,P as ne,n as Y,M as de,U as fe,v as H,X as ge,F as xe,g as ye,A as G,m as be,a3 as oe,N as Ne}from"../app.f47f61a8.js";import{g as ve,R as O,h as Q,b as se,c as ke,D as Ce,B as we,q as Se,k as _e,d as Re,L as ie,e as $e,a as ue,C as Z,_ as De}from"./index-9f785207.e6578421.js";import{R as Te}from"./vuedraggable.umd-6a5b6da9.995dc650.js";import"./commonjsHelpers-c5d32002.490f5bf3.js";const Be={class:"action-item whitespace-nowrap"},Ie=x("span",{class:"iconfont icon-fuzhi3"},null,-1),Ee=[Ie],Ve=x("span",{class:"iconfont icon-shanchu1"},null,-1),Ue=[Ve],Fe=M({__name:"previewWidgets",setup(E){const y=V("pageManager",{}),m=V("pageSchema"),e=V("designer"),c=T(null),p=T(null),s=T(null),_=T(!1),S=T(!1),C=T(!0),{canvasScale:o}=ve();let a=null;const d=F(()=>{var D;var l,v,r,w,f;const g=y.componentInstances.value,N=(l=e.state.checkedNode)==null?void 0:l.id,b=(D=O.getComponentConfingByType((v=e.state.checkedNode)==null?void 0:v.type))!=null?D:null;if(!N||!(g!=null&&g[N]))return null;if(b!=null&&b.defaultSchema.input&&((r=e.state.checkedNode)==null?void 0:r.noFormItem)!==!0)return(w=g[N+"formItem"])==null?void 0:w.$el;const k=g[N];return((f=k==null?void 0:k.$el)==null?void 0:f.nodeName)==="#text"?null:k==null?void 0:k.$el}),t=F(()=>{var k;var l,v,r,w;const f=y.componentInstances.value,g=(l=e.state.hoverNode)==null?void 0:l.id,N=(k=O.getComponentConfingByType((v=e.state.hoverNode)==null?void 0:v.type))!=null?k:null;if(!g||!(f!=null&&f[g]))return null;if(N!=null&&N.defaultSchema.input&&((r=e.state.hoverNode)==null?void 0:r.noFormItem)!==!0)return(w=f[g+"formItem"])==null?void 0:w.$el;const b=f[g];return(b==null?void 0:b.$el.nodeName)==="#text"?null:b==null?void 0:b.$el}),{mutationObserver:h,observerConfig:$}=te(I),{startTimedQuery:u,stopTimedQuery:n}=Re(I);W(()=>d.value,l=>{if(l){_.value=!0,h.observe(l,$);const v=l.parentNode;v&&(v.ondragstart=()=>{C.value=!1,u()},v.ondragend=()=>{C.value=!0,n()}),I()}else _.value=!1});const{mutationObserver:R,observerConfig:j}=te(ee);W(()=>t.value,l=>{l&&(R.observe(l,j),ee())});let L=0;W(()=>{var l;return(l=e.state.hoverNode)==null?void 0:l.id},l=>{S.value=!0,clearTimeout(L),!l&&(L=setTimeout(()=>{S.value=!1},300))});function I(){var A,P,z;const l=d.value;if(!l)return;const{top:v,left:r}=(A=a==null?void 0:a.getBoundingClientRect())!=null?A:{top:0,left:0},{top:w,left:f,width:g,height:N}=l.getBoundingClientRect(),b=w-v+((P=a==null?void 0:a.scrollTop)!=null?P:0)*o.value,k=f-r+((z=a==null?void 0:a.scrollLeft)!=null?z:0)*o.value,D=N/o.value;c.value&&(c.value.style.width=`${g/o.value}px`,c.value.style.height=`${D}px`,c.value.style.top=`${b/o.value}px`,c.value.style.left=`${k/o.value}px`),s.value&&(b<45&&D<100?(s.value.style.top="",s.value.style.bottom="-30px",s.value.style["border-radius"]="0px 0px 4px 4px"):b<45?(s.value.style.top="0px",s.value.style["border-radius"]="0px 0px 4px 0"):(s.value.style.top="-30px",s.value.style["border-radius"]="4px 4px 0px 0px"))}function ee(){var P,z,le,ae;var l,v;const r=t.value;if(!r)return;const{top:w,left:f}=(P=a==null?void 0:a.getBoundingClientRect())!=null?P:{top:0,left:0},{top:g,left:N,width:b,height:k}=(z=(l=r.getBoundingClientRect)==null?void 0:l.call(r))!=null?z:(v=r.nextElementSibling)==null?void 0:v.getBoundingClientRect(),D=g-w+((le=a==null?void 0:a.scrollTop)!=null?le:0)*o.value,A=N-f+((ae=a==null?void 0:a.scrollLeft)!=null?ae:0)*o.value;p.value&&(p.value.style.width=`${b/o.value}px`,p.value.style.height=`${k/o.value}px`,p.value.style.top=`${D/o.value}px`,p.value.style.left=`${A/o.value}px`)}function te(l){const v=window.MutationObserver,r={childList:!0,attributes:!0,subtree:!0};return{mutationObserver:new v(l),observerConfig:r}}function me(){var k;var l,v;const r=ie(m.schemas,(k=(l=e.state.checkedNode)==null?void 0:l.id)!=null?k:"root");if(!r)return!1;const{list:w,schema:f,index:g}=r,N=$e({...f,id:ue()});w.splice(g+1,0,N);const b=N.children?[...N.children]:[];for(;b.length>0;){const D=b.pop();D.id=ue(),((v=D.children)==null?void 0:v.length)>0&&b.push(...D.children)}e.setCheckedNode(N),Z.push(m.schemas,"\u590D\u5236\u7EC4\u4EF6")}function he(){var g;var l;const v=ie(m.schemas,(g=(l=e.state.checkedNode)==null?void 0:l.id)!=null?g:"root");if(!v)return!1;let{list:r,schema:w,index:f}=v;r.splice(f,1),f===r.length&&f--,e.setCheckedNode(r[f]),Z.push(m.schemas,"\u5220\u9664\u7EC4\u4EF6")}return ce(()=>{a=document.querySelector(".epic-edit-range"),a==null||a.addEventListener("scroll",()=>{I()}),Q(d,I),Q(t,I)}),(l,v)=>{var b,k;var r,w,f,g,N;return B(),q(de,null,[K(x("div",{ref_key:"selectorRef",ref:c,class:Y(["checked-widget absolute pointer-events-none z-20",{"transition-all":C.value}])},[x("div",{class:"action-box",ref_key:"actionBoxRef",ref:s},[x("div",Be,ne((r=i(e).state.checkedNode)==null?void 0:r.type)+" "+ne((k=(w=i(e).state.checkedNode)==null?void 0:w.label)!=null?k:(g=i(O).getComponentConfingByType((b=(f=i(e).state.checkedNode)==null?void 0:f.type)!=null?b:""))==null?void 0:g.defaultSchema.label),1),x("div",{title:"\u590D\u5236",class:"action-item pointer-events-auto",onClick:me},Ee),x("div",{title:"\u5220\u9664",class:"action-item pointer-events-auto",onClick:he},Ue)],512)],2),[[X,_.value&&((N=i(e).state.checkedNode)==null?void 0:N.id)!=="root"]]),K(x("div",{ref_key:"hoverWidgetRef",ref:p,class:"hover-widget absolute transition-all pointer-events-none z-998"},null,512),[[X,S.value]])],64)}}}),Me=["index","onClick","onMouseover"],je=M({__name:"editNodeItem",props:{schemas:{}},emits:["update:schemas"],setup(E,{emit:y}){const m=E,e=V("designer"),c=V("pageSchema"),p=F({get(){return m.schemas},set(C){y("update:schemas",C)}});function s(C){e.setCheckedNode(p.value[C])}function _(){e.setDisableHover(),Z.push(c.schemas,"\u62D6\u62FD\u7EC4\u4EF6")}function S(){Z.push(c.schemas,"\u63D2\u5165\u7EC4\u4EF6")}return(C,o)=>(B(),H(i(Te),be({modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=a=>p.value=a),"item-key":"id","component-data":{name:"draggable-range",type:"transition-group"},class:"draggable-range"},{animation:200,group:"edit-draggable",ghostClass:"moveing"},{onStart:o[2]||(o[2]=a=>{s(a.oldIndex),i(e).setDisableHover(!0)}),onEnd:o[3]||(o[3]=a=>_()),onAdd:o[4]||(o[4]=a=>{s(a.newIndex),S()})}),{item:J(({element:a,index:d})=>[x("div",{index:d,onClick:G(t=>i(e).setCheckedNode(a),["stop"]),onMouseover:G(t=>i(e).setHoverNode(a),["stop"]),onMouseout:o[0]||(o[0]=G(t=>i(e).setHoverNode(null),["stop"]))},[U(pe,{schema:a},null,8,["schema"])],40,Me)]),_:1},16,["modelValue"]))}}),pe=M({name:"ENodeItem",__name:"nodeItem",props:{schema:{}},setup(E){const y=E;return(m,e)=>{var c;const p=fe("ENodeItem");return["row","tabs"].includes((c=y.schema)==null?void 0:c.type)?(B(),H(i(se),{key:0,record:y.schema},{"edit-node":J(()=>[(B(!0),q(de,null,ge(y.schema.children,s=>(B(),H(p,{key:s.id,schema:s},null,8,["schema"]))),128))]),_:1},8,["record"])):(B(),H(i(se),{key:1,record:y.schema},{"edit-node":J(()=>[y.schema.children?(B(),H(je,{key:0,schemas:y.schema.children,"onUpdate:schemas":e[0]||(e[0]=s=>y.schema.children=s)},null,8,["schemas"])):xe("",!0)]),_:1},8,["record"]))}}}),Le={class:"edit-toolbar flex items-center justify-end text-gray-500 px-4"},Pe=x("span",{class:"icon iconfont"},"\uE60B",-1),ze=[Pe],He=x("span",{class:"icon iconfont"},"\uE60C",-1),Oe={class:"pr-8px w-82px cursor-pointer"},qe={class:"w-90px cursor-pointer"},Ae=M({__name:"toolbar",setup(E){const y=O.getComponent("slider"),m=O.getComponent("select"),{canvasScale:e}=ve(),c=V("pageSchema"),p=T(null),s=F({get(){return`${(e.value*100).toFixed(0)}%`},set(d){e.value=Number(d)}}),_=[{label:"60%",value:"0.6"},{label:"80%",value:"0.8"},{label:"100%",value:"1.0"},{label:"120%",value:"1.2"},{label:"140%",value:"1.4"}];function S(d="demo.json"){let t="data:text/json;charset=utf-8,";t+=JSON.stringify(c,null,2);var h=encodeURI(t),$=document.createElement("a");$.setAttribute("href",h),$.setAttribute("download",d),$.click()}function C(){var d;(d=p.value)==null||d.click()}function o(d){var t;const h=(t=d.target.files)==null?void 0:t[0];if(!h)return;d.target.value=null;const $=new FileReader;$.readAsText(h),$.onload=u=>{var n;a((n=u.target)==null?void 0:n.result)}}function a(d){try{const t=JSON.parse(d!=null?d:"");De(c,t)}catch(t){console.error(t)}}return(d,t)=>(B(),q("div",Le,[x("div",{title:"\u5BFC\u51FA",class:"pr-16px cursor-pointer",onClick:t[0]||(t[0]=h=>S("demo.json"))},ze),x("div",{title:"\u5BFC\u5165",class:"pr-16px cursor-pointer",onClick:t[1]||(t[1]=h=>C())},[He,K(x("input",{type:"file",ref_key:"fileRef",ref:p,onChange:o},null,544),[[X,!1]])]),x("div",Oe,[U(i(m),{value:s.value,"onUpdate:value":t[2]||(t[2]=h=>s.value=h),modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=h=>s.value=h),options:_,size:"small"},null,8,["value","modelValue"])]),x("div",qe,[U(i(y),{min:.6,max:1.4,step:.01,tooltip:!1,value:i(e),"onUpdate:value":t[4]||(t[4]=h=>oe(e)?e.value=h:null),modelValue:i(e),"onUpdate:modelValue":t[5]||(t[5]=h=>oe(e)?e.value=h:null)},null,8,["value","modelValue"])])]))}}),We={class:"h-full flex flex-col relative"},Je=["draggable"],Qe=M({__name:"editScreenContainer",props:{rootSchema:{}},setup(E){const y=E,m=T(null),e=T(null),{pressSpace:c}=ke(),{handleElementDragStart:p,handleElementDrag:s,handleElementDragEnd:_}=Ce(m),{width:S,height:C}=we(m),{canvasScale:o,handleZoom:a}=Se(e),d=T({}),t=F(()=>{var L,I;var u,n;const R=parseFloat((L=(u=y.rootSchema.componentProps.style)==null?void 0:u.width)!=null?L:1320),j=parseFloat((I=(n=y.rootSchema.componentProps.style)==null?void 0:n.height)!=null?I:800);return{width:R,height:j}});_e(S,()=>{h(),$()}),W(()=>y.rootSchema.componentProps.style.width,h);function h(){let u=t.value.width,n=t.value.height;(Number.isNaN(u)||u<S.value)&&(u=S.value),(Number.isNaN(n)||u<C.value)&&(n=C.value),d.value={width:S.value+u+"px",height:C.value+n+"px"}}function $(){Ne(()=>{let u=t.value.width,n=t.value.height;(Number.isNaN(u)||u<S.value)&&(u=S.value),(Number.isNaN(n)||u<C.value)&&(n=C.value);const R=n/2,j=u/2;m.value.scrollTo(j,R)})}return Q(m,([{contentRect:u}])=>{const n=(u.width-20)/t.value.width;n<1.2&&(o.value=n),h(),$()}),ce(()=>{Q(m,([{contentRect:u}])=>{const n=(u.width-20)/t.value.width;n<1.2?o.value=n:o.value=1.2,h(),$()})}),(u,n)=>(B(),q("div",We,[U(Ae),x("div",{ref_key:"editScreenContainerRef",ref:m,class:Y(["flex-1 overflow-auto epic-edit-screen-container",{"cursor-grab":i(c)}]),draggable:i(c),onWheel:n[0]||(n[0]=(...R)=>i(a)&&i(a)(...R)),onDragstart:n[1]||(n[1]=(...R)=>i(p)&&i(p)(...R)),onDragend:n[2]||(n[2]=(...R)=>i(_)&&i(_)(...R)),onDrag:n[3]||(n[3]=(...R)=>i(s)&&i(s)(...R))},[x("div",{id:"canvasContainer",class:"flex items-center justify-center",style:re(d.value)},[x("div",{ref_key:"draggableElRef",ref:e,class:"transition-all"},[x("div",{class:Y({"pointer-events-none":i(c)})},[ye(u.$slots,"default")],2)],512)],4)],42,Je)]))}}),Ze={class:"epic-edit-canvas"},et=M({__name:"index",setup(E){const y=V("pageSchema"),m=F(()=>y.schemas[0]),e=F(()=>{var s,_;var c,p;return{width:(s=(c=m.value.componentProps.style)==null?void 0:c.width)!=null?s:"1320px",height:(_=(p=m.value.componentProps.style)==null?void 0:p.height)!=null?_:"800px"}});return(c,p)=>(B(),q("section",Ze,[U(Qe,{"root-schema":m.value},{default:J(()=>[x("div",{class:"epic-edit-range rounded-md overflow-auto relative",style:re(e.value)},[U(pe,{schema:m.value},null,8,["schema"]),U(Fe)],4)]),_:1},8,["root-schema"])]))}});export{et as default};