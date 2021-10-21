import {
	SET_LANGUAGE,
	SET_STEP,
	SHOW_LOADER,
	HIDE_LOADER,
	SHOW_NOTIFY,
	HIDE_NOTIFY,
	ADD_SEND
} from "../types";

const initialState = {
	language: "",
	isLoading: false,
	currentStep: window.location.pathname.slice(1) || 'order',
	showSend: false,
	notify: {
		type: "",
		title: "",
		text: ""
	},
};

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case SET_LANGUAGE:
			return {
				...state,
				language: action.payload,
			};
		case SET_STEP:
			return {
				...state,
				currentStep: action.payload,
			};
		case SHOW_LOADER:
			return {
				...state,
				isLoading: true,
			};
		case HIDE_LOADER:
			return {
				...state,
				isLoading: false,
			};
		case SHOW_NOTIFY:
			return {
				...state,
				notify: action.payload,
			};
		case HIDE_NOTIFY:
			return {
				...state,
				notify: initialState.notify,
			};
		case ADD_SEND:
			return {
				...state,
				showSend: action.payload,
			};
		default:
			return state;
	}
}