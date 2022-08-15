import { makeObservable, observable } from "mobx"

export default class TestStore {
    value = 3
    dispose: () => void
    constructor() {
        console.log('creating TestStore...')
        this.dispose = () => {
            console.log('disposing TestStore...')
        }
        makeObservable(this, {
            value: observable
        })
    }
}

