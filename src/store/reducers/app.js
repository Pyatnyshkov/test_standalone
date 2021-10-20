import {
	SET_LANGUAGE,
	SET_STEP,
	SET_LOADING,
	SHOW_NOTIFY,
	HIDE_NOTIFY,
	SET_SENDSTEP
} from "../types";

const initialState = {
	language: "",
	isLoading: false,
	currentStep: window.location.pathname.slice(1) || 'order',
	showSend: true,
	notify: {
		type: "",
		title: "",
		message: ""
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
		case SET_LOADING:
			return {
				...state,
				isLoading: action.payload,
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
		case SET_SENDSTEP:
			return {
				...state,
				showSend: action.payload,
			};
		default:
			return state;
	}
}