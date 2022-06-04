import React from 'react';
import styles from './Cube3D.module.scss'

const Cube3D = () => {
    return (
        <div className={styles.container}>
            <div className={styles.camera}>
                <div className={styles.space}>
                    <span className={styles.box1}>1</span>
                    <span className={styles.box2}>2</span>
                    <span className={styles.box3}>3</span>
                    <span className={styles.box4}>4</span>
                    <span className={styles.box5}>5</span>
                    <span className={styles.box6}>6</span>
                </div>
            </div>
        </div>
    );
}

export default Cube3D;
