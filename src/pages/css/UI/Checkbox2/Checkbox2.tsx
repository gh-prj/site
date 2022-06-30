
import React from 'react';
import IonIcon from '@reacticons/ionicons';
import styles from './Checkbox2.module.scss'

const Checkbox2 = () => {
    return (
        <div className={styles.container}>
            <label>
                <input type="checkbox" />
                <div className={styles.icon}>
                    <div className={styles.shadow}></div>
                    <div className={styles.iconBox}>
                        <IonIcon name="power"></IonIcon>
                    </div>
                </div>
            </label>
        </div>
    );
}

export default Checkbox2;
