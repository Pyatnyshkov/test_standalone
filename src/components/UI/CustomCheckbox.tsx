import React from 'react';

interface ICustomCheckbox {
    error?: boolean,
    setError?: any,
    label: string,
    name: string,
    value: string | number,
    onChange: (name: string, value: string | number) => void,
}
type ErrorClassType = string | undefined
const CustomCheckbox: React.FC<ICustomCheckbox> =
    ({
         error,
         setError,
         label,
         value,
         onChange,
         name
    }) => {

        const errorClass: ErrorClassType = error ? 'error__input' : undefined;

        const handleChange = (event: { target: HTMLInputElement }) => {
            const target = event.target;
            onChange(target.name, target.value);
        }
    return (
        <li className="list__item">
            <label className="modal-form__label">
                <span className="modal-form__span">{label}</span>
                <div className={errorClass}>
                    <input
                        className="modal-form__checkbox"
                        type='checkbox'
                        name={name}
                        onChange={handleChange}
                        value={value}
                    />
                </div>
                {
                    error ? <div className={`required-label`}>{error}</div> : null
                }
            </label>
        </li>
    );
};

export default CustomCheckbox;