import React, { SyntheticEvent, useEffect, useState } from 'react';

import I18n from "i18n-js";

interface IDocuments {
    orderState: {
        documents: string[],
    },
    setOrderState: React.Dispatch<React.SetStateAction<any>>,
}

export const Documents: React.FC<IDocuments> = ({orderState, setOrderState}) => {
    const orderStateArray = orderState.documents;
    const orderStateArrayLength = orderStateArray.length;
    const [arrayLength, setArrayLength] = useState(0);

    useEffect(() => {
        setArrayLength(orderStateArrayLength)
    }, [orderStateArrayLength])

    const keysArray = Array.from(Array(arrayLength).keys());

    const deleteDocumentInput = (event: SyntheticEvent, key: number) => {
        const newArray = orderStateArray.filter((item, index) => index !== key)
        const newValue = {
            ...orderState,
            documents: newArray
        };
        setOrderState(newValue);
    }

    const setData = (event: { target: HTMLInputElement }, item: number) => {
        const value = event.target.value;
        const newArray = {
            ...orderStateArray,
            [item]: value,
        };
        const newValue = {
            ...orderState,
            documents: Object.values(newArray)
        };
        setOrderState(newValue);
    }

    const documentsListItem = keysArray.map((item: number) => 
        <li className="documents-list-item" key={item}>
            <input className="modal-form__input" type="text" name="documents" value={orderStateArray[item] || ''} onChange={(event) => setData(event, item)} />
            <button type="button" onClick={(event) => deleteDocumentInput(event, item)}>{ I18n.t("Delete") }</button>
        </li>
    )

    return (
        <div className="documents-wrap">
            <ul className="add-list documents-list">
                {documentsListItem}
            </ul>
            <button type="button" className="documents-item__add" onClick={() => setArrayLength(arrayLength + 1)}>Добавить документ</button>
        </div>
    )
}