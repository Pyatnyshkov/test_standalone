import React, {useState, useRef, useEffect} from 'react';

import Menu from './components/Menu';
import Header from './components/Header';
import {Order} from './components/Order';
import {Basket} from './components/Basket';
import {Contacts} from './components/Contacts';
import {Send} from './components/Send';

import axios from './utils/API';
import I18n from './i18n/i18n';

import './App.css';

function App(props) {
  const [currentStep, setCurrentstep] = useState(window.location.pathname.slice(1) || 'order');
  const [locale, setLocale] = useState('');

  const orderRef = useRef();
  const basketRef = useRef();
  const contactsRef = useRef();
  const sendRef = useRef();

  const steps = {
    order: orderRef,
    basket: basketRef,
    contacts: contactsRef,
    send: sendRef
  };

  useEffect(() => {
    scrollToStep(currentStep);
    //обработка скролла страницы
    // window.addEventListener('scroll', getPosition);
    //обработка работы со стрелочками в браузере
    window.onpopstate = (e) => {
      const step = e.srcElement.location.pathname.slice(1);
      scrollToStep(step);
    };
    //установка локализации
    I18n.locale = props.language || 'ru';
    I18n.currentLocale();
    setLocale(props.language || 'ru')
  }, []);

  //обработка нажатия навигации
  const handleStep = step => {
    window.history.pushState('', '', '/' + step);
    setCurrentstep(step);
    scrollToStep(step);
  };

  const scrollToStep = step => {
    const position = steps[step].current.getBoundingClientRect().top + window.pageYOffset - 110;
    window.scrollTo({top: position, behavior: 'smooth'});
  };

  const getPosition = () => {
    for (let step in steps) {
      //определяем координаты step
      const pos = steps[step].current.getBoundingClientRect();
      //насколько его край виднеется относительно верха
      const offsetBottom = pos.bottom - window.innerHeight;
      //видимая часть составляет от 0 до 100px
      if ( offsetBottom > 0 && offsetBottom < 100 ) {
        window.history.pushState('', '', '/' + step);
        setCurrentstep(step);
      }
    }
  };

  return (
    <div className="register_page">
      <Menu 
        handleStep={handleStep} 
        step={currentStep}
        show_send={props.show_send || true}
      />
      <div className="main_page">
        <Header step={currentStep} />
        <div className="content_container">
          <div className="content">
            <Order ref={orderRef} />
            <Basket ref={basketRef} />
            <Contacts ref={contactsRef} />
            <Send ref={sendRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
