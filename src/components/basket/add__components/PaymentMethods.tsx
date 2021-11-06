import React from "react";
import I18n from "i18n-js";
import { useAppDispatch, useAppSelector } from "../../../helpers/redux-hooks";
import { CustomInput } from "../../UI/CustomInput";
export const PaymentMethods = () => {
  const dispatch = useAppDispatch();
  const details = useAppSelector(state => state.details);

  function handleChange(name: string, value: string) {
    // dispatch(setDetail({name, value}))
  }

  return (
    <div className="modal-payment">
      {details.promoPayment ? null : (
        <div
          className="modal-payment__item"
          // onClick={() => dispatch(setCardPayment(!details.cardPayment))}
        >
          <div className="modal-payment__logos">{/* заглушка для лого*/}</div>
          <div>
            <p>{I18n.t("Payment by card")}</p>
          </div>
        </div>
      )}
      {details.cardPayment && (
        <CustomInput
          label={I18n.t("Total")}
          name="reccurring"
          value={details.reccurring}
          onChange={handleChange}
          type="text"
        />
      )}
      {details.cardPayment && <button>Добавить</button>}
      {details.cardPayment ? null : (
        <div
          className="modal-payment__item"
          // onClick={() => dispatch(setPromoPayment(!details.promoPayment))}
        >
          <div>
            <p>{I18n.t("Payment with a promo code")}</p>
          </div>
        </div>
      )}
      {details.promoPayment && (
        <CustomInput
          label={I18n.t("Total")}
          name="reccurring"
          value={details.reccurring}
          onChange={handleChange}
          type="text"
        />
      )}
      {details.promoPayment && <button>Добавить</button>}
    </div>
  );
};
