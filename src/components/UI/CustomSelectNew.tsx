import React from 'react';
import Select from 'react-select';
import { apiElem } from '../../models/api';

type ErrorClassType = string | undefined;
interface ICustomSelect {
    error?: string,
    name: string,
    label: string,
    options: apiElem[],
    onChange: (name: string, value: string | number) => void,
    value: apiElem,
};

export const CustomSelect: React.FC<ICustomSelect> = ({error, name, label, options, onChange, value}) => {
    const errorClass: ErrorClassType = error ? 'error__select' : undefined;
    const saveSelectName = (value: any, key: any) => {
        onChange(key.name, value.value);
    }

    return (
        <li className="list__item">
            <span className="list__span">{label}</span>
            <div className={errorClass}>
                <Select
                    name={name}
                    options={options} 
                    onChange={saveSelectName}
                    value={value}
                />
            </div>
            {
                error ? <div className="required__label">{error}</div> : null
            }
        </li>
    )
};
