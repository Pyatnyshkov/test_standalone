import React from 'react';
import Select from 'react-select';

type ErrorClassType = string | undefined;
interface ICustomSelect {
    error?: boolean, 
    setError?: any, 
    name: string, 
    label: string, 
    options: object[],
    defaultValue?: any,
    onChange: (name: string, value: string | number) => void,
};

export const CustomSelect: React.FC<ICustomSelect> = ({error, setError, name, label, options, onChange}) => {
    const errorClass: ErrorClassType = error ? 'error__select' : undefined;
    const saveSelectName = (value: any, key: any) => {
        //! обработку закоментировал, потому что не определились пока
        //! в каком видео и где мы будем их обрабатывать
        // if(error) {
        //     setError((prevState: object) => (
        //         {
        //             ...prevState, 
        //             [name]: false
        //         }
        //     ))
        // }
        onChange(key.name, value.value);
    }

    return (
        <li className="list__item">
            <span className="modal-form__span">{label}</span>
            <div className={errorClass}>
                <Select
                    name={name}
                    options={options} 
                    onChange={saveSelectName}
                    defaultValue={options[0]}
                />
            </div>
            {
                error ? <div className={`required-label`}>{error}</div> : null
            }
        </li>
    )
};
