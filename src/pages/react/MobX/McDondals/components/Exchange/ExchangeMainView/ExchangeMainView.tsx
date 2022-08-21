import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { Rate } from '../../../store/exchangeStore';
import ExchangeView from '../ExchangeView/ExchangeView';
import styles from './ExchangeMainView.module.scss'

interface Props {
    rates: Rate[]
}

const ExchangeMainView: FC<Props> = observer(({ rates }) => {
    return (
        <div className={styles.exchangeMain}>
            <ExchangeView rates={rates} />
        </div>
    );
})

export default ExchangeMainView;
