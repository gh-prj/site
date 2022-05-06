import React, { useState } from "react";
import styles from "./UseState.module.scss";

const UseState = () => {
    const [value, setValue] = useState(0);

    const getClass = () => value < 0 ? styles.neg : value > 0 ? styles.pos : styles.zero

    return (
        <div className={styles.container}>
            <button onClick={() => setValue(x => x - 1)} >-</button>
            <label className={getClass()}>{value}</label>
            <button onClick={() => setValue(x => x + 1)} >+</button>
        </div>
    );
};

export default UseState;