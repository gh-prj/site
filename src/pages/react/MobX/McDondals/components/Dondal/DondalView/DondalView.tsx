import React, { FC, useState } from 'react';
import styles from './DondalView.module.scss'
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
