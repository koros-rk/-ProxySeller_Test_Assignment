"use strict";(self.webpackChunkwebpack_react_typescript_template=self.webpackChunkwebpack_react_typescript_template||[]).push([[591],{613:(P,C,d)=>{var x=d(739),O=d.n(x),g=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function h(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(O()[n[1]]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){var a=e.indexOf("-->");return{type:"comment",comment:a!==-1?e.slice(4,a):""}}for(var i=new RegExp(g),r=null;(r=i.exec(e))!==null;)if(r[0].trim())if(r[1]){var s=r[1].trim(),u=[s,""];s.indexOf("=")>-1&&(u=s.split("=")),t.attrs[u[0]]=u[1],i.lastIndex--}else r[2]&&(t.attrs[r[2]]=r[3].trim().substring(1,r[3].length-1));return t}var y=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,b=/^\s*$/,k=Object.create(null);function f(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(n){var a=[];for(var i in n)a.push(i+'="'+n[i]+'"');return a.length?" "+a.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(f,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}var D={parse:function(e,t){t||(t={}),t.components||(t.components=k);var n,a=[],i=[],r=-1,s=!1;if(e.indexOf("<")!==0){var u=e.indexOf("<");a.push({type:"text",content:u===-1?e:e.substring(0,u)})}return e.replace(y,function(c,w){if(s){if(c!=="</"+n.name+">")return;s=!1}var l,v=c.charAt(1)!=="/",A=c.startsWith("<!--"),p=w+c.length,m=e.charAt(p);if(A){var E=h(c);return r<0?(a.push(E),a):((l=i[r]).children.push(E),a)}if(v&&(r++,(n=h(c)).type==="tag"&&t.components[n.name]&&(n.type="component",s=!0),n.voidElement||s||!m||m==="<"||n.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),r===0&&a.push(n),(l=i[r-1])&&l.children.push(n),i[r]=n),(!v||n.voidElement)&&(r>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(r--,n=r===-1?a:i[r]),!s&&m!=="<"&&m)){l=r===-1?a:i[r].children;var _=e.indexOf("<",p),o=e.slice(p,_===-1?void 0:_);b.test(o)&&(o=" "),(_>-1&&r+l.length>=0||o!==" ")&&l.push({type:"text",content:o})}}),a},stringify:function(e){return e.reduce(function(t,n){return t+f("",n)},"")}},W=null}}]);

//# sourceMappingURL=html-parse-stringify.ab51db55755f44a2b875.js.map