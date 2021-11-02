import React from 'react';

import I18n from "i18n-js";

interface ISendButton {
    sendState: string,
}

export const SendButton: React.FC<ISendButton> = ({sendState}) => {
    return (
        <div className="send-button-wrapp">
            {
                sendState === 'mail' ? 
                    <button type="submit" className="submit__button">
                        <span className="submit__span">{ I18n.t('Send') }</span>
                    </button> : 
                    <button type="submit" className="submit__button">
                        <span className="submit__span">{ I18n.t('Get') }</span>
                    </button>
            }
        </div>
    )
}