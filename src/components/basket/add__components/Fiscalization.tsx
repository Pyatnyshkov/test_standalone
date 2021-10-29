import React from 'react';

import I18n from "i18n-js";

import { CustomInput } from '../../UI/CustomInput';
import { CustomSelect } from '../../UI/CustomSelectNew';

interface IFiscalization {
    orderState: any,
    setOrderState: React.Dispatch<React.SetStateAction<any>>,
}

export const Fiscalization: React.FC<IFiscalization> = ({orderState, setOrderState}) => {
    const supplierInfo = orderState.supplier_info;
    const setData = (name: string, value: string | number) => {
        let key: any;
        let newData;
        let newValue;
        switch(name) {
            case 'name':
            case 'inn':
            case 'phone':
                key = 'supplier_info';
                newData = {
                    ...orderState.supplier_info,
                    [name]: value,
                };
                break;
            case 'type': 
                key = 'agent_info';
                newData = {
                    ...orderState.agent_info,
                    [name]: value,
                };
                break;
            case 'percentage': 
                key = 'taxes';
                const newDataToArrya = {
                    ...orderState.taxes[0],
                    [name]: value,
                };
                newData = [newDataToArrya];
                break;
            default:
                newData = value;
                key = name;
                break;
        }
        newValue = {
            ...orderState,
            [key]: newData,
        }
        setOrderState(newValue);
    }

    return (
        <div className="fisc-wrap">
            <ul className="add-list fisc-list">
                <CustomSelect 
                    name={'taxation_system'} 
                    label={I18n.t('Tax system')} 
                    options={taxOptions} 
                    onChange={setData} 
                    value={orderState.taxation_system || null} 
                />
                <CustomSelect 
                    name={'percentage'} 
                    label={I18n.t('Tax rate')} 
                    options={taxRateOptions} 
                    onChange={setData} 
                    value={orderState.taxes[0].percentage || null} 
                /> 
                <CustomSelect 
                    name={'taxation_item_type'} 
                    label={I18n.t('Calculation subject attribute')} 
                    options={taxationItemTypeOption} 
                    onChange={setData} 
                    value={orderState.taxation_item_type || null} 
                />  
                <CustomSelect 
                    name={'taxation_item_settlement_method'} 
                    label={I18n.t('Calculation method attribute')} 
                    options={taxationItemSettlementMethodOptions} 
                    onChange={setData} 
                    value={orderState.taxation_item_settlement_method || null}
                /> 
                <CustomSelect 
                    name={'type'} 
                    label={I18n.t('Agent sign')} 
                    options={agentInfoTypeOptions}  
                    onChange={setData} 
                    value={orderState.agent_info.type || null}
                /> 
                <CustomInput name={'name'} value={supplierInfo.name} label={I18n.t('Legal entity of the supplier')} type={'text'} onChange={setData} />
                <CustomInput name={'inn'} value={supplierInfo.inn} label={I18n.t('ITN')} type={'text'} onChange={setData} />
                <CustomInput name={'phone'} value={supplierInfo.phone} label={I18n.t('Phone_fisc')} type={'text'} onChange={setData} />
            </ul>
        </div>
    )
}

//! тестовые-статичные данные
const taxOptions = [
    { value: 'general', label: 'Общее' },
    { value: 'simple_income', label: 'Простой доход' },
    { value: 'simple_profit', label: 'Простая прибыль' },
    { value: 'imputed_income', label: 'Вмененный доход' },
    { value: 'unified_agricultural', label: 'Единый сельскохозяйственный' },
    { value: 'patent', label: 'Патент' },
]

const taxRateOptions = [
    { value: '20/120', label: '20/120' },
    { value: '10/110', label: '10/110' },
    { value: '20', label: '20' },
    { value: '0', label: '0' },
    { value: '18', label: '18' },
    { value: '10', label: '10' },
    { value: '18/118', label: '18/118' },
]

const taxationItemTypeOption = [
    { value: 'commodity', label: 'Товар' },
    { value: 'excise', label: 'Акциз' },
    { value: 'job', label: 'Работа' },
    { value: 'service', label: 'Услуга' },
    { value: 'gambling_bet', label: 'Ставка?' },
    { value: 'gambling_win', label: 'Выигрыш?' },
    { value: 'lottery_bet', label: 'Лотерея' },
    { value: 'lottery_win', label: 'Выигрыш в лотерее' },
    { value: 'intellectual_activity', label: 'Интелектуальная деятельность' },
    { value: 'payment', label: 'Оплата' },
    { value: 'agent_commission', label: 'Комиссия агента' },
    { value: 'composite', label: 'Составной' },
    { value: 'other', label: 'Другое' },
]

const taxationItemSettlementMethodOptions = [
    { value: 'full_prepayment', label: 'Полная предоплата' },
    { value: 'partial_prepayment', label: 'Частичная предоплата' },
    { value: 'advance', label: 'Аванс' },
    { value: 'full_payment', label: 'Полная оплата' },
    { value: 'partial_payment', label: 'Частичная оплата' },
    { value: 'credit', label: 'Кредит' },
    { value: 'credit_payment', label: 'Оплата в кредит' },
]

const agentInfoTypeOptions = [
    { value: 'agent', label: 'agent'},
    { value: 'bank_paying_agent', label: 'bank_paying_agent'},
    { value: 'bank_paying_subagent', label: 'bank_paying_subagent'},
    { value: 'paying_agent', label: 'paying_agent'},
    { value: 'paying_subagent', label: 'paying_subagent'},
    { value: 'attorney', label: 'attorney'},
    { value: 'commission_agent', label: 'commission_agent'},
]