/*! For license information please see code_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.flowcomponent=t(require("react")):e.flowcomponent=t(e.react)}(this,(e=>(()=>{var t={6094:(e,t,r)=>{"use strict";var n=r(8156),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,s=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:s,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},4512:(e,t,r)=>{"use strict";e.exports=r(6094)},8156:t=>{"use strict";t.exports=e},5685:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=c(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=c(t,r));return t}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var o={};return(()=>{"use strict";n.r(o),n.d(o,{default:()=>ue});var e=n(4512),t=n(8156);n.p;var r=n(5685),i=n.n(r);n.p;const c=({children:t,className:r,color:n="primary",disabled:o,onClick:c})=>(0,e.jsx)("button",{className:i()("button-flow",r,n),disabled:o,onClick:c,children:t}),a=(n.p,({label:r,isKeepOpen:n=!1,onAddButton:o,children:i})=>{const[c,a]=(0,t.useState)(!0);return(0,e.jsxs)("div",{className:"variables ",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between p-3 pb-0",children:[(0,e.jsxs)("div",{className:"d-flex cursor-pointer",onClick:()=>a(!c),children:[!n&&(0,e.jsx)("i",{className:"mdi "+(c?"mdi-chevron-down":"mdi-chevron-right")}),(0,e.jsx)("p",{children:r})]}),o&&(0,e.jsx)("i",{className:"mdi mdi-plus cursor-pointer",onClick:e=>{e.preventDefault(),e.stopPropagation(),o()}})]}),(n||c)&&(0,e.jsx)("ul",{className:"variable-list",children:i})]})}),u=(n.p,({label:r,className:n,placeholder:o,value:i,disabled:c,isDigit:a=!1,onChange:u,onBlur:l})=>{const[s,d]=(0,t.useState)(i);return(0,t.useEffect)((()=>{d(i)}),[i]),(0,e.jsxs)("div",{className:`input-flow ${n||""}`,children:[r&&(0,e.jsx)("label",{className:"d-block p-0",children:r}),(0,e.jsx)("input",{className:"w-100",placeholder:o,value:s,onChange:e=>{a&&!new RegExp(/^\d+$/).test(e.target.value)||(null==u||u(e),d(e.target.value))},onBlur:l,disabled:c})]})}),l=(n.p,({label:t,className:r,value:n,disabled:o,onChange:c})=>(0,e.jsxs)("div",{className:i()("switch-flow",r),children:[t&&(0,e.jsx)("label",{className:"switch-text",children:t}),(0,e.jsxs)("label",{className:"switch",children:[(0,e.jsx)("input",{type:"checkbox",className:"w-100",checked:n,disabled:o,onChange:e=>{c(e.target.checked)}}),(0,e.jsx)("span",{className:"slider round"})]})]})),s=(n.p,({isOpen:r,onClose:n,children:o,footer:c=[],title:a,type:u="dialog",position:l})=>{if(!r)return null;const[s,d]=(0,t.useState)({top:0}),f=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e,t;if(l){const r=window.innerHeight>l.top+((null===(e=f.current)||void 0===e?void 0:e.clientHeight)||0)?l.top:window.innerHeight-((null===(t=f.current)||void 0===t?void 0:t.clientHeight)||0)-10;d({top:r})}}),[l]),(0,e.jsx)("div",{className:i()({overlay:"modal"===u}),children:(0,e.jsxs)("div",{ref:f,className:i()("dialog",{"dialog-monaco":"modal"==u}),style:s,children:["dialog"===u?(0,e.jsxs)("div",{className:"dots",style:{cursor:"grab"},onMouseDown:e=>(e=>{e.preventDefault();const t=f.current;if(!t)return;const r=t.getBoundingClientRect(),n=e.clientX-r.left,o=e=>{d({top:e.clientY,left:e.clientX-n})},i=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",i)})(e),children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]}):(0,e.jsx)("div",{}),(0,e.jsxs)("div",{className:"dialog-header",children:[(0,e.jsx)("h5",{className:"dialog-title m-0",children:a}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:n,children:(0,e.jsx)("i",{className:"mdi mdi-window-close"})})]}),(0,e.jsx)("div",{className:"dialog-body",children:o}),c.length>0&&(0,e.jsx)("div",{className:"dialog-footer",children:c.map((e=>e))})]})})});function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}}function b(e){return{}.toString.call(e).includes("Object")}function j(e){return"function"==typeof e}var w=y((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),O=function(e,t){return b(t)||w("changeType"),Object.keys(t).some((function(t){return r=e,n=t,!Object.prototype.hasOwnProperty.call(r,n);var r,n}))&&w("changeField"),t},x=function(e){j(e)||w("selectorType")},E=function(e){j(e)||b(e)||w("handlerType"),b(e)&&Object.values(e).some((function(e){return!j(e)}))&&w("handlersType")},M=function(e){var t;e||w("initialIsRequired"),b(e)||w("initialType"),t=e,Object.keys(t).length||w("initialContent")};function S(e,t){return j(t)?t(e.current):t}function N(e,t){return e.current=v(v({},e.current),t),t}function P(e,t,r){return j(t)?t(e.current):Object.keys(r).forEach((function(r){var n;return null===(n=t[r])||void 0===n?void 0:n.call(t,e.current[r])})),r}const k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};M(e),E(t);var r={current:e},n=y(P)(r,t),o=y(N)(r),i=y(O)(e),c=y(S)(r);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return x(e),e(r.current)},function(e){!function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}(n,o,i,c)(e)}]};var C,R={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},T=(C=function(e,t){throw new Error(e[t]||e.default)},function e(){for(var t=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return n.length>=C.length?C.apply(this,n):function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e.apply(t,[].concat(n,o))}})(R);const _={config:function(e){return e||T("configIsRequired"),t=e,{}.toString.call(t).includes("Object")||T("configType"),e.urls?(console.warn(R.deprecation),{paths:{vs:e.urls.monacoBase}}):e;var t}},V=function e(t,r){return Object.keys(r).forEach((function(n){r[n]instanceof Object&&t[n]&&Object.assign(r[n],e(t[n],r[n]))})),p(p({},t),r)};var L={type:"cancelation",msg:"operation is manually canceled"};const I=function(e){var t=!1,r=new Promise((function(r,n){e.then((function(e){return t?n(L):r(e)})),e.catch(n)}));return r.cancel=function(){return t=!0},r};var A,D=(2,function(e){if(Array.isArray(e))return e}(A=k({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),2!==r.length);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(A)||function(e,t){if(e){if("string"==typeof e)return g(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,2):void 0}}(A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),$=D[0],q=D[1];function F(e){return document.body.appendChild(e)}function B(e){var t,r,n=$((function(e){return{config:e.config,reject:e.reject}})),o=(t="".concat(n.config.paths.vs,"/loader.js"),r=document.createElement("script"),t&&(r.src=t),r);return o.onload=function(){return e()},o.onerror=n.reject,o}function z(){var e=$((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){U(t),e.resolve(t)}),(function(t){e.reject(t)}))}function U(e){$().monaco||q({monaco:e})}var H=new Promise((function(e,t){return q({resolve:e,reject:t})})),Y={config:function(e){var t=_.config(e),r=t.monaco,n=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,["monaco"]);q((function(e){return{config:V(e.config,n),monaco:r}}))},init:function(){var e=$((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(q({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),I(H);if(window.monaco&&window.monaco.editor)return U(window.monaco),e.resolve(window.monaco),I(H);!function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}(F,B)(z)}return I(H)},__getMonacoInstance:function(){return $((function(e){return e.monaco}))}};const W=Y;var X={display:"flex",position:"relative",textAlign:"initial"},G={width:"100%"},J={display:"none"},K={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Q=function({children:e}){return t.createElement("div",{style:K.container},e)},Z=(0,t.memo)((function({width:e,height:r,isEditorReady:n,loading:o,_ref:i,className:c,wrapperProps:a}){return t.createElement("section",{style:{...X,width:e,height:r},...a},!n&&t.createElement(Q,null,o),t.createElement("div",{ref:i,style:{...G,...!n&&J},className:c}))})),ee=function(e){(0,t.useEffect)(e,[])},te=function(e,r,n=!0){let o=(0,t.useRef)(!0);(0,t.useEffect)(o.current||!n?()=>{o.current=!1}:e,r)};function re(){}function ne(e,t,r,n){return function(e,t){return e.editor.getModel(oe(e,t))}(e,n)||function(e,t,r,n){return e.editor.createModel(t,r,n?oe(e,n):void 0)}(e,t,r,n)}function oe(e,t){return e.Uri.parse(t)}(0,t.memo)((function({original:e,modified:r,language:n,originalLanguage:o,modifiedLanguage:i,originalModelPath:c,modifiedModelPath:a,keepCurrentOriginalModel:u=!1,keepCurrentModifiedModel:l=!1,theme:s="light",loading:d="Loading...",options:f={},height:p="100%",width:g="100%",className:h,wrapperProps:m={},beforeMount:v=re,onMount:y=re}){let[b,j]=(0,t.useState)(!1),[w,O]=(0,t.useState)(!0),x=(0,t.useRef)(null),E=(0,t.useRef)(null),M=(0,t.useRef)(null),S=(0,t.useRef)(y),N=(0,t.useRef)(v),P=(0,t.useRef)(!1);ee((()=>{let e=W.init();return e.then((e=>(E.current=e)&&O(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>x.current?function(){let e=x.current?.getModel();u||e?.original?.dispose(),l||e?.modified?.dispose(),x.current?.dispose()}():e.cancel()})),te((()=>{if(x.current&&E.current){let t=x.current.getOriginalEditor(),r=ne(E.current,e||"",o||n||"text",c||"");r!==t.getModel()&&t.setModel(r)}}),[c],b),te((()=>{if(x.current&&E.current){let e=x.current.getModifiedEditor(),t=ne(E.current,r||"",i||n||"text",a||"");t!==e.getModel()&&e.setModel(t)}}),[a],b),te((()=>{let e=x.current.getModifiedEditor();e.getOption(E.current.editor.EditorOption.readOnly)?e.setValue(r||""):r!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),e.pushUndoStop())}),[r],b),te((()=>{x.current?.getModel()?.original.setValue(e||"")}),[e],b),te((()=>{let{original:e,modified:t}=x.current.getModel();E.current.editor.setModelLanguage(e,o||n||"text"),E.current.editor.setModelLanguage(t,i||n||"text")}),[n,o,i],b),te((()=>{E.current?.editor.setTheme(s)}),[s],b),te((()=>{x.current?.updateOptions(f)}),[f],b);let k=(0,t.useCallback)((()=>{if(!E.current)return;N.current(E.current);let t=ne(E.current,e||"",o||n||"text",c||""),u=ne(E.current,r||"",i||n||"text",a||"");x.current?.setModel({original:t,modified:u})}),[n,r,i,e,o,c,a]),C=(0,t.useCallback)((()=>{!P.current&&M.current&&(x.current=E.current.editor.createDiffEditor(M.current,{automaticLayout:!0,...f}),k(),E.current?.editor.setTheme(s),j(!0),P.current=!0)}),[f,s,k]);return(0,t.useEffect)((()=>{b&&S.current(x.current,E.current)}),[b]),(0,t.useEffect)((()=>{!w&&!b&&C()}),[w,b,C]),t.createElement(Z,{width:g,height:p,isEditorReady:b,loading:d,_ref:M,className:h,wrapperProps:m})}));var ie=new Map,ce=(0,t.memo)((function({defaultValue:e,defaultLanguage:r,defaultPath:n,value:o,language:i,path:c,theme:a="light",line:u,loading:l="Loading...",options:s={},overrideServices:d={},saveViewState:f=!0,keepCurrentModel:p=!1,width:g="100%",height:h="100%",className:m,wrapperProps:v={},beforeMount:y=re,onMount:b=re,onChange:j,onValidate:w=re}){let[O,x]=(0,t.useState)(!1),[E,M]=(0,t.useState)(!0),S=(0,t.useRef)(null),N=(0,t.useRef)(null),P=(0,t.useRef)(null),k=(0,t.useRef)(b),C=(0,t.useRef)(y),R=(0,t.useRef)(),T=(0,t.useRef)(o),_=function(e){let r=(0,t.useRef)();return(0,t.useEffect)((()=>{r.current=e}),[e]),r.current}(c),V=(0,t.useRef)(!1),L=(0,t.useRef)(!1);ee((()=>{let e=W.init();return e.then((e=>(S.current=e)&&M(!1))).catch((e=>"cancelation"!==e?.type&&console.error("Monaco initialization: error:",e))),()=>N.current?(R.current?.dispose(),p?f&&ie.set(c,N.current.saveViewState()):N.current.getModel()?.dispose(),void N.current.dispose()):e.cancel()})),te((()=>{let t=ne(S.current,e||o||"",r||i||"",c||n||"");t!==N.current?.getModel()&&(f&&ie.set(_,N.current?.saveViewState()),N.current?.setModel(t),f&&N.current?.restoreViewState(ie.get(c)))}),[c],O),te((()=>{N.current?.updateOptions(s)}),[s],O),te((()=>{!N.current||void 0===o||(N.current.getOption(S.current.editor.EditorOption.readOnly)?N.current.setValue(o):o!==N.current.getValue()&&(L.current=!0,N.current.executeEdits("",[{range:N.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),N.current.pushUndoStop(),L.current=!1))}),[o],O),te((()=>{let e=N.current?.getModel();e&&i&&S.current?.editor.setModelLanguage(e,i)}),[i],O),te((()=>{void 0!==u&&N.current?.revealLine(u)}),[u],O),te((()=>{S.current?.editor.setTheme(a)}),[a],O);let I=(0,t.useCallback)((()=>{if(P.current&&S.current&&!V.current){C.current(S.current);let t=c||n,l=ne(S.current,o||e||"",r||i||"",t||"");N.current=S.current?.editor.create(P.current,{model:l,automaticLayout:!0,...s},d),f&&N.current.restoreViewState(ie.get(t)),S.current.editor.setTheme(a),void 0!==u&&N.current.revealLine(u),x(!0),V.current=!0}}),[e,r,n,o,i,c,s,d,f,a,u]);return(0,t.useEffect)((()=>{O&&k.current(N.current,S.current)}),[O]),(0,t.useEffect)((()=>{!E&&!O&&I()}),[E,O,I]),T.current=o,(0,t.useEffect)((()=>{O&&j&&(R.current?.dispose(),R.current=N.current?.onDidChangeModelContent((e=>{L.current||j(N.current.getValue(),e)})))}),[O,j]),(0,t.useEffect)((()=>{if(O){let e=S.current.editor.onDidChangeMarkers((e=>{let t=N.current.getModel()?.uri;if(t&&e.find((e=>e.path===t.path))){let e=S.current.editor.getModelMarkers({resource:t});w?.(e)}}));return()=>{e?.dispose()}}return()=>{}}),[O,w]),t.createElement(Z,{width:g,height:h,isEditorReady:O,loading:l,_ref:P,className:m,wrapperProps:v})}));const ae=({height:r="65%",language:n="typescript",codeValue:o,intelliInterfaces:i,onCodeValuechange:c})=>{const a=(0,t.useRef)(null),u=()=>{const e=(t,r="")=>{let n="{\n";for(const o in t)t.hasOwnProperty(o)&&(n+=`${r}    ${o}: `,"object"!=typeof t[o]||null===t[o]||Array.isArray(t[o])?n+=`${JSON.stringify(t[o],null,4).replace(/\n/g,`\n${r}    `)},\n`:n+=e(t[o],`${r}    `));return n+=`${r}}`,n};return`declare var context: ${e(null==i?void 0:i.context)};declare var input: ${e(null==i?void 0:i.input)};declare var output: ${e(null==i?void 0:i.output)};`};return(0,t.useEffect)((()=>{var e;""==o&&(null===(e=a.current)||void 0===e||e.editor.getModels()[0].setValue(o))}),[o]),(0,e.jsx)(ce,{height:r,language:n,options:{automaticLayout:!0},onChange:()=>{if(a.current){const e=a.current.editor.getModels()[0];e&&(o=e.getValue(),c(o))}},onMount:(e,t)=>{a.current=t,a.current.editor.getModels()[0].setValue(o),t.languages.typescript.typescriptDefaults.setCompilerOptions({target:t.languages.typescript.ScriptTarget.ES2016,allowNonTsExtensions:!0}),t.languages.typescript.typescriptDefaults.setExtraLibs([{content:u()}])}})},ue={name:"code",version:"0.8",inputs:[{name:"_"}],outputs:["_"],color:"#00BCD4",icon:"mdi-code-braces",defaultProps:()=>({code:""}),editSection:r=>()=>{const[n,o]=(0,t.useState)("Code"),[i,d]=(0,t.useState)(!1),[f,p]=(0,t.useState)(r.propValues.waitTillNext||!1),[g,h]=(0,t.useState)(r.propValues.code),m=[(0,e.jsx)(c,{className:"secondary cancel-button",onClick:()=>{d(!1)},children:"Cancel"}),(0,e.jsx)(c,{className:"save-button",onClick:()=>{r.callbacks.setProp("code",g),r.propValues.code=g,d(!1)},children:"SAVE"})];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(a,{label:"PROPERTIES",children:[(0,e.jsxs)("div",{className:"d-flex",children:[(0,e.jsx)(u,{className:"code-input w-100",value:n,onChange:e=>{}}),(0,e.jsx)(c,{className:"ms-2",onClick:()=>{h(r.propValues.code),d(!0)},children:"TS"})]}),(0,e.jsx)(l,{className:"mt-3 w-100",label:"Wait for next one to begin",value:f,onChange:()=>{(e=>{p(!e),r.callbacks.setProp("waitTillNext",e)})(f)}})]}),(0,e.jsxs)(s,{type:"modal",isOpen:i,title:"New Function",footer:m,onClose:()=>{d(!1)},children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[(0,e.jsx)(u,{value:"",placeholder:"Give your function a name"}),(0,e.jsx)(c,{className:"secondary clear-button",onClick:()=>{h("")},children:"CLEAR ALL"})]}),(0,e.jsx)(ae,{codeValue:g,intelliInterfaces:r.callbacks.intelliInterfaces,onCodeValuechange:e=>{h(e)}})]})]})}}})(),o})()));