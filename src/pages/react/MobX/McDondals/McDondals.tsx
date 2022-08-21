import React, { useEffect, useState } from 'react';
import styles from './McDondals.module.scss';
import { observer } from 'mobx-react'
import { useRootStore } from './RootStoreContext';
import DondalsMainView from './components/Dondal/DondalsMainView/DondalsMainView';
import ClientsMainView from './components/Client/ClientsMainView/ClientsMainView';
import ExchangeMainView from './components/Exchange/ExchangeMainView/ExchangeMainView';

const McDondals = observer(() => {
    console.log('--- rendering McDondals')
    console.log('<useRootStore>')
    const store = useRootStore()
    console.log('</useRootStore>')

    return (
        <div className={styles.container}>
            <DondalsMainView />
            <ClientsMainView />
            <ExchangeMainView rates={store.exchangeStore.rates} />
            <br />
            <button onClick={store.clientStore.reset}>Reset clients</button>
            <button onClick={store.orderStore.reset}>Reset orders</button>
        </div>
    );
})

export default McDondals;
