import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setEditableItem, deleteItem } from '../../store/actions/basket';

export const BasketList = ({openModal}) => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.basket);

    const handleEdit = (key) => {
        openModal(true);
        setEditableItem(key);
    };

    const listItems = Object.keys(items).map((itemKey, index) => 
        <li className="order__item" key={String(index)}>
            <figure className="order__figure">
                <div className={`order__figure-icon icon-${items.itemKey.typename}`} />
            </figure>
            <span className="order__span">{items.itemKey.name}</span>
            <div className="order-quantity">
                <span className="order__quantity">{items.itemKey.quantity}</span>
                <span className="order__measure">{items.itemKey.measure}</span>
            </div>
            <div className="order-amount"> 
                <span className="order__amount">{items.itemKey.amount}</span>
                <span className="order__currency">{items.itemKey.currency}</span>
            </div>
            <div className="order-buttons">
                <button 
                    type="button"
                    className="order-edit__button"
                    onClick={() => handleEdit(itemKey)}
                ></button>
                <button 
                    type="button"
                    className="order-delete__button"
                    onClick={() => deleteItem(itemKey)}
                ></button>
            </div>
        </li>
    )
    return (
        <ul className="order-list">
            {listItems}
        </ul>
    )
}