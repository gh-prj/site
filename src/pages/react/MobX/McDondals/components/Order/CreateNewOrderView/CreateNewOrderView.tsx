import { runInAction } from 'mobx';
import { observer } from 'mobx-react';
import React, { FC, useState } from 'react';
import { useRootStore } from '../../../RootStoreContext';
import { MenuItem } from '../../../store/dondalsStore';
import IconButton from '../../UI/IconButton/IconButton';
import { currencyFormatter, RegionalSettings } from '../../../common'
import styles from './CreateNewOrderView.module.scss'

interface Props extends React.ComponentProps<"div"> {
    // dondalId: number
    onNewOrderCreated: (orderId: number | null) => void
}

const CreateNewOrderView: FC<Props> = observer(({ className, onNewOrderCreated, ...props }) => {
    const rootStore = useRootStore()
    const dondalId = rootStore.uiStore.selectedDondalId
    const isVisible = rootStore.uiStore.isCreateNewOrderVisible
    const [qty, setQty] = useState<{ [key: number]: number | undefined }>({});
    console.log(qty)
    const onCancel = () => {
        runInAction(() => {
            rootStore.uiStore.isCreateNewOrderVisible = false
        })
        setQty({})
        onNewOrderCreated(null)
    }
    const onQtyChange = (mi: MenuItem, quantity: number) => {
        setQty({ ...qty, [mi.id]: (quantity < 1 ? 0 : quantity) })
    }
    const calcTotal = () => {
        return rootStore.dondalsStore.menuItems
            .filter(mi => mi.dondalId === dondalId)
            .reduce((total, mi) => total + mi.price * (qty[mi.id] || 0), 0)
    }
    const format = currencyFormatter(
        RegionalSettings[
            rootStore.dondalsStore.dondals
                .find(dondal => dondal.id === dondalId)?.countryCode || 'RU'
        ].currencyCode
    ).format
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
                    <span>Total: </span>
                    <span>{format(calcTotal())}</span>
                </div>
            }
            <IconButton
                type="exit"
                disabled={() => false}
                onClick={onCancel}
            >Cancel</IconButton>
        </div>
    );
})

export default CreateNewOrderView;
