import React, { FC } from 'react';
import Flags from 'country-flag-icons/react/3x2'
import logo from './logo.png'
import styles from './Logo.module.scss'
import { CountryCode } from '../../../common';

interface Props {
    countryCode: CountryCode
}
const Logo: FC<Props> = ({ countryCode }) => {
    const Flag = Flags[countryCode];
    console.log('--- rendering Logo')
    return (
        <div className={styles.dondaldLogo}>
            <div className={styles.logo}>
                <img src={logo} alt="logo.png"></img>
                <Flag />
            </div>
        </div>
    );
}

export default Logo;
