import React, {forwardRef, useEffect, useState } from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { addBasketItem, editBasketItemKey } from '../../store/actions/basket';

import { CustomInput } from '../UI/CustomInput';
import { CustomSelect } from '../UI/CustomSelect';

//! дефолтный объект для сброса объекта после сабмита
const defaultObject = {
    sum: 15000,
    ref: '',
    name: '',
    number: '',
    measure: '',
    host: '',
    clearing: '',
    quantity: '',
    descr: '',
    accode: '',
    typename: 'goods',
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

export const OrderModal = forwardRef(({setActive}, ref) => {
    const dispatch = useDispatch();
    const [activeRadio, setActiveRadio] = useState('goods');
    const requiredInputs = ['name', 'number', 'typename'];
    const keyToEdit = useSelector(state => state.basket.editItemKey);
    const keyToAdd = 'order__item__' + Object.keys(useSelector(state => state.basket.items)).length || 0; //* генерируем ключ для нового айтема
    const editItem = useSelector(state => state.basket.items[keyToEdit]); //* достаем айтем для редактирования

    //* при моунте компонента проверяем наличие ключа редактирования,
    //* при его наличии меняем стейт orderState
    //* если ключа нет, то заново ререндерим ордер до дефолта
    useEffect(() => {
        if(keyToEdit) {
            setOrderState(editItem);
        } else {
            setOrderState(defaultObject)
        }
    }, [keyToEdit])

    const [orderState, setOrderState] = useState({
        sum: 15000,
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

    //! обработка ошибок и их состояние (в пн будем думать об его реализации)
    const [errorState, setErrorState] = useState({
        name: false, 
        number: false,
        typename: false,
    });

    //? смена стейта onChange у инпутов
    const setData = (name, value) => {
        const newValue = {
            ...orderState,
            [name]: value
        }
        setOrderState(newValue)
    }

    //? при смене радио меняется стейт радио и 'typename'
    const changeRadio = (name, value) => {
        const newValue = {
            ...orderState,
            [name]: value
        }
        setOrderState(newValue)
        setActiveRadio(value)
    }

    //? функция валидации (если возвращает true, то отправляется объект в редакт)
    function validateForm() {
        const filterArray = requiredInputs.filter((item) => {
            if(orderState[item] === '') {
                setErrorState((prevState) => ({...prevState, [item]: true}))
            }
            return orderState[item] === ''
        })
        return filterArray.length ? false : true
    }

    function submitForm(event) {
        event.preventDefault()
        const validateFormValue = validateForm();
        //? проверка валидацией
        //? далее проверяется то, будет ли добавление нового или редактирование относительно ключа
        if(validateFormValue) {
            if(keyToEdit) {
                dispatch(addBasketItem(orderState, keyToEdit));
            } else {
                dispatch(addBasketItem(orderState, keyToAdd));
                setOrderState(defaultObject);
                setActiveRadio('goods');
            }
            toDefault()
        }
    }

    function toDefault() {
        dispatch(editBasketItemKey(null))
        setActive(false);
    }

    return (
        <div ref={ref} className="modal" onClick={() => toDefault()}>
            <form className="order-form basket-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <label className="modal-header-label">
                        <input className="modal-header__input" checked={activeRadio === 'goods' ? true : false} name="header-type" type="radio" onChange={() => changeRadio('typename', 'goods')} />
                        <span className="modal-header__span">Товары</span>
                    </label>
                    <label className="modal-header-label">
                        <input className="modal-header__input" checked={activeRadio === 'goods' ? false : true} name="header-type" type="radio" onChange={() => changeRadio('typename', '')} />
                        <span className="modal-header__span">Услуги</span>
                    </label>
                </div>
                <div className="scrolling-wrapp">
                    <ul className="order-input-list">
                    <CustomInput name={'ref'} value={orderState.ref} label={'ID'} type={'text'} onChange={setData} />
                    <CustomInput name={'name'} error={errorState.name} setError={setErrorState} value={orderState.name} label={'Название'} type={'text'} onChange={setData} />
                    <CustomInput name={'number'} error={errorState.number} setError={setErrorState} value={orderState.number} label={'Номер'} type={'text'} onChange={setData} />
                    <CustomSelect name={'measure'} value={orderState.measure} label={'Единица измерения'} options={measureOptions} onChange={setData} /> 
                    { 
                        orderState.typename === 'goods' ? 
                            '' : <CustomSelect name={'typename'} error={errorState.typename} setError={setErrorState} label={'Категория'} options={typenameOptions} onChange={setData}/> 
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
                    <div className="addition-buttons">
                        <button type="button" className="addition__button">Фискализация</button>
                        <button type="button" className="addition__button">Маркировка</button>
                        <button type="button" className="addition__button">Документы</button>
                        <button type="button" className="addition__button">Способы оплаты</button>
                    </div>
                    <div className="form-buttons">
                    <button 
                        className="order-item__submit" 
                        type="submit" 
                        disabled={Object.values(errorState).includes(true)}
                        onClick={submitForm} >Сохранить</button>
                    <button 
                        className="close-modal__button" 
                        type="button" 
                        onClick={() => toDefault()}>Закрыть</button>
                </div>
                </div>
            </form>
        </div>
    )
})