(self["webpackChunkporc"]=self["webpackChunkporc"]||[]).push([[422],{7741:(r,e,o)=>{var t=o(1702),n=Error,a=t("".replace),s=function(r){return String(n(r).stack)}("zxcasd"),c=/\n\s*at [^:]*:[^\n]*/,i=c.test(s);r.exports=function(r,e){if(i&&"string"==typeof r&&!n.prepareStackTrace)while(e--)r=a(r,c,"");return r}},2914:(r,e,o)=>{var t=o(7293),n=o(9114);r.exports=!t((function(){var r=Error("a");return!("stack"in r)||(Object.defineProperty(r,"stack",n(1,7)),7!==r.stack)}))},7762:(r,e,o)=>{"use strict";var t=o(9781),n=o(7293),a=o(9670),s=o(30),c=o(6277),i=Error.prototype.toString,u=n((function(){if(t){var r=s(Object.defineProperty({},"name",{get:function(){return this===r}}));if("true"!==i.call(r))return!0}return"2: 1"!==i.call({message:1,name:2})||"Error"!==i.call({})}));r.exports=u?function(){var r=a(this),e=c(r.name,"Error"),o=c(r.message);return e?o?e+": "+o:e:o}:i},9587:(r,e,o)=>{var t=o(614),n=o(111),a=o(7674);r.exports=function(r,e,o){var s,c;return a&&t(s=e.constructor)&&s!==o&&n(c=s.prototype)&&c!==o.prototype&&a(r,c),r}},8340:(r,e,o)=>{var t=o(111),n=o(8880);r.exports=function(r,e){t(e)&&"cause"in e&&n(r,"cause",e.cause)}},3157:(r,e,o)=>{var t=o(4326);r.exports=Array.isArray||function(r){return"Array"==t(r)}},6277:(r,e,o)=>{var t=o(1340);r.exports=function(r,e){return void 0===r?arguments.length<2?"":e:t(r)}},2814:(r,e,o)=>{var t=o(7854),n=o(7293),a=o(1702),s=o(1340),c=o(3111).trim,i=o(1361),u=a("".charAt),l=t.parseFloat,p=t.Symbol,g=p&&p.iterator,f=1/l(i+"-0")!==-1/0||g&&!n((function(){l(Object(g))}));r.exports=f?function(r){var e=c(s(r)),o=l(e);return 0===o&&"-"==u(e,0)?-0:o}:l},3009:(r,e,o)=>{var t=o(7854),n=o(7293),a=o(1702),s=o(1340),c=o(3111).trim,i=o(1361),u=t.parseInt,l=t.Symbol,p=l&&l.iterator,g=/^[+-]?0x/i,f=a(g.exec),v=8!==u(i+"08")||22!==u(i+"0x16")||p&&!n((function(){u(Object(p))}));r.exports=v?function(r,e){var o=c(s(r));return u(o,e>>>0||(f(g,o)?16:10))}:u},2626:(r,e,o)=>{var t=o(3070).f;r.exports=function(r,e,o){o in r||t(r,o,{configurable:!0,get:function(){return e[o]},set:function(r){e[o]=r}})}},3111:(r,e,o)=>{var t=o(1702),n=o(4488),a=o(1340),s=o(1361),c=t("".replace),i="["+s+"]",u=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),p=function(r){return function(e){var o=a(n(e));return 1&r&&(o=c(o,u,"")),2&r&&(o=c(o,l,"")),o}};r.exports={start:p(1),end:p(2),trim:p(3)}},1361:r=>{r.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9191:(r,e,o)=>{"use strict";var t=o(5005),n=o(2597),a=o(8880),s=o(7976),c=o(7674),i=o(9920),u=o(2626),l=o(9587),p=o(6277),g=o(8340),f=o(7741),v=o(2914),m=o(9781),d=o(1913);r.exports=function(r,e,o,b){var y="stackTraceLimit",h=b?2:1,I=r.split("."),k=I[I.length-1],P=t.apply(null,I);if(P){var E=P.prototype;if(!d&&n(E,"cause")&&delete E.cause,!o)return P;var C=t("Error"),Y=e((function(r,e){var o=p(b?e:r,void 0),t=b?new P(r):new P;return void 0!==o&&a(t,"message",o),v&&a(t,"stack",f(t.stack,2)),this&&s(E,this)&&l(t,this,Y),arguments.length>h&&g(t,arguments[h]),t}));if(Y.prototype=E,"Error"!==k?c?c(Y,C):i(Y,C,{name:!0}):m&&y in P&&(u(Y,P,y),u(Y,P,"prepareStackTrace")),i(Y,P),!d)try{E.name!==k&&a(E,"name",k),E.constructor=Y}catch(A){}return Y}}},1703:(r,e,o)=>{var t=o(2109),n=o(7854),a=o(2104),s=o(9191),c="WebAssembly",i=n[c],u=7!==Error("e",{cause:7}).cause,l=function(r,e){var o={};o[r]=s(r,e,u),t({global:!0,constructor:!0,arity:1,forced:u},o)},p=function(r,e){if(i&&i[r]){var o={};o[r]=s(c+"."+r,e,u),t({target:c,stat:!0,constructor:!0,arity:1,forced:u},o)}};l("Error",(function(r){return function(e){return a(r,this,arguments)}})),l("EvalError",(function(r){return function(e){return a(r,this,arguments)}})),l("RangeError",(function(r){return function(e){return a(r,this,arguments)}})),l("ReferenceError",(function(r){return function(e){return a(r,this,arguments)}})),l("SyntaxError",(function(r){return function(e){return a(r,this,arguments)}})),l("TypeError",(function(r){return function(e){return a(r,this,arguments)}})),l("URIError",(function(r){return function(e){return a(r,this,arguments)}})),p("CompileError",(function(r){return function(e){return a(r,this,arguments)}})),p("LinkError",(function(r){return function(e){return a(r,this,arguments)}})),p("RuntimeError",(function(r){return function(e){return a(r,this,arguments)}}))},6647:(r,e,o)=>{var t=o(8052),n=o(7762),a=Error.prototype;a.toString!==n&&t(a,"toString",n)},8862:(r,e,o)=>{var t=o(2109),n=o(5005),a=o(2104),s=o(6916),c=o(1702),i=o(7293),u=o(3157),l=o(614),p=o(111),g=o(2190),f=o(206),v=o(133),m=n("JSON","stringify"),d=c(/./.exec),b=c("".charAt),y=c("".charCodeAt),h=c("".replace),I=c(1..toString),k=/[\uD800-\uDFFF]/g,P=/^[\uD800-\uDBFF]$/,E=/^[\uDC00-\uDFFF]$/,C=!v||i((function(){var r=n("Symbol")();return"[null]"!=m([r])||"{}"!=m({a:r})||"{}"!=m(Object(r))})),Y=i((function(){return'"\\udf06\\ud834"'!==m("\udf06\ud834")||'"\\udead"'!==m("\udead")})),A=function(r,e){var o=f(arguments),t=e;if((p(e)||void 0!==r)&&!g(r))return u(e)||(e=function(r,e){if(l(t)&&(e=s(t,this,r,e)),!g(e))return e}),o[1]=e,a(m,null,o)},w=function(r,e,o){var t=b(o,e-1),n=b(o,e+1);return d(P,r)&&!d(E,n)||d(E,r)&&!d(P,t)?"\\u"+I(y(r,0),16):r};m&&t({target:"JSON",stat:!0,arity:3,forced:C||Y},{stringify:function(r,e,o){var t=f(arguments),n=a(C?A:m,null,t);return Y&&"string"==typeof n?h(n,k,w):n}})},9070:(r,e,o)=>{var t=o(2109),n=o(9781),a=o(3070).f;t({target:"Object",stat:!0,forced:Object.defineProperty!==a,sham:!n},{defineProperty:a})},4678:(r,e,o)=>{var t=o(2109),n=o(2814);t({global:!0,forced:parseFloat!=n},{parseFloat:n})},1058:(r,e,o)=>{var t=o(2109),n=o(3009);t({global:!0,forced:parseInt!=n},{parseInt:n})},3422:(r,e,o)=>{"use strict";o.d(e,{y:()=>s});o(1703),o(6647);function t(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}o(9070);function n(r,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function a(r,e,o){return e&&n(r.prototype,e),o&&n(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}o(1058),o(4678),o(8862);var s=function(){function r(){t(this,r)}return a(r,[{key:"calcNELA",value:function(r){var e=this.NELADATACHECK(r);if(!e.err){var o=parseInt(r.creatinine)+1,t=Math.log(o);t>6&&(t=6),t<3.3&&(t=3.3);var n=-.3093507*(t-4),a=.2428102*Math.pow(t-4,2);t=n+a;var s=parseInt(r.sodium);s>148&&(s=148),s<124&&(s=124);var c=-7271e-7*Math.pow(s-123,3),i=2304e-7*Math.pow(s-123,3)*Math.log(s-123);s=c+i;var u=parseInt(r.bp);u>190&&(u=190),u<70&&(u=70);var l=-.0090343*(u-127),p=1137e-7*Math.pow(u-127,2);u=l+p;var g=parseInt(r.pulse);g>145&&(g=145),g<55&&(g=55);var f=.0132113*(g-91),v=-1264e-7*Math.pow(g-91,2);g=f+v;var m=parseFloat(r.wcc);m>42.7&&(m=42.7),m<1&&(m=1);var d=-.0072917*(m-13),b=.0013263*Math.pow(m-13,2);m=d+b;var y=parseFloat(r.urea);y=Math.log(y),y>3.7&&(y=3.7),y<0&&(y=0);var h=.4227387*(y-1.9),I=-.0542346*Math.pow(y-1.9,2);y=h+I;var k=parseFloat(r.potassium);k>5.9&&(k=5.9),k<2.8&&(k=2.8);var P=-.0994759*(k-4),E=.1699467*Math.pow(k-4,2);k=P+E;var C=1,Y=0,A=0;switch(parseInt(r.asa)){case 1:A=1,2==parseInt(r.respiratory)&&(Y=.5395227),parseInt(r.respiratory)>3&&(Y=1.2601628);break;case 2:A=2,2==parseInt(r.respiratory)&&(Y=.5395227),parseInt(r.respiratory)>3&&(Y=1.2601628);break;case 4:A=3,2==parseInt(r.respiratory)&&(Y=.3587618),parseInt(r.respiratory)>3&&(Y=.7164019);break;case 8:A=4,2==parseInt(r.respiratory)&&(Y=.22382020000000002),parseInt(r.respiratory)>3&&(Y=.3913588);break;case 16:A=5,2==parseInt(r.respiratory)&&(Y=.2382305),parseInt(r.respiratory)>3&&(Y=.35495960000000004);break}var w=0,S=0;switch(C=0,A){case 3:w=-.0235901,S=-1441e-7,C=1.0573609;break;case 4:w=-.0276586,S=669e-7,C=1.854601;break;case 5:w=-.0337041,S=25e-5,C=2.6489194;break}var x=(.0572932+w)*(parseInt(r.age)-64),M=(1274e-7+S)*Math.pow(parseInt(r.age)-64,2),O=x+M,D=0;1==parseInt(r.gender)&&(D=.0280548);var N=0;switch(parseInt(r.cardiac)){case 2:N=.1054722;break;case 4:N=.2655433;break;case 8:N=.3017798;break}var F=0;switch(parseInt(r.cepod)){case 2:F=-.0617987;break;case 4:F=.0787992;break;case 8:F=.4708663;break}var R=0;switch(parseInt(r.ecg)){case 2:R=.3375291;break;case 4:R=.1411111;break}var T=0;switch(parseInt(r.number)){case 2:T=-.2888454;break;case 4:T=-.1316191;break}var U=0;8==parseInt(r.severity)&&(U=.2043578);var B=0;switch(parseInt(r.blood)){case 2:B=.0563362;break;case 4:B=.3148512;break;case 8:B=-.0278452;break}var L=0;switch(parseInt(r.soiling)){case 2:L=.1727508;break;case 4:L=-.083714;break;case 8:L=.4387634;break}var G=0;switch(parseInt(r.cancer)){case 2:G=.0332072;break;case 4:G=.3666088;break;case 8:G=.9988459;break}var j=0;switch(parseInt(r.gcs)){case 2:j=.6355512;break;case 4:j=.7842625;break}console.log("`ASA("+A+"):` "+C),console.log("`AGE("+parseInt(r.age)+"):` "+O),console.log("`GENDER`: "+D),console.log("`CARDIAC:` "+N),console.log("`RESP:` "+Y),console.log("`ECG:` "+R),console.log("`BP:` "+u),console.log("`PULSE:` "+g),console.log("`HB:` "+r.hb),console.log("`WCC:` "+m),console.log("`UREA:` "+y),console.log("`SODIUM:` "+s),console.log("`POTASSIUM:` "+k),console.log("`GCS:` "+j),console.log("`SEVERITY:` "+U),console.log("`NUMBER:` "+T),console.log("`BLOOD:` "+B),console.log("`SOILING:` "+L),console.log("`CANCER:` "+G),console.log("`CEPOD:` "+F),console.log("`CREATININE:` "+t),console.log("NELA year 2 factor: -0.0388465");var W=-4.3488269+C+O+D+N+Y+R+u+g+m+y+s+k+j+U+T+B+L+G+F+t;W=Math.exp(W),W/=1+W;var H=W;return H=Math.round(1e3*H)/10,console.log("mortality: "+H),{mortality:H,error:{state:!1,message:"PASSED"}}}console.log("TODO")}},{key:"NELADATACHECK",value:function(r){var e=!1,o="";return console.log(r.age),void 0===r.age||""===r.age?(o="You forgot to enter an age",e=!0,{erm:o,err:e}):parseInt(r.age)?parseInt(r.age)<18?(console.log("Age <18"),o="The NELA calculator is not validated in patients under 18 years of age. A risk calculation cannot be performed.",e=!0,{erm:o,err:e}):parseInt(r.age)>105?(console.log("Age >105"),o="The NELA calculator is not validated in patients aged over 105 years. A risk calculation cannot be performed.",e=!0,{erm:o,err:e}):void 0===r.asa||""===r.asa?(o="You forgot to enter an ASA grade",e=!0,{erm:o,err:e}):void 0===r.gender||""===r.gender?(o="You forgot to enter a gender",e=!0,{erm:o,err:e}):void 0===r.cardiac||""===r.cardiac?(console.log("You forgot to enter cardiac data"),o="You forgot to enter cardiac data",e=!0,{erm:o,err:e}):void 0===r.respiratory||""===r.respiratory?(console.log("You forgot to enter respiratory data"),o="You forgot to enter respiratory data",e=!0,{erm:o,err:e}):void 0===r.ecg||""===r.ecg?(console.log("You forgot to enter ECG data"),o="You forgot to enter ECG data",e=!0,{erm:o,err:e}):void 0===r.bp||""===r.bp?(console.log("You forgot to enter BP data"),o="You forgot to enter BP data",e=!0,{erm:o,err:e}):parseInt(r.bp)?parseInt(r.bp)<0?(o="Blood pressure cannot be negative",e=!0,{erm:o,err:e}):void 0===r.pulse||""===r.pulse?(console.log("You forgot to enter pulse rate data"),o="You forgot to enter pulse rate data",e=!0,{erm:o,err:e}):parseInt(r.pulse)?parseInt(r.pulse)<0?(o="Pulse cannot be negative",e=!0,{erm:o,err:e}):void 0===r.wcc||""===r.wcc?(console.log("You forgot to enter WCC data"),o="You forgot to enter White Cell Count data",e=!0,{erm:o,err:e}):parseInt(r.wcc)?parseInt(r.wcc)<0?(o="White Cell Count cannot be negative",e=!0,{erm:o,err:e}):void 0===r.urea||""===r.urea?(console.log("You forgot to enter urea concentration"),o="You forgot to enter urea concentration",e=!0,{erm:o,err:e}):parseInt(r.urea)?parseInt(r.urea)<0?(o="Urea cannot be negative",e=!0,{erm:o,err:e}):void 0===r.creatinine||""===r.creatinine?(o="You forgot to enter a creatinine",e=!0,{erm:o,err:e}):parseInt(r.creatinine)?parseInt(r.creatinine)<0?(o="Creatinine cannot be negative",e=!0,{erm:o,err:e}):void 0===r.sodium||""===r.sodium?(console.log("You forgot to enter sodium concentration"),o="You forgot to enter sodium concentration",e=!0,{erm:o,err:e}):parseInt(r.sodium)?parseInt(r.sodium)<0?(o="Sodium cannot be negative",e=!0,{erm:o,err:e}):void 0===r.potassium||""===r.potassium?(console.log("You forgot to enter potassium concentration"),o="You forgot to enter potassium concentration",e=!0,{erm:o,err:e}):parseInt(r.potassium)?parseInt(r.potassium)<0?(o="Potassium cannot be negative",e=!0,{erm:o,err:e}):void 0===r.gcs||""===r.gcs?(console.log("You forgot to enter the patient's GCS"),o="You forgot to enter the patient's GCS",e=!0,{erm:o,err:e}):void 0===r.severity||""===r.severity?(console.log("You forgot to enter the operative severity"),o="You forgot to enter the operative severity",e=!0,{erm:o,err:e}):void 0===r.number||""===r.number?(console.log("You forgot to enter the number of procedures"),o="You forgot to enter the number of procedures",e=!0,{erm:o,err:e}):void 0===r.blood||""===r.blood?(console.log("You forgot to enter the blood loss"),o="You forgot to enter the blood loss",e=!0,{erm:o,err:e}):void 0===r.soiling||""===r.soiling?(console.log("You forgot to enter degree of soiling"),o="You forgot to enter degree of soiling",e=!0,{erm:o,err:e}):void 0===r.cancer||""===r.cancer?(console.log("You forgot to enter the cancer status"),o="You forgot to enter the cancer status",e=!0,{erm:o,err:e}):void 0===r.cepod||""===r.cepod?(console.log("You forgot to enter the urgency of surgery"),o="You forgot to enter the urgency of surgery",e=!0,{erm:o,err:e}):{erm:o,err:e}:(o="Potassium is not a number",e=!0,{erm:o,err:e}):(o="Sodium is not a number",e=!0,{erm:o,err:e}):(o="Creatinine is not a number",e=!0,{erm:o,err:e}):(o="Urea is not a number",e=!0,{erm:o,err:e}):(o="White Cell Count is not a number",e=!0,{erm:o,err:e}):(o="Pulse is not a number",e=!0,{erm:o,err:e}):(o="Blood pressure is not a number",e=!0,{erm:o,err:e}):(o="Age is not a number",e=!0,{erm:o,err:e})}},{key:"ppcalc",value:function(r,e){console.log(JSON.stringify(r));var o=0,t=0;e?(o=r.age+r.cardiac+r.respiratory+r.ecg+r.bp+r.pulse+r.gcs+r.hb+r.wcc+r.urea+r.sodium+r.potassium,t=r.severity+r.number+r.blood+r.soiling+r.cancer+r.cepod):(o=this.PPossumAge(parseInt(r.age,10))+parseInt(r.cardiac,10)+parseInt(r.respiratory,10)+parseInt(r.ecg,10)+this.PPossumBP(parseInt(r.bp,10))+this.PPossumPulse(parseInt(r.pulse,10))+parseInt(r.gcs,10)+parseInt(r.hb,10)+this.PPossumWCC(parseInt(r.wcc,10))+this.PPossumUrea(parseInt(r.urea,10))+this.PPossumSodium(parseInt(r.sodium,10))+this.PPossumPotassium(parseInt(r.potassium,10)),t=parseInt(r.severity,10)+parseInt(r.number,10)+parseInt(r.blood,10)+parseInt(r.soiling,10)+parseInt(r.cancer,10)+this.PPossumUrgency(parseInt(r.cepod,10))),console.log("physiology score = "+o),console.log("operative score = "+t);var n=1/(1+1/Math.exp(.16*o-5.91+.19*t));n=Math.round(1e3*n)/10,console.log("morbidity = "+n+"%");var a=1/(1+1/Math.exp(.1692*o-9.065+.155*t));return a=Math.round(1e3*a)/10,console.log("mortality = "+a+"%"),console.log("morbidity: "+n),console.log("mortality: "+a),{morbidity:n,mortality:a}}},{key:"PPossumAge",value:function(r){return r<61?1:r>=61&&r<=70?2:4}},{key:"PPossumBP",value:function(r){return r<90?8:r<100?4:r<110?2:r<=130?1:r<=170?2:4}},{key:"PPossumPulse",value:function(r){return r<40?8:r<50?2:r<=80?1:r<=100?2:r<=120?4:8}},{key:"PPossumWCC",value:function(r){return r<=3?4:r<=4?2:r<=10?1:r<=20?2:4}},{key:"PPossumUrea",value:function(r){return r<=7.5?1:r<=10?2:r<=15?4:8}},{key:"PPossumSodium",value:function(r){return r<=125?8:r<=130?4:r<=135?2:1}},{key:"PPossumPotassium",value:function(r){return r<=2.8?8:r<=3.1?4:r<=3.4?2:r<=5?1:r<=5.3?2:r<=5.9?4:8}},{key:"PPossumGCS",value:function(r){return r<=8?8:r<=11?4:r<=14?2:1}},{key:"PPossumUrgency",value:function(r){return 8==r?8:4}}]),r}()}}]);
//# sourceMappingURL=422.bb8c823e.js.map