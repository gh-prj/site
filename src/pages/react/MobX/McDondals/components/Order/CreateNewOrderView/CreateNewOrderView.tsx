import { runInAction } from 'mobx';
import { observer } from 'mobx-react';
import React, { FC, useState } from 'react';
import { useRootStore } from '../../../RootStoreContext';
import { MenuItem } from '../../../store/dondalsStore';
import { currencyFormatter, RegionalSettings } from '../../../common'
import styles from './CreateNewOrderView.module.scss'

interface Props extends React.ComponentProps<"div"> {
    onNewOrderCreated: (orderId: number | null) => void
}

const CreateNewOrderView: FC<Props> = observer(({ className, onNewOrderCreated, ...props }) => {
    console.log('--- rendering CreateNewOrderView')
    const rootStore = useRootStore()
    const uiStore = rootStore.uiStore
    const dondalId = uiStore.selectedDondalId
    const isVisible = uiStore.isCreateNewOrderVisible
    const [qty, setQty] = useState<{ [key: number]: number | undefined }>({});
    console.log(qty)
    const onCancel = () => {
        runInAction(() => {
            uiStore.isCreateNewOrderVisible = false
        })
        setQty({})
        onNewOrderCreated(null)
    }
    const onQtyChange = (mi: MenuItem, quantity: number) => {
        setQty({ ...qty, [mi.id]: (quantity < 1 ? 0 : quantity > 99 ? 99 : quantity) })
    }
    const calcTotal = () => {
        const total = rootStore.dondalsStore.menuItems
            .filter(mi => mi.dondalId === dondalId)
            .reduce((total, mi) => total + mi.price * (qty[mi.id] || 0), 0)
        runInAction(() => {
            uiStore.newOrderTotal = total
        })
        return total
    }
    const calcClientsTotal = () => {
        const client = uiStore.selectedClient!
        const dondal = uiStore.selectedDondal!
        const rates = rootStore.exchangeStore.ratesObj
        const total = calcTotal()
        const clientsTotal = total / (rates[RegionalSettings[dondal.countryCode].currencyCode] || 1) * (rates[client.currencyCode] || 1)
        runInAction(() => {
            uiStore.newOrderClientsTotal = clientsTotal
        })
        return currencyFormatter(client.currencyCode).format(clientsTotal)
    }
    const format = currencyFormatter(
        RegionalSettings[
            uiStore.selectedDondal!.countryCode
        ].currencyCode
    ).format
    const onPay = () => {
        const order = rootStore.orderStore.addOrder(
            uiStore.selectedClientId,
            RegionalSettings[uiStore.selectedDondal!.countryCode].currencyCode,
            uiStore.selectedClient!.currencyCode,
            true, true,
            uiStore.newOrderClientsTotal
        )
        rootStore.dondalsStore.menuItems
            .filter(mi => mi.dondalId === dondalId && (qty[mi.id] || 0) > 0)
            .forEach(mi => {
                rootStore.orderStore.addOrderItem(
                    order.id,
                    mi.name,
                    mi.price,
                    qty[mi.id]!
                )
            })
        runInAction(() => {
            uiStore.selectedClient!.balance -= uiStore.newOrderClientsTotal
        })
        runInAction(() => {
            uiStore.selectedOrderId = order.id
            uiStore.isCreateNewOrderVisible = false
        })
        runInAction(() => {
            uiStore.selectedDondal!.balance += uiStore.newOrderTotal
        })
        setQty({})
        onNewOrderCreated(order.id)
    }
    return (
        <div className={`${styles.newOrder} ${isVisible ? "" : styles.hidden} ${className ?? ""}`} {...props}>
            {/* <span style={{ color: 'blue' }}>CreateNewOrderView</span> */}
            {dondalId && rootStore.dondalsStore.menuItems
                .filter(mi => mi.dondalId === dondalId).map(menuItem =>
                    <div key={menuItem.id} className={styles.mi}>
                        <span>{menuItem.name}</span>
                        <span>{format(menuItem.price)}</span>
                        <span> x</span>
                        <input type="number" value={qty[menuItem.id] || ''} onChange={(e) => onQtyChange(menuItem, parseInt(e.target.value || '0'))} />
                        {!!qty[menuItem.id] && <span>  = {format(qty[menuItem.id]! * menuItem.price)}</span>}
                    </div>
                )
            }
            {dondalId &&
                <div className={styles.total}>
                    <label>Total: </label>
                    <span style={{ color: (uiStore.selectedClient?.balance || 0) < uiStore.newOrderClientsTotal ? 'red' : 'black' }}
                    >{calcClientsTotal()}</span>
                    <span>{format(calcTotal())}</span>
                </div>
            }
            <footer>
                <button onClick={onPay}
                    disabled={
                        (uiStore.selectedClient!.balance
                            < uiStore.newOrderClientsTotal)
                        ||
                        uiStore.newOrderClientsTotal === 0
                    }
                >Pay</button>
                <button onClick={onCancel}>Cancel</button>
            </footer>
        </div>
    );
})

export default CreateNewOrderView;
