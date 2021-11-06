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
const types = [
	{ value: "cat_1", label: "Категория 1" },
	{ value: "cat_2", label: "Категория 2" },
	{ value: "cat_3", label: "Категория 3" }
];

const hosts = [
	{ value: "sirena", label: "Сирена" },
	{ value: "sirena_2", label: "Сирена 2" },
	{ value: "sirena_3", label: "Сирена 3" }
];

const clearing = [
	{ value: "clearing_1", label: "Клиринг 1" },
	{ value: "clearing_2", label: "Клиринг 2" },
	{ value: "clearing_3", label: "Клиринг 3" }
];

const taxation_systems = [
	{ value: "general", label: "general" },
	{ value: "simple_income", label: "simple_income" },
	{ value: "simple_profit", label: "simple_profit" },
	{ value: "imputed_income", label: "imputed_income" },
	{ value: "unified_agricultural", label: "unified_agricultural" },
	{ value: "patent", label: "patent" }
];

const tax_rates = [
	{ value: "20/120", label: "20/120" },
	{ value: "10/110", label: "10/110" },
	{ value: "20", label: "20" },
	{ value: "0", label: "0" },
	{ value: "18", label: "18" },
	{ value: "10", label: "10" },
	{ value: "18/118", label: "18/118" }
];

const taxation_types = [
	{ value: "commodity", label: "commodity" },
	{ value: "excise", label: "excise" },
	{ value: "job", label: "job" },
	{ value: "service", label: "service" },
	{ value: "gambling_bet", label: "gambling_bet" },
	{ value: "gambling_win", label: "gambling_win" },
	{ value: "lottery_bet", label: "lottery_bet" },
	{ value: "lottery_win", label: "lottery_win" },
	{ value: "intellectual_activity", label: "intellectual_activity" },
	{ value: "payment", label: "payment" },
	{ value: "agent_commission", label: "agent_commission" },
	{ value: "composite", label: "composite" },
	{ value: "other", label: "other" }
];

const taxation_methods = [
	{ value: "full_prepayment", label: "full_prepayment" },
	{ value: "partial_prepayment", label: "partial_prepayment" },
	{ value: "advance", label: "advance" },
	{ value: "full_payment", label: "full_payment" },
	{ value: "partial_payment", label: "partial_payment" },
	{ value: "credit", label: "credit" },
	{ value: "credit_payment", label: "credit_payment" }
];

const agent_types = [
	{ value: "agent", label: "agent" },
	{ value: "bank_paying_agent", label: "bank_paying_agent" },
	{ value: "bank_paying_subagent", label: "bank_paying_subagent" },
	{ value: "paying_agent", label: "paying_agent" },
	{ value: "paying_subagent", label: "paying_subagent" },
	{ value: "attorney", label: "attorney" },
	{ value: "commission_agent", label: "commission_agent" }
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
	languages: langOptions,
	types,
	hosts,
	clearing,
	taxation_systems,
	tax_rates,
	taxation_types,
	taxation_methods,
	agent_types
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