import { action, computed, makeObservable, observable } from "mobx"

export class Store {
    value = 0

    constructor() {
        makeObservable(this, {
            value: observable,
            increment: action.bound,
            tripleValue: computed
        })
    }

    increment() {
        this.value++
        console.log(this.value)
    }

    get tripleValue() {
        return this.value * 3
    }
}