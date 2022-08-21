import React, { FC, useRef, useState } from 'react';
import { useRootStore } from '../../../RootStoreContext';
import { MenuItem } from '../../../store/dondalsStore';
import styles from './MenuItemView.module.scss'

interface Props {
    menuItem: MenuItem
    currencyFormatter: (amount: number | bigint) => string
}

const MenuItemView: FC<Props> = ({ menuItem, currencyFormatter }) => {
    const store = useRootStore().dondalsStore
    const [editingMode, setEditingMode] = useState(false);
    const [name, setName] = useState(menuItem.name);
    const [price, setPrice] = useState(menuItem.price);
    const refPrice = useRef<HTMLInputElement>(null)
    const updateMenuItem = () => {
        setName(name => name.trim())
        store.updateMenuItem(menuItem.id, name, price)
        setEditingMode(false)
    }
    const removeMenuItem = () => {
        store.removeMenuItem(menuItem.id)
    }
    const cancelEditing = () => {
        setName(menuItem.name)
        setPrice(menuItem.price)
        setEditingMode(false)
    }
    const setEditing = () => {
        setEditingMode(true)
        setTimeout(() => {
            refPrice.current?.focus()
            refPrice.current?.select()
        }, 0)
    }
    return (
        <li key={menuItem.id} className={`${styles.menuItem} ${editingMode ? styles.edit : styles.view}`}>
            <span className={styles.name}>{menuItem.name}</span>
            <input type="text" className={styles.name} value={name} onChange={(e) => setName(e.target.value)} />
            <span className={styles.price}>{currencyFormatter(menuItem.price)}</span>
            <input type="number" className={styles.price} ref={refPrice} value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
            <span className={styles.remove} onClick={removeMenuItem}></span>
            <span className={styles.edit} onClick={setEditing}></span>
            <span className={styles.cancel} onClick={cancelEditing}></span>
            <span className={styles.save} onClick={updateMenuItem}></span>
        </li>
    );
}

export default MenuItemView;
