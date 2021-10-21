import React from 'react';

export const OrderList = ({list}) => {

    function deleteItem(event) {
        event.preventDefault();
        const index = Number(event.target.dataset.index);
        //ждать функцию из глобального компонента для его вызова и передачи туда отфильтрованного массива
        //!не использовать индексы в мапе для ключей. (есть вариант, чтобы использовать неймы индексов)
        const newBasketList = list.filter((item, itemIndex) => itemIndex !== index);
        console.log(newBasketList);
    }

    const listItems = Object.keys(list).map((key, index) => 
        <li className="order__item" key={String(index)}>
            <figure className="order__figure">
                <img src={list.key.categoryIcon} alt="categoryIcon" />
            </figure>
            <span className="order__span">{list.key.name}</span>
            <div className="order-amount">
                <span className="order__amount">{list.key.amount}</span>
                <span className="order__units">{list.key.units}</span>
            </div>
            <div className="order-sum"> 
                <span className="order__sum">{list.key.sum}</span>
                <span className="order__currency">{list.key.sumCurrency}</span>
            </div>
            <div className="order-buttons">
                <button 
                    type="button"
                    className="order-edit__button"
                    aria-label="Кнопка редактирования элемента"
                    // onClick={() => editItem(key)}
                ></button>
                <button 
                    type="button"
                    className="order-delete__button"
                    aria-label="Кнопка удаления элемента"
                    data-index={index}
                    onClick={() => deleteItem(key)}
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