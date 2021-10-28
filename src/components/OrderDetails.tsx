import React, {forwardRef} from 'react';
import {CustomSelect} from "./UI/CustomSelect";
import {CustomInput} from "./UI/CustomInput";
import I18n from "i18n-js";
import {useAppDispatch, useAppSelector} from "../helpers/redux-hooks";
import CustomCheckbox from "./UI/CustomCheckbox";
import {setIsChecked} from "../store/reducers/app";
import {setDetails} from "../store/reducers/details";

interface III {
    name: any,
    value: any

}
const OrderDetails = forwardRef((props, ref: any) => {

    const dispatch = useAppDispatch()
    const details = useAppSelector(state => state.details)
    const {isChecked, isLoading} = useAppSelector(state => state.app)
    const {shops, currencies, cardTypes, acquires } = useAppSelector(state => state.apiData)

    const shopOptions = shops.map((shop) => ({
        label: shop.name,
        value: shop.id,
    }));

    const currencyOptions = currencies.map((curr) => ({
        label: curr.code
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

    const handleChange = (name: any, value: any) => {
        dispatch(setDetails({name, value}))
    }


    if (isLoading) {
        return <div ref={ref}>Loading</div>;
    } else {
    return (
    <div className="details__content" ref={ref}>
        <CustomSelect
            label={I18n.t('Shop')}
            name={details.shop_id}
            onChange={handleChange}
            options={shopOptions}
        />
        <CustomInput
            label={I18n.t('Order ID')}
            name={details.shopref}
            value={details.shopref}
            onChange={handleChange}
            type='text'
        />
        <CustomInput
            label={I18n.t('Order number')}
            name={details.orderNumber}
            value=''
            onChange={handleChange}
            type='number'
        />
        <CustomSelect
            label={I18n.t('Currency')}
            name={details.currency}
            onChange={handleChange}
            options={currencyOptions}
        />
        <CustomInput
            label={I18n.t('Timeout')}
            name={details.timelimit}
            value={details.timelimit}
            onChange={handleChange}
            type='number'
        />
        <CustomSelect
            label={I18n.t('Language')}
            name={details.language}
            onChange={handleChange}
            options={langOptions}
        />
        <CustomInput
            label={I18n.t('Comment')}
            name={details.comment}
            value={details.comment}
            onChange={handleChange}
            type='text'
        />
        <CustomSelect
            label={I18n.t('Card type')}
            name={details.cardType}
            onChange={handleChange}
            options={cardTypeOptions}
        />
        <CustomSelect
            label={I18n.t('Acquirer')}
            name={details.acquirer}
            onChange={handleChange}
            options={acquirerOptions}
        />
        <CustomCheckbox
            label={I18n.t('Reccuring')}
            name={details.reccurring}
            type='checkbox'
            value={details.reccurring}
            onChange={() => dispatch(setIsChecked(!isChecked))}/>
        {isChecked &&
        <CustomInput
            label={I18n.t('Profile ID')}
            name={details.comment}
            value={details.comment}
            onChange={handleChange}
            type='text'
        />
        }
    </div>
    )};
});

export default OrderDetails;