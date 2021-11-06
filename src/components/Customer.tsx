import React, { forwardRef } from "react";
import I18n from "i18n-js";
import { CustomInput } from "./UI/CustomInput";

import { useAppDispatch, useAppSelector } from "../helpers/redux-hooks";
import { setCustomerData } from "../store/reducers/customer";

const Customer = forwardRef((props, ref: any) => {
  const dispatch = useAppDispatch();
  const customerData = useAppSelector(state => state.customer);

  const handleChange = (name: string, value: string | number) => {
    dispatch(setCustomerData({ name, value }));
  };

  return (
    <div className="customer content__elem" ref={ref}>
      <span className="title customer__title">
        {I18n.t("Buyer information")}
      </span>
      <ul className="customer-list">
        <CustomInput
          name="id"
          value={customerData.id}
          label={I18n.t("ID")}
          type="text"
          onChange={handleChange}
        />
        <CustomInput
          name="name"
          value={customerData.name}
          label={I18n.t("Full name")}
          type="text"
          onChange={handleChange}
        />
        <CustomInput
          name="email"
          value={customerData.email}
          label={I18n.t("Email")}
          type="text"
          onChange={handleChange}
        />
        <CustomInput
          name="phone"
          value={customerData.phone}
          label={I18n.t("Phone_static")}
          type="text"
          onChange={handleChange}
        />
      </ul>
    </div>
  );
});

export default Customer;
