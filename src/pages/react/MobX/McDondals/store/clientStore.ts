import { action, autorun, comparer, makeObservable, observable, reaction, toJS } from "mobx"
import { json } from "stream/consumers"
import { RootStore } from "./rootStore"
import { v4 as uuidv4 } from 'uuid'
import IStorage from "./storage"
import { CountryCode, CurrencyCode } from "../common"

interface ClientDto {
    id: number
    name: string
    countryCode: CountryCode
    balance: number
    currencyCode: CurrencyCode
}

export class Client {
    id: number
    name: string
    countryCode: CountryCode
    balance: number
    currencyCode: CurrencyCode
    constructor(client: ClientDto) {
        this.id = client.id
        this.name = client.name
        this.countryCode = client.countryCode
        this.balance = client.balance
        this.currencyCode = client.currencyCode
        makeObservable(this, {
            balance: observable
        })
    }
}

const initialClients: ClientDto[] = [
    {
        id: 1,
        name: 'John Smith',
        countryCode: 'US',
        balance: 1000,
        currencyCode: 'USD'
    },
    {
        id: 2,
        name: 'Luce Pierre',
        countryCode: 'EU',
        balance: 1000,
        currencyCode: 'EUR'
    }
]

export class ClientStore {
    rootStore: RootStore
    clients: Client[] = []
    add: () => void
    reset: () => void
    save: () => void
    constructor(rootStore: RootStore, storage: IStorage) {
        console.log('creating ClientStore...')
        this.rootStore = rootStore
        this.save = () => {
            storage.save('mcd/clients', JSON.stringify(this.clients))
            console.log(`saved ${this.clients.length} client(s)`)
        }
        this.reset = () => {
            console.log('reset')
            this.clients = initialClients.map(dto => new Client(dto))
        }
        this.add = () => {
            console.log('adding client...')
            this.clients.push({
                id: Math.max(...this.clients.map(client => client.id)) + 1,
                balance: 200,
                countryCode: 'RU',
                currencyCode: "RUB",
                name: 'xxx www'
            })
        }
        this.clients = JSON.parse(storage.load('mcd/clients') ?? '[]')
        console.log(`loaded ${this.clients.length} client(s)`)
        makeObservable(this, {
            rootStore: false,
            clients: observable,
            reset: action.bound,
            // load: action.bound,
            // load: false,
            // save: false,
            add: action.bound
        })
    }
}