import React from 'react';
import { CountryCode, CurrencyCode, CurrencyCountry } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import styles from './PurchasesByCountry.module.scss'

const PurchasesByCountry = () => {
    const uiStore = useRootStore().uiStore
    const spending = uiStore.rootStore.orderStore.orders
        .filter(o => o.clientId === uiStore.selectedClientId && o.isPaid)
        .reduce(
            (r: { [key in CountryCode]: number }, o) =>
                (r[CurrencyCountry[o.orderCurrencyCode]] += (o.paid ?? 0), r),
            { 'RU': 0, 'TH': 0, 'IN': 0, 'JP': 0, 'EU': 0, 'GB': 0, 'US': 0 }
        )
    console.log(spending)
    const total = Object.values(spending).reduce((acc, curr) => acc + curr)
    console.log('total: ', total)
    const colors: { [key in CountryCode]: string } = {
        'RU': 'red',
        'TH': 'rgb(187, 255, 0)',
        'IN': 'green',
        'JP': 'yellow',
        'EU': 'brown',
        'GB': 'rgb(255, 0, 221)',
        'US': 'rgb(0, 255, 255)',
    }
    const sectors: string[] = []
    let currSector = 0
    const countries2show: CountryCode[] = []
    for (const key of Object.keys(spending) as CountryCode[]) {
        console.log(key, ': ', spending[key])
        if (spending[key]) {
            const part = spending[key] / total
            const sector = `${colors[key]} ${currSector}turn ${currSector + part}turn`
            sectors.push(sector)
            currSector += part
            countries2show.push(key)
        }
    }
    console.log(sectors.join(','))
    // const isVisible = (cc: CountryCode) => !['US', 'JP', 'TH'].includes(cc)
    const isVisible = (cc: CountryCode) => countries2show.includes(cc)
    return (
        <div className={`${styles.purchases} ${uiStore.isCreateNewOrderVisible || total === 0 ? styles.hidden : ""}`}>
            {/* <div className={styles.circle} style={{ background: "conic-gradient(red 0.2turn,green 0.2turn 0.6turn,cyan 0.6turn 0.7turn,blue 0.7turn)" }}></div> */}
            <div className={styles.circle} style={{ background: `conic-gradient(${sectors.join(',')})` }}></div>
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
