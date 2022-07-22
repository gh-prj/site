import { action, makeObservable, observable, runInAction } from "mobx"

export class Timer {
    seconds = 0
    isStopped = true
    start: () => void
    stop: () => void

    constructor() {
        let _timer: number
        this.start = function () {
            console.log('start timer')
            this.isStopped = false
            _timer = window.setInterval(() => {
                runInAction(() => {
                    this.seconds++
                    console.log(this.seconds)
                })
            }, 1000)
        }
        this.stop = () => {
            console.log('stop timer')
            clearInterval(_timer)
            this.isStopped = true
        }
        makeObservable(this, {
            seconds: observable,
            isStopped: observable,
            start: action.bound,
            stop: action.bound,
        })
    }
}