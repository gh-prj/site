import React from 'react';
import counter from './store/counter';
import styles from './Counter.module.scss';
import { observer } from 'mobx-react';

const Counter = observer(() => {
    return (
        <div className={styles.counter}>
            {"Count = " + counter.count}
            <div className={styles.buttons}>
                <button className={styles.btn} onClick={() => counter.decrement()}>-</button>
                {/* <button className={styles.btn} onClick={() => counter.increment()}>+</button> */}
                <button className={styles.btn} onClick={counter.increment}>+</button>
            </div>
        </div>
    );
})

export default Counter;
