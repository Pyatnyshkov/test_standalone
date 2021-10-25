import {
	SET_BASKET,
	EDIT_BASKET_KEY,
	ADD_BASKET_ITEM,
	DELETE_BASKET_ITEM,
} from "../types";

const initialState = {
	items: {
		// тестовый объект для постоянной проверки
		'order__item__0': {
			sum: 15000,
			ref: 'ID',
			name: 'Название',
			number: '12',
			measure: '',
			typename: 'goods',
			host: '',
			clearing: '',
			quantity: '',
			descr: '',
			accode: '',
		}
	},
    editItemKey: '',
};

export default function detailsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_BASKET:
			return {
				...state,
				...action.payload
			};
        case EDIT_BASKET_KEY:
            return {
                ...state,
                editItemKey: action.payload
            };
        case ADD_BASKET_ITEM:
			return {
				items: action.payload
			};
        case DELETE_BASKET_ITEM:
            return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
}