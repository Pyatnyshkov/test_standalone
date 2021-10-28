import React, { forwardRef } from "react";
import { CustomInput } from "./UI/CustomInput";
import { CustomSelect } from "./UI/CustomSelect";

import { useDispatch, useSelector } from "react-redux";
import { setDetail } from "../store/reducers/details";

export const Order = forwardRef((props, ref) => {
	const dispatch = useDispatch();
	const {
		shop_id,
		shopref,
		orderNumber,
		currency,
		timelimit,
		language,
		reccurring,
		comment,
		cardType,
		payType,
		acquirer,
		returnURLOk,
		returnURLFault,
		showcase,
		payMode,
	} = useSelector((state) => state.details);

	const { isLoading } = useSelector((state) => state.app);

	const { shops, currencies, cardTypes, acquires } = useSelector((state) => state.apiData);

	const shopOptions = shops.map((shop) => ({
		label: shop.name,
		value: shop.id,
	}));

	const langOptions = [
		{
			label: 'Русский',
			value: 'ru',
		}, 
		{
			label: 'Английский',
			value: 'en',
		}
	];

	const cardTypeOptions = cardTypes.map((cardType) => ({
		label: cardType.name,
		value: cardType.id,
	}));

	const acquirerOptions = acquires.map((acquirer) => ({
		label: acquirer.name,
		value: acquirer.id,
	}));

	const handleDetail = (name, value) => {
		dispatch(setDetail({name, value}));
	};

	if (isLoading) {
		return <div ref={ref}>Loading</div>;
	} else {
		return (
			<div className="details__content" ref={ref}>
					<CustomSelect
						label={"Магазин"}
						name="shop_id"
						value={shop_id}
						onChange={handleDetail}
						options={shopOptions}
					/>
					<CustomInput
						label={"ID заказа"}
						name="shopref"
						value={shopref}
						onChange={handleDetail}
					/>
					<CustomInput
						label="Номер заказа"
						name="orderNumber"
						value={orderNumber}
						onChange={handleDetail}
					/>
					<CustomSelect
						label={'Валюта'}
						name='currency'
						value={currency}
						onChange={handleDetail} 
					/>
					<CustomInput 
						label={'Время на оплату'} 
						name='timelimit'
						value={timelimit} 
						onChange={handleDetail}
					/>
					<CustomSelect
						label={'Язык'}
						name='language'
						value={language}
						onChange={handleDetail}
						options={langOptions} 
					/>
					<CustomInput
						label={"Комментарий"}
						name='comment'
						value={comment}
						onChange={handleDetail}
					/>
					<CustomSelect 
						label={'Тип карты'}
						name='cardType'
						value={cardType}
						onChange={handleDetail}
						options={cardTypeOptions} 
					/>
					<CustomSelect 
						label={'Эмитент'}
						name='acquirer'
						value={acquirer}
						onChange={handleDetail}
						options={acquirerOptions} 
					/>
			</div>
		);
	}
});
