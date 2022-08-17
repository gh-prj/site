import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { CountryCode, CurrencyCode, RegionalSettings, currencyFormatter } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import { Order } from '../../../store/orderStore';
import styles from './OrderListView.module.scss'

interface Props extends React.ComponentProps<"div"> {
    clientId: number
}

const OrderListView: FC<Props> = observer(({ clientId }) => {
    const store = useRootStore().orderStore
    const isVisible = !store.rootStore.uiStore.isCreateNewOrderVisible
    return (
        <>
            <ul className={`${styles.orderlist} ${isVisible ? "" : styles.hidden}`}>
                {/* {store.rootStore.clientStore.clients.find(client => client.id === clientId)!.name} */}
                {/* <br /> */}
                {store.orders.filter(order => order.clientId === clientId).map(order =>
                    <li key={order.id}>
                        {order.total} {order.orderCurrencyCode}
                        {currencyFormatter(order.orderCurrencyCode).format(order.total)}
                    </li>
                )}
                <li style={{ color: 'blue' }}>OrderListView</li>
            </ul>
        </>
    );
})

export default OrderListView;
