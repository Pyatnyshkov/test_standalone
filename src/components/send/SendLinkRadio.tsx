import React from 'react';

interface ISandLinkRadio {
    title: string,
    text: string,
    value: string,
    setSendState: React.Dispatch<React.SetStateAction<string>>,
}

export const SendLinkRadio: React.FC<ISandLinkRadio> = ({title, text, value, setSendState}) => {
    const changeRadioState = (event: { target: HTMLInputElement }) => {
        const value: string = event.target.value;
        setSendState(value);
    }

    return (
        <li className="send__item">
            <label className="send__label">
                <input className="send__input" type="radio" name="send-link-radio" value={value} onChange={changeRadioState} />
                <p className={`send__parag ${value}`}>
                    <span className="send-item__title">{title}</span>
                    <span className="send-item__subtitle">{text}</span>
                </p>
            </label>
        </li>
    )
}