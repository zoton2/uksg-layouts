import{s as pt,u as te,a as ht,n as yt,d as G,r as _t,i as se,c as H,h as Ze,p as _e,b as gt,w as vt,e as Rt,f as ge,g as ze,o as q,j as Me,t as Ct,k as T,l as g,m as K,q as E,v as $t,F as Et,x as Pt,y as bt,z as zt}from"./vue.-sixQ7xP-Cmgzbjnp.js";import{C as xt}from"./CutOffBorderedElem-DAm-oHVi.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Q=typeof document<"u";function Je(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function St(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Je(e.default)}const z=Object.assign;function ve(e,t){const n={};for(const s in t){const o=t[s];n[s]=O(o)?o.map(e):e(o)}return n}const ne=()=>{},O=Array.isArray,et=/#/g,kt=/&/g,Ft=/\//g,wt=/=/g,Bt=/\?/g,tt=/\+/g,Tt=/%5B/g,At=/%5D/g,nt=/%5E/g,It=/%60/g,st=/%7B/g,Mt=/%7C/g,rt=/%7D/g,Ot=/%20/g;function xe(e){return encodeURI(""+e).replace(Mt,"|").replace(Tt,"[").replace(At,"]")}function Ht(e){return xe(e).replace(st,"{").replace(rt,"}").replace(nt,"^")}function Ee(e){return xe(e).replace(tt,"%2B").replace(Ot,"+").replace(et,"%23").replace(kt,"%26").replace(It,"`").replace(st,"{").replace(rt,"}").replace(nt,"^")}function Gt(e){return Ee(e).replace(wt,"%3D")}function Vt(e){return xe(e).replace(et,"%23").replace(Bt,"%3F")}function Nt(e){return e==null?"":Vt(e).replace(Ft,"%2F")}function re(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const jt=/\/$/,Lt=e=>e.replace(jt,"");function Re(e,t,n="/"){let s,o={},f="",h="";const m=t.indexOf("#");let l=t.indexOf("?");return m<l&&m>=0&&(l=-1),l>-1&&(s=t.slice(0,l),f=t.slice(l+1,m>-1?m:t.length),o=e(f)),m>-1&&(s=s||t.slice(0,m),h=t.slice(m,t.length)),s=Dt(s??t,n),{fullPath:s+(f&&"?")+f+h,path:s,query:o,hash:re(h)}}function qt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Wt(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&Y(t.matched[s],n.matched[o])&&ot(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ot(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Kt(e[n],t[n]))return!1;return!0}function Kt(e,t){return O(e)?Oe(e,t):O(t)?Oe(t,e):e===t}function Oe(e,t){return O(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Dt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let f=n.length-1,h,m;for(h=0;h<s.length;h++)if(m=s[h],m!==".")if(m==="..")f>1&&f--;else break;return n.slice(0,f).join("/")+"/"+s.slice(h).join("/")}const j={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var oe;(function(e){e.pop="pop",e.push="push"})(oe||(oe={}));var ie;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ie||(ie={}));const Ce="";function Ut(e){if(!e)if(Q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lt(e)}const Qt=/^[^#]+#/;function Yt(e,t){return e.replace(Qt,"#")+t}function Xt(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Zt=()=>({left:window.scrollX,top:window.scrollY});function Jt(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Xt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function He(e,t){return(history.state?history.state.position-t:-1)+e}const Pe=new Map;function en(e,t){Pe.set(e,t)}function tn(e){const t=Pe.get(e);return Pe.delete(e),t}function nn(e=""){let t=[],n=[Ce],s=0;e=Ut(e);function o(m){s++,s!==n.length&&n.splice(s),n.push(m)}function f(m,l,{direction:i,delta:p}){const a={direction:i,delta:p,type:oe.pop};for(const d of t)d(m,l,a)}const h={location:Ce,state:{},base:e,createHref:Yt.bind(null,e),replace(m){n.splice(s--,1),o(m)},push(m,l){o(m)},listen(m){return t.push(m),()=>{const l=t.indexOf(m);l>-1&&t.splice(l,1)}},destroy(){t=[],n=[Ce],s=0},go(m,l=!0){const i=this.location,p=m<0?ie.back:ie.forward;s=Math.max(0,Math.min(s+m,n.length-1)),l&&f(this.location,i,{direction:p,delta:m})}};return Object.defineProperty(h,"location",{enumerable:!0,get:()=>n[s]}),h}function sn(e){return typeof e=="string"||e&&typeof e=="object"}function at(e){return typeof e=="string"||typeof e=="symbol"}const lt=Symbol("");var Ge;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ge||(Ge={}));function X(e,t){return z(new Error,{type:e,[lt]:!0},t)}function V(e,t){return e instanceof Error&&lt in e&&(t==null||!!(e.type&t))}const Ve="[^/]+?",rn={sensitive:!1,strict:!1,start:!0,end:!0},on=/[.+*?^${}()[\]/\\]/g;function an(e,t){const n=z({},rn,t),s=[];let o=n.start?"^":"";const f=[];for(const i of e){const p=i.length?[]:[90];n.strict&&!i.length&&(o+="/");for(let a=0;a<i.length;a++){const d=i[a];let c=40+(n.sensitive?.25:0);if(d.type===0)a||(o+="/"),o+=d.value.replace(on,"\\$&"),c+=40;else if(d.type===1){const{value:x,repeatable:b,optional:w,regexp:S}=d;f.push({name:x,repeatable:b,optional:w});const C=S||Ve;if(C!==Ve){c+=10;try{new RegExp(`(${C})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${x}" (${C}): `+M.message)}}let $=b?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;a||($=w&&i.length<2?`(?:/${$})`:"/"+$),w&&($+="?"),o+=$,c+=20,w&&(c+=-8),b&&(c+=-20),C===".*"&&(c+=-50)}p.push(c)}s.push(p)}if(n.strict&&n.end){const i=s.length-1;s[i][s[i].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function m(i){const p=i.match(h),a={};if(!p)return null;for(let d=1;d<p.length;d++){const c=p[d]||"",x=f[d-1];a[x.name]=c&&x.repeatable?c.split("/"):c}return a}function l(i){let p="",a=!1;for(const d of e){(!a||!p.endsWith("/"))&&(p+="/"),a=!1;for(const c of d)if(c.type===0)p+=c.value;else if(c.type===1){const{value:x,repeatable:b,optional:w}=c,S=x in i?i[x]:"";if(O(S)&&!b)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const C=O(S)?S.join("/"):S;if(!C)if(w)d.length<2&&(p.endsWith("/")?p=p.slice(0,-1):a=!0);else throw new Error(`Missing required param "${x}"`);p+=C}}return p||"/"}return{re:h,score:s,keys:f,parse:m,stringify:l}}function ln(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function it(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const f=ln(s[n],o[n]);if(f)return f;n++}if(Math.abs(o.length-s.length)===1){if(Ne(s))return 1;if(Ne(o))return-1}return o.length-s.length}function Ne(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const cn={type:0,value:""},un=/[a-zA-Z0-9_]/;function fn(e){if(!e)return[[]];if(e==="/")return[[cn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(c){throw new Error(`ERR (${n})/"${i}": ${c}`)}let n=0,s=n;const o=[];let f;function h(){f&&o.push(f),f=[]}let m=0,l,i="",p="";function a(){i&&(n===0?f.push({type:0,value:i}):n===1||n===2||n===3?(f.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),f.push({type:1,value:i,regexp:p,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),i="")}function d(){i+=l}for(;m<e.length;){if(l=e[m++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(i&&a(),h()):l===":"?(a(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:un.test(l)?d():(a(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&m--);break;case 2:l===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+l:n=3:p+=l;break;case 3:a(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&m--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${i}"`),a(),h(),o}function dn(e,t,n){const s=an(fn(e.path),n),o=z(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function mn(e,t){const n=[],s=new Map;t=We({strict:!1,end:!0,sensitive:!1},t);function o(a){return s.get(a)}function f(a,d,c){const x=!c,b=Le(a);b.aliasOf=c&&c.record;const w=We(t,a),S=[b];if("alias"in a){const M=typeof a.alias=="string"?[a.alias]:a.alias;for(const W of M)S.push(Le(z({},b,{components:c?c.record.components:b.components,path:W,aliasOf:c?c.record:b})))}let C,$;for(const M of S){const{path:W}=M;if(d&&W[0]!=="/"){const N=d.record.path,I=N[N.length-1]==="/"?"":"/";M.path=d.record.path+(W&&I+W)}if(C=dn(M,d,w),c?c.alias.push(C):($=$||C,$!==C&&$.alias.push(C),x&&a.name&&!qe(C)&&h(a.name)),ct(C)&&l(C),b.children){const N=b.children;for(let I=0;I<N.length;I++)f(N[I],C,c&&c.children[I])}c=c||C}return $?()=>{h($)}:ne}function h(a){if(at(a)){const d=s.get(a);d&&(s.delete(a),n.splice(n.indexOf(d),1),d.children.forEach(h),d.alias.forEach(h))}else{const d=n.indexOf(a);d>-1&&(n.splice(d,1),a.record.name&&s.delete(a.record.name),a.children.forEach(h),a.alias.forEach(h))}}function m(){return n}function l(a){const d=yn(a,n);n.splice(d,0,a),a.record.name&&!qe(a)&&s.set(a.record.name,a)}function i(a,d){let c,x={},b,w;if("name"in a&&a.name){if(c=s.get(a.name),!c)throw X(1,{location:a});w=c.record.name,x=z(je(d.params,c.keys.filter($=>!$.optional).concat(c.parent?c.parent.keys.filter($=>$.optional):[]).map($=>$.name)),a.params&&je(a.params,c.keys.map($=>$.name))),b=c.stringify(x)}else if(a.path!=null)b=a.path,c=n.find($=>$.re.test(b)),c&&(x=c.parse(b),w=c.record.name);else{if(c=d.name?s.get(d.name):n.find($=>$.re.test(d.path)),!c)throw X(1,{location:a,currentLocation:d});w=c.record.name,x=z({},d.params,a.params),b=c.stringify(x)}const S=[];let C=c;for(;C;)S.unshift(C.record),C=C.parent;return{name:w,path:b,params:x,matched:S,meta:hn(S)}}e.forEach(a=>f(a));function p(){n.length=0,s.clear()}return{addRoute:f,resolve:i,removeRoute:h,clearRoutes:p,getRoutes:m,getRecordMatcher:o}}function je(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Le(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:pn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function pn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function qe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function hn(e){return e.reduce((t,n)=>z(t,n.meta),{})}function We(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function yn(e,t){let n=0,s=t.length;for(;n!==s;){const f=n+s>>1;it(e,t[f])<0?s=f:n=f+1}const o=_n(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function _n(e){let t=e;for(;t=t.parent;)if(ct(t)&&it(e,t)===0)return t}function ct({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function gn(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const f=s[o].replace(tt," "),h=f.indexOf("="),m=re(h<0?f:f.slice(0,h)),l=h<0?null:re(f.slice(h+1));if(m in t){let i=t[m];O(i)||(i=t[m]=[i]),i.push(l)}else t[m]=l}return t}function Ke(e){let t="";for(let n in e){const s=e[n];if(n=Gt(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(O(s)?s.map(f=>f&&Ee(f)):[s&&Ee(s)]).forEach(f=>{f!==void 0&&(t+=(t.length?"&":"")+n,f!=null&&(t+="="+f))})}return t}function vn(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=O(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const Rn=Symbol(""),De=Symbol(""),Se=Symbol(""),ut=Symbol(""),be=Symbol("");function ee(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function L(e,t,n,s,o,f=h=>h()){const h=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((m,l)=>{const i=d=>{d===!1?l(X(4,{from:n,to:t})):d instanceof Error?l(d):sn(d)?l(X(2,{from:t,to:d})):(h&&s.enterCallbacks[o]===h&&typeof d=="function"&&h.push(d),m())},p=f(()=>e.call(s&&s.instances[o],t,n,i));let a=Promise.resolve(p);e.length<3&&(a=a.then(i)),a.catch(d=>l(d))})}function $e(e,t,n,s,o=f=>f()){const f=[];for(const h of e)for(const m in h.components){let l=h.components[m];if(!(t!=="beforeRouteEnter"&&!h.instances[m]))if(Je(l)){const p=(l.__vccOpts||l)[t];p&&f.push(L(p,n,s,h,m,o))}else{let i=l();f.push(()=>i.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${m}" at "${h.path}"`);const a=St(p)?p.default:p;h.mods[m]=p,h.components[m]=a;const c=(a.__vccOpts||a)[t];return c&&L(c,n,s,h,m,o)()}))}}return f}function Ue(e){const t=se(Se),n=se(ut),s=H(()=>{const l=te(e.to);return t.resolve(l)}),o=H(()=>{const{matched:l}=s.value,{length:i}=l,p=l[i-1],a=n.matched;if(!p||!a.length)return-1;const d=a.findIndex(Y.bind(null,p));if(d>-1)return d;const c=Qe(l[i-2]);return i>1&&Qe(p)===c&&a[a.length-1].path!==c?a.findIndex(Y.bind(null,l[i-2])):d}),f=H(()=>o.value>-1&&bn(n.params,s.value.params)),h=H(()=>o.value>-1&&o.value===n.matched.length-1&&ot(n.params,s.value.params));function m(l={}){if(Pn(l)){const i=t[te(e.replace)?"replace":"push"](te(e.to)).catch(ne);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>i),i}return Promise.resolve()}return{route:s,href:H(()=>s.value.href),isActive:f,isExactActive:h,navigate:m}}function Cn(e){return e.length===1?e[0]:e}const $n=G({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ue,setup(e,{slots:t}){const n=_t(Ue(e)),{options:s}=se(Se),o=H(()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const f=t.default&&Cn(t.default(n));return e.custom?f:Ze("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},f)}}}),En=$n;function Pn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function bn(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!O(o)||o.length!==s.length||s.some((f,h)=>f!==o[h]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>e??t??n,zn=G({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=se(be),o=H(()=>e.route||s.value),f=se(De,0),h=H(()=>{let i=te(f);const{matched:p}=o.value;let a;for(;(a=p[i])&&!a.components;)i++;return i}),m=H(()=>o.value.matched[h.value]);_e(De,H(()=>h.value+1)),_e(Rn,m),_e(be,o);const l=gt();return vt(()=>[l.value,m.value,e.name],([i,p,a],[d,c,x])=>{p&&(p.instances[a]=i,c&&c!==p&&i&&i===d&&(p.leaveGuards.size||(p.leaveGuards=c.leaveGuards),p.updateGuards.size||(p.updateGuards=c.updateGuards))),i&&p&&(!c||!Y(p,c)||!d)&&(p.enterCallbacks[a]||[]).forEach(b=>b(i))},{flush:"post"}),()=>{const i=o.value,p=e.name,a=m.value,d=a&&a.components[p];if(!d)return Xe(n.default,{Component:d,route:i});const c=a.props[p],x=c?c===!0?i.params:typeof c=="function"?c(i):c:null,w=Ze(d,z({},x,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(a.instances[p]=null)},ref:l}));return Xe(n.default,{Component:w,route:i})||w}}});function Xe(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const xn=zn;function Sn(e){const t=mn(e.routes,e),n=e.parseQuery||gn,s=e.stringifyQuery||Ke,o=e.history,f=ee(),h=ee(),m=ee(),l=pt(j);let i=j;Q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=ve.bind(null,r=>""+r),a=ve.bind(null,Nt),d=ve.bind(null,re);function c(r,y){let u,_;return at(r)?(u=t.getRecordMatcher(r),_=y):_=r,t.addRoute(_,u)}function x(r){const y=t.getRecordMatcher(r);y&&t.removeRoute(y)}function b(){return t.getRoutes().map(r=>r.record)}function w(r){return!!t.getRecordMatcher(r)}function S(r,y){if(y=z({},y||l.value),typeof r=="string"){const v=Re(n,r,y.path),F=t.resolve({path:v.path},y),J=o.createHref(v.fullPath);return z(v,F,{params:d(F.params),hash:re(v.hash),redirectedFrom:void 0,href:J})}let u;if(r.path!=null)u=z({},r,{path:Re(n,r.path,y.path).path});else{const v=z({},r.params);for(const F in v)v[F]==null&&delete v[F];u=z({},r,{params:a(v)}),y.params=a(y.params)}const _=t.resolve(u,y),P=r.hash||"";_.params=p(d(_.params));const k=qt(s,z({},r,{hash:Ht(P),path:_.path})),R=o.createHref(k);return z({fullPath:k,hash:P,query:s===Ke?vn(r.query):r.query||{}},_,{redirectedFrom:void 0,href:R})}function C(r){return typeof r=="string"?Re(n,r,l.value.path):z({},r)}function $(r,y){if(i!==r)return X(8,{from:y,to:r})}function M(r){return I(r)}function W(r){return M(z(C(r),{replace:!0}))}function N(r){const y=r.matched[r.matched.length-1];if(y&&y.redirect){const{redirect:u}=y;let _=typeof u=="function"?u(r):u;return typeof _=="string"&&(_=_.includes("?")||_.includes("#")?_=C(_):{path:_},_.params={}),z({query:r.query,hash:r.hash,params:_.path!=null?{}:r.params},_)}}function I(r,y){const u=i=S(r),_=l.value,P=r.state,k=r.force,R=r.replace===!0,v=N(u);if(v)return I(z(C(v),{state:typeof v=="object"?z({},P,v.state):P,force:k,replace:R}),y||u);const F=u;F.redirectedFrom=y;let J;return!k&&Wt(s,_,u)&&(J=X(16,{to:F,from:_}),Ae(_,_,!0,!1)),(J?Promise.resolve(J):Fe(F,_)).catch(A=>V(A)?V(A,2)?A:pe(A):me(A,F,_)).then(A=>{if(A){if(V(A,2))return I(z({replace:R},C(A.to),{state:typeof A.to=="object"?z({},P,A.to.state):P,force:k}),y||F)}else A=Be(F,_,!0,R,P);return we(F,_,A),A})}function ft(r,y){const u=$(r,y);return u?Promise.reject(u):Promise.resolve()}function fe(r){const y=le.values().next().value;return y&&typeof y.runWithContext=="function"?y.runWithContext(r):r()}function Fe(r,y){let u;const[_,P,k]=kn(r,y);u=$e(_.reverse(),"beforeRouteLeave",r,y);for(const v of _)v.leaveGuards.forEach(F=>{u.push(L(F,r,y))});const R=ft.bind(null,r,y);return u.push(R),U(u).then(()=>{u=[];for(const v of f.list())u.push(L(v,r,y));return u.push(R),U(u)}).then(()=>{u=$e(P,"beforeRouteUpdate",r,y);for(const v of P)v.updateGuards.forEach(F=>{u.push(L(F,r,y))});return u.push(R),U(u)}).then(()=>{u=[];for(const v of k)if(v.beforeEnter)if(O(v.beforeEnter))for(const F of v.beforeEnter)u.push(L(F,r,y));else u.push(L(v.beforeEnter,r,y));return u.push(R),U(u)}).then(()=>(r.matched.forEach(v=>v.enterCallbacks={}),u=$e(k,"beforeRouteEnter",r,y,fe),u.push(R),U(u))).then(()=>{u=[];for(const v of h.list())u.push(L(v,r,y));return u.push(R),U(u)}).catch(v=>V(v,8)?v:Promise.reject(v))}function we(r,y,u){m.list().forEach(_=>fe(()=>_(r,y,u)))}function Be(r,y,u,_,P){const k=$(r,y);if(k)return k;const R=y===j,v=Q?history.state:{};u&&(_||R?o.replace(r.fullPath,z({scroll:R&&v&&v.scroll},P)):o.push(r.fullPath,P)),l.value=r,Ae(r,y,u,R),pe()}let Z;function dt(){Z||(Z=o.listen((r,y,u)=>{if(!Ie.listening)return;const _=S(r),P=N(_);if(P){I(z(P,{replace:!0,force:!0}),_).catch(ne);return}i=_;const k=l.value;Q&&en(He(k.fullPath,u.delta),Zt()),Fe(_,k).catch(R=>V(R,12)?R:V(R,2)?(I(z(C(R.to),{force:!0}),_).then(v=>{V(v,20)&&!u.delta&&u.type===oe.pop&&o.go(-1,!1)}).catch(ne),Promise.reject()):(u.delta&&o.go(-u.delta,!1),me(R,_,k))).then(R=>{R=R||Be(_,k,!1),R&&(u.delta&&!V(R,8)?o.go(-u.delta,!1):u.type===oe.pop&&V(R,20)&&o.go(-1,!1)),we(_,k,R)}).catch(ne)}))}let de=ee(),Te=ee(),ae;function me(r,y,u){pe(r);const _=Te.list();return _.length?_.forEach(P=>P(r,y,u)):console.error(r),Promise.reject(r)}function mt(){return ae&&l.value!==j?Promise.resolve():new Promise((r,y)=>{de.add([r,y])})}function pe(r){return ae||(ae=!r,dt(),de.list().forEach(([y,u])=>r?u(r):y()),de.reset()),r}function Ae(r,y,u,_){const{scrollBehavior:P}=e;if(!Q||!P)return Promise.resolve();const k=!u&&tn(He(r.fullPath,0))||(_||!u)&&history.state&&history.state.scroll||null;return yt().then(()=>P(r,y,k)).then(R=>R&&Jt(R)).catch(R=>me(R,r,y))}const he=r=>o.go(r);let ye;const le=new Set,Ie={currentRoute:l,listening:!0,addRoute:c,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:w,getRoutes:b,resolve:S,options:e,push:M,replace:W,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:f.add,beforeResolve:h.add,afterEach:m.add,onError:Te.add,isReady:mt,install(r){const y=this;r.component("RouterLink",En),r.component("RouterView",xn),r.config.globalProperties.$router=y,Object.defineProperty(r.config.globalProperties,"$route",{enumerable:!0,get:()=>te(l)}),Q&&!ye&&l.value===j&&(ye=!0,M(o.location).catch(P=>{}));const u={};for(const P in j)Object.defineProperty(u,P,{get:()=>l.value[P],enumerable:!0});r.provide(Se,y),r.provide(ut,ht(u)),r.provide(be,l);const _=r.unmount;le.add(r),r.unmount=function(){le.delete(r),le.size<1&&(i=j,Z&&Z(),Z=null,l.value=j,ye=!1,ae=!1),_()}}};function U(r){return r.reduce((y,u)=>y.then(()=>fe(u)),Promise.resolve())}return Ie}function kn(e,t){const n=[],s=[],o=[],f=Math.max(t.matched.length,e.matched.length);for(let h=0;h<f;h++){const m=t.matched[h];m&&(e.matched.find(i=>Y(i,m))?s.push(m):n.push(m));const l=e.matched[h];l&&(t.matched.find(i=>Y(i,l))||o.push(l))}return[n,s,o]}const Fn=G({__name:"ParticipantInfo",props:{headerColour:{},headerText:{default:"Runner"},headerFontSize:{default:"20px"},headerWidth:{},nameFontSize:{default:"26px"},cutEdgeSize:{default:"15px"}},setup(e){return ze(t=>({d64e6e2e:t.nameFontSize})),(t,n)=>(q(),Rt(xt,{class:"Fixed","header-colour":t.headerColour??"linear-gradient(33deg, #1b6ebb 0%, #348bd2 100%)","header-font-size":t.headerFontSize,"header-width":t.headerWidth,"cut-edge-size":t.cutEdgeSize},{header:ge(()=>[Me(Ct(t.headerText),1)]),content:ge(()=>[T("span",{class:g(t.$style.Content)},"RunnerName",2)]),subtitle:ge(()=>n[0]||(n[0]=[Me("they/them")])),_:1},8,["header-colour","header-font-size","header-width","cut-edge-size"]))}}),wn="_Content_1newm_1",Bn={Content:wn},Tn={$style:Bn},B=D(Fn,[["__cssModules",Tn]]),An={class:"Fixed"},In=G({__name:"RunInfo",props:{nameFontSize:{default:"40px"},subtitleFontSize:{default:"24px"},flipped:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1}},setup(e){return ze(t=>({"5c30bb06":t.nameFontSize,"02758213":t.subtitleFontSize})),(t,n)=>(q(),K("div",An,[T("div",{class:g({[t.$style.Border]:!0,[t.$style.BorderFlipped]:t.flipped})},null,2),T("div",{class:g(["FlexColumn",{[t.$style.Inner]:!0,[t.$style.InnerFlipped]:t.flipped,[t.$style.InnerHorizontal]:t.horizontal}])},[T("div",{class:g(t.$style.GameName)},"VideoGameNameHere",2),T("div",{class:g({[t.$style.Subtitle]:!0,[t.$style.SubtitleHorizontal]:t.horizontal})}," Category | Console, 1999 ",2)],2)]))}}),Mn="_Border_iyyns_2",On="_BorderFlipped_iyyns_11",Hn="_Inner_iyyns_16",Gn="_InnerFlipped_iyyns_27",Vn="_InnerHorizontal_iyyns_32",Nn="_GameName_iyyns_38",jn="_Subtitle_iyyns_43",Ln="_SubtitleHorizontal_iyyns_49",qn={Border:Mn,BorderFlipped:On,Inner:Hn,InnerFlipped:Gn,InnerHorizontal:Vn,GameName:Nn,Subtitle:jn,SubtitleHorizontal:Ln},Wn={$style:qn},ce=D(In,[["__cssModules",Wn]]),Kn=G({__name:"TimerElem",props:{vertical:{type:Boolean,default:!1},estimateSize:{default:"16px"},timerSize:{default:"60px"}},setup(e){return ze(t=>({cc9df1f6:t.estimateSize,"763188aa":t.timerSize})),(t,n)=>(q(),K("div",{class:g(["Fixed Flex",{[t.$style.Wrapper]:!0,[t.$style.WrapperVertical]:t.vertical}])},[T("div",{class:g(["Flex",{[t.$style.Estimate]:!0,[t.$style.EstimateVertical]:t.vertical}])}," EST: 00:00:00 ",2),T("div",{class:g({[t.$style.Timer]:!0,[t.$style.TimerVertical]:t.vertical})}," 00:00:00 ",2)],2))}}),Dn="_Wrapper_1eik0_1",Un="_WrapperVertical_1eik0_5",Qn="_Estimate_1eik0_10",Yn="_EstimateVertical_1eik0_18",Xn="_Timer_1eik0_24",Zn="_TimerVertical_1eik0_30",Jn={Wrapper:Dn,WrapperVertical:Un,Estimate:Qn,EstimateVertical:Yn,Timer:Xn,TimerVertical:Zn},es={$style:Jn},ue=D(Kn,[["__cssModules",es]]),ts=G({__name:"16x9-1p",setup(e){return(t,n)=>(q(),K("div",null,[T("div",{class:g(["Fixed Capture BorderRight BorderBottom",t.$style.CameraFeed])},null,2),E(B,{class:g(t.$style.Player),"header-font-size":"18px"},null,8,["class"]),E(B,{class:g(t.$style.Host),"header-colour":"#0c3f6b","header-text":"Host","header-font-size":"14px","header-width":"66px","name-font-size":"20px","cut-edge-size":"8px"},null,8,["class"]),E(B,{class:g(t.$style.Comm1),"header-colour":"#055255","header-text":"Comm","header-font-size":"14px","header-width":"66px","name-font-size":"20px","cut-edge-size":"8px"},null,8,["class"]),E(B,{class:g(t.$style.Comm2),"header-colour":"#055255","header-text":"Comm","header-font-size":"14px","header-width":"66px","name-font-size":"20px","cut-edge-size":"8px"},null,8,["class"]),T("div",{class:g(["Fixed Capture BorderLeft BorderBottom",t.$style.GameFeed])},null,2),E(ue,{class:g(["BorderLeft BorderTop",t.$style.Timer]),vertical:"","estimate-size":"22px","timer-size":"80px"},null,8,["class"]),E(ce,{class:g(t.$style.RunInfo)},null,8,["class"])]))}}),ns="_CameraFeed_1yyyv_1",ss="_Player_1yyyv_8",rs="_Host_1yyyv_15",os="_Comm1_1yyyv_22",as="_Comm2_1yyyv_29",ls="_GameFeed_1yyyv_36",is="_Timer_1yyyv_43",cs="_RunInfo_1yyyv_50",us={CameraFeed:ns,Player:ss,Host:rs,Comm1:os,Comm2:as,GameFeed:ls,Timer:is,RunInfo:cs},fs={$style:us},ds=D(ts,[["__cssModules",fs]]),ms=G({__name:"16x9-2p",setup(e){return(t,n)=>(q(),K("div",null,[E(ce,{class:g(t.$style.RunInfo),flipped:"","subtitle-font-size":"22px"},null,8,["class"]),E(ue,{class:g(["BorderBottom",t.$style.Timer]),"estimate-size":"24px","timer-size":"80px"},null,8,["class"]),T("div",{class:g(["Fixed Capture BorderTop BorderRight BorderBottom",t.$style.GameFeed1])},null,2),T("div",{class:g(["Fixed Capture BorderTop BorderLeft BorderBottom",t.$style.GameFeed2])},null,2),T("div",{class:g(["Fixed Capture BorderTop BorderLeft BorderRight",t.$style.CameraFeed])},null,2),E(B,{class:g(t.$style.Player1),"name-font-size":"30px"},null,8,["class"]),E(B,{class:g(t.$style.Player2),"name-font-size":"30px"},null,8,["class"]),E(B,{class:g(t.$style.Host),"header-colour":"#0c3f6b","header-text":"Host","header-font-size":"14px","header-width":"66px","name-font-size":"22px","cut-edge-size":"8px"},null,8,["class"]),E(B,{class:g(t.$style.Comm1),"header-colour":"#055255","header-text":"Comm","header-font-size":"14px","header-width":"66px","name-font-size":"22px","cut-edge-size":"8px"},null,8,["class"]),E(B,{class:g(t.$style.Comm2),"header-colour":"#055255","header-text":"Comm","header-font-size":"14px","header-width":"66px","name-font-size":"22px","cut-edge-size":"8px"},null,8,["class"])]))}}),ps="_RunInfo_mm9sk_1",hs="_Timer_mm9sk_9",ys="_GameFeed1_mm9sk_16",_s="_GameFeed2_mm9sk_23",gs="_CameraFeed_mm9sk_30",vs="_Player1_mm9sk_37",Rs="_Player2_mm9sk_44",Cs="_Host_mm9sk_51",$s="_Comm1_mm9sk_58",Es="_Comm2_mm9sk_65",Ps={RunInfo:ps,Timer:hs,GameFeed1:ys,GameFeed2:_s,CameraFeed:gs,Player1:vs,Player2:Rs,Host:Cs,Comm1:$s,Comm2:Es},bs={$style:Ps},zs=D(ms,[["__cssModules",bs]]),xs=G({__name:"4x3-1p",setup(e){return(t,n)=>(q(),K("div",null,[E(ce,{class:g(t.$style.RunInfo)},null,8,["class"]),E(ue,{class:g(["BorderRight BorderBottom",t.$style.Timer])},null,8,["class"]),T("div",{class:g(["Fixed Capture BorderRight BorderTop BorderBottom",t.$style.CameraFeed])},null,2),E(B,{class:g(t.$style.Player)},null,8,["class"]),E(B,{class:g(t.$style.Host),"header-colour":"#0c3f6b","header-text":"Host","header-font-size":"14px","header-width":"66px","name-font-size":"20px","cut-edge-size":"8px"},null,8,["class"]),E(B,{class:g(t.$style.Comm1),"header-colour":"#055255","header-text":"Comm","header-font-size":"14px","header-width":"66px","name-font-size":"20px","cut-edge-size":"8px"},null,8,["class"]),E(B,{class:g(t.$style.Comm2),"header-colour":"#055255","header-text":"Comm","header-font-size":"14px","header-width":"66px","name-font-size":"20px","cut-edge-size":"8px"},null,8,["class"]),T("div",{class:g(["Fixed Capture BorderLeft",t.$style.GameFeed])},null,2)]))}}),Ss="_RunInfo_1j659_1",ks="_Timer_1j659_9",Fs="_CameraFeed_1j659_16",ws="_Player_1j659_23",Bs="_Host_1j659_30",Ts="_Comm1_1j659_37",As="_Comm2_1j659_44",Is="_GameFeed_1j659_51",Ms={RunInfo:Ss,Timer:ks,CameraFeed:Fs,Player:ws,Host:Bs,Comm1:Ts,Comm2:As,GameFeed:Is},Os={$style:Ms},Hs=D(xs,[["__cssModules",Os]]),Gs=G({__name:"4x3-2p",setup(e){return(t,n)=>(q(),K("div",null,[E(ce,{class:g(t.$style.RunInfo),"name-font-size":"36px","subtitle-font-size":"22px",flipped:"",horizontal:""},null,8,["class"]),E(ue,{class:g(["BorderBottom",t.$style.Timer]),"estimate-size":"22px"},null,8,["class"]),T("div",{class:g(["Fixed Capture BorderAll",t.$style.GameFeed1])},null,2),T("div",{class:g(["Fixed Capture BorderAll",t.$style.GameFeed2])},null,2),T("div",{class:g(["Fixed Capture BorderTop BorderLeft BorderRight",t.$style.CameraFeed])},null,2),E(B,{class:g(t.$style.Player1),"name-font-size":"30px"},null,8,["class"]),E(B,{class:g(t.$style.Player2),"name-font-size":"30px"},null,8,["class"]),E(B,{class:g(t.$style.Host),"header-colour":"#0c3f6b","header-text":"Host","header-font-size":"14px","header-width":"66px","name-font-size":"20px","cut-edge-size":"8px"},null,8,["class"]),E(B,{class:g(t.$style.Comm1),"header-colour":"#055255","header-text":"Comm","header-font-size":"14px","header-width":"66px","name-font-size":"20px","cut-edge-size":"8px"},null,8,["class"]),E(B,{class:g(t.$style.Comm2),"header-colour":"#055255","header-text":"Comm","header-font-size":"14px","header-width":"66px","name-font-size":"20px","cut-edge-size":"8px"},null,8,["class"])]))}}),Vs="_RunInfo_mt2b2_1",Ns="_Timer_mt2b2_9",js="_GameFeed1_mt2b2_16",Ls="_GameFeed2_mt2b2_23",qs="_CameraFeed_mt2b2_30",Ws="_Player1_mt2b2_37",Ks="_Player2_mt2b2_44",Ds="_Host_mt2b2_51",Us="_Comm1_mt2b2_58",Qs="_Comm2_mt2b2_65",Ys={RunInfo:Vs,Timer:Ns,GameFeed1:js,GameFeed2:Ls,CameraFeed:qs,Player1:Ws,Player2:Ks,Host:Ds,Comm1:Us,Comm2:Qs},Xs={$style:Ys},Zs=D(Gs,[["__cssModules",Xs]]),Js=G({__name:"main",setup(e){return $t({title:"game-layout"}),(t,n)=>{const s=Pt("RouterView");return q(),K(Et,null,[n[0]||(n[0]=T("div",{class:"Background"},null,-1)),E(s,{class:"Layout"})],64)}}}),er=Sn({history:nn(),routes:[{name:"4:3 1 Player",path:"/4x3-1p",component:Hs},{name:"4:3 2 Player",path:"/4x3-2p",component:Zs},{name:"16:9 1 Player",path:"/16x9-1p",component:ds},{path:"/:pathMatch(.*)*",redirect:"/4x3-1p"},{name:"16:9 2 Player",path:"/16x9-2p",component:zs}]}),ke=bt(Js),tr=zt();ke.use(tr);ke.use(er);ke.mount("#app");
