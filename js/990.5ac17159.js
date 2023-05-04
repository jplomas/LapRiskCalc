"use strict";(self["webpackChunkporc"]=self["webpackChunkporc"]||[]).push([[990],{8990:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>s});var r=n(6587),o=n(545),c=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=(t,e,n,s,i)=>{const a=t.ownerDocument.defaultView;let h=(0,o.i)(t);const l=t=>{const e=50,{startX:n}=t;return h?n>=a.innerWidth-e:n<=e},u=t=>h?-t.deltaX:t.deltaX,d=t=>h?-t.velocityX:t.velocityX,p=n=>(h=(0,o.i)(t),l(n)&&e()),k=t=>{const e=u(t),n=e/a.innerWidth;s(n)},w=t=>{const e=u(t),n=a.innerWidth,o=e/n,c=d(t),s=n/2,h=c>=0&&(c>.2||e>s),l=h?1-o:o,p=l*n;let k=0;if(p>5){const t=p/Math.abs(c);k=Math.min(t,540)}i(h,o<=0?.01:(0,r.h)(0,o,.9999),k)};return(0,c.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=990.5ac17159.js.map