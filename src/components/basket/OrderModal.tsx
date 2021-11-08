import React, { useState, SyntheticEvent } from "react";

import { AdditionalRadioList } from "./add__components/AdditionalRadioList";
import { ModalHeader } from "./add__components/ModalHeader";
import { Marking } from "./add__components/Marking";
import { Fiscalization } from "./add__components/Fiscalization";
import { Documents } from "./add__components/Documents";
import { PaymentMethods } from "./add__components/PaymentMethods";
import { ModalMainInputsList } from "./add__components/ModalMainInputsList";

import { useAppDispatch, useAppSelector } from "../../helpers/redux-hooks";
import { saveBasketItem, closeBasket } from "../../store/reducers/basket";
import { setNotify } from "../../store/reducers/app";

import I18n from "i18n-js";
import validate from "../../helpers/validation";

export const OrderModal: React.FC = () => {
  const dispatch = useAppDispatch();
  //* стейт дополнительных вкладок фискализация/маркировка/документы/способы оплаты
  const [extraData, setExtraData] = useState("Fiscalization");
  const items = useAppSelector(state => state.basket.current);

  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    const { isValid, errors } = validate(items);
    if (isValid) {
      dispatch(saveBasketItem());
      dispatch(dispatch(closeBasket()));
    } else {
      console.log(errors)
      dispatch(
        setNotify({
          type: "warn",
          title: I18n.t("Validation error"),
          text: I18n.t("Validation error text")
        })
      );
    }
  };

  const getContent = () => {
    switch (extraData) {
      case "Fiscalization":
        return <Fiscalization />;
      case "Marking":
        return <Marking />;
      case "Documents":
        return <Documents />;
      case "PaymentMethods":
        return <PaymentMethods />;
      default:
        return <Fiscalization />;
    }
  };

  return (
    <form
      className="order-form basket-modal"
      onClick={e => e.stopPropagation()}
      onSubmit={event => submitForm(event)}
    >
      <ModalHeader />
      <div className="scrolling-wrapp">
        <ModalMainInputsList />

        <AdditionalRadioList setExtraData={setExtraData} />

        {getContent()}

        <div className="form-buttons">
          <button className="modal-item__submit" type="submit">
            {I18n.t("Save")}
          </button>
          <button
            className="close-modal__button"
            type={"button"}
            onClick={() => dispatch(dispatch(closeBasket()))}
          >
            {I18n.t("Close")}
          </button>
        </div>
      </div>
    </form>
  );
};
