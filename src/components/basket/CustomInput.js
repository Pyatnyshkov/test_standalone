import React from 'react';

const CustomInput = ({error, setError, label, name, onChange, placeholder, type, value}) => {
    const handleChange = (event) => {
        if(error) setError((prevState) => ({...prevState, [name]: false}))
        onChange(event.target.name, event.target.value);
    }
    const errorClass = error ? 'error' : null
    return (
        <li className="list__item">
            <label className="order-form__label">
                <span className="order-form__span">{label}</span>
                <input
                    className={`order-form__input ${errorClass}`} 
                    type={type}
                    name={name} 
                    onChange={handleChange} 
                    placeholder={placeholder} 
                    value={value} 
                />
                {
                    error ? <div className='required-label error'>error</div> : null
                }
            </label>
        </li>
    )
};

export default CustomInput;