import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ICustomer, ICustomerData} from "../../models/customer";

const initialState: ICustomer = {
    id: "",
    name: "",
    email: "",
    phone: ""
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        setCustomerData(state: ICustomer, action: PayloadAction<ICustomerData>) {
            state[action.payload.name] = action.payload.value;
        }
    }
});

export const {
    setCustomerData
} = customerSlice.actions;
export default customerSlice.reducer;
