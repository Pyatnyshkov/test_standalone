import React, {useState, forwardRef} from 'react';
import ShopSelect from "./UI/Select/ShopSelect";
import AcquirerSelect from "./UI/Select/AcquirerSelect";
import CardTypeSelect from "./UI/Select/CardTypeSelect";
import CurrencySelect from "./UI/Select/CurrencySelect";
import PaymentMethodSelect from "./UI/Select/PaymentMethodSelect";
import CustomInput from "./basket/CustomInput";

import {useDispatch, useSelector} from 'react-redux';
import {setDetail} from '../store/actions/details';

export const Order = forwardRef((props, ref) =>  {
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
		choosenCardType,
		choosenPayType,
		choosenAcquirer,
		returnURLOk,
		returnURLFault,
		showcase,
		choosenPayMode
	} = useSelector(state => state.details);

	const {isLoading} = useSelector(state => state.app);

	const {shops} = useSelector(state => state.apiData);

	const shopOptions = shops.map(shop => ({
        label: shop.name,
        value: shop.id
    }))

	const handleDetail = (name, value) => {
		dispatch(setDetail(name, value))
	}

	if (isLoading) {
		return <div ref={ref}>Loading</div>
	} else {
	    return (
	        <div className='details__content' ref={ref}>
	            <form action="" className='form' style={{maxWidth: '400' + 'px'}}>
	                <ShopSelect label={'Магазин'} name="shop_id" value={shop_id} onChange={handleDetail} options={shopOptions} />
	                <CustomInput label={'ID заказа'} name="shopref" value={shopref} onChange={handleDetail} />
	                <CustomInput label="Номер заказа" name="orderNumber" value={orderNumber} onChange={handleDetail}/>
	                {/*<AcquirerSelect name={} onChange={setDetail} label={'Acquirer'}/>*/}
	                <div className='form_block'>
	                    {/*<CurrencySelect label={'Валюта'} name={currency} onChange={handleDetail} id={currency}/>*/}
	                </div>
	                <div className="form_block">
	                    <label htmlFor="time">Время на оплату</label>
	                    <input type="time" name="time" min="09:00" max="18:00" required/>
	                </div>
	                <CustomInput id={comment} name={comment} label={'Комментарий'} onChange={handleDetail}/>
	                {/*<PaymentMethodSelect label={'Метод оплаты'}/>*/}
	                {/*<CardTypeSelect label={'Тип оплаты'}/>*/}
	            </form>
	        </div>
	    );
	}
});