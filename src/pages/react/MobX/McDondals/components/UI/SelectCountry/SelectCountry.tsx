import React, { FC, useState } from 'react';
import { CountryCode, RegionalSettings } from '../../../common';
import styles from './SelectCountry.module.scss'

interface Props extends React.ComponentProps<"select"> {
    setCountryCode: (value: CountryCode | null) => void
    // disabled: () => boolean
}

const SelectCountry: FC<Props> = ({ setCountryCode: onSelect, ...props }) => {
    const [countryCode, setCountryCode] = useState<string | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountryCode(_ => e.target.value)
        onSelect(e.target.value as (CountryCode | null))
    }
    return (
        <select value={countryCode || ''} onChange={(e) => handleChange(e)} className={styles.selectCountry}>
            <option value=''>--- Select country ---</option>
            {Object.entries(RegionalSettings).map(entry =>
                <option key={entry[0]} value={entry[0]} >{entry[1].country}</option>
            )}
        </select>
    );
}

export default SelectCountry;
