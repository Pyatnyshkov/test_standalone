import axios from "../utils/API";
import { path } from "../utils/api_path";

import { shops, currencies, acquires, cardTypes } from "./test_data";

export const getShops = async () => {
	try {
		const response = await axios.post(path.shops);
		return response.data.shops;
	} catch (e) {
		return shops;
	}
};

export const getCurrencies = async (shop) => {
	try {
		const response = await axios.post(path.currencies, { shop });
		return response.data.currencies.LocalizedEntity;
	} catch (e) {
		return currencies;
	}
};

export const getAcquires = async (shop) => {
	try {
		const response = await axios.post(path.acquires, { shop });
		return response.data.acquires;
	} catch (e) {
		return acquires;
	}
};

export const getCardTypes = async (shop) => {
	try {
		const response = await axios.post(path.cardTypes, { shop });
		return response.data.cardTypes;
	} catch (e) {
		return cardTypes;
	}
};
