import { action } from 'mobx';
import { observer } from 'mobx-react';
import React, { FC, useEffect, useRef } from 'react';
import { CountryCode, CurrencyCode, RegionalSettings, currencyFormatter } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import { Order } from '../../../store/orderStore';
import styles from './OrderListView.module.scss'

interface Props extends React.ComponentProps<"div"> {
    clientId: number
}

const OrderListView: FC<Props> = observer(({ clientId }) => {
    const orderStore = useRootStore().orderStore
    const uiStore = orderStore.rootStore.uiStore
    const isVisible = !uiStore.isCreateNewOrderVisible
    const refUl = useRef<HTMLUListElement>(null)
    useEffect(action(() => {
        {
            uiStore.selectedOrderId = orderStore.orders
                .filter(order => order.clientId === clientId)
                .sort((o1, o2) => o2.id - o1.id)[0]?.id
        }
    }), [clientId]);
    useEffect(() => {
        refUl.current?.scroll(0, 0)
    }, [orderStore.orders.filter(order => order.clientId === clientId).length]);
    const onSelectOrder = action((order: Order) => {
        uiStore.selectedOrderId = order.id
    })
    return (
        <>
            <ul ref={refUl} className={`${styles.orderlist} ${isVisible ? "" : styles.hidden}`}>
                {orderStore.orders
                    .filter(order => order.clientId === clientId)
                    .sort((o1, o2) => o2.id - o1.id)
                    .map(order =>
                        <li
                            key={order.id}
                            onClick={() => onSelectOrder(order)}
                            style={{ background: order.id === uiStore.selectedOrderId ? "#ccc" : "inherit" }}
                        >
                            <span>{currencyFormatter(order.orderCurrencyCode).format(order.total)}</span>
                            <span>({currencyFormatter(order.paymentCurrencyCode).format(order.paid || 0)})</span>
                        </li>
                    )}
                {/* <li style={{ color: 'blue' }}>OrderListView</li> */}
            </ul>
        </>
    );
})

export default OrderListView;
