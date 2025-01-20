import{V as N,r as W,d as Z,b as ee,c as P,h,Q as te}from"./replicants-Bz7Vxgia.js";function z(e,i,n,o){return Object.defineProperty(e,i,{get:n,set:o,enumerable:!0}),e}function ie(e){return N(Z(e))}function Ie(e){return N(e)}const k=(e,i)=>{const n=W(e);for(const o in e)z(i,o,()=>n[o],t=>{n[o]=t});return i},c=k({isActive:!1,mode:!1},{__media:void 0,set(e){c.mode=e,e==="auto"?(c.__media===void 0&&(c.__media=window.matchMedia("(prefers-color-scheme: dark)"),c.__updateMedia=()=>{c.set("auto")},c.__media.addListener(c.__updateMedia)),e=c.__media.matches):c.__media!==void 0&&(c.__media.removeListener(c.__updateMedia),c.__media=void 0),c.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){c.set(c.isActive===!1)},install({$q:e,ssrContext:i}){const{dark:n}=e.config;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}}),b=ee(!1);let M;function ne(e,i){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:i[0]||""}}function oe(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const U="ontouchstart"in window||window.navigator.maxTouchPoints>0;function re(e){const i=e.toLowerCase(),n=oe(i),o=ne(i,n),t={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};o.browser&&(t[o.browser]=!0,t.version=o.version,t.versionNumber=parseInt(o.version,10)),o.platform&&(t[o.platform]=!0);const a=t.android||t.ios||t.bb||t.blackberry||t.ipad||t.iphone||t.ipod||t.kindle||t.playbook||t.silk||t["windows phone"];if(a===!0||i.indexOf("mobile")!==-1?t.mobile=!0:t.desktop=!0,t["windows phone"]&&(t.winphone=!0,delete t["windows phone"]),t.edga||t.edgios||t.edg?(t.edge=!0,o.browser="edge"):t.crios?(t.chrome=!0,o.browser="chrome"):t.fxios&&(t.firefox=!0,o.browser="firefox"),(t.ipod||t.ipad||t.iphone)&&(t.ios=!0),t.vivaldi&&(o.browser="vivaldi",t.vivaldi=!0),(t.chrome||t.opr||t.safari||t.vivaldi||t.mobile===!0&&t.ios!==!0&&a!==!0)&&(t.webkit=!0),t.opr&&(o.browser="opera",t.opera=!0),t.safari&&(t.blackberry||t.bb?(o.browser="blackberry",t.blackberry=!0):t.playbook?(o.browser="playbook",t.playbook=!0):t.android?(o.browser="android",t.android=!0):t.kindle?(o.browser="kindle",t.kindle=!0):t.silk&&(o.browser="silk",t.silk=!0)),t.name=o.browser,t.platform=o.platform,i.indexOf("electron")!==-1)t.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)t.bex=!0;else{if(window.Capacitor!==void 0?(t.capacitor=!0,t.nativeMobile=!0,t.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(t.cordova=!0,t.nativeMobile=!0,t.nativeMobileWrapper="cordova"),b.value===!0&&(M={is:{...t}}),U===!0&&t.mac===!0&&(t.desktop===!0&&t.safari===!0||t.nativeMobile===!0&&t.android!==!0&&t.ios!==!0&&t.ipad!==!0)){delete t.mac,delete t.desktop;const s=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:s,[s]:!0})}t.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete t.desktop,t.mobile=!0)}return t}const R=navigator.userAgent||navigator.vendor||window.opera,se={has:{touch:!1,webStorage:!1},within:{iframe:!1}},g={userAgent:R,is:re(R),has:{touch:U},within:{iframe:window.self!==window.top}},L={install(e){const{$q:i}=e;b.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(i.platform,g),b.value=!1}),i.platform=W(this)):i.platform=this}};{let e;z(g.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(L,g),b.value===!0&&(Object.assign(L,M,se),M=null)}const S={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(S,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function v(){}function Be(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function Te(e){e.stopPropagation()}function De(e){e.cancelable!==!1&&e.preventDefault()}function Oe(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function Ne(e,i,n){const o=`__q_${i}_evt`;e[o]=e[o]!==void 0?e[o].concat(n):n,n.forEach(t=>{t[0].addEventListener(t[1],e[t[2]],S[t[3]])})}function We(e,i){const n=`__q_${i}_evt`;e[n]!==void 0&&(e[n].forEach(o=>{o[0].removeEventListener(o[1],e[o[2]],S[o[3]])}),e[n]=void 0)}function ae(e,i=250,n){let o=null;function t(){const a=arguments,s=()=>{o=null,e.apply(this,a)};o!==null&&clearTimeout(o),o=setTimeout(s,i)}return t.cancel=()=>{o!==null&&clearTimeout(o)},t}const E=["sm","md","lg","xl"],{passive:j}=S,le=k({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:v,setDebounce:v,install({$q:e,onSSRHydrated:i}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,o=n||window,t=document.scrollingElement||document.documentElement,a=n===void 0||g.is.mobile===!0?()=>[Math.max(window.innerWidth,t.clientWidth),Math.max(window.innerHeight,t.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-t.clientWidth,n.height*n.scale+window.innerHeight-t.clientHeight],s=e.config.screen!==void 0&&e.config.screen.bodyClasses===!0;this.__update=f=>{const[l,p]=a();if(p!==this.height&&(this.height=p),l!==this.width)this.width=l;else if(f!==!0)return;let u=this.sizes;this.gt.xs=l>=u.sm,this.gt.sm=l>=u.md,this.gt.md=l>=u.lg,this.gt.lg=l>=u.xl,this.lt.sm=l<u.sm,this.lt.md=l<u.md,this.lt.lg=l<u.lg,this.lt.xl=l<u.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,u=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",u!==this.name&&(s===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${u}`)),this.name=u)};let r,m={},w=16;this.setSizes=f=>{E.forEach(l=>{f[l]!==void 0&&(m[l]=f[l])})},this.setDebounce=f=>{w=f};const d=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&E.forEach(l=>{this.sizes[l]=parseInt(f.getPropertyValue(`--q-size-${l}`),10)}),this.setSizes=l=>{E.forEach(p=>{l[p]&&(this.sizes[p]=l[p])}),this.__update(!0)},this.setDebounce=l=>{r!==void 0&&o.removeEventListener("resize",r,j),r=l>0?ae(this.__update,l):this.__update,o.addEventListener("resize",r,j)},this.setDebounce(w),Object.keys(m).length!==0?(this.setSizes(m),m=void 0):this.__update(),s===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};b.value===!0?i.push(d):d()}});function de(e,i,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof i!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,i)}let K=!1;function ce(e){K=e.isComposing===!0}function ue(e){return K===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function Ue(e,i){return ue(e)===!0?!1:[].concat(i).includes(e.keyCode)}function Q(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function fe({is:e,has:i,within:n},o){const t=[e.desktop===!0?"desktop":"mobile",`${i.touch===!1?"no-":""}touch`];if(e.mobile===!0){const a=Q(e);a!==void 0&&t.push("platform-"+a)}if(e.nativeMobile===!0){const a=e.nativeMobileWrapper;t.push(a),t.push("native-mobile"),e.ios===!0&&(o[a]===void 0||o[a].iosStatusBarPadding!==!1)&&t.push("q-ios-padding")}else e.electron===!0?t.push("electron"):e.bex===!0&&t.push("bex");return n.iframe===!0&&t.push("within-iframe"),t}function he(){const{is:e}=g,i=document.body.className,n=new Set(i.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const t=Q(e);t!==void 0&&n.add(`platform-${t}`)}}g.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),g.within.iframe===!0&&n.add("within-iframe");const o=Array.from(n).join(" ");i!==o&&(document.body.className=o)}function ge(e){for(const i in e)de(i,e[i])}const me={install(e){if(this.__installed!==!0){if(b.value===!0)he();else{const{$q:i}=e;i.config.brand!==void 0&&ge(i.config.brand);const n=fe(g,i.config);document.body.classList.add.apply(document.body.classList,n)}g.is.ios===!0&&document.body.addEventListener("touchstart",v),window.addEventListener("keydown",ce,!0)}}},V=()=>!0;function pe(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function _e(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function be(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return V;const i=["#/"];return Array.isArray(e.backButtonExit)===!0&&i.push(...e.backButtonExit.filter(pe).map(_e)),()=>i.includes(window.location.hash)}const we={__history:[],add:v,remove:v,install({$q:e}){if(this.__installed===!0)return;const{cordova:i,capacitor:n}=g.is;if(i!==!0&&n!==!0)return;const o=e.config[i===!0?"cordova":"capacitor"];if(o!==void 0&&o.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=s=>{s.condition===void 0&&(s.condition=V),this.__history.push(s)},this.remove=s=>{const r=this.__history.indexOf(s);r>=0&&this.__history.splice(r,1)};const t=be(Object.assign({backButtonExit:!0},o)),a=()=>{if(this.__history.length){const s=this.__history[this.__history.length-1];s.condition()===!0&&(this.__history.pop(),s.handler())}else t()===!0?navigator.app.exitApp():window.history.back()};i===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",a,!1)}):window.Capacitor.Plugins.App.addListener("backButton",a)}},F={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,i,n)=>e+"-"+i+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function $(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((i,n)=>n===0?i.toLowerCase():n>1||i.length<4?i.toUpperCase():i[0].toUpperCase()+i.slice(1).toLowerCase()).join("-")}const _=k({__qLang:{}},{getLocale:$,set(e=F,i){const n={...e,rtl:e.rtl===!0,getLocale:$};{if(n.set=_.set,_.__langConfig===void 0||_.__langConfig.noHtmlAttrs!==!0){const o=document.documentElement;o.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),o.setAttribute("lang",n.isoName)}Object.assign(_.__qLang,n)}},install({$q:e,lang:i,ssrContext:n}){e.lang=_.__qLang,_.__langConfig=e.config.lang,this.__installed===!0?i!==void 0&&this.set(i):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(o){return Reflect.ownKeys(o).filter(t=>t!=="set"&&t!=="getLocale")}}),this.set(i||F))}}),ve={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},x=k({iconMapFn:null,__qIconSet:{}},{set(e,i){const n={...e};n.set=x.set,Object.assign(x.__qIconSet,n)},install({$q:e,iconSet:i,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,z(e,"iconMapFn",()=>this.iconMapFn,o=>{this.iconMapFn=o}),this.__installed===!0?i!==void 0&&this.set(i):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(o){return Reflect.ownKeys(o).filter(t=>t!=="set")}}),this.set(i||ve))}}),ye="_q_",q={};let A=!1;function xe(){A=!0}function H(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}const I=[L,me,c,le,we,_,x];function B(e,i){i.forEach(n=>{n.install(e),n.__installed=!0})}function ke(e,i,n){e.config.globalProperties.$q=n.$q,e.provide(ye,n.$q),B(n,I),i.components!==void 0&&Object.values(i.components).forEach(o=>{H(o)===!0&&o.name!==void 0&&e.component(o.name,o)}),i.directives!==void 0&&Object.values(i.directives).forEach(o=>{H(o)===!0&&o.name!==void 0&&e.directive(o.name,o)}),i.plugins!==void 0&&B(n,Object.values(i.plugins).filter(o=>typeof o.install=="function"&&I.includes(o)===!1)),b.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(o=>{o()}),n.$q.onSSRHydrated=()=>{}})}const Se=function(e,i={}){const n={version:"2.17.6"};A===!1?(i.config!==void 0&&Object.assign(q,i.config),n.config={...q},xe()):n.config=i.config||{},ke(e,i,{parentApp:e,$q:n,lang:i.lang,iconSet:i.iconSet,onSSRHydrated:[]})},Ke={name:"Quasar",version:"2.17.6",install:Se,lang:_,iconSet:x},Ee={xs:18,sm:24,md:32,lg:38,xl:46},Ce={size:String};function Pe(e,i=Ee){return P(()=>e.size!==void 0?{fontSize:e.size in i?`${i[e.size]}px`:e.size}:null)}function Me(e,i){return e!==void 0&&e()||i}function y(e,i){return e!==void 0?i.concat(e()):i}const T="0 0 24 24",D=e=>e,C=e=>`ionicons ${e}`,J={"mdi-":e=>`mdi ${e}`,"icon-":D,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":C,"ion-ios":C,"ion-logo":C,"iconfont ":D,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},G={o_:"-outlined",r_:"-round",s_:"-sharp"},X={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Le=new RegExp("^("+Object.keys(J).join("|")+")"),ze=new RegExp("^("+Object.keys(G).join("|")+")"),O=new RegExp("^("+Object.keys(X).join("|")+")"),Re=/^[Mm]\s?[-+]?\.?\d/,je=/^img:/,Fe=/^svguse:/,$e=/^ion-/,qe=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,Qe=ie({name:"QIcon",props:{...Ce,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:i}){const{proxy:{$q:n}}=te(),o=Pe(e),t=P(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),a=P(()=>{let s,r=e.name;if(r==="none"||!r)return{none:!0};if(n.iconMapFn!==null){const d=n.iconMapFn(r);if(d!==void 0)if(d.icon!==void 0){if(r=d.icon,r==="none"||!r)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(Re.test(r)===!0){const[d,f=T]=r.split("|");return{svg:!0,viewBox:f,nodes:d.split("&&").map(l=>{const[p,u,Y]=l.split("@@");return h("path",{style:u,d:p,transform:Y})})}}if(je.test(r)===!0)return{img:!0,src:r.substring(4)};if(Fe.test(r)===!0){const[d,f=T]=r.split("|");return{svguse:!0,src:d.substring(7),viewBox:f}}let m=" ";const w=r.match(Le);if(w!==null)s=J[w[1]](r);else if(qe.test(r)===!0)s=r;else if($e.test(r)===!0)s=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(O.test(r)===!0){s="notranslate material-symbols";const d=r.match(O);d!==null&&(r=r.substring(6),s+=X[d[1]]),m=r}else{s="notranslate material-icons";const d=r.match(ze);d!==null&&(r=r.substring(2),s+=G[d[1]]),m=r}return{cls:s,content:m}});return()=>{const s={class:t.value,style:o.value,"aria-hidden":"true",role:"presentation"};return a.value.none===!0?h(e.tag,s,Me(i.default)):a.value.img===!0?h(e.tag,s,y(i.default,[h("img",{src:a.value.src})])):a.value.svg===!0?h(e.tag,s,y(i.default,[h("svg",{viewBox:a.value.viewBox||"0 0 24 24"},a.value.nodes)])):a.value.svguse===!0?h(e.tag,s,y(i.default,[h("svg",{viewBox:a.value.viewBox},[h("use",{"xlink:href":a.value.src})])])):(a.value.cls!==void 0&&(s.class+=" "+a.value.cls),h(e.tag,s,y(i.default,[a.value.content])))}}});export{c as P,Qe as Q,Pe as a,Me as b,ie as c,Ke as d,Ee as e,Ie as f,Ue as g,y as h,H as i,Ne as j,We as k,Te as l,De as m,S as n,Be as p,Oe as s,Ce as u};
