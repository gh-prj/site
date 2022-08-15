import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { OrderItem } from '../../../store/orderStore';
import styles from './OrderItemView.module.scss'

interface Props {
    orderItem: OrderItem
}

const OrderItemView: FC<Props> = observer(({ orderItem }) => {
    return (
        <li className={styles.orderitem}>
            {orderItem.item} - {orderItem.price} * {orderItem.quantity}
        </li>
    );
})

export default OrderItemView;
