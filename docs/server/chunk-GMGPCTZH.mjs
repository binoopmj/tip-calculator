import './polyfills.server.mjs';
import{C as g,a as m,b as c,c as a,d as e,e as t,f as p,g as o,h as s,i as l,n as f,q as u,s as d,t as v,w as C}from"./chunk-VX57DG6N.mjs";var _=(()=>{class n{counter=a(0);increment(){this.counter.set(this.counter()+1)}decrement(){this.counter.set(this.counter()-1)}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=m({type:n,selectors:[["app-root"]],standalone:!0,features:[l],decls:9,vars:1,consts:[[2,"text-align","center"],[3,"click"]],template:function(r,i){r&1&&(e(0,"div",0)(1,"h1"),o(2,"Tip Counter"),t(),e(3,"h2"),o(4),t(),e(5,"button",1),p("click",function(){return i.decrement()}),o(6,"-"),t(),e(7,"button",1),p("click",function(){return i.increment()}),o(8,"+"),t()()),r&2&&(c(4),s(i.counter()))}})}return n})();var x=[];var h={providers:[f({eventCoalescing:!0}),g(x),v()]};var k={providers:[C()]},A=u(h,k);var y=()=>d(_,A),L=y;export{L as a};
