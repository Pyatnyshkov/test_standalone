import React from 'react';

interface ISandLinkRadio {
    title: string,
    text: string,
    value: string,
    sendState: string | null,
}

export const SendLinkRadio: React.FC<ISandLinkRadio> = ({title, text, value, sendState}) => {
    return (
        <li className="send__item">
            <label className="send__label">
                <input className="send__input" type="radio" name="send-link-radio" value={value} />
                <p className={`send__parag ${value}`}>
                    <span className="send-item__title">{title}</span>
                    <span className="send-item__subtitle">{text}</span>
                </p>
            </label>
        </li>
    )
}