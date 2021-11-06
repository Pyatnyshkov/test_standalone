import React from "react";
import I18n from "i18n-js";

import { CustomInput } from "../../UI/CustomInput";
import { CustomSelect } from "../../UI/CustomSelect";

import { setCurrentField } from "../../../store/reducers/basket";
import { useAppDispatch, useAppSelector } from "../../../helpers/redux-hooks";
import { apiElem } from "../../../models/api";

export const Fiscalization: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.basket.current);
  const apiData = useAppSelector(state => state.apiData);

  const setData = (name: string, value: string) => {
    dispatch(setCurrentField({ name, value }));
  };

  const getLabel = (dataKey: string, chosen: string) =>
    apiData[dataKey].find((elem: apiElem) => elem.value === items[chosen])!
      .label;

  return (
    <div className="fisc-wrap">
      <ul className="add-list fisc-list">
        <CustomSelect
          name="taxation_system"
          label={I18n.t("Tax system")}
          options={apiData.taxation_systems}
          onChange={setData}
          // value={{
          //   label: getLabel("taxation_systems", "taxation_system"),
          //   value: items.taxation_system
          // }}
            value={{
                label: '',
                value: ''
            }}
        />
        <CustomSelect
          name="percentage"
          label={I18n.t("Tax rate")}
          options={apiData.tax_rates}
          onChange={setData}
          // value={{
          //   label: getLabel("tax_rates", "percentage"),
          //   value: items.percentage
          // }}
          value={{
              label: '',
              value: ''
          }}
        />
        <CustomSelect
          name="taxation_item_type"
          label={I18n.t("Calculation subject attribute")}
          options={apiData.taxation_types}
          onChange={setData}
          // value={{
          //   label: getLabel("taxation_types", "taxation_item_type"),
          //   value: items.taxation_item_type
          // }}
          value={{
              label: '',
              value: ''
          }}
        />
        <CustomSelect
          name="taxation_item_settlement_method"
          label={I18n.t("Calculation method attribute")}
          options={apiData.taxation_methods}
          onChange={setData}
          // value={{
          //   label: getLabel(
          //     "taxation_methods",
          //     "taxation_item_settlement_method"
          //   ),
          //   value: items.taxation_item_settlement_method
          // }}
          value={{
              label: '',
              value: ''
          }}
        />
        <CustomSelect
          name="agent_info"
          label={I18n.t("Agent sign")}
          options={apiData.agent_types}
          onChange={setData}
          // value={{
          //   label: getLabel("agent_types", "agent_info"),
          //   value: items.agent_info
          // }}
          value={{
              label: '',
              value: ''
          }}
        />
        <CustomInput
          name="supplier_name"
          value={items.supplier_name}
          label={I18n.t("Legal entity of the supplier")}
          type="text"
          onChange={setData}
        />
        <CustomInput
          name="supplier_inn"
          value={items.supplier_inn}
          label={I18n.t("ITN")}
          type="text"
          onChange={setData}
        />
        <CustomInput
          name="supplier_phone"
          value={items.supplier_phone}
          label={I18n.t("Phone_static")}
          type="text"
          onChange={setData}
        />
      </ul>
    </div>
  );
};
