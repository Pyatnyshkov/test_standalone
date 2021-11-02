import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {apiElem, apiState} from "../../models/api";

const measures = ['шт', 'кг', 'л', 'м2', 'м3', 'шт', 'дм3', 'г', 'мл', 'п.м.', 'мг'];
const categories = ['услуги'];
const langOptions = [
	{
		label: 'Русский',
		value: 'ru',
	},
	{
		label: 'Английский',
		value: 'en',
	}
];

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
	taxOptions: [],
	taxRates: [],
	taxationSystems: [],
	taxationSettlements: [],
	agentTypes: [],
	languages: langOptions
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
		setTaxOptions(state, action: PayloadAction<apiElem[]>) {
			state.taxOptions = action.payload
		},
		setTaxRates(state, action: PayloadAction<apiElem[]>) {
			state.taxRates = action.payload
		},
		setTaxationSystems(state, action: PayloadAction<apiElem[]>) {
			state.taxationSystems = action.payload
		},
		setTaxationSettlements(state, action: PayloadAction<apiElem[]>) {
			state.taxationSettlements = action.payload
		},
		setAgentTypes(state, action: PayloadAction<apiElem[]>) {
			state.agentTypes = action.payload
		}
	},
});

export const {
	setShops,
	setCurrencies,
	setAcquires,
	setCardTypes,
	setTaxOptions,
	setTaxRates,
	setTaxationSystems,
	setTaxationSettlements,
	setAgentTypes
} = apiSlice.actions;
export default apiSlice.reducer;