"use strict";var oe=($,W,R)=>new Promise((U,D)=>{var f=g=>{try{p(R.next(g))}catch(v){D(v)}},j=g=>{try{p(R.throw(g))}catch(v){D(v)}},p=g=>g.done?U(g.value):Promise.resolve(g.value).then(f,j);p((R=R.apply($,W)).next())});(self.webpackChunkwebpack_react_typescript_template=self.webpackChunkwebpack_react_typescript_template||[]).push([[472],{9655:($,W,R)=>{var U,D;R.d(W,{TH:()=>p.TH,cP:()=>ve,j3:()=>p.j3,lr:()=>Pe,pG:()=>_e,s0:()=>p.s0});var f=R(7294),j=R(3935),p=R(9250),g=R(2599);/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function Ne(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}const V="get",z="application/x-www-form-urlencoded";function B(e){return e!=null&&typeof e.tagName=="string"}function ie(e){return B(e)&&e.tagName.toLowerCase()==="button"}function se(e){return B(e)&&e.tagName.toLowerCase()==="form"}function le(e){return B(e)&&e.tagName.toLowerCase()==="input"}function ue(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ce(e,t){return e.button===0&&(!t||t==="_self")&&!ue(e)}function Y(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(a=>[n,a]):[[n,r]])},[]))}function fe(e,t){let n=Y(e);return t&&t.forEach((r,a)=>{n.has(a)||t.getAll(a).forEach(i=>{n.append(a,i)})}),n}let M=null;function de(){if(M===null)try{new FormData(document.createElement("form"),0),M=!1}catch(e){M=!0}return M}const me=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function G(e){return e!=null&&!me.has(e)?null:e}function he(e,t){let n,r,a,i,o;if(se(e)){let s=e.getAttribute("action");r=s?stripBasename(s,t):null,n=e.getAttribute("method")||V,a=G(e.getAttribute("enctype"))||z,i=new FormData(e)}else if(ie(e)||le(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||s.getAttribute("action");if(r=u?stripBasename(u,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||V,a=G(e.getAttribute("formenctype"))||G(s.getAttribute("enctype"))||z,i=new FormData(s,e),!de()){let{name:l,type:c,value:d}=e;if(c==="image"){let m=l?l+".":"";i.append(m+"x","0"),i.append(m+"y","0")}else l&&i.append(l,d)}}else{if(B(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=V,r=null,a=z,o=e}return i&&a==="text/plain"&&(o=i,i=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:i,body:o}}const De=null,ke=null,Ie=null;function Oe(e,t){return createRouter({basename:t==null?void 0:t.basename,future:v({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:createBrowserHistory({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Q(),routes:e,mapRouteProperties:UNSAFE_mapRouteProperties,window:t==null?void 0:t.window}).initialize()}function ve(e,t){return(0,g.p7)({basename:t==null?void 0:t.basename,future:v({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:(0,g.q_)({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Q(),routes:e,mapRouteProperties:p.us,window:t==null?void 0:t.window}).initialize()}function Q(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=v({},t,{errors:pe(t.errors)})),t}function pe(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new g.OF(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let i=window[a.__subType];if(typeof i=="function")try{let o=new i(a.message);o.stack="",n[r]=o}catch(o){}}if(n[r]==null){let i=new Error(a.message);i.stack="",n[r]=i}}else n[r]=a;return n}const Z=f.createContext({isTransitioning:!1}),q=f.createContext(new Map),Re="startTransition",P=(U||(U=R.t(f,2)))[Re],we="flushSync",ee=(D||(D=R.t(j,2)))[we],Se="useId",te=(U||(U=R.t(f,2)))[Se];function ye(e){P?P(e):e()}function k(e){ee?ee(e):e()}class ge{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function _e(e){let{fallbackElement:t,router:n,future:r}=e,[a,i]=f.useState(n.state),[o,s]=f.useState(),[u,l]=f.useState({isTransitioning:!1}),[c,d]=f.useState(),[m,S]=f.useState(),[_,L]=f.useState(),E=f.useRef(new Map),{v7_startTransition:N}=r||{},y=f.useCallback(h=>{N?ye(h):h()},[N]),w=f.useCallback((h,T)=>{let{deletedFetchers:b,unstable_flushSync:X,unstable_viewTransitionOpts:x}=T;b.forEach(F=>E.current.delete(F)),h.fetchers.forEach((F,Ae)=>{F.data!==void 0&&E.current.set(Ae,F.data)});let Ue=n.window==null||typeof n.window.document.startViewTransition!="function";if(!x||Ue){X?k(()=>i(h)):y(()=>i(h));return}if(X){k(()=>{m&&(c&&c.resolve(),m.skipTransition()),l({isTransitioning:!0,flushSync:!0,currentLocation:x.currentLocation,nextLocation:x.nextLocation})});let F=n.window.document.startViewTransition(()=>{k(()=>i(h))});F.finished.finally(()=>{k(()=>{d(void 0),S(void 0),s(void 0),l({isTransitioning:!1})})}),k(()=>S(F));return}m?(c&&c.resolve(),m.skipTransition(),L({state:h,currentLocation:x.currentLocation,nextLocation:x.nextLocation})):(s(h),l({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}))},[n.window,m,c,E,y]);f.useLayoutEffect(()=>n.subscribe(w),[n,w]),f.useEffect(()=>{u.isTransitioning&&!u.flushSync&&d(new ge)},[u]),f.useEffect(()=>{if(c&&o&&n.window){let h=o,T=c.promise,b=n.window.document.startViewTransition(()=>oe(this,null,function*(){y(()=>i(h)),yield T}));b.finished.finally(()=>{d(void 0),S(void 0),s(void 0),l({isTransitioning:!1})}),S(b)}},[y,o,c,n.window]),f.useEffect(()=>{c&&o&&a.location.key===o.location.key&&c.resolve()},[c,m,a.location,o]),f.useEffect(()=>{!u.isTransitioning&&_&&(s(_.state),l({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),L(void 0))},[u.isTransitioning,_]),f.useEffect(()=>{},[]);let C=f.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,T,b)=>n.navigate(h,{state:T,preventScrollReset:b==null?void 0:b.preventScrollReset}),replace:(h,T,b)=>n.navigate(h,{replace:!0,state:T,preventScrollReset:b==null?void 0:b.preventScrollReset})}),[n]),O=n.basename||"/",re=f.useMemo(()=>({router:n,navigator:C,static:!1,basename:O}),[n,C,O]);return f.createElement(f.Fragment,null,f.createElement(p.w3.Provider,{value:re},f.createElement(p.FR.Provider,{value:a},f.createElement(q.Provider,{value:E.current},f.createElement(Z.Provider,{value:u},f.createElement(p.F0,{basename:O,location:a.location,navigationType:a.historyAction,navigator:C,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?f.createElement(be,{routes:n.routes,future:n.future,state:a}):t))))),null)}function be(e){let{routes:t,future:n,state:r}=e;return(0,p.DY)(t,void 0,r,n)}function Be(e){let{basename:t,children:n,future:r,window:a}=e,i=React.useRef();i.current==null&&(i.current=createBrowserHistory({window:a,v5Compat:!0}));let o=i.current,[s,u]=React.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},c=React.useCallback(d=>{l&&P?P(()=>u(d)):u(d)},[u,l]);return React.useLayoutEffect(()=>o.listen(c),[o,c]),React.createElement(Router,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}function Me(e){let{basename:t,children:n,future:r,window:a}=e,i=React.useRef();i.current==null&&(i.current=createHashHistory({window:a,v5Compat:!0}));let o=i.current,[s,u]=React.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},c=React.useCallback(d=>{l&&P?P(()=>u(d)):u(d)},[u,l]);return React.useLayoutEffect(()=>o.listen(c),[o,c]),React.createElement(Router,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}function Ke(e){let{basename:t,children:n,future:r,history:a}=e,[i,o]=React.useState({action:a.action,location:a.location}),{v7_startTransition:s}=r||{},u=React.useCallback(l=>{s&&P?P(()=>o(l)):o(l)},[o,s]);return React.useLayoutEffect(()=>a.listen(u),[a,u]),React.createElement(Router,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:a,future:r})}const He=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",We=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,je=null,Ve=null,Ee=null;function ze(e){let{getKey:t,storageKey:n}=e;return xe({getKey:t,storageKey:n}),null}var A;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(A||(A={}));var I;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(I||(I={}));function Ye(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function K(e){let t=React.useContext(UNSAFE_DataRouterContext);return t||UNSAFE_invariant(!1),t}function J(e){let t=React.useContext(UNSAFE_DataRouterStateContext);return t||UNSAFE_invariant(!1),t}function Ge(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,u=useNavigate(),l=useLocation(),c=useResolvedPath(e,{relative:o});return React.useCallback(d=>{if(ce(d,n)){d.preventDefault();let m=r!==void 0?r:createPath(l)===createPath(c);u(e,{replace:m,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:s})}},[l,u,c,r,a,n,e,i,o,s])}function Pe(e){let t=f.useRef(Y(e)),n=f.useRef(!1),r=(0,p.TH)(),a=f.useMemo(()=>fe(r.search,n.current?null:t.current),[r.search]),i=(0,p.s0)(),o=f.useCallback((s,u)=>{const l=Y(typeof s=="function"?s(a):s);n.current=!0,i("?"+l,u)},[i,a]);return[a,o]}function Le(){if(typeof document=="undefined")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}let Ce=0,ne=()=>"__"+String(++Ce)+"__";function Te(){let{router:e}=K(A.UseSubmit),{basename:t}=React.useContext(UNSAFE_NavigationContext),n=UNSAFE_useRouteId();return React.useCallback(function(r,a){a===void 0&&(a={}),Le();let{action:i,method:o,encType:s,formData:u,body:l}=he(r,t);if(a.navigate===!1){let c=a.fetcherKey||ne();e.fetch(c,n,a.action||i,{preventScrollReset:a.preventScrollReset,formData:u,body:l,formMethod:a.method||o,formEncType:a.encType||s,unstable_flushSync:a.unstable_flushSync})}else e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:u,body:l,formMethod:a.method||o,formEncType:a.encType||s,replace:a.replace,state:a.state,fromRouteId:n,unstable_flushSync:a.unstable_flushSync,unstable_viewTransition:a.unstable_viewTransition})},[e,t,n])}function Je(e,t){let{relative:n}=t===void 0?{}:t,{basename:r}=React.useContext(UNSAFE_NavigationContext),a=React.useContext(UNSAFE_RouteContext);a||UNSAFE_invariant(!1);let[i]=a.matches.slice(-1),o=v({},useResolvedPath(e||".",{relative:n})),s=useLocation();if(e==null){o.search=s.search;let u=new URLSearchParams(o.search);u.has("index")&&u.get("index")===""&&(u.delete("index"),o.search=u.toString()?"?"+u.toString():"")}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:joinPaths([r,o.pathname])),createPath(o)}function Xe(e){var t;let{key:n}=e===void 0?{}:e,{router:r}=K(A.UseFetcher),a=J(I.UseFetcher),i=React.useContext(q),o=React.useContext(UNSAFE_RouteContext),s=(t=o.matches[o.matches.length-1])==null?void 0:t.route.id;i||UNSAFE_invariant(!1),o||UNSAFE_invariant(!1),s==null&&UNSAFE_invariant(!1);let u=te?te():"",[l,c]=React.useState(n||u);n&&n!==l?c(n):l||c(ne()),React.useEffect(()=>(r.getFetcher(l),()=>{r.deleteFetcher(l)}),[r,l]);let d=React.useCallback((y,w)=>{s||UNSAFE_invariant(!1),r.fetch(l,s,y,w)},[l,s,r]),m=Te(),S=React.useCallback((y,w)=>{m(y,v({},w,{navigate:!1,fetcherKey:l}))},[l,m]),_=React.useMemo(()=>React.forwardRef((w,C)=>React.createElement(Ee,v({},w,{navigate:!1,fetcherKey:l,ref:C}))),[l]),L=a.fetchers.get(l)||IDLE_FETCHER,E=i.get(l);return React.useMemo(()=>v({Form:_,submit:S,load:d},L,{data:E}),[_,S,d,L,E])}function $e(){let e=J(I.UseFetchers);return Array.from(e.fetchers.entries()).map(t=>{let[n,r]=t;return v({},r,{key:n})})}const ae="react-router-scroll-positions";let H={};function xe(e){let{getKey:t,storageKey:n}=e===void 0?{}:e,{router:r}=K(A.UseScrollRestoration),{restoreScrollPosition:a,preventScrollReset:i}=J(I.UseScrollRestoration),{basename:o}=React.useContext(UNSAFE_NavigationContext),s=useLocation(),u=useMatches(),l=useNavigation();React.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),Fe(React.useCallback(()=>{if(l.state==="idle"){let c=(t?t(s,u):null)||s.key;H[c]=window.scrollY}try{sessionStorage.setItem(n||ae,JSON.stringify(H))}catch(c){}window.history.scrollRestoration="auto"},[n,t,l.state,s,u])),typeof document!="undefined"&&(React.useLayoutEffect(()=>{try{let c=sessionStorage.getItem(n||ae);c&&(H=JSON.parse(c))}catch(c){}},[n]),React.useLayoutEffect(()=>{let c=t&&o!=="/"?(m,S)=>t(v({},m,{pathname:stripBasename(m.pathname,o)||m.pathname}),S):t,d=r==null?void 0:r.enableScrollRestoration(H,()=>window.scrollY,c);return()=>d&&d()},[r,o,t]),React.useLayoutEffect(()=>{if(a!==!1){if(typeof a=="number"){window.scrollTo(0,a);return}if(s.hash){let c=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(c){c.scrollIntoView();return}}i!==!0&&window.scrollTo(0,0)}},[s,a,i]))}function Qe(e,t){let{capture:n}=t||{};React.useEffect(()=>{let r=n!=null?{capture:n}:void 0;return window.addEventListener("beforeunload",e,r),()=>{window.removeEventListener("beforeunload",e,r)}},[e,n])}function Fe(e,t){let{capture:n}=t||{};React.useEffect(()=>{let r=n!=null?{capture:n}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,n])}function Ze(e){let{when:t,message:n}=e,r=useBlocker(t);React.useEffect(()=>{r.state==="blocked"&&(window.confirm(n)?setTimeout(r.proceed,0):r.reset())},[r,n]),React.useEffect(()=>{r.state==="blocked"&&!t&&r.reset()},[r,t])}function qe(e,t){t===void 0&&(t={});let n=React.useContext(Z);n==null&&UNSAFE_invariant(!1);let{basename:r}=K(A.useViewTransitionState),a=useResolvedPath(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=stripBasename(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=stripBasename(n.nextLocation.pathname,r)||n.nextLocation.pathname;return matchPath(a.pathname,o)!=null||matchPath(a.pathname,i)!=null}}}]);

//# sourceMappingURL=react-router-dom.7d21a72a0e9a977fe1c3.js.map