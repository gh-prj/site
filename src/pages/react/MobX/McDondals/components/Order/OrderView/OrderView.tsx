import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { currencyFormatter } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import { Order } from '../../../store/orderStore'
import OrderItemView from '../OrderItemView/OrderItemView';
import styles from './OrderView.module.scss'

interface Props {
    order?: Order
}

const OrderView: FC<Props> = observer(({ order }) => {
    console.log('--- rendering Order')
    console.log(order)
    const uiStore = useRootStore().uiStore
    const isVisible = !uiStore.isCreateNewOrderVisible
    if (!order) {
        return (
            <>
            </>
        )
    }
    return (
        <div className={`${styles.order} ${isVisible ? "" : styles.hidden}`}>
            <ul>
                {order!.items.map(orderItem =>
                    <OrderItemView key={orderItem.id} orderItem={orderItem} />
                )}
            </ul><br />
            <footer>
                <span>Total: {currencyFormatter(order!.orderCurrencyCode).format(order?.total || 0)}</span>
                <span>Paid: {currencyFormatter(order!.paymentCurrencyCode).format(order?.paid || 0)}</span>
            </footer>
            {/* <br /><span style={{ color: 'blue' }}>OrderView</span> */}
        </div>
    );
})

export default OrderView;
