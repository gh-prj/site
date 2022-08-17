import { action, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { currencyFormatter } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import { Client } from '../../../store/clientStore';
import CreateNewOrderView from '../../Order/CreateNewOrderView/CreateNewOrderView';
import OrderListView from '../../Order/OrderListView/OrderListView';
import OrderView from '../../Order/OrderView/OrderView';
import IconButton from '../../UI/IconButton/IconButton';
import AddNewClientView from '../AddNewClientView/AddNewClientView';
import styles from './ClientsMainView.module.scss'

const ClientsMainView = observer(() => {
    const store = useRootStore().clientStore
    const [clientId, setClientId] = useState(store.clients[0].id);
    const [isVisible, setIsVisible] = useState(false);
    const onNewClientAdded = (id: number | null) => {
        setIsVisible(false)
        if (id) {
            setClientId(id)
        }
    }
    const onCreateOrder = () => {
        runInAction(() => {
            store.rootStore.uiStore.isCreateNewOrderVisible = true
        })
    }
    const getBalance = () => {
        const client = store.clients.find(client => client.id === clientId)!
        return currencyFormatter(client.currencyCode).format(client.balance)
    }
    return (
        <div className={styles.clientsMain} >
            <div className={styles.selector}>
                <div>
                    <select value={clientId} onChange={(e) => setClientId(parseInt(e.target.value))}>
                        {store.clients.map(client =>
                            <option key={client.id} value={client.id}>({client.countryCode}) {client.name}</option>
                        )}
                    </select>
                    <IconButton
                        type="add"
                        onClick={() => setIsVisible(true)}
                        disabled={() => false}
                    // style={{ top: 0 }}
                    >Add new client</IconButton>
                    {/* <span> Balance: {store.clients.find(client => client.id === clientId)!.balance}</span> */}
                    {/* <span> Balance: {getBalance()}</span> */}
                    <span> {getBalance()}</span>
                    <IconButton type="cart" disabled={() => !!store.rootStore.uiStore.isCreateNewOrderVisible} onClick={onCreateOrder} />
                </div>
                {/* <div> */}
                <AddNewClientView hidden={!isVisible} onClientAdd={id => onNewClientAdded(id)} />
                {/* </div>s */}
            </div>
            <br />
            {store.rootStore.uiStore.isCreateNewOrderVisible &&
                <CreateNewOrderView onNewOrderCreated={(id) => { console.log(id) }} className={styles.cnov} />
            }
            <div className={styles.orders}>
                <OrderListView clientId={clientId} />
                <OrderView order={store.rootStore.orderStore.orders[0]} />
            </div>
            {/* <span style={{ scolor: 'blue' }}>ClientsMainView</span> */}

        </div>
    );
})

export default ClientsMainView;
