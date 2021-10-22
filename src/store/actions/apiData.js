import {
	SET_API_SHOPS,
	SET_API_CURRENCIES,
	SET_API_ACQUIRES,
	SET_API_CARDTYPES,
} from "../types";

import { showLoader, hideLoader } from "./app";
import { setDetail } from "./details";
import {
	getShops,
	getCurrencies,
	getAcquires,
	getCardTypes,
} from "../../helpers/api";

export const setShops = () => async (dispatch) => {
	dispatch(showLoader());
	let shops = await getShops();
	shops = [].concat(shops);
	dispatch({
		type: SET_API_SHOPS,
		payload: shops,
	});
	dispatch(setDetail("shop_id", shops[0].id));
	Promise.all([
		dispatch(setCurrencies()),
		dispatch(setAcquires()),
		dispatch(setCardTypes()),
	]).then(
		dispatch(hideLoader())
	);
};

export const setCurrencies = () => async (dispatch, getState) => {
	const shop = getState().details.shop_id;
	let currencies = await getCurrencies(shop);
	currencies = [].concat(currencies);
	dispatch({
		type: SET_API_CURRENCIES,
		payload: currencies,
	});
	dispatch(setDetail("currency", currencies[0].code));
};

export const setAcquires = () => async (dispatch, getState) => {
	const shop = getState().details.shop_id;
	let acquires = await getAcquires(shop);
	acquires = [].concat(acquires);
	dispatch({
		type: SET_API_ACQUIRES,
		payload: acquires,
	});
	dispatch(setDetail("acquirer", acquires[0].code));
};

export const setCardTypes = () => async (dispatch, getState) => {
	const shop = getState().details.shop_id;
	let cardTypes = await getCardTypes(shop);
	cardTypes = [].concat(cardTypes);
	dispatch({
		type: SET_API_CARDTYPES,
		payload: cardTypes,
	});
	dispatch(setDetail("acquirer", cardTypes[0].code));
};
