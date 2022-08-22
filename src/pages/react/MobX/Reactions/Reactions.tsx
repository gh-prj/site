import { observer, useLocalObservable } from 'mobx-react';
import { action, autorun, IReactionPublic, reaction, when } from 'mobx';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Reactions.module.scss'
import { Store } from './store/store';

const Reactions = observer(() => {
    const refValue = useRef<HTMLSpanElement>(null)
    const refValue2 = useRef<HTMLSpanElement>(null)
    const refValue3 = useRef<HTMLSpanElement>(null)
    const refValue4 = useRef<HTMLSpanElement>(null)
    const refValue5 = useRef<HTMLSpanElement>(null)
    const refValue6 = useRef<HTMLSpanElement>(null)
    const refMsg3 = useRef<HTMLSpanElement>(null)
    const refValue8 = useRef<HTMLSpanElement>(null)
    const refValue9 = useRef<HTMLSpanElement>(null)
    const refValue10 = useRef<HTMLSpanElement>(null)
    const refBtn = useRef<HTMLButtonElement>(null)
    const refMsg = useRef<HTMLSpanElement>(null)
    const refMsg2 = useRef<HTMLSpanElement>(null)
    const [store] = useState(new Store());
    const [store2] = useState(new Store());
    const [store3] = useState(new Store());
    const [store4] = useState(new Store());
    const [store5] = useState(new Store());
    const [store6] = useState(new Store());
    const [store7] = useState(new Store());
    const timer = useLocalObservable(() => ({
        isClicked: false,
        value: 0,
        start() {
            this.isClicked = false
            this.value = 5
        },
        stop() {
            this.isClicked = true
        },
        decrease() {
            this.value = Math.max(this.value - 1, 0)
        },
        get isRunning() {
            return (!this.isClicked && this.value > 0)
        }
    }))

    // when + timeout
    useEffect(() => {
        const dispose = autorun(() => {
            if (timer.value === 5 && !timer.isClicked) {
                setTimeout(() => {
                    const handler = setInterval(() => {
                        if (timer.isClicked || timer.value < 1) {
                            clearInterval(handler)
                        }
                        else {
                            timer.decrease()
                        }
                    }, 1000)
                }, 0)
            }
        })
        return () => {
            dispose()
        };
    }, []);

    // when + timeout
    const startTimer = () => {
        refMsg3.current!.textContent = "<- Click to stop the timer"
        when(
            () => timer.isClicked,
            () => {
                refMsg3.current!.textContent = "Timer stopped"
            },
            {
                timeout: 5000,
                onError: (error) => {
                    console.log(error)
                    refMsg3.current!.textContent = "Time out"
                }
            }
        )
    }

    // useEffect
    useEffect(() => {
        refValue.current!.textContent = store.value.toString()
    }, [store.value]);

    // autorun
    useEffect(() => {
        const dispose = autorun(() => {
            refValue2.current!.textContent = store2.value.toString()
        })
        return () => {
            dispose()
            console.log('autorun: disposed')
        };
    }, []);

    // reaction
    useEffect(() => {
        let disposer: IReactionPublic;
        reaction(
            () => [store3.value, store3.tripleValue],
            (val, prev, r) => {
                disposer = r
                refValue3.current!.textContent = `curr: ${val} ;  prev: ${prev}`
            }
        )
        return () => {
            console.log('reaction: disposing...')
            console.log('disposer: ', disposer)
            if (disposer) {
                console.log('isDisposed_: ' + (disposer as any).isDisposed_)
                disposer.dispose()
                console.log('reaction: disposed')
                console.log('isDisposed_: ' + (disposer as any).isDisposed_)
            }
        };
    }, []);

    // when + effect
    useEffect(() => {
        const dispose = autorun(() => {
            refValue4.current!.textContent = store4.value.toString()
            if (store4.value % 3 !== 2) {
                refMsg.current!.textContent = ""
            }
        })
        return () => {
            dispose()
        };
    }, []);

    // when + effect
    useEffect(() => {
        const dispose = when(
            () => store4.value % 3 === 2,
            () => {
                refMsg.current!.textContent = ": value % 3 === 2"
            }
        )
        return () => {
            dispose()
        }
    }, []);

    // await when
    useEffect(() => {
        const dispose = autorun(() => {
            refValue5.current!.textContent = store5.value.toString()
            if (store5.value % 4 !== 3) {
                refMsg2.current!.textContent = ""
            }
        })
        return () => {
            dispose()
        };
    }, []);

    // await when
    useEffect(() => {
        let whenPromise: Promise<void> & { cancel(): void };
        (async () => {
            whenPromise = when(() => store5.value % 4 === 3)
            await whenPromise
            refMsg2.current!.textContent = ": store.value % 4 === 3"
        })()
        return () => {
            console.log('await when: canceling promise...')
            whenPromise.cancel()
            console.log('canceled')
        }
    }, []);

    // autorun + delay (throttling)
    useEffect(() => {
        const dispose = autorun(() => {
            refValue6.current!.textContent = store6.value.toString()
        }, { delay: 1000 })
        return () => {
            dispose()
        };
    }, []);

    // autorun + scheduler
    useEffect(() => {
        const colors = ['#f00', '#0a0', '#55f']
        const dispose = autorun(
            () => {
                refValue8.current!.textContent = store7.value.toString();
            },
            {
                scheduler: fn => {
                    if (store7.value !== 6) {
                        fn()
                        refValue8.current!.style.color = colors[~~(store7.value / 3) % 3]
                    }
                }
            }
        )
        let skip = false
        const dispose2 = autorun(
            () => {
                const val = store7.value.toString()
                if (!skip) {
                    refValue9.current!.textContent = val;
                    refValue9.current!.style.color = colors[~~(store7.value / 3) % 3]
                }
            },
            {
                scheduler: fn => {
                    skip = store7.value === 6
                    fn()
                }
            }
        )
        const dispose3 = autorun(
            () => {
                refValue10.current!.textContent = store7.value.toString();
            },
            {
                scheduler: fn => {
                    setTimeout(() => {
                        fn()
                        refValue10.current!.style.color = colors[~~(store7.value / 3) % 3]
                    }, 500)
                }
            }
        )
        return () => {
            console.log('scheduler: disposing...')
            dispose()
            dispose2()
            dispose3()
            console.log('scheduler: disposed')
        };
    }, []);

    return (
        <div className={styles.container}>
            <pre className={styles.pre1}><code>{`class Store {
    value = 0
    constructor() {
        makeObservable(this, {
            value: observable,
            increment: action.bound,
            tripleValue: computed
        })
    }
    increment() {
        this.value++
    }
    get tripleValue() {
        return this.value * 3
    }
}`}</code></pre>
            <details>
                <summary>useEffect</summary>
                <pre className={styles.pre2}><code>{`const Cmpnnt = observer(() => {
    const refValue = useRef<HTMLSpanElement>(null)
    const [store] = useState(new Store());
    useEffect(() => {
        refValue.current!.textContent = store.value.toString()
    }, [store.value]);
    return (
        <div>
            <button onClick={store.increment}>+1</button>
            <span ref={refValue}></span>
        </div>
    );
})`}</code></pre>
                <button onClick={store.increment} className={styles.btn2}>+1</button>
                <span ref={refValue}></span><br />
            </details>
            <details>
                <summary>autorun</summary>
                <pre className={styles.pre3}><code>{`const Cmpnnt = observer(() => {
    const refValue = useRef<HTMLSpanElement>(null)
    const [store] = useState(new Store());
    useEffect(() => {
        const dispose = autorun(() => {
            refValue.current!.textContent = store.value.toString()
        })
        return () => {
            dispose()
        };
    }, []);
    return (
        <div>
            <button onClick={store.increment}>+1</button>
            <span ref={refValue}></span>
        </div>
    );
})`}</code></pre>
                <button onClick={store2.increment} className={styles.btn3}>+1</button>
                <span ref={refValue2}></span><br />
            </details>
            <details>
                <summary>reaction</summary>
                <pre className={styles.pre4}><code>{`const Cmpnnt = observer(() => {
    const refValue = useRef<HTMLSpanElement>(null)
    const [store] = useState(new Store());
    useEffect(() => {
        let disposer: IReactionPublic;
        reaction(
            () => [store.value, store.tripleValue],
            (val, prev, r) => {
                disposer = r
                refValue.current!.textContent = ${"`"}curr: ${"$"}{val} ;  prev: ${"$"}{prev}
            }
        )
        return () => {
            if (disposer) {
                disposer.dispose()
            }
        };
    }, []);
    return (
        <div>
            <button onClick={store.increment}>+1</button>
            <span ref={refValue}></span>
        </div>
    );
})`}</code></pre>
                <button onClick={store3.increment} className={styles.btn4}>+1</button>
                <span ref={refValue3}></span><br />
            </details>
            <details>
                <summary>when + effect</summary>
                <pre className={styles.pre5}><code>{`const Cmpnnt = observer(() => {
    const refValue = useRef<HTMLSpanElement>(null)
    const refMsg = useRef<HTMLSpanElement>(null)
    const [store] = useState(new Store());
    useEffect(() => {
        const dispose = autorun(() => {
                refValue.current!.textContent = store.value.toString()
            if (store.value % 3 !== 2) {
                refMsg.current!.textContent = ""
            }
        })
        return () => {
            dispose()
        };
    }, []);
    useEffect(() => {
        const dispose = when(
            () => store.value % 3 === 2,
            () => {
                refMsg.current!.textContent = ": value % 3 === 2"
            }
        )
        return () => {
            dispose()
        }
    }, []);
    return (
        <div>
            <button onClick={store.increment}>+1</button>
            <span ref={refValue}></span>
            <span ref={refMsg}></span>
        </div>
    );
})`}</code></pre>
                <button onClick={store4.increment} className={styles.btn5} >+1</button>
                <span ref={refValue4}></span>
                <span ref={refMsg}></span>
            </details>
            <details>
                <summary>await when</summary>
                <pre className={styles.pre6}><code>{`const Cmpnnt = observer(() => {
    const refValue = useRef<HTMLSpanElement>(null)
    const refMsg = useRef<HTMLSpanElement>(null)
    const [store] = useState(new Store());
    useEffect(() => {
        const dispose = autorun(() => {
            refValue.current!.textContent = store.value.toString()
            if (store.value % 4 !== 3) {
                refMsg.current!.textContent = ""
            }
        })
        return () => {
            dispose()
        };
    }, []);
    useEffect(() => {
        let whenPromise: Promise<void> & { cancel(): void };
        (async () => {
            whenPromise = when(() => store5.value % 4 === 3)
            await whenPromise
            refMsg2.current!.textContent = ": store.value % 4 === 3"
        })()
        return () => {
            whenPromise.cancel()
        }
    }, []);
    return (
        <div>
            <button onClick={store.increment}>+1</button>
            <span ref={refValue}></span>
            <span ref={refMsg}></span>
        </div>
    );
})`}</code></pre>
                <button onClick={store5.increment} className={styles.btn6} >+1</button>
                <span ref={refValue5}></span>
                <span ref={refMsg2}></span>
            </details>
            <details>
                <summary>autorun + delay (throttling)</summary>
                <pre className={styles.pre7}><code>{`const Cmpnnt = observer(() => {
    const refValue = useRef<HTMLSpanElement>(null)
    const [store] = useState(new Store());
    useEffect(() => {
        const dispose = autorun(() => {
            refValue.current!.textContent = store.value.toString()
        }, { delay: 500 })
        return () => {
            dispose()
        };
    }, []);
    return (
        <div>
            <button onClick={store.increment}>+1</button>
            <span ref={refValue}></span>
        </div>
    );
})`}</code></pre>
                <button onClick={store6.increment} className={styles.btn7} >+1</button>
                <span ref={refValue6}></span>
            </details>
            <details open>
                <summary>when + timeout</summary>
                <pre className={styles.pre8}><code>{`const Cmpnnt = observer(() => {
    const refBtn = useRef<HTMLButtonElement>(null)
    const refMsg = useRef<HTMLSpanElement>(null)
    const timer = useLocalObservable(() => ({
        isClicked: false,
        value: 0,
        start() {
            this.isClicked = false
            this.value = 5
        },
        stop() {
            this.isClicked = true
        },
        decrease() {
            this.value = Math.max(this.value - 1, 0)
        },
        get isRunning() {
            return (!this.isClicked && this.value > 0)
        }
    }))
    useEffect(() => {
        const dispose = autorun(() => {
            if (timer.value === 5 && !timer.isClicked) {
                setTimeout(() => {
                    const handler = setInterval(() => {
                        if (timer.isClicked || timer.value < 1) {
                            clearInterval(handler)
                        }
                        else {
                            timer.decrease()
                        }
                    }, 1000)
                }, 0)
            }
        })
        return () => {
            dispose()
        };
    }, []);
    const startTimer = () => {
        refMsg.current!.textContent = "<- Click to stop the timer"
        when(
            () => timer.isClicked,
            () => {
                refMsg.current!.textContent = "Timer stopped"
            },
            {
                timeout: 5000,
                onError: (error) => {
                    refMsg.current!.textContent = "Time out"
                }
            }
        )
    }
    return (
        <div>
            <button
                onClick={() => {
                    timer.start()
                    startTimer()
                }}
                disabled={timer.isRunning}
            >Run</button>
            <button
                ref={refBtn}
                onClick={timer.stop}
                disabled={!timer.isRunning}
            >{timer.value} sec</button>
            <span ref={refMsg}></span>
        </div>
    );
})`}</code></pre>
                <button
                    onClick={() => {
                        timer.start()
                        startTimer()
                    }}
                    disabled={timer.isRunning}
                    className={styles.btn8}
                >Run</button>
                <button
                    ref={refBtn}
                    onClick={timer.stop}
                    disabled={!timer.isRunning}
                    className={styles.btn8}
                >{timer.value} sec</button>
                <span ref={refMsg3}></span>
            </details>
            <details>
                <summary>autorun + scheduler</summary>
                <pre className={styles.pre9}><code>{`const Cmpnnt = observer(() => {
    const refValue = useRef<HTMLSpanElement>(null)
    const [store] = useState(new Store());
    useEffect(() => {
        const colors = ['red', 'green', 'blue']
        const dispose = autorun(
            () => {
                refValue.current!.textContent = store.value.toString();
            },
            {
                scheduler: fn => {
                    if (store.value !== 6) { 
                        fn() 
                        refValue.current!.style.color = colors[~~(store.value / 3) % 3]
                    }
                }
            }
        )
        let skip = false
        const dispose2 = autorun(
            () => {
                const val = store.value.toString()
                if (!skip) {
                    refValue2.current!.textContent = val;
                    refValue2.current!.style.color = colors[~~(store.value / 3) % 3]
                }
            },
            {
                scheduler: fn => {
                    skip = store.value === 6
                    fn()
                }
            }
        )
        const dispose3 = autorun(
            () => {
                refValue3.current!.textContent = store.value.toString();
            },
            {
                scheduler: fn => {
                    setTimeout(() => {
                        fn()
                        refValue3.current!.style.color = colors[~~(store.value / 3) % 3]
                    }, 500)
                }
            }
        )
        return () => {
            dispose()
            dispose2()
            dispose3()
        };
    }, []);
    return (
        <div>
            <button onClick={action(() => store.value = 0)} className={styles.btn9} >Reset</button>
            <button onClick={store.increment}>+1</button>
            <span ref={refValue}></span>
            <span ref={refValue2}></span>
            <span ref={refValue3}></span>
        </div>
    );
})`}</code></pre>
                <button onClick={action(() => store7.value = 0)} className={styles.btn9} >Reset</button>
                <button onClick={() => store7.increment()} className={styles.btn9} >+1</button>
                <span ref={refValue8} className={styles.sched}></span>
                <span ref={refValue9} className={styles.sched}></span>
                <span ref={refValue10} className={styles.sched}></span>
            </details>
        </div>
    );
})

export default Reactions;
