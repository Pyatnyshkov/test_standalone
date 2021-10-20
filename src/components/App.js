import React, {useRef, useEffect} from 'react';

import Menu from './Menu';
import Header from './Header';
import {Order} from './Order';
import {Basket} from './Basket';
import {Customer} from './Customer';
import {Send} from './Send';

import {useDispatch, useSelector} from 'react-redux';
import {setLanguage, setStep, setSendStep} from '../store/actions/app';

import axios from '../utils/API';
import I18n from 'i18n-js';
import ru from '../i18n/ru.json';
import en from '../i18n/en.json';

import '../App.css';

function App(props) {
  const dispatch = useDispatch();
  const { currentStep } = useSelector(state => state.app);

  const orderRef = useRef();
  const basketRef = useRef();
  const customerRef = useRef();
  const sendRef = useRef();

  const steps = {
    order: orderRef,
    basket: basketRef,
    customer: customerRef,
    send: sendRef
  };

  useEffect(() => {
    dispatch(setSendStep(props.show_send || true));
    scrollToStep(currentStep);
    window.history.pushState('', '', '/' + currentStep);
  }, []);

  useEffect(() => {
    //обработка работы со стрелочками в браузере
    window.addEventListener('popstate', (e) => {
      const step = e.srcElement.location.pathname.slice(1);
      scrollToStep(step);
    });
    window.addEventListener('scroll', getPosition);
    return () => window.removeEventListener('scroll', getPosition);
  });

  useEffect(() => {
    //установка локализации
    I18n.translations["en"] = en;
    I18n.translations["ru"] = ru;
    I18n.locale = props.language || 'ru';
    I18n.currentLocale();
    dispatch(setLanguage(props.language || 'ru'));
  }, [props.language]);

  //обработка нажатия навигации
  const handleStep = step => {
    window.history.pushState('', '', '/' + step);
    scrollToStep(step);
  };

  const scrollToStep = step => {
    const position = steps[step].current.getBoundingClientRect().top + window.pageYOffset - 110;
    window.scrollTo({top: position});
  };

  const getPosition = () => {
    for (let step in steps) {
      const pos = steps[step].current.getBoundingClientRect();
      const height = steps[step].current.offsetHeight;
      const offsetBottom = pos.bottom - height;
      if ( offsetBottom > 0 && offsetBottom < 120 && step !== currentStep) {
        dispatch(setStep(step));
        window.history.scrollRestoration = 'manual';
        window.history.replaceState('', '', '/' + step);
      }
    }
  };

  return (
    <div className="register_page">
      <Menu handleStep={handleStep} />
      <div className="main_page">
        <Header />
        <div className="content_container">
          <div className="content">
            <Order ref={orderRef} />
            <Basket ref={basketRef} />
            <Customer ref={customerRef} />
            <Send ref={sendRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
