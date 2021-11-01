import React from 'react';
import I18n from "i18n-js";

import { CustomInput } from '../../UI/CustomInput';
import { CustomSelect } from '../../UI/CustomSelectNew';

import { setSelectValue } from '../../../helpers/setSelectValue';

interface IModalMainInputsList {
    orderState: {
        sum?: number | string,
        ref: string,
        name: string,
        number: string,
        typename: string,
        quantity: number | null,
        descr: string,
        host: string,
        accode: string,
        measure: string,
        clearing: string,
    },
    setOrderState: React.Dispatch<React.SetStateAction<any>>,
}

export const ModalMainInputsList: React.FC<IModalMainInputsList> = ({orderState, setOrderState}) => {
    const setData = (name: string, value: string | number | null) => {
        const newValue = {
            ...orderState,
            [name]: value
        };
        setOrderState(newValue);
    }

    return (
        <ul className="modal-input-list">
            <CustomInput name={'ref'} value={orderState.ref} label={I18n.t('ID')} type={'text'} onChange={setData} />
            <CustomInput name={'name'} value={orderState.name} label={I18n.t('Title')} type={'text'} onChange={setData} />
            <CustomInput name={'number'} value={orderState.number} label={I18n.t('Number')} type={'text'} onChange={setData} />
            <CustomSelect 
                name={'measure'} 
                label={I18n.t('Measure')} 
                options={measureOptions} 
                onChange={setData} 
                value={ setSelectValue(orderState.measure, orderState.measure) }
            /> 
            { 
                orderState.typename === 'goods' ? 
                    '' : <CustomSelect 
                            name={'typename'} 
                            label={I18n.t('Category')} 
                            options={typenameOptions} 
                            onChange={setData} 
                            value={ setSelectValue(orderState.typename, orderState.typename) }
                        /> 
            }
            <CustomSelect
                name={'host'} 
                label={I18n.t('Host')} 
                options={hostOptions} 
                onChange={setData} 
                value={ setSelectValue(orderState.host, orderState.host) }
            /> 
            <CustomSelect 
                name={'clearing'} 
                label={I18n.t('Сlearing')} 
                options={clearingOptions} 
                onChange={setData} 
                value={ setSelectValue(orderState.clearing, orderState.clearing) }
            /> 
            <CustomInput name={'quantity'} value={orderState.quantity || ''} label={I18n.t('Quantity')} type={'number'} onChange={setData} />
            <CustomInput name={'descr'} value={orderState.descr} label={I18n.t('Description')} type={'textarea'} onChange={setData} />
            {
                orderState.host === 'sirena' ? 
                    <CustomInput name={'accode'} value={orderState.accode} label={I18n.t('Carrier code')} type={'text'} onChange={setData} /> : ''
            }
        </ul>
    )
}

//!тестовые данные для селектов
const measureOptions = [
    { value: 'centimeter', label: 'Сантиметр' },
    { value: 'meter', label: 'Метр' },
    { value: 'millimeter', label: 'Миллиметр' },
]

const typenameOptions = [
    {value: 'cat_1', label: 'Категория 1'},
    {value: 'cat_2', label: 'Категория 2'},
    {value: 'cat_3', label: 'Категория 3'},
]

const hostOptions = [
    {value: 'sirena', label: 'Сирена'},
    {value: 'sirena_2', label: 'Сирена 2'},
    {value: 'sirena_3', label: 'Сирена 3'},
]

const clearingOptions = [
    {value: 'clearing_1', label: 'Клиринг 1'},
    {value: 'clearing_2', label: 'Клиринг 2'},
    {value: 'clearing_3', label: 'Клиринг 3'},
]