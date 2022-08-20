import { computed, makeObservable, observable } from "mobx"
import { RootStore } from "./rootStore"
import IStorage from "./storage"

export class UiStore {
    rootStore: RootStore
    selectedDondalId?= 1
    selectedClientId = 1
    isCreateNewOrderVisible?= false
    newOrderTotal = 0 // dondal currency 
    newOrderClientsTotal = 0 // client currency
    selectedOrderId: number | null = null

    constructor(rootStore: RootStore, storage: IStorage) {
        console.log('creating ClientStore...')
        this.rootStore = rootStore
        makeObservable(this, {
            selectedDondalId: observable,
            selectedClientId: observable,
            selectedOrderId: observable,
            isCreateNewOrderVisible: observable,
            newOrderTotal: observable,
            newOrderClientsTotal: observable,
            selectedClient: computed,
            selectedDondal: computed,
            selectedOrder: computed,
        })
    }

    get selectedClient() {
        return this.rootStore.clientStore.clients.find(client => client.id === this.selectedClientId)
    }
    get selectedDondal() {
        return this.rootStore.dondalsStore.dondals.find(dondal => dondal.id === this.selectedDondalId)
    }
    get selectedOrder() {
        return this.rootStore.orderStore.orders.find(order => order.id === this.selectedOrderId)
    }
}