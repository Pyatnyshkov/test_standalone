import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BasketState {
	items: {
		[key: string]: BasketElem
	},
	editingKey: string
}

interface BasketElem {
	sum: number,
	ref: string,
	name: string,
	number: string,
	measure: string,
	typename: string,
	host: string,
	clearing: string,
	quantity: number,
	descr: string,
	accode: string,
}

const initialState: BasketState = {
	items: {},
	editingKey: ''
};

const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
	}
});

export const {
} = basketSlice.actions;
export default basketSlice.reducer;

