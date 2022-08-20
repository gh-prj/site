export type CountryCode =
    | 'RU'
    | 'US'
    | 'EU'
    | 'GB'
    | 'JP'
    | 'TH'
    | 'IN'

export type CurrencyCode =
    | 'RUB'
    | 'USD'
    | 'EUR'
    | 'GBP'
    | 'JPY'
    | 'THB'
    | 'INR'

export interface Settings {
    currencyCode: CurrencyCode
    currencyName: string
    currencyMin: number
    locale: string
    country: string
}

export const RegionalSettings: { [key in CountryCode]: Settings } = {
    'RU': { currencyCode: 'RUB', currencyName: 'Russian Ruble', currencyMin: 0.01, locale: 'ru-RU', country: 'Russia' },
    'US': { currencyCode: 'USD', currencyName: 'US Dollar', currencyMin: 0.01, locale: 'en-US', country: 'United States' },
    'EU': { currencyCode: 'EUR', currencyName: 'Euro', currencyMin: 0.01, locale: 'de-DE', country: 'European Union' },
    'GB': { currencyCode: 'GBP', currencyName: 'British Pound', currencyMin: 0.01, locale: 'en-GB', country: 'United Kingdom' },
    'JP': { currencyCode: 'JPY', currencyName: 'Japanese Yen', currencyMin: 1, locale: 'ja-JP', country: 'Japan' },
    'TH': { currencyCode: 'THB', currencyName: 'Thailand Baht', currencyMin: 0.01, locale: 'th-TH', country: 'Thailand' },
    'IN': { currencyCode: 'INR', currencyName: 'India Rupee', currencyMin: 0.01, locale: 'hi-IN', country: 'India' },
}

export const currencyFormatter = (currencyCode: CurrencyCode) => {
    const settings = Object.entries(RegionalSettings)
        .map(entry => entry[1])
        .find(settings => settings.currencyCode === currencyCode)!
    // console.log('currency: ', currencyCode, 'settings: ', settings)
    return new Intl.NumberFormat(settings.locale, {
        style: 'currency', currency: settings.currencyCode
    })
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