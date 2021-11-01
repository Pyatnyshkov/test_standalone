import React from 'react';
import I18n from "i18n-js";

import { CustomInput } from '../../UI/CustomInput';

interface IMarking {
    orderState: {
        marking_info: {
            kt: string,
            exc: string,
            coc: string,
            hed: string,
        },
    },
    setOrderState: React.Dispatch<React.SetStateAction<any>>,
}

export const Marking: React.FC<IMarking> = ({orderState, setOrderState}) => {
    const markingInfo = orderState.marking_info;
    const setData = (name: string, value: string | number) => {
        const newMarkingObject = {
            ...orderState.marking_info,
            [name]: value,
        };
        const newValue = {
            ...orderState,
            marking_info: newMarkingObject,
        };
        setOrderState(newValue);
    }

    return(
        <ul className="add-list marking-list">
            <CustomInput name={'kt'} value={markingInfo.kt} label={ I18n.t('KT') } type={'text'} onChange={setData} />
            <CustomInput name={'exc'} value={markingInfo.exc} label={ I18n.t('EXC')} type={'text'} onChange={setData} />
            <CustomInput name={'coc'} value={markingInfo.coc} label={ I18n.t('COC') } type={'text'} onChange={setData} />
            <CustomInput name={'hed'} value={markingInfo.hed} label={ I18n.t('HED') } type={'text'} onChange={setData} />
        </ul>
    )
}