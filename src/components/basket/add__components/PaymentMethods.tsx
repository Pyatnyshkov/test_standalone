import React from 'react';
import I18n from "i18n-js";
import {useAppDispatch, useAppSelector} from "../../../helpers/redux-hooks";
// import {setIsChecked, setIsClosed} from "../../../store/reducers/details";
export const PaymentMethods = () => {
    const dispatch = useAppDispatch()
    const details = useAppSelector(state => state.details)
    return (
        <div className='modal-payment'>
            {/*{*/}
            {/*    details.isClosed ? null :*/}
            {/*        <div*/}
            {/*        className='modal-payment__item'*/}
            {/*        onClick={() => dispatch(setIsChecked(!details.isChecked))}*/}
            {/*    >*/}
            {/*        <div className='modal-payment__logos'>*/}
            {/*            /!* заглушка для лого*!/*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <p>{I18n.t('Payment by card')}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*}*/}
            {/*{details.isChecked&&*/}
            {/*<input/>}*/}
            {/*{*/}
            {/*    details.isChecked ? null :*/}
            {/*        <div*/}
            {/*            className='modal-payment__item'*/}
            {/*            onClick={() => dispatch(setIsClosed(!details.isClosed))}*/}
            {/*        >*/}
            {/*        <div>*/}
            {/*            <p>{I18n.t('Payment with a promo code')}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*}*/}
            {/*{details.isClosed &&*/}
            {/*<input/>*/}
            {/*}*/}

        </div>
    )
}