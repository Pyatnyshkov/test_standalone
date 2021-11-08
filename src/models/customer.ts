interface IObjectKeys {
    [key: string]: any;
}

export interface ICustomer extends IObjectKeys {
    /**
     * Customer id in ips system
     */
    id: string;
    /**
     * Customer's full name
     */
    name: string;
    /**
     * Customers email
     */
    email: string;
    /**
     * Customer's phone
     */
    phone: string;
}

export interface ICustomerData {
    name: string,
    value: string | number
}