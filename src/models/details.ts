interface IObjectKeys {
    [key: string]: any;
}

export interface IDetailsState extends IObjectKeys{
    shop_id: string,
    shopref: string,
    orderNumber: string,
    currency: string,
    timelimit: string,
    language: string,
    reccurring: string,
    comment: string,
    cardType: string,
    payType: string,
    acquirer: string,
    returnURLOk: string,
    returnURLFault: string,
    showcase: string,
    isReccurring: boolean
}

export interface IDetail {
    name: string;
    value: string | number
}