import React from 'react';
import I18n from "i18n-js";

interface IModalHeader {
    activeRadio: string,
    setActiveRadio: React.Dispatch<React.SetStateAction<string>>,
    orderState: object,
    setOrderState: React.Dispatch<React.SetStateAction<any>>,
}

export const ModalHeader: React.FC<IModalHeader> = ({activeRadio, setActiveRadio, orderState, setOrderState}) => {
    const changeRadio = (event: { target: HTMLInputElement }) => {
        const value = event.target.value;
        const newValue = {
            ...orderState,
            typename: value
        }
        setOrderState(newValue)
        setActiveRadio(value)
    }

    return (
        <div className="modal-header">
            <label className="modal-header-label">
                <input 
                    className="modal-header__input" 
                    checked={activeRadio === 'goods'} 
                    name="header-type" 
                    value="goods" 
                    type="radio" 
                    onChange={changeRadio} 
                />
                <span className="modal-header__span">{I18n.t("Goods")}</span>
            </label>
            <label className="modal-header-label">
                <input 
                    className="modal-header__input" 
                    checked={activeRadio !== 'goods'} 
                    name="header-type" 
                    value="" 
                    type="radio" 
                    onChange={changeRadio} 
                />
                <span className="modal-header__span">{I18n.t("Service")}</span>
            </label>
        </div>
    )
}