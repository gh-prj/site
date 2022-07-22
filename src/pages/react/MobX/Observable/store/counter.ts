import { makeAutoObservable } from 'mobx'

class Counter {

    count = 0

    constructor() {
        this.increment = this.increment.bind(this)
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1
        console.log(this.count)
    }

    decrement() {
        this.count = this.count - 1
        console.log(this.count)
    }

}

export default new Counter()