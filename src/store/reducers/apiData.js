import {
	SET_API_SHOPS,
	SET_API_CURRENCIES
} from "../types";

const initialState = {
	shops: [],
	currencies: []
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
		default:
			return state;
	}
}