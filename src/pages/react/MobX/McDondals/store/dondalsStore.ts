import { action, makeObservable, observable, toJS } from "mobx"
import { CountryCode } from "../common"
import { RootStore } from "./rootStore"
import IStorage from "./storage"

export class MenuItem {
    id: number
    dondalId: number
    name: string
    price: number
    constructor(
        id: number,
        dondalId: number,
        name: string,
        price: number,
    ) {
        this.id = id
        this.dondalId = dondalId
        this.name = name
        this.price = price
        makeObservable(this, {
            name: observable,
            price: observable
        })
    }
}

const initialMenuItems: MenuItem[] = [
    {
        id: 1,
        dondalId: 1,
        name: "Susi",
        price: 249
    },
    {
        id: 2,
        dondalId: 1,
        name: "Pusi",
        price: 349
    },
    {
        id: 3,
        dondalId: 1,
        name: "Susi-pusi",
        price: 499
    },
    {
        id: 4,
        dondalId: 2,
        name: "Pelmeni",
        price: 0.37
    },
    {
        id: 5,
        dondalId: 2,
        name: "Vodka",
        price: 3.62
    },
    {
        id: 6,
        dondalId: 2,
        name: "Caviar",
        price: 3.20
    },
    {
        id: 7,
        dondalId: 2,
        name: "Kvass",
        price: 0.06
    },
    {
        id: 8,
        dondalId: 2,
        name: "Bread",
        price: 0.02
    },
]


export class Dondal {
    id: number
    countryCode: CountryCode
    name: string
    terminated: boolean
    balance = 0
    constructor(id: number,
        countryCode: CountryCode,
        name: string,
        terminated = false,
        balance = 0
    ) {
        this.id = id
        this.name = name
        this.countryCode = countryCode
        this.terminated = terminated
        this.balance = balance
        makeObservable(this, {
            terminated: observable,
            balance: observable
        })
        console.log(toJS(this))
    }
}

const initialDondals: Dondal[] = [
    {
        id: 1,
        countryCode: "JP",
        name: "神風",
        terminated: false,
        balance: 0
    },
    {
        id: 2,
        countryCode: 'RU',
        name: 'Red Corner',
        terminated: false,
        balance: 0
    },
]

export class DondalsStore {
    rootStore: RootStore
    dondals: Dondal[] = []
    menuItems: MenuItem[] = []
    addRandomDondal: () => void
    reset: () => void
    save: () => void
    addMenuItem: (dondalId: number, name: string, price: number) => MenuItem
    constructor(rootStore: RootStore, storage: IStorage) {
        console.log('creating DondalsStore...')
        this.rootStore = rootStore
        this.save = () => {
            storage.save('mcd/dondals', JSON.stringify(this.dondals))
            console.log(`saved ${this.dondals.length} dondal(s)`)
            storage.save('mcd/menuItems', JSON.stringify(this.menuItems))
            console.log(`saved ${this.menuItems.length} menuItem(s)`)
        }
        this.reset = () => {
            console.log('reset')
            this.dondals = initialDondals
            this.menuItems = initialMenuItems
        }
        this.addRandomDondal = () => {
            console.log('adding dondal...')
            this.dondals.push({
                id: Math.max(...this.dondals.map(dondal => dondal.id)) + 1,
                countryCode: ['EU', 'GB', 'RU'][Math.floor(Math.random() * 3)] as CountryCode,
                name: 'Dondal' + Date.now(),
                terminated: false,
                balance: 0
            })
        }
        this.addMenuItem = (dondalId: number, name: string, price: number) => {
            console.log('adding menuItem...')
            const menuItem = new MenuItem(
                Math.max(...this.menuItems.map(menuItem => menuItem.id)) + 1,
                dondalId,
                name,
                price,
            )
            this.menuItems.push(menuItem)
            return menuItem
        }
        this.dondals = JSON.parse(storage.load('mcd/dondals') ?? '[]')
        console.log(`loaded ${this.dondals.length} dondal(s)`)
        if (!this.dondals.length) {
            console.log('used initialDondals')
            this.dondals = initialDondals
        }
        this.menuItems = JSON.parse(storage.load('mcd/menuItems') ?? '[]')
        console.log(`loaded ${this.menuItems.length} menuItem(s)`)
        if (!this.menuItems.length) {
            console.log('used initialMenuItems')
            this.menuItems = initialMenuItems
        }
        makeObservable(this, {
            rootStore: false,
            dondals: observable,
            menuItems: observable,
            reset: action.bound,
            addRandomDondal: action.bound,
            addMenuItem: action.bound,
            updateMenuItem: action.bound,
            removeMenuItem: action.bound,
            addDondal: action.bound,
        })
    }
    updateMenuItem(id: number, name: string, price: number) {
        const menuItem = this.menuItems.find(menuItem => menuItem.id === id)
        if (menuItem) {
            menuItem.name = name
            menuItem.price = price
        }
        else {
            throw new Error('Menu Item not found.')
        }
    }
    removeMenuItem(id: number) {
        console.log('removing menuItem...')
        this.menuItems = this.menuItems.filter(menuItem => menuItem.id !== id)
    }
    addDondal(countryCode: CountryCode, name: string) {
        console.log('adding dondal...')
        const dondal = new Dondal(Math.max(...this.dondals.map(dondal => dondal.id)) + 1,
            countryCode, name, false)
        this.dondals.push(dondal)
        return dondal
    }
    dispose() {
        console.log('disposing DondalsStore...')
    }
}