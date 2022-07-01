import React, { useEffect, useRef, useState } from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = () => {
    const [checked, setChecked] = useState(true);
    const firstRender = useRef(true)
    useEffect(() => {
        firstRender.current = false
    }, []);
    const handleChange = () => {
        setChecked(!checked)
    }
    return (
        <div className={styles.container}>
            <label className={styles.checkbox}>I like this checkbox
                <input type="checkbox" checked={checked} onChange={handleChange} />
                <span className={`${styles.checkmark} ${firstRender.current && styles.init || styles.an}`}></span>
            </label>
        </div>
    );
}

export default Checkbox;
