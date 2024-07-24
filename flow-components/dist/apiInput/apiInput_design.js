/*! For license information please see apiInput_design.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("@stitches/react")):"function"==typeof define&&define.amd?define(["react","@stitches/react"],t):"object"==typeof exports?exports.flowcomponent=t(require("react"),require("@stitches/react")):e.flowcomponent=t(e.react,e["@stitches/react"])}(this,((e,t)=>(()=>{"use strict";var s={6094:(e,t,s)=>{var r=s(8156),n=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,s){var r,i={},l=null,c=null;for(r in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!p.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:n,type:e,key:l,ref:c,props:i,_owner:o.current}}t.jsx=i,t.jsxs=i},4512:(e,t,s)=>{e.exports=s(6094)},3149:e=>{e.exports=t},8156:t=>{t.exports=e}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return s[e](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{n.r(a),n.d(a,{default:()=>x});var e=n(4512),t=n(8156);const s=s=>{const[r,n]=(0,t.useState)([]);(0,t.useEffect)((()=>((async()=>{n(s.additionalTypes)})(),()=>{})),[]);const a=!s.value,o=s.multiple||!1;return(0,e.jsxs)("div",{children:[(0,e.jsxs)("select",{value:s.value,onChange:e=>(e=>{const t=r[a?e-1:e];s.onChange({multiple:o,type:t})})(e.target.selectedIndex),children:[a&&(0,e.jsx)("option",{children:"select type"}),r.map((t=>{const s=t,r=t;return(0,e.jsx)("option",{value:s,children:r},s)}))]}),!a&&(0,e.jsxs)("div",{children:["Multiple: ",(0,e.jsx)("input",{type:"checkbox",title:"Multiple",checked:o,onChange:e=>(e=>{const t=r.find((e=>e==s.value));s.onChange({multiple:e,type:t})})(e.target.checked)})]})]})};var r=n(3149);const o=s=>{const{NameDiv:r,DescDiv:n}=s.react.prop,{ExpressionComp:a}=s.react,o=()=>i.map((e=>e)),p=e=>i.map(((t,s)=>s==(null==e?void 0:e.index)&&e.val)),i=s.propValues.pathVars||[],[l,c]=(0,t.useState)(i),[u,d]=(0,t.useState)(p()),x=(e,t)=>d(p({index:e,val:t}));return(0,e.jsxs)("div",{children:[(0,e.jsx)(r,{children:"Path Variables"}),(0,e.jsxs)(n,{children:["Variables to get from url. Like /buy/","{","productID","}"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"/"}),l.reduce(((t,r,n)=>{0!=n&&t.push((0,e.jsx)("span",{children:"/"},`slash_${n}`));const a="string"==typeof r?r:`{${r.value}}`,i={display:u[n]?"inline":"none"};return t.push((0,e.jsxs)("span",{onMouseOver:()=>x(n,!0),onMouseOut:()=>x(n,!1),children:[(0,e.jsx)("span",{children:a}),(0,e.jsx)("span",{style:i,onClick:()=>(e=>{const t=o().filter(((t,s)=>s!=e));c(t),d(p()),s.callbacks.setProp("pathVars",t.length?t:void 0)})(n),children:"X"})]},a)),t}),[])]}),l.map(((t,r)=>{const n="string"==typeof t?{type:"string",value:t}:t;return(0,e.jsx)("div",{children:(0,e.jsx)(a,{inputOptions:{width:"140px"},expression:n,types:["context","output","string"],onChange:e=>((e,t)=>{const r=o();r[t]="string"==e.type?e.value:e,c(r),s.callbacks.setProp("pathVars",r)})(e,r)})},r)})),(0,e.jsx)("br",{}),(0,e.jsx)("button",{onClick:()=>{const e=o();e.push({type:"context",value:""}),c(e),s.callbacks.setProp("pathVars",e)},children:"+ Add New"})]})},p={width:"59px"},i=s=>{const{NameDiv:r,DescDiv:n}=s.react.prop,{ExpressionComp:a}=s.react,o=()=>i.map((e=>e)),[i,l]=(0,t.useState)(s.propValues.headers||[]);return(0,e.jsxs)("div",{children:[(0,e.jsx)(r,{children:"Headers"}),(0,e.jsx)(n,{children:"Where to read headers from API input ?"}),i.map(((t,r)=>(0,e.jsxs)("div",{children:[(0,e.jsx)("input",{type:"text",style:p,value:t.key,placeholder:t.key?void 0:"key",onChange:e=>((e,t)=>{const r=o(),n=r[t],a=n.key==n.value.value;n.key=e.toLowerCase(),a&&(n.value.value=n.key),l(r),s.callbacks.setProp("headers",r)})(e.target.value,r)}),(0,e.jsx)(a,{inputOptions:{width:"60px"},types:["input","context","output"],expression:t.value,onChange:e=>((e,t)=>{const r=o();r[t].value=e,l(r),s.callbacks.setProp("headers",r)})(e,r)}),(0,e.jsx)("button",{style:{padding:"0px 2px 0px 2px",marginLeft:"2px"},onClick:e=>(e=>{const t=o();t.splice(e,1),l(t),s.callbacks.setProp("headers",t)})(r),children:"🗑️"})]},r))),(0,e.jsx)("br",{}),(0,e.jsx)("input",{type:"button",onClick:e=>(()=>{const e=o();e.push({key:"",value:{type:"context",value:""}}),l(e),s.callbacks.setProp("headers",e)})(),value:"+ Add New"})]})},l={width:"60px"},c=s=>{const{NameDiv:r,DescDiv:n}=s.react.prop,{ExpressionComp:a}=s.react,o=()=>i.map((e=>e)),p=s.propValues.queryParams||[],[i,c]=(0,t.useState)(p);return(0,e.jsxs)("div",{children:[(0,e.jsx)(r,{children:"Query Parameters"}),(0,e.jsx)(n,{children:"Define query parameters from Service input"}),i.map(((t,r)=>(0,e.jsxs)("div",{children:[(0,e.jsx)("input",{type:"text",value:t.key,style:l,onChange:e=>((e,t)=>{const r=o(),n=r[t],a=n.key==n.value.value;n.key=e.toLowerCase(),a&&(n.value.value=n.key),c(r),s.callbacks.setProp("queryParams",r)})(e.target.value,r)}),(0,e.jsx)(a,{inputOptions:{width:"60px"},types:["input","context","output"],expression:t.value,onChange:e=>((e,t)=>{const r=o();r[t].value=e,c(r),s.callbacks.setProp("queryParams",r)})(e,r)}),(0,e.jsx)("button",{style:{padding:"0px 2px 0px 2px",marginLeft:"2px"},onClick:e=>(e=>{const t=o();t.splice(e,1),c(t),s.callbacks.setProp("queryParams",t)})(r),children:"🗑️"})]},r))),(0,e.jsx)("br",{}),(0,e.jsx)("button",{onClick:e=>(()=>{const e=o();e.push({key:"",value:{type:"context",value:""}}),c(e),s.callbacks.setProp("queryParams",e)})(),children:"+ Add New"})]})},u=r=>{const{NameDiv:n,DescDiv:a}=r.react.prop,{ExpressionComp:o}=r.react,[p,i]=(0,t.useState)(r.propValues.body||[]),l=()=>p.map((e=>e));console.log(p);const c=["input","context","output"];return(0,e.jsxs)("div",{children:[(0,e.jsx)(n,{children:"Body"}),(0,e.jsx)(a,{children:"Service input data"}),p.map(((t,n)=>{const a="entity"==t.type?t.entityPath:t.primitive;return(0,e.jsxs)(d,{children:["Field: ",(0,e.jsx)("input",{type:"text",value:t.field||"",onChange:e=>(async(e,t)=>{const s=l(),n=s[t];n.field==n.target.value&&(n.target.value=e),n.field=e,i(s),r.callbacks.setProp("body",s)})(e.target.value,n)}),(0,e.jsx)(s,{options:r,value:a,multiple:t.multi,additionalTypes:["boolean","number","string"],onChange:({multiple:e,type:t})=>(async(e,t,s)=>{const n=l(),a=n[s];n[s]={type:"primitive",multi:e,primitive:t,target:a.target,field:a.field},i(n),r.callbacks.setProp("body",n)})(e,t,n)}),(0,e.jsx)(o,{inputOptions:{width:"60px"},types:c,expression:t.target,onChange:e=>(async(e,t)=>{const s=l();s[t].target=e,i(s),r.callbacks.setProp("body",s)})(e,n)}),(0,e.jsx)("button",{style:{padding:"0px 2px 0px 2px",marginLeft:"2px"},onClick:e=>(async e=>{const t=l();t.splice(e,1),i(t),r.callbacks.setProp("body",0==t.length?void 0:t)})(n),children:"🗑️"})]},n)})),(0,e.jsx)("br",{}),(0,e.jsx)("button",{onClick:e=>(async()=>{const e=l();e.push({type:"entity",multi:!1,entityPath:"",target:{type:"context",value:""},field:""}),i(e),r.callbacks.setProp("body",e)})(),children:"+Add New"})]})},d=(0,r.styled)("div",{borderBottom:"1px dashed black",padding:"5px 0 5px 0",margin:"0 3px 0 3px"}),x={name:"apiInput",panelLabel:"API Input",version:"0.8",inputs:[{name:"_"}],outputs:["_"],editSection:t=>()=>(0,e.jsxs)("div",{children:[o(t),(0,e.jsx)("hr",{}),c(t),(0,e.jsx)("hr",{}),i(t),(0,e.jsx)("hr",{}),u(t)]})}})(),a})()));