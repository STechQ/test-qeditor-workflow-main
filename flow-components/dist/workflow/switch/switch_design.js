/*! For license information please see switch_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.flowcomponent=t(require("react")):e.flowcomponent=t(e.react)}(this,(e=>(()=>{var t={6094:(e,t,s)=>{"use strict";var a=s(8156),l=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,s){var a,i={},c=null,u=null;for(a in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)n.call(t,a)&&!o.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:l,type:e,key:c,ref:u,props:i,_owner:r.current}}t.jsx=i,t.jsxs=i},4512:(e,t,s)=>{"use strict";e.exports=s(6094)},9651:(e,t,s)=>{"use strict";s.d(t,{default:()=>m});var a=s(4512),l=s(8156),n=s(5685),r=s.n(n);s.p;const o=({label:e,isKeepOpen:t=!1,onAddButton:s,children:n})=>{const[r,o]=(0,l.useState)(!0);return(0,a.jsxs)("div",{className:"variables ",children:[(0,a.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,a.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!r),children:[!t&&(0,a.jsx)("i",{className:"mdi "+(r?"mdi-chevron-down":"mdi-chevron-right")}),(0,a.jsx)("p",{children:e})]}),s&&(0,a.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),s()}})]}),(t||r)&&(0,a.jsx)("ul",{className:"variable-list",children:n})]})},i=(s.p,({label:e,className:t,value:s,disabled:l,onChange:n})=>(0,a.jsxs)("div",{className:r()("switch-flow",t),children:[e&&(0,a.jsx)("label",{className:"switch-text",children:e}),(0,a.jsxs)("label",{className:"switch",children:[(0,a.jsx)("input",{type:"checkbox",className:"w-100",checked:s,disabled:l,onChange:e=>{n(e.target.checked)}}),(0,a.jsx)("span",{className:"slider round"})]})]}));function c(e,t){(0,l.useEffect)((()=>{const s=s=>{const a=null==e?void 0:e.current;a&&!a.contains((null==s?void 0:s.target)||null)&&t(s)};return document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}}),[e,t])}s.p;const u=({label:e,options:t=[],className:s,placeholder:n,value:r,disabled:o,onChange:i})=>{const[u,p]=(0,l.useState)(!1),[d,v]=(0,l.useState)(r),[f,m]=(0,l.useState)([]),h=(0,l.useRef)(null);return c(h,(()=>p(!1))),(0,l.useEffect)((()=>{const e=f.find((e=>e.value===r));e?v(e.name):r||v("")}),[r,f]),(0,l.useEffect)((()=>{m(t)}),[t]),(0,a.jsxs)("div",{className:`select-flow position-relative ${s||""}`,children:[e&&(0,a.jsx)("label",{className:"d-block ellipsis-text p-0",children:e}),(0,a.jsxs)("div",{ref:h,children:[(0,a.jsxs)("div",{className:"input",onClick:()=>{o||p(!u)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,a.jsx)("input",{className:"w-100 ellipsis-text",placeholder:n,value:d,onChange:()=>{}}),(0,a.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,a.jsx)("div",{className:"options",style:{display:u?"block":"none",pointerEvents:o?"none":"all"},children:(0,a.jsx)("ul",{children:t.map((e=>(0,a.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>e.value!=d?(e=>{i(e.value),p(!1)})(e):p(!1),children:e.name},e.value)))})})]})]})},p=(s.p,s.p,({label:e,className:t,placeholder:s,value:n,disabled:r,isDigit:o=!1,onChange:i,onBlur:c})=>{const[u,p]=(0,l.useState)(n);return(0,l.useEffect)((()=>{p(n)}),[n]),(0,a.jsxs)("div",{className:`input-flow ${t||""}`,children:[e&&(0,a.jsx)("label",{className:"d-block p-0",children:e}),(0,a.jsx)("input",{className:"w-100",placeholder:s,value:u,onChange:e=>{o&&!new RegExp(/^\d+$/).test(e.target.value)||(null==i||i(e),p(e.target.value))},onBlur:c,disabled:r})]})}),d=({label:e,className:t,types:s,expression:n,constantsOptions:r,onChange:o,onBlur:i})=>{const[c,d]=(0,l.useState)([]),[v,f]=(0,l.useState)(s[0]),[m,h]=(0,l.useState)("");return(0,l.useEffect)((()=>{f(n.type),h(n.value)}),[n]),(0,l.useEffect)((()=>{d(s.map((e=>({name:e,value:e}))))}),[s]),(0,a.jsxs)("div",{className:`expression-flow ${t||""}`,children:[(0,a.jsx)(u,{label:e,options:c,value:v,onChange:e=>{null==o||o({value:"",type:e}),null==i||i({value:m,type:e})}}),"constant"===v?(0,a.jsx)(u,{options:r||[],value:m,onChange:e=>{null==o||o({type:v,value:e}),null==i||i({type:v,value:e}),h(e)}}):(0,a.jsx)(p,{className:"mt-2",value:m,onChange:e=>{null==o||o({type:v,value:e.target.value}),h(e.target.value)},onBlur:e=>null==i?void 0:i({type:v,value:e.target.value})})]})},v=(s.p,e=>{var t;const[s,n]=(0,l.useState)(!1),r=(0,l.useRef)(null);return c(r,(()=>n(!1))),(0,a.jsxs)("div",{className:"dropdown-flow",ref:r,children:[(0,a.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),n(!s)},children:e.iconClass&&(0,a.jsx)("i",{className:e.iconClass})}),(0,a.jsx)("ul",{className:"py-3",style:{display:s?"block":"none"},children:null===(t=e.options)||void 0===t?void 0:t.map((e=>(0,a.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:t=>{n(!1),e.onClick(t)},children:e.name},e.name)))})]})});function f(e){return{vType:"case",v:{left:{vType:"variable",v:{type:"string",value:""}},operator:"eq",right:{vType:"variable",v:{type:"string",value:""}}},props:{name:`Case ${e}`,_name:`case${e}`}}}const m={name:"switch",panelLabel:"Decision",version:"0.8",color:"#9C27B0",icon:"mdi-rhombus-outline",inputs:[{name:"_"}],outputs:()=>["1","2"],defaultProps:()=>({label:{type:"string",value:"Decision"},type:"switch",name:"switch",description:"Decision",cases:{1:{props:{name:"Default",_name:"default"}},2:f(2)}}),editSection:e=>()=>{const[t,s]=(0,l.useState)(e.propValues.cases),[n,c]=(0,l.useState)(!1),[p,m]=(0,l.useState)("variable"),[h,b]=(0,l.useState)("variable"),[y,x]=(0,l.useState)("eq"),[g,j]=(0,l.useState)({type:"string",value:""}),[N,S]=(0,l.useState)({type:"string",value:""}),[k,w]=(0,l.useState)(void 0),[C,O]=(0,l.useState)(void 0),E=(e,t)=>{let s=0;const a=e=>{if(s.toString()===t)return e;if("case"===e.vType){s++;return a(e.v.left)||(s++,a(e.v.right))}};return a(e)};(0,l.useEffect)((()=>{var t,s;const a=null===(s=(t=e.callbacks).selectedSwitchCase)||void 0===s?void 0:s.call(t,(e=>{T(e)}));T(a)}),[]);const T=e=>{if(e&&(O(e.caseId),w(e.id),e.id&&e.case)){const t=E(e.case,e.id);t&&"case"===t.vType&&(c(t.negation||!1),m(t.v.left.vType),b(t.v.right.vType),x(t.v.operator),j(t.v.left.v),S(t.v.right.v))}};(0,l.useEffect)((()=>{s(e.propValues.cases)}),[e.propValues.cases]);const _=["case","variable"].map((e=>({name:e,value:e}))),P=(e,s)=>{const a=JSON.parse(JSON.stringify(t)),l=E(a[C],k);if(l&&"case"===l.vType){switch(e){case"negation":l.negation=s;break;case"leftvType":l.v.left.vType=s,"variable"===s?l.v.left.v={type:"string",value:""}:l.v.left=f(1);break;case"rightvType":l.v.right.vType=s,"variable"===s?l.v.right.v={type:"string",value:""}:l.v.right=f(2);break;case"left":l.v.left.v=s;break;case"right":l.v.right.v=s;break;case"operator":l.v.operator=s}L(a)}},L=t=>{var a,l;e.callbacks.setProp("cases",t),s(t),null===(l=(a=e.callbacks).setSwitchArea)||void 0===l||l.call(a,{case:t[C],caseId:C})},I=["&& And","|| Or","== Equals","!= Not Equal","Includes","Not Include","> Greater Than",">= Greater Than and Equal","< Less Than","<= Less Than and Equal"],R=["and","or","eq","ne","in","nin","gt","gte","lt","lte"].map(((e,t)=>({name:I[t],value:e}))),{ExpressionComp:B}=e.react,[D,$]=(0,l.useState)(e.propValues.label||{type:"string",value:"Switch"});return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"px-3",children:[(0,a.jsx)("label",{children:"Label"}),(0,a.jsx)(B,{types:["input","context","output","number","string"],expression:D,onChange:t=>{$(t),e.callbacks.setProp("label",t)}})]}),C&&k?(0,a.jsxs)(o,{label:"PROPERTIES",children:[(0,a.jsx)(i,{className:"w-100",label:"Negation",value:n,onChange:e=>{c(e),P("negation",e)}}),(0,a.jsx)(u,{className:"mt-3",label:"Left",value:p,onChange:e=>{m(e),P("leftvType",e)},options:_}),"variable"===p&&(0,a.jsx)(d,{className:"mt-3",expression:g,onBlur:e=>{j(e),P("left",e)},types:["string","number","boolean","context","input","output"]}),(0,a.jsx)(u,{className:"mt-3",label:"Operator",value:y,onChange:e=>{x(e),P("operator",e)},options:R}),(0,a.jsx)(u,{className:"mt-3",label:"Right",value:h,onChange:e=>{b(e),P("rightvType",e)},options:_}),"variable"===h&&(0,a.jsx)(d,{className:"mt-3",expression:N,onBlur:e=>{S(e),P("right",e)},types:["string","number","boolean","context","input","output"]})]}):(0,a.jsx)(o,{label:"CASES",onAddButton:()=>{let s=JSON.parse(JSON.stringify(t));const a=(Math.max(...Object.keys(s).map((e=>parseInt(e))))+1).toString(),l={[a]:f(parseInt(a))};s={...s,...l},e.callbacks.setOutputs(Object.keys(s).map((e=>e.toString()))),L(s)},children:Object.keys(t||{}).filter(((e,t)=>0!==t)).map(((s,l)=>(0,a.jsxs)("li",{className:r()("d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer",{"vertical-line":Object.keys(t||{}).length-1!==l}),onClick:()=>((t,s)=>{var a,l;O(s),null===(l=(a=e.callbacks).setSwitchArea)||void 0===l||l.call(a,{case:t,caseId:s})})(t[s],s),children:[(0,a.jsx)("p",{className:"m-0",children:`Case ${s}`}),(0,a.jsx)(v,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:a=>{a.preventDefault(),a.stopPropagation(),(s=>{let a=JSON.parse(JSON.stringify(t));delete a[s],e.callbacks.setOutputs(Object.keys(a).map((e=>e.toString()))),L(a)})(s)}}]})]},`item${l}`)))})]})}}},8156:t=>{"use strict";t.exports=e},5685:(e,t)=>{var s;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=r(e,n(s)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)a.call(e,s)&&e[s]&&(t=r(t,s));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(s=function(){return l}.apply(t,[]))||(e.exports=s)}()}},s={};function a(e){var l=s[e];if(void 0!==l)return l.exports;var n=s[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var l={};return(()=>{"use strict";a.r(l),a.d(l,{default:()=>e.default});var e=a(9651)})(),l})()));