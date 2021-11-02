export interface Shop {
    id: number,
    name: string
}
export interface Currency {
    code: string,
    localization: string
}
export interface CardType {
    id: number,
    name: string
}
export interface Acquire {
    id: number,
    name: string
}

interface IObjectKeys {
    [key: string]: any;
}

export interface apiState extends IObjectKeys{
    shops: apiElem[],
    currencies: apiElem[],
    acquires: apiElem[],
    cardTypes: apiElem[],
    measurements: apiElem[],
    categories: apiElem[],
    taxOptions: apiElem[],
    taxRates: apiElem[],
    taxationSystems: apiElem[],
    taxationSettlements: apiElem[],
    agentTypes: apiElem[],
    languages: apiElem[]
}

export interface apiElem {
    label: string,
    value: string | number
}