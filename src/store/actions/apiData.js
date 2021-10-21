import { 
	SET_API_SHOPS, 
	SET_API_CURRENCIES 
} from "../types";

import { showLoader, hideLoader } from "./app";
import { setDetail } from './details';
import { getShops } from "../../api/getShops";

export const setShops = () => async (dispatch) => {
	dispatch(showLoader());
	let shops = await getShops();
	shops = [].concat(shops);
	dispatch({
		type: SET_API_SHOPS,
		payload: shops
	});
	dispatch(setDetail('shop_id', shops[0].id))
	dispatch(hideLoader());
};
