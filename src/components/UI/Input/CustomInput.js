import React from 'react';

const CustomInput = ({label, name, onChange, placeholder, type, value}) => {

    const handleChange = (event) => {
        event.preventDefault()
        onChange(event.target.name, event.target.value)
    }

    return (
        <li className="list__item">
            <label className="order-form__label">
                <span className="order-form__span">{label}</span>
                <input className="order-form__input" type={type} name={name} onChange={handleChange} placeholder={placeholder} value={value} />
            </label>
        </li>
    );
};

export default CustomInput;