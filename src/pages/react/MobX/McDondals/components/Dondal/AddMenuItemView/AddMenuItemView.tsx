import React, { FC, useEffect, useRef, useState } from 'react';
import { useRootStore } from '../../../RootStoreContext';
import styles from './AddMenuItemView.module.scss'

interface Props extends React.ComponentProps<"div"> {
    dondalId: number
}
const AddMenuItemView: FC<Props> = ({ dondalId, ...props }) => {
    const store = useRootStore().dondalsStore
    const [name, setName] = useState('');
    const [price, setPrice] = useState<string>('');
    const refName = useRef<HTMLInputElement>(null)
    useEffect(() => {
        setTimeout(() => {
            refName.current?.focus()
        }, 0)
    }, [dondalId]);
    const add = () => {
        store.addMenuItem(dondalId, name, parseFloat(price))
        setName('')
        setPrice('')
    }
    const isDisabled = () => store.menuItems.filter(mi => mi.dondalId === dondalId).length > 4
    return (
        <div className={styles.addItem} {...props}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={isDisabled()} ref={refName} placeholder="Menu entry name" />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} disabled={isDisabled()} />
            <span className={(name.length && price) ? "" : styles.disabled} onClick={add}></span>
        </div>
    );
}

export default AddMenuItemView;
