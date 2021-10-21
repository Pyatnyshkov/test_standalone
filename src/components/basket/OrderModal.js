import React, {forwardRef, useState } from 'react';
import CustomInput from './CustomInput.js';
import { CustomSelect } from './CustomSelect';

export const BasketModal = forwardRef(({active, setActive}, ref) => {
    //!'propState:', 'обращение к редакс, для получения начального стейта айтема и => setOrderState'
    const requiredInputs = ['name', 'number', 'typename'];
    const [orderState, setOrderState] = useState({
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

    // const {editableKey, items} = useSelector(state => state.basket);
    // useEffect(() => {
    //     if (editableKey) {
    //         const editableElem = items[editableKey];
    //         setOrderState(editableElem)
    //     }
    // }, [])

    const [errorState, setErrorState] = useState({
        name: false, 
        number: false, 
        typename: false
    });

    const setData = (name, value) => {
        const newValue = {
            ...orderState,
            [name]: value
        }
        setOrderState(newValue)
    }

    function submitForm(event) {
        event.preventDefault()
        //! ждать редакс метод для обновления стейта айтемов
        //*поиск обязательных ключей orderState и их проверка
        requiredInputs.forEach((item) => {
            if(orderState[item] === '')
                setErrorState((prevState) => ({...prevState, [item]: true}))
        })
        console.log(orderState)
        //? после нажатия на кнопку сохранить и отравки данных сбрасывает поля
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

    return (
        <div ref={ref} className="modal" onClick={() => setActive(false)}>
            <form className="order-form basket-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <label className="modal-header-label">
                        <input className="modal-header__input" defaultChecked name="header-type" type="radio" onChange={() => setData('typename', 'goods')} />
                        <span className="modal-header__span">Товары</span>
                    </label>
                    <label className="modal-header-label">
                        <input className="modal-header__input" name="header-type" type="radio" onChange={() => setData('typename', '')} />
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
                    <button className="order-item__submit" type="submit" onClick={submitForm}>Сохранить</button>
                    <button className="close-modal__button" type="button" onClick={() => setActive(false)}>Закрыть</button>
                </div>
                </div>
            </form>
        </div>
    )
})