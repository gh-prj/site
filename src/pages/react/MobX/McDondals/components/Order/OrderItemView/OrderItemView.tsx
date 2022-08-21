import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { currencyFormatter } from '../../../common';
import { OrderItem } from '../../../store/orderStore';
import styles from './OrderItemView.module.scss'

interface Props {
    orderItem: OrderItem
}

const OrderItemView: FC<Props> = observer(({ orderItem }) => {
    const format = currencyFormatter(orderItem.order!.orderCurrencyCode).format
    return (
        <li className={styles.orderitem}>
            <label>{orderItem.item}</label>
            <span>{format(orderItem.price)}</span>
            <span> * </span>
            <span>{orderItem.quantity}</span>
        </li>
    );
})

export default OrderItemView;
