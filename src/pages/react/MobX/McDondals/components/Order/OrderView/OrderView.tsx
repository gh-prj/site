import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { Order } from '../../../store/orderStore'
import OrderItemView from '../OrderItemView/OrderItemView';
import styles from './OrderView.module.scss'

interface Props {
    order: Order
}

const OrderView: FC<Props> = observer(({ order }) => {
    return (
        <div className={styles.order}>
            <ul>
                {order.items.map(orderItem =>
                    <OrderItemView key={orderItem.id} orderItem={orderItem} />
                )}
            </ul>
            <span>Total: {order.total}</span>
        </div>
    );
})

export default OrderView;
