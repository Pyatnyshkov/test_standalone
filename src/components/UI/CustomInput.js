import React from 'react';

export const CustomInput = ({error, setError, label, name, onChange, placeholder, type, value}) => {
    const handleChange = (event) => {
        if(error) setError((prevState) => ({...prevState, [name]: false}))
        onChange(event.target.name, event.target.value);
    }
    const errorClass = error ? 'error__input' : null
    return (
        <li className="list__item">
            <label className="order-form__label">
                <span className="order-form__span">{label}</span>
                <div className={errorClass}>
                    <input
                        className={`order-form__input `} 
                        type={type}
                        name={name} 
                        onChange={handleChange} 
                        placeholder={placeholder} 
                        value={value} 
                    />
                </div>
                {
                    error ? <div className={`required-label`}>Поле обязательно для заполнения</div> : null
                }
            </label>
        </li>
    )
};
