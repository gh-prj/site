import { action, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { currencyFormatter } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import CreateNewOrderView from '../../Order/CreateNewOrderView/CreateNewOrderView';
import OrderListView from '../../Order/OrderListView/OrderListView';
import OrderView from '../../Order/OrderView/OrderView';
import IconButton from '../../UI/IconButton/IconButton';
import AddNewClientView from '../AddNewClientView/AddNewClientView';
import PurchasesByCountry from '../PurchasesByCountry/PurchasesByCountry';
import styles from './ClientsMainView.module.scss'

const ClientsMainView = observer(() => {
    const store = useRootStore().clientStore
    const uiStore = store.rootStore.uiStore
    const [isVisible, setIsVisible] = useState(false);
    const onNewClientAdded = (id: number | null) => {
        setIsVisible(false)
        if (id) {
            runInAction(() => {
                uiStore.selectedClientId = id
            })
        }
    }
    const onCreateOrder = () => {
        runInAction(() => {
            store.rootStore.uiStore.isCreateNewOrderVisible = true
        })
    }
    const getBalance = () => {
        const client = uiStore.selectedClient!
        console.log(uiStore.selectedClientId, client)
        return currencyFormatter(client.currencyCode).format(client.balance)
    }
    return (
        <div className={styles.clientsMain} >
            <div className={styles.selector}>
                <div className={isVisible ? styles.hidden : ""}>
                    <IconButton
                        type="add"
                        onClick={() => setIsVisible(true)}
                        disabled={() => false}
                        style={{ top: 1, marginRight: 5 }}
                    >Add new client</IconButton>
                    <select value={uiStore.selectedClientId} onChange={(e) => uiStore.selectedClientId = parseInt(e.target.value)}>
                        {store.clients.map(client =>
                            <option key={client.id} value={client.id}>({client.countryCode}) {client.name}</option>
                        )}
                    </select>
                    <span className={styles.balance}> {getBalance()}</span>
                    <IconButton
                        type="cart"
                        disabled={() => !!store.rootStore.uiStore.isCreateNewOrderVisible}
                        onClick={onCreateOrder}
                        style={{ marginRight: 2 }}
                    />
                </div>
                <AddNewClientView hidden={!isVisible} onClientAdd={id => onNewClientAdded(id)} />
            </div>
            <br />
            {store.rootStore.uiStore.isCreateNewOrderVisible &&
                <CreateNewOrderView onNewOrderCreated={(id) => { console.log('orderId: ' + id) }} className={styles.cnov} />
            }
            <div className={styles.orders}>
                <OrderListView clientId={uiStore.selectedClientId} />
                <OrderView order={store.rootStore.uiStore.selectedOrder} />
                <div className={styles.purchases}>
                    <PurchasesByCountry />
                </div>
            </div>
            {/* <span style={{ scolor: 'blue' }}>ClientsMainView</span> */}
        </div >
    );
})

export default ClientsMainView;
