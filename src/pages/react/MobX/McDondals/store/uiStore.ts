import { makeObservable, observable } from "mobx"
import { RootStore } from "./rootStore"
import IStorage from "./storage"

export class UiStore {
    rootStore: RootStore
    selectedDondalId?= 1
    isCreateNewOrderVisible?= false
    constructor(rootStore: RootStore, storage: IStorage) {
        console.log('creating ClientStore...')
        this.rootStore = rootStore
        makeObservable(this, {
            selectedDondalId: observable,
            isCreateNewOrderVisible: observable
        })
    }
}