import React from "react";
import { OrderItem } from "./OrderItem";
import { useAppSelector } from "../../helpers/redux-hooks";
import I18n from "i18n-js";

export const OrderList: React.FC = () => {
  const { items } = useAppSelector(state => state.basket);
  const itemKeys = Object.keys(items);

  const listItems = itemKeys.map((key: string) => (
    <OrderItem key={key} item={items[key]} itemKey={key} />
  ));

  if (itemKeys.length) {
    return (
      <div className="order-wrapp">
        <ul className="order-list">{listItems}</ul>
      </div>
    );
  } else {
    return (
      <span className="title basket__title">{I18n.t("Cart is empty")}</span>
    );
  }
};
