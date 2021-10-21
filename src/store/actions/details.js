import {
	SET_DETAIL,
	SET_DETAILS
} from "../types";

export const setDetail = (name, value) => ({
	type: SET_DETAIL,
	payload: {name, value},
});

export const setDetails = (details) => ({
	type: SET_DETAILS,
	payload: details,
});
