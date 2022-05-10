import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './UseEffect.module.scss'
const UseEffect = () => {
    const [value, setValue] = useState("");
    const prev = useRef("")
    const refInput = useRef<HTMLInputElement>(null)
    useEffect(() => {
        refInput.current?.focus()
    }, []);
    useEffect(() => {
        prev.current = value
    }, [value]);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <div className={styles.content}>
            <label /><input type="text" ref={refInput} value={value} onChange={onChange} placeholder="Type something here" /><br />
            <label /><input type="text" value={prev.current} readOnly />
        </div>
    );
}

export default UseEffect;
