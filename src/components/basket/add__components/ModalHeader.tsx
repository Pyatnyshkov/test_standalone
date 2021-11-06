import React from "react";
import I18n from "i18n-js";
import { useAppDispatch, useAppSelector } from "../../../helpers/redux-hooks";
import { setCurrentField } from "../../../store/reducers/basket";

export const ModalHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const { typename } = useAppSelector(state => state.basket.current);
  const changeRadio = (event: { target: HTMLInputElement }) => {
    const type = event.target.value;
    dispatch(setCurrentField({ name: "typename", value: type }));
  };

  return (
    <div className="modal-header">
      <label className="modal-header-label">
        <input
          className="modal-header__input"
          checked={typename === "goods"}
          name="header-type"
          value="goods"
          type="radio"
          onChange={changeRadio}
        />
        <span className="modal-header__span">{I18n.t("Goods")}</span>
      </label>
      <label className="modal-header-label">
        <input
          className="modal-header__input"
          checked={typename !== "goods"}
          name="header-type"
          value=""
          type="radio"
          onChange={changeRadio}
        />
        <span className="modal-header__span">{I18n.t("Service")}</span>
      </label>
    </div>
  );
};
