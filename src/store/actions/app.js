import {
	SET_LANGUAGE,
	SET_STEP,
	SET_LOADING,
	SHOW_NOTIFY,
	HIDE_NOTIFY,
	SET_SENDSTEP
} from "../types";

export const setLoading = (isLoading) => ({
	type: SET_LOADING,
	payload: isLoading,
});

export const setSendStep = (isSend) => ({
	type: SET_SENDSTEP,
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