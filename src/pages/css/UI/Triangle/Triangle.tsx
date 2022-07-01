import React from 'react';
import styles from './Triangle.module.scss'
import img1 from './1.jpeg'
import img2 from './2.jpeg'
import img3 from './3.jpeg'
import img4 from './4.jpeg'

const Triangle = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.card}><img src={img1} alt="" /></div>
                <div className={styles.card}><img src={img2} alt="" /></div>
                <div className={styles.card}><img src={img3} alt="" /></div>
                <div className={styles.card}><img src={img4} alt="" /></div>
            </div>
        </div>
    );
}

export default Triangle;
