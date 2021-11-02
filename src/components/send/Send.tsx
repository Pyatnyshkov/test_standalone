import React, { forwardRef, useState } from 'react';
import { SendLinkRadio } from './SendLinkRadio';

import I18n from "i18n-js";

import '../../media/css/send.css';

export const Send = forwardRef((props, ref: any) => {
    const [sendState, setSendState] = useState(null);

    return (
        <div ref={ref} className="send content__elem">
            <span className="title send__title">{ I18n.t('Send options') }</span>
            <ul className="send-list">
                <SendLinkRadio title={ I18n.t('Mail') } text={ I18n.t('Send link on email') } value={'mail'} sendState={sendState} />
                <SendLinkRadio title={ I18n.t('Link') } text={ I18n.t('Get link') } value={'link'} sendState={sendState} />
            </ul>
        </div>
    )
})