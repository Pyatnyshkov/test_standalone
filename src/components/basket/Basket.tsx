import React, { forwardRef, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';

import { OrderModal } from './OrderModal';
import { OrderList } from './OrderList';

import { fadeIn, fadeOut } from '../../helpers/modal-fade'
import I18n from "i18n-js";

import '../../media/css/basket.css';

export const Basket = forwardRef((props, ref: any) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const [modalActive, setModalActive] = useState(false);
	const order = useSelector((state: RootState) => state.basket); //* получаем состояние корзины
	const orderItemsLenght = Object.keys(order.items).length; //* проверка количества ключей в объекте для отображения списка

	modalActive ? 
		fadeIn(modalRef.current, 200) : 
		fadeOut(modalRef.current, 200);

	return (
		<div className="basket content__elem" ref={ref}>
			<div className="basket-header">
				<button
					type="button" 
					className="open-modal-button" 
					aria-label={ I18n.t("Modal open button") } 
					onClick={() => setModalActive(true)}>
				</button>
			</div>

			{ 
				orderItemsLenght ? 
					<OrderList list={order.items} setActive={setModalActive} /> : 
					<span className="title basket__title">{ I18n.t("Cart is empty") }</span>
			}

			<div ref={modalRef} className="modal" onClick={() => setModalActive(false)} >
				{ 
					modalActive ? <OrderModal setActive={setModalActive}/> : null
				}
			</div>
			
		</div>
	)
})