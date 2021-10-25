import React from 'react';

import { useDispatch } from 'react-redux';
import { editBasketItemKey, deleteBasketItem } from '../../store/actions/basket';

//! необходимо импортировать мапу/массив/объект с изображениями относительно каты.
//! пока статика 2 фотки, чтобы видеть разные каты.
const catGoods = "https://jira.ips.su/secure/projectavatar?pid=11001&avatarId=10011";
const catNoGoods = "https://jira.ips.su/secure/projectavatar?pid=10201&avatarId=10205"

export const OrderList = ({list, setActive}) => {
    const keys = Object.keys(list);
    const dispatch = useDispatch();

    function deleteItem(event, key) {
        event.preventDefault();
        dispatch(deleteBasketItem(key)); //удаляем элемент через изметный ключ
    }

    function editItem(event, key) {
        event.preventDefault();
        dispatch(editBasketItemKey(key)); //записываем ключ для редактирования
        setActive(true);
    }

    const listItems = keys.map((key) => 
        <li className="order__item" key={key}>
            <figure className="order__figure">
                <img src={list[key].typename === 'goods' ? catGoods : catNoGoods} alt="categoryIcon" />
            </figure>
            <span className="order__span">{list[key].name}</span>
            <div className="order-amount">
                <span className="order__amount">{list[key].quantity}</span>
                <span className="order__units">{list[key].measure}</span>
            </div>
            <div className="order-sum"> 
                <span className="order__sum">{list[key].sum}</span>
                <span className="order__currency">{list[key].sumCurrency}</span>
            </div>
            <div className="order-buttons">
                <button 
                    type="button"
                    className="order-edit__button"
                    aria-label="Кнопка редактирования элемента"
                    onClick={(event) => editItem(event, key)}
                ></button>
                <button 
                    type="button"
                    className="order-delete__button"
                    aria-label="Кнопка удаления элемента"
                    onClick={(event) => deleteItem(event, key)}
                ></button>
            </div>
        </li>
    )

    return (
        <div className="order-wrapp">
            <ul className="order-list">
                {listItems}
            </ul>
        </div>
    )
}