import React, { FC, useEffect, useState } from 'react';
import { CountryCode, RegionalSettings } from '../../../common';
import styles from './SelectCountry.module.scss'

interface Props extends React.ComponentProps<"select"> {
    setCountryCode: (value: CountryCode | null) => void
    flag: boolean
}

const SelectCountry: FC<Props> = ({ setCountryCode: onSelect, flag, ...props }) => {
    const [countryCode, setCountryCode] = useState<string | null>(null);
    useEffect(() => {
        setCountryCode(null)
    }, [flag]);
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = (e.target.value || null) as (CountryCode | null)
        console.log({ selected: value })
        setCountryCode(value)
        onSelect(value)
    }
    return (
        <select value={countryCode || ''} onChange={(e) => handleChange(e)} className={styles.selectCountry}>
            <option value=''>- Select country -</option>
            {Object.entries(RegionalSettings).map(entry =>
                <option key={entry[0]} value={entry[0]} >{entry[1].country}</option>
            )}
        </select>
    );
}

export default SelectCountry;
