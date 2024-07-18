/*! For license information please see log_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.flowcomponent=t(require("react")):e.flowcomponent=t(e.react)}(this,(e=>(()=>{"use strict";var t={6094:(e,t,r)=>{var o=r(8156),s=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var o,p={},i=null,u=null;for(o in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,o)&&!l.hasOwnProperty(o)&&(p[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===p[o]&&(p[o]=t[o]);return{$$typeof:s,type:e,key:i,ref:u,props:p,_owner:n.current}}t.jsx=p,t.jsxs=p},4512:(e,t,r)=>{e.exports=r(6094)},8156:t=>{t.exports=e}},r={};function o(e){var s=r[e];if(void 0!==s)return s.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var s={};return(()=>{o.r(s),o.d(s,{default:()=>n});var e=o(4512),t=o(8156),r=o.n(t);o.p;const a=({label:r,className:o,placeholder:s,value:a,disabled:n,isDigit:l=!1,onChange:p,onBlur:i})=>{const[u,c]=(0,t.useState)(a);return(0,t.useEffect)((()=>{c(a)}),[a]),(0,e.jsxs)("div",{className:`input-flow ${o||""}`,children:[r&&(0,e.jsx)("label",{className:"d-block p-0",children:r}),(0,e.jsx)("input",{className:"w-100",placeholder:s,value:u,onChange:e=>{l&&!new RegExp(/^\d+$/).test(e.target.value)||(null==p||p(e),c(e.target.value))},onBlur:i,disabled:n})]})},n={name:"log",version:"0.8",inputs:[{name:"_"}],outputs:["_"],icon:"mdi-file-document-multiple-outline",defaultProps:()=>({label:{type:"string",value:"Log"},description:"Log",expression:{type:"context",value:""}}),editSection:o=>()=>{const[s,n]=(0,t.useState)(o.propValues.description||"Log"),{NameDiv:l,DescDiv:p}=o.react.prop,{ExpressionComp:i}=o.react,[u,c]=r().useState(o.propValues.expression),d=["boolean","input","context","output","number","string"],[f,x]=(0,t.useState)(o.propValues.label||{type:"string",value:"Log"});return(0,e.jsxs)("div",{className:"px-3",children:[(0,e.jsx)("label",{children:"Label"}),(0,e.jsx)(i,{types:d.filter((e=>"boolean"!==e)),expression:f,onChange:e=>{x(e),o.callbacks.setProp("label",e)}}),(0,e.jsx)(a,{label:"Description",className:"mt-2",value:s,onChange:e=>{n(e.target.value),o.callbacks.setProp("description",e.target.value)},onBlur:e=>{n(e.target.value),o.callbacks.setProp("description",e.target.value)}}),(0,e.jsx)(l,{className:"mt-2",children:"expression"}),(0,e.jsx)(p,{children:"expression to log."}),(0,e.jsx)(i,{inputOptions:{width:"110px"},types:d,expression:u,onChange:e=>{c(e),o.callbacks.setProp("expression",e)}})]})}}})(),s})()));