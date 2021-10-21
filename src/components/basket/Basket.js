import React, {forwardRef, useRef, useState} from 'react';
import { BasketModal } from './OrderModal';
import { OrderList } from './OrderList';
import { fadeIn, fadeOut } from '../../helpers/modal-fade';

const list =  {
		'qwe': {
			'categoryIcon': 'https://jira.ips.su/secure/projectavatar?pid=10201&avatarId=10205',
			'name': 'Тут может быть длинное название',
			'amount': 2,
			'units': 'шт.',
			'sum': 12000,
			'sumCurrency': 'RUB',
		},
		'asd': {
			'categoryIcon': 'https://jira.ips.su/secure/projectavatar?pid=10201&avatarId=10205',
			'name': 'Тут может быть длинное название',
			'amount': 2,
			'units': 'шт.',
			'sum': 12000,
			'sumCurrency': 'RUB',
		},
		'zxc': {
			'categoryIcon': 'https://jira.ips.su/secure/projectavatar?pid=10201&avatarId=10205',
			'name': 'Тут может быть длинное название',
			'amount': 2,
			'units': 'шт.',
			'sum': 12000,
			'sumCurrency': 'RUB',
		}
	};

export const Basket = forwardRef((props, ref) => {
	const modalRef = useRef();
	const [modalActive, setModalActive] = useState(false);

	modalActive ? fadeIn(modalRef.current, 200) : fadeOut(modalRef.current, 200)

	return (
		<div className="basket content_elem" ref={ref}>
			<div className="basket-header">
				<span className="basket__title">Корзина</span>
				<button 
					type="button" 
					className="open-modal-button" 
					aria-label="Кнопка открытия модального окна" 
					onClick={() => setModalActive(true)}>
				</button>
			</div>

			{ 
				list.length ? 
					<OrderList list={list} /> : 
					<span className="basket__title">Корзина пуста</span>
			}
			<BasketModal ref={modalRef} active={modalActive} setActive={setModalActive} />
		</div>
	)
})