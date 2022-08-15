export type CountryCode =
    | 'RU'
    | 'US'
    | 'EU'
    | 'GB'
    | 'JP'

export type CurrencyCode =
    | 'RUB'
    | 'USD'
    | 'EUR'
    | 'GBP'
    | 'JPY'

export interface Settings {
    currency: CurrencyCode
    name: string
    locale: string
    country: string
}

export const RegionalSettings: { [key in CountryCode]: Settings } = {
    'RU': { currency: 'RUB', name: 'Russian Ruble', locale: 'ru-RU', country: 'Russia' },
    'US': { currency: 'USD', name: 'US Dollar', locale: 'en-US', country: 'USA' },
    'EU': { currency: 'EUR', name: 'Euro', locale: 'de-DE', country: 'EU' },
    'GB': { currency: 'GBP', name: 'British Pound', locale: 'en-GB', country: 'UK' },
    'JP': { currency: 'JPY', name: 'Japanese Yen', locale: 'ja-JP', country: 'Japan' },
}



// // type Keys = typeof RegionalSettings
// // type Keys2 = keyof Keys
// // type Keys3 = Partial<Keys>
// type Keys3 = Partial<{ [key in CurrencyCode]: number }>
// // const x: { [key in Keys3]: number } = { RU: 0.66 }
// // const y: Keys3 = {
// //     RU: { currency: 'RUB', name: 'Russian Ruble', locale: 'ru-RU', country: 'Russia' }
// // }
// const t: Keys3 = { 'GBP': 0.8 }
// t['EUR'] = 1.01