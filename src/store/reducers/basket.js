import {
	SET_BASKET,
	SET_BASKET_ITEM,
	SET_EDITABLE,
	DELETE_BASKET_ITEM
} from "../types";

const initialState = {
	items: {},
	editableItem: ''
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