import React, { forwardRef, useState, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';



import I18n from "i18n-js";

import { CustomInput } from '../UI/CustomInput';
import { SubmitButton } from '../UI/SubmitButton';

export const Customer = forwardRef((props, ref: any) => {
    const [customerState, setCustomerState] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
    })

    //* определяем сервис (send-link = true && standalone = false)
    const showSend = useSelector((state: RootState) => state.app.showSend);
    const requiredInputs = showSend ? ['name', 'email'] : [];

    const setData = (name: string, value: string | number) => {
        const newValue = {
            ...customerState,
            [name]: value
        };
        setCustomerState(newValue);
    }

    const validationForm = () => {
        console.log('>>customerState', customerState);
        console.log('>>requiredInputs', requiredInputs);
    }

    const submitForm = (event: SyntheticEvent) => {
        event.preventDefault();
        validationForm()
    }

    return (
        <div className="customer content__elem" ref={ref}>
            <span className="customer__title">{ I18n.t("Buyer information") }</span>
            <form className="customer-form" onSubmit={(event) => submitForm(event)}>
                <CustomInput name={'id'} value={customerState.id} label={I18n.t('ID')} type={'text'} onChange={setData} />
                <CustomInput name={'name'} value={customerState.name} label={I18n.t('Full name')} type={'text'} onChange={setData} />
                <CustomInput name={'email'} value={customerState.email} label={I18n.t('Email')} type={'text'} onChange={setData} />
                <CustomInput name={'phone'} value={customerState.phone} label={I18n.t('Phone_static')} type={'text'} onChange={setData} />
                <SubmitButton className="customer-form__submit" type={'submit'} name={'Save'} />
            </form>
        </div>
    )
})