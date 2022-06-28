import React, { ChangeEvent, useState } from 'react';
import useDebouncedValue from '../../../hooks/useDebouncedValue';
import styles from './DebouncedValue.module.scss'

const DebouncedValue = () => {
    const [value, setValue] = useState<string>("");
    const debouncedValue = useDebouncedValue(value, 1000)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <div className={styles.container}>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Type something here"
            />
            <p>The result is shown below when the input stays unchanged for 1 second.</p>
            <input
                type="text"
                value={debouncedValue}
                readOnly
            />
        </div>
    );
}

export default DebouncedValue;
