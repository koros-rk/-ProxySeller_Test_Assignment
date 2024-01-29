(self.webpackChunkwebpack_react_typescript_template=self.webpackChunkwebpack_react_typescript_template||[]).push([[111],{550:(O,F,E)=>{"use strict";E.d(F,{AW:()=>q,F0:()=>s,LX:()=>B,rs:()=>ft,s6:()=>i});var U=E(721),_=E(294),Z=E(697),nt=E.n(Z),b=E(731),at=E(298),j=E(523),T=E(776),w=E(462),S=E(658),N=E.n(S),it=E(864),V=E(366),z=E(679),Q=E.n(z),H=function(e){var a=(0,j.Z)();return a.displayName=e,a},n=H("Router-History"),i=H("Router"),s=function(t){(0,U.Z)(e,t),e.computeRootMatch=function(r){return{path:"/",url:"/",params:{},isExact:r==="/"}};function e(o){var r;return r=t.call(this,o)||this,r.state={location:o.history.location},r._isMounted=!1,r._pendingLocation=null,o.staticContext||(r.unlisten=o.history.listen(function(c){r._pendingLocation=c})),r}var a=e.prototype;return a.componentDidMount=function(){var r=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(c){r._isMounted&&r.setState({location:c})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},a.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},a.render=function(){return _.createElement(i.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},_.createElement(n.Provider,{children:this.props.children||null,value:this.props.history}))},e}(_.Component),g=function(t){(0,U.Z)(e,t);function e(){for(var o,r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return o=t.call.apply(t,[this].concat(c))||this,o.history=(0,b.PP)(o.props),o}var a=e.prototype;return a.render=function(){return _.createElement(s,{history:this.history,children:this.props.children})},e}(_.Component),x=function(t){(0,U.Z)(e,t);function e(){return t.apply(this,arguments)||this}var a=e.prototype;return a.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},a.componentDidUpdate=function(r){this.props.onUpdate&&this.props.onUpdate.call(this,this,r)},a.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},a.render=function(){return null},e}(_.Component);function v(t){var e=t.message,a=t.when,o=a===void 0?!0:a;return React.createElement(i.Consumer,null,function(r){if(r||invariant(!1),!o||r.staticContext)return null;var c=r.history.block;return React.createElement(x,{onMount:function(p){p.release=c(e)},onUpdate:function(p,h){h.message!==e&&(p.release(),p.release=c(e))},onUnmount:function(p){p.release()},message:e})})}if(!1)var C;var f={},L=1e4,y=0;function M(t){if(f[t])return f[t];var e=pathToRegexp.compile(t);return y<L&&(f[t]=e,y++),e}function l(t,e){return t===void 0&&(t="/"),e===void 0&&(e={}),t==="/"?t:M(t)(e,{pretty:!0})}function P(t){var e=t.computedMatch,a=t.to,o=t.push,r=o===void 0?!1:o;return React.createElement(i.Consumer,null,function(c){c||invariant(!1);var u=c.history,p=c.staticContext,h=r?u.push:u.replace,m=createLocation(e?typeof a=="string"?l(a,e.params):_extends({},a,{pathname:l(a.pathname,e.params)}):a);return p?(h(m),null):React.createElement(x,{onMount:function(){h(m)},onUpdate:function(W,D){var K=createLocation(D.to);locationsAreEqual(K,_extends({},m,{key:K.key}))||h(m)},to:a})})}var R={},A=1e4,G=0;function I(t,e){var a=""+e.end+e.strict+e.sensitive,o=R[a]||(R[a]={});if(o[t])return o[t];var r=[],c=N()(t,r,e),u={regexp:c,keys:r};return G<A&&(o[t]=u,G++),u}function B(t,e){e===void 0&&(e={}),(typeof e=="string"||Array.isArray(e))&&(e={path:e});var a=e,o=a.path,r=a.exact,c=r===void 0?!1:r,u=a.strict,p=u===void 0?!1:u,h=a.sensitive,m=h===void 0?!1:h,d=[].concat(o);return d.reduce(function(W,D){if(!D&&D!=="")return null;if(W)return W;var K=I(D,{end:c,strict:p,sensitive:m}),tt=K.regexp,vt=K.keys,et=tt.exec(t);if(!et)return null;var rt=et[0],dt=et.slice(1),ut=t===rt;return c&&!ut?null:{path:D,url:D==="/"&&rt===""?"/":rt,isExact:ut,params:vt.reduce(function(lt,mt,_t){return lt[mt.name]=dt[_t],lt},{})}},null)}function Y(t){return _.Children.count(t)===0}function ot(t,e,a){var o=t(e);return o||null}var q=function(t){(0,U.Z)(e,t);function e(){return t.apply(this,arguments)||this}var a=e.prototype;return a.render=function(){var r=this;return _.createElement(i.Consumer,null,function(c){c||(0,T.Z)(!1);var u=r.props.location||c.location,p=r.props.computedMatch?r.props.computedMatch:r.props.path?B(u.pathname,r.props):c.match,h=(0,w.Z)({},c,{location:u,match:p}),m=r.props,d=m.children,W=m.component,D=m.render;return Array.isArray(d)&&Y(d)&&(d=null),_.createElement(i.Provider,{value:h},h.match?d?typeof d=="function"?d(h):d:W?_.createElement(W,h):D?D(h):null:typeof d=="function"?d(h):null)})},e}(_.Component);function $(t){return t.charAt(0)==="/"?t:"/"+t}function J(t,e){return t?(0,w.Z)({},e,{pathname:$(t)+e.pathname}):e}function pt(t,e){if(!t)return e;var a=$(t);return e.pathname.indexOf(a)!==0?e:(0,w.Z)({},e,{pathname:e.pathname.substr(a.length)})}function st(t){return typeof t=="string"?t:(0,b.Ep)(t)}function k(t){return function(){(0,T.Z)(!1)}}function ct(){}var Et=function(t){(0,U.Z)(e,t);function e(){for(var o,r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return o=t.call.apply(t,[this].concat(c))||this,o.handlePush=function(p){return o.navigateTo(p,"PUSH")},o.handleReplace=function(p){return o.navigateTo(p,"REPLACE")},o.handleListen=function(){return ct},o.handleBlock=function(){return ct},o}var a=e.prototype;return a.navigateTo=function(r,c){var u=this.props,p=u.basename,h=p===void 0?"":p,m=u.context,d=m===void 0?{}:m;d.action=c,d.location=J(h,(0,b.ob)(r)),d.url=st(d.location)},a.render=function(){var r=this.props,c=r.basename,u=c===void 0?"":c,p=r.context,h=p===void 0?{}:p,m=r.location,d=m===void 0?"/":m,W=(0,V.Z)(r,["basename","context","location"]),D={createHref:function(tt){return $(u+st(tt))},action:"POP",location:pt(u,(0,b.ob)(d)),push:this.handlePush,replace:this.handleReplace,go:k("go"),goBack:k("goBack"),goForward:k("goForward"),listen:this.handleListen,block:this.handleBlock};return _.createElement(s,(0,w.Z)({},W,{history:D,staticContext:h}))},e}(_.Component),ft=function(t){(0,U.Z)(e,t);function e(){return t.apply(this,arguments)||this}var a=e.prototype;return a.render=function(){var r=this;return _.createElement(i.Consumer,null,function(c){c||(0,T.Z)(!1);var u=r.props.location||c.location,p,h;return _.Children.forEach(r.props.children,function(m){if(h==null&&_.isValidElement(m)){p=m;var d=m.props.path||m.props.from;h=d?B(u.pathname,(0,w.Z)({},m.props,{path:d})):c.match}}),h?_.cloneElement(p,{location:u,computedMatch:h}):null})},e}(_.Component);function gt(t){var e="withRouter("+(t.displayName||t.name)+")",a=function(r){var c=r.wrappedComponentRef,u=_objectWithoutPropertiesLoose(r,["wrappedComponentRef"]);return React.createElement(i.Consumer,null,function(p){return p||invariant(!1),React.createElement(t,_extends({},u,p,{ref:c}))})};return a.displayName=e,a.WrappedComponent=t,hoistStatics(a,t)}var X=_.useContext;function yt(){return X(n)}function ht(){return X(i).location}function xt(){var t=X(i).match;return t?t.params:{}}function Mt(t){var e=ht(),a=X(i).match;return t?B(e.pathname,t):a}if(!1)var Pt,Rt,Ct,Dt,Ut},585:O=>{O.exports=Array.isArray||function(F){return Object.prototype.toString.call(F)=="[object Array]"}},658:(O,F,E)=>{var U=E(585);O.exports=H,O.exports.parse=Z,O.exports.compile=nt,O.exports.tokensToFunction=j,O.exports.tokensToRegExp=Q;var _=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Z(n,i){for(var s=[],g=0,x=0,v="",C=i&&i.delimiter||"/",f;(f=_.exec(n))!=null;){var L=f[0],y=f[1],M=f.index;if(v+=n.slice(x,M),x=M+L.length,y){v+=y[1];continue}var l=n[x],P=f[2],R=f[3],A=f[4],G=f[5],I=f[6],B=f[7];v&&(s.push(v),v="");var Y=P!=null&&l!=null&&l!==P,ot=I==="+"||I==="*",q=I==="?"||I==="*",$=f[2]||C,J=A||G;s.push({name:R||g++,prefix:P||"",delimiter:$,optional:q,repeat:ot,partial:Y,asterisk:!!B,pattern:J?w(J):B?".*":"[^"+T($)+"]+?"})}return x<n.length&&(v+=n.substr(x)),v&&s.push(v),s}function nt(n,i){return j(Z(n,i),i)}function b(n){return encodeURI(n).replace(/[\/?#]/g,function(i){return"%"+i.charCodeAt(0).toString(16).toUpperCase()})}function at(n){return encodeURI(n).replace(/[?#]/g,function(i){return"%"+i.charCodeAt(0).toString(16).toUpperCase()})}function j(n,i){for(var s=new Array(n.length),g=0;g<n.length;g++)typeof n[g]=="object"&&(s[g]=new RegExp("^(?:"+n[g].pattern+")$",N(i)));return function(x,v){for(var C="",f=x||{},L=v||{},y=L.pretty?b:encodeURIComponent,M=0;M<n.length;M++){var l=n[M];if(typeof l=="string"){C+=l;continue}var P=f[l.name],R;if(P==null)if(l.optional){l.partial&&(C+=l.prefix);continue}else throw new TypeError('Expected "'+l.name+'" to be defined');if(U(P)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(P)+"`");if(P.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var A=0;A<P.length;A++){if(R=y(P[A]),!s[M].test(R))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(R)+"`");C+=(A===0?l.prefix:l.delimiter)+R}continue}if(R=l.asterisk?at(P):y(P),!s[M].test(R))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+R+'"');C+=l.prefix+R}return C}}function T(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function w(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function S(n,i){return n.keys=i,n}function N(n){return n&&n.sensitive?"":"i"}function it(n,i){var s=n.source.match(/\((?!\?)/g);if(s)for(var g=0;g<s.length;g++)i.push({name:g,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return S(n,i)}function V(n,i,s){for(var g=[],x=0;x<n.length;x++)g.push(H(n[x],i,s).source);var v=new RegExp("(?:"+g.join("|")+")",N(s));return S(v,i)}function z(n,i,s){return Q(Z(n,s),i,s)}function Q(n,i,s){U(i)||(s=i||s,i=[]),s=s||{};for(var g=s.strict,x=s.end!==!1,v="",C=0;C<n.length;C++){var f=n[C];if(typeof f=="string")v+=T(f);else{var L=T(f.prefix),y="(?:"+f.pattern+")";i.push(f),f.repeat&&(y+="(?:"+L+y+")*"),f.optional?f.partial?y=L+"("+y+")?":y="(?:"+L+"("+y+"))?":y=L+"("+y+")",v+=y}}var M=T(s.delimiter||"/"),l=v.slice(-M.length)===M;return g||(v=(l?v.slice(0,-M.length):v)+"(?:"+M+"(?=$))?"),x?v+="$":v+=g&&l?"":"(?="+M+"|$)",S(new RegExp("^"+v,N(s)),i)}function H(n,i,s){return U(i)||(s=i||s,i=[]),s=s||{},n instanceof RegExp?it(n,i):U(n)?V(n,i,s):z(n,i,s)}}}]);

//# sourceMappingURL=react-router.5eecc268695ecb142048.js.map