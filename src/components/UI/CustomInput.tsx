import React from 'react';

type ErrorClassType = string | undefined;
interface ICustomInput {
    error?: boolean, 
    setError?: any,
    label: string, 
    name: string,
    onChange: (name: string, value: string | number) => void, 
    type: string, 
    value: string | number,
};

export const CustomInput: React.FC<ICustomInput> = ({error, setError, label, name, onChange, type, value}) => {
    const errorClass: ErrorClassType = error ? 'error__input' : undefined;
    const handleChange = (event: { target: HTMLInputElement }) => {
        const target = event.target;
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
        onChange(target.name, target.value);
    }

    return (
        <li className="list__item">
            <label className="list__label">
                <span className="list__span">{label}</span>
                <div className={errorClass}>
                    <input
                        className="list__input"
                        type={type}
                        name={name} 
                        onChange={handleChange} 
                        value={value} 
                    />
                </div>
                {
                    error ? <div className={`required__label`}>{error}</div> : null
                }
            </label>
        </li>
    )
};
