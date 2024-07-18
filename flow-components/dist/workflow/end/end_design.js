/*! For license information please see end_design.js.LICENSE.txt */
!function(e,l){"object"==typeof exports&&"object"==typeof module?module.exports=l(require("react")):"function"==typeof define&&define.amd?define(["react"],l):"object"==typeof exports?exports.flowcomponent=l(require("react")):e.flowcomponent=l(e.react)}(this,(e=>(()=>{var l={6094:(e,l,n)=>{"use strict";var s=n(8156),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,l,n){var s,o={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==l.key&&(c=""+l.key),void 0!==l.ref&&(d=l.ref),l)i.call(l,s)&&!r.hasOwnProperty(s)&&(o[s]=l[s]);if(e&&e.defaultProps)for(s in l=e.defaultProps)void 0===o[s]&&(o[s]=l[s]);return{$$typeof:t,type:e,key:c,ref:d,props:o,_owner:a.current}}l.Fragment=o,l.jsx=c,l.jsxs=c},4512:(e,l,n)=>{"use strict";e.exports=n(6094)},8156:l=>{"use strict";l.exports=e},5685:(e,l)=>{var n;!function(){"use strict";var s={}.hasOwnProperty;function t(){for(var e="",l=0;l<arguments.length;l++){var n=arguments[l];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var l="";for(var n in e)s.call(e,n)&&e[n]&&(l=i(l,n));return l}function i(e,l){return l?e?e+" "+l:e+l:e}e.exports?(t.default=t,e.exports=t):void 0===(n=function(){return t}.apply(l,[]))||(e.exports=n)}()}},n={};function s(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return l[e](o,o.exports,s),o.exports}s.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return s.d(l,{a:l}),l},s.d=(e,l)=>{for(var n in l)s.o(l,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})},s.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var t={};return(()=>{"use strict";s.r(t),s.d(t,{default:()=>f});var e=s(4512),l=s(8156);s.p,s.p;const n=({label:n,isKeepOpen:s=!1,onAddButton:t,children:o})=>{const[i,a]=(0,l.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>a(!i),children:[!s&&(0,e.jsx)("i",{className:"mdi "+(i?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:n})]}),t&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),t()}})]}),(s||i)&&(0,e.jsx)("ul",{className:"variable-list",children:o})]})};var o=s(5685),i=s.n(o);s.p;const a=({isOpen:n,onClose:s,children:t,footer:o=[],title:a,type:r="dialog",position:c})=>{if(!n)return null;const[d,u]=(0,l.useState)({top:0}),p=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var e,l;if(c){const n=window.innerHeight>c.top+((null===(e=p.current)||void 0===e?void 0:e.clientHeight)||0)?c.top:window.innerHeight-((null===(l=p.current)||void 0===l?void 0:l.clientHeight)||0)-10;u({top:n})}}),[c]),(0,e.jsx)("div",{className:i()({overlay:"modal"===r}),children:(0,e.jsxs)("div",{ref:p,className:i()("dialog",{"dialog-monaco":"modal"==r}),style:d,children:["dialog"===r?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const l=p.current;if(!l)return;const n=l.getBoundingClientRect(),s=e.clientX-n.left,t=e=>{u({top:e.clientY,left:e.clientX-s})},o=()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",o)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:a}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:s,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:t}),o.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:o.map((e=>e))})]})})};function r(e,n){(0,l.useEffect)((()=>{const l=l=>{const s=null==e?void 0:e.current;s&&!s.contains((null==l?void 0:l.target)||null)&&n(l)};return document.addEventListener("mousedown",l),document.addEventListener("touchstart",l),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("touchstart",l)}}),[e,n])}s.p;const c=n=>{var s;const[t,o]=(0,l.useState)(!1),i=(0,l.useRef)(null);return r(i,(()=>o(!1))),(0,e.jsxs)("div",{className:"dropdown-flow",ref:i,children:[(0,e.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),o(!t)},children:n.iconClass&&(0,e.jsx)("i",{className:n.iconClass})}),(0,e.jsx)("ul",{className:"py-3",style:{display:t?"block":"none"},children:null===(s=n.options)||void 0===s?void 0:s.map((l=>(0,e.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:e=>{o(!1),l.onClick(e)},children:l.name},l.name)))})]})},d=({collapsibleLabel:s,fields:t,disabledFields:o=[],fieldLabel:i,dialogElements:r,emptyValues:d,isAddible:u=!0,isDeletable:p=!0,isCollabsible:m=!0,createItemLabel:v,dialogTitle:f,maxItemLen:h,onChange:x,validate:j,getFieldLabel:b})=>{const[y,g]=(0,l.useState)([]),[N,k]=(0,l.useState)(!1),[S,C]=(0,l.useState)(0),[w,E]=(0,l.useState)({top:0}),[O,L]=(0,l.useState)(!1),[_,$]=(0,l.useState)("");(0,l.useEffect)((()=>{const e=new Set(o.map((e=>JSON.stringify(e)))),l=t.filter((l=>!e.has(JSON.stringify(l))));g(l)}),[t]);const R=(e,l,n=!1)=>{E({top:e.pageY}),L(n),C(l),j&&$(j(y[l])),k(!0)},P=(e,l,n=i)=>{if(!e)return;if(n.includes(".")){const s=n.split(".").reduce(((e,l)=>e[l]),e);return Array.isArray(s)||"object"!=typeof s?s:s.value?`${s.type}.${s.value}`:`Variable ${l+1}`}const s=e?e[n]:e;return Array.isArray(s)||"object"!=typeof s?s:s.value?`${s.type}.${s.value}`:`Variable ${l+1}`},F=e=>{g(e),x(JSON.parse(JSON.stringify([...o,...e])))};function D(e,l){const n=[...y];((e,l,n)=>{const s=l.split("."),t=s.pop();s.reduce(((e,l)=>e[l]),e)[t]=n})(n[S],e,l),F(n),j&&$(j(n[S]))}const A=()=>{if(void 0!==h&&y.length>=h)return;const e=[...y];e.push(JSON.parse(JSON.stringify(d))),F(e)},I=(e,l)=>{var n;const s=null===(n={true:o,false:y}[O.toString()])||void 0===n?void 0:n[S];return{Expression:{expression:(null==s?void 0:s[l])||{type:"string",value:""},onBlur:e=>{D(l,e)}},Checkbox:{checked:P(s,0,l)||!1,onChange:e=>{D(l,e.target.checked)}},Select:{value:P(s,0,l)||"",onChange:e=>{D(l,e)}},Input:{value:P(s,0,l)||"",onBlur:e=>{D(l,e.target.value)}},MultiSelect:{values:P(s,0,l)||[],onChange:e=>{D(l,e)}}}[e]||{value:(null==s?void 0:s[l])||"",onChange:e=>{D(l,e)}}};return(0,e.jsx)(e.Fragment,{children:0==(null==y?void 0:y.length)&&0==o.length&&u?(0,e.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:A,children:[(0,e.jsx)("p",{children:v}),void 0===h||void 0!==h&&y.length<h?(0,e.jsx)("i",{className:"mdi mdi-plus"}):(0,e.jsx)(e.Fragment,{})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n,{label:s,isKeepOpen:!m,...(()=>{if(u&&!(void 0!==h&&y.length>=h))return{onAddButton:A}})(),children:[null==o?void 0:o.map(((l,n)=>(0,e.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${y.length-1!==n&&"vertical-line"}`,onClick:e=>R(e,n,!0),children:(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==b?void 0:b(l))||P(l,n)||`Variable ${n+1}`})},`item${n}`))),null==y?void 0:y.map(((l,n)=>(0,e.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${y.length-1!==n&&"vertical-line"}`,onClick:e=>R(e,n),children:[(0,e.jsx)("p",{className:"m-0 ellipsis-text",children:(null==b?void 0:b(l))||P(l,n)||`Variable ${n+1}`}),p&&(0,e.jsx)(c,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,l)=>{e.preventDefault(),e.stopPropagation(),F([...y].filter(((e,n)=>n!=l)))})(e,n)}}]})]},`item${n}`)))]}),(0,e.jsxs)(a,{isOpen:N,title:f,onClose:()=>(k(!1),void $("")),position:w,children:[(0,e.jsxs)("p",{style:{color:"red",display:""===_?"none":""},children:["$",_]}),r.map(((l,n)=>{var s,t;if((O||!l.isRendered||(null===(s=null==l?void 0:l.isRendered)||void 0===s?void 0:s.call(l,y[S])))&&(!O||!l.isRendered||(null===(t=null==l?void 0:l.isRendered)||void 0===t?void 0:t.call(l,o[S]))))return(0,e.jsx)(l.component,{...I(l.component.name,l.key),disabled:O,...l.props,children:l.children},l.key)}))]})]})})},u=(s.p,({label:n,options:s=[],className:t,placeholder:o,value:i,disabled:a,onChange:c})=>{const[d,u]=(0,l.useState)(!1),[p,m]=(0,l.useState)(i),[v,f]=(0,l.useState)([]),h=(0,l.useRef)(null);return r(h,(()=>u(!1))),(0,l.useEffect)((()=>{const e=v.find((e=>e.value===i));e?m(e.name):i||m("")}),[i,v]),(0,l.useEffect)((()=>{f(s)}),[s]),(0,e.jsxs)("div",{className:`select-flow position-relative ${t||""}`,children:[n&&(0,e.jsx)("label",{className:"d-block ellipsis-text p-0",children:n}),(0,e.jsxs)("div",{ref:h,children:[(0,e.jsxs)("div",{className:"input",onClick:()=>{a||u(!d)},style:{cursor:a?"not-allowed":"default",opacity:a?"0.6":"1"},children:[(0,e.jsx)("input",{className:"w-100 ellipsis-text",placeholder:o,value:p,onChange:()=>{}}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",style:{display:d?"block":"none",pointerEvents:a?"none":"all"},children:(0,e.jsx)("ul",{children:s.map((l=>(0,e.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>l.value!=p?(e=>{c(e.value),u(!1)})(l):u(!1),children:l.name},l.value)))})})]})]})}),p=(s.p,({label:l,className:n,checked:s,disabled:t,onChange:o})=>(0,e.jsxs)("div",{className:`checkbox-flow ${n||""}`,children:[(0,e.jsx)("input",{className:"cursor-pointer m-0",type:"checkbox",checked:s,onChange:o,disabled:t}),(0,e.jsx)("label",{className:"p-0",children:l})]})),m=({id:l,label:n,remove:s})=>(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{children:n}),(0,e.jsx)("i",{className:"mdi mdi-close",onClick:e=>{e.preventDefault(),e.stopPropagation(),s(l)}})]}),v=({label:n,options:s,className:t,placeholder:o,values:i,disabled:a,onChange:c})=>{const[d,u]=(0,l.useState)(!1),[v,f]=(0,l.useState)([]),h=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const e=s.filter((e=>null==i?void 0:i.some((l=>e.value===l))));e&&f(e)}),[i]),r(h,(()=>u(!1))),(0,e.jsxs)("div",{className:`select-flow position-relative ${t||""}`,children:[n&&(0,e.jsx)("label",{className:"d-block",children:n}),(0,e.jsxs)("div",{ref:h,children:[(0,e.jsxs)("div",{className:"input w-100",onClick:()=>{a||u(!d)},children:[(0,e.jsx)("div",{className:"w-100 input-block",children:v.map(((l,n)=>(0,e.jsx)(m,{id:n,remove:e=>{(e=>{const l=v.filter(((l,n)=>n!==e));f(l),c(l.map((e=>e.value)))})(e)},label:l.name},crypto.randomUUID())))}),(0,e.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,e.jsx)("div",{className:"options",style:{display:d?"block":"none"},children:(0,e.jsx)("ul",{children:s.map(((l,n)=>(0,e.jsx)("li",{className:"cursor-pointer",onClick:()=>(e=>{let l=v;v.some((l=>l.value===e.value))?l=v.filter((l=>l.value!==e.value)):l.push(e),f(l),c(l.map((e=>e.value)))})(l),children:(0,e.jsx)(p,{checked:v.some((e=>e.value===l.value)),onChange:()=>{},label:l.name})},l.value)))})})]})]})},f={name:"end",version:"0.8",inputs:[{name:"_"}],outputs:[],icon:"mdi-flag-checkered",defaultProps:()=>({label:{type:"string",value:"End"},forms:[],actions:[]}),editSection:n=>()=>{var s,t,o,i;const[a,r]=(0,l.useState)([]),c=(null===(o=null===(t=null===(s=null==n?void 0:n.callbacks)||void 0===s?void 0:s.ui)||void 0===t?void 0:t.getRoles)||void 0===o?void 0:o.call(t).map((e=>e.value)))||[],[m,f]=(0,l.useState)(!1),h=a.map((e=>({name:`${e.name}`,value:e.ID}))),x=c.map((e=>({name:`${e}`,value:e})));if(!n.callbacks.ui)throw new Error("end can not execute on environments without UI");const j=n.callbacks.ui;(0,l.useEffect)((()=>{(async()=>{r(await j.getModels("qjson"))})()}),[]);const b=[{component:u,key:"id",props:{label:"Form",types:null===(i=n.propValues.forms)||void 0===i?void 0:i.map((e=>e.id)),options:h}},{component:v,key:"roles",props:{label:"Roles",options:x}},{component:p,key:"readonly",props:{label:"Readonly",className:"mt-3",disabled:!0}}],{ExpressionComp:y}=n.react,[g,N]=(0,l.useState)(n.propValues.label||{type:"string",value:"End"});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"px-3",children:[(0,e.jsx)("label",{children:"Label"}),(0,e.jsx)(y,{types:["input","context","output","number","string"],expression:g,onChange:e=>{N(e),n.callbacks.setProp("label",e)}})]}),(0,e.jsx)(d,{fields:n.propValues.forms||[],dialogTitle:"Form",collapsibleLabel:"FORMS",fieldLabel:"id",getFieldLabel:e=>{var l;return(null===(l=a.find((l=>l.ID==e.id)))||void 0===l?void 0:l.name)||""},dialogElements:b,emptyValues:{id:"",roles:[],readonly:!0},createItemLabel:"Add Forms",onChange:e=>{n.callbacks.setProp("forms",e)}})]})}}})(),t})()));