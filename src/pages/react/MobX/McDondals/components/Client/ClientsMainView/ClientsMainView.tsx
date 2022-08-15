import React, { useState } from 'react';
import { useRootStore } from '../../../RootStoreContext';
import { Client } from '../../../store/clientStore';
import AddNewClientView from '../AddNewClientView/AddNewClientView';
import styles from './ClientsMainView.module.scss'

const ClientsMainView = () => {
    const store = useRootStore().clientStore
    const [client, setClient] = useState<Client>(store.clients[0]);
    return (
        <div className={styles.clientsMain}>
            ClientMainView
            <select>
                {store.clients.map(client =>
                    <option key={client.id} value={client.id}>({client.countryCode}) {client.name}</option>
                )}
            </select>
            <AddNewClientView />
        </div>
    );
}

export default ClientsMainView;
