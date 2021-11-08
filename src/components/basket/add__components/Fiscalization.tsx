import React from "react";
import I18n from "i18n-js";

import { CustomInput } from "../../UI/CustomInput";
import { CustomSelect } from "../../UI/CustomSelect";

import {
  setCurrentField,
  setTaxes,
  setAgentInfo,
  setSupplierInfo
} from "../../../store/reducers/basket";
import { useAppDispatch, useAppSelector } from "../../../helpers/redux-hooks";
import { apiElem } from "../../../models/api";

export const Fiscalization: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.basket.current);
  const apiData = useAppSelector(state => state.apiData);

  const getSelectValue = (dataKey: string, chosen: string) => {
    const elem = apiData[dataKey].find(
      (elem: apiElem) => elem.value === chosen
    );
    if (elem) {
      return { label: elem.label, value: chosen };
    } else {
      return { label: "", value: "" };
    }
  };

  return (
    <div className="fisc-wrap">
      <ul className="add-list fisc-list">
        <CustomSelect
          name="taxation_system"
          label={I18n.t("Tax system")}
          options={apiData.taxation_systems}
          onChange={(name, value) => dispatch(setCurrentField({ name, value }))}
          value={getSelectValue("taxation_systems", items.taxation_system)}
        />
        <CustomSelect
          name="percentage"
          label={I18n.t("Tax rate")}
          options={apiData.tax_rates}
          onChange={(name, value) => dispatch(setTaxes({ name, value }))}
          value={getSelectValue("tax_rates", items.taxes.percentage)}
        />
        <CustomSelect
          name="taxation_item_type"
          label={I18n.t("Calculation subject attribute")}
          options={apiData.taxation_types}
          onChange={(name, value) => dispatch(setCurrentField({ name, value }))}
          value={getSelectValue("taxation_types", items.taxation_item_type)}
        />
        <CustomSelect
          name="taxation_item_settlement_method"
          label={I18n.t("Calculation method attribute")}
          options={apiData.taxation_methods}
          onChange={(name, value) => dispatch(setCurrentField({ name, value }))}
          value={getSelectValue(
            "taxation_methods",
            items.taxation_item_settlement_method
          )}
        />
        <CustomSelect
          name="agent_info"
          label={I18n.t("Agent sign")}
          options={apiData.agent_types}
          onChange={(name, value) => dispatch(setAgentInfo(value))}
          value={getSelectValue("agent_types", items.agent_info.type)}
        />
        <CustomInput
          name="name"
          value={items.supplier_name}
          label={I18n.t("Legal entity of the supplier")}
          type="text"
          onChange={(name, value) => dispatch(setSupplierInfo({ name, value }))}
        />
        <CustomInput
          name="inn"
          value={items.supplier_inn}
          label={I18n.t("ITN")}
          type="text"
          onChange={(name, value) => dispatch(setSupplierInfo({ name, value }))}
        />
        <CustomInput
          name="phone"
          value={items.supplier_phone}
          label={I18n.t("Phone_static")}
          type="text"
          onChange={(name, value) => dispatch(setSupplierInfo({ name, value }))}
        />
      </ul>
    </div>
  );
};
