!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.flowcomponent=t():e.flowcomponent=t()}(this,(()=>(()=>{"use strict";var e,t={d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{default:()=>v}),e={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0},Object.keys(e);const o="context",n="output";function u(e,t){switch(e){case"'":case'"':return[e,t+1];default:return[void 0,t]}}function a(e,t){if(null!=e)return e[t]}function c(e,t){let r=t;const o=e.length;let n,c="",l=!1;for(var s=0;s<o;s++){let t=e[s];if(l)n==t||"]"==t&&!n?(n&&s++,r=a(r,c),c="",l=!1):c+=t;else switch(t){case".":c&&(r=a(r,c)),c="";break;case"[":c&&(r=a(r,c)),c="",[n,s]=u(e[s+1],s),l=!0;break;default:c+=t}}return c&&(r=a(r,c)),r}const l=function(e,t){switch(e.type){case"boolean":return"true"==e.value;case"input":return c(e.value,t.input);case o:return c(e.value,t.context);case n:return c(e.value,t.output);case"number":return Number(e.value);case"string":return e.value;case"literal":return function(e,t){const r=t,o=Object.create(null),n=Object.keys(t),u=n.map((e=>r[e]?r[e]:void 0));let a=`return \`${e}\`;`;return new Function("window","global","globalThis",...n,"document","XMLHttpRequest","fetch","setInterval","navigator",a).apply(o,[o,o,o,...u,void 0,void 0,void 0,void 0,void 0])}(e.value,t);case"notSet":return;case"enum":return e.value}};function s(e,t){switch(e){case"'":case'"':return[e,t+1];default:return[void 0,t]}}function i(e,t,r){if("other"==r.type){if("object"!=typeof e)return;return e[t]=r.value}let o=e[t];return void 0!==o?o:e[t]="array"==r.type?[]:{}}function f(e,t){switch(e[t]){case'"':case"'":return"object";default:return"array"}}function p(e,t,r){let o=r;const n=e.length;let u,a="",c=!1;for(var l=0;l<n;l++){let r=e[l];if(c)if(u==r||"]"==r&&!u){let r;switch(u&&l++,e[l+1]){case"[":r={type:f(e,l+2)};break;case".":r={type:"object"};break;case void 0:r={type:"other",value:t};break;default:throw new Error("unexpected set msg")}o=i(o,a,r),a="",c=!1}else a+=r;else switch(r){case".":a&&(o=i(o,a,{type:"object"})),a="";break;case"[":a&&(o=i(o,a,{type:f(e,l+1)})),a="",[u,l]=s(e[l+1],l),c=!0;break;default:a+=r}}return a&&(o=i(o,a,{type:"other",value:t})),o}const d=function(e,t,r){switch(e.type){case o:if(null==t)return;p(e.value,t,r.context);break;case n:r.output=r.output||{},e.value?p(e.value,t,r.output):Object.keys(t).forEach((e=>r.output[e]=t[e]))}},v=async e=>{if(e.flow.getServer())throw new Error("serviceCall can not YET execute on server environments");const t=e.flow.getClient();if(!t)throw new Error("serviceCall can not execute on environments without client");const{headers:r,body:o,responseField:n}=e.props,u=e.flow.evalGet(e.props.url,l),a=e.flow.evalGet(e.props.method,l).toLowerCase(),c=o?e.flow.evalGet(o,l):void 0;let s;switch(r&&(s=Object.keys(r).reduce(((t,o)=>{const n=e.flow.evalGet(r[o],l);return void 0===n||(t[o]=n.toString()),t}),{})),a){default:throw new Error("unsupported serviceCall method: "+a);case"get":case"post":}const i=await t.request({method:a,url:u,headers:s,queryString:void 0,body:c});n&&e.flow.evalSet(n,i,d),e.flow.next()};return r})()));