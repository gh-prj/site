"use strict";(self.webpackChunkgh_react_site=self.webpackChunkgh_react_site||[]).push([[2988],{2988:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var i=n(2791),o=n(5671),s=n(3144),c=n(4098),r=new(function(){function t(){(0,o.Z)(this,t),this.count=0,this.increment=this.increment.bind(this),(0,c.ky)(this)}return(0,s.Z)(t,[{key:"increment",value:function(){this.count=this.count+1,console.log(this.count)}},{key:"decrement",value:function(){this.count=this.count-1,console.log(this.count)}}]),t}()),u="Counter_counter__RJ2Z9",d="Counter_buttons__jydIx",l="Counter_btn__paaRp",a=n(9023),h=n(184),f=(0,a.Pi)((function(){return(0,h.jsxs)("div",{className:u,children:["Count = "+r.count,(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("button",{className:l,onClick:function(){return r.decrement()},children:"-"}),(0,h.jsx)("button",{className:l,onClick:r.increment,children:"+"})]})]})})),p=n(885),v="TimerView_timer__Kcv6F",m=(0,s.Z)((function t(){var e,n=this;(0,o.Z)(this,t),this.seconds=0,this.isStopped=!0,this.start=void 0,this.stop=void 0,this.start=function(){var t=this;console.log("start timer"),this.isStopped=!1,e=window.setInterval((function(){(0,c.z)((function(){t.seconds++,console.log(t.seconds)}))}),1e3)},this.stop=function(){console.log("stop timer"),clearInterval(e),n.isStopped=!0},(0,c.rC)(this,{seconds:c.LO,isStopped:c.LO,start:c.aD.bound,stop:c.aD.bound})})),x=(0,a.Pi)((function(){var t=(0,i.useState)(new m),e=(0,p.Z)(t,1)[0];return(0,i.useEffect)((function(){return function(){e.stop()}}),[]),(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("button",{onClick:function(){return e.start()},disabled:!e.isStopped,children:"Start Timer"}),(0,h.jsx)("button",{onClick:e.stop,disabled:e.isStopped,children:"Stop Timer"}),(0,h.jsx)("span",{children:e.seconds})]})})),_=n(32),j="TimerView2_timer__O3MRj",k=(0,a.Pi)((function(){var t=(0,_.fv)((function(){return{value:0,increment:function(){this.value++}}}));return(0,i.useEffect)((function(){var e=setInterval(t.increment,500);return function(){clearInterval(e)}}),[]),(0,h.jsx)("div",{className:j,children:(0,h.jsxs)("span",{children:["Value: ",t.value]})})})),b=new(function(){function t(){(0,o.Z)(this,t),this.todos=[{id:1,title:"Todo 1",completed:!1},{id:2,title:"Todo 2",completed:!0},{id:3,title:"Todo 3",completed:!1}],(0,c.ky)(this)}return(0,s.Z)(t,[{key:"add",value:function(t){var e;this.todos.push({id:((null===(e=this.todos[this.todos.length-1])||void 0===e?void 0:e.id)||0)+1,title:t,completed:!1})}},{key:"remove",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t}))}},{key:"toggleCompleted",value:function(t){t.completed=!t.completed}}]),t}()),g="Todo_todos__oiywz",C="Todo_todo__K7gWc",y=(0,a.Pi)((function(){var t=(0,i.useState)(""),e=(0,p.Z)(t,2),n=e[0],o=e[1];return(0,h.jsxs)("div",{className:g,children:[(0,h.jsx)("input",{type:"text",value:n,onChange:function(t){return o(t.target.value)}}),(0,h.jsx)("button",{disabled:!n.length,onClick:function(){return b.add(n)},children:"Add"}),b.todos.map((function(t){return(0,h.jsxs)("div",{className:C,children:[(0,h.jsx)("input",{type:"checkbox",checked:t.completed,onChange:function(){return b.toggleCompleted(t)}}),t.title,(0,h.jsx)("button",{onClick:function(){return b.remove(t.id)},children:"x"})]},t.id)}))]})})),w=function(){return(0,h.jsxs)("div",{children:[(0,h.jsx)(f,{}),(0,h.jsx)(x,{}),(0,h.jsx)(k,{}),(0,h.jsx)(y,{})]})}}}]);
//# sourceMappingURL=2988.dd884376.chunk.js.map