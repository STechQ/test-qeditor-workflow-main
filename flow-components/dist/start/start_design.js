/*! For license information please see start_design.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.flowcomponent=r(require("react")):e.flowcomponent=r(e.react)}(this,(e=>(()=>{"use strict";var r={6094:(e,r,t)=>{var o=t(8156),n=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var o,s={},c=null,f=null;for(o in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,o)&&!p.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===s[o]&&(s[o]=r[o]);return{$$typeof:n,type:e,key:c,ref:f,props:s,_owner:i.current}}r.jsx=s,r.jsxs=s},4512:(e,r,t)=>{e.exports=t(6094)},8156:r=>{r.exports=e}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{default:()=>r});var e=o(4512);const r={name:"start",version:"0.8",icon:"mdi-play",inputs:[],outputs:["_"],autoStarts:!0,editSection:r=>()=>{const{NameDiv:t,DescDiv:o}=r.react.prop;return(0,e.jsxs)("div",{children:[(0,e.jsx)(t,{children:"Start"}),(0,e.jsx)(o,{children:"Start Flow."})]})}}})(),n})()));