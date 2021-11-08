interface IObjectKeys {
    [key: string]: any;
}

export interface IDetailsState extends IObjectKeys{
    /**
     * shop ID in ips system
     */
    shop_id: string,
    shopref: string,
    /**
     * Order number
     */
    number: string,
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