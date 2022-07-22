import { action, makeObservable, observable, observe } from "mobx"

export class Bound {
    value = 0
    valueList: number[] = []
    constructor() {
        makeObservable(this, {
            value: observable,
            valueList: false,
            unboundIncrement: action,
            boundIncrement: action.bound
        })
    }
    unboundIncrement() {
        this.value++
        this.valueList.push(this.value)
    }
    boundIncrement() {
        this.value++
        this.valueList.push(this.value)
    }
    get values() {
        console.log(`getting values: ${this.valueList}`)
        return this.valueList.slice(-10)
    }
}
