import React from "react";
import I18n from "i18n-js";

import { CustomInput } from "../../UI/CustomInput";
import { CustomSelect } from "../../UI/CustomSelect";

import { useAppDispatch, useAppSelector } from "../../../helpers/redux-hooks";
import { setCurrentField } from "../../../store/reducers/basket";

import { apiElem } from "../../../models/api";

export const ModalMainInputsList: React.FC = () => {
  const apiData = useAppSelector(state => state.apiData);
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.basket.current);

  const setData = (name: string, value: string) => {
    dispatch(setCurrentField({ name, value }));
  };

  const getLabel = (dataKey: string, chosen: string) =>
    apiData[dataKey].find((elem: apiElem) => elem.value === items[chosen])!
      .label;

  const getSelectValue = (dataKey: string, chosen: string) => {
      const elem = apiData[dataKey].find((elem: apiElem) => elem.value === items[chosen]);

  };

  return (
    <ul className="modal-input-list">
      <CustomInput
        name="ref"
        value={items.ref}
        label={I18n.t("ID")}
        type="text"
        onChange={setData}
      />
      <CustomInput
        name="name"
        value={items.name}
        label={I18n.t("Title")}
        type="text"
        onChange={setData}
      />
      <CustomInput
        name="number"
        value={items.number}
        label={I18n.t("Number")}
        type="text"
        onChange={setData}
      />
      <CustomSelect
        name="measure"
        label={I18n.t("Measure")}
        options={apiData.measurements}
        onChange={setData}
        // value={{
        //   label: getLabel("measurements", "measure"),
        //   value: items.measure
        // }}
          value={{label: '', value: ''}}
      />
      {items.typename === "goods" && (
        <CustomSelect
          name="typename"
          label={I18n.t("Category")}
          options={apiData.types}
          onChange={setData}
          // value={{
          //   label: getLabel("types", "typename"),
          //   value: items.typename
          // }}
          value={{label: '', value: ''}}
        />
      )}
      <CustomSelect
        name="host"
        label={I18n.t("Host")}
        options={apiData.hosts}
        onChange={setData}
        // value={{
        //   label: getLabel("hosts", "host"),
        //   value: items.host
        // }}
        value={{label: '', value: ''}}
      />
      <CustomSelect
        name="clearing"
        label={I18n.t("Сlearing")}
        options={apiData.clearing}
        onChange={setData}
        // value={{
        //   label: getLabel("clearing", "clearing"),
        //   value: items.clearing
        // }}
        value={{label: '', value: ''}}
      />
      <CustomInput
        name="quantity"
        value={items.quantity}
        label={I18n.t("Quantity")}
        type="number"
        onChange={setData}
      />
      <CustomInput
        name="descr"
        value={items.descr}
        label={I18n.t("Description")}
        type="textarea"
        onChange={setData}
      />
      {items.host === "sirena" && (
        <CustomInput
          name={"accode"}
          value={items.accode}
          label={I18n.t("Carrier code")}
          type={"text"}
          onChange={setData}
        />
      )}
    </ul>
  );
};
