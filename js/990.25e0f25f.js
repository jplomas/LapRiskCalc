"use strict";(self["webpackChunkporc"]=self["webpackChunkporc"]||[]).push([[990],{8990:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>s});var r=n(6587),o=n(545),c=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=(t,e,n,s,a)=>{const i=t.ownerDocument.defaultView,u=(0,o.i)(t),h=t=>{const e=50,{startX:n}=t;return u?n>=i.innerWidth-e:n<=e},l=t=>u?-t.deltaX:t.deltaX,d=t=>u?-t.velocityX:t.velocityX,p=t=>h(t)&&e(),k=t=>{const e=l(t),n=e/i.innerWidth;s(n)},w=t=>{const e=l(t),n=i.innerWidth,o=e/n,c=d(t),s=n/2,u=c>=0&&(c>.2||e>s),h=u?1-o:o,p=h*n;let k=0;if(p>5){const t=p/Math.abs(c);k=Math.min(t,540)}a(u,o<=0?.01:(0,r.j)(0,o,.9999),k)};return(0,c.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=990.25e0f25f.js.map