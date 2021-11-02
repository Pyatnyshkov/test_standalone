interface IObjectKeys {
    [key: string]: any;
}

export interface DetailsState extends IObjectKeys{
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
    payMode: string,
    isReccurring: boolean
}

export interface Detail {
    name: string;
    value: string | number
}