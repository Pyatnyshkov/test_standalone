import React, { forwardRef, useState } from 'react';
import I18n from "i18n-js";
import { CustomInput } from '../UI/CustomInput';

export const Customer = forwardRef((props, ref: any) => {
    const [customerState, setCustomerState] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
    })

    const setData = (name: string, value: string | number) => {
        const newValue = {
            ...customerState,
            [name]: value,
        };
        setCustomerState(newValue);
    }

    return (
        <div className="customer content__elem" ref={ref}>
            <span className="title customer__title">{ I18n.t("Buyer information") }</span>
            <ul className="customer-list">
                <CustomInput name={'id'} value={customerState.id} label={I18n.t('ID')} type={'text'} onChange={setData} />
                <CustomInput name={'name'} value={customerState.name} label={I18n.t('Full name')} type={'text'} onChange={setData} />
                <CustomInput name={'email'} value={customerState.email} label={I18n.t('Email')} type={'text'} onChange={setData} />
                <CustomInput name={'phone'} value={customerState.phone} label={I18n.t('Phone_static')} type={'text'} onChange={setData} />
            </ul>
        </div>
    )
})