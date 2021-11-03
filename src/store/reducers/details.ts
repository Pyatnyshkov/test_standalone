import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Detail, DetailsState } from "../../models/details";

const initialState: DetailsState = {
  shop_id: "",
  shopref: "",
  orderNumber: "",
  currency: "",
  timelimit: "",
  language: "ru",
  reccurring: "",
  comment: "",
  cardType: "",
  payType: "",
  acquirer: "",
  returnURLOk: "",
  returnURLFault: "",
  showcase: "",
  payMode: "",
  isReccurring: false,
  cardPayment: false,
  promoPayment: false
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setDetail(state: DetailsState, action: PayloadAction<Detail>) {
      state[action.payload.name] = action.payload.value;
    },
    setDetails(state, action: PayloadAction<DetailsState>) {
      return {
        ...state,
        ...action.payload
      };
    },
    setIsRecurring(state, action: PayloadAction<boolean>) {
      state.isReccurring = action.payload;
    },
    // Временные стейты для методов оплаты
    setCardPayment(state, action: PayloadAction<boolean>) {
      state.cardPayment = action.payload;
    },
    setPromoPayment(state, action: PayloadAction<boolean>) {
      state.promoPayment = action.payload;
    }
  }
});

export const {
  setDetail,
  setDetails,
  setIsRecurring,
  setCardPayment,
  setPromoPayment
} = detailsSlice.actions;
export default detailsSlice.reducer;
