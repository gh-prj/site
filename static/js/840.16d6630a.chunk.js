"use strict";(self.webpackChunkgh_react_site=self.webpackChunkgh_react_site||[]).push([[840],{840:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(152),c=t(791);var i="UseRef_container__OrCSN",s=t(184),l=function(){return(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)(a,{}),(0,s.jsx)(u,{})]})};function a(){var e=(0,c.useState)(0),n=(0,r.Z)(e,2),t=n[0],i=n[1],l=(0,c.useRef)(0),a=(0,c.useRef)(null);return(0,s.jsxs)("div",{children:["useState:",(0,s.jsx)("button",{onClick:function(){i((function(e){return e+1}))},children:"Click Me"}),(0,s.jsxs)("label",{children:["Clicked ",t," time(s)"]}),(0,s.jsxs)("label",{children:["Rendered ",++l.current," time(s)"]}),(0,s.jsxs)("span",{ref:a,children:["Clicked at ",t?new Date(Date.now()).toLocaleTimeString():""]}),(0,s.jsxs)("span",{children:["Rendered at ",new Date(Date.now()).toLocaleTimeString()]})]})}function u(){var e=(0,c.useRef)(0),n=(0,c.useRef)(0),t=(0,c.useRef)(null),i=function(){var e=(0,c.useState)(0),n=(0,r.Z)(e,2)[1];return(0,c.useCallback)((function(){n((function(e){return e+1}))}),[])}();return(0,s.jsxs)("div",{children:["useRef:",(0,s.jsx)("button",{onClick:function(){e.current++,t.current&&(t.current.innerText="Clicked at ".concat(new Date(Date.now()).toLocaleTimeString()))},children:"Click Me"}),(0,s.jsx)("button",{onClick:function(){i()},children:"Force Update"}),(0,s.jsxs)("label",{children:["Clicked ",e.current," time(s)"]}),(0,s.jsxs)("label",{children:["Rendered ",++n.current," time(s)"]}),(0,s.jsx)("span",{ref:t,children:"Clicked at "}),(0,s.jsxs)("span",{children:["Rendered at ",new Date(Date.now()).toLocaleTimeString()]})]})}}}]);
//# sourceMappingURL=840.16d6630a.chunk.js.map