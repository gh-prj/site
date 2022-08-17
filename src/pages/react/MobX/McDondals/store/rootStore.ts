import { makeObservable, observable } from "mobx"
import { ClientStore } from "./clientStore"
import { DondalsStore } from "./dondalsStore"
import { ExchangeStore } from "./exchangeStore"
import { OrderStore } from "./orderStore"
import { LocalStorage } from "./storage"
import { UiStore } from "./uiStore"

export class RootStore {
    orderStore: OrderStore
    clientStore: ClientStore
    dondalsStore: DondalsStore
    exchangeStore: ExchangeStore
    uiStore: UiStore
    save: () => void
    constructor() {
        console.log('creating RootStore:')
        this.uiStore = new UiStore(this, new LocalStorage())
        this.clientStore = new ClientStore(this, new LocalStorage())
        this.orderStore = new OrderStore(this, new LocalStorage())
        this.dondalsStore = new DondalsStore(this, new LocalStorage())
        this.exchangeStore = new ExchangeStore(
            this,
            new LocalStorage(),
            [
                { currencyCode: 'USD', range: { from: 1, to: 1 } },
                { currencyCode: 'EUR', range: { from: 1.01, to: 1.1 } },
                { currencyCode: 'RUB', range: { from: 0.66, to: 0.66 } },
                { currencyCode: 'GBP', range: { from: 0.8, to: 0.85 } },
                { currencyCode: 'JPY', range: { from: 135, to: 139 } },
                { currencyCode: 'THB', range: { from: 32, to: 37 } },
                { currencyCode: 'INR', range: { from: 73, to: 80 } },
            ]
        )
        // makeObservable(this, {
        //     orderStore: observable,
        //     clientStore: observable
        // })
        this.save = () => {
            console.log('saving RootStore...')
            this.clientStore.save()
            this.orderStore.save()
            this.dondalsStore.save()
        }
    }
    dispose() {
        console.log('disposing RootStore...')
        this.exchangeStore.dispose()
        this.dondalsStore.dispose()
    }
}