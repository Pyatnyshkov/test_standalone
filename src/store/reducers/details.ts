import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDetail, IDetailsState } from "../../models/details";

const initialState: IDetailsState = {
  shop_id: "",
  shopref: "",
  number: "",
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
  isReccurring: false
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setDetail(state: IDetailsState, action: PayloadAction<IDetail>) {
      state[action.payload.name] = action.payload.value;
    },
    setDetails(state, action: PayloadAction<IDetailsState>) {
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
  setIsRecurring,
} = detailsSlice.actions;
export default detailsSlice.reducer;
