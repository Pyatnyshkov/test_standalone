import React from 'react';
import Select from 'react-select';

export const CustomSelect = ({error, setError, name, label, options, onChange}) => {
    const saveSelectName = (e, key) => {
        if(error) setError((prevState) => ({...prevState, [name]: false}))
        onChange(key.name, e.value);
    }
    const errorClass = error ? 'error' : null
    return (
        <li className="list__item">
            <span className="order-form__span">{label}</span>
            <Select 
                className={errorClass}
                name={name} 
                options={options} 
                onChange={saveSelectName}
            />
            {
                error ? <div className={`required-label ${errorClass}`}>Поле обязательно для заполнения</div> : null
            }
        </li>
    )
};
