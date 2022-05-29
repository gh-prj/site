import React, { useEffect, useMemo, useState } from 'react';
import styles from './UseMemo.module.scss'

const UseMemo = () => {
    return (
        <div className={styles.content}>
            <WithoutUseMemo />
            <WithUseMemo />
        </div>
    );
}

export default UseMemo;

const calc = (n: number) => {
    for (let i = 0; i < 1000000000; i++) {
        n++
    }
    return n
}

function WithoutUseMemo() {
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState<string[]>([]);
    const [count, setCount] = useState(0);
    const result = loaded && calc(count) || 1000000000

    const addItem = () => {
        setItems([...items, `Item ${items.length + 1}`])
    }
    useEffect(() => {
        setLoaded(true)
    }, []);
    return (
        <div>
            <div>
                <br />
                <button onClick={addItem}>Add Item</button>
                <ul>
                    {items.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </div>
            <div>
                Count: {count}<br />
                <button onClick={() => setCount(count + 1)}>  +1  </button><br />
                {result}
            </div>
        </div>
    )
}

function WithUseMemo() {
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState<string[]>([]);
    const [count, setCount] = useState(0);
    const result = useMemo(() => loaded && calc(count) || 1000000000, [count])

    const addItem = () => {
        setItems([...items, `Item ${items.length + 1}`])
    }
    useEffect(() => {
        setLoaded(true)
    }, []);
    return (
        <div>
            <div>
                <br />
                <button onClick={addItem}>Add Item</button>
                <ul>
                    {items.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </div>
            <div>
                Count: {count}<br />
                <button onClick={() => setCount(count + 1)}>  +1  </button><br />
                {result}
            </div>
        </div>
    )
}