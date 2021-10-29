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
    { value: 'general', label: 'general' },
    { value: 'simple_income', label: 'simple_income' },
    { value: 'simple_profit', label: 'simple_profit' },
    { value: 'imputed_income', label: 'imputed_income' },
    { value: 'unified_agricultural', label: 'unified_agricultural' },
    { value: 'patent', label: 'patent' },
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
    { value: 'commodity', label: 'commodity' },
    { value: 'excise', label: 'excise' },
    { value: 'job', label: 'job' },
    { value: 'service', label: 'service' },
    { value: 'gambling_bet', label: 'gambling_bet' },
    { value: 'gambling_win', label: 'gambling_win' },
    { value: 'lottery_bet', label: 'lottery_bet' },
    { value: 'lottery_win', label: 'lottery_win' },
    { value: 'intellectual_activity', label: 'intellectual_activity' },
    { value: 'payment', label: 'payment' },
    { value: 'agent_commission', label: 'agent_commission' },
    { value: 'composite', label: 'composite' },
    { value: 'other', label: 'other' },
]

const taxationItemSettlementMethodOptions = [
    { value: 'full_prepayment', label: 'full_prepayment' },
    { value: 'partial_prepayment', label: 'partial_prepayment' },
    { value: 'advance', label: 'advance' },
    { value: 'full_payment', label: 'full_payment' },
    { value: 'partial_payment', label: 'partial_payment' },
    { value: 'credit', label: 'credit' },
    { value: 'credit_payment', label: 'credit_payment' },
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