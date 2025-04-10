"use strict";(self["webpackChunkporc"]=self["webpackChunkporc"]||[]).push([[760],{8379:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>s});var r=n(9185),o=n(3183),c=n(2635);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=(t,e,n,s,i)=>{const a=t.ownerDocument.defaultView;let l=(0,o.i)(t);const u=t=>{const e=50,{startX:n}=t;return l?n>=a.innerWidth-e:n<=e},h=t=>l?-t.deltaX:t.deltaX,d=t=>l?-t.velocityX:t.velocityX,p=n=>(l=(0,o.i)(t),u(n)&&e()),k=t=>{const e=h(t),n=e/a.innerWidth;s(n)},w=t=>{const e=h(t),n=a.innerWidth,o=e/n,c=d(t),s=n/2,l=c>=0&&(c>.2||e>s),u=l?1-o:o,p=u*n;let k=0;if(p>5){const t=p/Math.abs(c);k=Math.min(t,540)}i(l,o<=0?.01:(0,r.m)(0,o,.9999),k)};return(0,c.G)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:p,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=760.78da2c10.js.map