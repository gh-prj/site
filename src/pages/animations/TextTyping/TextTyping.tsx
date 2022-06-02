import React from 'react';
import styles from './TextTyping.module.scss'

const TextTyping = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <h1>Loading...</h1>
            </div>
        </div>
    );
}

export default TextTyping;
