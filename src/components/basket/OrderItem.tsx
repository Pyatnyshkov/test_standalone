import React from "react";

import I18n from "i18n-js";
import { IBasketValue } from "../../models/basket";
import { useAppDispatch } from "../../helpers/redux-hooks";
import { openBasketEdit, deleteBasketItem } from "../../store/reducers/basket";

interface IOrderItem {
  item: IBasketValue;
  itemKey: string;
}

export const OrderItem: React.FC<IOrderItem> = ({ itemKey, item }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="order__item">
      <figure className="order__figure">
        <div className={`order__item-logo order__item-logo${item.typename}`} />
      </figure>
      <span className="order__span">{item.name}</span>
      <div className="order-amount">
        <span className="order__amount">{item.quantity}</span>
        <span className="order__units">{item.measure}</span>
      </div>
      <div className="order-sum">
        <span className="order__sum">{item.amount}</span>
        <span className="order__currency">{item.currency}</span>
      </div>
      <div className="order-buttons">
        <button
          type="button"
          className="order-edit__button"
          aria-label={I18n.t("Item edit button")}
          onClick={() => dispatch(openBasketEdit(itemKey))}
        />
        <button
          type="button"
          className="order-delete__button"
          aria-label={I18n.t("Item delete button")}
          onClick={() => dispatch(deleteBasketItem(itemKey))}
        />
      </div>
    </li>
  );
};
