import React, {useState, SyntheticEvent } from 'react';

// import { addBasketItem, editBasketItemKey } from '../../store/actions/basket';

import { AdditionalRadioList } from './add__components/AdditionalRadioList';
import { ModalHeader } from './add__components/ModalHeader';
import { Marking } from './add__components/Marking';
import { Fiscalization } from './add__components/Fiscalization';
import { Documents } from './add__components/Documents';
import { PaymentMethods } from './add__components/PaymentMethods';
import { SubmitButton } from './add__components/SubmitButton';
import { CloseButton } from './add__components/CloseButton';
import { ModalMainInputsList } from './add__components/ModalMainInputsList';

interface IOrderModal {
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
}

export const OrderModal: React.FC<IOrderModal> = ({setActive}) => {
    const [orderState, setOrderState] = useState({
        sum: 0,
        ref: '',
        name: '',
        number: '',
        measure: '',
        typename: 'goods',
        host: '',
        clearing: '',
        quantity: 0,
        descr: '',
        accode: '',
        marking_info: {
            kt: '',
            exc: '',
            coc: '',
            hed: '',
        },
        documents: []
    });
    const [activeRadio, setActiveRadio] = useState('goods');
    const [additionRadioState, setAdditionRadioState] = useState('');
    // const keyToEdit = useSelector((state: RootState) => state.basket.editItemKey);
    // const keyToAdd = 'order__item__' + Object.keys(useSelector((state: RootState) => state.basket.items)).length; //* генерируем ключ для нового айтема
    // const editItem = useSelector((state: RootState) => state.basket.items[keyToEdit]); //* достаем айтем для редактирования

    //* при мaунте компонента проверяем наличие ключа редактирования,
    //* при его наличии меняем стейт orderState
    //* если ключа нет, то заново ререндерим ордер до дефолта
    // useEffect(() => {
        // if(keyToEdit) {
            // setOrderState(editItem);
        // }
    // }, [keyToEdit, editItem])

    console.log('>> orderState', orderState);
    console.log('>> additionRadioState', additionRadioState);

    const submitForm = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log('>>submitForm', orderState)
        // const validateFormValue = validateForm();
        //? проверка валидацией
        //? далее проверяется то, будет ли добавление нового или редактирование относительно ключа
        // if(validateFormValue) {
            // if(keyToEdit) {
                // dispatch(addBasketItem(orderState, keyToEdit));
            // } else {
                // dispatch(addBasketItem(orderState, keyToAdd));
                // setOrderState(defaultObject);
                // setActiveRadio('goods');
            // }
        // }
    }

    return (
            <form className="order-form basket-modal" onClick={(e) => e.stopPropagation()} onSubmit={(event) => submitForm(event)}>
                <ModalHeader activeRadio={activeRadio} setActiveRadio={setActiveRadio} orderState={orderState} setOrderState={setOrderState} />
                <div className="scrolling-wrapp">

                    <ModalMainInputsList orderState={orderState} setOrderState={setOrderState} />
                    <AdditionalRadioList orderState={orderState} setAdditionRadioState={setAdditionRadioState}/>
                    
                    {
                        additionRadioState === "Fiscalization" ? <Fiscalization /> : 
                        additionRadioState === "Marking" ? <Marking orderState={orderState} setOrderState={setOrderState} /> : 
                        additionRadioState === "Documents" ? <Documents orderState={orderState} setOrderState={setOrderState} /> : 
                        additionRadioState === "PaymentMethods" ? <PaymentMethods /> : null
                    }
                    
                    <div className="form-buttons">
                        <SubmitButton className="modal-item__submit" type={'submit'} text={'Save'} />
                        <CloseButton className="close-modal__button" type={'button'} text={'Close'} setActive={setActive}/>
                    </div>
                </div>
            </form>
    )
}