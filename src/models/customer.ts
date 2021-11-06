interface IObjectKeys {
    [key: string]: any;
}

export interface ICustomer extends IObjectKeys {
    id: string,
    name: string,
    email: string,
    phone: string
}

export interface ICustomerData {
    name: string,
    value: string | number
}