import { observer } from 'mobx-react';
import React, { FC, useEffect, useRef, useState } from 'react';
import { CountryCode, RegionalSettings } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import IconButton from '../../UI/IconButton/IconButton';
import SelectCountry from '../../UI/SelectCountry/SelectCountry';
import styles from './AddNewClientView.module.scss'

interface Props extends React.ComponentProps<"div"> {
    hidden?: boolean
    onClientAdd: (clientId: number | null) => void
}

const AddNewClientView: FC<Props> = observer(({ hidden, onClientAdd }) => {
    const store = useRootStore().clientStore
    const [name, setName] = useState('');
    const [flag, setFlag] = useState(false);
    const [countryCode, setCountryCode] = useState<CountryCode | null>(null);
    const refName = useRef<HTMLInputElement>(null)
    const onCancel = () => {
        setFlag(flag => !flag)
        setName('')
        setCountryCode(null)
        onClientAdd(null)
    }
    const onSave = () => {
        const id = store.addClient(name, countryCode!, RegionalSettings[countryCode!].currencyCode)
        setFlag(flag => !flag)
        setName('')
        setCountryCode(null)
        onClientAdd(id)
    }
    useEffect(() => {
        setTimeout(() => refName.current?.focus(), 0)
    });
    return (
        <div className={`${styles.newClient} ${hidden ? styles.hidden : ""}`}>
            <input type="text" ref={refName} placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
            <SelectCountry setCountryCode={setCountryCode} flag={flag} />
            <IconButton
                type="cancel"
                onClick={onCancel}
                disabled={() => false}
                style={{ marginLeft: 5 }}
            />
            <IconButton
                type="save"
                onClick={onSave}
                disabled={() => (name.trim().length === 0) || (countryCode === null)}
                style={{ marginLeft: 5 }}
            />
        </div >
    );
})

export default AddNewClientView;
