import React, {useEffect, useState, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';

import I18n from "i18n-js";

// import { addBasketItem, editBasketItemKey } from '../../store/actions/basket';

import { CustomInput } from '../UI/CustomInput';
import { CustomSelect } from '../UI/CustomSelect';

interface IOrderModal {
    setActive: any,
}

export const OrderModal: React.FC<IOrderModal> = ({setActive}) => {
    const [activeRadio, setActiveRadio] = useState('goods');
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

    const [orderState, setOrderState] = useState({
        sum: 0,
        ref: '',
        name: '',
        number: '',
        measure: '',
        typename: 'goods',
        host: '',
        clearing: '',
        quantity: '',
        descr: '',
        accode: '',
    });

    console.log('>> orderState', orderState)


    //? смена стейта onChange у инпутов
    const setData = (name: string, value: string | number) => {
        const newValue = {
            ...orderState,
            [name]: value
        }
        setOrderState(newValue)
    }

    //? при смене радио меняется стейт радио и 'typename'
    const changeRadio = (name: string, value: string) => {
        const newValue = {
            ...orderState,
            [name]: value
        }
        setOrderState(newValue)
        setActiveRadio(value)
    }



    const submitForm = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(event)
        console.log(orderState)
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
                <div className="modal-header">
                    <label className="modal-header-label">
                        <input className="modal-header__input" checked={activeRadio === 'goods'} name="header-type" type="radio" onChange={() => changeRadio('typename', 'goods')} />
                        <span className="modal-header__span">{I18n.t("Goods")}</span>
                    </label>
                    <label className="modal-header-label">
                        <input className="modal-header__input" checked={activeRadio !== 'goods'} name="header-type" type="radio" onChange={() => changeRadio('typename', '')} />
                        <span className="modal-header__span">{I18n.t("Service")}</span>
                    </label>
                </div>
                <div className="scrolling-wrapp">
                    <ul className="order-input-list">
                        <CustomInput name={'ref'} value={orderState.ref} label={'ID'} type={'text'} onChange={setData} />
                        <CustomInput name={'name'} value={orderState.name} label={'Название'} type={'text'} onChange={setData} />
                        <CustomInput name={'number'} value={orderState.number} label={'Номер'} type={'text'} onChange={setData} />
                        <CustomSelect name={'measure'} label={'Единица измерения'} options={measureOptions} onChange={setData} /> 
                        { 
                            orderState.typename === 'goods' ? 
                                '' : <CustomSelect name={'typename'} label={'Категория'} options={typenameOptions} onChange={setData}/> 
                        }
                        <CustomSelect name={'host'} label={'Провайдер'} options={hostOptions} onChange={setData} /> 
                        <CustomSelect name={'clearing'} label={'Клиринг'} options={clearingOptions} onChange={setData} /> 
                        <CustomInput name={'quantity'} value={orderState.quantity} label={'Количество'} type={'number'} onChange={setData} />
                        <CustomInput name={'descr'} value={orderState.descr} label={'Описание'} type={'textarea'} onChange={setData} />
                        {
                            orderState.host === 'sirena' ? 
                                <CustomInput name={'accode'} value={orderState.accode} label={'Код перевозчика'} type={'text'} onChange={setData} /> : ''
                        }
                    </ul>
                    <div className="addition-radio">
                        <label className="addition-label">
                            <span className="addition__span">{I18n.t("Fiscalization")}</span>
                            <input type="radio" name="addition" value="Fiscalization"/>
                        </label>
                        <label className="addition-label">
                            <span className="addition__span">{I18n.t("Marking")}</span>
                            <input type="radio" name="addition" value="Marking"/>
                        </label>
                        <label className="addition-label">
                            <span className="addition__span">{I18n.t("Documents")}</span>
                            <input type="radio" name="addition" value="Documents"/>
                        </label>
                        <label className="addition-label">
                            <span className="addition__span">{I18n.t("Payment methods")}</span>
                            <input type="radio" name="addition" value="PaymentMethods"/>
                        </label>
                    </div>
                    <div className="form-buttons">
                        <button 
                            className="order-item__submit" 
                            type="submit" 
                            >{I18n.t("Save")}</button>
                        <button 
                            className="close-modal__button" 
                            type="button" 
                            onClick={() => setActive(false)}>{I18n.t("Close")}</button>
                    </div>
                </div>
            </form>
    )
}

//!тестовые данные для селектов
const measureOptions = [
    { value: 'centimeter', label: 'Сантиметр' },
    { value: 'meter', label: 'Метр' },
    { value: 'millimeter', label: 'Миллиметр' },
]

const typenameOptions = [
    {value: 'cat_1', label: 'Категория 1'},
    {value: 'cat_2', label: 'Категория 2'},
    {value: 'cat_3', label: 'Категория 3'},
]

const hostOptions = [
    {value: 'sirena', label: 'Сирена'},
    {value: 'sirena_2', label: 'Сирена 2'},
    {value: 'sirena_3', label: 'Сирена 3'},
]

const clearingOptions = [
    {value: 'clearing_1', label: 'Клиринг 1'},
    {value: 'clearing_2', label: 'Клиринг 2'},
    {value: 'clearing_3', label: 'Клиринг 3'},
]