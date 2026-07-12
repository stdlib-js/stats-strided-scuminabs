"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var b=c(function(G,j){
var m=require('@stdlib/math-base-assert-is-nanf/dist'),x=require('@stdlib/math-base-special-absf/dist');function O(e,r,n,o,i,v,q){var a,f,s,t,u;if(e<=0)return i;if(f=o,s=q,a=x(r[f]),i[s]=a,s+=v,u=1,m(a)===!1)for(u;u<e;u++){if(f+=n,t=x(r[f]),m(t)){a=t;break}t<a&&(a=t),i[s]=a,s+=v}if(m(a))for(u;u<e;u++)i[s]=a,s+=v;return i}j.exports=O
});var d=c(function(H,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),g=b();function h(e,r,n,o,i){var v=l(e,n),q=l(e,i);return g(e,r,n,v,o,i,q)}y.exports=h
});var k=c(function(I,_){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=d(),z=b();w(R,"ndarray",z);_.exports=R
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=k(),p,E=B(A(__dirname,"./native.js"));C(E)?p=D:p=E;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
