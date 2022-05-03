import React, { useState } from 'react';
import styles from './UseState.module.scss'

const UseState = () => {
    const [value, setValue] = useState(0);

    const getColor = () => value < 0 ? "#ff9999" : value > 0 ? "#99ff99" : "#ccc"

    return (
        <div className={styles.div}>
            <button onClick={() => setValue(x => x - 1)}>-</button>
            <label style={{ background: getColor() }}>{value}</label>
            <button onClick={() => setValue(x => x + 1)}>+</button>
        </div>
    );
}

export default UseState;
