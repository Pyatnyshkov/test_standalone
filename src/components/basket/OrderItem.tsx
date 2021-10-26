import React, {SyntheticEvent} from 'react';

//! необходимо импортировать мапу/массив/объект с изображениями относительно каты.
//! пока статика 2 фотки, чтобы видеть разные каты.
const catGoods = "https://jira.ips.su/secure/projectavatar?pid=11001&avatarId=10011";
const catNoGoods = "https://jira.ips.su/secure/projectavatar?pid=10201&avatarId=10205";

interface IOrderItem {
    value: {
        typename: string,
        name: string,
        quantity: number,
        measure: string,
        sum: number,
        sumCurrency: string,
    },
    id: string,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const OrderItem: React.FC<IOrderItem> = ({id, value, setActive}) => {
    const deleteItem = (event: SyntheticEvent, key: string) => {
        console.log(event, key)
        event.preventDefault();
        // dispatch(deleteBasketItem(key)); //удаляем элемент через изметный ключ
    }

    const editItem = (event: SyntheticEvent, key: string) => {
        console.log(event, key)
        event.preventDefault();
        // dispatch(editBasketItemKey(key)); //записываем ключ для редактирования
        setActive(true);
    }

    return (
        <li className="order__item">
            <figure className="order__figure">
                <img src={value.typename === 'goods' ? catGoods : catNoGoods} alt="categoryIcon" />
            </figure>
            <span className="order__span">{value.name}</span>
            <div className="order-amount">
                <span className="order__amount">{value.quantity}</span>
                <span className="order__units">{value.measure}</span>
            </div>
            <div className="order-sum"> 
                <span className="order__sum">{value.sum}</span>
                <span className="order__currency">{value.sumCurrency}</span>
            </div>
            <div className="order-buttons">
                <button 
                    type="button"
                    className="order-edit__button"
                    aria-label="Кнопка редактирования элемента"
                    onClick={(event) => editItem(event, id)}
                ></button>
                <button 
                    type="button"
                    className="order-delete__button"
                    aria-label="Кнопка удаления элемента"
                    onClick={(event) => deleteItem(event, id)}
                ></button>
            </div>
        </li>
    )
}