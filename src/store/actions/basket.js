import {
	SET_BASKET,
	EDIT_BASKET_KEY,
	ADD_BASKET_ITEM,
	DELETE_BASKET_ITEM
} from "../types";

export const setBasket = (basketList) => ({
	type: SET_BASKET,
	payload: basketList,
});

export const editBasketItemKey = (editItemKey) => ({
	type: EDIT_BASKET_KEY,
	payload: editItemKey,
});

export const addBasketItem = (item, key) => (dispatch, getState) => {
	const oldBasket = getState().basket.items;
	const newBasket = {
		...oldBasket,
		[key]: item
	}
	dispatch({
		type: ADD_BASKET_ITEM,
		payload: newBasket
	})
};

export const deleteBasketItem = (deletableItemKey) => (dispatch, getState) => {
	const basketList = getState().basket.items;
	delete basketList[deletableItemKey];
	const returnedList = basketList || null;
	dispatch({
		type: DELETE_BASKET_ITEM,
		payload: returnedList
	})
};
