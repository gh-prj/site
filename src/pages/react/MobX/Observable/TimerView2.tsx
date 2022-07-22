import { observer, useLocalObservable } from 'mobx-react';
import React, { useEffect } from 'react';
import styles from './TimerView2.module.scss'

const TimerView2 = observer(() => {
    const store = useLocalObservable(() => ({
        value: 0,
        increment() {
            this.value++
        }
    }))
    useEffect(() => {
        const handler = setInterval(store.increment, 500)
        return () => {
            clearInterval(handler)
        };
    }, []);

    return (
        <div className={styles.timer}>
            <span>Value: {store.value}</span>
        </div>
    );
})

export default TimerView2;
