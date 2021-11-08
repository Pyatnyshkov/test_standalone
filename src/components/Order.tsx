import React, { forwardRef } from "react";
import { CustomSelect } from "./UI/CustomSelect";
import { CustomInput } from "./UI/CustomInput";
import { CustomCheckbox } from "./UI/CustomCheckbox";

import { useAppDispatch, useAppSelector } from "../helpers/redux-hooks";
import { setDetail, setIsRecurring } from "../store/reducers/details";
import { apiElem } from "../models/api";

import I18n from "i18n-js";

const Order = forwardRef((props, ref: any) => {
  const dispatch = useAppDispatch();
  const details = useAppSelector(state => state.details);
  const { isLoading } = useAppSelector(state => state.app);
  const apiData = useAppSelector(state => state.apiData);

  const handleChange = (name: string, value: string | number) => {
    dispatch(setDetail({ name, value }));
  };

  const getLabel = (dataKey: string, chosen: string) =>
    apiData[dataKey].find((elem: apiElem) => elem.value === details[chosen])!.label;

  if (isLoading) {
    return <div ref={ref}>Loading</div>;
  } else {
    return (
      <div className="details__content" ref={ref}>
        <CustomSelect
          label={I18n.t("Shop")}
          name="shop_id"
          onChange={handleChange}
          value={{
            label: getLabel("shops", "shop_id"),
            value: details.shop_id
          }}
          options={apiData.shops}
        />
        <CustomInput
          label={I18n.t("Order ID")}
          name="shopref"
          value={details.shopref}
          onChange={handleChange}
          type="text"
        />
        <CustomInput
          label={I18n.t("Order number")}
          name="number"
          value={details.orderNumber}
          onChange={handleChange}
          type="number"
        />
        <CustomSelect
          label={I18n.t("Currency")}
          name="currency"
          value={{
            label: getLabel("currencies", "currency"),
            value: details.currency
          }}
          onChange={handleChange}
          options={apiData.currencies}
        />
        <CustomInput
          label={I18n.t("Timeout")}
          name="timelimit"
          value={details.timelimit}
          onChange={handleChange}
          type="number"
        />
        <CustomSelect
          label={I18n.t("Language")}
          name="language"
          value={{
            label: getLabel("languages", "language"),
            value: details.language
          }}
          onChange={handleChange}
          options={apiData.languages}
        />
        <CustomInput
          label={I18n.t("Comment")}
          name="comment"
          value={details.comment}
          onChange={handleChange}
          type="text"
        />
        <CustomSelect
          label={I18n.t("Card type")}
          name="cardType"
          value={{
            label: getLabel("cardTypes", "cardType"),
            value: details.cardType
          }}
          onChange={handleChange}
          options={apiData.cardTypes}
        />
        <CustomSelect
          label={I18n.t("Acquirer")}
          name="acquirer"
          value={{
            label: getLabel("acquires", "acquirer"),
            value: details.acquirer
          }}
          onChange={handleChange}
          options={apiData.acquires}
        />
        <CustomInput
          label={I18n.t("Successful payment URL")}
          name="returnURLOk"
          value={details.returnURLOk}
          onChange={handleChange}
          type="text"
        />
        <CustomInput
          label={I18n.t("Unsuccessful payment URL")}
          name="returnURLFault"
          value={details.returnURLFault}
          onChange={handleChange}
          type="text"
        />
        <CustomCheckbox
          label={I18n.t("Reccuring")}
          name="reccurring"
          value={details.isReccurring}
          onChange={() => dispatch(setIsRecurring(!details.isReccurring))}
        />
        {details.isReccurring && (
          <CustomInput
            label={I18n.t("Profile ID")}
            name="reccurring"
            value={details.reccurring}
            onChange={handleChange}
            type="text"
          />
        )}
        <CustomInput
          label={I18n.t("Showcase")}
          name="showcase"
          value={details.showcase}
          onChange={handleChange}
          type="text"
        />
      </div>
    );
  }
});

export default Order;
