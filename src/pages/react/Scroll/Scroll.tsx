import React, { useRef, useState } from 'react';
import useScroll from '../../../hooks/useScroll';
import styles from './Scroll.module.scss'

interface Record {
    id: number
    text: string
}

const initialRecords = [...Array(40)].map((_, i) => ({ id: i + 1, text: `Record #${i + 1}` }))

const Scroll = () => {
    const [records, setRecords] = useState<Record[]>(initialRecords);
    const [canLoad, setCanLoad] = useState(true);
    const parentRef = useRef(null)
    const childRef = useRef(null)
    const onLoad = () => {
        setCanLoad(false)
        setTimeout(() => {
            setRecords([...records, ...[...Array(40)].map((_, i) => ({ id: records.length + i + 1, text: `Record #${records.length + i + 1}` }))])
            setCanLoad(true)
        }, 300);
    }
    useScroll(parentRef, childRef, canLoad, onLoad)
    return (
        <div className={styles.container} ref={parentRef}>
            <div>
                {records.map(record =>
                    <div key={record.id}>{record.id}. {record.text}</div>
                )}
                <div ref={childRef} style={{ background: 'red', width: "100%", height: 10 }}></div>
            </div>
        </div>
    );
}

export default Scroll;
