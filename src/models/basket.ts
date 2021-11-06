interface IObjectKeys {
  [key: string]: any;
}

export interface IBasketValue extends IObjectKeys {
  typename: string;
  host: string;
  number: string;
  measure: string;
  quantity: string;
  name: string;
  amount: string;
  currency: string;
  clearing: string;
  descr: string;
  ref: string;
  accode: string;
  taxation_system: string;
  taxation_item_type: string;
  taxation_item_settlement_method: string;
  agent_info: string;
  supplier_name: string;
  supplier_inn: string;
  supplier_phone: string;
  percentage: string;
  tax_amount: string;
  documents: string[];
  shopref: string;
  kt: string;
  exc: string;
  coc: string;
  hed: string;
}

export interface IBasketElem extends IObjectKeys {
  key?: IBasketValue;
}

export interface IBasket extends IObjectKeys {
  items: IBasketElem;
  current: IBasketValue;
  editingKey: string;
}

export interface IField extends IObjectKeys {
  name: string;
  value: string | string[];
}
