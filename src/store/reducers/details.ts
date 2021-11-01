import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DetailsState {
	shop_id: string,
	shopref: string,
	orderNumber: string,
	currency: string,
	timelimit: string,
	language: string,
	reccurring: string,
	comment: string,
	cardType: string,
	payType: string,
	acquirer: string,
	returnURLOk: string,
	returnURLFault: string,
	showcase: string,
	payMode: string,
	isChecked: boolean,
	isClosed: boolean
}

interface Detail {
	name: string;
	value: string
}

const initialState: DetailsState = {
	shop_id: '',
	shopref: '',
	orderNumber: '',
	currency: '',
	timelimit: '',
	language: '',
	reccurring: '',
	comment: '',
	cardType: '',
	payType: '',
	acquirer: '',
	returnURLOk: '',
	returnURLFault: '',
	showcase: '',
	payMode: '',
	isChecked: false,
	isClosed: false
};

const detailsSlice = createSlice({
	name: "details",
	initialState,
	reducers: {
		setDetail(state: any, action: PayloadAction<Detail>) {
			state[action.payload.name] = action.payload.value
		},
		setDetails(state, action: PayloadAction<object>) {
			return {
				...state,
				...action.payload
			}
		},
		setIsChecked(state, action: PayloadAction<any>) {
			state.isChecked = action.payload
		},
		setIsClosed(state, action: PayloadAction<any>) {
			state.isClosed = action.payload
		}
	}
});

export const {
	setDetail,
	setDetails,
	setIsChecked,
	setIsClosed
} = detailsSlice.actions;
export default detailsSlice.reducer;
