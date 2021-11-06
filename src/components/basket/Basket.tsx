import React, {forwardRef, useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../helpers/redux-hooks";

import { openBasketNew, closeBasket } from "../../store/reducers/basket";

import { OrderModal } from "./OrderModal";
import { OrderList } from "./OrderList";

import { fadeIn, fadeOut } from "../../helpers/modal-fade";
import I18n from "i18n-js";

const Basket = forwardRef((props, ref: any) => {
  const modalRef = useRef<HTMLDivElement>(null);
    const {editingKey} = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();

  useEffect(() => {
      editingKey ? fadeIn(modalRef.current, 200) : fadeOut(modalRef.current, 200);
  }, [editingKey]);


  return (
    <div className="basket content__elem" ref={ref}>
      <div className="basket-header">
        <button
          type="button"
          className="open-modal-button"
          aria-label={I18n.t("Modal open button")}
          onClick={() => dispatch(openBasketNew())}
        />
      </div>

      <OrderList />

      <div ref={modalRef} className="modal" onClick={() => dispatch(closeBasket())}>
        {editingKey && <OrderModal />}
      </div>
    </div>
  );
});

export default Basket;
