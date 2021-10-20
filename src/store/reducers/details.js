import {
	SET_DETAIL,
	SET_DETAILS
} from "../types";

const initialState = {
	shop_id: '',
	shopref: '',
	orderNumber: '',
	currency: '',
	timelimit: '',
	language: '',
	reccurring: '',
	comment: '',
	choosenCardType: '',
	choosenPayType: '',
	choosenAcquirer: '',
	returnURLOk: '',
	returnURLFault: '',
	showcase: '',
	choosenPayMode: ''
};

export default function detailsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_DETAIL:
			return {
				...state,
				[action.payload.name]: action.payload.value
			};
		case SET_DETAILS:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
}