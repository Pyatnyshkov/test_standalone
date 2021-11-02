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
    }
  }
});

export const {
  setDetail,
  setDetails,
  setIsRecurring
} = detailsSlice.actions;
export default detailsSlice.reducer;
