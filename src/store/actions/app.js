import {
	SET_LANGUAGE,
	SET_STEP,
	SHOW_LOADER,
	HIDE_LOADER,
	SHOW_NOTIFY,
	HIDE_NOTIFY,
	ADD_SEND
} from "../types";

export const showLoader = () => ({
	type: SHOW_LOADER
});

export const hideLoader = () => ({
	type: HIDE_LOADER
});

export const addSend = (isSend) => ({
	type: ADD_SEND,
	payload: isSend,
});

export const showNotification = (notify) => (dispatch) => {
	dispatch({
		type: SHOW_NOTIFY,
		payload: notify,
	});
	setTimeout(() => {
		dispatch(hideNotification());
	}, 3000);
};

export const hideNotification = () => ({
	type: HIDE_NOTIFY,
});

export const setLanguage = (language) => ({
	type: SET_LANGUAGE,
	payload: language,
});

export const setStep = (step) => ({
	type: SET_STEP,
	payload: step,
});