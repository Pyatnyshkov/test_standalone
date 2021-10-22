import {
	SET_BASKET,
	SET_BASKET_ITEM,
	SET_EDITABLE,
	DELETE_BASKET_ITEM,
} from "../types";

export const setBasket = (basket) => console.log(basket);

export const setBasketItem = (item) => console.log(item);

export const setEditableItem = (itemKey) => console.log(itemKey);

export const deleteItem = (itemKey) => console.log(itemKey);
