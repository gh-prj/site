import { action, autorun, comparer, makeObservable, observable, reaction, toJS } from "mobx"
import { RootStore } from "./rootStore"
import { v4 as uuidv4 } from 'uuid'
import IStorage from "./storage"
import { CountryCode, CurrencyCode, RegionalSettings } from "../common"

class ClientDto {
    id: number
    name: string
    countryCode: CountryCode
    balance: number
    currencyCode: CurrencyCode
    constructor(
        id: number,
        name: string,
        countryCode: CountryCode,
        balance: number,
        currencyCode: CurrencyCode
    ) {
        this.id = id
        this.name = name
        this.countryCode = countryCode
        this.balance = balance
        this.currencyCode = currencyCode
    }
}

export class Client extends ClientDto {
    constructor(
        id: number,
        name: string,
        countryCode: CountryCode,
        balance: number,
        currencyCode: CurrencyCode
    ) {
        super(id, name, countryCode, balance, currencyCode)
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
        balance: 993.95,
        currencyCode: 'USD'
    },
    {
        id: 2,
        name: 'Luce Pierre',
        countryCode: 'EU',
        balance: 998.12,
        currencyCode: 'EUR'
    }
]

export class ClientStore {
    rootStore: RootStore
    clients: Client[] = []
    addClient: (name: string, countryCode: CountryCode, currencyCode: CurrencyCode) => number
    reset: () => void
    save: () => void
    constructor(rootStore: RootStore, storage: IStorage) {
        console.log('creating ClientStore...')
        this.rootStore = rootStore
        this.save = () => {
            storage.save('mcd/clients', JSON.stringify(this.clients))
            console.log(`saved ${this.clients.length} client(s)`)
        }
        const clientFromDto = (dto: ClientDto) => new Client(
            dto.id, dto.name, dto.countryCode,
            dto.balance, dto.currencyCode
        )
        this.reset = () => {
            console.log('reset')
            this.clients = initialClients.map(clientFromDto)
            this.rootStore.uiStore.selectedClientId = 1
        }
        this.addClient = (name: string, countryCode: CountryCode, currencyCode: CurrencyCode) => {
            console.log('adding client...')
            const client = new Client(
                Math.max(...this.clients.map(client => client.id)) + 1,
                name,
                countryCode,
                ['RU', 'US', 'EU', 'GB'].includes(countryCode) ? 1000 : 30000,
                RegionalSettings[countryCode].currencyCode
            )
            this.clients.push(client)
            return client.id
        }
        this.clients = JSON.parse(storage.load('mcd/clients') ?? '[]')
        console.log(`loaded ${this.clients.length} client(s)`)
        if (!this.clients.length) {
            console.log('used initialClients')
            this.clients = initialClients
        }
        makeObservable(this, {
            rootStore: false,
            clients: observable,
            reset: action.bound,
            addClient: action.bound
        })
    }
}