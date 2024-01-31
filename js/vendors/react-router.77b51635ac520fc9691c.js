"use strict";(self.webpackChunkwebpack_react_typescript_template=self.webpackChunkwebpack_react_typescript_template||[]).push([[111],{9250:(ge,Z,M)=>{var K;M.d(Z,{DY:()=>j,F0:()=>J,FR:()=>T,TH:()=>N,j3:()=>ve,s0:()=>H,us:()=>X,w3:()=>O});var l=M(7294),v=M(2599);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},x.apply(this,arguments)}const O=l.createContext(null),T=l.createContext(null),F=l.createContext(null),_=l.createContext(null),B=l.createContext(null),y=l.createContext({outlet:null,matches:[],isDataRoute:!1}),W=l.createContext(null);function Re(e,t){let{relative:r}=t===void 0?{}:t;U()||UNSAFE_invariant(!1);let{basename:a,navigator:n}=React.useContext(_),{hash:u,pathname:o,search:c}=q(e,{relative:r}),f=o;return a!=="/"&&(f=o==="/"?a:joinPaths([a,o])),n.createHref({pathname:f,search:c,hash:u})}function U(){return l.useContext(B)!=null}function N(){return U()||(0,v.J0)(!1),l.useContext(B).location}function ye(){return React.useContext(B).navigationType}function Ce(e){U()||UNSAFE_invariant(!1);let{pathname:t}=N();return React.useMemo(()=>matchPath(e,t),[t,e])}const xe=null;function z(e){l.useContext(_).static||l.useLayoutEffect(e)}function H(){let{isDataRoute:e}=l.useContext(y);return e?se():G()}function G(){U()||(0,v.J0)(!1);let e=l.useContext(O),{basename:t,future:r,navigator:a}=l.useContext(_),{matches:n}=l.useContext(y),{pathname:u}=N(),o=JSON.stringify((0,v.cm)(n,r.v7_relativeSplatPath)),c=l.useRef(!1);return z(()=>{c.current=!0}),l.useCallback(function(s,d){if(d===void 0&&(d={}),!c.current)return;if(typeof s=="number"){a.go(s);return}let i=(0,v.pC)(s,JSON.parse(o),u,d.relative==="path");e==null&&t!=="/"&&(i.pathname=i.pathname==="/"?t:(0,v.RQ)([t,i.pathname])),(d.replace?a.replace:a.push)(i,d.state,d)},[t,a,o,u,e])}const Q=l.createContext(null);function be(){return React.useContext(Q)}function $(e){let t=l.useContext(y).outlet;return t&&l.createElement(Q.Provider,{value:e},t)}function Pe(){let{matches:e}=React.useContext(y),t=e[e.length-1];return t?t.params:{}}function q(e,t){let{relative:r}=t===void 0?{}:t,{future:a}=React.useContext(_),{matches:n}=React.useContext(y),{pathname:u}=N(),o=JSON.stringify(UNSAFE_getResolveToMatches(n,a.v7_relativeSplatPath));return React.useMemo(()=>resolveTo(e,JSON.parse(o),u,r==="path"),[e,o,u,r])}function ee(e,t){return j(e,t)}function j(e,t,r,a){U()||(0,v.J0)(!1);let{navigator:n}=l.useContext(_),{matches:u}=l.useContext(y),o=u[u.length-1],c=o?o.params:{},f=o?o.pathname:"/",s=o?o.pathnameBase:"/",d=o&&o.route,i=N(),p;if(t){var h;let E=typeof t=="string"?(0,v.cP)(t):t;s==="/"||(h=E.pathname)!=null&&h.startsWith(s)||(0,v.J0)(!1),p=E}else p=i;let R=p.pathname||"/",P=s==="/"?R:R.slice(s.length)||"/",C=(0,v.fp)(e,{pathname:P}),k=Y(C&&C.map(E=>Object.assign({},E,{params:Object.assign({},c,E.params),pathname:(0,v.RQ)([s,n.encodeLocation?n.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?s:(0,v.RQ)([s,n.encodeLocation?n.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),u,r,a);return t&&k?l.createElement(B.Provider,{value:{location:x({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:v.aU.Pop}},k):k}function te(){let e=le(),t=(0,v.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",n={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},o=null;return l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),r?l.createElement("pre",{style:n},r):null,o)}const re=l.createElement(te,null);class ae extends l.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?l.createElement(y.Provider,{value:this.props.routeContext},l.createElement(W.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ne(e){let{routeContext:t,match:r,children:a}=e,n=l.useContext(O);return n&&n.static&&n.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=r.route.id),l.createElement(y.Provider,{value:t},a)}function Y(e,t,r,a){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var u;if((u=r)!=null&&u.errors)e=r.matches;else return null}let o=e,c=(n=r)==null?void 0:n.errors;if(c!=null){let d=o.findIndex(i=>i.route.id&&(c==null?void 0:c[i.route.id]));d>=0||(0,v.J0)(!1),o=o.slice(0,Math.min(o.length,d+1))}let f=!1,s=-1;if(r&&a&&a.v7_partialHydration)for(let d=0;d<o.length;d++){let i=o[d];if((i.route.HydrateFallback||i.route.hydrateFallbackElement)&&(s=d),i.route.id){let{loaderData:p,errors:h}=r,R=i.route.loader&&p[i.route.id]===void 0&&(!h||h[i.route.id]===void 0);if(i.route.lazy||R){f=!0,s>=0?o=o.slice(0,s+1):o=[o[0]];break}}}return o.reduceRight((d,i,p)=>{let h,R=!1,P=null,C=null;r&&(h=c&&i.route.id?c[i.route.id]:void 0,P=i.route.errorElement||re,f&&(s<0&&p===0?(ce("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,C=null):s===p&&(R=!0,C=i.route.hydrateFallbackElement||null)));let k=t.concat(o.slice(0,p+1)),E=()=>{let D;return h?D=P:R?D=C:i.route.Component?D=l.createElement(i.route.Component,null):i.route.element?D=i.route.element:D=d,l.createElement(ne,{match:i,routeContext:{outlet:d,matches:k,isDataRoute:r!=null},children:D})};return r&&(i.route.ErrorBoundary||i.route.errorElement||p===0)?l.createElement(ae,{location:r.location,revalidation:r.revalidation,component:P,error:h,children:E(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):E()},null)}var I=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(I||{}),m=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(m||{});function _e(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function A(e){let t=l.useContext(O);return t||(0,v.J0)(!1),t}function b(e){let t=l.useContext(T);return t||(0,v.J0)(!1),t}function oe(e){let t=l.useContext(y);return t||(0,v.J0)(!1),t}function L(e){let t=oe(e),r=t.matches[t.matches.length-1];return r.route.id||(0,v.J0)(!1),r.route.id}function Ue(){return L(m.UseRouteId)}function Ne(){return b(m.UseNavigation).navigation}function ke(){let e=A(I.UseRevalidator),t=b(m.UseRevalidator);return React.useMemo(()=>({revalidate:e.router.revalidate,state:t.revalidation}),[e.router.revalidate,t.revalidation])}function De(){let{matches:e,loaderData:t}=b(m.UseMatches);return React.useMemo(()=>e.map(r=>UNSAFE_convertRouteMatchToUiMatch(r,t)),[e,t])}function Oe(){let e=b(m.UseLoaderData),t=L(m.UseLoaderData);if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return}return e.loaderData[t]}function Be(e){return b(m.UseRouteLoaderData).loaderData[e]}function Le(){let e=b(m.UseActionData),t=L(m.UseLoaderData);return e.actionData?e.actionData[t]:void 0}function le(){var e;let t=l.useContext(W),r=b(m.UseRouteError),a=L(m.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[a]}function ie(){let e=React.useContext(F);return e==null?void 0:e._data}function Me(){let e=React.useContext(F);return e==null?void 0:e._error}let ue=0;function Fe(e){let{router:t,basename:r}=A(I.UseBlocker),a=b(m.UseBlocker),[n,u]=React.useState(""),o=React.useCallback(c=>{if(typeof e!="function")return!!e;if(r==="/")return e(c);let{currentLocation:f,nextLocation:s,historyAction:d}=c;return e({currentLocation:x({},f,{pathname:stripBasename(f.pathname,r)||f.pathname}),nextLocation:x({},s,{pathname:stripBasename(s.pathname,r)||s.pathname}),historyAction:d})},[r,e]);return React.useEffect(()=>{let c=String(++ue);return u(c),()=>t.deleteBlocker(c)},[t]),React.useEffect(()=>{n!==""&&t.getBlocker(n,o)},[t,n,o]),n&&a.blockers.has(n)?a.blockers.get(n):IDLE_BLOCKER}function se(){let{router:e}=A(I.UseNavigateStable),t=L(m.UseNavigateStable),r=l.useRef(!1);return z(()=>{r.current=!0}),l.useCallback(function(n,u){u===void 0&&(u={}),r.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,x({fromRouteId:t},u)))},[e,t])}const V={};function ce(e,t,r){!t&&!V[e]&&(V[e]=!0)}const de="startTransition",S=(K||(K=M.t(l,2)))[de];function Ie(e){let{fallbackElement:t,router:r,future:a}=e,[n,u]=React.useState(r.state),{v7_startTransition:o}=a||{},c=React.useCallback(i=>{o&&S?S(()=>u(i)):u(i)},[u,o]);React.useLayoutEffect(()=>r.subscribe(c),[r,c]),React.useEffect(()=>{},[]);let f=React.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:i=>r.navigate(i),push:(i,p,h)=>r.navigate(i,{state:p,preventScrollReset:h==null?void 0:h.preventScrollReset}),replace:(i,p,h)=>r.navigate(i,{replace:!0,state:p,preventScrollReset:h==null?void 0:h.preventScrollReset})}),[r]),s=r.basename||"/",d=React.useMemo(()=>({router:r,navigator:f,static:!1,basename:s}),[r,f,s]);return React.createElement(React.Fragment,null,React.createElement(O.Provider,{value:d},React.createElement(T.Provider,{value:n},React.createElement(J,{basename:s,location:n.location,navigationType:n.historyAction,navigator:f,future:{v7_relativeSplatPath:r.future.v7_relativeSplatPath}},n.initialized||r.future.v7_partialHydration?React.createElement(fe,{routes:r.routes,future:r.future,state:n}):t))),null)}function fe(e){let{routes:t,future:r,state:a}=e;return j(t,void 0,a,r)}function Se(e){let{basename:t,children:r,initialEntries:a,initialIndex:n,future:u}=e,o=React.useRef();o.current==null&&(o.current=createMemoryHistory({initialEntries:a,initialIndex:n,v5Compat:!0}));let c=o.current,[f,s]=React.useState({action:c.action,location:c.location}),{v7_startTransition:d}=u||{},i=React.useCallback(p=>{d&&S?S(()=>s(p)):s(p)},[s,d]);return React.useLayoutEffect(()=>c.listen(i),[c,i]),React.createElement(J,{basename:t,children:r,location:f.location,navigationType:f.action,navigator:c,future:u})}function Te(e){let{to:t,replace:r,state:a,relative:n}=e;U()||UNSAFE_invariant(!1);let{future:u,static:o}=React.useContext(_),{matches:c}=React.useContext(y),{pathname:f}=N(),s=H(),d=resolveTo(t,UNSAFE_getResolveToMatches(c,u.v7_relativeSplatPath),f,n==="path"),i=JSON.stringify(d);return React.useEffect(()=>s(JSON.parse(i),{replace:r,state:a,relative:n}),[s,i,n,r,a]),null}function ve(e){return $(e.context)}function pe(e){UNSAFE_invariant(!1)}function J(e){let{basename:t="/",children:r=null,location:a,navigationType:n=v.aU.Pop,navigator:u,static:o=!1,future:c}=e;U()&&(0,v.J0)(!1);let f=t.replace(/^\/*/,"/"),s=l.useMemo(()=>({basename:f,navigator:u,static:o,future:x({v7_relativeSplatPath:!1},c)}),[f,c,u,o]);typeof a=="string"&&(a=(0,v.cP)(a));let{pathname:d="/",search:i="",hash:p="",state:h=null,key:R="default"}=a,P=l.useMemo(()=>{let C=(0,v.Zn)(d,f);return C==null?null:{location:{pathname:C,search:i,hash:p,state:h,key:R},navigationType:n}},[f,d,i,p,h,R,n]);return P==null?null:l.createElement(_.Provider,{value:s},l.createElement(B.Provider,{children:r,value:P}))}function je(e){let{children:t,location:r}=e;return ee(w(t),r)}function Ae(e){let{children:t,errorElement:r,resolve:a}=e;return React.createElement(me,{resolve:a,errorElement:r},React.createElement(Ee,null,t))}var g=function(e){return e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error",e}(g||{});const he=new Promise(()=>{});class me extends l.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,r){console.error("<Await> caught the following error during render",t,r)}render(){let{children:t,errorElement:r,resolve:a}=this.props,n=null,u=g.pending;if(!(a instanceof Promise))u=g.success,n=Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>a});else if(this.state.error){u=g.error;let o=this.state.error;n=Promise.reject().catch(()=>{}),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>o})}else a._tracked?(n=a,u=n._error!==void 0?g.error:n._data!==void 0?g.success:g.pending):(u=g.pending,Object.defineProperty(a,"_tracked",{get:()=>!0}),n=a.then(o=>Object.defineProperty(a,"_data",{get:()=>o}),o=>Object.defineProperty(a,"_error",{get:()=>o})));if(u===g.error&&n._error instanceof v.X3)throw he;if(u===g.error&&!r)throw n._error;if(u===g.error)return l.createElement(F.Provider,{value:n,children:r});if(u===g.success)return l.createElement(F.Provider,{value:n,children:t});throw n}}function Ee(e){let{children:t}=e,r=ie(),a=typeof t=="function"?t(r):t;return React.createElement(React.Fragment,null,a)}function w(e,t){t===void 0&&(t=[]);let r=[];return React.Children.forEach(e,(a,n)=>{if(!React.isValidElement(a))return;let u=[...t,n];if(a.type===React.Fragment){r.push.apply(r,w(a.props.children,u));return}a.type!==pe&&UNSAFE_invariant(!1),!a.props.index||!a.props.children||UNSAFE_invariant(!1);let o={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=w(a.props.children,u)),r.push(o)}),r}function Je(e){return Y(e)}function X(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:l.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:l.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:l.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function we(e,t){return createRouter({basename:t==null?void 0:t.basename,future:x({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:createMemoryHistory({initialEntries:t==null?void 0:t.initialEntries,initialIndex:t==null?void 0:t.initialIndex}),hydrationData:t==null?void 0:t.hydrationData,routes:e,mapRouteProperties:X}).initialize()}}}]);

//# sourceMappingURL=react-router.77b51635ac520fc9691c.js.map