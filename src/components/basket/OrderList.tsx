import React from 'react';
import { OrderItem } from './OrderItem';

interface IOrderList {
    list: any,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
}

export const OrderList: React.FC<IOrderList> = ({list, setActive}) => {
    const keys: string[] = Object.keys(list);
    const listItems = keys.map((key: string) => 
        <OrderItem key={key} value={list[key]} id={key} setActive={setActive} />
    )

    return (
        <div className="order-wrapp">
            <ul className="order-list">
                {listItems}
            </ul>
        </div>
    )
}