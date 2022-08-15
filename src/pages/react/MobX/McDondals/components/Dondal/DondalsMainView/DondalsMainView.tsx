import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { useRootStore } from '../../../RootStoreContext';
import AddNewDondalView from '../AddNewDondalView/AddNewDondalView';
import DondalView from '../DondalView/DondalView';
import restore from './restore.png'
import styles from './DondalsMainView.module.scss'

interface Props {
    id: number
}

const DondalsMainView = observer(() => {
    const [dondalId, setDondalId] = useState(1);
    const store = useRootStore().dondalsStore
    const addDondal = () => {
        store.addRandomDondal()
        setDondalId(Math.max(...store.dondals.map(dondal => dondal.id)))
    }
    const onRestore = () => {
        setDondalId(1)
        store.reset()
    }
    return (
        <div className={styles.dondalsMain}>
            <select value={dondalId} onChange={(e) => setDondalId(parseInt(e.target.value))}>
                {store.dondals.filter(dondal => !dondal.terminated).map(dondal =>
                    <option key={dondal.id} value={dondal.id}>({dondal.countryCode}) {dondal.name}</option>
                )}
            </select>
            <img className={styles.restore} src={restore}></img>
            <span className={styles.restore} onClick={onRestore}></span>
            <AddNewDondalView setDondalId={setDondalId} style={{ top: 25, left: 130 }} />
            <DondalView id={dondalId} refresh={() => setDondalId(1)} />
            {/* <button onClick={addDondal}>Add</button>
            <button onClick={() => store.reset()}>Reset</button> */}
        </div>
    );
})

export default DondalsMainView;
