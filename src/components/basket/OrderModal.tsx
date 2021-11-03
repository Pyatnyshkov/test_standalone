import React, {useState, SyntheticEvent, useEffect } from 'react';

import { AdditionalRadioList } from './add__components/AdditionalRadioList';
import { ModalHeader } from './add__components/ModalHeader';
import { Marking } from './add__components/Marking';
import { Fiscalization } from './add__components/Fiscalization';
import { Documents } from './add__components/Documents';
import { PaymentMethods } from './add__components/PaymentMethods';
import { SubmitButton } from '../UI/SubmitButton';
import { CloseButton } from '../UI/CloseButton';
import { ModalMainInputsList } from './add__components/ModalMainInputsList';

import Validation from '../../helpers/validation';

import '../../media/css/modal.css';

interface IOrderModal {
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
}

export const OrderModal: React.FC<IOrderModal> = ({setActive}) => {
    //* общий стейт модалки 
    const [orderState, setOrderState] = useState({
        typename: 'goods',
        host: '',
        number: '',
        measure: '',
        quantity: null,
        name: '',
        amount: {
            amount: null,
            currency: ''
        },
        clearing: '',
        descr: '',
        ref: '',
        accode: '',
        taxation_system: '',
        taxation_item_type: '',
        taxation_item_settlement_method: '',
        agent_info: {
            type: '',
        },
        supplier_info: {
            name: '',
            inn: '',
            phone: '',
        },
        taxes: [
            {
                attributes: {
                    type: '',
                },
                percentage: '',
                amount: {
                    amount: null,
                    currency: '',
                },
                source: '',
                name: '',
            },
        ],
        documents: [],
        shopref: '',
        marking_info: {
            kt: '',
            exc: '',
            coc: '',
            hed: '',
        },
    });
    //* стейт активности радио (при смене чека, меняется и typename в orderState)
    const [activeRadio, setActiveRadio] = useState('goods');
    //* стейт дополнительных вкладок фискализация/маркировка/документы/способы оплаты
    const [additionRadioState, setAdditionRadioState] = useState('');
    //* стейт ошибок в модальном окне
    const [modalErrors, setModalError] = useState({});

    useEffect(() => {
        //* получение из редакса
        console.log('>>orderState in useEffect', orderState)
    }, [orderState])

    const submitForm = (event: SyntheticEvent) => {
        event.preventDefault();
        //* определяем объект и его ключи для валидации
        const validateObject: any = {}; 
        validateObject.name = orderState.name;
        validateObject.number = orderState.number;

        //* получаем статус валидации и объект ошибок
        const { isValid, errors } = Validation(validateObject);
        setModalError(errors);

        //? проверка валидацией
        //? далее проверяется то, будет ли добавление нового или редактирование относительно ключа
        if (isValid) {
            //* диспатч в редакс
        }
    }

    return (
        <form className="order-form basket-modal" onClick={(e) => e.stopPropagation()} onSubmit={(event) => submitForm(event)}>
            <ModalHeader activeRadio={activeRadio} setActiveRadio={setActiveRadio} orderState={orderState} setOrderState={setOrderState} />
            <div className="scrolling-wrapp">
                <ModalMainInputsList errors={modalErrors} orderState={orderState} setOrderState={setOrderState} />
                <AdditionalRadioList orderState={orderState} setAdditionRadioState={setAdditionRadioState}/>
                
                {
                    additionRadioState === "Fiscalization" ? <Fiscalization orderState={orderState} setOrderState={setOrderState} /> : 
                    additionRadioState === "Marking" ? <Marking orderState={orderState} setOrderState={setOrderState} /> : 
                    additionRadioState === "Documents" ? <Documents orderState={orderState} setOrderState={setOrderState} /> : 
                    additionRadioState === "PaymentMethods" ? <PaymentMethods /> : null
                }
                
                <div className="form-buttons">
                    <SubmitButton className="modal-item__submit" type={'submit'} name={'Save'} />
                    <CloseButton className="close-modal__button" type={'button'} name={'Close'} setActive={setActive} />
                </div>
            </div>
        </form>
    )
}