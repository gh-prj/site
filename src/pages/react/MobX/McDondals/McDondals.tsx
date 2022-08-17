import React, { useEffect, useState } from 'react';
import styles from './McDondals.module.scss';
import { RootStore } from './store/rootStore'
import { observer } from 'mobx-react'
import { action } from 'mobx';
import { useRootStore } from './RootStoreContext';
import OrderView from './components/Order/OrderView/OrderView';
import DondalView from './components/Dondal/DondalView/DondalView';
import { Rate } from './store/exchangeStore';
import ExchangeView from './components/Exchange/ExchangeView/ExchangeView';
import DondalsMainView from './components/Dondal/DondalsMainView/DondalsMainView';
import ClientsMainView from './components/Client/ClientsMainView/ClientsMainView';

const McDondals = observer(() => {
    // const [rate, setRate] = useState(() => new Rate('GBP', { from: 1, to: 2 }));
    // const [rate2, setRate2] = useState(() => new Rate('EUR', { from: 1, to: 2 }));
    console.log('--- rendering McDondals')

    console.log('<useRootStore>')
    const store = useRootStore()
    console.log('</useRootStore>')
    // const [store, setStore] = useState(() => useRootStore());



    // const [store, setStore] = useState(() => new RootStore());
    // useEffect(() => {
    //     console.log('starting rate... [useEffect]')
    //     // rate.start()
    //     // rate2.start()
    //     return () => {
    //         console.log('disposing rate... [useEffect]')
    //         // rate.dispose()
    //         // rate2.dispose()
    //         store.dispose()
    //     };
    // }, []);
    const addClient = action(() => {
        console.log('adding client...')
        store.clientStore.clients.push({
            id: 3,
            balance: 700,
            countryCode: 'GB',
            currencyCode: "GBP",
            name: 'xxx www'
        })
    })
    const addOrderItem = () => {
        store.orderStore.orders[0].addItem("Juice", 1.5, 1)
    }
    // const rate = new Rate('GB', { from: 1, to: 2 })
    // rate.start()
    // console.log('rater started.')

    // useEffect(() => {
    //     return () => {
    //         rate.dispose()
    //     };
    // }, []);
    return (
        <div className={styles.container}>
            <DondalsMainView />
            <ClientsMainView />
            {/* {rate.value} {rate.trend} */}
            <ExchangeView rates={store.exchangeStore.rates} />
            <hr />
            <button onClick={store.clientStore.reset}>Reset</button>
            {/* <button onClick={store.clientStore.addClient}>Add</button> */}
            {/* <button onClick={store.clientStore.load}>Load</button> */}
            {/* {store.clientStore.clients.map(client =>
                <div key={client.id}>{client.name}</div>
            )} */}
            <hr />
            <button onClick={store.orderStore.reset}>Reset</button>
            <button onClick={addOrderItem}>Add</button>
            <button onClick={action(() => store.orderStore.orders[0].items[0].quantity = 7)}>Modify</button>
            {/* {store.orderStore.orders.map(order =>
                <ul key={order.id}>{order.clientId} {order.currency}
                    {order.items.map(oi =>
                        <li key={oi.id}>{oi.item} {oi.price}*{oi.quantity}</li>
                    )}
                </ul>
            )} */}
            {/* <hr />
            {store.orderStore.orders.map(order =>
                <OrderView order={order} key={order.id} />
            )} */}
        </div>
    );
})

export default McDondals;
