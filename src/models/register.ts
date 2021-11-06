interface IObjectKeys {
    [key: string]: any;
}

export interface IAmount extends IObjectKeys {
    amount: number | null;
    currency: string;
}

export interface IAgent extends IObjectKeys {
    type: string;
}

export interface ISupplier extends IObjectKeys {
    name: string;
    inn: string;
    phone: string;
}

export interface ITaxes extends IObjectKeys {
    percentage: string;
    amount: IAmount;
}

export interface IMarking extends IObjectKeys {
    kt: string;
    exc: string;
    coc: string;
    hed: string;
}