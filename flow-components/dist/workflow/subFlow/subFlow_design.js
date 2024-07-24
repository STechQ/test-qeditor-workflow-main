/*! For license information please see subFlow_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.flowcomponent=t(require("react")):e.flowcomponent=t(e.react)}(this,(e=>(()=>{var t={6094:(e,t,n)=>{"use strict";var a=n(8156),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var a,i={},u=null,p=null;for(a in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,a)&&!r.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:l,type:e,key:u,ref:p,props:i,_owner:o.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},4512:(e,t,n)=>{"use strict";e.exports=n(6094)},8993:(e,t,n)=>{"use strict";n.d(t,{default:()=>S});var a=n(4512),l=n(8156);var i;let s;i={boolean:!0,datetime:!0,enum:!0,number:!0,dataType:!0,string:!0,constant:!0},Object.keys(i);const o=s={quick:{modelKeys:{self:"qjson"}},flow:{modelKeys:{design:"flow-design",runtime:"flow-runtime"}},workflow:{modelKeys:{design:"workflow-design",runtime:"workflow-runtime"}},dataTypeEditor:{modelKeys:{single:"dataType"}},serviceEditor:{modelKeys:{single:"restService"}},soapEditor:{modelKeys:{single:"soapService"}},enum:{modelKeys:{single:"enum"}},constantEditor:{modelKeys:{single:"constant"}}};new Error("unimplemented for namedComponent"),new Error("unimplemented for json");const r=()=>p;let u;const p=u={inParamMapping:[],outParamMapping:[]},c=(n.p,n.p,({label:e,isKeepOpen:t=!1,onAddButton:n,children:i})=>{const[s,o]=(0,l.useState)(!0);return(0,a.jsxs)("div",{className:"variables ",children:[(0,a.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,a.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>o(!s),children:[!t&&(0,a.jsx)("i",{className:"mdi "+(s?"mdi-chevron-down":"mdi-chevron-right")}),(0,a.jsx)("p",{children:e})]}),n&&(0,a.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),n()}})]}),(t||s)&&(0,a.jsx)("ul",{className:"variable-list",children:i})]})});var d=n(5685),m=n.n(d);n.p;const v=({isOpen:e,onClose:t,children:n,footer:i=[],title:s,type:o="dialog",position:r})=>{if(!e)return null;const[u,p]=(0,l.useState)({top:0}),c=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var e,t;if(r){const n=window.innerHeight>r.top+((null===(e=c.current)||void 0===e?void 0:e.clientHeight)||0)?r.top:window.innerHeight-((null===(t=c.current)||void 0===t?void 0:t.clientHeight)||0)-10;p({top:n})}}),[r]),(0,a.jsx)("div",{className:m()({overlay:"modal"===o}),children:(0,a.jsxs)("div",{ref:c,className:m()("dialog",{"dialog-monaco":"modal"==o}),style:u,children:["dialog"===o?(0,a.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=c.current;if(!t)return;const n=t.getBoundingClientRect(),a=e.clientX-n.left,l=e=>{p({top:e.clientY,left:e.clientX-a})},i=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",i)})(e),children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}):(0,a.jsx)("div",{}),(0,a.jsxs)("div",{className:"dialog-header",children:[(0,a.jsx)("h5",{className:"dialog-title m-0",children:s}),(0,a.jsx)("div",{className:"cursor-pointer",onClick:t,children:(0,a.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,a.jsx)("div",{className:"dialog-body",children:n}),i.length>0&&(0,a.jsx)("div",{className:"dialog-footer",children:i.map((e=>e))})]})})};function g(e,t){(0,l.useEffect)((()=>{const n=n=>{const a=null==e?void 0:e.current;a&&!a.contains((null==n?void 0:n.target)||null)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}n.p;const f=e=>{var t;const[n,i]=(0,l.useState)(!1),s=(0,l.useRef)(null);return g(s,(()=>i(!1))),(0,a.jsxs)("div",{className:"dropdown-flow",ref:s,children:[(0,a.jsx)("button",{className:"cursor-pointer",onClick:e=>{e.stopPropagation(),i(!n)},children:e.iconClass&&(0,a.jsx)("i",{className:e.iconClass})}),(0,a.jsx)("ul",{className:"py-3",style:{display:n?"block":"none"},children:null===(t=e.options)||void 0===t?void 0:t.map((e=>(0,a.jsx)("li",{className:"px-3 py-1 cursor-pointer ellipsis-text",onClick:t=>{i(!1),e.onClick(t)},children:e.name},e.name)))})]})},b=({collapsibleLabel:e,fields:t,disabledFields:n=[],fieldLabel:i,dialogElements:s,emptyValues:o,isAddible:r=!0,isDeletable:u=!0,isCollabsible:p=!0,createItemLabel:d,dialogTitle:m,maxItemLen:g,onChange:b,validate:x,getFieldLabel:y})=>{const[h,j]=(0,l.useState)([]),[S,N]=(0,l.useState)(!1),[P,w]=(0,l.useState)(0),[C,E]=(0,l.useState)({top:0}),[k,O]=(0,l.useState)(!1),[M,L]=(0,l.useState)("");(0,l.useEffect)((()=>{const e=new Set(n.map((e=>JSON.stringify(e)))),a=t.filter((t=>!e.has(JSON.stringify(t))));j(a)}),[t]);const A=(e,t,n=!1)=>{E({top:e.pageY}),O(n),w(t),x&&L(x(h[t])),N(!0)},I=(e,t,n=i)=>{if(!e)return;if(n.includes(".")){const a=n.split(".").reduce(((e,t)=>e[t]),e);return Array.isArray(a)||"object"!=typeof a?a:a.value?`${a.type}.${a.value}`:`Variable ${t+1}`}const a=e?e[n]:e;return Array.isArray(a)||"object"!=typeof a?a:a.value?`${a.type}.${a.value}`:`Variable ${t+1}`},_=e=>{j(e),b(JSON.parse(JSON.stringify([...n,...e])))};function F(e,t){const n=[...h];((e,t,n)=>{const a=t.split("."),l=a.pop();a.reduce(((e,t)=>e[t]),e)[l]=n})(n[P],e,t),_(n),x&&L(x(n[P]))}const $=()=>{if(void 0!==g&&h.length>=g)return;const e=[...h];e.push(JSON.parse(JSON.stringify(o))),_(e)},R=(e,t)=>{var a;const l=null===(a={true:n,false:h}[k.toString()])||void 0===a?void 0:a[P];return{Expression:{expression:(null==l?void 0:l[t])||{type:"string",value:""},onBlur:e=>{F(t,e)}},Checkbox:{checked:I(l,0,t)||!1,onChange:e=>{F(t,e.target.checked)}},Select:{value:I(l,0,t)||"",onChange:e=>{F(t,e)}},Input:{value:I(l,0,t)||"",onBlur:e=>{F(t,e.target.value)}},MultiSelect:{values:I(l,0,t)||[],onChange:e=>{F(t,e)}}}[e]||{value:(null==l?void 0:l[t])||"",onChange:e=>{F(t,e)}}};return(0,a.jsx)(a.Fragment,{children:0==(null==h?void 0:h.length)&&0==n.length&&r?(0,a.jsxs)("div",{className:"dynamic-field-create vertical-line cursor-pointer",onClick:$,children:[(0,a.jsx)("p",{children:d}),void 0===g||void 0!==g&&h.length<g?(0,a.jsx)("i",{className:"mdi mdi-plus"}):(0,a.jsx)(a.Fragment,{})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c,{label:e,isKeepOpen:!p,...(()=>{if(r&&!(void 0!==g&&h.length>=g))return{onAddButton:$}})(),children:[null==n?void 0:n.map(((e,t)=>(0,a.jsx)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${h.length-1!==t&&"vertical-line"}`,onClick:e=>A(e,t,!0),children:(0,a.jsx)("p",{className:"m-0 ellipsis-text",children:(null==y?void 0:y(e))||I(e,t)||`Variable ${t+1}`})},`item${t}`))),null==h?void 0:h.map(((e,t)=>(0,a.jsxs)("li",{className:`d-flex justify-content-between align-items-center px-1 py-2 cursor-pointer ${h.length-1!==t&&"vertical-line"}`,onClick:e=>A(e,t),children:[(0,a.jsx)("p",{className:"m-0 ellipsis-text",children:(null==y?void 0:y(e))||I(e,t)||`Variable ${t+1}`}),u&&(0,a.jsx)(f,{iconClass:"mdi mdi-dots-horizontal",options:[{name:"Delete",onClick:e=>{((e,t)=>{e.preventDefault(),e.stopPropagation(),_([...h].filter(((e,n)=>n!=t)))})(e,t)}}]})]},`item${t}`)))]}),(0,a.jsxs)(v,{isOpen:S,title:m,onClose:()=>(N(!1),void L("")),position:C,children:[(0,a.jsxs)("p",{style:{color:"red",display:""===M?"none":""},children:["$",M]}),s.map(((e,t)=>{var l,i;if((k||!e.isRendered||(null===(l=null==e?void 0:e.isRendered)||void 0===l?void 0:l.call(e,h[P])))&&(!k||!e.isRendered||(null===(i=null==e?void 0:e.isRendered)||void 0===i?void 0:i.call(e,n[P]))))return(0,a.jsx)(e.component,{...R(e.component.name,e.key),disabled:k,...e.props,children:e.children},e.key)}))]})]})})},x=(n.p,n.p,({label:e,options:t=[],className:n,placeholder:i,value:s,disabled:o,onChange:r})=>{const[u,p]=(0,l.useState)(!1),[c,d]=(0,l.useState)(s),[m,v]=(0,l.useState)([]),f=(0,l.useRef)(null);return g(f,(()=>p(!1))),(0,l.useEffect)((()=>{const e=m.find((e=>e.value===s));e?d(e.name):s||d("")}),[s,m]),(0,l.useEffect)((()=>{v(t)}),[t]),(0,a.jsxs)("div",{className:`select-flow position-relative ${n||""}`,children:[e&&(0,a.jsx)("label",{className:"d-block ellipsis-text p-0",children:e}),(0,a.jsxs)("div",{ref:f,children:[(0,a.jsxs)("div",{className:"input",onClick:()=>{o||p(!u)},style:{cursor:o?"not-allowed":"default",opacity:o?"0.6":"1"},children:[(0,a.jsx)("input",{className:"w-100 ellipsis-text",placeholder:i,value:c,onChange:()=>{}}),(0,a.jsx)("i",{className:"mdi mdi-chevron-down"})]}),(0,a.jsx)("div",{className:"options",style:{display:u?"block":"none",pointerEvents:o?"none":"all"},children:(0,a.jsx)("ul",{children:t.map((e=>(0,a.jsx)("li",{className:"cursor-pointer ellipsis-text",onClick:()=>e.value!=c?(e=>{r(e.value),p(!1)})(e):p(!1),children:e.name},e.value)))})})]})]})}),y=(n.p,({label:e,className:t,placeholder:n,value:i,disabled:s,isDigit:o=!1,onChange:r,onBlur:u})=>{const[p,c]=(0,l.useState)(i);return(0,l.useEffect)((()=>{c(i)}),[i]),(0,a.jsxs)("div",{className:`input-flow ${t||""}`,children:[e&&(0,a.jsx)("label",{className:"d-block p-0",children:e}),(0,a.jsx)("input",{className:"w-100",placeholder:n,value:p,onChange:e=>{o&&!new RegExp(/^\d+$/).test(e.target.value)||(null==r||r(e),c(e.target.value))},onBlur:u,disabled:s})]})}),h=({label:e,className:t,types:n,expression:i,constantsOptions:s,onChange:o,onBlur:r})=>{const[u,p]=(0,l.useState)([]),[c,d]=(0,l.useState)(n[0]),[m,v]=(0,l.useState)("");return(0,l.useEffect)((()=>{d(i.type),v(i.value)}),[i]),(0,l.useEffect)((()=>{p(n.map((e=>({name:e,value:e}))))}),[n]),(0,a.jsxs)("div",{className:`expression-flow ${t||""}`,children:[(0,a.jsx)(x,{label:e,options:u,value:c,onChange:e=>{null==o||o({value:"",type:e}),null==r||r({value:m,type:e})}}),"constant"===c?(0,a.jsx)(x,{options:s||[],value:m,onChange:e=>{null==o||o({type:c,value:e}),null==r||r({type:c,value:e}),v(e)}}):(0,a.jsx)(y,{className:"mt-2",value:m,onChange:e=>{null==o||o({type:c,value:e.target.value}),v(e.target.value)},onBlur:e=>null==r?void 0:r({type:c,value:e.target.value})})]})},j=({mapping:e,mappingSchema:t,outerStore:n,onChangeInParamMapping:i,onChangeOutParamMapping:s})=>{const[o,r]=(0,l.useState)((null==e?void 0:e.inParamMapping)||[]),[u,p]=(0,l.useState)((null==e?void 0:e.outParamMapping)||[]);(0,l.useEffect)((()=>{r((null==e?void 0:e.inParamMapping)||[])}),[null==e?void 0:e.inParamMapping]),(0,l.useEffect)((()=>{p((null==e?void 0:e.outParamMapping)||[])}),[null==e?void 0:e.outParamMapping]);const c=[{component:h,key:"mapping",props:{label:"Assignment",types:["input","context","string"]}}],d=[{component:h,key:"mapping",props:{label:"Assignment",types:["context","output"]}}];function m(e){return e&&e.mapping&&e.mapping.value&&("string"===e.mapping.type||""!==e.mapping.value)?"":"Mapping Not Assigned"}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{emptyValues:{variable:{type:"input",value:""},mapping:{type:"string",value:""}},dialogTitle:"Assign To",getFieldLabel:e=>e.variable.value,fields:Object.values(o).filter((e=>t.inParamMapping.findIndex((t=>t.variable.value===e.variable.value))<0)),disabledFields:Object.values(o).filter((e=>t.inParamMapping.findIndex((t=>t.variable.value===e.variable.value))>=0)),fieldLabel:"variable",collapsibleLabel:"IN VARIABLES MAPPING",isAddible:!1,dialogElements:c,onChange:e=>{r(e),i(e)},validate:m}),(0,a.jsx)(b,{emptyValues:{variable:{type:"output",value:""},mapping:{type:"context",value:""}},dialogTitle:"Assign To",fields:Object.values(u).filter((e=>t.outParamMapping.findIndex((t=>t.variable.value===e.variable.value))<0)),disabledFields:Object.values(u).filter((e=>t.outParamMapping.findIndex((t=>t.variable.value===e.variable.value))>=0)),fieldLabel:"variable",getFieldLabel:e=>e.variable.value,collapsibleLabel:"OUT VARIABLES MAPPING",isAddible:!1,dialogElements:d,onChange:e=>{p(e),s(e)},validate:m})]})},S={name:"subFlow",panelLabel:"Function",version:"0.8",inputs:[{name:"_"}],outputs:["_"],color:"#03A9F4",icon:"mdi-file-tree-outline",defaultProps:()=>({label:{type:"string",value:"Function"},description:"Function",type:"referenced",id:"",mapping:structuredClone(r())}),editSection:e=>()=>{var t,n;const[i,s]=(0,l.useState)(e.propValues.id||""),[u,p]=(0,l.useState)(),[d,m]=(0,l.useState)([]),[v,g]=(0,l.useState)((null===(t=e.propValues.mapping)||void 0===t?void 0:t.inParamMapping)||[]),[f,b]=(0,l.useState)((null===(n=e.propValues.mapping)||void 0===n?void 0:n.outParamMapping)||[]),[h,S]=(0,l.useState)(e.propValues.description||"Sub Flow"),[N,P]=(0,l.useState)(e.callbacks.scope.getStore());if(!e.callbacks.ui)throw new Error("Function can not execute on environments without UI");const w=e.callbacks.ui;(0,l.useEffect)((()=>{(async()=>{var e;p(await(null===(e=w.getModels)||void 0===e?void 0:e.call(w,"flow")))})(),e.callbacks.setProp("type","referenced")}),[]),(0,l.useEffect)((()=>{u&&m(u.map((e=>({name:`${e.name}`,value:e.ID}))))}),[u]);const{ExpressionComp:C}=e.react,[E,k]=(0,l.useState)(e.propValues.label||{type:"string",value:"Function"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"px-3",children:[(0,a.jsx)("label",{children:"Label"}),(0,a.jsx)(C,{types:["input","context","output","number","string"],expression:E,onChange:t=>{k(t),e.callbacks.setProp("label",t)}})]}),(0,a.jsx)(y,{label:"Description",className:"mt-2 px-3",value:h,onChange:t=>{S(t.target.value),e.callbacks.setProp("description",t.target.value)},onBlur:t=>{S(t.target.value),e.callbacks.setProp("description",t.target.value)}}),(0,a.jsx)(c,{label:"PROPERTIES",children:(0,a.jsx)(x,{label:"Select Function",value:i||"",onChange:async t=>{let n;if(s(t),u&&(n=u.find((e=>e.ID==t))),n){e.callbacks.setProp("id",n.ID);const t=await w.getModelBodyIO(n.ID,o.flow.modelKeys.design),a=Object.values(t.inputs).map((e=>({variable:{type:"input",value:e._name},mapping:{type:"string",value:""}}))),l=Object.values(t.outputs).map((e=>({variable:{type:"output",value:e._name},mapping:{type:"output",value:""}})));g(a),b(l),e.callbacks.setProp("mapping",{...e.propValues.mapping,inParamMapping:a,outParamMapping:l})}},options:d})}),(0,a.jsx)(j,{mapping:{inParamMapping:v,outParamMapping:f},mappingSchema:structuredClone(r()),outerStore:N,onChangeInParamMapping:t=>{g(t),e.callbacks.setProp("mapping",{inParamMapping:t,outParamMapping:f})},onChangeOutParamMapping:t=>{b(t),e.callbacks.setProp("mapping",{inParamMapping:v,outParamMapping:t})}})]})}}},8156:t=>{"use strict";t.exports=e},5685:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=s(t,n));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},n={};function a(e){var l=n[e];if(void 0!==l)return l.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var l={};return(()=>{"use strict";a.r(l),a.d(l,{default:()=>e.default});var e=a(8993)})(),l})()));