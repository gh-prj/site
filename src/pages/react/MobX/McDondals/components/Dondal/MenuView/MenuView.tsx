import React, { FC } from 'react';
import { RegionalSettings } from '../../../common';
import { useRootStore } from '../../../RootStoreContext';
import MenuItemView from '../MenuItemView/MenuItemView';
import { Dondal } from '../../../store/dondalsStore'
import styles from './MenuView.module.scss'
import AddMenuItemView from '../AddMenuItemView/AddMenuItemView';
import { observer } from 'mobx-react';

interface Props {
    dondal: Dondal
}

const MenuView: FC<Props> = observer(({ dondal }) => {
    const store = useRootStore().dondalsStore
    const settings = RegionalSettings[dondal.countryCode]
    const currencyFormatter = (amount: number | bigint) =>
        new Intl.NumberFormat(settings.locale, {
            style: 'currency', currency: settings.currency
        }).format(amount)
    return (
        <>
            <AddMenuItemView style={{ marginBottom: "5px" }} dondalId={dondal.id} /><br />
            <ul className={styles.menu}>
                {store.menuItems
                    .filter(menuItem => menuItem.dondalId === dondal.id)
                    .sort((item1, item2) => item1.id - item2.id)
                    .map(menuItem =>
                        <MenuItemView key={menuItem.id} menuItem={menuItem} currencyFormatter={currencyFormatter} />
                    )
                }
            </ul>
        </>
    );
})

export default MenuView;
