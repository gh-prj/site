import { makeObservable, observable, action, makeAutoObservable, computed } from "mobx"
import { CurrencyCode } from "../common"
import { RootStore } from "./rootStore"
import IStorage from "./storage"

// interface IOrderItem {
//     id: number
//     orderId: number
//     item: string
//     price: number
//     quantity: number
// }

class OrderItemDto {
    id: number
    orderId: number
    item: string
    price: number
    quantity: number
    constructor(
        id: number,
        orderId: number,
        item: string,
        price: number,
        quantity: number
    ) {
        this.id = id
        this.orderId = orderId
        this.item = item
        this.price = price
        this.quantity = quantity
    }
}

export class OrderItem extends OrderItemDto {
    store: OrderStore
    // id: number
    // orderId: number
    // item: string
    // price: number
    // quantity: number
    // order: Order | null
    constructor(
        store: OrderStore,
        id: number,
        orderId: number,
        item: string,
        price: number,
        quantity: number
    ) {
        super(id, orderId, item, price, quantity)
        this.store = store
        // this.id = id
        // this.orderId = orderId
        // this.item = item
        // this.price = price
        // this.quantity = quantity
        // this.order = this.store?.orders.find(order => order.id === this.orderId) || null
        makeObservable(this, {
            store: false,
            id: false,
            orderId: false,
            item: observable,
            price: observable,
            quantity: observable,
            // order: false
        })
    }
    get order() {
        return this.store.orders.find(order => order.id === this.orderId)
    }
}

class OrderDto {
    id: number
    clientId: number
    orderCurrencyCode: CurrencyCode
    paymentCurrencyCode: CurrencyCode
    isPaid: boolean
    isDelivered: boolean
    paid?: number
    constructor(
        id: number,
        clientId: number,
        orderCurrencyCode: CurrencyCode,
        paymentCurrencyCode: CurrencyCode,
        isPaid: boolean,
        isDelivered: boolean,
        paid?: number
    ) {
        this.id = id
        this.clientId = clientId
        this.orderCurrencyCode = orderCurrencyCode
        this.paymentCurrencyCode = paymentCurrencyCode
        this.isPaid = isPaid
        this.isDelivered = isDelivered
        this.paid = paid
    }
}

export class Order extends OrderDto {
    store: OrderStore
    constructor(
        store: OrderStore,
        id: number,
        clientId: number,
        orderCurrencyCode: CurrencyCode,
        paymentCurrencyCode: CurrencyCode,
        isPaid = false,
        isDelivered = false,
        paid?: number
    ) {
        super(id, clientId, orderCurrencyCode, paymentCurrencyCode, isPaid, isDelivered, paid)
        this.store = store
        // this.id = id // generate new id
        makeObservable(this, {
            store: false,
            id: false,
            clientId: false,
            orderCurrencyCode: false,
            paymentCurrencyCode: observable,
            isPaid: observable,
            isDelivered: observable,
            items: computed,
            total: computed,
            addItem: action.bound,
        })
    }
    get items() {
        return this.store.orderItems.filter(item => item.orderId === this.id)
        // const itemArray = this.store.orderItems.filter(item => item.orderId === this.id)
        // console.log(itemArray)
        // return itemArray
    }
    get total() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0)
    }
    get client() {
        return this.store.rootStore.clientStore.clients.find(client => client.id === this.clientId)
    }
    addItem(item: string, price: number, quantity: number) {
        console.log('adding orderItem...')
        const orderItem = new OrderItem(
            this.store,
            Math.max(...this.store.orderItems.map(oi => oi.id)) + 1,
            this.id,
            item,
            price,
            quantity
        )
        this.store.orderItems.push(orderItem)
    }
}

const initialOrders: OrderDto[] = [
    new OrderDto(1, 1, 'USD', 'USD', false, false),
    new OrderDto(2, 2, 'EUR', 'USD', false, false),
]

const initialOrderItems: OrderItemDto[] = [
    new OrderItemDto(1, 1, "Burger", 3, 2),
    new OrderItemDto(2, 2, "Cola", 2, 5)
]

export class OrderStore {
    rootStore: RootStore
    orders: Order[] = []
    orderItems: OrderItem[] = []
    addOrder: (clientId: number, orderCurrencyCode: CurrencyCode,
        paymentCurrencyCode: CurrencyCode, isPaid?: boolean,
        isDelivered?: boolean, paid?: number | undefined) => Order
    addOrderItem: (orderId: number, item: string, price: number, quantity: number) => OrderItem
    reset: () => void
    save: () => void
    constructor(rootStore: RootStore, storage: IStorage) {
        console.log('creating OrderStore...')
        this.rootStore = rootStore
        this.save = () => {
            const orderToDto = (order: Order) => ({
                id: order.id,
                clientId: order.clientId,
                orderCurrencyCode: order.orderCurrencyCode,
                paymentCurrencyCode: order.paymentCurrencyCode,
                isPaid: order.isPaid,
                isDelivered: order.isDelivered,
                paid: order.paid
            })
            const orderItemToDto = (orderItem: OrderItem) => ({
                id: orderItem.id,
                orderId: orderItem.orderId,
                item: orderItem.item,
                price: orderItem.price,
                quantity: orderItem.quantity
            })
            storage.save('mcd/orders', JSON.stringify(this.orders.map(orderToDto)))
            console.log(`saved ${this.orders.length} order(s)`)
            storage.save('mcd/orderItems', JSON.stringify(this.orderItems.map(orderItemToDto)))
            console.log(`saved ${this.orderItems.length} orderItem(s)`)
        }
        const orderFromDto = (dto: OrderDto) => new Order(
            this, dto.id, dto.clientId, dto.orderCurrencyCode,
            dto.paymentCurrencyCode, dto.isPaid, dto.isDelivered, dto.paid
        )
        const orderItemFromDto = (dto: OrderItemDto) => new OrderItem(
            this, dto.id, dto.orderId, dto.item,
            dto.price, dto.quantity
        )
        this.reset = () => {
            console.log('reset orders')
            this.orders = initialOrders.map(orderFromDto)
            console.log('reset orderItems')
            this.orderItems = initialOrderItems.map(orderItemFromDto)
        }
        this.addOrder = (clientId: number, orderCurrencyCode: CurrencyCode,
            paymentCurrencyCode: CurrencyCode, isPaid?: boolean,
            isDelivered?: boolean, paid?: number | undefined) => {
            console.log('adding order...')
            const order = new Order(
                this,
                Math.max(...this.orders.map(order => order.id)) + 1,
                clientId,
                orderCurrencyCode,
                paymentCurrencyCode,
                isPaid,
                isDelivered,
                paid
            )
            this.orders.push(order)
            return order
        }
        this.addOrderItem = (orderId: number, item: string, price: number, quantity: number) => {
            console.log('adding orderItem...')
            const orderItem = new OrderItem(
                this,
                Math.max(...this.orderItems.map(orderItem => orderItem.id)) + 1,
                orderId,
                item,
                price,
                quantity
            )
            this.orderItems.push(orderItem)
            return orderItem
        }
        this.orders = JSON.parse(storage.load('mcd/orders') ?? '[]').map(orderFromDto)
        console.log(`loaded ${this.orders.length} order(s)`)
        this.orderItems = JSON.parse(storage.load('mcd/orderItems') ?? '[]').map(orderItemFromDto)
        console.log(`loaded ${this.orderItems.length} orderItems(s)`)
        makeObservable(this, {
            rootStore: false,
            orders: observable,
            orderItems: observable,
            reset: action.bound,
            addOrder: action.bound,
            addOrderItem: action.bound
        })
    }
}