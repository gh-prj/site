import React, { ChangeEvent, useEffect, useState } from 'react';
import useDebouncedCallback from '../../../hooks/useDebouncedCallback';
import styles from './DebouncedCallback.module.scss'

const DebouncedCallback = () => {
    const [data, setData] = useState<string[]>([]);
    const [filteredData, setFilteredData] = useState<string[]>([]);
    useEffect(() => {
        const data = [
            1, 11, 111, 1111, 11111, 122213,
            2, 22, 222, 2222, 22222, 221222,
            3, 33, 333, 3333, 33333, 331133
        ].map(x => x.toString())
        setData([...data])
        setFilteredData([...data])
    }, []);
    const filter = (substr: string) => {
        const regex = new RegExp(`${substr}`, 'g')
        setFilteredData(data.filter(x => x.match(regex)))
    }
    const debouncedFilter = useDebouncedCallback(filter, 1000)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('onChange', e.target.value)
        debouncedFilter(e.target.value)
    }

    return (
        <div className={styles.container}>
            <input type="text" onChange={onChange} placeholder="Filter" />
            <ul>{filteredData.map(x =>
                <li key={x}>{x}</li>
            )}</ul>
        </div>
    );
}

export default DebouncedCallback;
