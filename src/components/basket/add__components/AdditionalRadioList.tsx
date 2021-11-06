import React from "react";
import I18n from "i18n-js";
import { useAppSelector } from "../../../helpers/redux-hooks";

interface IAdditionRadio {
  setExtraData: React.Dispatch<React.SetStateAction<string>>;
}

export const AdditionalRadioList: React.FC<IAdditionRadio> = ({
  setExtraData
}) => {
  const changeRadioState = (event: { target: HTMLInputElement }) => {
    const value: string = event.target.value;
    setExtraData(value);
  };

  const { host } = useAppSelector(state => state.basket.current);

  return (
    <div className="addition-radio">
      <label className="addition-label">
        <input
          type="radio"
          name="addition"
          value="Fiscalization"
          onChange={changeRadioState}
        />
        <span className="addition__span">{I18n.t("Fiscalization")}</span>
      </label>
      <label className="addition-label">
        <input
          type="radio"
          name="addition"
          value="Marking"
          onChange={changeRadioState}
        />
        <span className="addition__span">{I18n.t("Marking")}</span>
      </label>
      {host === "sirena" && (
        <label className="addition-label">
          <input
            type="radio"
            name="addition"
            value="Documents"
            onChange={changeRadioState}
          />
          <span className="addition__span">{I18n.t("Documents")}</span>
        </label>
      )}
      <label className="addition-label">
        <input
          type="radio"
          name="addition"
          value="PaymentMethods"
          onChange={changeRadioState}
        />
        <span className="addition__span">{I18n.t("Payment methods")}</span>
      </label>
    </div>
  );
};
