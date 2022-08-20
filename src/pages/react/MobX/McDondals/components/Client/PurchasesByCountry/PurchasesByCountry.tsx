import React from 'react';
import { CountryCode, CurrencyCode } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import styles from './PurchasesByCountry.module.scss'

const PurchasesByCountry = () => {
    const uiStore = useRootStore().uiStore
    const x = uiStore.rootStore.orderStore.orders
        .filter(o => o.clientId === uiStore.selectedClientId && o.isPaid)
        // @ts-ignore
        .reduce((r, o) => (r[o.orderCurrencyCode] = (r[o.orderCurrencyCode] || 0) + o.total, r), { 'RUB': 0 })
    console.log(x)
    const isVisible = (cc: CountryCode) => !['US', 'JP', 'TH'].includes(cc)
    return (
        <div className={`${styles.purchases} ${uiStore.isCreateNewOrderVisible ? styles.hidden : ""}`}>
            <div className={styles.circle} style={{ background: "conic-gradient(red 0.2turn,green 0.2turn 0.6turn,cyan 0.6turn 0.7turn,blue 0.7turn)" }}></div>
            <div className={styles.countries}>
                <div className={isVisible('RU') ? "" : styles.hidden}>RU</div>
                <div className={isVisible('TH') ? "" : styles.hidden}>TH</div>
                <div className={isVisible('IN') ? "" : styles.hidden}>IN</div>
                <div className={isVisible('JP') ? "" : styles.hidden}>JP</div>
                <div className={isVisible('EU') ? "" : styles.hidden}>EU</div>
                <div className={isVisible('GB') ? "" : styles.hidden}>GB</div>
                <div className={isVisible('US') ? "" : styles.hidden}>US</div>
            </div>
        </div>
    );
}

export default PurchasesByCountry;
{/* <div className={styles.circle} style={{ background: "conic-gradient(red 0.2turn,green 0.2turn 0.6turn,cyan 0.6turn 0.7turn,blue 0.7turn)" }}></div> */ }
