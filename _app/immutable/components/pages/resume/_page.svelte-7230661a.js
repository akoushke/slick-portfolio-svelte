import{S as I,i as M,s as S,a as b,k as g,w as E,R as T,h as i,c as k,l as w,m as y,x as V,n as C,b as f,y as A,f as h,t as d,z as D,q as j,r as B,B as P}from"../../../chunks/index-ee22a944.js";import{R as O,A as Y}from"../../../chunks/Params-00621a20.js";import{M as F,C as q}from"../../../chunks/MainTitle-f48a0661.js";import{a as R}from"../../../chunks/Utils-6ff2b3ba.js";function G(o){let e;return{c(){e=j(o[1])},l(s){e=B(s,o[1])},m(s,a){f(s,e,a)},p:P,d(s){s&&i(e)}}}function H(o){let e,s;return e=new q({props:{label:"Ooops! no CV at the moment. You should input your cv link in $lib/Params.ts"}}),{c(){E(e.$$.fragment)},l(a){V(e.$$.fragment,a)},m(a,l){A(e,a,l),s=!0},p:P,i(a){s||(h(e.$$.fragment,a),s=!0)},o(a){d(e.$$.fragment,a),s=!1},d(a){D(e,a)}}}function J(o){let e,s,a;return s=new q({props:{label:"Download",size:"1.25em"}}),{c(){e=g("a"),E(s.$$.fragment),this.h()},l(l){e=w(l,"A",{href:!0,class:!0});var n=y(e);V(s.$$.fragment,n),n.forEach(i),this.h()},h(){C(e,"href",Y.CV),C(e,"class","svelte-wl30ce")},m(l,n){f(l,e,n),A(s,e,null),a=!0},p:P,i(l){a||(h(s.$$.fragment,l),a=!0)},o(l){d(s.$$.fragment,l),a=!1},d(l){l&&i(e),D(s)}}}function K(o){let e,s,a,l,n,$,c,u,m,_;document.title=e=R(o[1]),n=new F({props:{$$slots:{default:[G]},$$scope:{ctx:o}}});const x=[J,H],v=[];function z(t,r){return t[0]?0:1}return u=z(o),m=v[u]=x[u](o),{c(){s=b(),a=g("div"),l=b(),E(n.$$.fragment),$=b(),c=g("div"),m.c(),this.h()},l(t){T("svelte-1pkfnjy",document.head).forEach(i),s=k(t),a=w(t,"DIV",{}),y(a).forEach(i),l=k(t),V(n.$$.fragment,t),$=k(t),c=w(t,"DIV",{class:!0});var p=y(c);m.l(p),p.forEach(i),this.h()},h(){C(c,"class","resume svelte-wl30ce")},m(t,r){f(t,s,r),f(t,a,r),f(t,l,r),A(n,t,r),f(t,$,r),f(t,c,r),v[u].m(c,null),_=!0},p(t,[r]){(!_||r&2)&&e!==(e=R(t[1]))&&(document.title=e);const p={};r&4&&(p.$$scope={dirty:r,ctx:t}),n.$set(p),m.p(t,r)},i(t){_||(h(n.$$.fragment,t),h(m),_=!0)},o(t){d(n.$$.fragment,t),d(m),_=!1},d(t){t&&i(s),t&&i(a),t&&i(l),D(n,t),t&&i($),t&&i(c),v[u].d()}}}function L(o){const{cv:e,title:s}=O;return[e,s]}class X extends I{constructor(e){super(),M(this,e,L,K,S,{})}}export{X as default};
