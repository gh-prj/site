import React, { CSSProperties } from 'react';
import styles from './Cubes.module.scss'
// declare module 'react' {
//     interface CSSProperties {
//         [key: `--${string}`]: string | number
//     }
// }

const Cubes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.text} style={{ "--j": 0 } as CSSProperties}>
                    <span style={{ "--i": 0 } as CSSProperties}>2</span>
                    <span style={{ "--i": 1 } as CSSProperties}>3</span>
                    <span style={{ "--i": 2 } as CSSProperties}>4</span>
                    <span style={{ "--i": 3 } as CSSProperties}>5</span>
                </div>
                <div className={styles.text} style={{ "--j": 1 } as CSSProperties}>
                    <span style={{ "--i": 0 } as CSSProperties}>0</span>
                    <span style={{ "--i": 1 } as CSSProperties}>1</span>
                    <span style={{ "--i": 2 } as CSSProperties}>2</span>
                    <span style={{ "--i": 3 } as CSSProperties}>3</span>
                </div>
                <div className={styles.text} style={{ "--j": 2 } as CSSProperties}>
                    <span style={{ "--i": 0 } as CSSProperties}>2</span>
                    <span style={{ "--i": 1 } as CSSProperties}>3</span>
                    <span style={{ "--i": 2 } as CSSProperties}>4</span>
                    <span style={{ "--i": 3 } as CSSProperties}>5</span>
                </div>
                <div className={styles.text} style={{ "--j": 3 } as CSSProperties}>
                    <span style={{ "--i": 0 } as CSSProperties}>1</span>
                    <span style={{ "--i": 1 } as CSSProperties}>2</span>
                    <span style={{ "--i": 2 } as CSSProperties}>3</span>
                    <span style={{ "--i": 3 } as CSSProperties}>4</span>
                </div>
            </div>
        </div >
    );
}

export default Cubes;
