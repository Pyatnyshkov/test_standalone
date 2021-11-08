import React from "react";
import I18n from "i18n-js";

import { CustomInput } from "../../UI/CustomInput";
import { useAppDispatch, useAppSelector } from "../../../helpers/redux-hooks";
import { setMarking } from "../../../store/reducers/basket";

export const Marking: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.basket.current);

  const setData = (name: string, value: string) => {
    dispatch(setMarking({ name, value }));
  };

  return (
    <ul className="add-list marking-list">
      <CustomInput
        name="kt"
        value={items.kt}
        label={I18n.t("KT")}
        type="text"
        onChange={setData}
      />
      <CustomInput
        name="exc"
        value={items.exc}
        label={I18n.t("EXC")}
        type="text"
        onChange={setData}
      />
      <CustomInput
        name="coc"
        value={items.coc}
        label={I18n.t("COC")}
        type="text"
        onChange={setData}
      />
      <CustomInput
        name="ncd"
        value={items.hed}
        label={I18n.t("HED")}
        type="text"
        onChange={setData}
      />
    </ul>
  );
};
