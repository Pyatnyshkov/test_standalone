import React from "react";
import I18n from "i18n-js";
import { useAppDispatch, useAppSelector } from "../../../helpers/redux-hooks";
import { setDocuments } from "../../../store/reducers/basket";

export const Documents: React.FC = () => {
  const { documents } = useAppSelector(state => state.basket.current);
  const dispatch = useAppDispatch();

  const deleteDocumentInput = (document: string) => {
    const newArray = documents!.filter((item: string) => item !== document);
    dispatch(setDocuments(newArray));
  };

  const setData = (event: { target: HTMLInputElement }) => {
    const value = event.target.value;
    const newArray = documents!.concat(value);
    dispatch(setDocuments(newArray));
  };

  const addDocument = () => {
    const newArray = documents!.concat("");
    dispatch(setDocuments(newArray));
  };

  const documentsListItem = documents!.map(
    (document: string, index: number) => (
      <li className="documents-list-item" key={index}>
        <input
          className="modal-form__input"
          type="text"
          name="documents"
          value={document}
          onChange={setData}
        />
        <button type="button" onClick={() => deleteDocumentInput(document)}>
          {I18n.t("Delete")}
        </button>
      </li>
    )
  );

  return (
    <div className="documents-wrap">
      <ul className="add-list documents-list">{documentsListItem}</ul>
      <button
        type="button"
        className="documents-item__add"
        onClick={addDocument}
      >
        Добавить документ
      </button>
    </div>
  );
};
