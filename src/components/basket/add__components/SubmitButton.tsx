import React from 'react';
import I18n from "i18n-js";

interface IButton {
    className: string,
    type: "button" | "submit" | "reset" | undefined,
    text: string,
}

export const SubmitButton: React.FC<IButton> = ({className, type, text}) => {
    return (
        <button className={className} type={type}>{I18n.t(text)}</button>
    ) 
}