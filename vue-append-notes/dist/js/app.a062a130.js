(function(t){function e(e){for(var r,i,a=e[0],c=e[1],p=e[2],f=0,l=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(e);while(l.length)l.shift()();return u.push.apply(u,p||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var p=0;p<a.length;p++)e(a[p]);var s=c;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("button",{on:{click:t.run}},[t._v("运行")]),n("div",{ref:"output"}),n("div",t._l(t.nodes,(function(e){return n("div",{key:e},[t._v(t._s(e))])})),0)])},u=[],i={name:"App",data:function(){return{n:1e3,nodes:[]}},created:function(){this.t1=0,this.t2=0,this.total=0},updated:function(){this.t2=performance.now(),this.$refs.output.textContent=this.t2-this.t1+"ms"},methods:{run:function(){this.t1=performance.now();for(var t=0;t<this.n;t++)this.nodes.push(this.total+t);this.total+=this.n}}},a=i,c=n("2877"),p=Object(c["a"])(a,o,u,!1,null,null,null),s=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(s)}}).$mount("#app")}});
//# sourceMappingURL=app.a062a130.js.map