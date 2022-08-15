import React, { useState } from 'react';
import { CountryCode } from '../../../common';
import IconButton from '../../UI/IconButton/IconButton';
import SelectCountry from '../../UI/SelectCountry/SelectCountry';
import styles from './AddNewClientView.module.scss'

const AddNewClientView = () => {
    const [countryCode, setCountryCode] = useState<CountryCode | null>(null);
    return (
        <div className={styles.newClient}>
            AddNewClientView {countryCode}<br />
            <input type="text" placeholder="Full Name" />
            <SelectCountry setCountryCode={setCountryCode} />
            <IconButton
                type="save"
                onClick={() => console.log('IconButton clicked')}
                disabled={() => false}
            />
            {/* </div>Cancel</IconButton > */}
        </div >
    );
}

export default AddNewClientView;
