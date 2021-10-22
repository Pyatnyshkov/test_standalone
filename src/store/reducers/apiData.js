import {
	SET_API_SHOPS,
	SET_API_CURRENCIES,
	SET_API_ACQUIRES,
	SET_API_CARDTYPES
} from "../types";

const initialState = {
	shops: [],
	currencies: [],
	acquires: [],
	cardTypes: []
};

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case SET_API_SHOPS:
			return {
				...state,
				shops: action.payload,
			};
		case SET_API_CURRENCIES:
			return {
				...state,
				currencies: action.payload,
			};
		case SET_API_ACQUIRES:
			return {
				...state,
				acquires: action.payload,
			};
		case SET_API_CARDTYPES:
			return {
				...state,
				cardTypes: action.payload,
			};
		default:
			return state;
	}
}