/*! For license information please see apiOutput_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.flowcomponent=t(require("react")):e.flowcomponent=t(e.react)}(this,(e=>(()=>{"use strict";var t={6094:(e,t,o)=>{var r=o(8156),s=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,o){var r,u={},i=null,l=null;for(r in void 0!==o&&(i=""+o),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)n.call(t,r)&&!p.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:s,type:e,key:i,ref:l,props:u,_owner:a.current}}t.jsx=u,t.jsxs=u},4512:(e,t,o)=>{e.exports=o(6094)},8156:t=>{t.exports=e}},o={};function r(e){var s=o[e];if(void 0!==s)return s.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{r.r(s),r.d(s,{default:()=>i});var e=r(4512);var t=r(8156);const o={width:"80px"},n=[{text:"200 (Ok)",value:"200"},{text:"201 (Created)",value:"201"},{text:"204 (No Content)",value:"204"},{text:"301 (Moved Permanently)",value:"301"},{text:"304 (Not Modified)",value:"304"},{text:"400 (Bad Request)",value:"400"},{text:"401 (Unauthorized)",value:"401"},{text:"403 (Forbidden)",value:"403"},{text:"404 (Not Found)",value:"404"},{text:"418 (I'm a teapot)",value:"418"},{text:"501 (Not Implemented)",value:"501"}],a=(o,r)=>{const{NameDiv:s,DescDiv:a}=o.react.prop,{ExpressionComp:p}=o.react,[u,i]=(0,t.useState)(o.propValues.statusCode);return(0,e.jsxs)("div",{children:[(0,e.jsx)(s,{children:"Status Code"}),(0,e.jsx)(a,{children:"Http status code of API response"}),(0,e.jsx)(p,{inputOptions:{width:"130px"},types:["number","input","context","output",{type:"enum",options:n,text:"status"}],expression:u,onChange:e=>{"enum"==e.type&&(e.value.startsWith("418")?r.bodySetter({type:"string",value:"https://save418.com/"},!0):e.value.startsWith("204")&&r.bodySetter({type:"notSet",value:""},!0)),o.callbacks.setProp("statusCode",e),i(e)}})]})},p=r=>{const{NameDiv:s,DescDiv:n}=r.react.prop,{ExpressionComp:a}=r.react,p=e=>e.reduce(((e,t)=>(t.key&&(e[t.key]=t.value),e)),{}),u=()=>v.map((e=>e)),i=e=>{e.push({key:"",value:{type:"output",value:""}})},l=(d=r.propValues.headers||{},c=(e,t)=>({key:t,value:e}),function(e){return Object.keys(e)}(d).map(((e,t)=>c(d[e],e,t))));var d,c;0!=l.length&&""==l[l.length-1].key||i(l);const[v,y]=(0,t.useState)(l);return(0,e.jsxs)("div",{children:[(0,e.jsx)(s,{children:"Headers"}),(0,e.jsx)(n,{children:"Headers to return with the API response"}),v.map(((t,s)=>(0,e.jsxs)("div",{children:[(0,e.jsx)("input",{type:"text",style:o,value:t.key,placeholder:t.key?void 0:"key",onChange:e=>((e,t)=>{const o=u();o[t].key=e.toLowerCase(),""!=o[o.length-1].key&&i(o);const s=o.findIndex((e=>""==e.key));-1!=s&&s!=o.length-1&&o.splice(s,1),y(o),r.callbacks.setProp("headers",p(o))})(e.target.value,s)}),(0,e.jsx)(a,{inputOptions:{width:"65px"},types:["input","context","output","string"],expression:t.value,onChange:e=>((e,t)=>{const o=u();o[t].value=e,y(o),r.callbacks.setProp("headers",p(o))})(e,s)})]},s)))]})},u=(o,r)=>{const{NameDiv:s,DescDiv:n}=o.react.prop,{ExpressionComp:a}=o.react,[p,u]=(0,t.useState)(o.propValues.body),i=r.bodySetter=e=>{u(e),o.callbacks.setProp("body","notSet"==e.type?void 0:e)};return(0,e.jsxs)("div",{children:[(0,e.jsx)(s,{children:"Body"}),(0,e.jsx)(n,{children:"Body of the API response"}),(0,e.jsx)(a,{inputOptions:{width:"130px"},types:["input","context","output","boolean","number","string","notSet"],expression:p,onChange:i})]})},i={name:"apiOutput",version:"0.8",inputs:[{name:"_"}],outputs:["_"],defaultProps:()=>({statusCode:{type:"enum",value:"200"}}),editSection:t=>()=>{const o={bodySetter(){}};return(0,e.jsxs)("div",{children:[a(t,o),(0,e.jsx)("hr",{}),p(t),(0,e.jsx)("hr",{}),u(t,o)]})}}})(),s})()));