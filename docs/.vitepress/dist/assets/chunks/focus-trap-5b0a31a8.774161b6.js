import{aa as g,a7 as Z,I as oe,p as ne}from"./index-b8b964c9.fce975b8.js";import{n as se}from"./isNil-8ef0e4b6.1ddc74dd.js";import{k as I,l as x,r as k,e as re,p as ae,w as R,u as h,M as j,g as ue}from"../app.88701f9d.js";let w;const ke=e=>{var o;if(!g)return 0;if(w!==void 0)return w;const t=document.createElement("div");t.className=`${e}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const s=t.offsetWidth;t.style.overflow="scroll";const u=document.createElement("div");u.style.width="100%",t.appendChild(u);const d=u.offsetWidth;return(o=t.parentNode)==null||o.removeChild(t),w=s-d,w};function Ce(e,o){if(!g)return;if(!o){e.scrollTop=0;return}const t=[];let s=o.offsetParent;for(;s!==null&&e!==s&&e.contains(s);)t.push(s),s=s.offsetParent;const u=o.offsetTop+t.reduce((m,S)=>m+S.offsetTop,0),d=u+o.offsetHeight,i=e.scrollTop,p=i+e.clientHeight;u<i?e.scrollTop=u:d>p&&(e.scrollTop=d-e.clientHeight)}let v=[];const q=e=>{const o=e;o.key===Z.esc&&v.forEach(t=>t(o))},ce=e=>{I(()=>{v.length===0&&document.addEventListener("keydown",q),g&&v.push(e)}),x(()=>{v=v.filter(o=>o!==e),v.length===0&&g&&document.removeEventListener("keydown",q)})},K="focus-trap.focus-after-trapped",_="focus-trap.focus-after-released",de="focus-trap.focusout-prevented",z={cancelable:!0,bubbles:!1},ie={cancelable:!0,bubbles:!1},G="focusAfterTrapped",J="focusAfterReleased",le=Symbol("elFocusTrap"),H=k(),C=k(0),A=k(0);let T=0;const $=e=>{const o=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const u=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||u?NodeFilter.FILTER_SKIP:s.tabIndex>=0||s===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)o.push(t.currentNode);return o},Q=(e,o)=>{for(const t of e)if(!fe(t,o))return t},fe=(e,o)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(o&&e===o)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},pe=e=>{const o=$(e),t=Q(o,e),s=Q(o.reverse(),e);return[t,s]},ve=e=>e instanceof HTMLInputElement&&"select"in e,f=(e,o)=>{if(e&&e.focus){const t=document.activeElement;e.focus({preventScroll:!0}),A.value=window.performance.now(),e!==t&&ve(e)&&o&&e.select()}};function V(e,o){const t=[...e],s=e.indexOf(o);return s!==-1&&t.splice(s,1),t}const me=()=>{let e=[];return{push:o=>{const t=e[0];t&&o!==t&&t.pause(),e=V(e,o),e.unshift(o)},remove:o=>{var t,s;e=V(e,o),(s=(t=e[0])==null?void 0:t.resume)==null||s.call(t)}}},Ee=(e,o=!1)=>{const t=document.activeElement;for(const s of e)if(f(s,o),document.activeElement!==t)return},X=me(),ye=()=>C.value>A.value,L=()=>{H.value="pointer",C.value=window.performance.now()},Y=()=>{H.value="keyboard",C.value=window.performance.now()},he=()=>(I(()=>{T===0&&(document.addEventListener("mousedown",L),document.addEventListener("touchstart",L),document.addEventListener("keydown",Y)),T++}),x(()=>{T--,T<=0&&(document.removeEventListener("mousedown",L),document.removeEventListener("touchstart",L),document.removeEventListener("keydown",Y))}),{focusReason:H,lastUserFocusTimestamp:C,lastAutomatedFocusTimestamp:A}),b=e=>new CustomEvent(de,{...ie,detail:e}),we=re({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[G,J,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:o}){const t=k();let s,u;const{focusReason:d}=he();ce(n=>{e.trapped&&!i.paused&&o("release-requested",n)});const i={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},p=n=>{if(!e.loop&&!e.trapped||i.paused)return;const{key:r,altKey:c,ctrlKey:a,metaKey:E,currentTarget:ee,shiftKey:M}=n,{loop:U}=e,te=r===Z.tab&&!c&&!a&&!E,y=document.activeElement;if(te&&y){const N=ee,[F,P]=pe(N);if(F&&P){if(!M&&y===P){const l=b({focusReason:d.value});o("focusout-prevented",l),l.defaultPrevented||(n.preventDefault(),U&&f(F,!0))}else if(M&&[F,N].includes(y)){const l=b({focusReason:d.value});o("focusout-prevented",l),l.defaultPrevented||(n.preventDefault(),U&&f(P,!0))}}else if(y===N){const l=b({focusReason:d.value});o("focusout-prevented",l),l.defaultPrevented||n.preventDefault()}}};ae(le,{focusTrapRef:t,onKeydown:p}),R(()=>e.focusTrapEl,n=>{n&&(t.value=n)},{immediate:!0}),R([t],([n],[r])=>{n&&(n.addEventListener("keydown",p),n.addEventListener("focusin",B),n.addEventListener("focusout",O)),r&&(r.removeEventListener("keydown",p),r.removeEventListener("focusin",B),r.removeEventListener("focusout",O))});const m=n=>{o(G,n)},S=n=>o(J,n),B=n=>{const r=h(t);if(!r)return;const c=n.target,a=n.relatedTarget,E=c&&r.contains(c);e.trapped||a&&r.contains(a)||(s=a),E&&o("focusin",n),!i.paused&&e.trapped&&(E?u=c:f(u,!0))},O=n=>{const r=h(t);if(!(i.paused||!r))if(e.trapped){const c=n.relatedTarget;!se(c)&&!r.contains(c)&&setTimeout(()=>{if(!i.paused&&e.trapped){const a=b({focusReason:d.value});o("focusout-prevented",a),a.defaultPrevented||f(u,!0)}},0)}else{const c=n.target;c&&r.contains(c)||o("focusout",n)}};async function W(){await j();const n=h(t);if(n){X.push(i);const r=n.contains(document.activeElement)?s:document.activeElement;if(s=r,!n.contains(r)){const c=new Event(K,z);n.addEventListener(K,m),n.dispatchEvent(c),c.defaultPrevented||j(()=>{let a=e.focusStartEl;oe(a)||(f(a),document.activeElement!==a&&(a="first")),a==="first"&&Ee($(n),!0),(document.activeElement===r||a==="container")&&f(n)})}}}function D(){const n=h(t);if(n){n.removeEventListener(K,m);const r=new CustomEvent(_,{...z,detail:{focusReason:d.value}});n.addEventListener(_,S),n.dispatchEvent(r),!r.defaultPrevented&&(d.value=="keyboard"||!ye()||n.contains(document.activeElement))&&f(s!=null?s:document.body),n.removeEventListener(_,m),X.remove(i)}}return I(()=>{e.trapped&&W(),R(()=>e.trapped,n=>{n?W():D()})}),x(()=>{e.trapped&&D()}),{onKeydown:p}}});function Te(e,o,t,s,u,d){return ue(e.$slots,"default",{handleKeydown:e.onKeydown})}var Se=ne(we,[["render",Te],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{Ce as C,ke as S,ce as a,Se as g,le as l};