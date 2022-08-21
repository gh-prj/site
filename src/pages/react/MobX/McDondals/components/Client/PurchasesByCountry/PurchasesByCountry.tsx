import React from 'react';
import { CountryCode, CurrencyCode, CurrencyCountry } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import styles from './PurchasesByCountry.module.scss'

const PurchasesByCountry = () => {
    const uiStore = useRootStore().uiStore
    const spendings = uiStore.rootStore.orderStore.orders
        .filter(o => o.clientId === uiStore.selectedClientId && o.isPaid)
        .reduce(
            (r: { [key in CountryCode]: number }, o) =>
                (r[CurrencyCountry[o.orderCurrencyCode]] += (o.paid ?? 0), r),
            { 'RU': 0, 'TH': 0, 'IN': 0, 'JP': 0, 'EU': 0, 'GB': 0, 'US': 0 }
        )
    console.log(spendings)
    const total = Object.values(spendings).reduce((acc, curr) => acc + curr)
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
    for (const key of Object.keys(spendings) as CountryCode[]) {
        console.log(key, ': ', spendings[key])
        if (spendings[key]) {
            const fraction = spendings[key] / total
            const sector = `${colors[key]} ${currSector}turn ${currSector + fraction}turn`
            sectors.push(sector)
            currSector += fraction
            countries2show.push(key)
        }
    }
    console.log(sectors.join(','))
    const isVisible = (cc: CountryCode) => countries2show.includes(cc)
    return (
        <div className={`${styles.purchases} ${uiStore.isCreateNewOrderVisible || total === 0 ? styles.hidden : ""}`}>
            {/* <div className={styles.circle} style={{ background: "conic-gradient(red 0.2turn,green 0.2turn 0.6turn,cyan 0.6turn 0.7turn,blue 0.7turn)" }}></div> */}
            <div className={styles.circle} style={{ background: `conic-gradient(${sectors.join(',')})` }}></div>
            <div className={styles.countries}>
                {
                    (Object.keys(colors) as CountryCode[])
                        .map(key =>
                            <div
                                key={key}
                                className={isVisible(key)
                                    ? ""
                                    : styles.hidden}
                            >{key}</div>
                        )
                }
            </div>
        </div >
    );
}

export default PurchasesByCountry;
