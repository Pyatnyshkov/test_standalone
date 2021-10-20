import {
	SET_BASKET,
	SET_BASKET_ITEM,
	DELETE_BASKET_ITEM
} from "../types";

const initialState = {
	items: [],
};

export default function detailsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_BASKET:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
}