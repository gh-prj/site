import { Settings } from "../common"
import { action, autorun, computed, extendObservable, makeObservable, observable, reaction, runInAction, toJS } from "mobx"
import { CountryCode, CurrencyCode, RegionalSettings } from "../common"
import { RootStore } from "./rootStore"
import IStorage from "./storage"

interface Range {
    from: number
    to: number
}

type Trend = 'up' | 'down' | 'same'

export class Rate {
    currencyCode: CurrencyCode
    currencyName: string
    countryCode: CountryCode
    valueStr = '0'
    trend: Trend = 'same'
    dispose: () => void
    constructor(currencyCode: CurrencyCode, range: Range) {
        this.currencyCode = currencyCode
        // @ts-ignore
        // this.countryCode = Object.keys(RegionalSettings).find(key => (RegionalSettings[key] as Settings).currency === currencyCode)
        this.countryCode = Object.entries(RegionalSettings).find(entry => entry[1].currencyCode === currencyCode)![0] as CountryCode
        this.currencyName = RegionalSettings[this.countryCode].currencyName
        let isDisposing = false
        this.dispose = () => {
            // console.log('disposing ', this.currencyCode)
            isDisposing = true
        }
        makeObservable(this, {
            currencyCode: false,
            currencyName: false,
            countryCode: false,
            valueStr: observable,
            trend: observable,
            value: computed,
            dispose: false,
        })
        const getRate = () => {
            const rate = range.from + Math.random() * (range.to - range.from)
            let dotIdx = rate.toString().indexOf('.')
            if (dotIdx === -1) dotIdx = rate.toString().length
            const i = 5 - dotIdx + (rate < 1 ? 1 : 0)
            return rate.toFixed(i)
        }
        const setNextTick = () => {
            setTimeout(() => {
                const rateStr = getRate()
                const rate = parseFloat(rateStr)
                runInAction(() => {
                    this.value === 0
                        || rate > this.value && (this.trend = 'up')
                        || rate < this.value && (this.trend = 'down')
                        || (this.trend = 'same')
                    this.valueStr = rateStr
                })
                // console.log(new Date().toLocaleTimeString(), this.currencyCode, this.valueStr, this.trend)
            }, this.value === 0 ? 100 : Math.random() * 4000 + 2000)
        }
        reaction(
            () => this.value,
            () => {
                setNextTick()
            },
            {
                fireImmediately: true,
                scheduler: fn => {
                    !isDisposing && fn()
                }
            }
        )
        // console.log('created ', this.currencyCode)
    }
    get value() {
        return parseFloat(this.valueStr)
    }
}

interface CurrencyParams {
    currencyCode: CurrencyCode
    range: Range
}

type Rates = Partial<{ [key in CurrencyCode]: number }>

export class ExchangeStore {
    rootStore: RootStore
    rates: Rate[] = []
    constructor(rootStore: RootStore, storage: IStorage, currencyList: CurrencyParams[]) {
        console.log('creating ExchangeStore...')
        this.rootStore = rootStore
        currencyList.forEach(currency => {
            const rate = new Rate(currency.currencyCode, currency.range)
            this.rates.push(rate)
        })
        makeObservable(this, {
            rootStore: false,
            rates: observable,
            ratesObj: computed,
        })
        // autorun(() => {
        //     console.log(this.ratesObj)
        // })
    }
    get ratesObj() {
        const obj: Rates = {}
        for (const rate of this.rates) {
            obj[rate.currencyCode] = rate.value
        }
        return obj
    }
    dispose() {
        console.log('disposing ExchangeStore...')
        this.rates.forEach(rate => {
            rate.dispose()
        })
    }
}
