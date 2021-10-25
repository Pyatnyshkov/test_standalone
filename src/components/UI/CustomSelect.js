import React from 'react';
import Select from 'react-select';

export const CustomSelect = ({error, setError, name, label, options, onChange}) => {
    const saveSelectName = (value, key) => {
        if(error) setError((prevState) => ({...prevState, [name]: false}))
        onChange(key.name, value.value);
    }
    const errorClass = error ? 'error__select' : null
    return (
        <li className="list__item">
            <span className="order-form__span">{label}</span>
            <div className={errorClass}>
                <Select 
                    name={name} 
                    options={options} 
                    onChange={saveSelectName}
                />
            </div>
            {
                error ? <div className={`required-label`}>Поле обязательно для заполнения</div> : null
            }
        </li>
    )
};
