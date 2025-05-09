"use strict";(self["webpackChunkporc"]=self["webpackChunkporc"]||[]).push([[760],{379:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>s});var r=n(185),o=n(183),c=n(635);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=(t,e,n,s,i)=>{const a=t.ownerDocument.defaultView;let l=(0,o.i)(t);const u=t=>{const e=50,{startX:n}=t;return l?n>=a.innerWidth-e:n<=e},h=t=>l?-t.deltaX:t.deltaX,d=t=>l?-t.velocityX:t.velocityX,k=n=>(l=(0,o.i)(t),u(n)&&e()),p=t=>{const e=h(t),n=e/a.innerWidth;s(n)},w=t=>{const e=h(t),n=a.innerWidth,o=e/n,c=d(t),s=n/2,l=c>=0&&(c>.2||e>s),u=l?1-o:o,k=u*n;let p=0;if(k>5){const t=k/Math.abs(c);p=Math.min(t,540)}i(l,o<=0?.01:(0,r.k)(0,o,.9999),p)};return(0,c.G)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:k,onStart:n,onMove:p,onEnd:w})}}}]);
//# sourceMappingURL=760.59e7d6f5.js.map