"use strict";(self.webpackChunkgh_react_site=self.webpackChunkgh_react_site||[]).push([[2446],{2446:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var s=t(5861),r=t(885),o=t(7757),u=t.n(o),c=t(9023),i=t(32),l=t(4098),a=t(2791),f="Reactions_container__y2ojO",d="Reactions_sched__WmeAc",p="Reactions_btn2__gKbTZ",v="Reactions_btn3__cjtUo",m="Reactions_btn4__9dsor",h="Reactions_btn5__paE-I",x="Reactions_btn6__TEE0d",C="Reactions_btn7__3pbEr",b="Reactions_btn8__ISVzt",_="Reactions_btn9__sdMEh",j="Reactions_pre1__WFdwW",g="Reactions_pre2__hnQLN",R="Reactions_pre3__3De0w",S="Reactions_pre4__JwaOI",k="Reactions_pre5__DX6JR",E="Reactions_pre6__u-hEk",w="Reactions_pre7__bM-OV",V="Reactions_pre8__RjBpV",M="Reactions_pre9__b5KjR",N=t(5671),y=t(3144),T=function(){function n(){(0,N.Z)(this,n),this.value=0,(0,l.rC)(this,{value:l.LO,increment:l.aD.bound,tripleValue:l.Fl})}return(0,y.Z)(n,[{key:"increment",value:function(){this.value++,console.log(this.value)}},{key:"tripleValue",get:function(){return 3*this.value}}]),n}(),H=t(184),L=(0,c.Pi)((function(){var n=(0,a.useRef)(null),e=(0,a.useRef)(null),t=(0,a.useRef)(null),o=(0,a.useRef)(null),c=(0,a.useRef)(null),N=(0,a.useRef)(null),y=(0,a.useRef)(null),L=(0,a.useRef)(null),Z=(0,a.useRef)(null),P=(0,a.useRef)(null),D=(0,a.useRef)(null),I=(0,a.useRef)(null),O=(0,a.useRef)(null),B=(0,a.useState)(new T),W=(0,r.Z)(B,1)[0],F=(0,a.useState)(new T),J=(0,r.Z)(F,1)[0],K=(0,a.useState)(new T),U=(0,r.Z)(K,1)[0],$=(0,a.useState)(new T),z=(0,r.Z)($,1)[0],A=(0,a.useState)(new T),Q=(0,r.Z)(A,1)[0],X=(0,a.useState)(new T),q=(0,r.Z)(X,1)[0],G=(0,a.useState)(new T),Y=(0,r.Z)(G,1)[0],nn=(0,i.fv)((function(){return{isClicked:!1,value:0,start:function(){this.isClicked=!1,this.value=5},stop:function(){this.isClicked=!0},decrease:function(){this.value=Math.max(this.value-1,0)},get isRunning(){return!this.isClicked&&this.value>0}}}));(0,a.useEffect)((function(){var n=(0,l.EH)((function(){5!==nn.value||nn.isClicked||setTimeout((function(){var n=setInterval((function(){nn.isClicked||nn.value<1?clearInterval(n):nn.decrease()}),1e3)}),0)}));return function(){n()}}),[]);return(0,a.useEffect)((function(){n.current.textContent=W.value.toString()}),[W.value]),(0,a.useEffect)((function(){var n=(0,l.EH)((function(){e.current.textContent=J.value.toString()}));return function(){n(),console.log("autorun: disposed")}}),[]),(0,a.useEffect)((function(){var n;return(0,l.U5)((function(){return[U.value,U.tripleValue]}),(function(e,s,r){n=r,t.current.textContent="curr: ".concat(e," ;  prev: ").concat(s)})),function(){console.log("reaction: disposing..."),console.log("disposer: ",n),n&&(console.log("isDisposed_: "+n.isDisposed_),n.dispose(),console.log("reaction: disposed"),console.log("isDisposed_: "+n.isDisposed_))}}),[]),(0,a.useEffect)((function(){var n=(0,l.EH)((function(){o.current.textContent=z.value.toString(),z.value%3!==2&&(I.current.textContent="")}));return function(){n()}}),[]),(0,a.useEffect)((function(){var n=(0,l.gx)((function(){return z.value%3===2}),(function(){I.current.textContent=": value % 3 === 2"}));return function(){n()}}),[]),(0,a.useEffect)((function(){var n=(0,l.EH)((function(){c.current.textContent=Q.value.toString(),Q.value%4!==3&&(O.current.textContent="")}));return function(){n()}}),[]),(0,a.useEffect)((function(){var n;return(0,s.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,l.gx)((function(){return Q.value%4===3})),e.next=3,n;case 3:O.current.textContent=": store.value % 4 === 3";case 4:case"end":return e.stop()}}),e)})))(),function(){console.log("await when: canceling promise..."),n.cancel(),console.log("canceled")}}),[]),(0,a.useEffect)((function(){var n=(0,l.EH)((function(){N.current.textContent=q.value.toString()}),{delay:1e3});return function(){n()}}),[]),(0,a.useEffect)((function(){var n=["#f00","#0a0","#55f"],e=(0,l.EH)((function(){L.current.textContent=Y.value.toString()}),{scheduler:function(e){6!==Y.value&&(e(),L.current.style.color=n[~~(Y.value/3)%3])}}),t=!1,s=(0,l.EH)((function(){var e=Y.value.toString();t||(Z.current.textContent=e,Z.current.style.color=n[~~(Y.value/3)%3])}),{scheduler:function(n){t=6===Y.value,n()}}),r=(0,l.EH)((function(){P.current.textContent=Y.value.toString()}),{scheduler:function(e){setTimeout((function(){e(),P.current.style.color=n[~~(Y.value/3)%3]}),500)}});return function(){console.log("scheduler: disposing..."),e(),s(),r(),console.log("scheduler: disposed")}}),[]),(0,H.jsxs)("div",{className:f,children:[(0,H.jsx)("pre",{className:j,children:(0,H.jsx)("code",{children:"class Store {\n    value = 0\n    constructor() {\n        makeObservable(this, {\n            value: observable,\n            increment: action.bound,\n            tripleValue: computed\n        })\n    }\n    increment() {\n        this.value++\n    }\n    get tripleValue() {\n        return this.value * 3\n    }\n}"})}),(0,H.jsxs)("details",{children:[(0,H.jsx)("summary",{children:"useEffect"}),(0,H.jsx)("pre",{className:g,children:(0,H.jsx)("code",{children:"const Cmpnnt = observer(() => {\n    const refValue = useRef<HTMLSpanElement>(null)\n    const [store] = useState(new Store());\n    useEffect(() => {\n        refValue.current!.textContent = store.value.toString()\n    }, [store.value]);\n    return (\n        <div>\n            <button onClick={store.increment}>+1</button>\n            <span ref={refValue}></span>\n        </div>\n    );\n})"})}),(0,H.jsx)("button",{onClick:W.increment,className:p,children:"+1"}),(0,H.jsx)("span",{ref:n}),(0,H.jsx)("br",{})]}),(0,H.jsxs)("details",{children:[(0,H.jsx)("summary",{children:"autorun"}),(0,H.jsx)("pre",{className:R,children:(0,H.jsx)("code",{children:"const Cmpnnt = observer(() => {\n    const refValue = useRef<HTMLSpanElement>(null)\n    const [store] = useState(new Store());\n    useEffect(() => {\n        const dispose = autorun(() => {\n            refValue.current!.textContent = store.value.toString()\n        })\n        return () => {\n            dispose()\n        };\n    }, []);\n    return (\n        <div>\n            <button onClick={store.increment}>+1</button>\n            <span ref={refValue}></span>\n        </div>\n    );\n})"})}),(0,H.jsx)("button",{onClick:J.increment,className:v,children:"+1"}),(0,H.jsx)("span",{ref:e}),(0,H.jsx)("br",{})]}),(0,H.jsxs)("details",{children:[(0,H.jsx)("summary",{children:"reaction"}),(0,H.jsx)("pre",{className:S,children:(0,H.jsx)("code",{children:"const Cmpnnt = observer(() => {\n    const refValue = useRef<HTMLSpanElement>(null)\n    const [store] = useState(new Store());\n    useEffect(() => {\n        let disposer: IReactionPublic;\n        reaction(\n            () => [store.value, store.tripleValue],\n            (val, prev, r) => {\n                disposer = r\n                refValue.current!.textContent = ".concat("`","curr: ","$","{val} ;  prev: ","$","{prev}\n            }\n        )\n        return () => {\n            if (disposer) {\n                disposer.dispose()\n            }\n        };\n    }, []);\n    return (\n        <div>\n            <button onClick={store.increment}>+1</button>\n            <span ref={refValue}></span>\n        </div>\n    );\n})")})}),(0,H.jsx)("button",{onClick:U.increment,className:m,children:"+1"}),(0,H.jsx)("span",{ref:t}),(0,H.jsx)("br",{})]}),(0,H.jsxs)("details",{children:[(0,H.jsx)("summary",{children:"when + effect"}),(0,H.jsx)("pre",{className:k,children:(0,H.jsx)("code",{children:'const Cmpnnt = observer(() => {\n    const refValue = useRef<HTMLSpanElement>(null)\n    const refMsg = useRef<HTMLSpanElement>(null)\n    const [store] = useState(new Store());\n    useEffect(() => {\n        const dispose = autorun(() => {\n                refValue.current!.textContent = store.value.toString()\n            if (store.value % 3 !== 2) {\n                refMsg.current!.textContent = ""\n            }\n        })\n        return () => {\n            dispose()\n        };\n    }, []);\n    useEffect(() => {\n        const dispose = when(\n            () => store.value % 3 === 2,\n            () => {\n                refMsg.current!.textContent = ": value % 3 === 2"\n            }\n        )\n        return () => {\n            dispose()\n        }\n    }, []);\n    return (\n        <div>\n            <button onClick={store.increment}>+1</button>\n            <span ref={refValue}></span>\n            <span ref={refMsg}></span>\n        </div>\n    );\n})'})}),(0,H.jsx)("button",{onClick:z.increment,className:h,children:"+1"}),(0,H.jsx)("span",{ref:o}),(0,H.jsx)("span",{ref:I})]}),(0,H.jsxs)("details",{children:[(0,H.jsx)("summary",{children:"await when"}),(0,H.jsx)("pre",{className:E,children:(0,H.jsx)("code",{children:'const Cmpnnt = observer(() => {\n    const refValue = useRef<HTMLSpanElement>(null)\n    const refMsg = useRef<HTMLSpanElement>(null)\n    const [store] = useState(new Store());\n    useEffect(() => {\n        const dispose = autorun(() => {\n            refValue.current!.textContent = store.value.toString()\n            if (store.value % 4 !== 3) {\n                refMsg.current!.textContent = ""\n            }\n        })\n        return () => {\n            dispose()\n        };\n    }, []);\n    useEffect(() => {\n        let whenPromise: Promise<void> & { cancel(): void };\n        (async () => {\n            whenPromise = when(() => store5.value % 4 === 3)\n            await whenPromise\n            refMsg2.current!.textContent = ": store.value % 4 === 3"\n        })()\n        return () => {\n            whenPromise.cancel()\n        }\n    }, []);\n    return (\n        <div>\n            <button onClick={store.increment}>+1</button>\n            <span ref={refValue}></span>\n            <span ref={refMsg}></span>\n        </div>\n    );\n})'})}),(0,H.jsx)("button",{onClick:Q.increment,className:x,children:"+1"}),(0,H.jsx)("span",{ref:c}),(0,H.jsx)("span",{ref:O})]}),(0,H.jsxs)("details",{children:[(0,H.jsx)("summary",{children:"autorun + delay (throttling)"}),(0,H.jsx)("pre",{className:w,children:(0,H.jsx)("code",{children:"const Cmpnnt = observer(() => {\n    const refValue = useRef<HTMLSpanElement>(null)\n    const [store] = useState(new Store());\n    useEffect(() => {\n        const dispose = autorun(() => {\n            refValue.current!.textContent = store.value.toString()\n        }, { delay: 500 })\n        return () => {\n            dispose()\n        };\n    }, []);\n    return (\n        <div>\n            <button onClick={store.increment}>+1</button>\n            <span ref={refValue}></span>\n        </div>\n    );\n})"})}),(0,H.jsx)("button",{onClick:q.increment,className:C,children:"+1"}),(0,H.jsx)("span",{ref:N})]}),(0,H.jsxs)("details",{open:!0,children:[(0,H.jsx)("summary",{children:"when + timeout"}),(0,H.jsx)("pre",{className:V,children:(0,H.jsx)("code",{children:'const Cmpnnt = observer(() => {\n    const refBtn = useRef<HTMLButtonElement>(null)\n    const refMsg = useRef<HTMLSpanElement>(null)\n    const timer = useLocalObservable(() => ({\n        isClicked: false,\n        value: 0,\n        start() {\n            this.isClicked = false\n            this.value = 5\n        },\n        stop() {\n            this.isClicked = true\n        },\n        decrease() {\n            this.value = Math.max(this.value - 1, 0)\n        },\n        get isRunning() {\n            return (!this.isClicked && this.value > 0)\n        }\n    }))\n    useEffect(() => {\n        const dispose = autorun(() => {\n            if (timer.value === 5 && !timer.isClicked) {\n                setTimeout(() => {\n                    const handler = setInterval(() => {\n                        if (timer.isClicked || timer.value < 1) {\n                            clearInterval(handler)\n                        }\n                        else {\n                            timer.decrease()\n                        }\n                    }, 1000)\n                }, 0)\n            }\n        })\n        return () => {\n            dispose()\n        };\n    }, []);\n    const startTimer = () => {\n        refMsg.current!.textContent = "<- Click to stop the timer"\n        when(\n            () => timer.isClicked,\n            () => {\n                refMsg.current!.textContent = "Timer stopped"\n            },\n            {\n                timeout: 5000,\n                onError: (error) => {\n                    refMsg.current!.textContent = "Time out"\n                }\n            }\n        )\n    }\n    return (\n        <div>\n            <button\n                onClick={() => {\n                    timer.start()\n                    startTimer()\n                }}\n                disabled={timer.isRunning}\n            >Run</button>\n            <button\n                ref={refBtn}\n                onClick={timer.stop}\n                disabled={!timer.isRunning}\n            >{timer.value} sec</button>\n            <span ref={refMsg}></span>\n        </div>\n    );\n})'})}),(0,H.jsx)("button",{onClick:function(){nn.start(),y.current.textContent="<- Click to stop the timer",(0,l.gx)((function(){return nn.isClicked}),(function(){y.current.textContent="Timer stopped"}),{timeout:5e3,onError:function(n){console.log(n),y.current.textContent="Time out"}})},disabled:nn.isRunning,className:b,children:"Run"}),(0,H.jsxs)("button",{ref:D,onClick:nn.stop,disabled:!nn.isRunning,className:b,children:[nn.value," sec"]}),(0,H.jsx)("span",{ref:y})]}),(0,H.jsxs)("details",{children:[(0,H.jsx)("summary",{children:"autorun + scheduler"}),(0,H.jsx)("pre",{className:M,children:(0,H.jsx)("code",{children:"const Cmpnnt = observer(() => {\n    const refValue = useRef<HTMLSpanElement>(null)\n    const [store] = useState(new Store());\n    useEffect(() => {\n        const colors = ['red', 'green', 'blue']\n        const dispose = autorun(\n            () => {\n                refValue.current!.textContent = store.value.toString();\n            },\n            {\n                scheduler: fn => {\n                    if (store.value !== 6) { \n                        fn() \n                        refValue.current!.style.color = colors[~~(store.value / 3) % 3]\n                    }\n                }\n            }\n        )\n        let skip = false\n        const dispose2 = autorun(\n            () => {\n                const val = store.value.toString()\n                if (!skip) {\n                    refValue2.current!.textContent = val;\n                    refValue2.current!.style.color = colors[~~(store.value / 3) % 3]\n                }\n            },\n            {\n                scheduler: fn => {\n                    skip = store.value === 6\n                    fn()\n                }\n            }\n        )\n        const dispose3 = autorun(\n            () => {\n                refValue3.current!.textContent = store.value.toString();\n            },\n            {\n                scheduler: fn => {\n                    setTimeout(() => {\n                        fn()\n                        refValue3.current!.style.color = colors[~~(store.value / 3) % 3]\n                    }, 500)\n                }\n            }\n        )\n        return () => {\n            dispose()\n            dispose2()\n            dispose3()\n        };\n    }, []);\n    return (\n        <div>\n            <button onClick={action(() => store.value = 0)} className={styles.btn9} >Reset</button>\n            <button onClick={store.increment}>+1</button>\n            <span ref={refValue}></span>\n            <span ref={refValue2}></span>\n            <span ref={refValue3}></span>\n        </div>\n    );\n})"})}),(0,H.jsx)("button",{onClick:(0,l.aD)((function(){return Y.value=0})),className:_,children:"Reset"}),(0,H.jsx)("button",{onClick:function(){return Y.increment()},className:_,children:"+1"}),(0,H.jsx)("span",{ref:L,className:d}),(0,H.jsx)("span",{ref:Z,className:d}),(0,H.jsx)("span",{ref:P,className:d})]})]})}))},5861:function(n,e,t){function s(n,e,t,s,r,o,u){try{var c=n[o](u),i=c.value}catch(l){return void t(l)}c.done?e(i):Promise.resolve(i).then(s,r)}function r(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var u=n.apply(e,t);function c(n){s(u,r,o,c,i,"next",n)}function i(n){s(u,r,o,c,i,"throw",n)}c(void 0)}))}}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=2446.0f0b7b82.chunk.js.map