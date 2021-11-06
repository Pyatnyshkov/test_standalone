import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasket, IField } from "../../models/basket";

const initialState: IBasket = {
  items: {},
  current: {
    typename: "goods",
    host: "",
    number: "",
    measure: "",
    quantity: "",
    name: "",
    amount: "",
    currency: "",
    clearing: "",
    descr: "",
    ref: "",
    accode: "",
    taxation_system: "",
    taxation_item_type: "",
    taxation_item_settlement_method: "",
    agent_info: "",
    supplier_name: "",
    supplier_inn: "",
    supplier_phone: "",
    percentage: "",
    tax_amount: "",
    documents: [],
    shopref: "",
    kt: "",
    exc: "",
    coc: "",
    hed: ""
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
  openBasketNew,
  openBasketEdit,
  saveBasketItem,
  closeBasket,
  deleteBasketItem
} = basketSlice.actions;
export default basketSlice.reducer;
