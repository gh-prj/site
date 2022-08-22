import React, { CSSProperties } from 'react';
import styles from './Tetrahedron.module.scss'

const Tetrahedron = () => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.tetra}>
                    <span data-text="1" style={{ "--i": 0 } as CSSProperties}></span>
                    <span data-text="2" style={{ "--i": 1 } as CSSProperties}></span>
                    <span data-text="3" style={{ "--i": 2 } as CSSProperties}></span>
                    <span data-text="4" style={{ "--i": 3 } as CSSProperties}></span>
                </div>
            </div>
        </div>
    );
}

export default Tetrahedron;
