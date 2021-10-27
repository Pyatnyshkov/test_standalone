import React from 'react';
import I18n from "i18n-js";

interface IButton {
    className: string,
    type: "button" | "submit" | "reset" | undefined,
    text: string,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const CloseButton: React.FC<IButton> = ({className, type, text, setActive}) => {
    return (
        <button className={className} type={type} onClick={() => setActive(false)}>{I18n.t(text)}</button>
    ) 
}