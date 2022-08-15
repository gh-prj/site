import React, { FC, useState } from 'react';
import styles from './DondalView.module.scss'
import { CountryCode } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import { observer } from 'mobx-react';
import Logo from '../Logo/Logo';
import MenuView from '../MenuView/MenuView';
import { action } from 'mobx';

interface Props {
    id?: number
    refresh: () => void
}

const DondalView: FC<Props> = observer(({ id, refresh }) => {
    const [donaldId, setDonaldId] = useState(id ?? 1);
    const store = useRootStore().dondalsStore
    const dondal = store.dondals.find(dondal => dondal.id === id ?? 1)!
    const remove = action(() => {
        dondal.terminated = true
        refresh()
    })
    console.log('--- rendering DondalView')
    return (
        <div className={styles.dondals}>
            <Logo countryCode={dondal.countryCode} />
            <span className={`${styles.remove} ${id === 1 ? styles.disabled : ""}`} onClick={remove}></span><br />
            <MenuView dondal={dondal} />
        </div>
    );
})

export default DondalView;

const number = 123456.789;

console.log(new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
}).format(number)); // expected output: "123.456,79 €"

// the Japanese yen doesn't use a minor unit
console.log(new Intl.NumberFormat('ja-JP', {
    style: 'currency', currency: 'JPY'
}).format(number)); // expected output: "￥123,457"

console.log(new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'CAD'
}).format(number)); 