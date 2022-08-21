import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { Rate } from '../../../store/exchangeStore';
import RateView from '../RateView/RateView';
import styles from './ExchangeView.module.scss'

interface Props {
    rates: Rate[]
}

const ExchangeView: FC<Props> = observer(({ rates }) => {
    return (
        <div className={styles.exchange}>
            {rates.map(rate => <RateView rate={rate} key={rate.currencyCode} />)}
        </div>
    );
})

export default ExchangeView;
