import React, { useRef } from 'react';
import { CustomInput } from '../../UI/CustomInput';

interface IDocuments {
    orderState: {
        documents: string[],
    },
    setOrderState: React.Dispatch<React.SetStateAction<any>>
}

export const Documents: React.FC<IDocuments> = ({orderState, setOrderState}) => {
    const listRef: any = useRef();
    const pushItemToList = () => {
        console.log(listRef.current)
    }

    return (
        <div className="documents-wrap">
            <ul ref={listRef} className="add-list documents-list"></ul>
            <button type="button" className="documents-item__add" onClick={() => pushItemToList()}>Добавить документ</button>
        </div>
    )
}