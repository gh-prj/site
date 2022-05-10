import React, { useState, useRef } from 'react';
import { useForceUpdate } from '../../../../hooks/useForceUpdate';
import styles from "./UseRef.module.scss"

const UseRef = () => {
    return (
        <div className={styles.container}>
            <ClickCounter1 />
            <ClickCounter2 />
        </div >
    );
}

export default UseRef;

function ClickCounter1() {
    const [count, setCount] = useState(0);
    const refRend = useRef(0)
    const refSpan = useRef<HTMLSpanElement>(null)
    const onClick = () => {
        setCount(x => x + 1)
    }
    return (
        <div>
            useState:
            <button onClick={onClick}>Click Me</button>
            <label>Clicked {count} time(s)</label>
            <label>Rendered {++refRend.current} time(s)</label>
            <span ref={refSpan}>Clicked at {count ? new Date(Date.now()).toLocaleTimeString() : ""}</span>
            <span>Rendered at {new Date(Date.now()).toLocaleTimeString()}</span>
        </div>
    )
}

function ClickCounter2() {
    const refCnt = useRef(0)
    const refRend = useRef(0)
    const refSpan = useRef<HTMLSpanElement>(null)
    const forceUpdate = useForceUpdate()
    const onClick = () => {
        refCnt.current++
        if (refSpan.current)
            refSpan.current.innerText = `Clicked at ${new Date(Date.now()).toLocaleTimeString()}`
    }
    const onClick2 = () => {
        forceUpdate()
    }
    return (
        <div>
            useRef:
            <button onClick={onClick}>Click Me</button>
            <button onClick={onClick2}>Force Update</button>
            <label>Clicked {refCnt.current} time(s)</label>
            <label>Rendered {++refRend.current} time(s)</label>
            <span ref={refSpan}>Clicked at </span>
            <span>Rendered at {new Date(Date.now()).toLocaleTimeString()}</span>
        </div>
    )
}