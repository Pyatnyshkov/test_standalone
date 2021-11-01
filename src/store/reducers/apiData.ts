import { createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface apiState {
	shops: apiElem[],
	currencies: apiElem[],
	acquires: apiElem[],
	cardTypes: apiElem[],
	measurements: apiElem[],
	categories: apiElem[]
}
// добавил типы данных для id и name, без них выдавал ошибку, так как мы не указали тип данных для id | name
interface apiShopElem {
	id: string,
	name: string
	code: string
}

export interface apiElem {
	label: string,
	value: string | number
}

const measures = ['шт', 'кг', 'л', 'м2', 'м3', 'шт', 'дм3', 'г', 'мл', 'п.м.', 'мг'];
const categories = ['услуги'];

const getOptions = (source:string[]) => source.map(elem => ({
	label: elem,
	value: elem
}));

const initialState: apiState = {
	shops: [],
	currencies: [],
	acquires: [],
	cardTypes: [],
	measurements: getOptions(measures),
	categories: getOptions(categories),

};

const apiSlice = createSlice({
	name: "api",
	initialState,
	reducers: {
		setShops(state, action: PayloadAction<apiElem[]>) {
			state.shops = action.payload
		},
		setCurrencies(state, action: PayloadAction<apiElem[]>) {
			state.currencies = action.payload
		},
		setAcquires(state, action: PayloadAction<apiElem[]>) {
			state.acquires = action.payload
		},
		setCardTypes(state, action: PayloadAction<apiElem[]>) {
			state.cardTypes = action.payload
		},
	},
});

export const {
	setShops,
	setCurrencies,
	setAcquires,
	setCardTypes
} = apiSlice.actions;
export default apiSlice.reducer;