import React, { CSSProperties } from 'react';
import styles from './Airplane.module.scss'

const Airplane = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <span style={{ "--i": 1 } as CSSProperties}></span>
                <span style={{ "--i": 2 } as CSSProperties}></span>
                <span style={{ "--i": 3 } as CSSProperties}></span>
                <span style={{ "--i": 4 } as CSSProperties}></span>
                <span style={{ "--i": 5 } as CSSProperties}></span>
                <span style={{ "--i": 6 } as CSSProperties}></span>
                <span style={{ "--i": 7 } as CSSProperties}></span>
                <span style={{ "--i": 8 } as CSSProperties}></span>
                <span style={{ "--i": 9 } as CSSProperties}></span>
                <span style={{ "--i": 10 } as CSSProperties}></span>
                <span style={{ "--i": 11 } as CSSProperties}></span>
                <span style={{ "--i": 11 } as CSSProperties}></span>
                <span style={{ "--i": 12 } as CSSProperties}></span>
                <span style={{ "--i": 13 } as CSSProperties}></span>
                <span style={{ "--i": 14 } as CSSProperties}></span>
                <span style={{ "--i": 15 } as CSSProperties}></span>
                <span style={{ "--i": 16 } as CSSProperties}></span>
                <span style={{ "--i": 17 } as CSSProperties}></span>
                <span style={{ "--i": 18 } as CSSProperties}></span>
                <span style={{ "--i": 19 } as CSSProperties}></span>
                <span style={{ "--i": 20 } as CSSProperties}></span>
                <div className={styles.rocket}></div>
            </div>
        </div>
    );
}

export default Airplane;
