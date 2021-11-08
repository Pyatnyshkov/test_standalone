import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IBasket, IField} from "../../models/basket";

const initialState: IBasket = {
  items: {},
  current: {
    typename: 'goods',
    host: '',
    number: '',
    measure: '',
    quantity: 0,
    name: '',
    amount: {
      amount: 0,
      currency: '',
    },
    clearing: '',
    descr: '',
    ref: '',
    accode: '',
    taxation_system: '',
    taxation_item_type: '',
    taxation_item_settlement_method: '',
    agent_info: {
      type: '',
    },
    supplier_info: {
      inn: '',
      name: '',
      phone: '',
    },
    taxes: {
      attributes: {
        type: '',
      },
      percentage: '',
      amount: {
        amount: 0,
        currency: '',
      },
      source: '',
      name: '',
    },
    documents: [],
    shopref: '',
    marking_info: {
      kt: '',
      exc: '',
      coc: '',
      ncd: '',
    }
  },
  editingKey: ""
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setCurrentField(state, action: PayloadAction<IField>) {
      const { name, value } = action.payload;
      state.current[name] = value;
    },
    setCurrentAmount(state,action: PayloadAction<IField>) {
      const { name, value } = action.payload;
      if (name === 'amount') {
        state.current.amount.amount = +value;
      } else {
        state.current.amount.currency = value;
      }
    },
    setSupplierInfo(state, action: PayloadAction<IField>) {
      const { name, value } = action.payload;
      state.current.supplier_info[name] = value;
    },
    setAgentInfo(state, action:PayloadAction<string>) {
      state.current.agent_info.type = action.payload;
    },
    setTaxes(state, action: PayloadAction<IField>) {
      const { name, value } = action.payload;
      switch (name) {
        case 'attributes_type':
          state.current.taxes.attributes.type = value;
          break;
        case 'percentage':
          state.current.taxes.percentage = value;
          state.current.taxes.amount.amount = 10;
          state.current.taxes.amount.currency = state.current.amount.currency;
          break;
        default:
          state.current.taxes[name] = value;
      }
    },
    setDocuments(state, action: PayloadAction<string[]>) {
      state.current.documents = action.payload
    },
    setMarking(state, action: PayloadAction<IField>) {
      const { name, value } = action.payload;
      state.current.marking_info[name] = value;
    },
    openBasketNew(state) {
      state.current = initialState.current;
      state.editingKey = "item_" + Object.keys(state.items).length;
    },
    openBasketEdit(state, action: PayloadAction<string>) {
      state.current = state.items[action.payload];
      state.editingKey = action.payload;
    },
    saveBasketItem(state) {
      state.items[state.editingKey] = state.current;
    },
    closeBasket(state) {
      state.editingKey = '';
    },
    deleteBasketItem(state, action: PayloadAction<string>) {
      delete state.items[action.payload];
    }
  }
});

export const {
  setCurrentField,
  setCurrentAmount,
  setSupplierInfo,
  setAgentInfo,
  setTaxes,
  setDocuments,
  setMarking,
  openBasketNew,
  openBasketEdit,
  saveBasketItem,
  closeBasket,
  deleteBasketItem
} = basketSlice.actions;
export default basketSlice.reducer;
