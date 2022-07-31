import React from 'react';
import styles from './Store.module.scss';
import logo from './logo.png'

const Store = () => {
    return (
        <div className={styles.container}>
            Store
            <div style={{ background: 'black' }}>
                <img src={logo} alt="logo.png"></img>
            </div>
            <div style={{ background: 'blue' }}>
                <img src={logo} alt="logo.png"></img>
            </div>
            <div style={{ background: 'red' }}>
                <img src={logo} alt="logo.png"></img>
            </div>
        </div>
    );
}

export default Store;
