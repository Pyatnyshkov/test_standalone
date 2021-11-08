interface IObjectKeys {
  [key: string]: any;
}

export interface IAmount extends IObjectKeys {
  /**
   * Item amount
   */
  amount: number;
  /**
   * currency code in ISO 4217
   */
  currency: string;
}

export interface ISupplier extends IObjectKeys {
  /**
   * supplier's inn
   */
  inn: string;
  /**
   * supplier's name
   */
  name: string;
  /**
   * supplier's phone
   */
  phone: string;
}

export interface IAgent {
  /**
   * type of taxation agent
   */
  type: string;
}

export interface ITaxAttr extends IObjectKeys {
  /**
   * name of tax example vat
   */
  type: string;
}

export interface ITaxes extends IObjectKeys {
  attributes: ITaxAttr;
  /**
   * percentage which will take from amount
   */
  percentage: string;
  /**
   * Object  of tax amount
   */
  amount: IAmount;
  /**
   * tax source
   */
  source: string;
  /**
   * name
   */
  name: string;
}

export interface IMarking extends IObjectKeys {
  /**
   * kt
   */
  kt: string;
  /**
   * exc
   */
  exc: string;
  /**
   * coc
   */
  coc: string;
  /**
   * ncd
   */
  ncd: string;
}

export interface IBasketValue extends IObjectKeys {
  /**
   * type of item goods/services/etc
   */
  typename: string;
  /**
   * Host where order will go
   */
  host: string;
  /**
   * Item number
   */
  number: string;
  /**
   * Item measure
   */
  measure: string;
  /**
   * Quantity of items
   */
  quantity: number;
  /**
   * Name of item
   */
  name: string;
  /**
   * Object  of item full amount for all quantity
   */
  amount: IAmount;
  /**
   * which clearing to use
   */
  clearing: string;
  /**
   * item description
   */
  descr: string;
  /**
   * item unique id
   */
  ref: string;
  /**
   * account code used in sirena
   */
  accode: string;
  /**
   * taxation system
   */
  taxation_system: string;
  /**
   * taxation item type
   */
  taxation_item_type: string;
  /**
   * taxation item settlement method
   */
  taxation_item_settlement_method: string;
  /**
   * Information about taxation agent
   */
  agent_info: IAgent;
  /**
   * Information about supplier
   */
  supplier_info: ISupplier;
  /**
   * information about taxes
   */
  taxes: ITaxes;
  /**
   * array of ID of documents in sirena
   */
  documents: string[];
  /**
   * Order ID in merchant system
   */
  shopref: string;
  /**
   * Information about marking of item
   */
  marking_info: IMarking;
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
  value: string;
}
