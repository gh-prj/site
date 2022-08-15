import React, { FC } from 'react';
import arrUp from './arrowup.png'
import arrDown from './arrowdown.png'
import { Rate } from '../../../store/exchangeStore';
import { observer } from 'mobx-react';
import Flags from "country-flag-icons/react/3x2";
import styles from './RateView.module.scss';

interface Props {
    rate: Rate
}

const RateView: FC<Props> = observer(({ rate }) => {
    const Flag = Flags[rate.countryCode]
    return (
        <div className={styles.rate}>
            <Flag height="10px" />
            <span className={styles.name}>{rate.currencyName}</span>
            <span className={styles.value}>{rate.valueStr}</span>
            {rate.trend !== 'same' && <img style={{ height: "10px", width: "15px" }} src={rate.trend === 'up' ? arrUp : arrDown}></img>}
        </div>
    );
})

export default RateView;
