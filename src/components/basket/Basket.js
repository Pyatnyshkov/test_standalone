import React, { forwardRef, useRef, useState } from 'react';

import { useSelector } from 'react-redux';

import { OrderModal } from './OrderModal';
import { OrderList } from './OrderList';
import { fadeIn, fadeOut } from '../../helpers/modal-fade'

export const Basket = forwardRef((props, ref) => {
	const modalRef = useRef();
	const [modalActive, setModalActive] = useState(false);
	const order = useSelector(state => state.basket);
	const orderItemsLenght = Object.keys(order.items).length; //* проверка количества ключей в объекте для отображения списка

	// * анимация появления/исчезноваения модального окна/попапа
	modalActive ? 
		fadeIn(modalRef.current, 200) : 
		fadeOut(modalRef.current, 200)


	return (
		<div className="basket content_elem" ref={ref}>
			<div className="basket-header">
				<span className="basket__title">{props.nameBasketElement}</span>
				<button 
					type="button" 
					className="open-modal-button" 
					aria-label="Кнопка открытия модального окна" 
					onClick={() => setModalActive(true)}>
				</button>
			</div>

			{ 
				orderItemsLenght ? 
					<OrderList list={order.items} setActive={setModalActive} /> : 
					<span className="basket__title">Корзина пуста</span>
			}

			<OrderModal ref={modalRef} active={modalActive} setActive={setModalActive} />
		</div>
	)
})