!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.flowcomponent=t():e.flowcomponent=t()}(this,(()=>(()=>{"use strict";var e,t={d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};function r(e,t){switch(e){case"'":case'"':return[e,t+1];default:return[void 0,t]}}function n(e,t){if(null!=e)return e[t]}function u(e,t){let o=t;const u=e.length;let a,s="",c=!1;for(var l=0;l<u;l++){let t=e[l];if(c)a==t||"]"==t&&!a?(a&&l++,o=n(o,s),s="",c=!1):s+=t;else switch(t){case".":s&&(o=n(o,s)),s="";break;case"[":s&&(o=n(o,s)),s="",[a,l]=r(e[l+1],l),c=!0;break;default:s+=t}}return s&&(o=n(o,s)),o}t.r(o),t.d(o,{default:()=>s}),e={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0},Object.keys(e);const a=function(e,t){switch(e.type){case"boolean":return"true"==e.value;case"input":return u(e.value,t.input);case"context":return u(e.value,t.context);case"output":return u(e.value,t.output);case"number":return Number(e.value);case"string":case"enum":return e.value;case"literal":return function(e,t){const o=t,r=Object.create(null),n=Object.keys(t),u=n.map((e=>o[e]?o[e]:void 0));let a=`return \`${e}\`;`;return new Function("window","global","globalThis",...n,"document","XMLHttpRequest","fetch","setInterval","navigator",a).apply(r,[r,r,r,...u,void 0,void 0,void 0,void 0,void 0])}(e.value,t);case"notSet":return}},s=e=>{const t=e.flow.getServer();if(!t)throw new Error("apiOutput can not execute on environments without server");const{statusCode:o,headers:r,body:n}=e.props,u=Number(e.flow.evalGet(o,a));if(!u)throw new Error("apiOutput status must be a positive number");let s,c;r&&(s=Object.keys(r).reduce(((t,o)=>{const n=e.flow.evalGet(r[o],a);return void 0===n||(t[o]=n.toString()),t}),{})),n&&(c=e.flow.evalGet(n,a)),t.writeResponse({statusCode:u,body:c,headers:s}),e.flow.next()};return o})()));