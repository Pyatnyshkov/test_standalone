import { 
	SET_API_SHOPS, 
	SET_API_CURRENCIES 
} from "../types";

import { showLoader, hideLoader } from "./app";
import { getShops } from "../../api/getShops";

export const setShops = () => async (dispatch) => {
	dispatch(showLoader());
	const shops = await getShops();
	dispatch({
		type: SET_API_SHOPS,
		payload: [].concat(shops)
	});
	dispatch(hideLoader());
};
