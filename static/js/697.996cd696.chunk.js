"use strict";(self.webpackChunkgh_react_site=self.webpackChunkgh_react_site||[]).push([[697],{697:function(e,r,t){t.r(r),t.d(r,{default:function(){return O}});var n=t(152),i=t(791);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=t(184),a=function(){var e=(0,i.useRef)(1);return(0,i.useEffect)((function(){e.current++})),(0,u.jsxs)("div",{children:[" Renders: ",e.current," "]})},d=["children","onClick","showRenders","title"],f=function(e){var r=e.children,t=e.onClick,n=e.showRenders,i=e.title,c=s(e,d);return(0,u.jsxs)("div",{style:{display:"inline-flex",flexDirection:"column"},children:[void 0!==i&&(i.trim()?i:(0,u.jsx)(u.Fragment,{children:"\xa0"})),(0,u.jsx)("button",o(o({onClick:t},c),{},{children:r})),n&&(0,u.jsx)(a,{})]})},b=f,h=i.memo(f),j=["children","showRenders","title"],p=function(e){var r=e.children,t=e.showRenders,n=e.title,i=s(e,j);return(0,u.jsxs)("div",{style:{display:"inline-flex",flexDirection:"column"},children:[void 0!==n&&(n.trim()?n:(0,u.jsx)(u.Fragment,{children:"\xa0"})),(0,u.jsx)("label",o(o({},i),{},{children:r})),t&&(0,u.jsx)(a,{})]})},y="UseCallback_container__tA-n1",O=function(){var e=(0,i.useState)(0),r=(0,n.Z)(e,2),t=r[0],c=r[1],l=function(){c((function(e){return e+1}))},o=(0,i.useCallback)((function(){return l()}),[]),s=(0,i.useMemo)((function(){return{borderRadius:5}}),[]);return(0,u.jsxs)("div",{className:y,children:[(0,u.jsx)(p,{style:{background:"#dfd",border:"2px solid #595959"},showRenders:!0,title:"State",children:t}),(0,u.jsx)(b,{onClick:l,showRenders:!0,title:"onClick = {...}",style:{borderRadius:5},children:"State += 1"}),(0,u.jsx)(h,{onClick:o,showRenders:!0,title:"memo+useCallback",style:s,children:"State += 1"})]})}}}]);
//# sourceMappingURL=697.996cd696.chunk.js.map