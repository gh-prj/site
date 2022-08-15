import React, { FC, useState } from 'react';
import { CountryCode, RegionalSettings } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import styles from './AddNewDondalView.module.scss'

interface Props extends React.ComponentProps<"div"> {
    setDondalId: (id: number) => void
}

const AddNewDondalView: FC<Props> = ({ setDondalId, ...props }) => {
    const store = useRootStore().dondalsStore
    const [countryCode, setCountryCode] = useState<string | null>(null);
    const [name, setName] = useState('');
    const addDondal = () => {
        const dondal = store.addDondal(countryCode as CountryCode, name.trim())
        setDondalId(dondal.id)
        setName('')
        setCountryCode(null)
    }
    return (
        <div className={styles.newDondal} {...props}>
            <label>Country:</label>
            <select value={countryCode || ''} onChange={(e) => setCountryCode(e.target.value)}>
                <option value=''>--- Choose one ---</option>
                {Object.entries(RegionalSettings).map(entry =>
                    <option key={entry[0]} value={entry[0]} >{entry[1].country}</option>
                )}
            </select><br />
            <label>Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <span className={`${styles.add} ${countryCode && name ? "" : styles.disabled}`} onClick={addDondal}></span>
        </div >
    );
}

export default AddNewDondalView;
