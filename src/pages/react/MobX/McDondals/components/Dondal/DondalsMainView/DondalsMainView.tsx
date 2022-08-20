import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { useRootStore } from '../../../RootStoreContext';
import AddNewDondalView from '../AddNewDondalView/AddNewDondalView';
import DondalView from '../DondalView/DondalView';
import restore from './restore.png'
import styles from './DondalsMainView.module.scss'
import { runInAction } from 'mobx';
import { currencyFormatter, RegionalSettings } from '../../../common';

interface Props {
    id: number
}

const DondalsMainView = observer(() => {
    const [dondalId, setDondalId] = useState(1);
    const store = useRootStore().dondalsStore
    const uiStore = store.rootStore.uiStore
    useEffect(() => {
        console.log('useEffect. dondalId=' + dondalId)
        runInAction(() => {
            store.rootStore.uiStore.selectedDondalId = dondalId
        })
    }, [dondalId]);
    const addDondal = () => {
        store.addRandomDondal()
        setDondalId(Math.max(...store.dondals.map(dondal => dondal.id)))
    }
    const onRestore = () => {
        setDondalId(1)
        store.reset()
    }
    const getBalanceStr = () => {
        return currencyFormatter(RegionalSettings[uiStore.selectedDondal!.countryCode].currencyCode)
            .format(uiStore.selectedDondal!.balance)
    }
    return (
        <div className={styles.dondalsMain}>
            <div className={styles.selector} style={{ height: 25 }}>
                <select value={dondalId} onChange={(e) => setDondalId(parseInt(e.target.value))}>
                    {store.dondals.filter(dondal => !dondal.terminated).map(dondal =>
                        <option key={dondal.id} value={dondal.id}>({dondal.countryCode}) {dondal.name}</option>
                    )}
                </select>
                <img className={styles.restore} src={restore}></img>
                <span className={styles.restore} onClick={onRestore}></span>
                <label className={styles.balance}>Balance: {getBalanceStr()}</label>
            </div>
            <AddNewDondalView setDondalId={setDondalId} style={{ top: 28, left: 130 }} />
            <DondalView id={dondalId} refresh={() => setDondalId(1)} />
            {/* <button onClick={addDondal}>Add</button>
            <button onClick={() => store.reset()}>Reset</button> */}
        </div>
    );
})

export default DondalsMainView;
